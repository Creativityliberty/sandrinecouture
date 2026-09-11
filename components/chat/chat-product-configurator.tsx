"use client";

import React, { useState } from "react";
import { Product } from "@/types/chat-commerce";
import { ShoppingBag, Check, Sparkles } from "lucide-react";

interface ConfiguratorProps {
  product: Product;
  onAddToCart: (customizedProduct: {
    productId: number;
    title: string;
    price: number;
    imgUrl: string;
    threadColor: string;
    notes?: string;
  }) => void;
}

export function ChatProductConfigurator({ product, onAddToCart }: ConfiguratorProps) {
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const [embroideryText, setEmbroideryText] = useState("");
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || "Écru");
  const [isAdded, setIsAdded] = useState(false);

  const currentVariant = product.variants?.[selectedVariantIdx];
  const activeImage = currentVariant ? currentVariant.images.closed : product.imgUrl;

  const handleConfirm = () => {
    const finalTitle = currentVariant
      ? `${product.title} (${currentVariant.name})`
      : product.title;

    onAddToCart({
      productId: product.id,
      title: finalTitle,
      price: product.price,
      imgUrl: activeImage,
      threadColor: selectedColor,
      notes: embroideryText ? `Broderie prénom/texte : "${embroideryText}"` : undefined,
    });

    setIsAdded(true);
  };

  return (
    <div className="w-full my-3 p-4 rounded-2xl bg-stone-50 border border-stone-200/90 shadow-md text-stone-900">
      <div className="flex gap-3 items-center mb-3 pb-3 border-b border-stone-200">
        <div className="w-16 h-16 rounded-xl overflow-hidden bg-white p-1 border border-stone-200 shrink-0">
          <img src={activeImage} alt={product.title} className="w-full h-full object-contain" />
        </div>
        <div>
          <span className="text-[9px] uppercase font-mono tracking-widest text-primary font-bold">
            Configuration Atelier
          </span>
          <h4 className="font-bold text-xs leading-snug">{product.title}</h4>
          <span className="text-sm font-black">{product.price.toFixed(2)} €</span>
        </div>
      </div>

      {/* Variant selector if multiple */}
      {product.variants && product.variants.length > 1 && (
        <div className="mb-3">
          <label className="block text-[10px] font-bold text-stone-600 uppercase tracking-wider mb-1">
            Modèle / Tissu
          </label>
          <div className="flex flex-wrap gap-1">
            {product.variants.map((v, idx) => (
              <button
                key={v.name}
                onClick={() => setSelectedVariantIdx(idx)}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-medium border transition-all ${
                  selectedVariantIdx === idx
                    ? "bg-stone-900 text-white border-stone-900 shadow-xs"
                    : "bg-white text-stone-700 border-stone-200 hover:bg-stone-100"
                }`}
              >
                {v.badge || v.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Text / Prenom input */}
      <div className="mb-3">
        <label className="block text-[10px] font-bold text-stone-600 uppercase tracking-wider mb-1">
          Prénom ou message à broder (optionnel)
        </label>
        <input
          type="text"
          value={embroideryText}
          onChange={(e) => setEmbroideryText(e.target.value)}
          placeholder="Ex : Emma, Louis, Mon Amour..."
          className="w-full px-3 py-1.5 rounded-xl border border-stone-300 text-xs bg-white focus:outline-none focus:border-primary"
        />
      </div>

      {/* Thread color selection */}
      <div className="mb-4">
        <label className="block text-[10px] font-bold text-stone-600 uppercase tracking-wider mb-1">
          Couleur du fil de broderie : <span className="text-stone-900 font-bold">{selectedColor}</span>
        </label>
        <div className="flex items-center gap-1.5">
          {product.colors.map((c) => (
            <button
              key={c.name}
              title={c.name}
              onClick={() => setSelectedColor(c.name)}
              className={`w-6 h-6 rounded-full border-2 transition-transform cursor-pointer ${
                selectedColor === c.name ? "scale-115 border-primary shadow-sm" : "border-white shadow-2xs"
              }`}
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>
      </div>

      {/* Button */}
      <button
        disabled={isAdded}
        onClick={handleConfirm}
        className={`w-full py-2.5 px-4 rounded-xl font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md ${
          isAdded
            ? "bg-emerald-600 text-white"
            : "bg-primary hover:bg-primary/90 text-white shadow-pink-500/20"
        }`}
      >
        {isAdded ? (
          <>
            <Check size={14} />
            <span>Ajouté au panier !</span>
          </>
        ) : (
          <>
            <ShoppingBag size={14} />
            <span>Valider et Ajouter au panier</span>
          </>
        )}
      </button>
    </div>
  );
}
