"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Product } from "@/types/chat-commerce";
import { useCart } from "@/context/cart-context";
import { 
  Copy, 
  Check, 
  Share2, 
  ShoppingBag, 
  MessageCircle, 
  ShieldCheck, 
  Scissors, 
  Clock, 
  ChevronRight, 
  Eye, 
  Play, 
  Info, 
  CheckCircle2, 
  Coffee,
  Sparkles,
  ArrowLeft,
  Truck,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRODUCTS_CATALOG } from "@/lib/products-catalog";

interface ProductViewProps {
  product: Product;
}

export function ProductView({ product }: ProductViewProps) {
  const { addToCart } = useCart();
  
  // Customization & View states
  const [selectedVariantIndex, setSelectedVariantIndex] = useState<number>(0);
  const [selectedViewMode, setSelectedViewMode] = useState<"closed" | "open">("closed");
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || "");
  const [quantity, setQuantity] = useState(1);
  const [activeMediaTab, setActiveMediaTab] = useState<"photos" | "video" | "guide">("photos");
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number>(0);
  const [copied, setCopied] = useState(false);
  const [addedToCartSuccess, setAddedToCartSuccess] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(window.location.href);
    }
  }, []);

  const currentVariant = product.variants?.[selectedVariantIndex];
  const variantName = currentVariant?.name;

  // Dynamic price calculation based on variant
  let currentPrice = product.price;
  if (variantName?.includes("30 €")) {
    currentPrice = 30.00;
  } else if (variantName?.includes("23 €")) {
    currentPrice = 23.00;
  }

  const currentImage = currentVariant 
    ? currentVariant.images[selectedViewMode]
    : product.imgUrl;

  const handleCopyLink = async () => {
    try {
      const urlToCopy = typeof window !== "undefined" ? window.location.href : `https://sandrinecouture.com/boutique/${product.slug}`;
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(urlToCopy);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error("Erreur copie presse-papier:", err);
    }
  };

  const handleNativeShare = async () => {
    const urlToShare = typeof window !== "undefined" ? window.location.href : `https://sandrinecouture.com/boutique/${product.slug}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${product.title} • By Sandrine Couture`,
          text: `${product.title} - Création artisanale confectionnée en Normandie`,
          url: urlToShare,
        });
      } catch (err) {
        handleCopyLink();
      }
    } else {
      handleCopyLink();
    }
  };

  const handleAddToCart = () => {
    const finalTitle = variantName 
      ? `${product.title} - ${variantName}`
      : product.title;

    addToCart({
      productId: product.id,
      title: finalTitle,
      price: currentPrice,
      quantity,
      imgUrl: currentImage,
      category: product.category,
      variantName: variantName || undefined,
      threadColor: selectedColor || variantName
    });

    setAddedToCartSuccess(true);
    setTimeout(() => setAddedToCartSuccess(false), 3500);
  };

  const whatsappMessage = encodeURIComponent(
    `Bonjour Sandrine, je suis très intéressé(e) par votre création artisanale "${product.title}" (${typeof window !== "undefined" ? window.location.href : `https://sandrinecouture.com/boutique/${product.slug}`}) ! Pouvez-vous me donner plus de détails sur la personnalisation et la disponibilité ?`
  );

  const recommendedProducts = PRODUCTS_CATALOG
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="bg-[#faf8f5] text-[#1c1917] min-h-screen selection:bg-primary selection:text-white pt-24 sm:pt-28">
      
      {/* 1. BREADCRUMBS & SHARE ACTION BAR */}
      <div className="border-b border-stone-200/80 bg-white/60 backdrop-blur-md sticky top-16 sm:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3">
          
          {/* Breadcrumb links */}
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-1.5 text-xs font-mono text-stone-500 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-stone-900 transition-colors">
              Accueil
            </Link>
            <ChevronRight size={12} className="text-stone-400 shrink-0" />
            <Link href="/boutique" className="hover:text-stone-900 transition-colors">
              Boutique
            </Link>
            <ChevronRight size={12} className="text-stone-400 shrink-0" />
            <span className="text-stone-400 font-normal">{product.category}</span>
            <ChevronRight size={12} className="text-stone-400 shrink-0" />
            <span className="text-stone-900 font-bold truncate max-w-[180px] sm:max-w-xs">{product.title}</span>
          </nav>

          {/* Share & Copy URL Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                copied
                  ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                  : "bg-white text-stone-700 border-stone-200 hover:border-stone-400 hover:bg-stone-50 shadow-2xs"
              }`}
              title="Copier le lien direct pour l'envoyer par message"
            >
              {copied ? (
                <>
                  <Check size={12} className="text-white" />
                  <span>Lien copié !</span>
                </>
              ) : (
                <>
                  <Copy size={12} className="text-stone-500" />
                  <span>Copier le lien</span>
                </>
              )}
            </button>

            <button
              onClick={handleNativeShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-stone-900 text-white hover:bg-stone-800 transition-all cursor-pointer shadow-2xs"
              title="Partager cette création"
            >
              <Share2 size={12} />
              <span className="hidden sm:inline">Partager</span>
            </button>
          </div>

        </div>
      </div>

      {/* Copy Confirmation Toast Banner */}
      {copied && (
        <div className="bg-emerald-600 text-white px-4 py-2 text-center text-xs font-mono font-bold tracking-wide animate-in fade-in slide-in-from-top-2 duration-200">
          ✨ Le lien direct de cette création est copié ! Vous pouvez le coller dans WhatsApp, un SMS ou vos emails.
        </div>
      )}

      {/* 2. MAIN PRODUCT SECTION */}
      <section className="py-8 sm:py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: VISUAL GALLERY & DEMO (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Media Tabs Switcher if video or guide exists */}
            {(product.videoUrl || product.details) && (
              <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white border border-stone-200 shadow-2xs">
                <button
                  onClick={() => setActiveMediaTab("photos")}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeMediaTab === "photos"
                      ? "bg-stone-900 text-white shadow-xs"
                      : "text-stone-700 hover:text-stone-950 hover:bg-stone-100"
                  }`}
                >
                  <Eye size={14} />
                  <span>Galerie Photos</span>
                </button>

                {product.videoUrl && (
                  <button
                    onClick={() => setActiveMediaTab("video")}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      activeMediaTab === "video"
                        ? "bg-primary text-white shadow-xs"
                        : "text-stone-700 hover:text-stone-950 hover:bg-stone-100"
                    }`}
                  >
                    <Play size={14} className="fill-current" />
                    <span>Démo Vidéo</span>
                  </button>
                )}

                {product.details && (
                  <button
                    onClick={() => setActiveMediaTab("guide")}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      activeMediaTab === "guide"
                        ? "bg-stone-900 text-white shadow-xs"
                        : "text-stone-700 hover:text-stone-950 hover:bg-stone-100"
                    }`}
                  >
                    <Info size={14} />
                    <span>Guide des Poches</span>
                  </button>
                )}
              </div>
            )}

            {/* TAB 1: PHOTO GALLERY */}
            {activeMediaTab === "photos" && (
              <div className="space-y-3">
                
                {/* Main Large Photo Display */}
                <div className="relative aspect-square sm:aspect-[4/3] w-full rounded-3xl overflow-hidden bg-white border border-stone-200/80 shadow-xs flex items-center justify-center p-4">
                  <img
                    src={currentImage}
                    alt={product.title}
                    className="w-full h-full object-contain transition-all duration-300"
                  />

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full bg-stone-900/90 backdrop-blur-md text-white text-[10px] font-mono tracking-widest uppercase font-bold shadow-sm">
                        {product.badge}
                      </span>
                    </div>
                  )}

                  {/* Normandie Craft Guarantee */}
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-stone-900 text-[10px] font-mono tracking-wider uppercase font-semibold shadow-2xs border border-stone-200 flex items-center gap-1.5">
                      <MapPin size={11} className="text-primary" />
                      <span>Atelier Robertot (76)</span>
                    </span>
                  </div>
                </div>

                {/* Dual View Toggle (Interior / Exterior) */}
                {currentVariant && currentVariant.images.closed !== currentVariant.images.open && (
                  <div className="flex items-center justify-center gap-2 p-1.5 rounded-2xl bg-white border border-stone-200 shadow-2xs">
                    <button
                      onClick={() => setSelectedViewMode("closed")}
                      className={`flex-1 py-2 px-4 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        selectedViewMode === "closed"
                          ? "bg-stone-900 text-white shadow-xs"
                          : "text-stone-700 hover:text-stone-950 hover:bg-stone-100"
                      }`}
                    >
                      Vue Extérieure
                    </button>
                    <button
                      onClick={() => setSelectedViewMode("open")}
                      className={`flex-1 py-2 px-4 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        selectedViewMode === "open"
                          ? "bg-stone-900 text-white shadow-xs"
                          : "text-stone-700 hover:text-stone-950 hover:bg-stone-100"
                      }`}
                    >
                      Vue Intérieure
                    </button>
                  </div>
                )}

                {/* Variant Thumbnails Row */}
                {product.variants && product.variants.length > 1 && (
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 pt-2">
                    {product.variants.map((v, idx) => (
                      <button
                        key={v.name}
                        onClick={() => {
                          setSelectedVariantIndex(idx);
                          setSelectedViewMode("closed");
                        }}
                        className={`relative aspect-square rounded-2xl overflow-hidden border p-1 bg-white transition-all cursor-pointer ${
                          selectedVariantIndex === idx
                            ? "border-primary ring-2 ring-primary/20 shadow-xs"
                            : "border-stone-200 hover:border-stone-400 opacity-80 hover:opacity-100"
                        }`}
                      >
                        <img 
                          src={v.images.closed} 
                          alt={v.name} 
                          className="w-full h-full object-cover rounded-xl"
                        />
                        <span className="sr-only">{v.name}</span>
                      </button>
                    ))}
                  </div>
                )}

              </div>
            )}

            {/* TAB 2: MULTI-VIDEO PLAYER */}
            {activeMediaTab === "video" && (product.videoUrl || product.videos) && (() => {
              const currentVideo = product.videos && product.videos.length > 0
                ? product.videos[selectedVideoIndex] || product.videos[0]
                : {
                    id: "default",
                    title: "Démo Vidéo",
                    url: product.videoUrl || "",
                    poster: product.videoPoster || "",
                    format: "vertical" as const,
                    duration: "3 min"
                  };

              const isVertical = currentVideo.format === "vertical";

              return (
                <div className="space-y-4">
                  {/* Sub-selector for multi videos */}
                  {product.videos && product.videos.length > 1 && (
                    <div className="flex items-center justify-center gap-2 p-1.5 rounded-2xl bg-white border border-stone-200 shadow-2xs">
                      {product.videos.map((vid, vIdx) => (
                        <button
                          key={vid.id}
                          onClick={() => setSelectedVideoIndex(vIdx)}
                          className={`flex-1 py-2 px-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                            selectedVideoIndex === vIdx
                              ? "bg-stone-900 text-white shadow-xs"
                              : "text-stone-700 hover:text-stone-950 hover:bg-stone-100"
                          }`}
                        >
                          <span>{vid.title}</span>
                          <span className="opacity-70 text-[10px]">({vid.duration})</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Video Screen */}
                  <div className={`relative ${isVertical ? "aspect-[9/16] max-h-[500px]" : "aspect-[16/9] w-full"} mx-auto rounded-3xl overflow-hidden bg-stone-950 border border-black/15 shadow-xl flex items-center justify-center`}>
                    <video
                      key={currentVideo.url}
                      src={currentVideo.url}
                      poster={currentVideo.poster}
                      controls
                      playsInline
                      preload="none"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-stone-800 text-xs font-medium flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                    <span>🎬 {currentVideo.title} • Confectionné et présenté en direct de l'Atelier Robertot (Normandie).</span>
                  </div>
                </div>
              );
            })()}

            {/* TAB 3: POCKET GUIDE */}
            {activeMediaTab === "guide" && product.details && (
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200 shadow-2xs space-y-6">
                <div>
                  <h4 className="text-sm font-mono font-black uppercase tracking-wider text-stone-900 flex items-center gap-2 mb-3">
                    <Coffee size={16} className="text-primary" />
                    <span>Contenu & Capacité :</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {product.details.capacity?.map((cap, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-stone-700 bg-stone-50 p-3 rounded-2xl border border-stone-100 font-medium">
                        <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-mono font-black uppercase tracking-wider text-stone-900 flex items-center gap-2 mb-3">
                    <Scissors size={16} className="text-primary" />
                    <span>Organisation des 6 poches artisanales :</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-stone-600">
                    {product.details.howItWorks?.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-stone-600">
                  <span>📐 <strong>Dimensions :</strong> {product.details.dimensions}</span>
                  <span>🧼 <strong>Entretien :</strong> {product.details.care}</span>
                </div>
              </div>
            )}

          </div>

          {/* RIGHT COLUMN: BUY BOX & OPTIONS (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-stone-200/80 p-6 sm:p-8 shadow-xs space-y-6">
            
            {/* Header / Titles */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-800 text-[10px] font-mono tracking-widest uppercase font-bold mb-3 border border-stone-200">
                <span>{product.category}</span>
                <span className="text-stone-400">•</span>
                <span className="text-primary font-bold">{product.spec}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900 leading-tight uppercase">
                {product.title}
              </h1>

              <p className="text-xs sm:text-sm text-stone-600 mt-3 leading-relaxed">
                {product.description}
              </p>

              {/* Price display */}
              <div className="mt-4 pt-4 border-t border-stone-100 flex items-baseline justify-between">
                <div>
                  <span className="text-3xl font-black font-mono text-stone-900">
                    {currentPrice.toFixed(2)} €
                  </span>
                  <span className="text-xs text-stone-500 font-mono ml-1.5">TTC</span>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-600">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    En stock à l'atelier
                  </span>
                  <div className="text-[10px] font-mono text-stone-400">Expédié sous 48h</div>
                </div>
              </div>
            </div>

            {/* Variant Selector */}
            {product.variants && (
              <div className="space-y-2.5 pt-2 border-t border-stone-100">
                <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-stone-800">
                  Modèle / Motif du tissu :
                </label>
                <div className="space-y-2">
                  {product.variants.map((v, idx) => (
                    <button
                      key={v.name}
                      onClick={() => {
                        setSelectedVariantIndex(idx);
                        setSelectedViewMode("closed");
                      }}
                      className={`w-full flex items-center justify-between p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        selectedVariantIndex === idx
                          ? "bg-stone-900 text-white border-stone-900 shadow-sm"
                          : "bg-stone-50/70 text-stone-800 border-stone-200 hover:border-stone-400 hover:bg-stone-100"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <img 
                          src={v.images.closed} 
                          alt={v.name} 
                          className="w-11 h-11 rounded-xl object-cover border border-white/20"
                        />
                        <div>
                          <div className="text-xs font-bold font-mono uppercase tracking-wider">{v.name}</div>
                          {v.badge && (
                            <div className={`text-[10px] font-mono uppercase ${selectedVariantIndex === idx ? "text-stone-300" : "text-stone-500"}`}>
                              {v.badge}
                            </div>
                          )}
                        </div>
                      </div>
                      {selectedVariantIndex === idx && (
                        <CheckCircle2 size={18} className="text-primary shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Fabric / Color Selector (when no variants) */}
            {!product.variants && product.colors && product.colors.length > 0 && (
              <div className="space-y-2.5 pt-2 border-t border-stone-100">
                <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-stone-800">
                  Couleur du support :
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                        selectedColor === c.name
                          ? "bg-stone-900 text-white border-stone-900 shadow-xs"
                          : "bg-white text-stone-700 border-stone-200 hover:border-stone-400"
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
            )}

            {/* Quantity Selector */}
            <div className="flex items-center justify-between pt-4 border-t border-stone-100">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-800 block">
                  Quantité :
                </span>
                <span className="text-[10px] text-stone-500 font-mono">Personnalisation incluse</span>
              </div>

              <div className="flex items-center border border-stone-300 rounded-full py-1 px-3 bg-stone-50">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1 text-stone-600 hover:text-stone-950 font-bold transition-colors cursor-pointer"
                  aria-label="Diminuer la quantité"
                >
                  -
                </button>
                <span className="px-4 text-sm font-mono font-black text-stone-900">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1 text-stone-600 hover:text-stone-950 font-bold transition-colors cursor-pointer"
                  aria-label="Augmenter la quantité"
                >
                  +
                </button>
              </div>
            </div>

            {/* Purchase CTA Buttons */}
            <div className="space-y-3 pt-4 border-t border-stone-100">
              
              {/* Add to Cart Button */}
              <Button
                onClick={handleAddToCart}
                className="w-full h-14 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold uppercase text-xs tracking-wider shadow-lg shadow-primary/25 cursor-pointer flex items-center justify-center gap-2"
              >
                <ShoppingBag size={18} />
                <span>
                  Ajouter au Panier • {(currentPrice * quantity).toFixed(2)} €
                </span>
              </Button>

              {/* Order via WhatsApp Direct Link */}
              <a
                href={`https://wa.me/33624021287?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-12 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-mono font-bold uppercase text-xs tracking-wider shadow-sm transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} />
                <span>Commander sur WhatsApp</span>
              </a>

              {/* Added to cart feedback */}
              {addedToCartSuccess && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  <span>Article ajouté au panier ! Ouvrez votre panier en haut pour finaliser.</span>
                </div>
              )}
            </div>

            {/* Atelier Guarantees */}
            <div className="space-y-3 pt-4 border-t border-stone-100 text-xs text-stone-600">
              <div className="flex items-center gap-3">
                <Scissors size={15} className="text-primary shrink-0" />
                <span><strong>Fait main :</strong> Confectionné à Robertot (Seine-Maritime).</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck size={15} className="text-primary shrink-0" />
                <span><strong>Fils Madeira :</strong> Certifiés Oeko-Tex Standard 100.</span>
              </div>
              <div className="flex items-center gap-3">
                <Truck size={15} className="text-primary shrink-0" />
                <span><strong>Livraison :</strong> Envoi soigné sous 3 à 5 jours ouvrés.</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. REASSURANCE & ARTISAN STRIP */}
      <section className="py-12 border-y border-stone-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-3xl bg-[#faf8f5] border border-stone-200/80 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white border border-stone-200 flex items-center justify-center text-primary shrink-0 shadow-2xs">
                <Scissors size={20} />
              </div>
              <div>
                <h4 className="text-sm font-black text-stone-900 uppercase tracking-tight mb-1">
                  Personnalisation sur-mesure
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Chaque création est adaptable à vos envies : prénom, initiales ou motifs brodés avec précision.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#faf8f5] border border-stone-200/80 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white border border-stone-200 flex items-center justify-center text-primary shrink-0 shadow-2xs">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="text-sm font-black text-stone-900 uppercase tracking-tight mb-1">
                  Matières Douces & Durables
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Bambou naturel, velours côtelé, pure toile de Jouy et gaze de coton respectueuses de la peau.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#faf8f5] border border-stone-200/80 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white border border-stone-200 flex items-center justify-center text-primary shrink-0 shadow-2xs">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-sm font-black text-stone-900 uppercase tracking-tight mb-1">
                  Atelier Normand à Robertot
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Soutenez l'artisanat français direct producteur sans intermédiaire avec un service client attentionné.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. OTHER CREATIONS FROM THE ATELIER */}
      {recommendedProducts.length > 0 && (
        <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#faf8f5]">
          <div className="max-w-7xl mx-auto">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-primary block mb-1">
                  L'Atelier By Sandrine Couture
                </span>
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-stone-900">
                  Découvrez d'autres créations
                </h2>
              </div>
              <Link 
                href="/boutique" 
                className="text-xs font-mono font-bold uppercase tracking-wider text-stone-700 hover:text-primary transition-colors inline-flex items-center gap-1"
              >
                <span>Voir toute la boutique</span>
                <ChevronRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {recommendedProducts.map((p) => (
                <Link
                  key={p.id}
                  href={`/boutique/${p.slug}`}
                  className="group rounded-3xl bg-white border border-stone-200/80 hover:border-primary/40 shadow-2xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
                >
                  <div className="relative aspect-square w-full overflow-hidden bg-[#f5f0eb] flex items-center justify-center">
                    <img
                      src={p.imgUrl}
                      alt={p.title}
                      className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-stone-900 text-[9px] font-mono tracking-widest uppercase font-bold shadow-2xs">
                        {p.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="text-[10px] font-mono text-primary font-bold uppercase tracking-wider mb-1 line-clamp-1">
                        {p.spec}
                      </div>
                      <h3 className="text-sm font-bold text-stone-900 tracking-tight leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {p.title}
                      </h3>
                    </div>

                    <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                      <span className="text-sm font-black font-mono text-stone-900">
                        {p.price.toFixed(2)} €
                      </span>
                      <span className="text-xs font-mono text-primary font-bold uppercase tracking-wider inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        <span>Voir la fiche</span>
                        <ChevronRight size={13} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>
      )}

    </div>
  );
}
