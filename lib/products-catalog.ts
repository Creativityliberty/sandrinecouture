import { Product } from "@/types/chat-commerce";

export const PRODUCTS_CATALOG: Product[] = [
  {
    id: 100,
    slug: "sac-pause-cafe",
    title: "Le Sac Pause-Café",
    price: 20.00,
    category: "Accessoires",
    badge: "Création Coup de Cœur",
    spec: "Format nomade • 6 poches astucieuses intégrées",
    description: "Le compagnon idéal de vos pauses bien méritées ! Ce petit sac artisanal est spécialement conçu pour emporter votre tasse préférée, sachet de thé, capsule de café, sucre et cuillère. Pratique, élégant et confectionné à la main dans notre atelier normand.",
    imgUrl: "/images/produits/sac-pause-cafe/hero-pause-cafe.jpg",
    videoUrl: "/videos/produits/sac-pause-cafe-demo.mp4",
    videoPoster: "/videos/produits/sac-pause-cafe-demo-poster.webp",
    details: {
      howItWorks: [
        "Compartiment central rembourré pour maintenir votre tasse ou mug droit sans risque de casse",
        "4 poches intérieures élastiquées pour sachets de thé, infusions ou capsules de café",
        "1 poche latérale dédiée pour cuillère, touillette et dosettes de sucre",
        "Fermeture zippée fluide et anse de transport renforcée pour vos déplacements bureau ou voyage"
      ],
      capacity: [
        "1 Tasse / Mug standard ou isotherme",
        "4 à 6 Sachets de thé ou capsules Nespresso/Dolce Gusto",
        "Dosettes de sucre & cuillère",
        "Petite gourmandise (biscuit, chocolat)"
      ],
      dimensions: "Hauteur 14 cm × Diamètre 12 cm (format nomade compact)",
      care: "Lavable en machine à 30°C (cycle délicat, séchage à l'air libre)"
    },
    customizable: true,
    variants: [
      {
        name: "Vert Sauge Fleuri",
        badge: "Motif Champêtre",
        images: {
          closed: "/images/produits/sac-pause-cafe/vert-sauge-ferme.jpg",
          open: "/images/produits/sac-pause-cafe/vert-sauge-ouvert.jpg"
        }
      },
      {
        name: "Toile de Jouy Vintage",
        badge: "Édition Limitée",
        images: {
          closed: "/images/produits/sac-pause-cafe/jouy-vintage-ferme.jpg",
          open: "/images/produits/sac-pause-cafe/jouy-vintage-ouvert.jpg"
        }
      },
      {
        name: "Cupcakes Gourmands",
        badge: "Rose Poudré",
        images: {
          closed: "/images/produits/sac-pause-cafe/cupcakes-rose-ferme.jpg",
          open: "/images/produits/sac-pause-cafe/cupcakes-rose-ouvert.jpg"
        }
      }
    ],
    colors: [
      { name: "Vert Sauge Fleuri", hex: "#A3B19B" },
      { name: "Toile de Jouy Vintage", hex: "#D4C5B0" },
      { name: "Cupcakes Gourmands", hex: "#E8C5C8" }
    ],
    fonts: ["Script", "Moderne"]
  },
  {
    id: 101,
    slug: "sac-guidon-velo",
    title: "Sac de Guidon de Vélo en Velours & Coton",
    price: 25.00,
    category: "Accessoires",
    badge: "Nouveauté Balade",
    spec: "Fixation guidon rapide • Velours côtelé & Dentelle",
    description: "Le petit sac artisanal qui vous suit partout lors de vos balades à vélo ! Fabriqué en velours côtelé résistant avec rabat en coton fleuri bordé d'une dentelle délicate. Se fixe facilement au guidon grâce à ses sangles robustes. Idéal pour y glisser vos affaires personnelles, petites courses ou encas.",
    imgUrl: "/images/produits/sac-guidon-velo/hero-sac-velo.jpg",
    customizable: true,
    variants: [
      {
        name: "Vert Olive & Dentelle Fleuries",
        badge: "Style Champêtre",
        images: {
          closed: "/images/produits/sac-guidon-velo/vert-olive-ferme.jpg",
          open: "/images/produits/sac-guidon-velo/vert-olive-ouvert.jpg"
        }
      }
    ],
    colors: [
      { name: "Vert Olive", hex: "#708238" }
    ],
    fonts: ["Script", "Moderne"]
  },
  {
    id: 102,
    slug: "sac-toile-de-jouy",
    title: "Sac Fourre-Tout en Véritable Toile de Jouy",
    price: 30.00,
    category: "Maison",
    badge: "Quiet Luxury",
    spec: "Toile de Jouy authentique • Doublure Coton Bleu",
    description: "L'élégance intemporelle du savoir-faire normand. Ce grand sac fourre-tout en véritable Toile de Jouy réinvente le cabas du quotidien avec un charme champêtre raffiné. Entièrement doublé en coton résistant d'un bleu profond et doté d'une fermeture par bouton pression discret, il offre une contenance généreuse pour vos sorties et escapades.",
    imgUrl: "/images/produits/cabas-toile-de-jouy/hero-cabas-jouy.jpg",
    customizable: true,
    variants: [
      {
        name: "Toile de Jouy Beige & Bleue",
        badge: "Modèle Unique",
        images: {
          closed: "/images/produits/cabas-toile-de-jouy/jouy-cabas-ferme.jpg",
          open: "/images/produits/cabas-toile-de-jouy/jouy-cabas-ouvert.jpg"
        }
      }
    ],
    colors: [
      { name: "Beige & Bleu Jouy", hex: "#D4C5B0" }
    ],
    fonts: ["Script", "Moderne"]
  },
  {
    id: 103,
    slug: "gilet-berger-bebe",
    title: "Gilet Berger Réversible Bébé (3 à 6 mois)",
    price: 25.00,
    category: "Bébé",
    badge: "Fait Main Normand",
    spec: "Réversible • Double gaze de coton & Moumoute Sherpa",
    description: "Deux styles en un pour envelopper bébé dans un cocon de douceur ! Ce petit gilet réversible de 3 à 6 mois réunit une face en moumoute Sherpa beige ultra-moelleuse et une face en double gaze de coton imprimée de délicates fleurs champêtres. Idéal pour garder votre enfant bien au chaud au quotidien.",
    imgUrl: "/images/produits/gilet-berger-bebe-reversible/hero-gilet.jpg",
    customizable: true,
    variants: [
      {
        name: "Fleurs Champêtres & Sherpa Moumoute",
        badge: "Taille 3-6 Mois",
        images: {
          closed: "/images/produits/gilet-berger-bebe-reversible/moumoute-sherpa.jpg",
          open: "/images/produits/gilet-berger-bebe-reversible/double-gaze-fleuri.jpg"
        }
      }
    ],
    colors: [
      { name: "Sherpa & Fleuri", hex: "#E8C5C8" }
    ],
    fonts: ["Script", "Moderne"]
  },
  {
    id: 104,
    slug: "sac-de-plage-impermeable",
    title: "Sac de Plage Imperméable Anti-Sable",
    price: 23.00,
    category: "Accessoires",
    badge: "Incontournable Été",
    spec: "Tissu imperméable anti-sable • Cordon de serrage",
    description: "Le sac idéal pour vos sorties à la plage et à la piscine ! Fabriqué en tissu technique imperméable ultra-résistant qui ne laisse pas passer le sable. Idéal pour transporter maillots de bain mouillés, serviettes et essentiels sans mouiller le reste de vos affaires.",
    imgUrl: "/images/produits/sac-de-plage-impermeable/hero-sac-plage.jpg",
    customizable: true,
    variants: [
      {
        name: "Petit Modèle (23 €) - 'Je reviens après la Sieste'",
        badge: "Format Pratique • 23,00 €",
        images: {
          closed: "/images/produits/sac-de-plage-impermeable/petit-modele-plage.jpg",
          open: "/images/produits/sac-de-plage-impermeable/petit-modele-plage.jpg"
        }
      },
      {
        name: "Grand Modèle (30 €) - 'Le bonheur est dedans'",
        badge: "Grand Format Famille • 30,00 €",
        images: {
          closed: "/images/produits/sac-de-plage-impermeable/grand-modele-plage.jpg",
          open: "/images/produits/sac-de-plage-impermeable/grand-modele-plage.jpg"
        }
      }
    ],
    colors: [
      { name: "Bleu Turquoise", hex: "#00B4D8" }
    ],
    fonts: ["Script", "Moderne"]
  },
  {
    id: 105,
    slug: "tablier-atelier-lin",
    title: "Tablier d'Atelier en Lin 100% Naturel",
    price: 45.00,
    category: "Maison",
    badge: "Matière Noble",
    spec: "100% Lin naturel lavé • Poche ventrale imprimée",
    description: "Élégance et authenticité au naturel ! Ce magnifique tablier d'atelier est confectionné en pure toile de lin 100% naturelle de très haute qualité. Léger, respirant et d'une grande résistance, il est agrémenté d'un ravissant motif floral et d'une grande poche centrale bordée d'un liseré rouge pour garder vos ustensiles à portée de main. Un incontournable fait main dans notre atelier normand.",
    imgUrl: "/images/produits/tablier-100-pourcent-lin/hero-tablier.jpg",
    customizable: true,
    colors: [
      { name: "Lin Naturel & Motifs Fleurs", hex: "#E2D9C8" }
    ],
    fonts: ["Script", "Moderne"]
  },
  {
    id: 106,
    slug: "bavoir-bambou-brode",
    title: "Bavoir Douceur en Éponge de Bambou & Broderie",
    price: 18.00,
    category: "Bébé",
    badge: "Ultra-Doux Bambou",
    spec: "Éponge de bambou absorbante • Double gaze de coton",
    description: "La douceur ultime pour la peau délicate de bébé ! Ce bavoir artisanal réversible est doublé d'une éponge de bambou d'une souplesse incomparable et très absorbante. Associé à de la double gaze imprimée et brodé d'une phrase affectueuse ou rigolote. Un cadeau de naissance incontournable fait main en Normandie.",
    imgUrl: "/images/produits/bavoir-bambou-brode/hero-bavoirs.jpg",
    customizable: true,
    variants: [
      {
        name: "Modèle Koala - 'J'peux pas J'ai biberon'",
        badge: "Modèle Koala",
        images: {
          closed: "/images/produits/bavoir-bambou-brode/bavoir-koala-biberon.jpg",
          open: "/images/produits/bavoir-bambou-brode/bavoir-koala-biberon.jpg"
        }
      },
      {
        name: "Modèle Savane Animaux (Sans broderie)",
        badge: "Imprimé Savane",
        images: {
          closed: "/images/produits/bavoir-bambou-brode/bavoir-savane.jpg",
          open: "/images/produits/bavoir-bambou-brode/bavoir-savane.jpg"
        }
      },
      {
        name: "Modèle Fleurs Rose - 'Chocolat ou Vanille'",
        badge: "Fleurs Champêtres",
        images: {
          closed: "/images/produits/bavoir-bambou-brode/bavoir-fleurs-chocolat-vanille.jpg",
          open: "/images/produits/bavoir-bambou-brode/bavoir-fleurs-chocolat-vanille.jpg"
        }
      },
      {
        name: "Modèle Forêt Vert - 'J'peux pas J'ai biberon'",
        badge: "Animals & Forêt",
        images: {
          closed: "/images/produits/bavoir-bambou-brode/bavoir-foret-biberon.jpg",
          open: "/images/produits/bavoir-bambou-brode/bavoir-foret-biberon.jpg"
        }
      }
    ],
    colors: [
      { name: "Koala & Taupe", hex: "#D4C5B0" },
      { name: "Fleurs Rose", hex: "#E8C5C8" },
      { name: "Forêt Vert", hex: "#A3B19B" }
    ],
    fonts: ["Script", "Moderne"]
  },
  {
    id: 107,
    slug: "trousse-coton-vichy-rose",
    title: "Trousse en Coton Broderie Cœurs & Vichy Rose",
    price: 25.00,
    category: "Accessoires",
    badge: "Finition Soignée",
    spec: "Toile de coton • Broderie cœurs • Doublure Vichy",
    description: "La petite trousse de toilette irrésistible ! Fabriquée en toile de coton écru parsemée de petits cœurs brodés multicolores, elle est dotée d'une poche extérieure zippée et d'une doublure vichy rose ultra-raffinée. Idéale pour ranger votre maquillage, produits de beauté ou affaires de toilette.",
    imgUrl: "/images/produits/trousse-coton-coeurs-vichy-rose/hero-trousse.jpg",
    customizable: true,
    variants: [
      {
        name: "Coton Écru, Cœurs Brodés & Vichy Rose",
        badge: "Broderie Artisanale",
        images: {
          closed: "/images/produits/trousse-coton-coeurs-vichy-rose/trousse-coeurs-vichy.jpg",
          open: "/images/produits/trousse-coton-coeurs-vichy-rose/trousse-coeurs-vichy.jpg"
        }
      }
    ],
    colors: [
      { name: "Écru & Vichy Rose", hex: "#E8C5C8" }
    ],
    fonts: ["Script", "Moderne"]
  },
  {
    id: 108,
    slug: "gigoteuse-bambou-double-gaze",
    title: "Gigoteuse Douceur Bambou & Double Gaze (1 à 8 mois)",
    price: 49.00,
    category: "Bébé",
    badge: "Bébé 1 à 8 Mois",
    spec: "Éponge bambou absorbante • Double gaze 100% respirante",
    description: "Le nido d'ange idéal pour des nuits paisibles et régulées ! Cette magnifique gigoteuse évolutive (1 à 8 mois) allie le haut en éponge de bambou ultra-doux avec broderie fine 'Petite Fleur', et le bas en double gaze de coton respirante aux motifs floraux colorés. Conçue pour offrir un confort thermique optimal et respecter la peau délicate de bébé. Fait main en Normandie.",
    imgUrl: "/images/produits/gigoteuse-bambou-double-gaze/hero-gigoteuse.jpg",
    customizable: true,
    variants: [
      {
        name: "Modèle 'Petite Fleur' - Éponge Bambou & Double Gaze",
        badge: "Taille 1 à 8 Mois",
        images: {
          closed: "/images/produits/gigoteuse-bambou-double-gaze/gigoteuse-petite-fleur.jpg",
          open: "/images/produits/gigoteuse-bambou-double-gaze/gigoteuse-petite-fleur.jpg"
        }
      }
    ],
    colors: [
      { name: "Blanc & Fleurs Ocre/Rose", hex: "#E8C5C8" }
    ],
    fonts: ["Script", "Moderne"]
  },
  {
    id: 109,
    slug: "tapis-nomade-ecureuil-bambou",
    title: "Tapis Nomade Bébé Écureuil & Bambou",
    price: 30.00,
    category: "Bébé",
    badge: "Indispensable Bébé",
    spec: "Extérieur tissu bambou • Dessus coton imprimé • Ouate moelleuse",
    description: "Un petit cocon de douceur à emporter partout avec bébé ! Ce tapis nomade molletonné est l'allié incontournable pour les sorties, les visites chez nounou ou les voyages. Confectionné avec un extérieur en tissu bambou ultra-doux et respirant, un ravissant dessus en coton imprimé petits écureuils des bois, et une ouate intérieure pour un confort moelleux et isolant. Création artisanale normande personnalisable sur commande.",
    imgUrl: "/images/boutique/hero-tapis-nomade.jpg",
    customizable: true,
    variants: [
      {
        name: "Modèle Écureuil des Bois & Éponge Bambou Corail",
        badge: "Motif Écureuil",
        images: {
          closed: "/images/boutique/tapis-nomade-ecureuil-bambou.jpg",
          open: "/images/boutique/tapis-nomade-ecureuil-bambou.jpg"
        }
      }
    ],
    colors: [
      { name: "Écureuil & Vieux Rose / Corail", hex: "#C76B66" }
    ],
    fonts: ["Script", "Moderne"]
  }
];

export function searchCatalog(query?: string, category?: string, maxPrice?: number): Product[] {
  return PRODUCTS_CATALOG.filter((p) => {
    if (category && category !== "Tous" && p.category.toLowerCase() !== category.toLowerCase()) {
      return false;
    }
    if (maxPrice && p.price > maxPrice) {
      return false;
    }
    if (query && query.trim()) {
      const q = query.toLowerCase();
      const matchTitle = p.title.toLowerCase().includes(q);
      const matchDesc = p.description.toLowerCase().includes(q);
      const matchBadge = p.badge.toLowerCase().includes(q);
      const matchCat = p.category.toLowerCase().includes(q);
      const matchSpec = p.spec.toLowerCase().includes(q);
      return matchTitle || matchDesc || matchBadge || matchCat || matchSpec;
    }
    return true;
  });
}
