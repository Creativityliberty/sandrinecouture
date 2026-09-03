"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Truck, Globe, ArrowUpRight, Compass, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LocalisationSection() {
  const normandieCities = [
    "Rouen", "Le Havre", "Dieppe", "Yvetot", "Fécamp",
    "Caen", "Barentin", "Pavilly", "Doudeville", "Cany-Barville"
  ];

  return (
    <section id="localisation" className="py-20 sm:py-32 px-3.5 sm:px-6 lg:px-8 bg-stone-900 text-white relative w-full max-w-full overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Narrative */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[10px] font-mono tracking-widest uppercase text-stone-300 mb-6">
              <MapPin size={12} className="text-primary" />
              <span>Robertot (76560) • Cœur du Pays de Caux</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-[-0.03em] leading-[1.02] text-white mb-6">
              Ancrage normand, <br />
              <span className="font-serif italic font-normal text-primary normal-case">rayonnement</span> sur toute la France.
            </h2>

            <p className="text-stone-300 text-base leading-relaxed mb-8 max-w-lg">
              Mon atelier est installé à Robertot en Normandie, mais mes créations et broderies voyagent dans toute la France et en Europe. Bénéficiez d'une confection artisanale locale avec un service d'expédition rapide et ultra-soigné.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {normandieCities.map((city, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-stone-800/80 border border-stone-700/60 text-xs font-mono text-stone-300"
                >
                  {city}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Link href="/devis">
                <Button
                  className="h-12 px-7 rounded-full bg-primary hover:bg-primary/90 text-white font-bold uppercase text-xs tracking-wider cursor-pointer"
                >
                  Demander une expédition
                </Button>
              </Link>
              <span className="text-stone-400 text-xs font-mono">
                Retrait gratuit à l'atelier possible
              </span>
            </div>
          </div>

          {/* Right Transport & Security Cards */}
          <div className="lg:col-span-6 grid sm:grid-cols-2 gap-6">
            
            {/* Card Colissimo / Mondial Relay */}
            <div className="p-8 rounded-[2rem] bg-stone-950 border border-stone-800 flex flex-col justify-between min-h-[260px] shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary mb-6">
                  <Truck size={22} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Envois Sécurisés France Entière
                </h3>
                <p className="text-stone-400 text-xs leading-relaxed">
                  Expéditions quotidiennes via Colissimo Suivi ou Mondial Relay. Emballages étanches renforcés pour protéger vos textiles.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-800 text-[10px] font-mono text-stone-400 uppercase tracking-widest">
                Numéro de suivi dès l'envoi
              </div>
            </div>

            {/* Card Local Pick Up */}
            <div className="p-8 rounded-[2rem] bg-stone-950 border border-stone-800 flex flex-col justify-between min-h-[260px] shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-white mb-6">
                  <Compass size={22} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Click & Collect à Robertot
                </h3>
                <p className="text-stone-400 text-xs leading-relaxed">
                  Venez directement récupérer votre commande à l'atelier sur rendez-vous et découvrir les machines et échantillons en direct.
                </p>
              </div>
              <div className="pt-4 border-t border-stone-800 text-[10px] font-mono text-primary uppercase tracking-widest font-bold">
                Retrait sans frais supplémentaires
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
