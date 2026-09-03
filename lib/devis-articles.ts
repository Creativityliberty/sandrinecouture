export interface ArticleGroup {
  group: string;
  items: string[];
}

export const PRO_ARTICLE_GROUPS: ArticleGroup[] = [
  {
    group: "Extérieur & Vêtements Chauds",
    items: [
      "Doudoune sans manche matelassée",
      "Veste Softshell déperlante",
      "Veste Polaire zippée",
      "Sweat à capuche (Hoodie)",
      "Sweat col rond",
      "Parka / Blouson professionnel",
    ],
  },
  {
    group: "Hauts & Tenues de Travail",
    items: [
      "Polo (coton piqué)",
      "T-shirt (coton peigné ou technique)",
      "Chemise de travail / service",
      "Tablier à bavette professionnel",
      "Tablier court / sommelier",
      "Veste de cuisine / boulangerie",
      "Blouse / Tunique professionnelle",
    ],
  },
  {
    group: "Accessoires & Signalétique Pro",
    items: [
      "Patch / Écusson brodé avec dos Velcro",
      "Patch thermocollant",
      "Casquette brodée",
      "Bonnet d'hiver brodé",
      "Sac cabas / Totebag professionnel",
    ],
  },
  {
    group: "Linge Professionnel & Cadeaux VIP",
    items: [
      "Serviette / Drap de bain d'accueil (hôtels, gîtes, spas)",
      "Peignoir brodé monogramme",
      "Drap de plage / cadeau VIP d'entreprise",
    ],
  },
  {
    group: "Sur-mesure",
    items: ["Autre support pro (préciser)"],
  },
];

export const PERSO_ARTICLE_GROUPS: ArticleGroup[] = [
  {
    group: "Univers Bébé & Naissance (0-3 ans)",
    items: [
      "Trousseau complet de naissance (coffret coordonné)",
      "Gigoteuse / Turbulette brodée",
      "Cape de bain / Sortie de bain bébé",
      "Doudou plat & Peluche sensorielle (finitions Liberty)",
      "Gilet de berger réversible fait main (sherpa / suédine)",
      "Bavoir naissance / Bavoir bandana / Bavoir à message",
      "Protège-carnet de santé matelassé",
      "Lange double gaze de coton brodé",
      "Panier de rangement & lingettes lavables",
    ],
  },
  {
    group: "Cérémonies, Baptêmes & Fêtes",
    items: [
      "Lange de baptême d'apparat brodé (parrain/marraine)",
      "Mouchoir de cérémonie ou mariage d'émotion",
      "Coussin d'alliances mariage brodé",
      "Serviette souvenir d'invité",
    ],
  },
  {
    group: "Linge de Bain & Décoration Maison",
    items: [
      "Serviette de toilette brodée prénom",
      "Drap de douche / Drap de bain XXL",
      "Peignoir adulte personnalisé (col châle)",
      "Housse de coussin déco brodée",
      "Plaid d'intérieur personnalisé",
    ],
  },
  {
    group: "Mode Adulte & Cadeaux Affectifs",
    items: [
      "Sweat / Pull brodé message (Nounou, Tata, Maman...)",
      "Tablier de cuisine particulier (barbecue, chef maison)",
      "Broderie portrait d'animal de compagnie d'après photo",
    ],
  },
  {
    group: "Maroquinerie Textile & Enfance",
    items: [
      "Cartable de maternelle rétro velours côtelé",
      "Sac à dos enfant / crèche brodé",
      "Sac banane XL brodé (velours ou toile)",
      "Trousse de toilette / Maquillage brodée",
      "Totebag personnalisé",
    ],
  },
  {
    group: "Sur-mesure",
    items: ["Autre création sur-mesure (préciser)"],
  },
];

export const ALL_PRO_ARTICLES = PRO_ARTICLE_GROUPS.flatMap((g) => g.items);
export const ALL_PERSO_ARTICLES = PERSO_ARTICLE_GROUPS.flatMap((g) => g.items);
