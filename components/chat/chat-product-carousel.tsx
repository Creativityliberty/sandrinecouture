"use client";

import React from "react";
import { Product } from "@/types/chat-commerce";
import { Sparkles, ShoppingBag, SlidersHorizontal, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ProductCarouselProps {
  products: Product[];
  onSelect: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export function ChatProductCarousel({ products, onSelect, onAddToCart }: ProductCarouselProps) {
  if (!products || products.length === 0) return null;

  return (
    <div className="w-full my-2">
      <div className="flex gap-3 overflow-x-auto pb-3 pt-1 snap-x snap-mandatory scrollbar-thin no-scrollbar">
        {products.map((product) => (
          <article
            key={product.id}
            className="min-w-[210px] max-w-[210px] shrink-0 snap-start overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-md flex flex-col justify-between transition-all hover:shadow-lg hover:border-pink-500/30"
          >
            {/* Visual Container */}
            <div className="aspect-square relative w-full overflow-hidden bg-stone-100 p-2 flex items-center justify-center">
              <img
                src={product.imgUrl}
                alt={product.title}
                className="w-full h-full object-contain mix-blend-multiply transition-transform duration-300 hover:scale-105"
              />
              <span className="absolute top-2 left-2 rounded-full bg-stone-950/80 backdrop-blur-md px-2 py-0.5 text-[8px] font-mono uppercase tracking-wider text-white">
                {product.category}
              </span>
            </div>

            {/* Content Details */}
            <div className="p-3.5 flex flex-col flex-1 justify-between">
              <div>
                <h4 className="font-bold text-xs text-stone-900 leading-snug line-clamp-2 mb-1">
                  {product.title}
                </h4>
                <p className="text-[10px] text-stone-500 line-clamp-2 leading-relaxed mb-2">
                  {product.spec || product.description}
                </p>
              </div>

              <div>
                <div className="flex items-baseline justify-between mb-3 pt-2 border-t border-stone-100">
                  <span className="text-base font-black text-stone-900">
                    {product.price.toFixed(2)} €
                  </span>
                  <span className="text-[8px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full uppercase">
                    Fait main
                  </span>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-1.5">
                  <button
                    onClick={() => onSelect(product)}
                    className="w-full py-1.5 px-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-[10px] font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <SlidersHorizontal size={10} />
                    <span>Option</span>
                  </button>

                  <button
                    onClick={() => onAddToCart(product)}
                    className="w-full py-1.5 px-2 rounded-xl bg-primary hover:bg-primary/90 text-white text-[10px] font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1 cursor-pointer shadow-sm shadow-pink-500/20"
                  >
                    <ShoppingBag size={10} />
                    <span>Panier</span>
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
