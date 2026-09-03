"use client";

import React from "react";
import Link from "next/link";
import { Building2, Heart, ArrowUpRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SegmentationSection() {
  return (
    <section className="py-20 sm:py-32 px-3.5 sm:px-6 lg:px-8 bg-[#faf8f5] border-b border-black/[0.06] relative w-full max-w-full overflow-hidden">
      
      {/* Editorial grid container */}
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Header with high-fashion restraint */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-[10px] uppercase font-black tracking-[0.25em] text-primary block mb-3">
              Sur-Mesure & Spécialisation
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.03em] uppercase text-stone-900 leading-[1.05]">
              Deux univers, <br />
              <span className="font-serif italic font-normal text-primary normal-case">la même exigence</span> du fil.
            </h2>
          </div>
          <p className="text-stone-500 text-sm max-w-sm font-medium leading-relaxed">
            Que votre demande concerne 500 polos d'entreprise ou un trousseau de naissance cousu avec amour à l'unité, j'applique la même exigence et le même soin artisanal.
          </p>
        </div>

        {/* 2 Big Editorial Architectural Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Panel 1: Entreprises & Métiers */}
          <div className="group relative rounded-[2.5rem] bg-stone-900 text-white p-8 sm:p-12 overflow-hidden flex flex-col justify-between min-h-[540px] shadow-2xl transition-all duration-500 hover:shadow-stone-900/30">
            {/* Ambient Background Image with dark luxury grading */}
            <div className="absolute inset-0 z-0">
              <img
                src="/images/realisations/serviette-brodee-audi-axel.webp"
                alt="Broderie professionnelle entreprises"
                className="w-full h-full object-cover opacity-35 transition-transform duration-1000 ease-out group-hover:scale-105 group-hover:opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/40" />
            </div>

            {/* Top Metadata */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-white">
                <Building2 size={22} />
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[9px] font-mono tracking-widest uppercase text-stone-200">
                PRO & COLLECTIVITÉS
              </span>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 pt-16">
              <div className="text-[10px] font-mono text-primary uppercase tracking-[0.2em] mb-2">
                Pôle Corporate • Séries & Identité
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-4">
                Uniformes, Tabliers & Équipements Professionnels
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed mb-8 max-w-md font-normal">
                Piquage de haute précision, résistance certifiée aux lavages répétés à haute température. Donnez à votre équipe une prestance incomparable.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/entreprises">
                  <Button
                    size="lg"
                    className="h-13 px-8 rounded-full bg-white text-stone-900 hover:bg-stone-100 font-bold uppercase tracking-wider text-xs shadow-lg transition-transform group-hover:translate-x-0.5 cursor-pointer"
                  >
                    <span>L'offre entreprises</span>
                    <ArrowUpRight size={14} className="ml-1" />
                  </Button>
                </Link>
                <span className="text-[11px] font-mono text-stone-400">
                  Devis & BAT sous 24h
                </span>
              </div>
            </div>

            {/* Subtle border line */}
            <div className="absolute inset-3 border border-white/10 rounded-[2.1rem] pointer-events-none" />
          </div>

          {/* Panel 2: Particuliers & Naissance */}
          <div className="group relative rounded-[2.5rem] bg-[#f4ece1] text-stone-900 p-8 sm:p-12 overflow-hidden flex flex-col justify-between min-h-[540px] border border-stone-300/70 shadow-sm transition-all duration-500 hover:shadow-xl">
            {/* Ambient Image */}
            <div className="absolute inset-0 z-0">
              <img
                src="/images/realisations/sac-personnalise-brode-octavia.webp"
                alt="Cadeaux de naissance personnalisés"
                className="w-full h-full object-cover opacity-25 mix-blend-multiply transition-transform duration-1000 ease-out group-hover:scale-105 group-hover:opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#f4ece1] via-[#f4ece1]/80 to-transparent" />
            </div>

            {/* Top Metadata */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-white border border-black/10 flex items-center justify-center text-primary shadow-xs">
                <Heart size={22} className="fill-primary/20" />
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-white/80 border border-black/10 text-[9px] font-mono tracking-widest uppercase text-stone-700">
                PIÈCES UNIQUES
              </span>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 pt-16">
              <div className="text-[10px] font-mono text-primary uppercase tracking-[0.2em] mb-2">
                Pôle Atelier • Cadeaux & Naissance
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900 mb-4">
                Gilets Moumoute, Linge Délicat & Trousseaux
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-8 max-w-md font-normal">
                Prénoms, dates symboliques, motifs délicats brodés sur des tissus hypoallergéniques certifiés Oeko-Tex. Des souvenirs impérissables pour toute une vie.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/particuliers">
                  <Button
                    size="lg"
                    className="h-13 px-8 rounded-full bg-stone-900 text-white hover:bg-stone-800 font-bold uppercase tracking-wider text-xs shadow-lg transition-transform group-hover:translate-x-0.5 cursor-pointer"
                  >
                    <span>L'offre particuliers</span>
                    <ArrowUpRight size={14} className="ml-1" />
                  </Button>
                </Link>
                <span className="text-[11px] font-mono text-stone-500">
                  Personnalisation sur-mesure
                </span>
              </div>
            </div>

            {/* Subtle border line */}
            <div className="absolute inset-3 border border-black/5 rounded-[2.1rem] pointer-events-none" />
          </div>

        </div>

      </div>

    </section>
  );
}
