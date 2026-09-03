"use client";

import React, { useState } from "react";
import { Sparkles } from "lucide-react";

export function BookshelfFrame() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full rounded-[2.5rem] overflow-hidden border border-black/10 bg-[#171a24] shadow-2xl">
      
      {/* Interactive 3D Frame */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] w-full min-h-[460px] sm:min-h-[540px]">
        <iframe
          src="/landing-pages/complete-shelf-v2.html"
          title="Bibliothèque d'Atelier Sandrine Couture"
          sandbox="allow-downloads allow-forms allow-modals allow-popups allow-same-origin allow-scripts"
          loading="eager"
          onLoad={() => setIsLoaded(true)}
          className={`absolute inset-0 w-full h-full border-0 transition-opacity duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Floating Hint Bar */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-950/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-stone-300 tracking-wider shadow-lg">
          <Sparkles size={12} className="text-primary animate-pulse" />
          <span><b>Glisser</b> pour naviguer sur l'étagère · <b>Cliquer</b> sur un tome pour l'ouvrir & feuilleter</span>
        </div>
      </div>

    </div>
  );
}
