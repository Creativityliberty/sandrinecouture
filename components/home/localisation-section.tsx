
import React from 'react';
import { MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../../lib/site-config';

export function LocalisationSection() {
  return (
    <section className="py-24 px-6 bg-black text-white rounded-[3rem] mx-6 my-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-xs font-bold mb-8">
          <MapPin size={14} className="text-primary" />
          <span>Atelier de Robertot, Seine-Maritime</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">
          La Qualité de Robertot <br /> Livrée partout en France.
        </h2>
        <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
          Basée au cœur de la Normandie, j'accompagne les entreprises locales et j'expédie vos cadeaux personnalisés avec soin.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
          <span className="px-6 py-2 border border-white/20 rounded-full">Rouen</span>
          <span className="px-6 py-2 border border-white/20 rounded-full">Le Havre</span>
          <span className="px-6 py-2 border border-white/20 rounded-full">Dieppe</span>
          <span className="px-6 py-2 border border-white/20 rounded-full">Yvetot</span>
        </div>
      </div>
    </section>
  );
}
