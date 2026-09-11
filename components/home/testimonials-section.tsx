"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Quote, 
  Sparkles, 
  ArrowUpRight,
  ShieldCheck
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { LUXURY_EASE, MotionReveal } from "@/components/effects/motion-reveal";

interface Testimonial {
  id: string;
  num: string;
  category: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  date: string;
  tag: string;
  features: string[];
  imgUrl: string;
  ctaText?: string;
  ctaLink?: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "ophelie",
    num: "(01)",
    category: "PIÈCES NAISSANCE",
    name: "Ophélie Cavelier",
    role: "Création Particulier",
    text: "J’ai eu la chance de faire réaliser deux broderies personnalisées chez Sandrine, et je ne peux que la recommander ! Elle a su comprendre exactement ce que j’avais en tête et le résultat est tout simplement magnifique. Elle travaille avec beaucoup de soin et de rapidité.",
    rating: 5,
    date: "Avis vérifié Google",
    tag: "Gilet & Naissance",
    features: ["Broderie Prénom •", "Tissus Oeko-Tex •", "Finition Haute Précision"],
    imgUrl: "/images/realisations/gilet-berger-bebe-reversible-moumoute-sherpa.webp",
    ctaText: "Découvrir les Naissances",
    ctaLink: "/boutique"
  },
  {
    id: "arthur",
    num: "(02)",
    category: "SÉRIE TEXTILE PRO",
    name: "Arthur Lbs",
    role: "Client Pro & Équipe",
    text: "Qualité de broderie au top. Travail de précision soigné et réactivité exemplaire. Sandrine a su répondre parfaitement à mes attentes avec des finitions impeccables sur nos textiles.",
    rating: 5,
    date: "Avis vérifié Google",
    tag: "Sweat Club Muspelheim",
    features: ["Tenue 60°C •", "54 200 Points Relief •", "Fils Madeira Polyneon"],
    imgUrl: "/images/realisations/sweat-capuche-rouge-brode-ours-muspelheim.webp",
    ctaText: "Devis Équipe & Pro",
    ctaLink: "/devis"
  },
  {
    id: "chloe",
    num: "(03)",
    category: "CARTABLE BRODÉ",
    name: "Chloé Larchevesque",
    role: "Maman",
    text: "Je suis très contente pour la création du premier cartable de ma fille pour sa rentrée scolaire. Les détails sont magnifiques, j'adore le travail réalisé avec passion. Encore un immense merci !",
    rating: 5,
    date: "Avis vérifié Google",
    tag: "Rentrée Maternelle",
    features: ["Sac Résistant •", "Motifs Personnalisés •", "Cousu d'Amour"],
    imgUrl: "/images/realisations/sac-personnalise-brode-octavia.webp",
    ctaText: "Voir les Cartables",
    ctaLink: "/boutique"
  },
  {
    id: "nadege",
    num: "(04)",
    category: "GIGOTEUSE BÉBÉ",
    name: "Nadège Lobjois",
    role: "Cliente",
    text: "Très satisfaite de la gigoteuse faite par Sandrine pour ma petite fille. Je recommande à 100% ! Merci encore pour la rapidité d'exécution et la qualité irréprochable des finitions.",
    rating: 5,
    date: "Avis vérifié Google",
    tag: "Cocon de Nuit",
    features: ["Fibre Bambou •", "Fermeture Sécurisée •", "Broderie Délicate"],
    imgUrl: "/images/realisations/gigoteuse-bebe-bambou-animaux-foret-detail-fermeture.webp",
    ctaText: "Commander une Gigoteuse",
    ctaLink: "/boutique"
  },
  {
    id: "kehlani",
    num: "(05)",
    category: "CARNET DE SANTÉ & LINGE",
    name: "Kehlani Lauthner",
    role: "Local Guide Google",
    text: "Je recommande vivement, j’ai commandé à plusieurs reprises : serviettes d'invités brodées, carnet de santé personnalisé pour une naissance. Un travail d'une grande finesse et envoi très rapide.",
    rating: 5,
    date: "Avis vérifié Google",
    tag: "Commandes Multiples",
    features: ["Protège Carnet •", "Éponge Moelleuse •", "Expédition Express"],
    imgUrl: "/images/realisations/protege-carnet-sante-vert-brode.webp",
    ctaText: "Découvrir les Accessoires",
    ctaLink: "/boutique"
  },
  {
    id: "angelique",
    num: "(06)",
    category: "FIDÉLITÉ ATELIER",
    name: "Angélique Justin",
    role: "Cliente Fidèle",
    text: "Atelier de broderie d'une grande qualité et accueil chaleureux. Sandrine est à l'écoute des besoins et propose un travail méticuleux et rapide. Vous pouvez y aller les yeux fermés !",
    rating: 5,
    date: "Avis vérifié Google",
    tag: "Accueil Atelier Robertot",
    features: ["Écoute Active •", "Conseil Matière •", "Satisfaction 100%"],
    imgUrl: "/images/realisations/drap-bain-personnalise-julian-logo-psg-broderie-sur-mesure-france.webp",
    ctaText: "Prendre Contact",
    ctaLink: "/contact"
  }
];

export function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeTestimonial = TESTIMONIALS[activeIdx];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 sm:py-32 px-3.5 sm:px-6 lg:px-8 bg-[#faf8f5] border-b border-stone-200/70 relative w-full max-w-full overflow-hidden">
      
      {/* Background Decorative Ambient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary/4 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <MotionReveal direction="up" distance={24} duration={0.65} className="max-w-2xl">
            {/* Framer Style Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 shadow-2xs text-[10px] font-black uppercase tracking-widest text-stone-800 mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Témoignages • Avis Vérifiés</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.03em] uppercase text-stone-950 leading-[1.05]">
              La confiance brodée <br />
              <span className="font-serif italic font-normal text-primary normal-case">point par point</span>.
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-3 max-w-xl font-normal leading-relaxed">
              Découvrez les retours authentiques de particuliers, mamans et professionnels ayant confié leurs plus belles créations à l'atelier normand.
            </p>
          </MotionReveal>

          {/* Google 5.0 / 5 Card */}
          <MotionReveal direction="up" distance={20} delay={150} duration={0.65}>
            <div className="flex items-center gap-4 bg-white px-5 py-3.5 rounded-2xl border border-stone-200/90 shadow-xs">
              <div className="flex gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <div className="h-5 w-px bg-stone-200" />
              <div>
                <div className="text-xs font-black text-stone-950 flex items-center gap-1.5 font-mono">
                  5.0 / 5.0 <CheckCircle2 size={13} className="text-emerald-600" />
                </div>
                <div className="text-[10px] text-stone-500 font-medium">Avis vérifiés Google</div>
              </div>
            </div>
          </MotionReveal>
        </div>

        {/* Framer Style Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: Grand Spotlight Testimonial Card (col-span-7) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative rounded-[2.5rem] bg-stone-950 text-white overflow-hidden border border-stone-800 shadow-2xl flex flex-col justify-between min-h-[580px] sm:min-h-[640px]">
              
              {/* Background Real Realisation Image with Smooth Transition */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.55, ease: LUXURY_EASE }}
                  className="absolute inset-0 z-0 pointer-events-none"
                >
                  <img
                    src={activeTestimonial.imgUrl}
                    alt={activeTestimonial.name}
                    className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-950/30" />
                </motion.div>
              </AnimatePresence>

              {/* Top Meta Bar */}
              <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-md border border-white/15 text-[10px] font-mono uppercase tracking-widest text-white font-bold">
                    {activeTestimonial.num} {activeTestimonial.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-primary/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-white">
                    {activeTestimonial.tag}
                  </span>
                </div>

                {/* Navigation Arrows */}
                <div className="flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    onClick={handlePrev}
                    aria-label="Témoignage précédent"
                    className="w-10 h-10 rounded-xl bg-stone-900/80 hover:bg-white hover:text-stone-950 text-white backdrop-blur-md border border-white/15 flex items-center justify-center transition-colors cursor-pointer shadow-lg"
                  >
                    <ChevronLeft size={18} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    onClick={handleNext}
                    aria-label="Témoignage suivant"
                    className="w-10 h-10 rounded-xl bg-stone-900/80 hover:bg-white hover:text-stone-950 text-white backdrop-blur-md border border-white/15 flex items-center justify-center transition-colors cursor-pointer shadow-lg"
                  >
                    <ChevronRight size={18} />
                  </motion.button>
                </div>
              </div>

              {/* Bottom Floating Review Card */}
              <div className="relative z-10 p-4 sm:p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial.id}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.45, ease: LUXURY_EASE }}
                    className="rounded-[2rem] bg-stone-950/85 backdrop-blur-xl border border-white/15 p-6 sm:p-8 shadow-2xl"
                  >
                    {/* Stars + Quote Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-1 text-amber-400">
                        {[...Array(activeTestimonial.rating)].map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" />
                        ))}
                      </div>
                      <Quote size={24} className="text-primary/70 shrink-0" />
                    </div>

                    {/* Quote text */}
                    <p className="font-serif italic text-base sm:text-xl text-stone-100 leading-relaxed mb-6 font-normal">
                      "{activeTestimonial.text}"
                    </p>

                    {/* Features list */}
                    <div className="flex flex-wrap items-center gap-2 mb-6 pb-6 border-b border-white/10">
                      {activeTestimonial.features.map((feat, fIdx) => (
                        <span key={fIdx} className="text-[11px] font-mono font-medium text-stone-300">
                          {feat}
                        </span>
                      ))}
                    </div>

                    {/* Author + CTA */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h4 className="text-base font-black text-white leading-tight">
                          {activeTestimonial.name}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-stone-400 font-medium">
                            {activeTestimonial.role}
                          </span>
                          <span className="text-stone-600">•</span>
                          <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1 font-bold">
                            <CheckCircle2 size={12} /> {activeTestimonial.date}
                          </span>
                        </div>
                      </div>

                      {activeTestimonial.ctaText && activeTestimonial.ctaLink && (
                        <Link href={activeTestimonial.ctaLink}>
                          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                            <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary hover:bg-primary/90 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-md">
                              <span>{activeTestimonial.ctaText}</span>
                              <ArrowUpRight size={14} />
                            </span>
                          </motion.div>
                        </Link>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>

          {/* RIGHT: Framer Program Cards Stack (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3">
            {TESTIMONIALS.map((item, idx) => {
              const isActive = activeIdx === idx;

              return (
                <motion.div
                  key={item.id}
                  onClick={() => setActiveIdx(idx)}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.25, ease: LUXURY_EASE }}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden ${
                    isActive
                      ? "bg-white border-primary shadow-lg ring-1 ring-primary/20"
                      : "bg-white/70 hover:bg-white border-stone-200/80 hover:border-stone-300 shadow-2xs"
                  }`}
                >
                  {/* Left Active Accent Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="active-testimonial-indicator"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}

                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-stone-400">
                        {item.num}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold">
                        {item.category}
                      </span>
                    </div>
                    <div className="flex gap-0.5 text-amber-500">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={11} fill="currentColor" />
                      ))}
                    </div>
                  </div>

                  <h4 className="text-sm font-black text-stone-900 tracking-tight">
                    {item.name}{" "}
                    <span className="text-[11px] font-normal text-stone-500">
                      ({item.role})
                    </span>
                  </h4>

                  <p className="text-stone-600 text-xs line-clamp-2 mt-1 italic font-normal leading-relaxed">
                    "{item.text}"
                  </p>

                  <div className="mt-2.5 flex items-center justify-between text-[10px] font-mono text-stone-400">
                    <span>{item.features[0]} {item.features[1]}</span>
                    <span className={`font-bold ${isActive ? "text-primary" : "text-stone-400"}`}>
                      {isActive ? "En vue" : "Afficher →"}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Bottom Trust & Google Review CTA */}
        <MotionReveal
          direction="up"
          distance={20}
          delay={200}
          duration={0.65}
          className="mt-12 p-6 sm:p-8 rounded-[2rem] bg-white border border-stone-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <div className="text-sm font-black text-stone-950 uppercase tracking-wide">
                Satisfaction 100% Garantie & Fait Main en Normandie
              </div>
              <p className="text-xs text-stone-500 mt-0.5">
                Chaque pièce est méticuleusement échenillée, inspectée et repassée avant expédition.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="https://g.page/r/Cb4qV9eO803ZEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-stone-300 hover:border-stone-900 bg-stone-50 hover:bg-stone-900 hover:text-white text-stone-800 text-xs font-bold uppercase tracking-wider transition-all"
            >
              <span>Voir tous nos avis Google</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </MotionReveal>

      </div>

    </section>
  );
}
