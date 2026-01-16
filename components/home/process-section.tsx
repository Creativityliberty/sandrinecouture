import React from 'react';

export function ProcessSection() {
  const steps = [
    { num: "01", title: "Devis", desc: "Vous remplissez le formulaire (Entreprise ou Particulier)." },
    { num: "02", title: "WhatsApp", desc: "WhatsApp s’ouvre avec un message complet et déjà structuré." },
    { num: "03", title: "Validation", desc: "Je vous réponds avec un devis clair et le délai de production." },
    { num: "04", title: "Livraison", desc: "Production soignée puis livraison ou retrait à Robertot." }
  ];

  return (
    <section className="py-24 px-6 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-black mb-4 tracking-tighter italic uppercase">Comment ça marche ?</h2>
          <p className="text-xl text-muted-foreground font-medium">Vous décrivez votre besoin → je m’occupe du reste.</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 mb-20">
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

        <div className="p-8 bg-white rounded-[2rem] border border-black/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary animate-pulse">
               <span className="font-bold">⏱️</span>
            </div>
            <div>
              <p className="font-bold text-sm uppercase tracking-widest">Délais de production</p>
              <p className="text-xs text-muted-foreground">Dépend de la complexité et des quantités</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-8">
            <div className="text-center md:text-left">
              <p className="text-2xl font-black italic tracking-tighter">~1 Semaine</p>
              <p className="text-[10px] uppercase font-bold text-primary tracking-widest">Particuliers</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-2xl font-black italic tracking-tighter">~10 Jours</p>
              <p className="text-[10px] uppercase font-bold text-primary tracking-widest">Entreprises</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}