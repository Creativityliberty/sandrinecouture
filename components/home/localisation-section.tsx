import React from 'react';
import { MapPin, Truck, Globe, Package, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../../lib/site-config';

export function LocalisationSection() {
  const cities = [
    "Rouen", "Le Havre", "Dieppe", "Yvetot", "Fécamp",
    "Caen", "Barentin", "Pavilly", "Doudeville", "Cany-Barville"
  ];

  // On double la liste pour le défilement infini sans coupure
  const scrollingCities = [...cities, ...cities, ...cities];

  return (
    <section id="localisation" className="py-32 overflow-hidden bg-white">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex flex-col lg:flex-row gap-16 items-center max-w-7xl mx-auto text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 glass rounded-full text-[9px] font-black tracking-widest uppercase text-primary mb-8">
              <MapPin className="w-3 h-3" />
              <span>Robertot (76560) • Normandie</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 italic uppercase leading-[0.9]">
              Broderie locale, <br />
              <span className="text-primary not-italic">Rayonnement France.</span>
            </h2>
            <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-xl mb-10">
              Mon atelier est niché au cœur de la Normandie, mais mes créations voyagent. Que vous soyez à Rouen ou à l'autre bout de la France, la qualité reste la même.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-secondary/50 border border-primary/10 flex flex-col justify-between">
                <div>
                  <Truck className="text-primary mb-4" size={24} />
                  <h4 className="font-bold uppercase tracking-widest text-[10px] mb-2">Livraison Partout</h4>
                  <p className="text-sm font-bold italic">Expédition sécurisée dans toute la France.</p>
                </div>
                <img src="/logo-mondial-relay.jpg" alt="Mondial Relay" className="h-8 object-contain mt-6 opacity-80 mix-blend-multiply" />
              </div>
              <div className="p-6 rounded-3xl bg-black text-white flex flex-col justify-between border border-white/5">
                <div>
                  <Globe className="text-primary mb-4" size={24} />
                  <h4 className="font-bold uppercase tracking-widest text-[10px] mb-2 text-primary/70">France & Europe</h4>
                  <p className="text-sm font-bold italic">Un savoir-faire normand qui s'exporte.</p>
                </div>
                <div className="mt-6 flex items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                  <span className="text-[8px] font-black uppercase tracking-widest">Partenaire</span>
                  <img src="/logo-mondial-relay.jpg" alt="Mondial Relay Partner" className="h-6 bg-white py-0.5 px-2 rounded-lg" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-3xl" />
            <div className="relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-white">
              <img
                src="/images/realisations/poules-decoratives-brodees.webp"
                className="w-full h-full object-cover"
                alt="Poules décoratives brodées - Artisanat Normandie"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-[10px] uppercase font-black tracking-widest text-primary mb-1">Made in Robertot</p>
                <p className="text-xl font-bold italic">Votre artisan de proximité.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BANDEAU DÉFILANT DES VILLES */}
      <div className="bg-black py-10 relative">
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10" />

        <div className="mb-6 text-center">
          <span className="text-[9px] font-black uppercase tracking-[0.5em] text-primary/50 italic">Villes de proximité (76) & Normandie</span>
        </div>

        <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
          {scrollingCities.map((city, i) => (
            <div key={i} className="flex items-center gap-12 group">
              <span className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white/20 group-hover:text-primary transition-colors cursor-default">
                {city} <ArrowRight className="text-primary ml-4 group-hover:translate-x-4 inline-block transition-transform w-12 h-12" />
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-300 flex items-center justify-center gap-2">
          <Package size={14} className="text-primary" /> Livraison rapide : <span className="text-black">Toute la France</span>
        </p>
      </div>
    </section>
  );
}