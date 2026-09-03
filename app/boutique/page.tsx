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
    spec: "Éponge 550g/m² • Résistance chlore & 60°C",
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
            "description": "Boutique artisanale d'articles brodés personnalisés en Normandie : sacs à dos d'écolier en velours, trousses de toilette, serviettes de bain et bavoirs.",
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


      {/* 1. HERO BOUTIQUE LUXURY CONCEPT STORE */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 border-b border-black/[0.06] overflow-hidden">
        
        {/* Background Patterns */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:64px_64px]" />
          <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-primary/[0.06] rounded-full blur-[140px]" />
        </div>

        <div className="max-w-7xl mx-auto">
          
          {/* Top Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-12 border-b border-black/[0.08] text-[11px] font-mono tracking-widest uppercase text-stone-500">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold text-stone-800">Boutique Atelier • Confection Réalisée en Normandie</span>
              <span className="text-stone-300">/</span>
              <span>Personnalisation Prénom Incluse</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-stone-600">Expédition suivie 48h</span>
              <span className="text-primary font-bold">Paiement 100% Sécurisé</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 text-white text-[9px] font-mono tracking-[0.25em] uppercase mb-6 shadow-sm">
                <ShoppingBag size={12} className="text-primary" />
                <span>La Sélection Prête à Personnaliser</span>
              </div>

              <h1 className="text-4xl sm:text-6xl xl:text-[4.25rem] font-black tracking-[-0.03em] leading-[1.02] text-stone-900 uppercase mb-6">
                Chaque pièce a <br />
                <span className="font-serif italic font-normal normal-case text-primary underline decoration-primary/20 underline-offset-8">
                  une histoire à raconter
                </span>.
              </h1>

              <p className="text-stone-600 text-base max-w-lg leading-relaxed font-normal">
                Des matières premières nobles choisies avec soin (velours côtelé, éponge 550g, gaze de coton) prêtes à accueillir la broderie personnalisée de votre choix. Confectionnées avec amour de mes mains dans mon atelier normand.
              </p>
            </div>

            {/* Video Workshop Showcase Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden bg-stone-950 border border-stone-800 shadow-2xl group">
                <video
                  src="/videos/boutique-hero.mp4"
                  poster="/images/realisations/sac-personnalise-brode-octavia.webp"
                  preload="metadata"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-stone-950/80 backdrop-blur-md border border-white/20 text-white text-[9px] font-mono tracking-widest uppercase flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                    Atelier en Direct
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-white">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-stone-300">
                    Broderie & Confection Robertot
                  </span>
                  <span className="text-[10px] font-mono text-primary font-bold">
                    100% Artisanal
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Luxury Filter Segmented Control */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-2 rounded-2xl bg-white border border-black/[0.08] shadow-sm">
            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-stone-900 text-white shadow-sm"
                      : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="hidden sm:flex items-center gap-3 px-4 text-xs font-mono text-stone-500">
              <SlidersHorizontal size={14} className="text-primary" />
              <span>{filteredProducts.length} créations disponibles</span>
            </div>
          </div>

        </div>

      </section>

      {/* 2. CATALOG GRID FRAMER LOOKBOOK */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group relative rounded-[2.5rem] bg-white border border-black/[0.07] shadow-sm hover:shadow-2xl hover:border-black/20 transition-all duration-500 overflow-hidden flex flex-col justify-between"
              >
                {/* Visual Canvas */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-950">
                  <img
                    src={product.imgUrl}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full bg-white/95 text-stone-900 text-[9px] font-mono tracking-widest uppercase font-bold shadow-xs">
                      {product.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-stone-950/80 backdrop-blur-md border border-white/20 text-white text-[9px] font-mono uppercase tracking-wider">
                      {product.badge}
                    </span>
                  </div>

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-4 right-4 z-10">
                    <span className="px-3.5 py-1.5 rounded-full bg-stone-900/90 text-white backdrop-blur-md border border-white/20 text-xs font-mono font-black shadow-lg">
                      {product.price.toFixed(2)} €
                    </span>
                  </div>
                </div>

                {/* Content Card Details */}
                <div className="p-7 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-black tracking-tight text-stone-900 mb-1.5 leading-snug group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <div className="text-[11px] font-mono text-primary font-bold mb-3">
                      {product.spec}
                    </div>
                    <p className="text-stone-600 text-xs leading-relaxed mb-6 font-normal">
                      {product.description}
                    </p>
                  </div>

                  {/* Available Thread/Fabric Swatches */}
                  <div className="pt-4 border-t border-black/[0.06]">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 font-bold">
                        Tissus disponibles :
                      </span>
                      <div className="flex items-center gap-1.5">
                        {product.colors.map((c) => (
                          <span
                            key={c.name}
                            title={c.name}
                            className="w-3.5 h-3.5 rounded-full border border-black/15 shadow-2xs"
                            style={{ backgroundColor: c.hex }}
                          />
                        ))}
                      </div>
                    </div>

                    <Button
                      onClick={() => openCustomizationModal(product)}
                      className="w-full h-12 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-bold uppercase tracking-wider text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer group-hover:bg-primary group-hover:shadow-primary/20"
                    >
                      <span>Ajouter au Panier</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. ATELIER TRUST MATRIX */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-black/[0.06] bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-8 rounded-[2rem] bg-[#faf8f5] border border-black/[0.06] flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white border border-black/10 flex items-center justify-center text-primary shrink-0">
              <Scissors size={20} />
            </div>
            <div>
              <h4 className="text-base font-black text-stone-900 mb-1">Prénom Brodé Offert</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Chaque création de la boutique inclut la personnalisation du prénom avec la typographie de votre choix.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-[2rem] bg-[#faf8f5] border border-black/[0.06] flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white border border-black/10 flex items-center justify-center text-primary shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h4 className="text-base font-black text-stone-900 mb-1">Fils Madeira Résistants</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Broderies indélébiles certifiées Oeko-Tex Standard 100, garanties pour résister à des dizaines de lavages.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-[2rem] bg-[#faf8f5] border border-black/[0.06] flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white border border-black/10 flex items-center justify-center text-primary shrink-0">
              <Clock size={20} />
            </div>
            <div>
              <h4 className="text-base font-black text-stone-900 mb-1">Confection & Envoi Rapide</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Votre commande est personnalisée à Robertot et expédiée sous 3 à 5 jours avec numéro de suivi.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. MODAL DE PERSONNALISATION HAUT DE GAMME */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-[100] bg-stone-950/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white border border-black/10 rounded-[2.5rem] p-6 sm:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in zoom-in-95 duration-300">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-stone-100 hover:bg-stone-200 transition-colors text-stone-600 hover:text-stone-900 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div className="mb-6 flex gap-4 items-center pr-8">
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-stone-900 border border-black/10 shrink-0">
                <img
                  src={activeModalProduct.imgUrl}
                  alt={activeModalProduct.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-primary font-bold block">
                  Configuration Article
                </span>
                <h2 className="text-lg font-black uppercase tracking-tight text-stone-900 leading-tight">
                  {activeModalProduct.title}
                </h2>
                <p className="text-xs text-stone-500 font-mono mt-0.5">
                  {activeModalProduct.price.toFixed(2)} € TTC
                </p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              
              {/* Option A: Fabric color pick */}
              <div>
                <label className="block text-[10px] font-mono font-bold uppercase tracking-wider text-stone-700 mb-3">
                  1. Couleur du support textile :
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {activeModalProduct.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                        selectedColor === c.name
                          ? "bg-stone-900 text-white border-stone-900 shadow-sm"
                          : "bg-stone-50 text-stone-700 border-black/10 hover:border-black/25"
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-black/20 shrink-0"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Option B: Quantity Selector */}
              <div className="flex items-center justify-between border-t border-black/5 pt-5">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-700 block">
                    2. Quantité souhaitée :
                  </span>
                  <span className="text-[10px] text-stone-400">Prénoms configurables après validation</span>
                </div>

                <div className="flex items-center border border-black/15 rounded-full py-1 px-2.5 bg-stone-50">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1.5 text-stone-600 hover:text-stone-950 font-bold transition-colors cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-4 text-sm font-mono font-black text-stone-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1.5 text-stone-600 hover:text-stone-950 font-bold transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

            </div>

            {/* Modal Actions */}
            <div className="mt-8 flex gap-3 border-t border-black/5 pt-5">
              <Button
                variant="outline"
                onClick={() => setActiveModalProduct(null)}
                className="flex-1 h-13 rounded-full uppercase text-xs font-bold tracking-wider cursor-pointer"
              >
                Annuler
              </Button>
              <Button
                onClick={handleAddToCart}
                className="flex-1 h-13 rounded-full bg-primary hover:bg-primary/90 text-white font-bold uppercase text-xs tracking-wider shadow-lg shadow-primary/20 cursor-pointer"
              >
                Ajouter au Panier ({ (activeModalProduct.price * quantity).toFixed(2) } €)
              </Button>
            </div>

          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
