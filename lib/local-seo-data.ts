export interface CityConfig {
  slug: string;
  name: string;
  zip: string;
  department: string;
  deliveryText: string;
  proximityText: string;
  description: string;
}

export const CITIES_CONFIG: Record<string, CityConfig> = {
  "rouen": {
    slug: "rouen",
    name: "Rouen",
    zip: "76000",
    department: "Seine-Maritime (76)",
    deliveryText: "Livraison rapide à Rouen sous 48/72h ou retrait direct à l'atelier.",
    proximityText: "Notre atelier normand à Robertot est situé à moins d'une heure de Rouen, idéal pour échanger sur vos projets professionnels.",
    description: "Atelier de broderie personnalisée pour les entreprises et particuliers à Rouen. Personnalisation de vêtements professionnels, cadeaux de naissance et linge de maison."
  },
  "le-havre": {
    slug: "le-havre",
    name: "Le Havre",
    zip: "76600",
    department: "Seine-Maritime (76)",
    deliveryText: "Expédition sécurisée par Colissimo ou Mondial Relay à destination du Havre sous 3 jours.",
    proximityText: "Partenaire de confiance des acteurs havrais pour tous travaux de marquage textile haut de gamme.",
    description: "Confection et broderie sur mesure au Havre. Devis gratuit pour vos uniformes d'entreprise, goodies textiles et cadeaux personnalisés."
  },
  "dieppe": {
    slug: "dieppe",
    name: "Dieppe",
    zip: "76200",
    department: "Seine-Maritime (76)",
    deliveryText: "Livraison régulière de vos colis de broderie à Dieppe et sur la côte d'Albâtre.",
    proximityText: "Un artisan d'art local à l'écoute des créateurs et entreprises dieppoises.",
    description: "Service de broderie artisanale à Dieppe. Broderie sur polos, sweats, tabliers et trousses. Travail de précision et finitions soignées."
  },
  "yvetot": {
    slug: "yvetot",
    name: "Yvetot",
    zip: "76190",
    department: "Seine-Maritime (76)",
    deliveryText: "Livraison de proximité à Yvetot ou possibilité de retrait directement à Robertot (à 15 minutes).",
    proximityText: "Situés juste à côté d'Yvetot, nous vous accueillons à l'atelier sur rendez-vous pour vos projets de broderie.",
    description: "Atelier de broderie de proximité à Yvetot. Personnalisation textile de qualité pour vos événements, associations et cadeaux de naissance."
  },
  "fecamp": {
    slug: "fecamp",
    name: "Fécamp",
    zip: "76400",
    department: "Seine-Maritime (76)",
    deliveryText: "Livraison à Fécamp sous 48h ou retrait direct à l'atelier de Robertot.",
    proximityText: "À seulement 30 minutes de Fécamp, nous réalisons vos broderies personnalisées sur mesure.",
    description: "Broderie haut de gamme pour particuliers et professionnels à Fécamp. Personnalisez vos serviettes de bain, tabliers et vêtements de travail."
  },
  "caen": {
    slug: "caen",
    name: "Caen",
    zip: "14000",
    department: "Calvados (14)",
    deliveryText: "Expédition rapide à Caen sous 72h via notre transporteur partenaire Mondial Relay.",
    proximityText: "Un rayonnement régional pour apporter le savoir-faire normand de la broderie à Caen.",
    description: "Atelier de broderie sur mesure à Caen. Personnalisation textile haut de gamme pour votre marque professionnelle ou vos cadeaux uniques."
  },
  "barentin": {
    slug: "barentin",
    name: "Barentin",
    zip: "76360",
    department: "Seine-Maritime (76)",
    deliveryText: "Livraison express vers Barentin ou retrait à l'atelier de Robertot (à 25 minutes).",
    proximityText: "Idéalement situés près de la zone de Barentin, nous répondons à vos besoins de marquage textile.",
    description: "Broderie professionnelle et cadeau personnalisé à Barentin. Atelier artisanal normand réactif et de qualité."
  },
  "pavilly": {
    slug: "pavilly",
    name: "Pavilly",
    zip: "76570",
    department: "Seine-Maritime (76)",
    deliveryText: "Retrait gratuit à notre atelier proche de Pavilly ou livraison à domicile.",
    proximityText: "Pavilly fait partie de notre zone d'intervention directe pour toutes créations sur mesure.",
    description: "Artisan brodeur pour entreprises et particuliers à Pavilly. Confection de broderie sur doudous, bavoirs et linge professionnel."
  },
  "doudeville": {
    slug: "doudeville",
    name: "Doudeville",
    zip: "76560",
    department: "Seine-Maritime (76)",
    deliveryText: "Retrait direct à l'atelier (Robertot est mitoyen de Doudeville) ou livraison à domicile.",
    proximityText: "Voisins directs de Doudeville, nous offrons une réactivité maximale et des conseils personnalisés sur place.",
    description: "Broderie locale de proximité à Doudeville. Création de cadeaux de naissance personnalisés, lingettes lavables et vêtements d'entreprise."
  },
  "cany-barville": {
    slug: "cany-barville",
    name: "Cany-Barville",
    zip: "76454",
    department: "Seine-Maritime (76)",
    deliveryText: "Livraison rapide ou retrait simple à l'atelier situé à 20 minutes.",
    proximityText: "Présents sur l'axe Cany-Barville / Yvetot, nous vous garantissons des délais d'exécution courts.",
    description: "Broderie personnalisée et artisanat à Cany-Barville. Marquage de polos, sweats, serviettes de bain et bavoirs pour bébés."
  },
  "normandie": {
    slug: "normandie",
    name: "Normandie",
    zip: "76 / 14 / 27 / 50 / 61",
    department: "Région Normandie",
    deliveryText: "Expédition dans toute la région Normandie et toute la France sous 48/72h.",
    proximityText: "Notre atelier est implanté à Robertot au cœur de la Normandie historique.",
    description: "Atelier de broderie personnalisée en Normandie. Confection haut de gamme de textiles professionnels pour entreprises et cadeaux personnalisés."
  },
  "seine-maritime-76": {
    slug: "seine-maritime-76",
    name: "Seine-Maritime",
    zip: "76",
    department: "Seine-Maritime (76)",
    deliveryText: "Livraison rapide dans toutes les communes de Seine-Maritime sous 48h.",
    proximityText: "Artisan d'art local basé en Seine-Maritime pour une réactivité optimale.",
    description: "Artisan brodeur en Seine-Maritime (76). Personnalisation de vêtements de travail d'entreprises, linge de bain et cadeaux bébés."
  }
};
