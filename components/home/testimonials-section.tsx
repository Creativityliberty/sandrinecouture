"use client";

import React, { useState } from "react";
import { Star, Award, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ophélie Cavelier",
      role: "Création Particulier",
      text: "J’ai eu la chance de faire réaliser deux broderies personnalisées chez Sandrine, et je ne peux que la recommander ! Elle a su comprendre exactement ce que j’avais en tête et le résultat est tout simplement magnifique. Elle travaille avec beaucoup de soin et de rapidité.",
      rating: 5,
      date: "Avis vérifié Google",
      tag: "Pièces Naissance"
    },
    {
      name: "Arthur Lbs",
      role: "Client Pro & Équipe",
      text: "Qualité de broderie au top. Travail de précision soigné et réactivité exemplaire. Sandrine a su répondre parfaitement à mes attentes avec des finitions impeccables sur nos textiles.",
      rating: 5,
      date: "Avis vérifié Google",
      tag: "Série Textile"
    },
    {
      name: "Chloé Larchevesque",
      role: "Maman",
      text: "Je suis très contente pour la création du premier cartable de ma fille pour sa rentrée scolaire. Les détails sont magnifiques, j'adore le travail réalisé avec passion. Encore un immense merci !",
      rating: 5,
      date: "Avis vérifié Google",
      tag: "Cartable Brodé"
    },
    {
      name: "Nadège Lobjois",
      role: "Cliente",
      text: "Très satisfaite de la gigoteuse faite par Sandrine pour ma petite fille. Je recommande à 100% ! Merci encore pour la rapidité d'exécution et la qualité irréprochable des finitions.",
      rating: 5,
      date: "Avis vérifié Google",
      tag: "Gigoteuse Bébé"
    },
    {
      name: "Kehlani Lauthner",
      role: "Local Guide",
      text: "Je recommande vivement, j’ai commandé à plusieurs reprises : serviettes d'invités brodées, carnet de santé personnalisé pour une naissance. Un travail d'une grande finesse et envoi très rapide.",
      rating: 5,
      date: "Avis vérifié Google",
      tag: "Carnet de Santé"
    },
    {
      name: "Angélique Justin",
      role: "Cliente Fidèle",
      text: "Atelier de broderie d'une grande qualité et accueil chaleureux. Sandrine est à l'écoute des besoins et propose un travail méticuleux et rapide. Vous pouvez y aller les yeux fermés !",
      rating: 5,
      date: "Avis vérifié Google",
      tag: "Fidélité Atelier"
    }
  ];

  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="py-20 sm:py-32 px-3.5 sm:px-6 lg:px-8 bg-[#faf8f5] border-b border-black/[0.06] relative w-full max-w-full overflow-hidden">
      
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-primary block mb-3">
              Retours d'Expérience • Avis 5/5
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-[-0.03em] uppercase text-stone-900 leading-[1.05]">
              La confiance <br />
              <span className="font-serif italic font-normal text-primary normal-case">fil après fil</span>.
            </h2>
          </div>

          <div className="flex items-center gap-4 bg-white px-5 py-3 rounded-2xl border border-black/[0.08] shadow-xs">
            <div className="flex gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="currentColor" />
              ))}
            </div>
            <div className="h-4 w-px bg-stone-200" />
            <span className="text-xs font-mono font-bold text-stone-900">
              5.0 / 5 sur Google Reviews
            </span>
          </div>
        </div>

        {/* Testimonials Masonry / Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-[2rem] bg-white border border-black/[0.07] shadow-sm hover:shadow-xl hover:border-black/15 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-0.5 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={13} fill="currentColor" />
                    ))}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-stone-100 text-[9px] font-mono uppercase tracking-wider text-stone-600 font-bold">
                    {t.tag}
                  </span>
                </div>

                <p className="text-stone-700 text-sm leading-relaxed mb-6 font-normal italic">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-black text-stone-900 leading-tight">
                    {t.name}
                  </h3>
                  <span className="text-[10px] text-stone-500 font-mono">
                    {t.role}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-600 flex items-center gap-1 font-bold">
                  <CheckCircle2 size={11} /> {t.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
