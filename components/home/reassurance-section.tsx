"use client";

import React from "react";
import { Award, Zap, ShieldCheck, Compass, Sparkles, CheckCircle2 } from "lucide-react";

export function ReassuranceSection() {
  const pillars = [
    {
      step: "01",
      icon: Award,
      title: "Qualité Couture & Fils Madeira",
      subtitle: "Certifié Oeko-Tex Standard 100",
      desc: "Des fils à broder industriels allemands haute brillance qui ne décolorent pas, même soumis aux contraintes des lavages répétés.",
      spec: "Densité optimale sans gondolage"
    },
    {
      step: "02",
      icon: Zap,
      title: "Réactivité & Atelier Direct",
      subtitle: "Zéro intermédiaire, 100% circuit court",
      desc: "Étude technique et validation BAT sous 24h. Vous dialoguez directement avec l'artisane qui règle et pilote les machines.",
      spec: "Délai moyen devis : < 24h"
    },
    {
      step: "03",
      icon: ShieldCheck,
      title: "Inaltérable dans le Temps",
      subtitle: "Supériorité absolue sur le flocage",
      desc: "Là où l'impression craquelle et s'effrite au bout de 10 lavages, le fil brodé fusionne avec la fibre et dure aussi longtemps que le vêtement.",
      spec: "Garantie tenue 60°C & sèche-linge"
    },
    {
      step: "04",
      icon: Compass,
      title: "Ancrage Normand & Envois France",
      subtitle: "Atelier à Robertot (76)",
      desc: "Retrait direct sur place en Seine-Maritime ou expédition sécurisée suivie partout en France (Colissimo, Mondial Relay).",
      spec: "Suivi colis & emballage soigné"
    }
  ];

  return (
    <section className="py-20 sm:py-32 px-3.5 sm:px-6 lg:px-8 bg-[#faf8f5] border-b border-black/[0.06] relative w-full max-w-full overflow-hidden">
      
      {/* Editorial Watermark */}
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-primary block mb-3">
              Standards & Engagements Atelier
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.03em] uppercase text-stone-900 leading-[1.05]">
              Pourquoi la broderie <br />
              <span className="font-serif italic font-normal text-primary normal-case">surpasse tout</span> le reste.
            </h2>
          </div>
          <p className="text-stone-500 text-sm max-w-md font-medium leading-relaxed">
            Chaque paramètre de piqûre, de tension et de cadrage textile répond à une charte de qualité intransigeante pour chaque client.
          </p>
        </div>

        {/* 4 Interactive Bento Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-[2rem] bg-white border border-black/[0.07] shadow-sm hover:shadow-xl hover:border-black/20 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-stone-100 flex items-center justify-center text-stone-900 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon size={22} />
                    </div>
                    <span className="text-xs font-mono text-stone-400 font-bold">
                      {item.step}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider text-primary block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="text-xl font-black tracking-tight text-stone-900 mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center gap-2 text-[11px] font-mono text-stone-500 font-medium">
                  <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                  <span>{item.spec}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
