import React from 'react';
import { MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../../lib/site-config';

export function LocalisationSection() {
  return (
    <section id="localisation" className="py-32 px-6 bg-black text-white rounded-[3.5rem] mx-6 my-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full text-xs font-bold mb-12">
          <MapPin size={16} className="text-primary" />
          <span className="uppercase tracking-[0.2em] text-[10px]">Atelier Basé à Robertot (76560)</span>
        </div>
        
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-10 leading-[0.85] italic uppercase">
          Broderie en Normandie <br /> <span className="text-primary not-italic">— Livraison France.</span>
        </h2>
        
        <p className="text-2xl text-white/50 mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
          Je travaille avec des clients partout en Normandie (Seine-Maritime, Rouen, Le Havre...) et je propose la livraison partout en France selon les projets.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {[
            { name: "Broderie Normandie", href: "#broderie-normandie" },
            { name: "Seine-Maritime 76", href: "#broderie-seine-maritime-76" },
            { name: "Broderie Rouen", href: "#broderie-rouen" }
          ].map((r, i) => (
            <a 
              key={i} 
              href={r.href}
              className="px-8 py-4 border border-white/20 rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all no-underline text-white"
            >
              {r.name}
            </a>
          ))}
        </div>

        <div className="pt-16 border-t border-white/10">
          <p className="text-[10px] uppercase tracking-[0.5em] font-black text-white/30 mb-10">Villes de proximité (76)</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
            {SITE_CONFIG.seo.cities.map(city => (
              <a 
                key={city} 
                href={`#broderie-${city.toLowerCase()}`}
                className="text-lg font-bold text-white/40 hover:text-primary transition-colors no-underline uppercase tracking-tighter group flex items-center gap-2"
              >
                {city} <span className="opacity-0 group-hover:opacity-100 transition-all text-xs translate-x-[-10px] group-hover:translate-x-0">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}