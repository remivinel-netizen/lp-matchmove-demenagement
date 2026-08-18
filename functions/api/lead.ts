/**
 * Cloudflare Pages Function — proxy vers le webhook Make.
 * L'URL du webhook reste côté serveur (variable d'environnement MAKE_WEBHOOK_URL),
 * ce qui évite de l'exposer dans le bundle client et supprime tout souci de CORS.
 *
 * Reprise durcie de la Function du projet Débarras :
 * - taille contrôlée via Content-Length AVANT lecture du corps
 * - longueur de chaque champ plafonnée avant toute regex (anti-ReDoS)
 * - regex email non ambiguë (complexité linéaire)
 * - _t et _hp obligatoires (anti-spam non contournable par omission)
 * - payload reconstruit par allowlist : rien d'arbitraire ne part vers Make
 */

interface Env {
  MAKE_WEBHOOK_URL?: string;
}

/* Champs texte obligatoires du tunnel déménagement.
   Doit rester aligné sur quoteForm.steps[].fields dans src/data/content.ts. */
const REQUIRED_FIELDS = [
  'type_logement',
  'volume',
  'cp_depart',
  'cp_arrivee',
  'etage_depart',
  'ascenseur_depart',
  'acces_camion',
  'date_demenagement',
  'formule',
  'prenom',
  'nom',
  'telephone',
  'email',
  'contact_prefere',
] as const;

const META_KEYS = [
  'page_url',
  'referrer',
  'user_agent',
  'submitted_at',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'utm_id',
  'gclid',
  'gbraid',
  'wbraid',
  'fbclid',
  'msclkid',
  'ttclid',
  'li_fat_id',
  'landing_page',
  'first_referrer',
] as const;

const LONG_META = new Set(['page_url', 'referrer', 'user_agent', 'landing_page', 'first_referrer']);

const MIN_FILL_MS = 3000;
const MAX_BODY_BYTES = 20_000;
const MAX_FIELD_CHARS = 254;

/* Regex non ambiguë : le point est exclu des classes répétées, pas de backtracking quadratique. */
const EMAIL_RE = /^[^\s@]{1,64}@[^\s@.]+(?:\.[^\s@.]+)+$/;

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });

const str = (value: unknown, max = 200): string =>
  typeof value === 'string' ? value.slice(0, max) : '';

/* Neutralise l'injection de formule tableur en aval (Sheets/Excel via Make). */
const noFormula = (value: string): string => value.replace(/^[\s=+@]+/, '');

export const onRequest: PagesFunction<Env> = async ({ request, env }) => {
  if (request.method !== 'POST') {
    return json({ ok: false, error: 'method_not_allowed' }, 405);
  }

  if (!request.headers.get('content-type')?.includes('application/json')) {
    return json({ ok: false, error: 'unsupported_media_type' }, 415);
  }

  // Refus AVANT de bufferiser le corps.
  const contentLength = Number(request.headers.get('content-length'));
  if (!Number.isFinite(contentLength) || contentLength <= 0) {
    return json({ ok: false, error: 'length_required' }, 411);
  }
  if (contentLength > MAX_BODY_BYTES) {
    return json({ ok: false, error: 'payload_too_large' }, 413);
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) {
    return json({ ok: false, error: 'payload_too_large' }, 413);
  }

  let body: Record<string, unknown>;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (parsed === null || typeof parsed !== 'object' || Array.isArray(parsed)) {
      return json({ ok: false, error: 'invalid_json' }, 400);
    }
    body = parsed as Record<string, unknown>;
  } catch {
    return json({ ok: false, error: 'invalid_json' }, 400);
  }

  // Anti-spam : honeypot et horodatage OBLIGATOIRES (l'omission vaut rejet).
  if (typeof body._hp !== 'string' || body._hp.trim() !== '') {
    return json({ ok: false, error: 'spam' }, 400);
  }
  const startedAt = body._t;
  if (typeof startedAt !== 'number' || !Number.isFinite(startedAt) || startedAt <= 0) {
    return json({ ok: false, error: 'spam' }, 400);
  }
  if (Date.now() - startedAt < MIN_FILL_MS) {
    return json({ ok: false, error: 'too_fast' }, 400);
  }

  // Champs obligatoires : présents, non vides, longueur plafonnée avant toute regex.
  const missing: string[] = [];
  for (const field of REQUIRED_FIELDS) {
    const value = body[field];
    if (typeof value !== 'string' || value.trim() === '') missing.push(field);
    else if (value.length > MAX_FIELD_CHARS) {
      return json({ ok: false, error: 'field_too_long', field }, 400);
    }
  }
  if (missing.length) {
    return json({ ok: false, error: 'missing_fields', fields: missing }, 400);
  }

  /* `options` est facultatif : on accepte l'absence ou un tableau vide, mais on
     refuse tout ce qui n'est pas un tableau de chaînes courtes. */
  const rawOptions = body.options ?? [];
  if (
    !Array.isArray(rawOptions) ||
    rawOptions.length > 10 ||
    !rawOptions.every((v) => typeof v === 'string' && v.length <= 60)
  ) {
    return json({ ok: false, error: 'invalid_options' }, 400);
  }

  const email = (body.email as string).trim();
  if (!EMAIL_RE.test(email)) {
    return json({ ok: false, error: 'invalid_email' }, 400);
  }
  if (!/^\d{5}$/.test(body.cp_depart as string)) {
    return json({ ok: false, error: 'invalid_postal_code', field: 'cp_depart' }, 400);
  }
  if (!/^\d{5}$/.test(body.cp_arrivee as string)) {
    return json({ ok: false, error: 'invalid_postal_code', field: 'cp_arrivee' }, 400);
  }
  if ((body.telephone as string).replace(/\D/g, '').length < 9) {
    return json({ ok: false, error: 'invalid_phone' }, 400);
  }

  if (!env.MAKE_WEBHOOK_URL) {
    console.error('[lead] MAKE_WEBHOOK_URL non configurée');
    return json({ ok: false, error: 'webhook_not_configured' }, 500);
  }

  // Payload reconstruit par allowlist : aucune clé arbitraire ne part vers Make.
  const bodyMeta =
    body.meta && typeof body.meta === 'object' && !Array.isArray(body.meta)
      ? (body.meta as Record<string, unknown>)
      : {};

  const payload = {
    type_logement: str(body.type_logement, 50),
    volume: str(body.volume, 50),
    cp_depart: str(body.cp_depart, 5),
    cp_arrivee: str(body.cp_arrivee, 5),
    etage_depart: str(body.etage_depart, 50),
    ascenseur_depart: str(body.ascenseur_depart, 20),
    acces_camion: str(body.acces_camion, 20),
    date_demenagement: str(body.date_demenagement, 50),
    formule: str(body.formule, 80),
    options: (rawOptions as string[]).slice(0, 10),
    prenom: noFormula(str(body.prenom, 100).trim()),
    nom: noFormula(str(body.nom, 100).trim()),
    telephone: str(body.telephone, 30).trim(),
    email,
    whatsapp: str(body.whatsapp, 30).trim(),
    contact_prefere: str(body.contact_prefere, 20),
    meta: {
      ...Object.fromEntries(
        META_KEYS.map((key) => [key, str(bodyMeta[key], LONG_META.has(key) ? 600 : 200)]),
      ),
      ip: request.headers.get('CF-Connecting-IP') ?? '',
      country: (request as { cf?: { country?: string } }).cf?.country ?? '',
      received_at: new Date().toISOString(),
    },
  };

  let upstream: Response;
  try {
    upstream = await fetch(env.MAKE_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error('[lead] webhook injoignable', error);
    return json({ ok: false, error: 'webhook_unreachable' }, 502);
  }

  if (!upstream.ok) {
    console.error('[lead] webhook en erreur', upstream.status, await upstream.text());
    return json({ ok: false, error: 'webhook_error' }, 502);
  }

  return json({ ok: true });
};
