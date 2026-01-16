export const SITE_CONFIG = {
  name: "By Sandrine Couture",
  description: "Broderie & personnalisation textile haut de gamme en Normandie. Uniformes pro et cadeaux personnalisés.",
  location: "Robertot (76560), Normandie",
  phone: "06 29 49 22 13",
  email: "bysandrinecouture@gmail.com",
  whatsapp: "33629492213",
  socials: {
    instagram: "https://instagram.com/bysandrinecouture",
    facebook: "https://facebook.com/bysandrinecouture",
  },
  seo: {
    sectors: [
      { name: "Restaurants & Métiers de bouche", slug: "broderie-restaurant" },
      { name: "Artisans & BTP", slug: "broderie-artisans-btp" },
      { name: "Boulangeries & Traiteurs", slug: "broderie-boulangerie" },
      { name: "Salons de coiffure & Esthétique", slug: "broderie-salon-coiffure-esthetique" },
      { name: "Hôtels & Hébergements", slug: "broderie-hotel" },
      { name: "Clubs & Associations", slug: "broderie-clubs-sportifs" }
    ],
    products: [
      { name: "Patchs & Velcro brodés", slug: "patch-velcro-brode" },
      { name: "Casquettes & Bonnets", slug: "casquette-bonnet-brode" },
      { name: "Polos & Softshells", slug: "polo-softshell-personnalise" },
      { name: "Cadeaux de Naissance", slug: "cadeau-naissance-personnalise" }
    ],
    cities: [
      "Rouen", "Le Havre", "Dieppe", "Yvetot", "Fécamp", "Caen", "Barentin", "Pavilly", "Doudeville", "Cany-Barville"
    ],
    regions: [
      { name: "Normandie", slug: "broderie-normandie" },
      { name: "Seine-Maritime (76)", slug: "broderie-seine-maritime-76" }
    ]
  },
  services: [
    {
      id: "logo",
      title: "Logo Entreprise",
      description: "Broderie haute définition sur cœur, manche ou dos pour vos uniformes.",
      icon: "Building2",
      gridSpan: "md:col-span-2 md:row-span-2",
      image: "/images/service-logo.jpg"
    },
    {
      id: "bebe",
      title: "Univers Bébé",
      description: "Cadeaux de naissance personnalisés : gigoteuses, doudous, capes de bain.",
      icon: "Baby",
      gridSpan: "md:col-span-1 md:row-span-1",
      image: "/images/service-baby.jpg"
    },
    {
      id: "patch",
      title: "Patchs & Velcro",
      description: "Écussons personnalisés à coudre ou avec fixation velcro.",
      icon: "Tag",
      gridSpan: "md:col-span-1 md:row-span-1",
      image: "/images/service-patch.jpg"
    },
    {
      id: "cadeaux",
      title: "Cadeaux Uniques",
      description: "Serviettes, peignoirs et vêtements personnalisés pour particuliers.",
      icon: "Gift",
      gridSpan: "md:col-span-2 md:row-span-1",
      image: "/images/service-gift.jpg"
    }
  ],
  packs: [
    {
      name: "Starter",
      target: "Artisans & TPE",
      features: ["Séries courtes", "Frais de digitalisation offerts", "Rendu pro"],
      price: "Sur devis"
    },
    {
      name: "Team",
      target: "PME & Restaurants",
      features: ["Multi-supports", "Tarifs dégressifs", "Contrôle qualité"],
      price: "Sur devis"
    },
    {
      name: "Premium",
      target: "Image de Luxe",
      features: ["Multi-emplacements", "Finition prestige", "Accompagnement"],
      price: "Sur devis"
    }
  ]
};