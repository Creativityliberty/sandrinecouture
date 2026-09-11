"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import sandrineAtelierImg from "@/public/images/hero/sandrine-atelier-real.jpg";
import { 
  Sparkles, 
  MessageCircle, 
  ArrowUpRight, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Layers, 
  CheckCircle2, 
  ChevronRight,
  Eye,
  Scissors,
  Award,
  CircleDot
} from "lucide-react";
import { Button } from "@/components/ui/button";

const SHOWCASE_ITEMS = [
  {
    id: "pro",
    title: "Sweat Muspelheim",
    category: "Entreprises & Clubs",
    badge: "Série Pro",
    stitchCount: "54 200 points",
    threadType: "Madeira Polyneon #40",
    resistance: "Tenue garantie 60°C",
    technique: "Broderie relief HD multicouche",
    imgUrl: "/images/realisations/sweat-capuche-rouge-brode-ours-muspelheim.webp",
    macroUrl: "/images/realisations/sweat-capuche-rouge-brode-ours-muspelheim-detail.webp",
    tagCoords: { x: "72%", y: "42%" },
    colorAccent: "#b1586a"
  },
  {
    id: "bebe",
    title: "Gilet Réversible",
    category: "Bébé & Naissance",
    badge: "Création Unique",
    stitchCount: "22 400 points",
    threadType: "Fils Oeko-Tex Standard 100",
    resistance: "Doux & Anti-irritation",
    technique: "Sherpa & suédine brodée main",
    imgUrl: "/images/realisations/gilet-berger-bebe-reversible-moumoute-sherpa.webp",
    macroUrl: "/images/realisations/gilet-berger-bebe-reversible-suedine-marron.webp",
    tagCoords: { x: "65%", y: "48%" },
    colorAccent: "#c87d55"
  },
  {
    id: "perso",
    title: "Drap de Bain PSG",
    category: "Cadeaux Sur-Mesure",
    badge: "Pièce d'Exception",
    stitchCount: "38 600 points",
    threadType: "Madeira résistant chlore",
    resistance: "Éponge 550g/m² peignée",
    technique: "Piquage haute densité",
    imgUrl: "/images/realisations/drap-bain-personnalise-julian-logo-psg-broderie-sur-mesure-france.webp",
    macroUrl: "/images/realisations/drap-bain-personnalise-julian-logo-psg-broderie-sur-mesure-france.webp",
    tagCoords: { x: "60%", y: "55%" },
    colorAccent: "#1e3a8a"
  }
];

export function HeroSection() {
  return (
    <section className="relative w-full max-w-full pt-20 sm:pt-36 pb-16 sm:pb-28 lg:pb-36 overflow-hidden bg-stone-950 text-white selection:bg-primary selection:text-white">
      
      {/* Background Photo for Desktop (>= sm) */}
      <div className="hidden sm:block absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image 
          src={sandrineAtelierImg} 
          alt="Sandrine dans son atelier de broderie à Robertot"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_35%] filter brightness-[1.08] contrast-[1.02] saturate-[1.05]"
        />
        {/* Soft, warm luxury gradient for desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-950/40 to-transparent z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/40 z-[1]" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Atelier Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 sm:pb-6 mb-6 sm:mb-10 border-b border-white/15 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-bold text-stone-200">
          <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
            <span className="flex h-2.5 w-2.5 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-white font-black tracking-wider">Atelier Normand • Robertot (76)</span>
            <span className="text-stone-400 hidden sm:inline">/</span>
            <span className="hidden sm:inline text-stone-200">Capacité de production ouverte</span>
          </div>

          <div className="flex items-center gap-4 text-[10px] font-bold text-stone-300">
            <span className="flex items-center gap-1.5">
              <Scissors size={13} className="text-primary-light shrink-0" /> Confection & Piquage Sur-Mesure
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <Award size={13} className="text-primary-light shrink-0" /> Fils Madeira Certifiés
            </span>
          </div>
        </div>

        {/* Dedicated Mobile Photo Showcase (Visible only on mobile < sm) */}
        <div className="sm:hidden w-full mb-7 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-stone-900">
          <Image 
            src={sandrineAtelierImg} 
            alt="Sandrine dans son atelier à Robertot"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_25%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-bold text-white uppercase tracking-wider bg-stone-950/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
            <span className="flex items-center gap-1.5">
              <Sparkles size={11} className="text-primary-light" /> Sandrine à l'Atelier
            </span>
            <span className="text-stone-300 font-mono text-[9px]">Robertot (76)</span>
          </div>
        </div>

        {/* Narrative Content */}
        <div className="max-w-2xl flex flex-col items-start">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-stone-900/90 border border-white/20 text-white text-[9px] sm:text-[10px] font-bold tracking-[0.22em] uppercase mb-4 sm:mb-6 backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>Haute Broderie Textile • Fait Main</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-black tracking-[-0.03em] leading-[1.05] text-white uppercase mb-5 sm:mb-6 drop-shadow-lg">
            Donnez du <br />
            <span className="font-serif italic font-normal normal-case text-primary-light underline decoration-primary/40 underline-offset-8 inline-block">
              relief éternel
            </span> <br />
            à vos envies.
          </h1>

          {/* Copy */}
          <p className="text-sm sm:text-xl text-stone-200 font-medium leading-relaxed mb-6 sm:mb-8 max-w-xl drop-shadow-md">
            De l’emblème corporate haute densité aux trousseaux de naissance cousus d’amour. 
            Chaque point de fil est programmé et brodé de mes mains dans mon atelier normand pour résister à l'épreuve du temps.
          </p>

          {/* Technical Cards */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full max-w-lg mb-9 p-3 rounded-2xl bg-stone-950/70 backdrop-blur-md border border-white/15 shadow-2xl">
            <div className="p-2 sm:p-3 text-center sm:text-left">
              <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-stone-300 font-bold">Délai Devis</div>
              <div className="text-lg sm:text-2xl font-black text-white mt-0.5">24h</div>
              <div className="text-[9px] sm:text-[10px] text-stone-400 font-semibold hidden xs:block">Étude & BAT</div>
            </div>
            <div className="p-2 sm:p-3 border-x border-white/15 text-center sm:text-left">
              <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-stone-300 font-bold">Tenue Fil</div>
              <div className="text-lg sm:text-2xl font-black text-white mt-0.5">60°C</div>
              <div className="text-[9px] sm:text-[10px] text-stone-400 font-semibold hidden xs:block">Inusable</div>
            </div>
            <div className="p-2 sm:p-3 text-center sm:text-left">
              <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-stone-300 font-bold">Volumes</div>
              <div className="text-lg sm:text-2xl font-black text-white mt-0.5">1 à 500+</div>
              <div className="text-[9px] sm:text-[10px] text-stone-400 font-semibold hidden xs:block">Unité ou séries</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <Link href="/devis" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-white shadow-xl transition-all duration-300 font-bold tracking-wider uppercase text-xs w-full flex items-center justify-center gap-3 group"
              >
                <MessageCircle className="w-4.5 h-4.5 group-hover:scale-110 transition-transform" />
                <span>Demander un devis atelier</span>
                <ChevronRight className="w-4 h-4 text-white/70 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/boutique" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 rounded-full border-white/30 bg-stone-900/60 hover:bg-white hover:text-stone-950 backdrop-blur-md transition-all duration-300 font-bold tracking-wider uppercase text-xs w-full flex items-center justify-center gap-2 text-white"
              >
                <span>Découvrir la Boutique</span>
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Trust note */}
          <div className="mt-8 flex items-center gap-3 text-xs text-stone-300 font-medium">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary-light shrink-0">
              <ShieldCheck size={15} />
            </div>
            <span>Accompagnement personnalisé par Sandrine pour chacun de vos projets</span>
          </div>

        </div>

      </div>
    </section>
  );
}
