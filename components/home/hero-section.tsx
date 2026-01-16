import React from "react";
import { MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden min-h-[85vh] flex items-center">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(233,30,99,0.03),transparent_50%)]" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto text-left">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 glass rounded-full text-[9px] font-bold tracking-widest uppercase text-primary mb-6">
              <MapPin className="w-3 h-3" />
              <span>📍 Robertot (76560) • Normandie</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.9] tracking-tighter italic uppercase">
              Broderie & <br />
              <span className="text-primary not-italic">Textile.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-800 font-bold mb-6 leading-tight italic uppercase tracking-tighter">
              Uniformes d’équipe, accessoires et cadeaux personnalisés — finition nette et durable.
            </p>
            
            <p className="text-base text-gray-500 mb-8 leading-relaxed max-w-lg font-medium">
              Bienvenue chez <span className="text-black font-bold">By Sandrine Couture</span>. Je réalise vos broderies avec soin : logos pro, patchs velcro, tabliers, mais aussi cadeaux de naissance personnalisés.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-10 py-5 border-y border-black/5">
              {[
                { text: "Devis rapide", icon: CheckCircle2 },
                { text: "Travail soigné", icon: CheckCircle2 },
                { text: "Facture pro", icon: CheckCircle2 }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-primary">
                  <item.icon size={14} /> <span>{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                variant="whatsapp"
                onClick={() => window.location.hash = 'devis'}
                className="h-16 px-8 rounded-full shadow-xl transition-all hover:scale-105 uppercase text-[9px] tracking-[0.2em] font-black"
              >
                Demander un devis
                <ArrowRight className="ml-3 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.location.hash = 'réalisations'}
                className="h-16 px-8 rounded-full border-black/10 hover:bg-black hover:text-white transition-all uppercase text-[9px] tracking-[0.2em] font-black"
              >
                Réalisations
              </Button>
            </div>
          </div>

          <div className="relative group animate-in fade-in zoom-in duration-1000 delay-200 hidden sm:block">
            <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-3xl group-hover:bg-primary/10 transition-all duration-700" />
            <div className="relative h-[450px] lg:h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white">
              <img
                src="https://images.unsplash.com/photo-1613501258908-4100257e937d?q=80&w=1000&auto=format&fit=crop" 
                alt="Broderie de luxe"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 text-white glass p-6 rounded-2xl border-white/40">
                <p className="text-base font-bold italic mb-1 tracking-tight">"Le détail qui fait la différence."</p>
                <p className="text-[9px] uppercase font-black tracking-[0.2em] opacity-70 text-primary">Atelier Robertot • Normandie</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}