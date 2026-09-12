"use client";
import { RevealOnScroll } from "@/components/effects/reveal-on-scroll";

import React, { useState } from "react";
import { REALISATIONS, Realisation } from "@/lib/realisations-data";
import { 
  ArrowLeft, 
  X, 
  Sparkles, 
  Eye, 
  SlidersHorizontal, 
  BookOpen, 
  ArrowRight, 
  Check, 
  Layers,
  MapPin,
  Clock,
  Star,
  Scissors
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookshelfFrame } from "@/components/effects/bookshelf-frame";

export function RealisationsPage() {
  const [selectedRealisation, setSelectedRealisation] = useState<Realisation | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("Tous");
  const [visibleCount, setVisibleCount] = useState<number>(18);

  const categories = [
    "Tous",
    "Entreprises",
    "Particuliers",
    "Bébé",
    "Accessoires",
  ];

  const orderedImages = [...REALISATIONS].sort((a, b) => b.id - a.id);

  const filteredImages =
    activeFilter === "Tous"
      ? orderedImages
      : orderedImages.filter((img) => img.category === activeFilter);

  const displayedImages = filteredImages.slice(0, visibleCount);

  return (
    <div className="bg-[#faf8f5] text-[#1c1917] min-h-screen selection:bg-primary selection:text-white pt-24 sm:pt-32">
      
      {/* 1. HERO RÉALISATIONS QUIET LUXURY (STYLE BOUTIQUE) */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-8 pb-14 sm:pb-20 border-b border-stone-200/60 overflow-hidden bg-stone-900 text-white">
        
        {/* Realistic Embroidery Needle & Pink Heart in Background */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <Image 
            src="/images/hero/hero-realisations-broderie-coeur.webp" 
            alt="Cœur brodé au fil rose avec aiguille de couture et fil en gros plan"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[75%_35%] sm:object-[82%_40%] filter brightness-[0.92] contrast-[1.08] saturate-[1.05]"
          />
          {/* Subtle Dark Glassmorphism scrim: text is super crisp on left, needle & heart clear on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/75 to-stone-950/35 z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/70 z-[1]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Top Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-10 border-b border-white/15 text-[11px] font-mono tracking-widest uppercase text-stone-300">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-bold text-white">By Sandrine Couture • Atelier Robertot (Normandie)</span>
              <span className="text-stone-400">/</span>
              <span>Piquage & Broderie d'Art</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-stone-300">Fils Certifiés Oeko-Tex 100</span>
              <Link href="/devis" className="text-primary-light font-bold hover:underline transition-colors">
                Devis sur mesure sous 24h &rarr;
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-900/90 text-white text-[9px] font-mono tracking-[0.25em] uppercase mb-4 shadow-md border border-white/10 backdrop-blur-md">
                <Scissors size={12} className="text-primary" />
                <span>Archives Atelier & Pièces Réalisées</span>
              </div>

              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-normal tracking-tight leading-[1.05] text-white uppercase mb-4 drop-shadow-md">
                Chaque point est <br />
                <span className="font-serif italic font-normal normal-case text-primary-light underline decoration-primary/40 underline-offset-8">
                  une empreinte unique
                </span>.
              </h1>
            </div>

            <p className="text-stone-200 text-sm sm:text-base max-w-sm leading-relaxed font-normal drop-shadow-sm">
              Plus de 100 créations brodées et confectionnées de mes mains à Robertot. Des uniformes professionnels d'artisans normands aux trousseaux de naissance les plus délicats.
            </p>
          </div>

          {/* Sticky Segmented Filter Control */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-1.5 rounded-2xl bg-white/90 backdrop-blur-md border border-stone-200/80 shadow-xs">
            <div className="flex flex-wrap items-center gap-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveFilter(cat);
                    setVisibleCount(18);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    activeFilter === cat
                      ? "bg-stone-900 text-white shadow-xs"
                      : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="hidden sm:flex items-center gap-2.5 px-4 text-xs font-mono text-stone-500">
              <SlidersHorizontal size={13} className="text-primary" />
              <span>{filteredImages.length} pièces archivées</span>
            </div>
          </div>

        </div>

      </section>

      {/* 2. CATALOGUE DES RÉALISATIONS (BENTO GRID) */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">
          
          {/* Lookbook Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedImages.map((img, i) => (
              <div
                key={img.id}
                className="group relative rounded-[2.25rem] bg-white border border-black/[0.07] shadow-sm hover:shadow-2xl hover:border-black/20 transition-all duration-500 overflow-hidden flex flex-col justify-between cursor-pointer"
                onClick={() => setSelectedRealisation(img)}
              >
                {/* Visual Canvas */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-100">
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading={i < 6 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-50 group-hover:opacity-80 transition-opacity" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-stone-900 text-[9px] font-mono tracking-widest uppercase font-bold shadow-xs">
                      {img.category}
                    </span>
                  </div>

                  {/* Zoom Icon indicator */}
                  <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-stone-950/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                    <Eye size={15} />
                  </div>
                </div>

                {/* Card Meta Content */}
                <div className="p-6 flex flex-col justify-between grow">
                  <div>
                    <h3 className="text-base font-black uppercase tracking-tight text-stone-900 group-hover:text-primary transition-colors duration-300 line-clamp-1 mb-1.5">
                      {img.title}
                    </h3>
                    <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed font-normal">
                      {img.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs">
                    <span className="font-mono text-stone-400 text-[10px] tracking-wider uppercase">
                      Atelier 76
                    </span>
                    <span className="font-bold text-stone-900 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-1 text-[11px] uppercase tracking-wider">
                      Détails <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredImages.length && (
            <div className="mt-14 text-center">
              <Button
                onClick={() => setVisibleCount((prev) => prev + 18)}
                variant="outline"
                className="h-14 px-8 rounded-full border-stone-300 hover:border-stone-900 bg-white font-mono uppercase text-xs tracking-wider transition-all duration-300 shadow-sm cursor-pointer"
              >
                Afficher plus de réalisations ({filteredImages.length - visibleCount} restantes)
              </Button>
            </div>
          )}

        </div>
      </section>

      {/* 3. LA BIBLIOTHÈQUE TACTILE 3D (THREE.JS WEBGL) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-stone-200/60 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2.5">
              <BookOpen size={18} className="text-primary" />
              <h2 className="text-base sm:text-lg font-mono font-bold uppercase tracking-widest text-stone-900">
                La Bibliothèque Tactile • 7 Recueils de Créations 3D
              </h2>
            </div>
            <span className="text-[11px] font-mono text-stone-500">
              Three.js r165 WebGL • Cliquez et faites pivoter les recueils
            </span>
          </div>

          {/* Interactive Bookshelf Viewer */}
          <BookshelfFrame />
        </div>
      </section>

      {/* 4. FINAL CTA & MODAL */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">

        {/* 4. FINAL CTA */}
        <div className="mt-24 p-10 sm:p-16 rounded-[3rem] bg-stone-950 text-white border border-stone-800 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
          
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <span className="text-[10px] font-mono text-primary uppercase tracking-[0.25em] font-bold block mb-3">
              Votre Projet Sur Mesure
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-6">
              Une idée en tête ? <br />
              <span className="text-primary font-serif italic normal-case">Donnons-lui vie ensemble</span>.
            </h2>
            <p className="text-stone-400 text-sm max-w-lg mx-auto leading-relaxed mb-8 font-normal">
              Que ce soit pour équiper votre équipe d'artisans ou pour offrir un cadeau de naissance brodé inoubliable, l'atelier répond à votre demande sous 24h.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/devis" className="no-underline">
                <Button
                  className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-bold uppercase text-xs tracking-wider shadow-lg shadow-primary/25 cursor-pointer"
                >
                  Demander un devis gratuit sous 24h
                </Button>
              </Link>
              <Link href="/boutique" className="no-underline">
                <Button
                  variant="outline-dark"
                  className="h-14 px-8 rounded-full font-bold uppercase text-xs tracking-wider cursor-pointer"
                >
                  Visiter la boutique
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* 5. LIGHTBOX MODAL HIGH RESOLUTION */}
        {selectedRealisation && (
          <div
            className="fixed inset-0 z-[200] bg-stone-950/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedRealisation(null)}
          >
            <div 
              className="bg-white rounded-[2.5rem] border border-black/10 overflow-hidden max-w-4xl w-full shadow-2xl relative flex flex-col md:flex-row animate-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-stone-900/80 text-white hover:bg-stone-900 transition-colors cursor-pointer"
                onClick={() => setSelectedRealisation(null)}
                aria-label="Fermer l'aperçu"
              >
                <X size={18} />
              </button>

              {/* Large Image Visual */}
              <div className="md:w-3/5 relative bg-stone-950 flex items-center justify-center p-3 min-h-[350px] md:min-h-[500px]">
                <img
                  src={selectedRealisation.url}
                  className="w-full h-full max-h-[75vh] object-contain"
                  alt={selectedRealisation.title}
                />
              </div>

              {/* Detail Sidebar */}
              <div className="md:w-2/5 p-8 flex flex-col justify-between bg-[#faf8f5]">
                <div>
                  <span className="px-3 py-1 rounded-full bg-stone-900 text-white text-[9px] font-mono uppercase tracking-widest font-bold inline-block mb-4">
                    {selectedRealisation.category}
                  </span>

                  <h3 className="text-2xl font-black uppercase tracking-tight text-stone-900 mb-4">
                    {selectedRealisation.title}
                  </h3>

                  <p className="text-stone-600 text-xs leading-relaxed mb-6 font-normal">
                    {selectedRealisation.desc || "Pièce d'exception brodée avec des fils certifiés Oeko-Tex Standard 100. Confectionnée avec précision dans notre atelier de Robertot."}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-black/[0.08] text-xs font-mono">
                    <div className="flex items-center gap-2 text-stone-600">
                      <MapPin size={14} className="text-primary shrink-0" />
                      <span>Atelier Robertot (Normandie)</span>
                    </div>
                    <div className="flex items-center gap-2 text-stone-600">
                      <Clock size={14} className="text-primary shrink-0" />
                      <span>Délai moyen : 3 à 5 jours ouvrés</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-black/[0.08]">
                  <Link href="/devis" className="block w-full no-underline" onClick={() => setSelectedRealisation(null)}>
                    <Button
                      className="w-full h-12 rounded-full bg-primary hover:bg-primary/90 text-white font-bold uppercase text-xs tracking-wider shadow-md shadow-primary/20 cursor-pointer"
                    >
                      Commander une pièce similaire
                    </Button>
                  </Link>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
