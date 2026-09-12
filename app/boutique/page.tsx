"use client";

import React, { useState } from "react";
import Image from "next/image";
import standMarcheImg from "@/public/images/boutique/stand-marche-normandie.jpg";
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
  Heart,
  Play,
  Film,
  Coffee,
  Info
} from "lucide-react";
import { Button } from "@/components/ui/button";

import { PRODUCTS_CATALOG, PRODUCTS_CATALOG as PRODUCTS } from "@/lib/products-catalog";
import { Product, ProductVariant } from "@/types/chat-commerce";

export default function BoutiquePage() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  // Customization Form State
  const [selectedVariantIndex, setSelectedVariantIndex] = useState<number>(0);
  const [selectedViewMode, setSelectedViewMode] = useState<"closed" | "open">("closed");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [modalActiveTab, setModalActiveTab] = useState<"photos" | "video" | "guide">("photos");

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
    setModalActiveTab("photos");
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
      category: activeModalProduct.category,
      variantName: variantName || undefined,
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
      <section className="relative px-4 sm:px-6 lg:px-8 pt-8 pb-14 sm:pb-20 border-b border-stone-200/60 overflow-hidden bg-stone-900 text-white">
        
        {/* Authentic Normandie Market Stand Photo in Background */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <Image 
            src={standMarcheImg} 
            alt="Le stand By Sandrine Couture sur les marchés artisanaux de Normandie"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_40%] filter brightness-[0.95] contrast-[1.05]"
          />
          {/* Subtle Dark Glassmorphism scrim: text is super crisp on left, stand and products completely clear on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/65 to-stone-950/30 z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/70 z-[1]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Top Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-10 border-b border-white/15 text-[11px] font-mono tracking-widest uppercase text-stone-300">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold text-white">By Sandrine Couture • Atelier Robertot (Normandie)</span>
              <span className="text-stone-400">/</span>
              <span>Personnalisation Prénom Incluse</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-stone-300">Expédition suivie 48h</span>
              <span className="text-primary-light font-bold">Paiement 100% Sécurisé</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-900/90 text-white text-[9px] font-mono tracking-[0.25em] uppercase mb-4 shadow-md border border-white/10 backdrop-blur-md">
                <ShoppingBag size={12} className="text-primary" />
                <span>La Sélection Prête à Personnaliser</span>
              </div>

              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-[-0.03em] leading-[1.05] text-white uppercase mb-4 drop-shadow-md">
                Chaque pièce a <br />
                <span className="font-serif italic font-normal normal-case text-primary-light underline decoration-primary/40 underline-offset-8">
                  une histoire à raconter
                </span>.
              </h1>
            </div>

            <p className="text-stone-200 text-sm sm:text-base max-w-sm leading-relaxed font-normal drop-shadow-sm">
              Des matières nobles choisies avec soin (velours côtelé, bambou doux, gaze de coton, Liberty) prêtes à accueillir la broderie de votre choix. Confectionnées de mes mains dans mon atelier normand.
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

                  {/* Video Indicator Badge */}
                  {product.videoUrl && (
                    <div className="absolute bottom-2.5 right-2.5 z-10">
                      <span className="px-2.5 py-0.5 rounded-full bg-primary text-white text-[8px] font-mono uppercase font-bold flex items-center gap-1 shadow-md">
                        <Play size={8} className="fill-white" />
                        <span>Vidéo</span>
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

            {/* Modal Header with Media Switcher & Controls */}
            <div className="mb-6">
              
              {/* Media & Guide Tab Switcher */}
              {(activeModalProduct.videoUrl || activeModalProduct.details) && (
                <div className="flex items-center gap-1.5 mb-4 p-1 rounded-2xl bg-stone-200/70 border border-stone-300/60">
                  <button
                    onClick={() => setModalActiveTab("photos")}
                    className={`flex-1 py-2 px-2.5 rounded-xl text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      modalActiveTab === "photos"
                        ? "bg-stone-900 text-white shadow-xs"
                        : "text-stone-700 hover:text-stone-950 hover:bg-stone-200/80"
                    }`}
                  >
                    <Eye size={13} />
                    <span>Photos</span>
                  </button>

                  {activeModalProduct.videoUrl && (
                    <button
                      onClick={() => setModalActiveTab("video")}
                      className={`flex-1 py-2 px-2.5 rounded-xl text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        modalActiveTab === "video"
                          ? "bg-primary text-white shadow-xs"
                          : "text-stone-700 hover:text-stone-950 hover:bg-stone-200/80"
                      }`}
                    >
                      <Play size={13} className="fill-current" />
                      <span>Démo Vidéo</span>
                    </button>
                  )}

                  {activeModalProduct.details && (
                    <button
                      onClick={() => setModalActiveTab("guide")}
                      className={`flex-1 py-2 px-2.5 rounded-xl text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        modalActiveTab === "guide"
                          ? "bg-stone-900 text-white shadow-xs"
                          : "text-stone-700 hover:text-stone-950 hover:bg-stone-200/80"
                      }`}
                    >
                      <Info size={13} />
                      <span>Guide Poches</span>
                    </button>
                  )}
                </div>
              )}

              {/* TAB 1: HIGH-RES PHOTOS */}
              {modalActiveTab === "photos" && (
                <>
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
                </>
              )}

              {/* TAB 2: VERTICAL VIDEO PLAYER */}
              {modalActiveTab === "video" && activeModalProduct.videoUrl && (
                <div className="mb-4">
                  <div className="relative aspect-[9/16] max-h-[380px] sm:max-h-[420px] mx-auto rounded-2xl overflow-hidden bg-stone-950 border border-black/15 shadow-xl flex items-center justify-center">
                    <video
                      src={activeModalProduct.videoUrl}
                      poster={activeModalProduct.videoPoster}
                      controls
                      playsInline
                      preload="none"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-3 mt-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-stone-800 text-[11px] font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                    <span>🎬 Démo vidéo à l'Atelier Robertot : découvrez la mise en place de la tasse et des 6 poches.</span>
                  </div>
                </div>
              )}

              {/* TAB 3: EXPLANATION GUIDE & POCKETS */}
              {modalActiveTab === "guide" && activeModalProduct.details && (
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-stone-200/90 shadow-2xs space-y-4 mb-4 text-left">
                  <div>
                    <h4 className="text-xs font-mono font-black uppercase tracking-wider text-stone-900 flex items-center gap-2 mb-2">
                      <Coffee size={14} className="text-primary" />
                      <span>Ce que vous pouvez y glisser :</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeModalProduct.details.capacity?.map((cap, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-stone-700 bg-stone-50 p-2 rounded-xl border border-stone-100">
                          <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono font-black uppercase tracking-wider text-stone-900 flex items-center gap-2 mb-2">
                      <Scissors size={14} className="text-primary" />
                      <span>Organisation des 6 poches artisanales :</span>
                    </h4>
                    <ul className="space-y-1.5 text-xs text-stone-600">
                      {activeModalProduct.details.howItWorks?.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-4 h-4 rounded-full bg-stone-100 text-stone-700 text-[10px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-stone-500">
                    <span>📐 {activeModalProduct.details.dimensions}</span>
                    <span>🧼 {activeModalProduct.details.care}</span>
                  </div>
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
