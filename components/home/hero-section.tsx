"use client";

import React, { useState } from "react";
import Link from "next/link";
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
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMacro, setIsMacro] = useState(false);
  const current = SHOWCASE_ITEMS[activeIdx];

  return (
    <section className="relative pt-28 sm:pt-36 pb-20 lg:pb-32 overflow-hidden bg-[#faf8f5] text-[#1c1917] selection:bg-primary selection:text-white">
      
      {/* Couture blueprint lines & ambient light */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Fine architectural grid lines representing cutting patterns */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Warm luxury studio spots */}
        <div className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-primary/[0.07] rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-amber-500/[0.05] rounded-full blur-[160px]" />
        
        {/* Subtle decorative thread guide circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-black/[0.03] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full border border-dashed border-black/[0.02] pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        
        {/* Top Atelier Bar: Clean luxury meta header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-black/[0.08] text-[11px] uppercase tracking-[0.2em] font-medium text-stone-500">
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
            </span>
            <span className="text-stone-800 font-bold tracking-wider">Atelier Normand • Robertot (76)</span>
            <span className="text-stone-300">/</span>
            <span className="hidden sm:inline">Capacité de production ouverte</span>
          </div>

          <div className="flex items-center gap-6 text-[10px] font-bold text-stone-700">
            <span className="flex items-center gap-1.5">
              <Scissors size={12} className="text-primary" /> Confection & Piquage Sur-Mesure
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <Award size={12} className="text-primary" /> Fils Madeira Certifiés
            </span>
          </div>
        </div>

        {/* Main Grid: Asymmetrical Luxury Showroom */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Narrative */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            
            {/* Tag / Micro-Title */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 text-white text-[9px] font-bold tracking-[0.25em] uppercase mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span>Haute Broderie Textile</span>
            </div>

            {/* Monumental Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-[4.25rem] font-black tracking-[-0.03em] leading-[1.02] text-stone-900 uppercase mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
              Donnez du <br />
              <span className="font-serif italic font-normal normal-case text-primary underline decoration-primary/20 underline-offset-8 inline-block transition-transform hover:scale-105 duration-300">
                relief éternel
              </span> <br />
              à vos créations.
            </h1>

            {/* Balanced luxury editorial copy */}
            <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed mb-8 max-w-lg">
              De l’emblème corporate haute densité aux trousseaux de naissance cousus d’amour. 
              Chaque point de fil est programmé et brodé de mes mains dans mon atelier normand pour résister à l'épreuve du temps.
            </p>

            {/* Technical Confection Cards */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-lg mb-9 p-2 rounded-2xl bg-white/90 border border-black/[0.08] shadow-sm">
              <div className="p-3">
                <div className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Délai Devis</div>
                <div className="text-lg font-black text-stone-900 mt-0.5 tracking-tight">24 Heures</div>
                <div className="text-[10px] text-stone-500 font-medium">Étude & BAT rapide</div>
              </div>
              <div className="p-3 border-x border-black/[0.06]">
                <div className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Tenue Fil</div>
                <div className="text-lg font-black text-stone-900 mt-0.5 tracking-tight">60°C Lavage</div>
                <div className="text-[10px] text-stone-500 font-medium">Inusable & indélébile</div>
              </div>
              <div className="p-3">
                <div className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Volumes</div>
                <div className="text-lg font-black text-stone-900 mt-0.5 tracking-tight">1 à 500+</div>
                <div className="text-[10px] text-stone-500 font-medium">Unité ou séries</div>
              </div>
            </div>

            {/* CTAs with magnetic appeal */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <Link href="/devis" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="h-14 px-8 rounded-full bg-stone-900 hover:bg-stone-800 text-white shadow-xl shadow-stone-900/10 transition-all duration-300 font-bold tracking-wider uppercase text-xs w-full flex items-center justify-center gap-3 group"
                >
                  <MessageCircle className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  <span>Demander un devis atelier</span>
                  <ChevronRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="/#réalisations" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-7 rounded-full border-black/15 bg-white/60 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300 font-bold tracking-wider uppercase text-xs w-full flex items-center justify-center gap-2"
                >
                  <span>Le portfolio</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Atelier trust mark */}
            <div className="mt-8 flex items-center gap-3 text-xs text-stone-500">
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <ShieldCheck size={14} />
              </div>
              <span>Je vous accompagne personnellement pour donner vie à chacun de vos projets</span>
            </div>

          </div>

          {/* Right Column: Interactive Digital Showroom & Spec Floating Tags */}
          <div className="lg:col-span-6 flex flex-col items-center relative">
            
            {/* Model Switcher Segmented Control */}
            <div className="flex items-center gap-1 p-1 rounded-full bg-stone-200/80 border border-black/5 mb-6 backdrop-blur-md">
              {SHOWCASE_ITEMS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveIdx(idx);
                    setIsMacro(false);
                  }}
                  className={`px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    activeIdx === idx
                      ? "bg-white text-stone-900 shadow-sm"
                      : "text-stone-600 hover:text-stone-900"
                  }`}
                >
                  {item.badge}
                </button>
              ))}
            </div>

            {/* Luxury Showcase Frame */}
            <div className="relative w-full max-w-[440px] sm:max-w-[480px] aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-stone-900 border border-stone-800/80 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.25)] group">
              
              {/* Product Visual */}
              <img
                src={isMacro ? current.macroUrl : current.imgUrl}
                alt={current.title}
                className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
              />

              {/* Editorial Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent pointer-events-none" />

              {/* Floating Macro Toggle Top Right */}
              <div className="absolute top-5 right-5 z-20">
                <button
                  onClick={() => setIsMacro(!isMacro)}
                  className={`px-3.5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-2 backdrop-blur-md border transition-all cursor-pointer shadow-lg ${
                    isMacro
                      ? "bg-primary text-white border-primary"
                      : "bg-white/90 text-stone-900 border-white/80 hover:bg-white"
                  }`}
                >
                  <Eye size={12} />
                  <span>{isMacro ? "Vue Complète" : "Inspecter le Fil"}</span>
                </button>
              </div>

              {/* Spec Floating Tag on the garment */}
              <div 
                className="absolute z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-950/80 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono tracking-wide shadow-xl transition-all duration-500 pointer-events-none"
                style={{ top: current.tagCoords.y, left: current.tagCoords.x, transform: "translate(-50%, -50%)" }}
              >
                <CircleDot size={10} className="text-primary animate-ping" />
                <span>{current.stitchCount}</span>
              </div>

              {/* Bottom Editorial Card */}
              <div className="absolute inset-x-5 bottom-5 z-20 p-6 rounded-3xl bg-stone-900/90 border border-white/10 backdrop-blur-xl text-white shadow-2xl">
                
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary block mb-1">
                      {current.category}
                    </span>
                    <h2 className="text-2xl font-black tracking-tight text-white leading-tight">
                      {current.title}
                    </h2>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-white/10 border border-white/10 text-[9px] font-bold uppercase tracking-widest text-stone-300">
                    Normandie
                  </span>
                </div>

                {/* Technical specs grid */}
                <div className="grid grid-cols-2 gap-3 pt-3 mt-3 border-t border-white/10 text-[11px] text-stone-300">
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-wider text-stone-400 font-medium">Fil de confection</span>
                    <span className="font-semibold text-white mt-0.5">{current.threadType}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-wider text-stone-400 font-medium">Exigence</span>
                    <span className="font-semibold text-white mt-0.5">{current.resistance}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] text-stone-400 italic">
                    {current.technique}
                  </span>
                  <Link 
                    href="/devis"
                    className="text-[11px] font-black uppercase tracking-wider text-primary hover:text-white transition-colors flex items-center gap-1"
                  >
                    Demander l'identique <ArrowUpRight size={12} />
                  </Link>
                </div>

              </div>

              {/* Fine corner thread accents */}
              <div className="absolute inset-3 border border-white/10 rounded-[2.1rem] pointer-events-none" />

            </div>

            {/* Quick Indicators */}
            <div className="flex items-center gap-2 mt-5">
              {SHOWCASE_ITEMS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveIdx(i);
                    setIsMacro(false);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIdx === i ? "w-10 bg-stone-900" : "w-2.5 bg-stone-300 hover:bg-stone-400"
                  }`}
                  aria-label={`Afficher création ${i + 1}`}
                />
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
