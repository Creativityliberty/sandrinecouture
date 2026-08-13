"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { useCart } from "@/context/cart-context";
import { Sparkles, MapPin, CheckCircle2, ChevronRight, Upload, X, Loader2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  title: string;
  price: number;
  category: "Bébé" | "Accessoires" | "Bain" | "Maison";
  description: string;
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
  const [textToEmbroider, setTextToEmbroider] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedFont, setSelectedFont] = useState("");
  const [quantity, setQuantity] = useState(1);

  // File Upload to Vercel Blob State
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoUrl, setLogoUrl] = useState("");
  const [logoName, setLogoName] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const categories = ["Tous", "Bébé", "Accessoires", "Bain", "Maison"];

  const filteredProducts = selectedCategory === "Tous"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  const openCustomizationModal = (product: Product) => {
    setActiveModalProduct(product);
    setTextToEmbroider("");
    setSelectedColor(product.colors[0]?.name || "");
    setSelectedFont(product.fonts[0] || "");
    setQuantity(1);
    setLogoFile(null);
    setLogoUrl("");
    setLogoName("");
  };

  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    setLogoFile(file);
    setLogoName(file.name);
    setIsUploading(true);

    try {
      // Upload file directly to our Vercel Blob endpoint
      const response = await fetch(`/api/upload?filename=${encodeURIComponent(file.name)}`, {
        method: "POST",
        body: file,
      });

      if (!response.ok) {
        throw new Error("Echec de l'upload du logo");
      }

      const result = await response.json();
      setLogoUrl(result.url); // Set Vercel Blob URL
    } catch (error) {
      console.error(error);
      alert("Erreur lors de l'envoi de votre image. Veuillez réessayer.");
      setLogoFile(null);
      setLogoName("");
    } finally {
      setIsUploading(false);
    }
  };

  const handleAddToCart = () => {
    if (!activeModalProduct) return;

    addToCart({
      productId: activeModalProduct.id,
      title: activeModalProduct.title,
      price: activeModalProduct.price,
      quantity,
      imgUrl: activeModalProduct.imgUrl,
      textToEmbroider,
      font: selectedFont,
      threadColor: selectedColor,
      customLogoUrl: logoUrl,
      customLogoName: logoName
    });

    setActiveModalProduct(null);
  };

  return (
    <div className="relative min-h-screen font-sans bg-white">
      <Navbar />

      {/* Hero Header Section */}
      <section className="relative pt-32 pb-12 overflow-hidden bg-gray-50/50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[9px] font-black tracking-widest uppercase text-primary mb-4">
              <Sparkles className="w-3 h-3 text-primary" />
              <span>Marquage artisanal sur mesure</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.95] text-gray-900 mb-4">
              LA BOUTIQUE.
            </h1>
            <p className="text-sm text-gray-600 font-semibold leading-relaxed">
              Sélectionnez vos supports de qualité supérieure, personnalisez les couleurs, polices et broderies de votre choix, et nous les fabriquons à la main pour vous dans notre atelier normand.
            </p>
          </div>
        </div>
      </section>

      {/* Main Catalog Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          
          {/* Category Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-black/5 pb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all border ${
                  selectedCategory === cat
                    ? "bg-black text-white border-black"
                    : "bg-transparent text-gray-600 border-black/10 hover:border-black/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white/60 backdrop-blur-md border border-black/5 p-4 rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)] transition-all duration-500 hover:-translate-y-1"
              >
                {/* Image Wrapper */}
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mb-4 bg-gray-50">
                  <img
                    src={product.imgUrl}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-md text-black border border-white/50 text-[8px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm">
                    {product.category}
                  </div>
                </div>

                {/* Info Text */}
                <div className="px-1 flex flex-col justify-between h-[150px]">
                  <div>
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h3 className="text-sm font-black uppercase tracking-wider text-gray-900 leading-tight">
                        {product.title}
                      </h3>
                      <span className="text-sm font-black text-primary shrink-0">
                        {product.price.toFixed(2)} €
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 font-semibold line-clamp-3 mb-4">
                      {product.description}
                    </p>
                  </div>

                  {/* Add action */}
                  <Button
                    onClick={() => openCustomizationModal(product)}
                    className="w-full h-11 rounded-xl uppercase text-[9px] font-black tracking-widest flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>Personnaliser & Ajouter</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Customization Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white border border-black/5 rounded-[2.5rem] p-6 sm:p-8 max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-5 right-5 p-1 rounded-full hover:bg-gray-150 transition-colors text-gray-400 hover:text-black"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6 flex gap-4 items-center">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-50 border border-black/5 shrink-0">
                <img
                  src={activeModalProduct.imgUrl}
                  alt={activeModalProduct.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-base font-black uppercase tracking-wider text-gray-900 leading-tight">
                  Personnalisation
                </h2>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">
                  {activeModalProduct.title} • {activeModalProduct.price.toFixed(2)} €
                </p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-5">
              
              {/* Option A: Text to embroider */}
              <div>
                <label className="block text-[9px] font-black uppercase tracking-wider text-gray-600 mb-2">
                  1. Texte à broder (prénom, mot, initiales - max 20 car.)
                </label>
                <input
                  type="text"
                  maxLength={20}
                  value={textToEmbroider}
                  onChange={(e) => setTextToEmbroider(e.target.value)}
                  placeholder="Ex: Clara, Papa, Sweet..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-black/10 focus:outline-none focus:border-primary font-bold text-xs"
                />
              </div>

              {/* Option B: Thread color pick */}
              <div>
                <label className="block text-[9px] font-black uppercase tracking-wider text-gray-600 mb-2">
                  2. Couleur du fil de broderie
                </label>
                <div className="flex flex-wrap gap-2">
                  {activeModalProduct.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-wider border transition-all ${
                        selectedColor === c.name
                          ? "bg-black text-white border-black"
                          : "bg-transparent text-gray-700 border-black/10 hover:border-black/25"
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-black/15 shrink-0"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Option C: Font typography */}
              <div>
                <label className="block text-[9px] font-black uppercase tracking-wider text-gray-600 mb-2">
                  3. Style de police d'écriture
                </label>
                <div className="flex gap-2">
                  {activeModalProduct.fonts.map((f) => (
                    <button
                      key={f}
                      onClick={() => setSelectedFont(f)}
                      className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-wider border transition-all ${
                        selectedFont === f
                          ? "bg-black text-white border-black"
                          : "bg-transparent text-gray-700 border-black/10 hover:border-black/25"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Option D: Custom Logo Upload (Vercel Blob) */}
              <div>
                <label className="block text-[9px] font-black uppercase tracking-wider text-gray-600 mb-2">
                  4. Optionnel : Votre propre logo ou dessin (Téléverser)
                </label>
                <div className="relative border-2 border-dashed border-black/10 rounded-2xl p-4 flex flex-col items-center justify-center bg-gray-55/20 hover:bg-gray-50 transition-colors">
                  <input
                    type="file"
                    accept="image/jpeg, image/png, image/webp, image/svg+xml"
                    onChange={handleLogoUpload}
                    disabled={isUploading}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    aria-label="Sélectionnez votre logo"
                  />
                  {isUploading ? (
                    <div className="flex flex-col items-center text-center gap-2">
                      <Loader2 className="w-6 h-6 text-primary animate-spin" />
                      <span className="text-[9px] font-bold uppercase tracking-wider text-gray-500">
                        Envoi vers Vercel Blob...
                      </span>
                    </div>
                  ) : logoName ? (
                    <div className="flex flex-col items-center text-center gap-1.5">
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                      <span className="text-[9px] font-black uppercase tracking-wider text-green-600 line-clamp-1">
                        Logo prêt : {logoName}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setLogoFile(null);
                          setLogoUrl("");
                          setLogoName("");
                        }}
                        className="text-[8px] font-black uppercase tracking-widest text-red-500 hover:underline mt-1"
                      >
                        Retirer le fichier
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center text-center gap-2">
                      <Upload className="w-5 h-5 text-gray-400" />
                      <span className="text-[9px] font-black uppercase tracking-widest text-gray-600">
                        Glisser ou Sélectionner un fichier
                      </span>
                      <span className="text-[8px] text-gray-400 uppercase font-semibold">
                        PNG, JPG, SVG jusqu'à 4.5 Mo
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Option E: Quantity Selector */}
              <div className="flex items-center justify-between border-t border-black/5 pt-4">
                <span className="text-[10px] font-black uppercase tracking-wider text-gray-600">
                  5. Quantité d'articles
                </span>
                <div className="flex items-center border border-black/10 rounded-full py-1 px-2 bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1 text-gray-500 hover:text-black transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 text-xs font-black text-gray-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1 text-gray-500 hover:text-black transition-colors"
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
                className="flex-1 h-12 rounded-xl uppercase text-[9px] font-black tracking-widest"
              >
                Annuler
              </Button>
              <Button
                onClick={handleAddToCart}
                className="flex-1 h-12 rounded-xl uppercase text-[9px] font-black tracking-widest shadow-md"
              >
                Ajouter au Panier
              </Button>
            </div>

          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
