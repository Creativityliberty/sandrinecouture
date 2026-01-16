import React from 'react';
import { CheckCircle2, Building2, Package, Layout, MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { SITE_CONFIG } from '../../lib/site-config';

export function BusinessSection() {
  const products = [
    { name: "Polos brodés", desc: "Le classique indémodable", slug: "polo-brode" },
    { name: "T-shirts", desc: "Confort et visibilité", slug: "tshirt-brode" },
    { name: "Sweats / Hoodies", desc: "Chaud et professionnel", slug: "sweat-personnalise" },
    { name: "Tabliers brodés", desc: "Spécial restauration", slug: "tablier-brode" },
    { name: "Casquettes / Bonnets", desc: "Accessoires d'équipe", slug: "casquette-brodee" },
    { name: "Patchs velcro", desc: "Modularité totale", slug: "patch-velcro" }
  ];

  const placements = [
    { title: "Cœur", desc: "Le plus classique" },
    { title: "Manche / Nuque", desc: "Premium discret" },
    { title: "Grand Dos", desc: "Visibilité maximale" }
  ];

  return (
    <section id="professionnels" className="py-32 px-6 bg-secondary/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-24">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full text-[10px] font-bold tracking-widest uppercase mb-6">
              <Building2 size={14} className="text-primary" />
              <span>Espace Entreprises</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 italic leading-none text-gradient">
              Uniformes brodés <br /><span className="text-primary not-italic">pour entreprises</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
              Une image d'équipe professionnelle, durable et cohérente. Je personnalise vos tenues avec une broderie nette et résistante à Robertot.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {["Devis rapide", "Travail soigné", "Facture pro", "Livraison France"].map((feat, i) => (
                <div key={i} className="flex items-center gap-3 font-bold text-sm tracking-tight">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  {feat}
                </div>
              ))}
            </div>

            <Button onClick={() => window.location.hash = 'devis'} size="lg" className="w-full sm:w-auto h-16 px-10 text-xs uppercase tracking-widest font-bold">
              Demander mon devis Pro
            </Button>
          </div>

          <div className="bento-card glass p-8 md:p-12 border-primary/20">
            <h3 className="text-xl font-bold mb-8 uppercase tracking-widest text-primary italic">Secteurs de prédilection</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SITE_CONFIG.seo.sectors.map((sector, i) => (
                <a 
                  key={i} 
                  href={`#devis?secteur=${sector.slug}`}
                  className="flex items-center justify-between p-4 bg-white/50 rounded-2xl border border-black/5 text-sm font-semibold hover:border-primary/30 transition-all no-underline text-black group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {sector.name}
                  </div>
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                </a>
              ))}
            </div>
            <p className="mt-8 text-xs font-bold opacity-50 uppercase tracking-widest text-center">
              Chaque projet est unique. On s'adapte à votre métier.
            </p>
          </div>
        </div>

        {/* Produits & Placements */}
        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          <div className="lg:col-span-2 grid sm:grid-cols-3 gap-4">
            {products.map((prod, i) => (
              <a 
                key={i} 
                href={`#devis?produit=${prod.slug}`}
                className="p-6 bg-white rounded-[2rem] border border-black/5 flex flex-col justify-center items-center text-center group hover:bg-primary transition-all duration-500 no-underline text-black"
              >
                <h4 className="font-bold mb-1 group-hover:text-white transition-colors">{prod.name}</h4>
                <p className="text-[10px] uppercase tracking-tighter opacity-50 group-hover:text-white/70 transition-colors">{prod.desc}</p>
              </a>
            ))}
          </div>
          <div className="p-8 bg-black text-white rounded-[2rem] flex flex-col justify-between">
            <h4 className="text-xs uppercase tracking-widest font-bold text-primary mb-8">Options de placement</h4>
            <div className="space-y-6">
              {placements.map((p, i) => (
                <div key={i} className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="font-bold italic">{p.title}</span>
                  <span className="text-[10px] opacity-60 uppercase tracking-tighter">{p.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Packs */}
        <div className="mb-32">
          <h3 className="text-3xl font-black mb-12 tracking-tighter italic text-center uppercase">Nos Solutions Prêtes-à-Broder</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {SITE_CONFIG.packs.map((pack, i) => (
              <div key={i} className={`p-10 rounded-[2.5rem] border flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 ${
                i === 1 ? 'bg-primary text-white border-primary shadow-2xl shadow-primary/20 scale-105 z-10' : 'bg-white border-black/5'
              }`}>
                <div>
                  <h4 className="text-4xl font-black tracking-tighter mb-2 italic">{pack.name}</h4>
                  <p className={`text-[10px] uppercase tracking-[0.2em] font-bold mb-8 ${i === 1 ? 'text-white/70' : 'text-primary'}`}>{pack.target}</p>
                  <ul className="space-y-4 mb-12 list-none p-0">
                    {pack.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm font-medium">
                        <CheckCircle2 size={16} className={i === 1 ? 'text-white' : 'text-primary'} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button 
                  onClick={() => {
                    const msg = encodeURIComponent(`Bonjour Sandrine, je suis intéressé par le Pack ${pack.name} pour mon entreprise.`);
                    window.open(`https://wa.me/${SITE_CONFIG.whatsapp}?text=${msg}`, '_blank');
                  }}
                  variant={i === 1 ? 'ghost' : 'primary'} 
                  className={`w-full h-14 uppercase text-[10px] tracking-widest font-bold ${i === 1 ? 'bg-white text-primary hover:bg-white/90' : ''}`}
                >
                  Choisir ce pack
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Processus */}
        <div className="bg-white rounded-[3rem] p-12 md:p-20 border border-black/5">
          <h3 className="text-2xl font-black mb-16 tracking-tighter italic text-center uppercase">Le Parcours Client Pro</h3>
          <div className="grid md:grid-cols-5 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-black/5 -translate-y-1/2" />
            {[
              { t: "Briefing", d: "Logo + quantité + articles" },
              { t: "Devis", d: "Réponse sous 24h" },
              { t: "Validation", d: "Acompte & programmation" },
              { t: "Production", d: "Broderie à Robertot" },
              { t: "Livraison", d: "Envoi soigné partout en France" }
            ].map((s, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center font-black mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                  {i + 1}
                </div>
                <h5 className="font-bold text-sm mb-1 uppercase tracking-tight">{s.t}</h5>
                <p className="text-[10px] text-muted-foreground leading-relaxed px-4">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}