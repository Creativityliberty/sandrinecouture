import React from "react";
import { MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";

export function HeroSection() {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(233,30,99,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto text-left">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-3 px-5 py-2 glass rounded-full text-[10px] font-bold tracking-widest uppercase text-primary mb-8">
              <MapPin className="w-3 h-3" />
              <span>📍 Robertot (76560) • Normandie • Livraison France</span>
            </div>

            <h1 className="text-5xl md:text-9xl font-black mb-8 leading-[0.85] tracking-tighter italic uppercase">
              Broderie & <br />
              <span className="text-primary not-italic">Textile.</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-800 font-bold mb-6 leading-tight italic uppercase tracking-tighter">
              Uniformes d’équipe, accessoires brodés et cadeaux personnalisés — avec une finition nette et durable.
            </p>
            
            <p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-xl font-medium">
              Bienvenue chez <span className="text-black font-bold">By Sandrine Couture</span>. Je réalise vos broderies avec soin : logos d’entreprise, patchs velcro, tabliers, polos, casquettes, mais aussi prénoms et cadeaux personnalisés. Un rendu propre, lisible, conçu pour durer dans le temps.
            </p>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mb-12 py-6 border-y border-black/5">
              {[
                { text: "Devis rapide", icon: CheckCircle2 },
                { text: "Travail soigné", icon: CheckCircle2 },
                { text: "Livraison", icon: CheckCircle2 },
                { text: "Facture (entreprises)", icon: CheckCircle2 }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                  <item.icon size={16} /> <span>{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-5 mb-8">
              <Button
                size="lg"
                variant="whatsapp"
                onClick={() => window.location.hash = 'devis'}
                className="h-20 px-10 rounded-full shadow-2xl transition-all hover:scale-105 uppercase text-[10px] tracking-[0.2em] font-black"
              >
                Demander un devis WhatsApp
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.location.hash = 'réalisations'}
                className="h-20 px-10 rounded-full border-black/10 hover:bg-black hover:text-white transition-all uppercase text-[10px] tracking-[0.2em] font-black"
              >
                Voir les réalisations
              </Button>
            </div>
            
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest italic">
              📌 Vous remplissez le devis → WhatsApp s’ouvre avec un message déjà prêt à envoyer.
            </p>
          </div>

          <div className="relative group animate-in fade-in zoom-in duration-1000 delay-200">
            <div className="absolute -inset-4 bg-primary/10 rounded-[4rem] blur-3xl group-hover:bg-primary/20 transition-all duration-700" />
            <div className="relative h-[600px] lg:h-[800px] w-full rounded-[3.5rem] overflow-hidden shadow-2xl border-[12px] border-white">
              <img
                src="https://images.unsplash.com/photo-1613501258908-4100257e937d?q=80&w=1000&auto=format&fit=crop" 
                alt="Broderie de luxe Sandrine Couture"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12 text-white glass p-8 rounded-3xl border-white/40">
                <p className="text-xl font-bold italic mb-1 tracking-tight">"Le détail qui fait la différence."</p>
                <p className="text-[10px] uppercase font-black tracking-[0.2em] opacity-70">Atelier Robertot • Normandie</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}