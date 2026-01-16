import React from 'react';
import { Heart, Gift, Baby, Star, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { SITE_CONFIG } from '../lib/site-config';

export function ParticuliersPage() {
  return (
    <div className="pt-32 animate-in fade-in duration-700">
      {/* Hero Particuliers */}
      <section className="px-6 mb-24 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-secondary/20 -z-10 blur-[120px] rounded-full translate-y-[-50%]" />
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full text-[10px] font-bold tracking-widest uppercase mb-6">
            <Heart size={14} fill="currentColor" />
            <span>Créations Uniques & Cadeaux</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 italic leading-none">
            L'émotion <br /><span className="text-primary not-italic">Personnalisée.</span>
          </h1>
          <p className="text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-medium italic">
            "Offrez un souvenir qui restera à jamais." <br /> Prénoms brodés, cadeaux de naissance et décoration à Robertot.
          </p>
          <div className="flex justify-center gap-4 mb-20">
            <Button onClick={() => window.location.hash = 'devis?type=particulier'} size="lg" className="h-20 px-12 text-sm uppercase tracking-widest font-bold rounded-full">
              Créer mon cadeau unique
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl scale-95 hover:scale-100 transition-all duration-700">
              <img src="https://images.unsplash.com/photo-1522771917563-ee75ff71e1c6?w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Cadeau naissance" />
            </div>
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl translate-y-12">
              <img src="https://images.unsplash.com/photo-1544173822-8791c584ed28?w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Broderie personnalisée" />
            </div>
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl scale-95 translate-y-6 hover:scale-100 transition-all duration-700">
              <img src="https://images.unsplash.com/photo-1515488442805-d378204b9bdf?w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Détail couture" />
            </div>
          </div>
        </div>
      </section>

      {/* Idées Cadeaux (Cluster SEO Particuliers) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-black tracking-tighter italic mb-4 uppercase">Nos Incontournables</h2>
            <p className="text-gray-500 font-medium">Des idées pour chaque moment de la vie.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Baby, title: "Naissance", desc: "Gigoteuses, doudous, capes de bain" },
              { icon: Star, title: "Décoration", desc: "Coussins, cadres brodés" },
              { icon: Gift, title: "Linge de bain", desc: "Peignoirs, serviettes luxe" },
              { icon: Sparkles, title: "Évènements", desc: "Mariages, baptêmes, EVJF" }
            ].map((item, i) => (
              <div key={i} className="bento-card glass p-8 flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
                <button 
                  onClick={() => window.location.hash = `devis?type=particulier&theme=${item.title.toLowerCase()}`}
                  className="mt-8 text-[10px] font-black uppercase tracking-widest text-primary hover:translate-x-2 transition-all bg-transparent border-none cursor-pointer text-left"
                >
                  Commander →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO Proximité */}
      <section className="py-24 px-6 bg-black text-white rounded-[3rem] mx-6 mb-12 overflow-hidden relative">
        <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full translate-x-1/2" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-black mb-8 italic tracking-tighter">Votre atelier de proximité en Normandie</h2>
          <p className="text-lg text-white/50 mb-12 leading-relaxed">
            Pas besoin d'aller loin pour de la qualité. Je vous accueille à Robertot (76) pour discuter de vos projets les plus chers.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {["Rouen", "Yvetot", "Le Havre", "Dieppe"].map(city => (
              <a key={city} href={`#broderie-pres-de-${city.toLowerCase()}`} className="text-sm font-bold text-white/40 hover:text-primary transition-colors no-underline uppercase tracking-[0.2em]">
                Broderie près de {city}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}