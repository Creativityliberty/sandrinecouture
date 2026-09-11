"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Utensils,
  Bed,
  Wrench,
  Store,
  Scissors,
  PartyPopper,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Clock,
  MapPin,
  Cpu,
  Layers,
  Sparkles,
  Shirt,
  Building2,
  FileCheck,
  ChevronRight,
  Target,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";

const SECTORS = [
  {
    id: "restauration",
    icon: Utensils,
    name: "Métiers de Bouche & Restauration",
    badge: "Lavages Intensifs 60°C",
    desc: "Tabliers à bavette renforcés, vestes de cuisine respirantes, polos de service et toques. Broderie inaltérable résistante aux graisses et frottements.",
    recommendations: ["Tabliers sombres", "Polos 100% coton peigné", "Logo cœur & prénom serveur"]
  },
  {
    id: "artisans",
    icon: Wrench,
    name: "Artisans, BTP & Industrie",
    badge: "Haute Résistance",
    desc: "Sweats à capuche doublés, vestes softshell coupe-vent, bonnets et patchs velcro amovibles pour tenues de chantier exigeantes.",
    recommendations: ["Softshells déperlantes", "Sweats 320g/m²", "Grand dos haute visibilité"]
  },
  {
    id: "hotellerie",
    icon: Bed,
    name: "Hôtellerie, Accueil & Spas",
    badge: "Élégance Discrète",
    desc: "Chemises ajustées, peignoirs nid d'abeille, draps de bain denses et serviettes d'accueil avec monogrammes brodés d'une finesse chirurgicale.",
    recommendations: ["Draps de bain 550g", "Chemises col italien", "Nuque ou logo cœur ton sur ton"]
  },
  {
    id: "boulangerie",
    icon: Store,
    name: "Boulangeries, Traiteurs & Épiceries",
    badge: "Hygiène & Image",
    desc: "Tabliers courts ou longs, t-shirts légers et casquettes coordonnées pour soigner l'accueil de votre clientèle au quotidien.",
    recommendations: ["Coton canevas robuste", "Tabliers avec poches", "Lettrage artisanal"]
  },
  {
    id: "esthetique",
    icon: Scissors,
    name: "Salons de Coiffure & Instituts",
    badge: "Ligne Chic",
    desc: "Tuniques fluides, peignoirs clients personnalisés et serviettes éponge douces arborant votre signature de marque.",
    recommendations: ["Tissus déperlants anti-coloration", "Broderie fil argent/or", "Finitions délicates"]
  },
  {
    id: "clubs",
    icon: PartyPopper,
    name: "Clubs, Associations & Événements",
    badge: "Esprit de Corps",
    desc: "Sweats d'équipes, polos d'encadrement, casquettes et écussons pour fédérer vos membres avec un textile qui traverse les saisons.",
    recommendations: ["Séries moyennes à grandes", "Logo grand format", "Option prénom individuel"]
  }
];

const PLACEMENT_OPTIONS = [
  {
    id: "coeur",
    title: "Emplacement Cœur",
    subtitle: "Le standard absolu",
    desc: "Position classique sur la poitrine gauche. Discret, raffiné et immédiatement identifiable lors d'un échange professionnel.",
    badge: "Le + Choisi",
    size: "8 à 10 cm max"
  },
  {
    id: "manche",
    title: "Manche Gauche / Droite",
    subtitle: "La signature moderne",
    desc: "Emplacement premium pour un rappel subtil de logo, un drapeau français ou l'année de fondation de votre entreprise.",
    badge: "Finition Chic",
    size: "6 à 8 cm max"
  },
  {
    id: "nuque",
    title: "Sous-Col & Nuque",
    subtitle: "L'élégance couture",
    desc: "Extrêmement élégant sur les polos et sweats. Visible quand vos collaborateurs se déplacent, sans surcharger l'avant.",
    badge: "Ultra Tendance",
    size: "5 à 8 cm max"
  },
  {
    id: "dos",
    title: "Grand Dos",
    subtitle: "Impact visuel maximal",
    desc: "Idéal pour les équipes sur chantier, en cuisine ouverte ou en salon événementiel. Visibilité garantie jusqu'à 20 mètres.",
    badge: "Haute Visibilité",
    size: "20 à 28 cm"
  }
];

const PACKS = [
  {
    id: "starter",
    name: "PACK ARTISAN",
    target: "Petites équipes & Indépendants",
    volume: "5 à 15 pièces",
    features: [
      "Panachage tailles & textiles possible",
      "Broderie Logo Cœur haute densité",
      "Fils Madeira certifiés Oeko-Tex",
      "Échantillon / BAT numérique sous 24h",
      "Facturation HT avec TVA récupérable"
    ],
    highlight: false,
    cta: "Configurer mon Pack Artisan"
  },
  {
    id: "team",
    name: "PACK TEAM PRO",
    target: "PME, Hôtels & Restaurants",
    volume: "15 à 50 pièces",
    features: [
      "Frais de numérisation & matrice offerts",
      "Logo Cœur + Option Nuque ou Manche",
      "Possibilité d'ajouter les prénoms de l'équipe",
      "Validation sur maquette numérique haute définition",
      "Livraison suivie express en France offerte",
      "Tarifs dégressifs avantageux"
    ],
    highlight: true,
    badge: "Le Plus Commandé",
    cta: "Obtenir le devis Pack Team"
  },
  {
    id: "privilege",
    name: "PACK MULTI-TEXTILES",
    target: "Grandes Équipes & Réseaux",
    volume: "50 à 500+ pièces",
    features: [
      "Panachage complet : Polos + Sweats + Tabliers + Patchs",
      "Option patchs velcro détachables",
      "Priorité de production en atelier",
      "Accompagnement textile complet avec Sandrine",
      "Réassorts facilités en 1 clic tout au long de l'année"
    ],
    highlight: false,
    cta: "Étude sur-mesure Grands Volumes"
  }
];

export function EntreprisesPage() {
  const [selectedPlacement, setSelectedPlacement] = useState(0);

  return (
    <div className="bg-[#faf8f5] text-[#1c1917] selection:bg-primary selection:text-white pt-24 sm:pt-32">
      
      {/* 1. HERO B2B LUXURY & SHOWROOM */}
      <section className="relative w-full max-w-full pt-8 sm:pt-12 pb-16 sm:pb-28 lg:pb-32 overflow-hidden bg-stone-950 text-white selection:bg-primary selection:text-white border-b border-white/10">
        
        {/* Background Photo for Desktop (>= sm) */}
        <div className="hidden sm:block absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <Image 
            src="/images/hero/hero-entreprises-atelier.webp" 
            alt="Showroom de broderie professionnelle pour entreprises en Normandie par Sandrine Couture : tabliers de cuisine, polos corporate, vestes et casquettes brodées"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[78%_38%] filter brightness-[0.96] contrast-[1.04] saturate-[1.05]"
          />
          {/* Soft, warm luxury gradient for desktop */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/65 to-transparent z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-transparent to-stone-950/40 z-[1]" />
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top Operational Status Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 sm:pb-6 mb-8 sm:mb-12 border-b border-white/15 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-bold text-stone-300 font-mono">
            <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
              <span className="flex h-2.5 w-2.5 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-white font-black tracking-wider">Atelier B2B Ouvert • Normandie (76)</span>
              <span className="text-stone-400 hidden sm:inline">/</span>
              <span className="hidden sm:inline text-stone-300">Facturation Pro TVA Déductible</span>
            </div>

            <div className="flex items-center gap-4 text-[10px] font-bold text-stone-300">
              <span className="flex items-center gap-1.5">
                <Clock size={13} className="text-primary-light shrink-0" /> Délai devis moyen &lt; 24h
              </span>
              <span className="text-primary-light font-bold">
                Minimum : Dès 1 pièce
              </span>
            </div>
          </div>

          {/* Dedicated Mobile Photo Showcase (Visible only on mobile < sm) */}
          <div className="sm:hidden w-full mb-8 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-stone-900">
            <Image 
              src="/images/hero/hero-entreprises-atelier.webp" 
              alt="Showroom de broderie professionnelle pour entreprises en Normandie par Sandrine Couture"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[65%_35%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-bold text-white uppercase tracking-wider bg-stone-950/70 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/15">
              <span className="flex items-center gap-1.5">
                <Sparkles size={11} className="text-primary-light" /> Showroom Professionnel & Uniformes
              </span>
              <span className="text-stone-300 font-mono text-[9px]">Atelier Robertot (76)</span>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="max-w-2xl flex flex-col items-start">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900/90 border border-white/20 text-white text-[9px] sm:text-[10px] font-bold tracking-[0.22em] uppercase mb-4 sm:mb-6 backdrop-blur-md shadow-lg font-mono">
              <Building2 size={12} className="text-primary" />
              <span>Pôle Uniformes & Branding Corporate • Fait Main 76</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-[-0.03em] leading-[1.05] text-white uppercase mb-4 sm:mb-6 drop-shadow-lg">
              L'image de vos équipes, <br />
              <span className="font-serif italic font-normal normal-case text-primary-light underline decoration-primary/40 underline-offset-8 inline-block">
                gravée dans le fil
              </span>.
            </h1>

            {/* Copy */}
            <p className="text-sm sm:text-base lg:text-lg text-stone-200 font-normal leading-relaxed mb-8 max-w-xl drop-shadow-md">
              Restaurants, artisans, hôtellerie, PME et clubs. Donnez à votre équipe une prestance d'exception avec une broderie industrielle haute définition, inusable au lavage et réalisée de mes mains dans mon atelier normand.
            </p>

            {/* Instant Assurance Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 w-full mb-8 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-md text-white">
              <div className="text-left px-2">
                <span className="text-xs font-mono font-bold text-white block">Devis 24h</span>
                <span className="text-[10px] text-stone-300">Chiffrage précis</span>
              </div>
              <div className="text-left px-2 border-l border-white/15">
                <span className="text-xs font-mono font-bold text-white block">BAT Brodé</span>
                <span className="text-[10px] text-stone-300">Validation visuelle</span>
              </div>
              <div className="text-left px-2 border-l border-white/15">
                <span className="text-xs font-mono font-bold text-white block">Lavage 60°C</span>
                <span className="text-[10px] text-stone-300">Fils indélébiles</span>
              </div>
              <div className="text-left px-2 border-l border-white/15">
                <span className="text-xs font-mono font-bold text-white block">TVA Pro</span>
                <span className="text-[10px] text-stone-300">Facturation nette</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Link href="/devis?type=entreprise" className="w-full sm:w-auto no-underline">
                <Button
                  size="lg"
                  className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider text-xs shadow-xl shadow-primary/25 flex items-center justify-center gap-3 w-full cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>Demander un devis B2B express</span>
                  <ChevronRight size={14} />
                </Button>
              </Link>

              <a href="#packs" className="w-full sm:w-auto no-underline">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-7 rounded-full border-white/20 bg-stone-900/80 text-white hover:bg-white hover:text-stone-950 transition-all font-bold uppercase tracking-wider text-xs w-full flex items-center justify-center gap-2 cursor-pointer backdrop-blur-md"
                >
                  <span>Découvrir les packs</span>
                </Button>
              </a>
            </div>

          </div>

        </div>

      </section>

      {/* 2. LES SECTEURS & MÉTIERS (BENTO INTERACTIVE) */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-black/[0.06] bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary block mb-3">
                Expertise Métier Dédiée
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.03em] uppercase text-stone-900 leading-[1.05]">
                Des solutions adaptées à <br />
                <span className="font-serif italic font-normal text-primary normal-case">chaque corps de métier</span>.
              </h2>
            </div>
            <p className="text-stone-500 text-sm max-w-sm font-medium leading-relaxed">
              Une cuisine étoilée n'a pas les mêmes contraintes qu'un chantier BTP ou un cabinet de soins. Nous ajustons les matières et techniques de broderie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECTORS.map((sector) => {
              const Icon = sector.icon;
              return (
                <div
                  key={sector.id}
                  className="p-8 rounded-[2rem] bg-[#faf8f5] border border-black/[0.06] hover:border-black/20 hover:shadow-xl transition-all duration-500 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-black/10 flex items-center justify-center text-stone-900 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <Icon size={22} />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-white border border-black/10 text-[9px] font-mono tracking-widest uppercase text-stone-700 font-bold">
                        {sector.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-black tracking-tight text-stone-900 mb-3">
                      {sector.name}
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed mb-6">
                      {sector.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/[0.06]">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block mb-2 font-bold">
                      Articles Conseillés :
                    </span>
                    <div className="space-y-1">
                      {sector.recommendations.map((rec, rIdx) => (
                        <div key={rIdx} className="text-xs text-stone-700 flex items-center gap-2 font-medium">
                          <span className="text-primary font-bold">✦</span>
                          <span>{rec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Fallback assurance banner */}
          <div className="mt-12 p-6 rounded-2xl bg-stone-100 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <Sparkles size={18} className="text-primary shrink-0" />
              <span className="text-sm font-semibold text-stone-800">
                Vous n'êtes pas dans la liste ou avez un textile bien spécifique ? Aucun souci, nous adaptons le piquage à votre support.
              </span>
            </div>
            <Link href="/devis?type=entreprise">
              <Button size="sm" className="bg-stone-900 text-white hover:bg-stone-800 text-xs font-mono uppercase tracking-wider">
                Parler de mon projet
              </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* 3. LES EMPLACEMENTS DE BRODERIE & OPTIONS */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-black/[0.06] bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary block mb-3">
                Précision & Composition
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.03em] uppercase text-stone-900 leading-[1.05]">
                Où positionner <br />
                <span className="font-serif italic font-normal text-primary normal-case">votre logo d'entreprise</span> ?
              </h2>
            </div>
            <p className="text-stone-500 text-sm max-w-sm font-medium leading-relaxed">
              La visibilité d'un uniforme dépend de l'équilibre de son placement. Découvrez les zones standards les plus efficaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {PLACEMENT_OPTIONS.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setSelectedPlacement(idx)}
                className={`p-8 rounded-[2rem] border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  selectedPlacement === idx
                    ? "bg-stone-900 text-white border-stone-900 shadow-xl"
                    : "bg-white text-stone-900 border-black/[0.08] hover:border-black/20"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`px-2.5 py-1 rounded-full text-[9px] font-mono tracking-widest uppercase font-bold ${
                      selectedPlacement === idx ? "bg-primary text-white" : "bg-stone-100 text-stone-800"
                    }`}>
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono opacity-50">0{idx + 1}</span>
                  </div>

                  <h3 className="text-xl font-black tracking-tight mb-1">
                    {item.title}
                  </h3>
                  <div className={`text-xs font-mono mb-4 ${selectedPlacement === idx ? "text-primary" : "text-stone-500"}`}>
                    {item.subtitle}
                  </div>
                  <p className={`text-xs leading-relaxed ${selectedPlacement === idx ? "text-stone-300" : "text-stone-600"}`}>
                    {item.desc}
                  </p>
                </div>

                <div className={`pt-4 mt-6 border-t text-[11px] font-mono flex items-center justify-between ${
                  selectedPlacement === idx ? "border-white/15 text-stone-300" : "border-black/[0.06] text-stone-500"
                }`}>
                  <span>Format :</span>
                  <span className="font-bold">{item.size}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Extra options strip */}
          <div className="p-8 rounded-[2rem] bg-white border border-black/[0.08] grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Target size={18} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900">Ajout Prénom / Fonction</h4>
                <p className="text-xs text-stone-500 mt-1">Personnalisation individuelle par collaborateur sans changer le logo.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Layers size={18} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900">Patchs Velcro Détachables</h4>
                <p className="text-xs text-stone-500 mt-1">Parfait pour le BTP ou pour laver les vestes séparément sans abîmer les écussons.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Cpu size={18} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900">Optimisation Vectorielle</h4>
                <p className="text-xs text-stone-500 mt-1">Chaque trait de votre fichier est adapté aux contraintes mécaniques du fil.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. LES PACKS ENTREPRISE CLÉS EN MAIN */}
      <section id="packs" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-black/[0.06] bg-stone-950 text-white relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary block mb-3">
              Formules Entreprises
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.03em] uppercase text-white leading-tight">
              Des formules calibrées pour <br />
              <span className="font-serif italic font-normal text-primary normal-case">votre structure</span>.
            </h2>
            <p className="text-stone-400 text-sm mt-4">
              Simples, transparentes et adaptables. Vous pouvez mixer vos articles (polos, sweats, tabliers) selon vos effectifs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {PACKS.map((pack) => (
              <div
                key={pack.id}
                className={`rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 ${
                  pack.highlight
                    ? "bg-stone-900 border-2 border-primary shadow-2xl shadow-primary/10 relative scale-100 lg:-translate-y-2"
                    : "bg-stone-900/60 border border-stone-800"
                }`}
              >
                {pack.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-primary text-white text-[9px] font-mono uppercase tracking-widest font-bold shadow-md">
                      {pack.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                        {pack.name}
                      </h3>
                      <div className="text-xs text-stone-400 font-mono mt-1">
                        {pack.target}
                      </div>
                    </div>
                  </div>

                  <div className="inline-block px-3 py-1 rounded-lg bg-white/10 text-xs font-mono font-bold text-primary mb-8">
                    Volume : {pack.volume}
                  </div>

                  <div className="space-y-3.5 mb-8">
                    {pack.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs text-stone-300 font-medium">
                        <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link href="/devis?type=entreprise" className="w-full">
                  <Button
                    className={`w-full h-13 rounded-full font-bold uppercase tracking-wider text-xs cursor-pointer ${
                      pack.highlight
                        ? "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30"
                        : "bg-white text-stone-900 hover:bg-stone-100"
                    }`}
                  >
                    {pack.cta}
                  </Button>
                </Link>

              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-xs font-mono text-stone-400">
            👉 Besoin d'une configuration personnalisée (panachage spécifique, grand volume) ? <Link href="/devis?type=entreprise" className="text-primary underline">Contactez l'atelier directement</Link>.
          </div>

        </div>

      </section>

      {/* 5. DÉROULEMENT D'UNE COMMANDE B2B */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-black/[0.06] bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary block mb-3">
                Process B2B Sans Surprise
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.03em] uppercase text-stone-900 leading-[1.05]">
                Comment se déroule <br />
                <span className="font-serif italic font-normal text-primary normal-case">votre commande</span> ?
              </h2>
            </div>
            <div className="flex items-center gap-6 text-xs font-mono text-stone-500">
              <span className="flex items-center gap-2">
                <Clock size={15} className="text-primary" /> Délai moyen constaté : ~10 jours
              </span>
              <span className="flex items-center gap-2">
                <FileCheck size={15} className="text-primary" /> Facturation Pro HT
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { num: "01", title: "Briefing", desc: "Envoi de votre logo vectoriel + quantité + types d'articles souhaités." },
              { num: "02", title: "Devis Chiffré", desc: "Réponse détaillée sous 24h ouvrées avec conseils sur les textiles." },
              { num: "03", title: "BAT & Accord", desc: "Validation de la matrice de broderie avant lancement en production." },
              { num: "04", title: "Confection", desc: "Broderie artisanale haute précision que je réalise personnellement dans mon atelier à Robertot." },
              { num: "05", title: "Livraison", desc: "Expédition suivie ou retrait direct sur place selon vos préférences." },
            ].map((step, sIdx) => (
              <div key={sIdx} className="p-6 rounded-2xl bg-[#faf8f5] border border-black/[0.06] flex flex-col justify-between min-h-[220px]">
                <span className="text-3xl font-black font-mono text-primary/30">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-base font-black tracking-tight text-stone-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CALL TO ACTION FINAL B2B */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-stone-900 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[10px] font-mono tracking-widest uppercase mb-6">
            <MessageCircle size={12} className="text-primary" />
            <span>Devis Express WhatsApp ou Formulaire</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
            Demandez votre devis pro <br />
            <span className="font-serif italic font-normal text-primary normal-case">en moins d'une minute</span>.
          </h2>

          <p className="text-stone-300 text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Logo + articles + quantité + délai souhaité = chiffrage précis sous 24h avec Sandrine.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-10">
            <Link href="/devis?type=entreprise" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider text-xs shadow-xl shadow-primary/30 flex items-center justify-center gap-2 w-full cursor-pointer"
              >
                <MessageCircle size={16} />
                <span>Devis Entreprise WhatsApp</span>
              </Button>
            </Link>

            <a href="tel:0629492213" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline-dark"
                className="h-14 px-8 uppercase tracking-wider text-xs w-full cursor-pointer"
              >
                <span>06 29 49 22 13</span>
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-stone-400">
            <span>Robertot (76560)</span>
            <span>•</span>
            <span>Rouen</span>
            <span>•</span>
            <span>Le Havre</span>
            <span>•</span>
            <span>Dieppe</span>
            <span>•</span>
            <span>Livraison France Entière</span>
          </div>

        </div>
      </section>

    </div>
  );
}
