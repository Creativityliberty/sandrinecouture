"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, ArrowRight, ShieldCheck, MapPin, Sparkles, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section id="contact" className="py-24 sm:py-36 px-4 sm:px-6 lg:px-8 bg-stone-950 text-white relative overflow-hidden">
      
      {/* Dynamic Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Micro Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-8">
          <Sparkles size={12} className="text-primary animate-pulse" />
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-stone-200">
            Concrétisez vos envies textiles
          </span>
        </div>

        {/* Monumental Editorial Heading */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-[-0.03em] leading-[1.02] text-white mb-6">
          Votre projet mérite <br />
          <span className="font-serif italic font-normal text-primary normal-case">l'excellence</span> du fil.
        </h2>

        <p className="text-stone-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Que vous ayez un fichier vectoriel prêt ou simplement une idée de prénom et de couleur, je vous réponds personnellement avec bienveillance sous 24h ouvrées.
        </p>

        {/* Dual Luxury Action Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-12">
          <Link href="/devis" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="h-14 px-9 rounded-full bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider text-xs shadow-xl shadow-primary/30 flex items-center justify-center gap-2.5 w-full sm:w-auto cursor-pointer"
            >
              <MessageCircle size={16} />
              <span>Demander un devis gratuit</span>
            </Button>
          </Link>

          <Link href="/boutique" className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="outline-dark"
              className="h-14 px-8 uppercase tracking-wider text-xs w-full sm:w-auto cursor-pointer"
            >
              <span>Voir la boutique</span>
              <ArrowRight size={14} className="ml-1" />
            </Button>
          </Link>
        </div>

        {/* Bottom Trust Details */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-stone-400 text-xs font-mono">
          <span className="flex items-center gap-2">
            <MapPin size={13} className="text-primary" /> Atelier à Robertot (76)
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck size={13} className="text-primary" /> Devis & BAT gratuit
          </span>
          <span className="flex items-center gap-2">
            <Scissors size={13} className="text-primary" /> Confection artisanale française
          </span>
        </div>

      </div>

    </section>
  );
}
