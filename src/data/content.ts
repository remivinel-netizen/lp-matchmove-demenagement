/* ==========================================================================
   LP MatchMove Déménagement — contenu centralisé
   Source des textes : https://matchmove.fr/ (offre, process, FAQ, chiffres)
   Structure reprise de la LP MatchMove Débarras.

   ⚠ Les blocs marqués "À VALIDER" contiennent des éléments (prix, garanties,
   horaires) à faire confirmer par MatchMove avant mise en ligne.
   ========================================================================== */

export const site = {
  name: 'MatchMove',
  title: 'Déménagement : trouvez un déménageur au meilleur prix | Devis gratuit en 1h — MatchMove',
  description:
    "MatchMove trouve le déménageur qu'il vous faut, près de chez vous et au meilleur prix : devis gratuit en 1 heure, plus de 1000 partenaires déménageurs sélectionnés, 97% de clients satisfaits.",
  phone: '+33 4 51 42 04 47',
  phoneHref: 'tel:+33451420447',
  email: 'sales@matchmove.fr',
  emailHref: 'mailto:sales@matchmove.fr',
  trustpilotUrl: 'https://fr.trustpilot.com/review/matchmove.fr',
  legal: {
    cgv: 'https://matchmove.fr/conditions-generales-de-vente/',
    mentions: 'https://matchmove.fr/mentions-legales/',
    cookies: 'https://matchmove.fr/politique-cookies/',
    donnees: 'https://matchmove.fr/politique-de-protection-des-donnees/',
    partenaire: 'https://matchmove.fr/devenir-partenaire/',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/matchmove-fr/',
    facebook: 'https://www.facebook.com/matchmove.fr/',
    instagram: 'https://www.instagram.com/matchmove.fr/',
  },
};

export const nav = [
  { label: 'Principe', href: '#principe' },
  { label: 'Avantages', href: '#avantages' },
  { label: 'Services', href: '#services' },
  { label: 'Avis', href: '#avis' },
  { label: 'FAQ', href: '#faq' },
];

export const hero = {
  title: 'Trouvez un déménageur à proximité, au meilleur prix',
  text: "Votre nouvelle aventure commence avec MatchMove. Décrivez votre déménagement en 2 minutes : nous comparons pour vous les déménageurs sélectionnés près de chez vous et vous revenons avec le meilleur rapport qualité-prix.",
  cta: 'Demander un devis',
};

export const process = {
  eyebrow: 'Comment ça marche ?',
  titleBefore: 'Déménager n’a jamais été aussi ',
  titleAccent: 'simple',
  text: "Dites-nous d'où vous partez, où vous allez et ce que vous emportez. Nous évaluons votre besoin, identifions les déménageurs disponibles et les mieux notés dans votre région, puis nous vous proposons le meilleur qualité-prix du marché. Vous validez, et nous nous occupons de tout.",
  steps: [
    {
      subtitle: 'Formulaire',
      title: 'Nous évaluons votre besoin',
      text: 'Volume, adresses de départ et d’arrivée, dates et prestations souhaitées.',
      date: 'Étape 1',
      place: 'En ligne',
    },
    {
      subtitle: 'Match',
      title: 'Nous trouvons votre déménageur',
      text: 'Notre système identifie les prestataires certifiés, disponibles et les mieux notés dans votre région.',
      date: 'Étape 2',
      place: 'Traitement',
    },
    {
      subtitle: 'Réponse',
      title: 'Vous recevez votre devis en 1 heure',
      text: 'Une offre claire qui combine qualité de service et tarification compétitive. Vous validez, on s’occupe du reste.',
      date: 'Étape 3',
      place: 'Devis',
    },
  ],
};

export const stats = [
  { icon: 'headset', label: 'Service client disponible 7/7' },
  { icon: 'smile', label: '97% de clients satisfaits' },
  { icon: 'truck', label: 'Plus de 1000 partenaires déménageurs' },
];

export const onlineSteps = {
  eyebrow: 'Démarches en ligne',
  titleBefore: 'Quelques clics pour ',
  titleAccent: 'déménager',
  items: [
    {
      icon: '/assets/steps/1.png',
      title: 'Que devez-vous déménager ?',
      text: "Indiquez le type de logement et sa taille. Pas besoin d'inventaire : une estimation suffit pour démarrer, nous affinons ensuite avec vous.",
    },
    {
      icon: '/assets/steps/2.png',
      title: 'D’où partez-vous et où allez-vous ?',
      text: "Renseignez les codes postaux de départ et d'arrivée, l'étage, la présence d'un ascenseur et l'accès pour le camion. Ce sont ces détails qui font le prix juste.",
    },
    {
      icon: '/assets/steps/3.png',
      title: 'Quand et avec quelle formule ?',
      text: "Choisissez votre période de déménagement et le niveau de prestation : de la formule économique où vous faites vos cartons jusqu'au clé en main.",
    },
    {
      icon: '/assets/steps/4.png',
      title: 'Obtenez votre devis gratuitement',
      text: "Renseignez vos coordonnées pour recevoir votre devis personnalisé en 1 heure. Après validation, votre déménageur prend contact avec vous et s'occupe de tout, du chargement à l'installation.",
    },
  ],
};

export const advantages = {
  eyebrow: 'Nos avantages',
  titleBefore: 'Pourquoi nous ',
  titleAccent: 'choisir ?',
  items: [
    {
      icon: 'grid',
      title: 'Une sélection rigoureuse',
      text: "Nous sélectionnons nos déménageurs sur la certification professionnelle, les avis clients et leur capacité à répondre aux caractéristiques précises de votre projet. Vous ne tombez jamais au hasard.",
    },
    {
      icon: 'euro',
      title: 'Transparence totale',
      text: "Aucune surprise sur les coûts. Le devis que vous recevez est clair, détaillé et sans engagement : vous savez exactement ce que vous payez avant de valider.",
    },
    {
      icon: 'bolt',
      title: 'Un devis en 1 heure',
      text: "Plus besoin de contacter dix déménageurs un par un. Une seule demande, et notre équipe revient vers vous avec la meilleure offre du marché en une heure.",
    },
    {
      icon: 'shield',
      title: 'Un déménagement assuré',
      text: "Chaque prestataire est évalué sur des critères stricts de qualité et de fiabilité, et tous les déménagements sont couverts par une assurance complète.",
    },
    {
      icon: 'headset',
      title: 'Assistance experte',
      text: "Notre équipe vous accompagne du devis jusqu'à l'installation. Une question, un imprévu, un changement de date : vous avez un interlocuteur.",
    },
  ],
};

export const partners = {
  eyebrow: 'Nos partenaires',
  titleBefore: 'Ils nous font ',
  titleAccent: 'confiance',
  logos: [
    { src: '/assets/partners/century_21.png', alt: 'Century 21' },
    { src: '/assets/partners/bazzile.png', alt: 'Bazzile' },
    { src: '/assets/partners/costockage.png', alt: 'Costockage' },
    { src: '/assets/partners/je_stocke.png', alt: 'Je Stocke' },
    { src: '/assets/partners/mobidiq.png', alt: 'Mobidiq' },
  ],
};

export const services = {
  eyebrow: 'Services',
  titleBefore: 'On vous ',
  titleAccent: 'accompagne ',
  titleAfter: 'pour tous les types de déménagement',
  cta: 'Demander un devis',
  items: [
    'Déménagement d’appartement',
    'Déménagement de maison',
    'Déménagement de studio',
    'Déménagement longue distance',
    'Déménagement international',
    'Déménagement senior',
    'Déménagement d’entreprise',
    'Déménagement de bureaux',
    'Formule économique',
    'Formule clé en main',
    'Emballage et déballage',
    'Démontage et remontage',
    'Location de monte-meuble',
    'Garde-meuble et stockage',
    'Transport de piano',
    'Transport d’œuvres d’art',
    'Conciergerie',
    'Vide logement',
  ],
};

/* Avis issus de la page Trustpilot MatchMove (fr.trustpilot.com/review/matchmove.fr).
   ⚠ À VALIDER : vérifier que ces avis sont toujours en ligne avant publication. */
export const reviews = {
  eyebrow: 'Avis',
  titleBefore: '97% de nos clients ',
  titleAccent: 'recommandent MatchMove',
  cta: 'Afficher tout',
  items: [
    {
      name: 'Bernard',
      text: "Entreprise très professionnelle. L'équipe administrative est réactive et arrangeante. L'équipe de déménageurs est ponctuelle et efficace. Rien à redire. Cinq étoiles.",
    },
    {
      name: 'Gene Baradelle',
      text: "C'est M. Akesbi (et son assistante) qui nous a accompagné avec patience, depuis le devis jusqu'à la finalisation de la prestation. Merci pour votre écoute et vos conseils. M. Houssem Mouadna a supervisé l'opération de façon très professionnelle, rapide et soigneuse sans oublier la bonne humeur. Cela s'est passé de façon optimale de la prise de contact jusqu'à la finalisation ! Je recommande chaleureusement.",
    },
    {
      name: 'Feignon Cloe',
      text: "Super équipe très réactive !!! Je les remercie d'avoir trouvé une solution aussi rapidement pour nous sortir de notre situation délicate dans un temps aussi court. Très efficace et en plus très agréable et bienveillante. Je recommande.",
    },
    {
      name: 'Nolwenn CARNEC',
      text: "Intervenants et télé-communicatrices agréables, à l'écoute, efficaces, prévenants, rapides, soigneux et de bons conseils ! Vraiment merci pour tout ce que vous avez fait pour moi depuis le début de nos échanges téléphoniques jusqu'à la poignée de main du départ des intervenants ! C'était vraiment parfait ! Je vous recommanderai avec plaisir !",
    },
  ],
};

/* FAQ reprise de https://matchmove.fr/ (réponses quasi verbatim). */
export const faq = {
  eyebrow: 'FAQ',
  titleBefore: 'Questions ',
  titleAccent: 'fréquentes',
  items: [
    {
      q: 'Comment MatchMove sélectionne-t-il les déménageurs ?',
      a: "Nous effectuons une sélection rigoureuse de nos prestataires basée sur plusieurs critères : la certification professionnelle, les avis clients, et leur capacité à répondre spécifiquement aux caractéristiques de chaque projet de déménagement.",
    },
    {
      q: 'Comment puis-je trouver un déménageur dans ma région ?',
      a: "Entrez simplement vos informations de déménagement sur notre plateforme (dates, volume, adresses de départ et d'arrivée) et notre système identifie les prestataires les mieux notés et disponibles dans votre région.",
    },
    {
      q: 'Comment est calculé le coût de mon déménagement ?',
      a: "Le coût est basé sur la distance à parcourir, le volume à transporter, et les services spécifiques requis. Le devis que nous vous transmettons est gratuit, détaillé et sans engagement.",
    },
    {
      q: 'Gérez-vous les déménagements spéciaux (piano, œuvres d’art) ?',
      a: "Absolument, notre réseau comprend des spécialistes formés pour le transport d'objets délicats. Assurez-vous de spécifier ces besoins lors de votre demande.",
    },
    {
      q: 'Comment la sécurité de mon déménagement est-elle garantie ?',
      a: "Chaque prestataire est soigneusement sélectionné et évalué sur la base de stricts critères de qualité et de fiabilité. En plus, tous les déménagements sont couverts par une assurance complète.",
    },
    {
      q: 'Que faire si je rencontre un problème avec mon déménageur ?',
      a: "Notre service client est à votre disposition du lundi au samedi de 8h à 18h. Nous intervenons rapidement pour résoudre tout conflit.",
    },
    {
      q: 'Comment puis-je modifier ou annuler mon déménagement ?',
      a: "Vous pouvez modifier ou annuler gratuitement votre plan de déménagement 2 semaines avant la date du déménagement.",
    },
    {
      q: 'Comment puis-je laisser un avis sur le prestataire ?',
      a: "Après votre déménagement, vous serez invité à évaluer le prestataire et la qualité du service. Vos retours sont essentiels : ils alimentent notre sélection et aident les prochains clients à choisir.",
    },
  ],
};

export const finalCta = {
  title: 'Un déménagement à organiser ?',
  text: 'Recevez un devis personnalisé en 1 heure. Gratuit et sans engagement.',
  cta: 'Recevoir un devis',
};

/* Footer version landing page : aucun lien de navigation qui fait fuir
   le visiteur, uniquement le rappel de la promesse, le téléphone et le légal. */
export const footer = {
  blurb:
    "Déménagement d'appartement, de maison, de bureaux, longue distance et international partout en France. Devis gratuit en 1 heure, déménageurs sélectionnés et assurés.",
  legal: [
    { label: 'Mentions légales', href: site.legal.mentions },
    { label: 'CGV', href: site.legal.cgv },
    { label: 'Cookies', href: site.legal.cookies },
    { label: 'Données personnelles', href: site.legal.donnees },
  ],
  copyright: '© 2026 MatchMove. Tous droits réservés.',
};

/* ------------------------------------------------------------------ */
/* Formulaire de devis déménagement — 4 étapes                          */
/* ------------------------------------------------------------------ */

export type Field =
  | {
      type: 'image-choice';
      name: string;
      label: string;
      required: boolean;
      multiple: boolean;
      options: { value: string; image: string }[];
    }
  | {
      type: 'choice';
      name: string;
      label: string;
      required: boolean;
      multiple?: boolean;
      options: { value: string }[];
    }
  | {
      type: 'text' | 'tel' | 'email';
      name: string;
      label: string;
      required: boolean;
      inputmode?: string;
      autocomplete?: string;
      pattern?: string;
      half?: boolean;
      note?: string;
    };

export const quoteForm: { steps: { title: string; fields: Field[] }[] } = {
  steps: [
    {
      title: 'Votre logement',
      fields: [
        {
          type: 'image-choice',
          name: 'type_logement',
          label: 'Que souhaitez-vous déménager ?',
          required: true,
          multiple: false,
          options: [
            { value: 'Appartement', image: '/assets/form/appartement.png' },
            { value: 'Maison', image: '/assets/form/maison.png' },
            { value: 'Bureau / Local', image: '/assets/form/local.png' },
            { value: 'Autre', image: '/assets/form/autres.png' },
          ],
        },
        {
          type: 'choice',
          name: 'volume',
          label: 'Quelle est la taille du logement ?',
          required: true,
          options: [
            { value: 'Studio / T1' },
            { value: 'T2' },
            { value: 'T3' },
            { value: 'T4' },
            { value: 'T5 et plus' },
            { value: 'Je ne sais pas' },
          ],
        },
      ],
    },
    {
      title: 'Départ & arrivée',
      fields: [
        {
          type: 'text',
          name: 'cp_depart',
          label: 'Code postal de départ',
          required: true,
          inputmode: 'numeric',
          autocomplete: 'postal-code',
          pattern: '[0-9]{5}',
          half: true,
        },
        {
          type: 'text',
          name: 'cp_arrivee',
          label: 'Code postal d’arrivée',
          required: true,
          inputmode: 'numeric',
          pattern: '[0-9]{5}',
          half: true,
          note: 'Le code postal de la commune visée suffit.',
        },
        {
          type: 'choice',
          name: 'etage_depart',
          label: 'À quel étage se trouve le logement de départ ?',
          required: true,
          options: [
            { value: 'Rez-de-chaussée' },
            { value: 'Étage 1 ou 2' },
            { value: 'Étage 3 à 5' },
            { value: 'Étage 6 et plus' },
          ],
        },
        {
          type: 'choice',
          name: 'ascenseur_depart',
          label: 'Y a-t-il un ascenseur au départ ?',
          required: true,
          options: [{ value: 'Oui' }, { value: 'Non' }, { value: 'Sans objet' }],
        },
        {
          type: 'choice',
          name: 'acces_camion',
          label: 'Un camion peut-il stationner devant les deux adresses ?',
          required: true,
          options: [{ value: 'Oui' }, { value: 'Non' }, { value: 'Je ne sais pas' }],
        },
      ],
    },
    {
      title: 'Date & formule',
      fields: [
        {
          type: 'choice',
          name: 'date_demenagement',
          label: 'Quand souhaitez-vous déménager ?',
          required: true,
          options: [
            { value: 'Dans les 2 semaines' },
            { value: 'Dans le mois' },
            { value: 'Dans 1 à 3 mois' },
            { value: 'Plus tard / flexible' },
          ],
        },
        {
          type: 'choice',
          name: 'formule',
          label: 'Quelle formule vous intéresse ?',
          required: true,
          options: [
            { value: 'Économique — je fais mes cartons' },
            { value: 'Standard — démontage et remontage' },
            { value: 'Clé en main — emballage inclus' },
            { value: 'Je ne sais pas encore' },
          ],
        },
        {
          type: 'choice',
          name: 'options',
          label: 'Des prestations en plus ? (facultatif)',
          required: false,
          multiple: true,
          options: [
            { value: 'Fourniture des cartons' },
            { value: 'Emballage / déballage' },
            { value: 'Démontage / remontage' },
            { value: 'Monte-meuble' },
            { value: 'Garde-meuble' },
            { value: 'Objet fragile (piano, œuvre d’art)' },
          ],
        },
      ],
    },
    {
      title: 'Contact & Validation',
      fields: [
        { type: 'text', name: 'prenom', label: 'Prénom', required: true, autocomplete: 'given-name', half: true },
        { type: 'text', name: 'nom', label: 'Nom', required: true, autocomplete: 'family-name', half: true },
        {
          type: 'tel',
          name: 'telephone',
          label: 'Téléphone',
          required: true,
          autocomplete: 'tel',
          half: true,
          note: 'Uniquement pour vous transmettre votre devis.',
        },
        { type: 'email', name: 'email', label: 'Email', required: true, autocomplete: 'email', half: true },
        { type: 'tel', name: 'whatsapp', label: 'WhatsApp (Facultatif)', required: false },
        {
          type: 'choice',
          name: 'contact_prefere',
          label: 'Vous préférez être contacté',
          required: true,
          options: [{ value: 'Appel' }, { value: 'Email' }, { value: 'WhatsApp' }],
        },
      ],
    },
  ],
};

/* Micro-copy CRO : boutons à bénéfice + première personne, réassurance
   positive uniquement (jamais de mention négative type "spam" près du
   bouton final). */
export const formLabels = {
  next: 'Continuer',
  nextEstimate: 'Voir mon estimation',
  prev: 'Précédent',
  submit: 'Recevoir mon devis gratuit en 1h',
  reassurance: 'Gratuit et sans engagement. Réponse en 1h.',
  trustLine: 'Avis vérifiés sur Trustpilot',
  required: 'Ce champ est obligatoire.',
  invalidEmail: 'Veuillez saisir une adresse email valide.',
  invalidPhone: 'Veuillez saisir un numéro de téléphone valide.',
  invalidZip: 'Veuillez saisir un code postal à 5 chiffres.',
  rgpdBefore:
    'Vos coordonnées servent uniquement à préparer votre devis. MATCHMOVE utilise vos données personnelles pour traiter votre demande, conformément à sa ',
  rgpdLink: 'politique de protection des données',
  rgpdAfter: '.',
  errorText:
    "Une erreur est survenue lors de l'envoi. Merci de réessayer, ou de nous appeler directement au",
};

/* ------------------------------------------------------------------ */
/* Page v2 — variante conversion-first                                  */
/* ------------------------------------------------------------------ */

export const v2 = {
  title: 'Déménagement : devis gratuit en 1 heure, au meilleur prix — MatchMove',
  description:
    'Estimez votre déménagement en 2 minutes : devis gratuit en 1 heure, déménageurs certifiés et assurés partout en France. Plus de 1000 partenaires, 97% de clients satisfaits.',
  hero: {
    /* H1 composable : [segment métier (?k=)] [segment géo] + suffixe fixe. */
    h1Segment: 'Déménagement',
    h1Geo: 'partout en France',
    h1Suffix: ': devis gratuit en 1h, au meilleur prix',
    /* Message match Google Ads : ?k=appartement|maison|longue-distance|international|prix */
    h1Segments: {
      appartement: 'Déménagement d’appartement',
      maison: 'Déménagement de maison',
      'longue-distance': 'Déménagement longue distance',
      international: 'Déménagement international',
      entreprise: 'Déménagement d’entreprise',
      prix: 'Prix d’un déménagement',
    } as Record<string, string>,
    sub: 'Déménageurs certifiés et assurés. Devis clair, sans surprise et sans engagement.',
    phoneLabel: 'Devis immédiat par téléphone',
    formTitle: 'Estimez votre déménagement en 2 minutes',
    formSub: 'Gratuit · Sans engagement · Réponse en 1h',
  },
  trustBand: {
    stats: ['97% de clients satisfaits', '+1000 partenaires déménageurs'],
    zoneStat: { pre: 'Nous intervenons', fallback: 'partout en France' },
    partnersTitle: 'Ils nous confient leurs déménagements',
  },
  situations: {
    title: 'On s’occupe de tout, quelle que soit la situation',
    items: [
      {
        icon: 'truck',
        title: 'Premier appartement',
        text: 'Petit volume, budget serré : la formule économique au juste prix.',
      },
      {
        icon: 'grid',
        title: 'Maison de famille',
        text: 'Gros volume, meubles encombrants, monte-meuble si besoin.',
      },
      {
        icon: 'bolt',
        title: 'Longue distance',
        text: 'Province, international : un seul interlocuteur du départ à l’arrivée.',
      },
      {
        icon: 'heart',
        title: 'Déménagement senior',
        text: 'Accompagnement pas à pas, du tri des affaires à l’installation.',
      },
    ],
  },
  how: {
    title: 'Comment ça marche ?',
    steps: [
      {
        title: 'Décrivez votre déménagement en 2 minutes',
        text: 'Quelques questions simples, aucun inventaire détaillé à fournir.',
      },
      {
        title: 'Recevez votre devis gratuit en 1h',
        text: 'Nous comparons les déménageurs disponibles et vous proposons le meilleur qualité-prix.',
      },
      {
        title: 'Vous validez, on s’occupe de tout',
        text: 'Chargement, transport, déchargement et installation par des professionnels assurés.',
      },
    ],
    cta: 'Obtenir mon devis gratuit',
    ctaNote: 'Gratuit et sans engagement',
  },
  /* ⚠ À VALIDER avec MatchMove : fourchettes indicatives, à confirmer
     avant toute mise en ligne (obligation d'information sur les prix). */
  pricing: {
    title: 'Combien coûte un déménagement ?',
    rows: [
      { label: 'Studio / T1 (courte distance)', price: '400 € à 900 €' },
      { label: 'T2 / T3', price: '900 € à 1 800 €' },
      { label: 'Maison T4 et plus / longue distance', price: '1 800 € à 4 500 €' },
    ],
    factors: [
      'Le volume à transporter, exprimé en m³',
      'La distance entre le logement de départ et celui d’arrivée',
      'L’accès aux deux adresses : étage, ascenseur, stationnement du camion',
      'La formule choisie : de l’économique au clé en main',
    ],
    closing: 'Votre prix exact, ferme et gratuit, en 1 heure avec le devis.',
    cta: 'Estimer mon déménagement',
  },
  /* ⚠ À VALIDER avec MatchMove (notamment les modalités d'assurance). */
  guarantees: {
    title: 'Zéro mauvaise surprise',
    items: [
      { icon: 'euro', text: 'Prix ferme après devis : aucun supplément le jour J.' },
      { icon: 'shield', text: 'Déménagements couverts par une assurance complète.' },
      { icon: 'check', text: 'Déménageurs certifiés, évalués et notés par nos clients.' },
      { icon: 'clock', text: 'Modification ou annulation gratuite jusqu’à 2 semaines avant.' },
    ],
  },
  reviewsTitle: 'Ils ont déménagé avec MatchMove',
  faq: [
    {
      q: 'Combien coûte un déménagement ?',
      a: "Le coût dépend du volume à transporter, de la distance à parcourir et des services demandés. À titre indicatif, comptez 400 € à 900 € pour un studio en courte distance, 900 € à 1 800 € pour un T2/T3, et 1 800 € à 4 500 € pour une maison ou une longue distance. Votre prix exact est calculé gratuitement en 1 heure avec le devis.",
    },
    {
      q: 'Sous quel délai vais-je recevoir mon devis ?',
      a: 'Vous recevez votre devis gratuit et personnalisé en 1 heure après votre demande en ligne. Il est détaillé, sans surprise et sans engagement.',
    },
    {
      q: 'Comment choisissez-vous mon déménageur ?',
      a: "Nous effectuons une sélection rigoureuse basée sur la certification professionnelle, les avis clients et la capacité du prestataire à répondre aux caractéristiques précises de votre projet. Nous retenons ensuite celui qui est disponible à vos dates et le mieux noté dans votre région.",
    },
    {
      q: 'Mes biens sont-ils assurés pendant le déménagement ?',
      a: "Oui. Chaque prestataire est évalué sur des critères stricts de qualité et de fiabilité, et tous les déménagements sont couverts par une assurance complète.",
    },
    {
      q: 'Prenez-vous en charge les objets fragiles (piano, œuvres d’art) ?',
      a: "Oui, notre réseau comprend des spécialistes formés au transport d'objets délicats. Pensez simplement à le préciser dans votre demande pour que le devis en tienne compte.",
    },
    {
      q: 'Puis-je modifier ou annuler mon déménagement ?',
      a: 'Vous pouvez modifier ou annuler gratuitement votre plan de déménagement jusqu’à 2 semaines avant la date prévue.',
    },
  ],
  finalCta: {
    title: 'Votre devis déménagement gratuit en 1 heure',
    text: 'Gratuit et sans engagement. Plus de 1000 déménageurs partenaires partout en France.',
    cta: 'Obtenir mon devis gratuit',
  },
};
