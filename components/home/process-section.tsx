"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageCircle, FileCheck, Cpu, PackageCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { StaggerContainer, StaggerItem, MotionReveal, LUXURY_EASE } from "@/components/effects/motion-reveal";

const STEPS = [
  {
    num: "01",
    phase: "Échange & Besoins",
    title: "Brief & Formulaire Devis",
    desc: "Vous indiquez le type de support (sweats, gilets, tabliers, doudous) et envoyez votre visuel ou texte souhaité.",
    action: "Formulaire en 2 min",
    icon: MessageCircle
  },
  {
    num: "02",
    phase: "Pré-production",
    title: "Numérisation & Piquage",
    desc: "Je programme votre matrice de broderie point par point : calcul des densités, renforts et sélection des nuances de fils Madeira.",
    action: "Matrice haute définition",
    icon: Cpu
  },
  {
    num: "03",
    phase: "Validation",
    title: "Bon À Tirer (BAT)",
    desc: "Vous recevez la simulation visuelle ou une broderie test pour validation avant le lancement officiel.",
    action: "Validation 100% sereine",
    icon: FileCheck
  },
  {
    num: "04",
    phase: "Confection & Envoi",
    title: "Broderie & Expédition",
    desc: "Lancement machine, échenillage et finitions manuelles soignées. Retrait à Robertot ou envoi suivi en France.",
    action: "Sous ~7 à 10 jours",
    icon: PackageCheck
  }
];

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 sm:py-32 px-3.5 sm:px-6 lg:px-8 bg-stone-900 text-white relative w-full max-w-full overflow-hidden">
      
      {/* Subtle Blueprint Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <MotionReveal direction="up" distance={24} duration={0.65}>
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-primary block mb-3">
              Processus Maîtrisé de A à Z
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.03em] uppercase text-white leading-[1.05]">
              De l'idée à la matière, <br />
              <span className="font-serif italic font-normal text-primary normal-case">en quatre étapes</span> limpides.
            </h2>
          </MotionReveal>
          <MotionReveal direction="up" distance={20} delay={150} duration={0.65}>
            <p className="text-stone-400 text-sm max-w-md font-medium leading-relaxed">
              Pas de jargon compliqué, ni de mauvaises surprises. Je vous guide personnellement à chaque étape pour un résultat parfaitement fidèle à vos attentes.
            </p>
          </MotionReveal>
        </div>

        {/* Timeline Interactive Cards with Stagger */}
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isCurrent = activeStep === idx;

            return (
              <StaggerItem key={step.num}>
                <motion.div
                  onClick={() => setActiveStep(idx)}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: LUXURY_EASE }}
                  className={`p-8 rounded-[2rem] border transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[320px] ${
                    isCurrent
                      ? "bg-stone-800 border-primary shadow-2xl"
                      : "bg-stone-950/60 border-stone-800/80 hover:border-stone-700"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-black font-mono text-stone-600">
                        {step.num}
                      </span>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isCurrent ? "bg-primary text-white" : "bg-stone-800 text-stone-400"
                      }`}>
                        <Icon size={18} />
                      </div>
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-widest text-primary block mb-1">
                      {step.phase}
                    </span>
                    <h3 className="text-xl font-black tracking-tight text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-stone-400 text-xs leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-800 flex items-center justify-between text-[10px] font-mono text-stone-300">
                    <span>{step.action}</span>
                    <span className="text-primary font-bold">✓</span>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Production Timeframes Banner */}
        <MotionReveal
          direction="up"
          distance={28}
          duration={0.7}
          className="p-8 sm:p-10 rounded-[2.5rem] bg-stone-950 border border-stone-800 flex flex-col lg:flex-row lg:items-center justify-between gap-8"
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary shrink-0">
              <Clock size={26} />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-primary block">
                Transparence Délais
              </span>
              <h3 className="text-xl font-bold text-white mt-0.5">
                Capacité d'atelier & Délais de confection
              </h3>
              <p className="text-stone-400 text-xs mt-1">
                La broderie industrielle exige un temps de séchage et de contrôle qualité rigoureux.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-10">
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white font-mono">~5 à 7 jours</span>
              <span className="text-[10px] uppercase tracking-wider text-primary font-bold">Pièces Uniques & Particuliers</span>
            </div>
            <div className="h-8 w-px bg-stone-800 hidden sm:block" />
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white font-mono">~10 à 15 jours</span>
              <span className="text-[10px] uppercase tracking-wider text-primary font-bold">Séries Entreprises & Clubs</span>
            </div>
            <Link href="/devis">
              <Button
                className="h-12 px-6 rounded-full bg-primary hover:bg-primary/90 text-white font-bold uppercase text-xs tracking-wider cursor-pointer shadow-md hover:shadow-lg transition-shadow"
              >
                Lancer un projet
              </Button>
            </Link>
          </div>
        </MotionReveal>

      </div>

    </section>
  );
}
