import React from "react";
import { SITE_CONFIG } from "../../lib/site-config";
import { Building2, Baby, Tag, Gift, ArrowUpRight, ShieldCheck } from "lucide-react";

const ICON_MAP: any = {
  Building2,
  Baby,
  Tag,
  Gift
};

export function BentoServices() {
  return (
    <section className="py-24 px-6 bg-pink-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-gradient italic tracking-tighter uppercase">Ce que je réalise</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
            Du simple prénom au logo complet, toujours avec une finition propre.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] mb-16">
          {SITE_CONFIG.services.map((service) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <div key={service.id} className={`bento-card group glass ${service.gridSpan}`}>
                <div className="p-8 h-full flex flex-col justify-between relative z-10">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {Icon && <Icon className="text-primary w-6 h-6" />}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 tracking-tight">{service.title}</h3>
                    <p className="text-gray-500 line-clamp-2 text-sm leading-relaxed">{service.description}</p>
                  </div>
                  
                  <button 
                    onClick={() => window.location.hash = 'devis'}
                    className="inline-flex items-center gap-2 font-bold text-primary group-hover:gap-3 transition-all text-sm uppercase tracking-widest bg-transparent border-none cursor-pointer"
                  >
                    Demander un devis <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
              </div>
            );
          })}
        </div>

        <div className="bg-black text-white p-8 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-8 shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
            <ShieldCheck size={32} className="text-primary" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-xl font-bold mb-2 italic tracking-tight uppercase">Note Professionnelle</h4>
            <p className="text-white/60 text-sm font-medium leading-relaxed">
              Votre logo est systématiquement optimisé et digitalisé avant broderie pour garantir un rendu net, lisible et extrêmement professionnel sur tous vos supports.
            </p>
          </div>
          <button 
            onClick={() => window.location.hash = 'devis'}
            className="px-8 py-4 bg-primary text-white rounded-full font-bold uppercase text-[10px] tracking-widest hover:scale-105 transition-transform border-none cursor-pointer shadow-lg shadow-primary/20"
          >
            Lancer mon logo
          </button>
        </div>
      </div>
    </section>
  );
}