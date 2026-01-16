import React from 'react';
import { MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../../lib/site-config';

export function LocalisationSection() {
  return (
    <section id="localisation" className="py-24 px-6 bg-black text-white rounded-[3rem] mx-6 my-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-xs font-bold mb-8">
          <MapPin size={14} className="text-primary" />
          <span className="uppercase tracking-widest text-[10px]">Atelier Normand • Robertot 76</span>
        </div>
        
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight italic">
          La Qualité de Robertot <br /> <span className="text-primary not-italic">livrée partout en France.</span>
        </h2>
        
        <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
          Basée au cœur de la Seine-Maritime, j'accompagne les entreprises normandes et j'expédie vos créations personnalisées avec le plus grand soin.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {SITE_CONFIG.seo.regions.map(r => (
            <a 
              key={r.slug} 
              href={`#${r.slug}`}
              className="px-6 py-3 border border-primary/50 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary transition-all no-underline text-white"
            >
              Broderie {r.name}
            </a>
          ))}
        </div>

        <div className="mt-12 pt-12 border-t border-white/10">
          <p className="text-[10px] uppercase tracking-[0.3em] font-black text-white/40 mb-8">Villes desservies à proximité</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {SITE_CONFIG.seo.cities.map(city => (
              <a 
                key={city} 
                href={`#broderie-${city.toLowerCase()}`}
                className="text-sm font-bold text-white/60 hover:text-primary transition-colors no-underline group"
              >
                {city} <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}