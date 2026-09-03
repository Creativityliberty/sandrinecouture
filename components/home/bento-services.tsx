"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Building2, 
  Baby, 
  Tag, 
  Gift, 
  ArrowUpRight, 
  ShieldCheck, 
  Sparkles, 
  Cpu, 
  Check, 
  Layers, 
  Shirt, 
  Trophy 
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface BentoItem {
  id: string;
  category: "all" | "pro" | "particulier";
  title: string;
  tagline: string;
  description: string;
  features: string[];
  badge: string;
  imgUrl: string;
  size: "large" | "medium" | "small";
}

const BENTO_SERVICES: BentoItem[] = [
  {
    id: "pro",
    category: "pro",
    title: "Entreprises, Artisans & Clubs",
    tagline: "Séries textiles corporate & écussons",
    description: "Digitalisation fidèle de votre logo d'entreprise. Sweats, polos, vestes softshell, tabliers et casquettes brodés pour valoriser votre image de marque.",
    features: ["Aucun minimum imposé", "Fils ultra-résistants 60°C", "Échantillon / BAT brodé préalable"],
    badge: "B2B & Collectivités",
    imgUrl: "/images/realisations/sweat-capuche-rouge-brode-ours-muspelheim.webp",
    size: "large"
  },
  {
    id: "naissance",
    category: "particulier",
    title: "Cadeaux de Naissance & Éveil",
    tagline: "Pièces uniques & souvenirs d'enfance",
    description: "Gilets de berger réversibles moumoute, protège-carnets de santé, capes de bain et doudous délicatement personnalisés au prénom de l'enfant.",
    features: ["Tissus certifiés Oeko-Tex", "Finition anti-irritation", "Prénom & typographie au choix"],
    badge: "Coup de Cœur",
    imgUrl: "/images/realisations/gilet-berger-bebe-reversible-moumoute-sherpa.webp",
    size: "medium"
  },
  {
    id: "sur-mesure",
    category: "particulier",
    title: "Linge de Maison & Bain",
    tagline: "Éponge haut de gamme & broderie d'art",
    description: "Draps de bain denses, peignoirs et serviettes de toilette ornés de monogrammes, blasons sportifs ou lettrages personnalisés.",
    features: ["Éponge 550g/m² moelleuse", "Résistance chlore et lavages fréquents", "Finitions ourlets soignés"],
    badge: "Personnalisation",
    imgUrl: "/images/realisations/drap-bain-personnalise-julian-logo-psg-broderie-sur-mesure-france.webp",
    size: "medium"
  },
  {
    id: "accessoires",
    category: "all",
    title: "Petite Maroquinerie & Pochettes",
    tagline: "Créations uniques & accessoires de mode",
    description: "Trousses zippées, tote bags en toile épaisse et étuis sur-mesure confectionnés ou personnalisés directement dans notre atelier normand.",
    features: ["Coton canevas robuste", "Fermetures éclair premium", "Idéal cadeaux d'événements"],
    badge: "Atelier",
    imgUrl: "/images/realisations/gilet-berger-bebe-reversible-suedine-marron.webp",
    size: "small"
  }
];

export function BentoServices() {
  const [filter, setFilter] = useState<"all" | "pro" | "particulier">("all");

  const filteredServices = BENTO_SERVICES.filter(
    (item) => filter === "all" || item.category === "all" || item.category === filter
  );

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 bg-stone-100/60 border-b border-stone-200/70 selection:bg-primary selection:text-white relative">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-primary/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/80 border border-stone-300/60 text-[10px] font-black uppercase tracking-widest text-stone-700 mb-4">
              <Sparkles size={12} className="text-primary" />
              <span>Savoir-Faire & Confections</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight">
              Des créations pensées pour <br />
              <span className="font-serif italic font-normal text-primary">traverser les années</span>.
            </h2>
            <p className="text-stone-600 text-base sm:text-lg mt-3 max-w-xl font-normal">
              Que ce soit pour affirmer l'identité de votre entreprise ou célébrer une naissance, chaque fil est déposé avec précision millimétrique.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-stone-200 shadow-xs">
            {[
              { id: "all", label: "Toutes nos réalisations" },
              { id: "pro", label: "Professionnels & Clubs" },
              { id: "particulier", label: "Particuliers & Naissance" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  filter === tab.id
                    ? "bg-stone-900 text-white shadow-xs"
                    : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
          {filteredServices.map((service, index) => {
            const isLarge = service.size === "large";
            const colSpan = isLarge ? "md:col-span-8" : "md:col-span-4";

            return (
              <div
                key={service.id}
                className={`${colSpan} group relative rounded-[2rem] bg-white border border-stone-200/80 shadow-xs hover:shadow-xl hover:border-stone-400/60 transition-all duration-500 overflow-hidden flex flex-col justify-between`}
              >
                {/* Visual Header / Background Media */}
                <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-stone-900">
                  <img
                    src={service.imgUrl}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest bg-white/90 backdrop-blur-md text-stone-900 shadow-xs">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title on Image */}
                  <div className="absolute bottom-4 inset-x-5 text-white">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-primary block mb-0.5">
                      {service.tagline}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between bg-white">
                  <div>
                    <p className="text-stone-600 text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-stone-700">
                          <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[9px] shrink-0 font-bold">
                            ✓
                          </span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                    <Link
                      href="/devis"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-900 group-hover:text-primary transition-colors cursor-pointer"
                    >
                      <span>Configurer un projet</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>

                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
                      Atelier 76
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner: Expertise Piquage & Digitalisation */}
        <div className="relative rounded-[2.5rem] bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950 text-white p-8 sm:p-10 border border-stone-800 shadow-2xl overflow-hidden">
          {/* Subtle thread graphic background */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0 text-primary">
                <Cpu size={28} />
              </div>
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">
                    Le Secret d'une Belle Broderie
                  </span>
                  <span className="text-stone-500">•</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                    Piquage & Digitalisation
                  </span>
                </div>
                <h3 className="text-2xl font-black tracking-tight text-white mb-2">
                  La matrice de piquage offerte sur vos séries
                </h3>
                <p className="text-stone-300 text-sm leading-relaxed">
                  Contrairement à une simple impression, la broderie requiert une programmation point par point de chaque angle et de la densité du fil. Nous optimisons chaque logo vectoriel pour un relief 3D saisissant et une durabilité à toute épreuve.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Link href="/devis" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="h-12 px-7 rounded-full bg-primary hover:bg-primary/90 text-white font-bold uppercase text-xs tracking-wider shadow-lg shadow-primary/30 w-full sm:w-auto cursor-pointer"
                >
                  Envoyer mon logo (Devis sous 24h)
                </Button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
