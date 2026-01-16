import React from "react";
import { SITE_CONFIG } from "../../lib/site-config";
import { Building2, Baby, Tag, Gift, ArrowUpRight } from "lucide-react";

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
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-gradient italic tracking-tighter">L'Excellence du Détail</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            De la petite série personnalisée à l'équipement complet de vos équipes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
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
                {/* Visual accent blur */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}