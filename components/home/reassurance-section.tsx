
import React from 'react';
import { Award, Zap, ShieldCheck, Map } from 'lucide-react';

export function ReassuranceSection() {
  const items = [
    { icon: Award, title: "Qualité Couture", desc: "Des fils certifiés et une densité de points optimale." },
    { icon: Zap, title: "Réactivité", desc: "Devis rapide et production locale sans intermédiaires." },
    { icon: ShieldCheck, title: "Durable", desc: "La broderie ne s'efface jamais au lavage, contrairement au flocage." },
    { icon: Map, title: "Local", desc: "Atelier Normand fier de son savoir-faire de proximité." }
  ];

  return (
    <section className="py-24 px-6 border-y border-black/5 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6 text-primary">
              <item.icon size={24} />
            </div>
            <h4 className="font-bold text-lg mb-2 tracking-tight">{item.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
