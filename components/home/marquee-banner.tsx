import React from "react";
import { Sparkles, Shield, HeartHandshake, Scissors, Award, Clock } from "lucide-react";

export function MarqueeBanner() {
  const highlights = [
    { text: "Atelier Artisanal Normand", icon: Scissors },
    { text: "Broderie Haute Résolution", icon: Award },
    { text: "Fils Madeira Oeko-Tex", icon: Sparkles },
    { text: "Devis Express sous 24h", icon: Clock },
    { text: "Pièces Uniques & Séries Pro", icon: Shield },
    { text: "Finition Main & Soignée", icon: HeartHandshake },
  ];

  return (
    <div className="relative w-full overflow-hidden py-5 bg-stone-950 text-white border-y border-stone-800 selection:bg-primary selection:text-white shadow-inner">
      {/* Vignette gradients */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-stone-950 via-stone-950/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-stone-950 via-stone-950/80 to-transparent z-10 pointer-events-none" />

      {/* Marquee Row */}
      <div className="animate-marquee flex items-center space-x-8">
        {[...highlights, ...highlights, ...highlights].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-stone-900/80 border border-stone-800 backdrop-blur-sm group hover:border-primary/50 transition-colors"
            >
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Icon className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-stone-200 whitespace-nowrap">
                {item.text}
              </span>
              <span className="text-primary/40 ml-2 font-mono text-xs">✦</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
