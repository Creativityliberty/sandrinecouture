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

interface Product {
  id: number;
  title: string;
  price: number;
  category: "Bébé" | "Accessoires" | "Bain" | "Maison";
  description: string;
  badge: string;
  spec: string;
  imgUrl: string;
  colors: { name: string; hex: string }[];
  fonts: string[];
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Sac à dos enfant personnalisé",
    price: 39.00,
    category: "Bébé",
    badge: "Bestseller Crèche",
    spec: "Velours côtelé doux • Doublure renforcée",
    description: "Petit sac à dos en velours côtelé idéal pour la crèche et l'école maternelle, avec personnalisation prénom et joli motif animal.",
    imgUrl: "/images/realisations/sac-personnalise-brode-octavia.webp",
    colors: [
      { name: "Vieux rose", hex: "#D4A373" },
      { name: "Bleu marine", hex: "#1D3557" },
      { name: "Vert sauge", hex: "#A3B19B" }
    ],
    fonts: ["Script", "Moderne", "Classique"]
  },
  {
    id: 2,
    title: "Trousse de toilette en velours",
    price: 25.00,
    category: "Accessoires",
    badge: "Finitions Soignées",
    spec: "Velours premium • Doublure fleurie imperméable",
    description: "Trousse de toilette élégante en velours côtelé avec doublure fleurie. Parfaite pour y glisser toutes vos affaires de toilette.",
    imgUrl: "/images/realisations/trousse-velours-rose-brodee.webp",
    colors: [
      { name: "Rose poudré", hex: "#E8C5C8" },
      { name: "Vert forêt", hex: "#2D5A27" },
      { name: "Bleu marine", hex: "#1A365D" }
    ],
    fonts: ["Script", "Moderne", "Classique"]
  },
  {
    id: 3,
    title: "Serviette de bain de luxe",
    price: 35.00,
    category: "Bain",
    badge: "Qualité Grand Hôtel",
    spec: "Éponge 550g/m² • Résistance 60°C",
    description: "Serviette éponge épaisse et ultra-douce, idéale pour le bain quotidien avec une broderie de précision au choix.",
    imgUrl: "/images/realisations/serviette-bain-brodee-personnalisee-medieval-fantastique-robertot-normandie.webp",
    colors: [
      { name: "Blanc pur", hex: "#FFFFFF" },
      { name: "Gris anthracite", hex: "#4A5568" },
      { name: "Vert eucalyptus", hex: "#8FBC8F" }
    ],
    fonts: ["Script", "Moderne", "Classique"]
  },
  {
    id: 4,
    title: "Bavoir bébé personnalisé",
    price: 15.00,
    category: "Bébé",
    badge: "100% Coton Bio",
    spec: "Double gaze & éponge douce • Hypoallergénique",
    description: "Bavoir bébé en double gaze de coton doux et éponge absorbante, personnalisé avec un prénom ou un motif brodé.",
    imgUrl: "/images/realisations/bavoir-bebe-mon-premier-noel.webp",
    colors: [
      { name: "Blanc", hex: "#F7FAFC" },
      { name: "Rouge Noël", hex: "#C53030" },
      { name: "Jaune moutarde", hex: "#ECC94B" }
    ],
    fonts: ["Script", "Moderne", "Classique"]
  },
  {
    id: 5,
    title: "Protège-carnet de santé",
    price: 22.00,
    category: "Bébé",
    badge: "Cadeau Naissance",
    spec: "Intérieur molletonné • Fermeture pression",
    description: "Protège-carnet de santé molletonné pour conserver précieusement les documents de santé de bébé, personnalisé de son prénom.",
    imgUrl: "/images/realisations/ensemble-naissance-koala-baby-love.webp",
    colors: [
      { name: "Vert forêt", hex: "#1A3A2A" },
      { name: "Bleu pastel", hex: "#BEE3F8" },
      { name: "Terracotta", hex: "#C08A74" }
    ],
    fonts: ["Script", "Moderne", "Classique"]
  },
  {
    id: 6,
    title: "Sac cabas en lin / Totebag",
    price: 18.00,
    category: "Maison",
    badge: "Matière Noble",
    spec: "Toile de lin robuste • Coutures renforcées",
    description: "Sac totebag en lin naturel et coton, idéal pour faire vos courses ou vos sorties avec une broderie personnalisée discrète.",
    imgUrl: "/images/realisations/sac-main-lin-broderie-discrete.webp",
    colors: [
      { name: "Lin naturel", hex: "#E2D9C8" },
      { name: "Blanc cassé", hex: "#FFFDF9" },
      { name: "Noir", hex: "#1A202C" }
    ],
    fonts: ["Script", "Moderne", "Classique"]
  },
  {
    id: 7,
    title: "Cartable maternelle rétro en velours",
    price: 45.00,
    category: "Bébé",
    badge: "Coup de Cœur Rentrée",
    spec: "Velours côtelé grosse côte • Fermoirs métal vintage",
    description: "Cartable d'école maternelle style rétro avec poignée confort et broderie du prénom en fil haute densité.",
    imgUrl: "/images/realisations/cartables-maternelle-velours-cotele-retro-brodes-ruben-illan.webp",
    colors: [
      { name: "Bleu pétrole", hex: "#1E3D59" },
      { name: "Vieux rose", hex: "#D4A373" },
      { name: "Vert forêt", hex: "#2D5A27" }
    ],
    fonts: ["Script", "Moderne", "Classique"]
  },
  {
    id: 8,
    title: "Doudou plat lapin & Liberty fleuri",
    price: 28.00,
    category: "Bébé",
    badge: "Fait Main Robertot",
    spec: "Éponge rose poudré • Véritable Liberty de Londres",
    description: "Doudou plat lapin ultra-doux avec oreilles et foulard en tissu Liberty, brodé au prénom de bébé en fil grand teint.",
    imgUrl: "/images/realisations/doudou-plat-lapin-rose-liberty-brode-prenom-nahima.webp",
    colors: [
      { name: "Rose poudré", hex: "#E8C5C8" },
      { name: "Écru", hex: "#F5F0EA" },
      { name: "Vert d'eau", hex: "#C7E8D8" }
    ],
    fonts: ["Script", "Moderne", "Classique"]
  },
  {
    id: 9,
    title: "Gilet de berger réversible bébé",
    price: 38.00,
    category: "Bébé",
    badge: "Pièce Artisanale",
    spec: "Sherpa moumoute ultra-chaud • Suédine marron",
    description: "Gilet sans manche réversible pour bébé, parfait pour les demi-saisons et les promenades bien au chaud.",
    imgUrl: "/images/realisations/gilet-berger-bebe-reversible-moumoute-sherpa.webp",
    colors: [
      { name: "Naturel", hex: "#E2D9C8" },
      { name: "Chocolat", hex: "#5C4033" }
    ],
    fonts: ["Classique"]
  },
  {
    id: 10,
    title: "Lange de cérémonie & baptême brodé",
    price: 24.00,
    category: "Bébé",
    badge: "Cérémonie",
    spec: "Double gaze coton blanc • Broderie soignée or ou vert",
    description: "Lange d'apparat en mousseline de coton blanc avec broderie personnalisée pour baptême (parrain, marraine, date).",
    imgUrl: "/images/realisations/lange-bapteme-brode-ours-parrain-marraine-enzo.webp",
    colors: [
      { name: "Blanc pur", hex: "#FFFFFF" }
    ],
    fonts: ["Script", "Classique"]
  },
  {
    id: 11,
    title: "Sac banane XL velours brodé",
    price: 32.00,
    category: "Accessoires",
    badge: "Tendance Mode",
    spec: "Velours côtelé épais • Sangle ajustable résistante",
    description: "Grande banane zippée avec texte ou motif brodé personnalisé, ultra pratique pour le quotidien.",
    imgUrl: "/images/realisations/banane-brodee-je-roule-ma-bosse.webp",
    colors: [
      { name: "Gris souris", hex: "#7E8287" },
      { name: "Noir profond", hex: "#1C1917" },
      { name: "Terracotta", hex: "#C08A74" }
    ],
    fonts: ["Script", "Moderne"]
  },
  {
    id: 12,
    title: "Sweat à message affectif brodé",
    price: 49.00,
    category: "Maison",
    badge: "Cadeau Famille",
    spec: "Coton peigné doux 320g • Broderie cursive satinée",
    description: "Sweat col rond ou hoodie brodé d'une attention affectve : Nounou d'amour, Tata d'amour, Maman louve, etc.",
    imgUrl: "/images/realisations/sweats-brodes-nounou-damour-tata-damour-cadeau-personnalise.webp",
    colors: [
      { name: "Écru chiné", hex: "#F0ECE1" },
      { name: "Denim bleu", hex: "#3B5998" },
      { name: "Léopard doux", hex: "#7D5A43" }
    ],
    fonts: ["Script", "Moderne"]
  }
];

export default function BoutiquePage() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  // Customization Form State
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  const categories = ["Tous", "Bébé", "Accessoires", "Bain", "Maison"];

  const filteredProducts = selectedCategory === "Tous"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  const openCustomizationModal = (product: Product) => {
    setActiveModalProduct(product);
    setSelectedColor(product.colors[0]?.name || "");
    setQuantity(1);
  };

  const handleAddToCart = () => {
    if (!activeModalProduct) return;

    addToCart({
      productId: activeModalProduct.id,
      title: activeModalProduct.title,
      price: activeModalProduct.price,
      quantity,
      imgUrl: activeModalProduct.imgUrl,
      threadColor: selectedColor
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
                {/* Visual Image Container — Compact Aspect Ratio */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-100">
                  <img
                    src={product.imgUrl}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
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

            {/* Modal Header with High-Res Image */}
            <div className="mb-6">
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-stone-900 border border-black/10 mb-4">
                <img
                  src={activeModalProduct.imgUrl}
                  alt={activeModalProduct.title}
                  className="w-full h-full object-cover"
                />
              </div>

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
                  {activeModalProduct.price.toFixed(2)} € TTC
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-6 pt-4 border-t border-stone-200">
              
              {/* Option A: Fabric color pick */}
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

              {/* Option B: Quantity Selector */}
              <div className="flex items-center justify-between border-t border-stone-200 pt-4">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-700 block">
                    Quantité :
                  </span>
                  <span className="text-[9px] text-stone-500">Prénoms configurables après validation</span>
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
                Ajouter ({ (activeModalProduct.price * quantity).toFixed(2) } €)
              </Button>
            </div>

          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
