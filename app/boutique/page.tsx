"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { useCart } from "@/context/cart-context";
import { 
  Sparkles, 
  MapPin, 
  ChevronRight, 
  X, 
  ArrowRight, 
  ShoppingBag, 
  ShieldCheck, 
  Eye, 
  Scissors,
  Check,
  CheckCircle2,
  SlidersHorizontal,
  Clock,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductVariant {
  name: string;
  badge?: string;
  images: {
    closed: string;
    open: string;
  };
}

interface Product {
  id: number;
  title: string;
  price: number;
  category: "Bébé" | "Accessoires" | "Bain" | "Maison";
  description: string;
  badge: string;
  spec: string;
  imgUrl: string;
  variants?: ProductVariant[];
  colors: { name: string; hex: string }[];
  fonts: string[];
}

const PRODUCTS: Product[] = [
  {
    id: 100,
    title: "Le Sac Pause-Café",
    price: 20.00,
    category: "Accessoires",
    badge: "Création Coup de Cœur",
    spec: "Format nomade • 6 poches astucieuses intégrées",
    description: "Le compagnon idéal de vos pauses bien méritées ! Ce petit sac artisanal est spécialement conçu pour emporter votre tasse préférée, sachet de thé, capsule de café, sucre et cuillère. Pratique, élégant et confectionné à la main dans notre atelier normand.",
    imgUrl: "/images/produits/sac-pause-cafe/hero-pause-cafe.jpg",
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
    title: "Sac de Guidon de Vélo en Velours & Coton",
    price: 25.00,
    category: "Accessoires",
    badge: "Nouveauté Balade",
    spec: "Fixation guidon rapide • Velours côtelé & Dentelle",
    description: "Le petit sac artisanal qui vous suit partout lors de vos balades à vélo ! Fabriqué en velours côtelé résistant avec rabat en coton fleuri bordé d'une dentelle délicate. Se fixe facilement au guidon grâce à ses sangles robustes. Idéal pour y glisser vos affaires personnelles, petites courses ou encas.",
    imgUrl: "/images/produits/sac-guidon-velo/hero-sac-velo.jpg",
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
    title: "Sac Fourre-Tout en Véritable Toile de Jouy",
    price: 30.00,
    category: "Maison",
    badge: "Quiet Luxury",
    spec: "Toile de Jouy authentique • Doublure Coton Bleu",
    description: "L'élégance intemporelle du savoir-faire normand. Ce grand sac fourre-tout en véritable Toile de Jouy réinvente le cabas du quotidien avec un charme champêtre raffiné. Entièrement doublé en coton résistant d'un bleu profond et doté d'une fermeture par bouton pression discret, il offre une contenance généreuse pour vos sorties et escapades.",
    imgUrl: "/images/produits/cabas-toile-de-jouy/hero-cabas-jouy.jpg",
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
    title: "Gilet Berger Réversible Bébé (3 à 6 mois)",
    price: 25.00,
    category: "Bébé",
    badge: "Fait Main Normand",
    spec: "Réversible • Double gaze de coton & Moumoute Sherpa",
    description: "Deux styles en un pour envelopper bébé dans un cocon de douceur ! Ce petit gilet réversible de 3 à 6 mois réunit une face en moumoute Sherpa beige ultra-moelleuse et une face en double gaze de coton imprimée de délicates fleurs champêtres. Idéal pour garder votre enfant bien au chaud au quotidien.",
    imgUrl: "/images/produits/gilet-berger-bebe-reversible/hero-gilet.jpg",
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
    title: "Sac de Plage Imperméable Anti-Sable",
    price: 23.00,
    category: "Accessoires",
    badge: "Incontournable Été",
    spec: "Tissu imperméable anti-sable • Cordon de serrage",
    description: "Le sac idéal pour vos sorties à la plage et à la piscine ! Fabriqué en tissu technique imperméable ultra-résistant qui ne laisse pas passer le sable. Idéal pour transporter maillots de bain mouillés, serviettes et essentiels sans mouiller le reste de vos affaires.",
    imgUrl: "/images/produits/sac-de-plage-impermeable/hero-sac-plage.jpg",
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
    title: "Tablier d'Atelier en Lin 100% Naturel",
    price: 45.00,
    category: "Maison",
    badge: "Matière Noble",
    spec: "100% Lin naturel lavé • Poche ventrale imprimée",
    description: "Élégance et authenticité au naturel ! Ce magnifique tablier d'atelier est confectionné en pure toile de lin 100% naturelle de très haute qualité. Léger, respirant et d'une grande résistance, il est agrémenté d'un ravissant motif floral et d'une grande poche centrale bordée d'un liseré rouge pour garder vos ustensiles à portée de main. Un incontournable fait main dans notre atelier normand.",
    imgUrl: "/images/produits/tablier-100-pourcent-lin/hero-tablier.jpg",
    colors: [
      { name: "Lin Naturel & Motifs Fleurs", hex: "#E2D9C8" }
    ],
    fonts: ["Script", "Moderne"]
  },
  {
    id: 106,
    title: "Bavoir Douceur en Éponge de Bambou & Broderie",
    price: 18.00,
    category: "Bébé",
    badge: "Ultra-Doux Bambou",
    spec: "Éponge de bambou absorbante • Double gaze de coton",
    description: "La douceur ultime pour la peau délicate de bébé ! Ce bavoir artisanal réversible est doublé d'une éponge de bambou d'une souplesse incomparable et très absorbante. Associé à de la double gaze imprimée et brodé d'une phrase affectueuse ou rigolote. Un cadeau de naissance incontournable fait main en Normandie.",
    imgUrl: "/images/produits/bavoir-bambou-brode/hero-bavoirs.jpg",
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
      },
      {
        name: "Modèle Éponge Taupe - 'J'peux pas J'ai biberon'",
        badge: "Éponge Pur Taupe",
        images: {
          closed: "/images/produits/bavoir-bambou-brode/bavoir-taupe-biberon.jpg",
          open: "/images/produits/bavoir-bambou-brode/bavoir-taupe-biberon.jpg"
        }
      },
      {
        name: "Modèle Peppa Pig Rose - 'J'peux pas J'ai biberon'",
        badge: "Peppa Pig",
        images: {
          closed: "/images/produits/bavoir-bambou-brode/bavoir-peppa-biberon.jpg",
          open: "/images/produits/bavoir-bambou-brode/bavoir-peppa-biberon.jpg"
        }
      },
      {
        name: "Modèle Éponge Vert Sauge - 'J'peux pas J'ai biberon'",
        badge: "Éponge Pur Vert",
        images: {
          closed: "/images/produits/bavoir-bambou-brode/bavoir-eponge-verte-biberon.jpg",
          open: "/images/produits/bavoir-bambou-brode/bavoir-eponge-verte-biberon.jpg"
        }
      },
      {
        name: "Modèle Peppa Pig Rose - 'Mini mais Costaud'",
        badge: "Peppa Pig",
        images: {
          closed: "/images/produits/bavoir-bambou-brode/bavoir-peppa-costaud.jpg",
          open: "/images/produits/bavoir-bambou-brode/bavoir-peppa-costaud.jpg"
        }
      },
      {
        name: "Modèle Safari & Palmiers (Sans broderie)",
        badge: "Imprimé Safari",
        images: {
          closed: "/images/produits/bavoir-bambou-brode/bavoir-safari-palmiers.jpg",
          open: "/images/produits/bavoir-bambou-brode/bavoir-safari-palmiers.jpg"
        }
      },
      {
        name: "Modèle Toy Story & Héros (Sans broderie)",
        badge: "Toy Story",
        images: {
          closed: "/images/produits/bavoir-bambou-brode/bavoir-toy-story.jpg",
          open: "/images/produits/bavoir-bambou-brode/bavoir-toy-story.jpg"
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
    title: "Trousse en Coton Broderie Cœurs & Vichy Rose",
    price: 25.00,
    category: "Accessoires",
    badge: "Finition Soignée",
    spec: "Toile de coton • Broderie cœurs • Doublure Vichy",
    description: "La petite trousse de toilette irrésistible ! Fabriquée en toile de coton écru parsemée de petits cœurs brodés multicolores, elle est dotée d'une poche extérieure zippée et d'une doublure vichy rose ultra-raffinée. Idéale pour ranger votre maquillage, produits de beauté ou affaires de toilette.",
    imgUrl: "/images/produits/trousse-coton-coeurs-vichy-rose/hero-trousse.jpg",
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
    title: "Gigoteuse Douceur Bambou & Double Gaze (1 à 8 mois)",
    price: 49.00,
    category: "Bébé",
    badge: "Bébé 1 à 8 Mois",
    spec: "Éponge bambou absorbante • Double gaze 100% respirante",
    description: "Le nido d'ange idéal pour des nuits paisibles et régulées ! Cette magnifique gigoteuse évolutive (1 à 8 mois) allie le haut en éponge de bambou ultra-doux avec broderie fine 'Petite Fleur', et le bas en double gaze de coton respirante aux motifs floraux colorés. Conçue pour offrir un confort thermique optimal et respecter la peau délicate de bébé. Fait main en Normandie.",
    imgUrl: "/images/produits/gigoteuse-bambou-double-gaze/hero-gigoteuse.jpg",
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
    title: "Tapis Nomade Bébé Écureuil & Bambou",
    price: 30.00,
    category: "Bébé",
    badge: "Indispensable Bébé",
    spec: "Extérieur tissu bambou • Dessus coton imprimé • Ouate moelleuse",
    description: "Un petit cocon de douceur à emporter partout avec bébé ! Ce tapis nomade molletonné est l'allié incontournable pour les sorties, les visites chez nounou ou les voyages. Confectionné avec un extérieur en tissu bambou ultra-doux et respirant, un ravissant dessus en coton imprimé petits écureuils des bois, et une ouate intérieure pour un confort moelleux et isolant. Création artisanale normande personnalisable sur commande.",
    imgUrl: "/images/boutique/hero-tapis-nomade.jpg",
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

export default function BoutiquePage() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  // Customization Form State
  const [selectedVariantIndex, setSelectedVariantIndex] = useState<number>(0);
  const [selectedViewMode, setSelectedViewMode] = useState<"closed" | "open">("closed");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  const categories = ["Tous", "Bébé", "Accessoires", "Bain", "Maison"];

  const filteredProducts = selectedCategory === "Tous"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  const openCustomizationModal = (product: Product) => {
    setActiveModalProduct(product);
    setSelectedVariantIndex(0);
    setSelectedViewMode("closed");
    setSelectedColor(product.colors[0]?.name || "");
    setQuantity(1);
  };

  const handleAddToCart = () => {
    if (!activeModalProduct) return;

    const variant = activeModalProduct.variants?.[selectedVariantIndex];
    const variantName = variant?.name;
    const finalTitle = variantName 
      ? `${activeModalProduct.title} - ${variantName}`
      : activeModalProduct.title;

    // Support variant price override (e.g. 23€ for small beach bag vs 30€ for large)
    let finalPrice = activeModalProduct.price;
    if (variantName?.includes("30 €")) {
      finalPrice = 30.00;
    } else if (variantName?.includes("23 €")) {
      finalPrice = 23.00;
    }

    const currentVariantImg = variant
      ? variant.images[selectedViewMode]
      : activeModalProduct.imgUrl;

    addToCart({
      productId: activeModalProduct.id,
      title: finalTitle,
      price: finalPrice,
      quantity,
      imgUrl: currentVariantImg,
      threadColor: selectedColor || variantName
    });

    setActiveModalProduct(null);
  };

  return (
    <div className="bg-[#faf8f5] text-[#1c1917] min-h-screen selection:bg-primary selection:text-white pt-24 sm:pt-32">
      <Navbar />

      {/* Google SEO JSON-LD Product & Store Catalog Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemPage",
            "name": "Boutique By Sandrine Couture - Créations Textiles Personnalisées",
            "description": "Boutique artisanale d'articles brodés personnalisés en Normandie : sacs à dos d'écolier, cartables velours, trousses de toilette, serviettes de bain et bavoirs.",
            "url": "https://sandrinecouture.com/boutique",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": PRODUCTS.map((p, idx) => ({
                "@type": "ListItem",
                "position": idx + 1,
                "item": {
                  "@type": "Product",
                  "name": p.title,
                  "description": p.description,
                  "image": `https://sandrinecouture.com${p.imgUrl}`,
                  "category": p.category,
                  "offers": {
                    "@type": "Offer",
                    "priceCurrency": "EUR",
                    "price": p.price.toFixed(2),
                    "availability": "https://schema.org/InStock",
                    "itemCondition": "https://schema.org/NewCondition",
                    "seller": {
                      "@type": "LocalBusiness",
                      "name": "By Sandrine Couture",
                      "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Robertot",
                        "postalCode": "76560",
                        "addressCountry": "FR"
                      }
                    }
                  }
                }
              }))
            }
          })
        }}
      />

      {/* 1. HERO BOUTIQUE QUIET LUXURY */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 border-b border-stone-200/60 overflow-hidden bg-[#faf8f5]">
        
        {/* Subtle Background Accent */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="absolute top-10 right-1/4 w-[400px] h-[400px] bg-primary/[0.04] rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto">
          
          {/* Top Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-10 border-b border-stone-200/80 text-[11px] font-mono tracking-widest uppercase text-stone-500">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold text-stone-800">By Sandrine Couture • Atelier Robertot (Normandie)</span>
              <span className="text-stone-300">/</span>
              <span>Personnalisation Prénom Incluse</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-stone-600">Expédition suivie 48h</span>
              <span className="text-primary font-bold">Paiement 100% Sécurisé</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-900 text-white text-[9px] font-mono tracking-[0.25em] uppercase mb-4 shadow-xs">
                <ShoppingBag size={12} className="text-primary" />
                <span>La Sélection Prête à Personnaliser</span>
              </div>

              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-[-0.03em] leading-[1.05] text-stone-900 uppercase mb-4">
                Chaque pièce a <br />
                <span className="font-serif italic font-normal normal-case text-primary underline decoration-primary/20 underline-offset-8">
                  une histoire à raconter
                </span>.
              </h1>
            </div>

            <p className="text-stone-600 text-sm max-w-sm leading-relaxed font-normal">
              Des matières nobles choisies avec soin (velours côtelé, éponge 550g, gaze de coton, Liberty) prêtes à accueillir la broderie de votre choix. Confectionnées de mes mains dans mon atelier normand.
            </p>
          </div>

          {/* Sticky Segmented Filter Control */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-1.5 rounded-2xl bg-white/80 backdrop-blur-md border border-stone-200/80 shadow-xs">
            <div className="flex flex-wrap items-center gap-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-stone-900 text-white shadow-xs"
                      : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="hidden sm:flex items-center gap-2.5 px-4 text-xs font-mono text-stone-500">
              <SlidersHorizontal size={13} className="text-primary" />
              <span>{filteredProducts.length} créations</span>
            </div>
          </div>

        </div>

      </section>

      {/* 2. CATALOG GRID — COMPACT & ÉPURÉ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-stone-200/60 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => openCustomizationModal(product)}
                className="group cursor-pointer rounded-2xl sm:rounded-3xl bg-white/85 hover:bg-white border border-stone-200/80 hover:border-primary/40 shadow-2xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Visual Image Container — Uncropped Fit */}
                <div className="relative aspect-square w-full overflow-hidden bg-[#f5f0eb] flex items-center justify-center">
                  <img
                    src={product.imgUrl}
                    alt={product.title}
                    className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-stone-900 text-[8px] sm:text-[9px] font-mono tracking-widest uppercase font-bold shadow-2xs">
                      {product.category}
                    </span>
                  </div>

                  {/* Zoom Action on Hover */}
                  <div className="absolute top-2.5 right-2.5 z-10 w-7 h-7 rounded-full bg-stone-900/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Eye size={12} />
                  </div>

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute bottom-2.5 left-2.5 z-10">
                      <span className="px-2 py-0.5 rounded-md bg-stone-950/80 backdrop-blur-md text-white text-[8px] font-mono uppercase tracking-wider">
                        {product.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Details */}
                <div className="p-3.5 sm:p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="text-[10px] font-mono text-primary font-bold uppercase tracking-wider mb-1 line-clamp-1">
                      {product.spec}
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-stone-900 tracking-tight leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                  </div>

                  {/* Price & Action Row */}
                  <div className="mt-3 pt-3 border-t border-stone-200/60 flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-black font-mono text-stone-900">
                      {product.price.toFixed(2)} €
                    </span>
                    <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-wider inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      <span className="hidden sm:inline">Détails</span>
                      <ArrowRight size={11} />
                    </span>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. ATELIER TRUST MATRIX — BEIGE CHIC */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-stone-200/60 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white/70 border border-stone-200/80 flex items-start gap-4">
            <div className="w-11 h-11 rounded-2xl bg-white border border-stone-200/80 flex items-center justify-center text-primary shrink-0 shadow-2xs">
              <Scissors size={18} />
            </div>
            <div>
              <h4 className="text-sm font-black text-stone-900 mb-1 uppercase tracking-tight">Personnalisation Prénom</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Chaque création de la boutique inclut la broderie de personnalisation du prénom avec le style d'écriture de votre choix.
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white/70 border border-stone-200/80 flex items-start gap-4">
            <div className="w-11 h-11 rounded-2xl bg-white border border-stone-200/80 flex items-center justify-center text-primary shrink-0 shadow-2xs">
              <ShieldCheck size={18} />
            </div>
            <div>
              <h4 className="text-sm font-black text-stone-900 mb-1 uppercase tracking-tight">Fils Madeira Résistants</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Broderies certifiées Oeko-Tex Standard 100, garanties pour résister aux lavages répétés sans ternir.
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white/70 border border-stone-200/80 flex items-start gap-4">
            <div className="w-11 h-11 rounded-2xl bg-white border border-stone-200/80 flex items-center justify-center text-primary shrink-0 shadow-2xs">
              <Clock size={18} />
            </div>
            <div>
              <h4 className="text-sm font-black text-stone-900 mb-1 uppercase tracking-tight">Confection & Envoi Rapide</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Votre commande est confectionnée et brodée à Robertot puis expédiée sous 3 à 5 jours avec numéro de suivi.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. MODAL DE PERSONNALISATION HAUT DE GAMME */}
      {activeModalProduct && (
        <div 
          className="fixed inset-0 z-[100] bg-stone-950/70 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveModalProduct(null)}
        >
          <div 
            className="bg-[#faf8f5] border border-black/10 rounded-[2.5rem] p-6 sm:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-stone-200/80 hover:bg-stone-300 transition-colors text-stone-700 cursor-pointer"
              aria-label="Fermer la vue détaillée"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header with High-Res Image & Dual-View Toggle */}
            <div className="mb-6">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#f5f0eb] border border-black/10 mb-3 flex items-center justify-center p-2">
                <img
                  src={
                    activeModalProduct.variants && activeModalProduct.variants[selectedVariantIndex]
                      ? activeModalProduct.variants[selectedVariantIndex].images[selectedViewMode]
                      : activeModalProduct.imgUrl
                  }
                  alt={activeModalProduct.title}
                  className="w-full h-full object-contain transition-all duration-300"
                />
              </div>

              {/* Dual View Toggle Controls (Only rendered if open and closed images are different) */}
              {activeModalProduct.variants && 
               activeModalProduct.variants[selectedVariantIndex] &&
               activeModalProduct.variants[selectedVariantIndex].images.closed !== activeModalProduct.variants[selectedVariantIndex].images.open && (
                <div className="flex items-center justify-center gap-2 mb-4 p-1.5 rounded-2xl bg-stone-200/60 border border-stone-300/60">
                  <button
                    onClick={() => setSelectedViewMode("closed")}
                    className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      selectedViewMode === "closed"
                        ? "bg-stone-900 text-white shadow-xs"
                        : "text-stone-700 hover:text-stone-950 hover:bg-stone-200/80"
                    }`}
                  >
                    Vue Extérieure
                  </button>
                  <button
                    onClick={() => setSelectedViewMode("open")}
                    className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      selectedViewMode === "open"
                        ? "bg-stone-900 text-white shadow-xs"
                        : "text-stone-700 hover:text-stone-950 hover:bg-stone-200/80"
                    }`}
                  >
                    Vue Intérieure
                  </button>
                </div>
              )}

              <div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold block mb-1">
                  {activeModalProduct.category} • {activeModalProduct.spec}
                </span>
                <h2 className="text-xl font-black uppercase tracking-tight text-stone-900 leading-tight">
                  {activeModalProduct.title}
                </h2>
                <p className="text-sm text-stone-600 mt-2 text-xs leading-relaxed">
                  {activeModalProduct.description}
                </p>
                <div className="mt-3 text-lg font-black font-mono text-stone-950">
                  { (
                    activeModalProduct.variants?.[selectedVariantIndex]?.name.includes("30 €") 
                      ? 30 
                      : activeModalProduct.variants?.[selectedVariantIndex]?.name.includes("23 €") 
                      ? 23 
                      : activeModalProduct.price
                  ).toFixed(2) } € TTC
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-6 pt-4 border-t border-stone-200">
              
              {/* Option A: Variants Selector if available */}
              {activeModalProduct.variants ? (
                <div>
                  <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-stone-700 mb-2.5">
                    Choisissez le modèle du sac :
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {activeModalProduct.variants.map((v, idx) => (
                      <button
                        key={v.name}
                        onClick={() => {
                          setSelectedVariantIndex(idx);
                          setSelectedViewMode("closed");
                        }}
                        className={`flex items-center justify-between p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                          selectedVariantIndex === idx
                            ? "bg-stone-900 text-white border-stone-900 shadow-md"
                            : "bg-white text-stone-800 border-black/10 hover:border-black/25 hover:bg-stone-50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <img 
                            src={v.images.closed} 
                            alt={v.name} 
                            className="w-10 h-10 rounded-xl object-cover border border-white/20"
                          />
                          <div>
                            <div className="text-xs font-bold font-mono uppercase tracking-wider">{v.name}</div>
                            {v.badge && (
                              <div className={`text-[9px] font-mono uppercase ${selectedVariantIndex === idx ? "text-stone-300" : "text-stone-500"}`}>
                                {v.badge}
                              </div>
                            )}
                          </div>
                        </div>
                        {selectedVariantIndex === idx && (
                          <CheckCircle2 size={16} className="text-primary shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                /* Fallback to fabric colors pick for single items */
                <div>
                  <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-stone-700 mb-2.5">
                    Couleur du support :
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProduct.colors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c.name)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                          selectedColor === c.name
                            ? "bg-stone-900 text-white border-stone-900 shadow-xs"
                            : "bg-white text-stone-700 border-black/10 hover:border-black/25"
                        }`}
                      >
                        <span
                          className="w-3 h-3 rounded-full border border-black/20 shrink-0"
                          style={{ backgroundColor: c.hex }}
                        />
                        <span>{c.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Option B: Quantity Selector */}
              <div className="flex items-center justify-between border-t border-stone-200 pt-4">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-700 block">
                    Quantité :
                  </span>
                  <span className="text-[9px] text-stone-500">Stock disponible • Envoi 48h</span>
                </div>

                <div className="flex items-center border border-black/15 rounded-full py-1 px-2.5 bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1 text-stone-600 hover:text-stone-950 font-bold transition-colors cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-3 text-sm font-mono font-black text-stone-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1 text-stone-600 hover:text-stone-950 font-bold transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

            </div>

            {/* Modal Actions */}
            <div className="mt-6 flex gap-3 border-t border-stone-200 pt-5">
              <Button
                variant="outline"
                onClick={() => setActiveModalProduct(null)}
                className="flex-1 h-12 rounded-full uppercase text-xs font-bold tracking-wider cursor-pointer border-black/15"
              >
                Fermer
              </Button>
              <Button
                onClick={handleAddToCart}
                className="flex-1 h-12 rounded-full bg-primary hover:bg-primary/90 text-white font-bold uppercase text-xs tracking-wider shadow-md shadow-primary/20 cursor-pointer"
              >
                Ajouter ({ 
                  ((activeModalProduct.variants?.[selectedVariantIndex]?.name.includes("30 €") 
                    ? 30 
                    : activeModalProduct.variants?.[selectedVariantIndex]?.name.includes("23 €") 
                    ? 23 
                    : activeModalProduct.price) * quantity).toFixed(2) 
                } €)
              </Button>
            </div>

          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
