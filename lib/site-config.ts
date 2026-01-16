export const SITE_CONFIG = {
  name: "By Sandrine Couture",
  description: "Broderie & personnalisation textile haut de gamme en Normandie.",
  location: "Robertot (76560), Normandie",
  phone: "06 29 49 22 13",
  email: "bysandrinecouture@gmail.com",
  whatsapp: "33629492213",
  socials: {
    instagram: "https://instagram.com/bysandrinecouture",
    facebook: "https://facebook.com/bysandrinecouture",
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
      name: "Atelier",
      target: "Restaurants & Hôtels",
      features: ["Multi-supports", "Tarifs dégressifs", "Livraison incluse"],
      price: "Sur devis"
    }
  ]
};