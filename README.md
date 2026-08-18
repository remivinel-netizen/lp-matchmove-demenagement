# LP MatchMove Déménagement

Landing page de génération de leads pour l'offre **déménagement** de MatchMove.
Astro 7 en sortie statique, déployable sur Cloudflare Pages.

Structure et design system repris de `lp-matchmove-debarras`, contenu adapté à
partir de [matchmove.fr](https://matchmove.fr/).

## Démarrer

```bash
npm install
npm run dev        # http://localhost:4321
```

| Commande            | Effet                                        |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Serveur de dev Astro                          |
| `npm run build`     | Build statique dans `dist/`                   |
| `npm run preview`   | Prévisualise le build                         |
| `npm run cf:preview`| Build + `wrangler pages dev dist`             |

## Pages

| Route     | Rôle                                                                 |
| --------- | -------------------------------------------------------------------- |
| `/`       | LP complète : hero, formulaire, process, avantages, services, avis, FAQ |
| `/v2`     | Variante conversion-first (formulaire dans le hero, prix, garanties). `noindex` |
| `/merci`  | Page de confirmation — sert de signal de conversion. `noindex`        |
| `/404`    | Page d'erreur                                                         |

## Contenu

Tout le texte vit dans **`src/data/content.ts`**. Aucun contenu n'est écrit en
dur dans les composants (à part quelques libellés de la page `/merci`).
Les blocs marqués `⚠ À VALIDER` doivent être confirmés par MatchMove avant
mise en ligne :

- les **fourchettes de prix** de la page `/v2` (`v2.pricing`) ;
- les **garanties** (`v2.guarantees`), notamment les modalités d'assurance ;
- les **avis clients**, à re-vérifier sur la page Trustpilot MatchMove ;
- l'incohérence d'horaires présente sur matchmove.fr : la bannière annonce un
  « service client disponible 7/7 » alors que la FAQ indique « du lundi au
  samedi de 8h à 18h ».

## Formulaire de devis

Tunnel en 4 étapes, défini dans `quoteForm` (`src/data/content.ts`) :

1. **Votre logement** — type de bien, taille (studio → T5+)
2. **Départ & arrivée** — codes postaux, étage, ascenseur, accès camion
3. **Date & formule** — échéance, formule, prestations complémentaires
4. **Contact & validation** — coordonnées, canal de contact préféré

Ajouter ou déplacer un champ se fait uniquement dans `quoteForm` ; le rendu, la
validation et la navigation s'adaptent automatiquement.

> ⚠️ **Le lead n'est envoyé nulle part pour l'instant.** Le tunnel est
> fonctionnel de bout en bout (validation, honeypot, tracking UTM, redirection
> vers `/merci`), mais l'appel réseau est neutralisé : le payload est
> simplement affiché dans la console.

### Brancher l'envoi des leads

1. Créer `functions/api/lead.ts` (Cloudflare Pages Function) qui relaie le
   payload JSON vers le webhook Make.
2. Déclarer le secret `MAKE_WEBHOOK_URL` dans Cloudflare Pages
   (*Settings → Variables and Secrets*, Production **et** Preview), et dans
   `.dev.vars` en local.
3. Dans `src/components/QuoteForm.astro`, remplacer `const LEAD_ENDPOINT = null`
   par `'/api/lead'`.

Le projet `lp-matchmove-debarras` contient une implémentation de référence.

## Non installé volontairement

| Brique                     | Où la brancher                                  |
| -------------------------- | ------------------------------------------------ |
| API lead / webhook Make    | `functions/api/lead.ts` + `QuoteForm.astro`      |
| Personnalisation géo       | `functions/_middleware.ts` (attributs `data-geo` déjà en place dans `HeroV2` et `TrustBand`) |
| GTM, Clarity, CMP          | `src/layouts/Base.astro` (emplacement commenté)  |

Les événements `dataLayer` (`form_step`, `lead_submitted`) sont déjà émis : ils
seront captés dès qu'un conteneur GTM sera installé.

## Assets

`public/assets/` est repris du projet Débarras. À remplacer avant mise en ligne :

- `hero.jpg` et `services.jpg` — visuels déménagement
- `form/*.png` — icônes du formulaire (appartement, maison, local, autres sont réutilisables)
- `partners/*.png` — à confirmer pour l'offre déménagement
