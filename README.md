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

Le formulaire envoie le lead à `POST /api/lead`, une Cloudflare Pages Function
(`functions/api/lead.ts`) qui le valide puis le relaie vers un webhook Make.
L'URL du webhook reste côté serveur : elle n'apparaît jamais dans le bundle
client, et il n'y a aucun souci de CORS.

### Mise en service

Le secret **`MAKE_WEBHOOK_URL`** doit être déclaré dans Cloudflare Pages
(*Settings → Variables and Secrets*), en **Production et en Preview** :

```
MAKE_WEBHOOK_URL = https://hook.eu2.make.com/xxxxxxxxxxxx
```

Sans lui, `/api/lead` renvoie `500 webhook_not_configured` et le formulaire
affiche son message d'erreur avec le numéro de téléphone. En local, copier
`.dev.vars.example` en `.dev.vars` (ignoré par git) puis lancer
`npm run cf:preview`.

### Ce que la Function contrôle

- corps rejeté sur `Content-Length` **avant** d'être bufferisé (20 Ko max)
- honeypot `_hp` et horodatage `_t` obligatoires ; soumission en moins de
  3 secondes rejetée
- champs obligatoires présents et plafonnés en longueur avant toute regex
- email, codes postaux de départ et d'arrivée (5 chiffres), téléphone
  (9 chiffres minimum)
- payload reconstruit par **allowlist** : aucune clé arbitraire ne part vers
  Make, et les valeurs commençant par `=`, `+` ou `@` sont neutralisées
  (injection de formule tableur)

Cloudflare ajoute `ip`, `country` et `received_at` ; `_hp` et `_t` ne sont pas
transmis à Make.

> Ajouter un champ obligatoire au formulaire implique de l'ajouter aussi à
> `REQUIRED_FIELDS` **et** au `payload` dans `functions/api/lead.ts`, sinon il
> ne remontera pas dans Make.

## Tracking & consentement

Tout se passe dans le `<head>` de `src/layouts/Base.astro`, dans cet ordre — qui
n'est pas négociable :

1. **Consent defaults** — tout est `denied` sauf `security_storage`, avec
   `wait_for_update: 500`. Doit précéder le CMP.
2. **Microsoft Clarity** (`y4bv41o568`, projet dédié à cette LP) — le snippet
   n'est *pas* posé en direct. Un intercepteur sur `dataLayer.push` attend un
   `gtag('consent','update', { analytics_storage: 'granted' })` avant de charger
   le tag. Pas de consentement, pas d'enregistrement de session.
3. **CMP IwlCMP** (`rhj25avk`, site « Matchmove demenagement ») — injecté
   seulement si la constante `CMP_SITE_ID` est renseignée en haut du fichier.
   Vider cette constante désactive CMP et Clarity d'un seul geste.
4. **GTM** — pas encore installé.

> ⚠️ **Domaines autorisés.** Le portail IwlCMP n'accepte les preuves de
> consentement que depuis les domaines déclarés — actuellement
> `lp-matchmove-demenagement.pages.dev`, qui couvre aussi les déploiements de
> preview. À la bascule sur un domaine définitif, penser à l'ajouter côté
> portail. Le champ « domaine du cookie » est volontairement vide : `.pages.dev`
> figure sur la Public Suffix List, les navigateurs y refusent tout cookie.

Les scripts portent `is:inline` : Astro les laisse en place au lieu de les
regrouper et de les différer, ce qui préserve l'ordre d'exécution.

### Événements dataLayer déjà émis

| Événement        | Quand                                    |
| ---------------- | ---------------------------------------- |
| `form_step`      | à chaque étape du tunnel (`step: 1..4`)  |
| `lead_submitted` | à la soumission réussie                  |

Ils partent déjà dans `window.dataLayer` et seront captés dès qu'un conteneur
GTM sera en place. La page `/merci` sert de signal de conversion (page vue) pour
Google Ads.

## Non installé volontairement

| Brique                | Où la brancher                                    |
| --------------------- | -------------------------------------------------- |
| Personnalisation géo  | `functions/_middleware.ts` (attributs `data-geo` déjà en place dans `HeroV2` et `TrustBand`) |
| GTM                   | `src/layouts/Base.astro` (emplacement commenté) + `<noscript>` en début de `<body>` |

Les événements `dataLayer` (`form_step`, `lead_submitted`) sont déjà émis : ils
seront captés dès qu'un conteneur GTM sera installé.

## Assets

`public/assets/` est repris du projet Débarras. À remplacer avant mise en ligne :

- `hero.jpg` et `services.jpg` — visuels déménagement
- `form/*.png` — icônes du formulaire (appartement, maison, local, autres sont réutilisables)
- `partners/*.png` — à confirmer pour l'offre déménagement

`logo.png` a été refait à partir du logo Débarras : monogramme et « MATCHMOVE »
repris tels quels, ligne du bas recomposée en **Outfit Bold**, calée sur la
largeur exacte de « MATCHMOVE ». Sans accents, comme le faisait le logo
d'origine. À remplacer si MatchMove fournit un logo officiel.
`favicon.png` est le monogramme seul, sans texte : rien à changer.
