
import React from 'react';

export function ProcessSection() {
  const steps = [
    { num: "01", title: "Contact", desc: "Vous décrivez votre projet (logo, texte, quantité)." },
    { num: "02", title: "Digitalisation", desc: "Je transforme votre visuel en programme de broderie." },
    { num: "03", title: "Production", desc: "Réalisation minutieuse dans mon atelier de Robertot." },
    { num: "04", title: "Expédition", desc: "Remise en main propre ou envoi soigné partout en France." }
  ];

  return (
    <section className="py-24 px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black mb-16 tracking-tighter italic">Comment nous travaillons</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <span className="text-8xl font-black text-primary/10 absolute -top-10 -left-4">{step.num}</span>
              <div className="relative z-10 pt-4">
                <h4 className="text-xl font-bold mb-3 tracking-tight">{step.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
