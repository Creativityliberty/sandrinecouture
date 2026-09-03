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
  Star
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
    <div className="bg-[#faf8f5] text-[#1c1917] min-h-screen selection:bg-primary selection:text-white pt-24 sm:pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors mb-8 no-underline text-xs font-mono uppercase tracking-wider"
        >
          <ArrowLeft size={14} /> Retour au Showroom
        </Link>

        {/* 1. HERO SECTION & TITLE */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950 text-white text-[9px] font-mono tracking-[0.25em] uppercase mb-5 shadow-md border border-white/10">
              <div className="flex items-center gap-0.5 text-amber-400">
                <Star size={11} className="fill-amber-400" />
                <Star size={11} className="fill-amber-400" />
                <Star size={11} className="fill-amber-400" />
              </div>
              <span className="font-bold text-stone-200">Archives Atelier & Pièces Réalisées</span>
              <div className="flex items-center gap-0.5 text-amber-400">
                <Star size={11} className="fill-amber-400" />
                <Star size={11} className="fill-amber-400" />
              </div>
            </div>

            <h1 className="text-4xl sm:text-6xl xl:text-[4.25rem] font-black tracking-[-0.03em] leading-[1.02] text-stone-900 uppercase">
              Chaque point est <br />
              <span className="font-serif italic font-normal normal-case text-primary underline decoration-primary/20 underline-offset-8">
                une empreinte unique
              </span>.
            </h1>
          </div>

          <p className="text-stone-600 text-base max-w-sm leading-relaxed font-normal">
            Plus de 100 créations brodées et confectionnées à Robertot. Des uniformes d'artisans normands aux coffrets de naissance les plus délicats.
          </p>
        </div>

        {/* 2. THE THREE.JS 3D BOOKSHELF EXPERIENCE */}
        <div className="mb-20">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2.5">
              <BookOpen size={16} className="text-primary" />
              <h2 className="text-sm font-mono font-bold uppercase tracking-widest text-stone-900">
                La Bibliothèque Tactile • 7 Recueils d'Échantillons 3D
              </h2>
            </div>
            <span className="text-[11px] font-mono text-stone-500">
              Three.js r165 WebGL • Expérience Interactive
            </span>
          </div>

          {/* Interactive Bookshelf Viewer */}
          <BookshelfFrame />
        </div>

        {/* 3. COMPLETE GALLERY CATALOG WITH FILTERS */}
        <div className="pt-8 border-t border-black/[0.08]">
          
          {/* Segmented Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveFilter(cat);
                    setVisibleCount(18);
                  }}
                  className={`px-6 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    activeFilter === cat
                      ? "bg-stone-900 text-white shadow-md shadow-black/10"
                      : "bg-white text-stone-600 hover:text-stone-900 border border-black/[0.08] hover:bg-stone-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-stone-500">
              <SlidersHorizontal size={14} className="text-primary" />
              <span>{filteredImages.length} pièces archivées</span>
            </div>
          </div>

          {/* Lookbook Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedImages.map((img, i) => (
              <div
                key={img.id}
                className="group relative rounded-[2.25rem] bg-white border border-black/[0.07] shadow-sm hover:shadow-2xl hover:border-black/20 transition-all duration-500 overflow-hidden flex flex-col justify-between cursor-pointer"
                onClick={() => setSelectedRealisation(img)}
              >
                {/* Visual Canvas */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-950">
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading={i < 6 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

                  {/* Category & Search Intent Pill Tag */}
                  <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5 items-start">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-stone-900 text-[9px] font-mono tracking-widest uppercase font-bold shadow-xs">
                      {img.category}
                    </span>
                    {img.searchIntent && (
                      <span className="px-2.5 py-0.5 rounded-md bg-stone-950/85 backdrop-blur-md text-amber-300 text-[8px] font-mono tracking-wider uppercase font-semibold shadow-xs border border-white/10 hidden sm:inline-block">
                        🎯 {img.searchIntent}
                      </span>
                    )}
                  </div>

                  {/* Zoom Action Icon */}
                  <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-stone-900/80 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye size={14} />
                  </div>

                  {/* Overlay Title on Hover */}
                  <div className="absolute bottom-4 left-5 right-5 z-10 text-white">
                    <h3 className="text-lg font-black tracking-tight uppercase leading-snug">
                      {img.title}
                    </h3>
                  </div>
                </div>

                {/* Card Meta Content */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <p className="text-stone-600 text-xs leading-relaxed line-clamp-2 mb-4 font-normal">
                    {img.desc || "Broderie personnalisée sur mesure confectionnée dans notre atelier en Normandie."}
                  </p>

                  <div className="pt-3 border-t border-black/[0.06] flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400">
                      Confection Robertot
                    </span>
                    <span className="text-[10px] font-mono text-primary font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Inspecter</span>
                      <ArrowRight size={12} />
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Load More Button if remaining */}
          {visibleCount < filteredImages.length && (
            <div className="mt-16 text-center">
              <Button
                variant="outline"
                onClick={() => setVisibleCount((prev) => prev + 18)}
                className="h-13 px-8 rounded-full font-mono uppercase text-xs font-bold tracking-wider cursor-pointer border-black/15 hover:bg-stone-900 hover:text-white transition-all shadow-sm"
              >
                Afficher plus de créations ({filteredImages.length - visibleCount} restantes)
              </Button>
            </div>
          )}

        </div>

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
              <div className="md:w-3/5 relative bg-stone-950 aspect-[4/3] md:aspect-auto">
                <img
                  src={selectedRealisation.url}
                  className="w-full h-full object-cover"
                  alt={selectedRealisation.title}
                />
              </div>

              {/* Detail Sidebar */}
              <div className="md:w-2/5 p-8 flex flex-col justify-between bg-[#faf8f5]">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-stone-900 text-white text-[9px] font-mono uppercase tracking-widest font-bold inline-block">
                      {selectedRealisation.category}
                    </span>
                    {selectedRealisation.searchIntent && (
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-[9px] font-mono uppercase tracking-wider font-bold inline-block">
                        🎯 {selectedRealisation.searchIntent}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-black uppercase tracking-tight text-stone-900 mb-4">
                    {selectedRealisation.title}
                  </h3>

                  <p className="text-stone-600 text-xs leading-relaxed mb-4 font-normal">
                    {selectedRealisation.desc || "Pièce d'exception brodée avec des fils certifiés Oeko-Tex Standard 100. Confectionnée avec précision dans notre atelier de Robertot."}
                  </p>

                  {/* Targeted SEO Keywords */}
                  {selectedRealisation.keywords && selectedRealisation.keywords.length > 0 && (
                    <div className="mb-5">
                      <span className="text-[9px] font-mono uppercase tracking-widest text-stone-500 font-bold block mb-1.5">
                        Mots-clés SEO ciblés :
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedRealisation.keywords.map((kw, kwIdx) => (
                          <span key={kwIdx} className="px-2 py-0.5 rounded-md bg-stone-200/80 text-stone-700 text-[9px] font-mono">
                            #{kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

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
