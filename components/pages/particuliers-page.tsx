"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Baby,
  Gift,
  Heart,
  Home,
  ShoppingBag,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  MapPin,
  Sparkles,
  Scissors,
  ShieldCheck,
  Clock,
  Camera,
  ChevronRight,
  Eye,
  Star,
  Layers,
  Info
} from "lucide-react";
import { Button } from "@/components/ui/button";

const GIFT_UNIVERSES = [
  {
    id: "naissance",
    icon: Baby,
    title: "Naissance & Premiers Mois",
    badge: "Le Coup de Cœur",
    tagline: "Un trésor d'enfance inoubliable",
    desc: "Gilets de berger réversibles moumoute, protège-carnets de santé, gigoteuses, capes de bain et bavoirs délicatement brodés au prénom.",
    items: ["Gilet sherpa réversible", "Protège-carnet de santé", "Doudou & cape de bain"],
    imgUrl: "/images/realisations/gilet-berger-bebe-reversible-moumoute-sherpa.webp"
  },
  {
    id: "famille",
    icon: Gift,
    title: "Anniversaires & Fêtes",
    badge: "Sur-Mesure",
    tagline: "Des attentions pleines de sens",
    desc: "Sweats brodés avec surnom affectif ('Papa Poule', 'Maman en or'), tabliers de cuisine personnalisés et coussins brodés.",
    items: ["Sweats & hoodies brodés", "Tabliers de chef en famille", "Cadeaux de fin d'année"],
    imgUrl: "/images/realisations/sweat-capuche-rouge-brode-ours-muspelheim.webp"
  },
  {
    id: "mariage",
    icon: Heart,
    title: "Mariages & Couples",
    badge: "Ligne Romantique",
    tagline: "Marquez une date éternelle",
    desc: "Peignoirs d'amoureux brodés à leurs initiales, serviettes de cérémonie, mouchoirs d'émotion et tote bags de demoiselles d'honneur.",
    items: ["Peignoirs brodés couple", "Monogrammes & dates", "Coussins d'alliances"],
    imgUrl: "/images/realisations/drap-bain-personnalise-julian-logo-psg-broderie-sur-mesure-france.webp"
  },
  {
    id: "maison",
    icon: Home,
    title: "Linge de Maison & Bain",
    badge: "Éponge 550g/m²",
    tagline: "Le confort des grands hôtels chez soi",
    desc: "Draps de bain moelleux, serviettes d'invités raffinées et gants brodés avec typographie au choix, lavables à 60°C sans bouger.",
    items: ["Draps de douche XXL", "Serviettes invités", "Linge de table monogrammé"],
    imgUrl: "/images/realisations/serviette-brodee-audi-axel.webp"
  },
  {
    id: "accessoires",
    icon: ShoppingBag,
    title: "Maroquinerie & Accessoires",
    badge: "Atelier Mode",
    tagline: "Pratique, chic et unique",
    desc: "Trousses de toilette molletonnées, sacs week-end en toile épaisse, pochettes zippées et trousses d'école personnalisées.",
    items: ["Pochettes velours ou coton", "Tote bags résistants", "Cartables de rentrée"],
    imgUrl: "/images/realisations/sac-personnalise-brode-octavia.webp"
  }
];

const CUSTOM_OPTIONS = [
  { label: "Prénom ou Surnom", desc: "Dans la typographie de votre choix" },
  { label: "Date Symbolique", desc: "Naissance, mariage, souvenir marquant" },
  { label: "Message Délicat", desc: "Quelques mots pour faire chaud au cœur" },
  { label: "Motif & Silhouette", desc: "Petits cœurs, animaux, étoiles, etc." },
  { label: "Palette de Fils", desc: "Fils Madeira éclatants ou pastel doux" },
  { label: "Finition au Choix", desc: "Broderie discrète ou relief bien visible" }
];

export function ParticuliersPage() {
  const [selectedUniverse, setSelectedUniverse] = useState(0);

  return (
    <div className="bg-[#faf8f5] text-[#1c1917] selection:bg-primary selection:text-white pt-24 sm:pt-32">
      
      {/* 1. HERO PARTICULIERS LUXURY STUDIO */}
      <section className="relative px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28 border-b border-black/[0.06] overflow-hidden">
        
        {/* Subtle warm glow background */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:64px_64px]" />
          <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-rose-200/40 rounded-full blur-[140px]" />
          <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-amber-100/50 rounded-full blur-[130px]" />
        </div>

        <div className="max-w-7xl mx-auto">
          
          {/* Top Meta Status */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-12 border-b border-black/[0.08] text-[11px] font-mono tracking-widest uppercase text-stone-500">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-bold text-stone-800">Atelier Créatif Particuliers • Normandie (76)</span>
              <span className="text-stone-300">/</span>
              <span>Pièces Uniques & Sur-Mesure</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-stone-600">Délai moyen confection : ~5 à 7 jours</span>
              <span className="text-primary font-bold">Sans minimum de commande</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Narrative */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-900 text-white text-[9px] font-mono tracking-[0.25em] uppercase mb-6 shadow-sm">
                <Sparkles size={12} className="text-primary" />
                <span>Cadeaux Uniques & Éveil</span>
              </div>

              <h1 className="text-4xl sm:text-6xl xl:text-[4.25rem] font-black tracking-[-0.03em] leading-[1.02] text-stone-900 uppercase mb-6">
                Le prénom brodé, <br />
                <span className="font-serif italic font-normal normal-case text-primary underline decoration-primary/20 underline-offset-8">
                  un souvenir d'enfance
                </span> <br />
                qui reste.
              </h1>

              <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed mb-8 max-w-xl">
                Vous cherchez un cadeau qui touche vraiment le cœur ? De la couverture de naissance au peignoir personnalisé, nous donnons vie à vos attentions avec des fils doux, inusables et certifiés sans substances nocives.
              </p>

              {/* Guarantees Matrix */}
              <div className="grid grid-cols-3 gap-3 w-full mb-9 p-3 rounded-2xl bg-white border border-black/[0.08] shadow-sm">
                <div className="text-left px-2">
                  <span className="text-xs font-mono font-bold text-stone-900 block">Oeko-Tex 100</span>
                  <span className="text-[10px] text-stone-500">100% sûr pour bébé</span>
                </div>
                <div className="text-left px-2 border-x border-black/[0.06]">
                  <span className="text-xs font-mono font-bold text-stone-900 block">Lavage 60°C</span>
                  <span className="text-[10px] text-stone-500">Fils Madeira inaltérables</span>
                </div>
                <div className="text-left px-2">
                  <span className="text-xs font-mono font-bold text-stone-900 block">Fait en Normandie</span>
                  <span className="text-[10px] text-stone-500">Atelier à Robertot</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Link href="/devis?type=particulier" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="h-14 px-8 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-bold uppercase tracking-wider text-xs shadow-xl shadow-stone-900/10 flex items-center justify-center gap-3 w-full cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-primary" />
                    <span>Créer mon cadeau sur-mesure</span>
                    <ChevronRight size={14} />
                  </Button>
                </Link>

                <Link href="/boutique" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 px-7 rounded-full border-black/15 bg-white hover:bg-stone-900 hover:text-white transition-all font-bold uppercase tracking-wider text-xs w-full flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Voir les articles prêts à broder</span>
                  </Button>
                </Link>
              </div>

            </div>

            {/* Right Video / Live Workshop Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-stone-900 border border-stone-800 shadow-2xl group">
                <video
                  src="https://assets.mixkit.co/videos/preview/mixkit-sewing-machine-stitching-fabric-41718-large.mp4"
                  poster="/images/realisations/gilet-berger-bebe-reversible-moumoute-sherpa.webp"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/25 to-transparent pointer-events-none" />

                <div className="absolute top-5 left-5 z-10">
                  <span className="px-3 py-1.5 rounded-full bg-stone-950/80 backdrop-blur-md border border-white/20 text-white text-[9px] font-mono tracking-widest uppercase">
                    Machine en Action • Atelier Robertot
                  </span>
                </div>

                <div className="absolute inset-x-5 bottom-5 z-10 p-6 rounded-3xl bg-stone-900/90 border border-white/10 backdrop-blur-xl text-white">
                  <span className="text-[10px] font-mono text-primary uppercase tracking-widest block mb-1">
                    Gilet de Berger Réversible
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-white mb-2">
                    Sherpa Moelleux & Prénom Personnalisé
                  </h3>
                  <p className="text-stone-300 text-xs leading-relaxed">
                    Chaque point est calibré pour une tenue irréprochable et un contact tout doux avec la peau délicate de l'enfant.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* 2. UNIVERS DE CADEAUX (INTERACTIVE BENTO) */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-black/[0.06] bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary block mb-3">
                Inspirations & Occasions
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.03em] uppercase text-stone-900 leading-[1.05]">
                Des attentions qui <br />
                <span className="font-serif italic font-normal text-primary normal-case">marquent les esprits</span>.
              </h2>
            </div>
            <p className="text-stone-500 text-sm max-w-sm font-medium leading-relaxed">
              Une naissance, un anniversaire, des noces ou simplement le plaisir d'offrir : chaque occasion trouve sa pièce idéale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {GIFT_UNIVERSES.map((gift) => {
              const Icon = gift.icon;
              return (
                <div
                  key={gift.id}
                  className="rounded-[2.5rem] bg-[#faf8f5] border border-black/[0.06] hover:border-black/20 hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col justify-between group"
                >
                  <div className="relative h-56 overflow-hidden bg-stone-900">
                    <img
                      src={gift.imgUrl}
                      alt={gift.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 text-stone-900 text-[9px] font-mono tracking-widest uppercase font-bold shadow-xs">
                        {gift.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-5 right-5 text-white">
                      <span className="text-[10px] font-mono text-primary uppercase tracking-wider block">
                        {gift.tagline}
                      </span>
                      <h3 className="text-xl font-bold tracking-tight text-white">
                        {gift.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-7 flex flex-col justify-between flex-grow">
                    <p className="text-stone-600 text-sm leading-relaxed mb-6 font-normal">
                      {gift.desc}
                    </p>

                    <div className="pt-4 border-t border-black/[0.06]">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400 block mb-2 font-bold">
                        Exemples de créations :
                      </span>
                      <div className="space-y-1.5 mb-6">
                        {gift.items.map((it, idx) => (
                          <div key={idx} className="text-xs text-stone-800 flex items-center gap-2 font-medium">
                            <span className="text-primary font-bold">✦</span>
                            <span>{it}</span>
                          </div>
                        ))}
                      </div>

                      <Link href="/devis?type=particulier">
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full h-11 rounded-full text-xs font-bold uppercase tracking-wider border-black/10 hover:bg-stone-900 hover:text-white transition-all cursor-pointer"
                        >
                          Demander cette création
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Special request banner */}
          <div className="p-8 rounded-[2rem] bg-stone-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                <Camera size={22} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Vous avez une photo ou un croquis ?</h4>
                <p className="text-stone-400 text-xs mt-0.5">Envoyez-le directement sur WhatsApp : Sandrine vous confirme immédiatement la faisabilité.</p>
              </div>
            </div>
            <Link href="/devis?type=particulier" className="shrink-0">
              <Button className="h-12 px-7 rounded-full bg-primary hover:bg-primary/90 text-white font-bold uppercase text-xs tracking-wider cursor-pointer">
                Envoyer ma photo
              </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* 3. OPTIONS DE PERSONNALISATION & TEXTILES */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-black/[0.06] bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary block mb-3">
                Détails & Finitions Sur-Mesure
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.03em] uppercase text-stone-900 leading-[1.05] mb-6">
                Votre création, <br />
                <span className="font-serif italic font-normal text-primary normal-case">dans les moindres détails</span>.
              </h2>
              <p className="text-stone-600 text-base leading-relaxed mb-8 font-normal">
                Chaque pièce est confectionnée avec tendresse et minutie dans mon atelier. Vous choisissez chaque élément pour créer un objet qui vous ressemble ou qui marquera la personne qui le reçoit.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {CUSTOM_OPTIONS.map((opt, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-white border border-black/[0.06] shadow-xs flex flex-col justify-between"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle2 size={14} className="text-primary shrink-0" />
                      <span className="font-bold text-xs text-stone-900">{opt.label}</span>
                    </div>
                    <p className="text-[11px] text-stone-500 pl-5">{opt.desc}</p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-stone-100 border border-stone-200 text-xs text-stone-700 flex items-center gap-3">
                <ShieldCheck size={16} className="text-primary shrink-0" />
                <span>Validation conjointe du Bon À Tirer (BAT) avant toute piqûre définitive.</span>
              </div>
            </div>

            {/* Right Textile Solutions Card */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-[2.5rem] bg-white border border-black/[0.08] shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Scissors size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-stone-900">Deux possibilités pour vos textiles</h3>
                    <p className="text-stone-500 text-xs">Une flexibilité totale selon vos préférences</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-[#faf8f5] border border-black/[0.06]">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-base font-bold text-stone-900">Option 1 : Vous apportez votre propre textile</h4>
                      <span className="px-2.5 py-0.5 rounded bg-stone-200 text-[9px] font-mono uppercase">Économique</span>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Vous avez déjà acheté un doudou, une veste de marque ou un peignoir ? Déposez-le ou expédiez-le à l'atelier, Sandrine le brode directement.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#faf8f5] border border-black/[0.06]">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-base font-bold text-stone-900">Option 2 : Fourniture complète par l'atelier</h4>
                      <span className="px-2.5 py-0.5 rounded bg-primary/10 text-primary text-[9px] font-mono uppercase font-bold">Clé en main</span>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      Nous fournissons les matières premières de qualité supérieure : serviettes éponge denses 550g, gilets sherpa, bavoirs et trousses sélectionnées avec rigueur.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-black/[0.06] flex items-center justify-between">
                  <span className="text-xs text-stone-500 font-mono">Conseils personnalisés au devis</span>
                  <Link href="/devis?type=particulier" className="text-xs font-mono font-bold text-primary hover:underline uppercase tracking-wider">
                    Demander conseil →
                  </Link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. COMMENT SE PASSE LA COMMANDE PARTICULIER */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b border-black/[0.06] bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary block mb-3">
                Simple & Chaleureux
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.03em] uppercase text-stone-900 leading-[1.05]">
                Commander un cadeau, <br />
                <span className="font-serif italic font-normal text-primary normal-case">c'est aussi simple que cela</span>.
              </h2>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-stone-500">
              <Clock size={15} className="text-primary" />
              <span>Délai moyen constaté : ~5 à 7 jours</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { num: "01", title: "Votre Envie", desc: "Vous choisissez l'article et indiquez le prénom ou motif souhaité via notre formulaire." },
              { num: "02", title: "Échange Direct", desc: "WhatsApp s'ouvre : Sandrine vous confirme le prix exact et vous propose des polices d'écriture." },
              { num: "03", title: "Confection Soignée", desc: "Broderie artisanale sur nos machines industrielles avec contrôle méticuleux du fil." },
              { num: "04", title: "Réception Heureuse", desc: "Retrait à Robertot (76) ou livraison suivie à votre domicile dans un joli paquet." },
            ].map((step, sIdx) => (
              <div key={sIdx} className="p-8 rounded-[2rem] bg-[#faf8f5] border border-black/[0.06] flex flex-col justify-between min-h-[240px]">
                <span className="text-3xl font-black font-mono text-primary/30">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-lg font-black tracking-tight text-stone-900 mb-2">
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

      {/* 5. CALL TO ACTION FINAL PARTICULIER */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-stone-900 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[10px] font-mono tracking-widest uppercase mb-6">
            <Heart size={12} className="text-primary fill-primary/30" />
            <span>Un Cadeau Prêt à Faire Fondre les Cœurs</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
            Offrez une pièce unique <br />
            <span className="font-serif italic font-normal text-primary normal-case">qui ne s'oubliera jamais</span>.
          </h2>

          <p className="text-stone-300 text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Parlez-nous de votre projet en 2 minutes : Sandrine vous répond avec tendresse et professionnalisme.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-10">
            <Link href="/devis?type=particulier" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider text-xs shadow-xl shadow-primary/30 flex items-center justify-center gap-2 w-full cursor-pointer"
              >
                <MessageCircle size={16} />
                <span>Demander mon devis cadeau</span>
              </Button>
            </Link>

            <Link href="/boutique" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline-dark"
                className="h-14 px-8 uppercase tracking-wider text-xs w-full sm:w-auto cursor-pointer"
              >
                <span>Voir la boutique en ligne</span>
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-stone-400">
            <span>Robertot (76560)</span>
            <span>•</span>
            <span>Atelier Artisanal Normand</span>
            <span>•</span>
            <span>Expéditions Soignées Partout en France</span>
          </div>

        </div>
      </section>

    </div>
  );
}
