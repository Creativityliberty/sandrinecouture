"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Scissors,
  Ruler,
  Truck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  Clock,
  ChevronRight,
  Plus,
  ShoppingBag,
  HelpCircle,
  BadgePercent,
  Layers,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";

interface HemService {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  badge: string;
  price: number;
  spec: string;
  desc: string;
  finishing: string;
  idealFor: string[];
  imgUrl: string;
}

const HEM_SERVICES: HemService[] = [
  {
    id: 112,
    slug: "retouche-ourlet-simple",
    title: "L'Essentiel — Ourlet Simple & Jean",
    subtitle: "Pantalons droits, jeans, chinos & cotons",
    badge: "Indispensable Quotidien",
    price: 12.0,
    spec: "Surpiqûre simple ou fil épais contrasté",
    desc: "Ajustement de longueur au millimètre avec surpiqûre ton sur ton ou conservation du style jean d'origine (fil couleur tabac ou or).",
    finishing: "Surjet protecteur intérieur + surpiqûre robuste au fil polyester haute ténacité.",
    idealFor: ["Jeans homme & femme", "Pantalons chinos", "Pantalons en toile & velours"],
    imgUrl: "/images/hero/hero-particuliers-atelier.webp",
  },
  {
    id: 113,
    slug: "retouche-ourlet-invisible",
    title: "Le Tailleur — Point Invisible Haute Tenue",
    subtitle: "Costumes, tailleurs, lainages & crêpe",
    badge: "Finition Maître Tailleur",
    price: 18.0,
    spec: "Point glissé invisible main ou machine artisanale",
    desc: "La finition noble par excellence. Aucun point n'apparaît sur l'endroit du tissu pour préserver la ligne et la pureté de vos tenues habillées.",
    finishing: "Point souple thermo-fixé et couture invisible pour un tombé parfait sur la chaussure.",
    idealFor: ["Pantalons de costume homme", "Pantalons tailleur femme", "Pantalons en laine fine ou crêpe"],
    imgUrl: "/images/hero/hero-particuliers-prop3-atelier-artisan.webp",
  },
  {
    id: 114,
    slug: "retouche-ourlet-jupe-robe",
    title: "Le Vestiaire Féminin — Robes & Jupes",
    subtitle: "Coupes droites, trapèzes & lins fins",
    badge: "Ligne Féminine",
    price: 18.0,
    spec: "Ourlet classique, roulotté ou double rentré",
    desc: "Redéfinissez la longueur de vos jupes et robes favorites pour épouser harmonieusement votre silhouette et vos talons.",
    finishing: "Finition soignée adaptée à l'élasticité et à la fluidité de la matière.",
    idealFor: ["Jupes droites & trapèzes", "Robes d'été & de cérémonie", "Tissus lin, popeline ou viscose"],
    imgUrl: "/images/realisations/gilet-berger-bebe-reversible-moumoute-sherpa.webp",
  }
];

const STEPS = [
  {
    step: "01",
    icon: Ruler,
    title: "Marquez votre repère",
    desc: "Enfilez votre pantalon avec vos chaussures habituelles. Repliez le tissu vers l'intérieur et fixez une simple épingle à nourrice sur l'une des jambes. Vous pouvez aussi simplement glisser un pantalon à la longueur parfaite dans votre colis.",
    tip: "Astuce : Une seule jambe épinglée suffit !"
  },
  {
    step: "02",
    icon: Truck,
    title: "Commandez & Expédiez",
    desc: "Validez votre prestation en ligne. Glissez votre vêtement propre dans une enveloppe bulle ou un carton léger, puis déposez-le au point Mondial Relay ou Colissimo le plus proche (ou directement à l'atelier à Robertot).",
    tip: "Frais de retour pré-calculés et transparents"
  },
  {
    step: "03",
    icon: Scissors,
    title: "Façonnage & Retour Soigné",
    desc: "Nous coupons, surjetons et piquons votre ourlet avec le fil exact assorti à la matière. Votre vêtement repassé et impeccable vous est réexpédié sous 7 à 10 jours ouvrés.",
    tip: "Contrôle qualité & tombé garanti"
  }
];

const FAQS = [
  {
    q: "Comment puis-je être sûr(e) de ne pas me tromper dans la mesure ?",
    a: "Deux méthodes très simples : soit vous mettez une épingle à nourrice sur l'un des côtés du pantalon en vous regardant dans une glace avec vos chaussures habituelles ; soit vous glissez dans le colis un autre pantalon de votre garde-robe dont la longueur vous convient parfaitement comme modèle."
  },
  {
    q: "Puis-je déposer directement mes vêtements à l'atelier en Normandie ?",
    a: "Absolument ! Si vous êtes situé(e) près de Robertot, Yvetot, Doudeville ou Cany-Barville (76), vous pouvez choisir l'option 'Retrait / Dépôt Atelier' lors de la commande et passer déposer vos pièces sur rendez-vous."
  },
  {
    q: "Conservez-vous la couleur d'origine du fil (notamment sur les jeans) ?",
    a: "Oui, nous disposons d'une large palette de fils de coutellerie et tailleur (Madeira & Gütermann), incluant les fils spécifiques couleur or/tabac pour préserver le style originel des jeans et toiles denim."
  },
  {
    q: "Faites-vous les ourlets de rideaux ou de robes de mariée ?",
    a: "Oui, ces prestations particulières nécessitent une étude sur mesure en fonction de l'ampleur et de la délicatesse des étoffes. Contactez-nous directement via notre formulaire de devis ou sur WhatsApp pour recevoir une estimation rapide sous 24h."
  }
];

export function OurletsServicePage() {
  const { addToCart, setIsCartOpen } = useCart();
  const [selectedService, setSelectedService] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [addedId, setAddedId] = useState<number | null>(null);

  const handleAddToCart = (service: HemService) => {
    addToCart({
      productId: service.id,
      title: service.title,
      price: service.price,
      quantity: 1,
      imgUrl: service.imgUrl,
      category: "Retouches",
      variantName: service.spec,
    });
    setAddedId(service.id);
    setIsCartOpen(true);
    setTimeout(() => setAddedId(null), 2000);
  };

  return (
    <div className="bg-[#faf8f5] text-[#1c1917] selection:bg-primary selection:text-white pt-24 sm:pt-32">
      
      {/* 1. HERO QUIET LUXURY STUDIO */}
      <section className="relative w-full max-w-full pt-8 sm:pt-12 pb-16 sm:pb-28 lg:pb-32 overflow-hidden bg-stone-950 text-white selection:bg-primary selection:text-white border-b border-white/10">
        
        {/* Background Photo for Desktop (>= sm) */}
        <div className="hidden sm:block absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <Image 
            src="/images/hero/hero-particuliers-prop3-atelier-artisan.webp" 
            alt="Atelier de retouches et couture de précision By Sandrine Couture en Normandie"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter brightness-[0.70] contrast-[1.08] saturate-[0.95]"
          />
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/75 to-transparent z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-stone-950/50 z-[1]" />
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top Atelier Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 sm:pb-6 mb-8 sm:mb-12 border-b border-white/15 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-bold text-stone-300 font-mono">
            <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
              <span className="flex h-2.5 w-2.5 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-white font-black tracking-wider">Atelier de Retouches & Mise à Mesure • Robertot (76)</span>
              <span className="text-stone-400 hidden sm:inline">/</span>
              <span className="hidden sm:inline text-stone-300">Normandie & Expédition France</span>
            </div>

            <div className="flex items-center gap-4 text-[10px] font-bold text-stone-300">
              <span className="flex items-center gap-1.5">
                <Scissors size={13} className="text-primary-light shrink-0" /> Précision Artisanale au Millimètre
              </span>
              <span className="text-primary-light font-bold">
                Délais 7-10j
              </span>
            </div>
          </div>

          {/* Dedicated Mobile Photo Showcase */}
          <div className="sm:hidden w-full mb-8 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-stone-900">
            <Image 
              src="/images/hero/hero-particuliers-prop3-atelier-artisan.webp" 
              alt="Atelier couture et retouches Sandrine Couture"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-bold text-white uppercase tracking-wider bg-stone-950/70 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/15">
              <span className="flex items-center gap-1.5">
                <Sparkles size={11} className="text-primary-light" /> Service Retouches & Ourlets
              </span>
              <span className="text-stone-300 font-mono text-[9px]">Robertot (76)</span>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="max-w-2xl flex flex-col items-start">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900/90 border border-white/20 text-white text-[9px] sm:text-[10px] font-bold tracking-[0.22em] uppercase mb-4 sm:mb-6 backdrop-blur-md shadow-lg font-mono">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Savoir-Faire Tailleur • Tombé Parfait</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-[-0.03em] leading-[1.05] text-white uppercase mb-4 sm:mb-6 drop-shadow-lg">
              Un tombé impeccable, <br />
              <span className="font-serif italic font-normal normal-case text-primary-light underline decoration-primary/40 underline-offset-8 inline-block">
                ajusté à votre silhouette
              </span> <br />
              avec l'exigence d'un atelier.
            </h1>

            {/* Copy */}
            <p className="text-sm sm:text-base lg:text-lg text-stone-200 font-normal leading-relaxed mb-8 max-w-xl drop-shadow-md">
              Prolongez la vie de vos vêtements préférés et offrez-leur un ajustement sur mesure. Jeans, pantalons de costume ou robes de soirée : nous réalisons vos ourlets avec des points invisibles ou des surpiqûres conformes aux finitions d'origine.
            </p>

            {/* Guarantees Matrix */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full mb-8 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-md text-white">
              <div className="text-left px-2">
                <span className="text-xs font-mono font-bold text-white block">Point Invisible</span>
                <span className="text-[10px] text-stone-300">Finition tailleur</span>
              </div>
              <div className="text-left px-2 border-x border-white/15">
                <span className="text-xs font-mono font-bold text-white block">Fils Haute Tenue</span>
                <span className="text-[10px] text-stone-300">Coloris d'origine</span>
              </div>
              <div className="text-left px-2">
                <span className="text-xs font-mono font-bold text-white block">Envoi ou Dépôt</span>
                <span className="text-[10px] text-stone-300">Mondial Relay & 76</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a href="#prestations" className="w-full sm:w-auto no-underline">
                <Button
                  size="lg"
                  className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider text-xs shadow-xl shadow-primary/25 flex items-center justify-center gap-3 w-full cursor-pointer"
                >
                  <Scissors className="w-4 h-4 text-white" />
                  <span>Choisir ma prestation dès 12 €</span>
                  <ChevronRight size={14} />
                </Button>
              </a>

              <a href="#comment-ca-marche" className="w-full sm:w-auto no-underline">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-7 rounded-full border-white/20 bg-stone-900/80 text-white hover:bg-white hover:text-stone-950 transition-all font-bold uppercase tracking-wider text-xs w-full flex items-center justify-center gap-2 cursor-pointer backdrop-blur-md"
                >
                  <span>Comment prendre la mesure ?</span>
                </Button>
              </a>
            </div>

          </div>

        </div>

      </section>

      {/* 2. COMMENT ÇA MARCHE (LE PROCESSUS EN 3 ÉTAPES) */}
      <section id="comment-ca-marche" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary block mb-3">
                Protocole de Précision à Distance
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.03em] uppercase text-stone-900 leading-[1.05]">
                La retouche sans vous déplacer, <br />
                <span className="font-serif italic font-normal text-primary normal-case">en 3 étapes limpides</span>.
              </h2>
            </div>
            <p className="text-stone-500 text-sm max-w-sm font-medium leading-relaxed">
              Pas besoin de rendez-vous contraignant : épinglez votre vêtement chez vous en 2 minutes ou fournissez votre modèle témoin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div 
                  key={idx}
                  className="relative p-8 rounded-3xl bg-[#faf8f5] border border-stone-200/80 hover:border-primary/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-white border border-stone-200 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
                        <Icon size={24} strokeWidth={1.5} />
                      </div>
                      <span className="text-3xl font-black font-mono text-stone-300 group-hover:text-primary/40 transition-colors">
                        {s.step}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-stone-900 uppercase tracking-tight mb-3">
                      {s.title}
                    </h3>
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {s.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-200/60 flex items-center gap-2 text-[11px] font-mono font-semibold text-primary">
                    <Sparkles size={13} className="shrink-0" />
                    <span>{s.tip}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. PRESTATIONS & TARIFS (BENTO CARDS INTERACTIVE) */}
      <section id="prestations" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#faf8f5] border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary block mb-3">
              Tarification Transparente & Immédiate
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.03em] uppercase text-stone-900 leading-[1.05] mb-4">
              La Carte des <span className="font-serif italic font-normal text-primary normal-case">Prestations & Finitions</span>
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              Sélectionnez vos retouches, ajoutez-les directement à votre panier et recevez vos instructions de dépôt ou d'expédition immédiatement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {HEM_SERVICES.map((service, index) => {
              const isSelected = selectedService === index;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(index)}
                  className={`rounded-3xl border bg-white p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer relative overflow-hidden ${
                    isSelected
                      ? "border-primary ring-2 ring-primary/20 shadow-primary/10"
                      : "border-stone-200/80 hover:border-stone-300"
                  }`}
                >
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-stone-100 text-stone-800 border border-stone-200">
                      {service.badge}
                    </span>
                    <span className="text-2xl font-black text-stone-950 font-mono">
                      {service.price.toFixed(2)} €
                    </span>
                  </div>

                  {/* Body Info */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-stone-900 uppercase tracking-tight mb-1">
                      {service.title}
                    </h3>
                    <p className="text-xs text-primary font-mono mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-5">
                      {service.desc}
                    </p>

                    <div className="space-y-2 mb-6">
                      <div className="text-[11px] font-mono text-stone-500 uppercase tracking-wider font-semibold">
                        Recommandé pour :
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {service.idealFor.map((item, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 text-[11px] text-stone-700 bg-stone-50 px-2.5 py-1 rounded-lg border border-stone-200"
                          >
                            <CheckCircle2 size={11} className="text-emerald-600" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200/70 text-[11px] text-stone-600 leading-relaxed font-sans">
                      <span className="font-bold text-stone-900 block mb-0.5 font-mono text-[10px] uppercase tracking-wider">
                        Finition Atelier :
                      </span>
                      {service.finishing}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-stone-100 flex flex-col gap-2.5">
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(service);
                      }}
                      className={`w-full h-12 rounded-full uppercase tracking-wider text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                        addedId === service.id
                          ? "bg-emerald-600 text-white hover:bg-emerald-700"
                          : "bg-primary hover:bg-primary/90 text-white shadow-primary/20"
                      }`}
                    >
                      {addedId === service.id ? (
                        <>
                          <CheckCircle2 size={15} />
                          <span>Ajouté au panier !</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag size={15} />
                          <span>Ajouter au Panier ({service.price.toFixed(2)} €)</span>
                        </>
                      )}
                    </Button>

                    <Link
                      href={`/boutique/${service.slug}`}
                      className="text-center text-[11px] font-mono text-stone-500 hover:text-primary transition-colors py-1 no-underline"
                    >
                      Voir la fiche détaillée & guide d'envoi →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sur-Mesure Banner */}
          <div className="mt-12 p-8 rounded-3xl bg-stone-900 text-white border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="max-w-xl text-center md:text-left">
              <span className="text-[10px] font-mono text-primary-light uppercase tracking-widest block mb-2 font-bold">
                Besoin d'un travail particulier ?
              </span>
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight mb-2 text-white">
                Rideaux, doublures complexes ou robes de cocktail
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Pour les étoffes d'ameublement ou les pièces haute couture à plusieurs volants, nous établissons un devis personnalisé sous 24h.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
              <Link href="/devis" className="w-full sm:w-auto no-underline">
                <Button
                  size="lg"
                  className="h-12 px-6 rounded-full bg-white hover:bg-stone-100 text-stone-950 font-bold uppercase tracking-wider text-xs w-full flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Demander un Devis Gratuit</span>
                  <ArrowRight size={14} />
                </Button>
              </Link>
              
              <a
                href="https://wa.me/33624021287?text=Bonjour%20Sandrine,%20j'ai%20une%20demande%20de%20retouche%20spécifique"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto no-underline"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-6 rounded-full border-white/20 bg-stone-800 text-white hover:bg-stone-700 font-bold uppercase tracking-wider text-xs w-full flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle size={14} className="text-emerald-400" />
                  <span>WhatsApp Atelier</span>
                </Button>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 4. REASSURANCE & SAVOIR-FAIRE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          
          <div className="flex flex-col items-start p-4">
            <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-primary mb-3">
              <Scissors size={20} />
            </div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-900 mb-1">
              Fils de Haute Tenue
            </h4>
            <p className="text-[11px] sm:text-xs text-stone-500 leading-relaxed">
              Résistance aux lavages répétés sans effilochage.
            </p>
          </div>

          <div className="flex flex-col items-start p-4">
            <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-primary mb-3">
              <ShieldCheck size={20} />
            </div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-900 mb-1">
              Garantie Tombé Parfait
            </h4>
            <p className="text-[11px] sm:text-xs text-stone-500 leading-relaxed">
              Contrôle minutieux de l'alignement et de la symétrie.
            </p>
          </div>

          <div className="flex flex-col items-start p-4">
            <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-primary mb-3">
              <Truck size={20} />
            </div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-900 mb-1">
              Expédition Partout en France
            </h4>
            <p className="text-[11px] sm:text-xs text-stone-500 leading-relaxed">
              Colissimo & Mondial Relay avec suivi sécurisé.
            </p>
          </div>

          <div className="flex flex-col items-start p-4">
            <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-primary mb-3">
              <Clock size={20} />
            </div>
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-900 mb-1">
              Délai 7 à 10 Jours
            </h4>
            <p className="text-[11px] sm:text-xs text-stone-500 leading-relaxed">
              Traitement rapide et soigné dès réception à l'atelier.
            </p>
          </div>

        </div>
      </section>

      {/* 5. FAQ INTERACTIVE */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-primary block mb-3">
              Réponses Claires
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-[-0.03em] uppercase text-stone-900 leading-[1.05] mb-4">
              Questions Fréquentes sur les <span className="font-serif italic font-normal text-primary normal-case">Retouches</span>
            </h2>
            <p className="text-stone-600 text-sm">
              Tout ce que vous devez savoir pour nous confier vos vêtements en toute sérénité.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-stone-200 bg-white overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="text-sm font-bold text-stone-900 uppercase tracking-tight">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-stone-400 transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-4 bg-stone-50/50 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. CALL TO ACTION FINAL */}
      <section className="py-20 px-4 bg-stone-950 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mx-auto mb-6 bg-white/5">
            <Scissors className="text-white" size={20} />
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight mb-4 text-white">
            Prêt(e) à redonner une coupe parfaite à vos vêtements ?
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 max-w-xl mx-auto mb-8 font-mono uppercase tracking-wider">
            Rejoignez nos clients partout en France et bénéficiez du savoir-faire d'un atelier artisanal normand.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#prestations" className="no-underline w-full sm:w-auto">
              <Button
                size="lg"
                className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider text-xs shadow-xl shadow-primary/25 cursor-pointer w-full"
              >
                <span>Commander un Ourlet en Ligne</span>
                <ChevronRight size={14} />
              </Button>
            </a>
            
            <Link href="/contact" className="no-underline w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 rounded-full border-white/20 bg-white/5 text-white hover:bg-white hover:text-stone-950 font-bold uppercase tracking-wider text-xs cursor-pointer w-full"
              >
                <span>Poser une question à l'Atelier</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
