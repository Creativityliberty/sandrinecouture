"use client";

import React, { useState } from "react";
import { Sparkles, Play } from "lucide-react";

export function BookshelfFrame() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  return (
    <div className="relative w-full rounded-[2.5rem] overflow-hidden border border-black/10 bg-[#171a24] shadow-2xl">
      {/* Interactive 3D Frame */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] w-full min-h-[420px] sm:min-h-[540px]">
        {shouldLoad ? (
          <iframe
            src="/landing-pages/complete-shelf-v2.html"
            title="Bibliothèque d'Atelier Sandrine Couture"
            sandbox="allow-downloads allow-forms allow-modals allow-popups allow-same-origin allow-scripts"
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            className={`absolute inset-0 w-full h-full border-0 transition-opacity duration-700 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#1b1f2b] to-[#12141c]">
            <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/40 text-primary flex items-center justify-center mb-4 shadow-xl shadow-primary/10">
              <Sparkles className="w-8 h-8 animate-pulse" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight mb-2">
              Les 7 Recueils de Broderie 3D
            </h3>
            <p className="text-stone-400 text-xs sm:text-sm max-w-md mb-6 leading-relaxed font-normal">
              Explorez les échantillons physiques de l'atelier en 3D interactive (velours, éponge, lin et textures brodées).
            </p>
            <button
              onClick={() => setShouldLoad(true)}
              className="px-7 py-3.5 rounded-full bg-primary hover:bg-primary/90 text-white font-bold uppercase text-xs tracking-wider transition-all duration-300 shadow-xl flex items-center gap-2.5 cursor-pointer group hover:scale-105"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Ouvrir la Bibliothèque 3D</span>
            </button>
          </div>
        )}

        {/* Floating Hint Bar */}
        {shouldLoad && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-950/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-stone-300 tracking-wider shadow-lg">
            <Sparkles size={12} className="text-primary animate-pulse" />
            <span><b>Glisser</b> pour naviguer sur l'étagère · <b>Cliquer</b> sur un tome pour l'ouvrir & feuilleter</span>
          </div>
        )}
      </div>
    </div>
  );
}
