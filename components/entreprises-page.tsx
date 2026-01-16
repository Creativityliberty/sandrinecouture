import React from 'react';
import { Building2, CheckCircle2, ArrowRight, ShieldCheck, Zap, Package } from 'lucide-react';
import { Button } from './ui/button';
import { SITE_CONFIG } from '../lib/site-config';

export function EntreprisesPage() {
  return (
    <div className="pt-32 animate-in fade-in duration-700">
      {/* Hero Entreprise */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full text-[10px] font-bold tracking-widest uppercase mb-6">
              <Building2 size={14} className="text-primary" />
              <span>Solutions B2B & Collectivités</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 italic leading-[0.85]">
              Marquez les <br /><span className="text-primary not-italic">Esprits.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed font-medium">
              Valorisez votre image de marque avec des uniformes brodés à Robertot. Durabilité garantie, précision artisanale.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => window.location.hash = 'devis?type=entreprise'} size="lg" className="h-16 px-10 uppercase text-xs tracking-widest font-bold">
                Obtenir un Devis Pro
              </Button>
              <a href="#secteurs" className="no-underline">
                <Button variant="outline" size="lg" className="h-16 px-10 uppercase text-xs tracking-widest font-bold">
                  Nos Secteurs
                </Button>
              </a>
            </div>
          </div>
          <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[500px]">
             <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Broderie pro" />
          </div>
        </div>
      </section>

      {/* Secteurs Cluster (Maillage SEO) */}
      <section id="secteurs" className="py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black tracking-tighter italic mb-12 uppercase text-center">Spécialiste par métier</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {SITE_CONFIG.seo.sectors.map((s) => (
              <a 
                key={s.slug} 
                href={`#devis?type=entreprise&secteur=${s.slug}`}
                className="group bento-card glass p-8 no-underline text-black hover:border-primary/30 transition-all"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center justify-between">
                  {s.name} <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                </h3>
                <p className="text-sm text-muted-foreground mb-6">Personnalisation adaptée aux contraintes de votre métier.</p>
                <span className="text-[10px] uppercase font-bold tracking-widest text-primary">Voir l'offre →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Produits & Options (Internal Linking P1) */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <h2 className="text-5xl font-black tracking-tighter italic leading-none">Des supports <br /> de qualité.</h2>
              <div className="grid gap-4">
                {SITE_CONFIG.seo.products.map(p => (
                  <div key={p.slug} className="flex items-center gap-4 p-4 border-b border-black/5 group cursor-pointer hover:bg-primary/5 transition-colors">
                    <Package className="text-primary" />
                    <span className="font-bold uppercase tracking-widest text-xs">{p.name}</span>
                    <ArrowRight className="ml-auto w-4 h-4 opacity-0 group-hover:opacity-100" />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 bg-black p-12 rounded-[3rem] text-white">
               <h3 className="text-2xl font-bold mb-8 italic text-primary">Pourquoi la broderie ?</h3>
               <div className="space-y-6">
                 <div className="flex gap-4">
                   <ShieldCheck className="text-primary shrink-0" />
                   <div>
                     <p className="font-bold text-sm">Inusable</p>
                     <p className="text-xs text-white/50">Résiste à 100+ lavages industriels sans bouger.</p>
                   </div>
                 </div>
                 <div className="flex gap-4">
                   <Zap className="text-primary shrink-0" />
                   <div>
                     <p className="font-bold text-sm">Image Premium</p>
                     <p className="text-xs text-white/50">Un relief et une brillance que seul le fil apporte.</p>
                   </div>
                 </div>
               </div>
               <Button onClick={() => window.location.hash = 'devis'} variant="whatsapp" className="w-full mt-12 h-16 font-bold uppercase tracking-widest text-xs">Parlons de votre projet</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Maillage Local Normandie */}
      <section className="py-24 px-6 border-t border-black/5">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] font-black text-primary mb-8">Service Pro en Normandie</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {SITE_CONFIG.seo.cities.slice(0, 6).map(city => (
              <a key={city} href={`#broderie-${city.toLowerCase()}`} className="text-lg font-bold text-black/40 hover:text-primary transition-colors no-underline uppercase tracking-tighter italic">
                {city}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}