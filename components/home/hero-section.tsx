import React from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export function HeroSection() {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden min-h-[90vh] flex items-center">
      {/* Dynamic Background Blur */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(233,30,99,0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-3 px-5 py-2 glass rounded-full text-[10px] font-bold tracking-widest uppercase text-primary mb-8">
              <MapPin className="w-3 h-3" />
              <span>Savoir-faire Normand • Robertot</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter italic">
              L'Art de la <br />
              <span className="text-primary not-italic">Personnalisation</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-500 mb-10 leading-relaxed max-w-xl">
              Donnez vie à vos textiles avec une broderie haute couture, durable et d'une précision absolue.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-12">
              <Button
                size="lg"
                onClick={() => window.location.hash = 'devis'}
                className="bg-primary hover:bg-pink-600 text-white font-bold h-16 px-10 rounded-full shadow-2xl shadow-primary/20 transition-all hover:scale-105"
              >
                Démarrer mon projet
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-16 px-10 rounded-full border-black/10 hover:bg-black hover:text-white transition-all"
              >
                Notre Atelier
              </Button>
            </div>

            <div className="flex items-center gap-8 opacity-60">
              <div className="text-center">
                <p className="text-2xl font-bold">100%</p>
                <p className="text-[10px] uppercase tracking-widest">Durable</p>
              </div>
              <div className="w-px h-8 bg-black/10" />
              <div className="text-center">
                <p className="text-2xl font-bold">72h</p>
                <p className="text-[10px] uppercase tracking-widest">Réactivité</p>
              </div>
              <div className="w-px h-8 bg-black/10" />
              <div className="text-center">
                <p className="text-2xl font-bold">FR</p>
                <p className="text-[10px] uppercase tracking-widest">Livraison</p>
              </div>
            </div>
          </div>

          <div className="relative group animate-in fade-in zoom-in duration-1000 delay-200">
            <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-3xl group-hover:bg-primary/20 transition-all duration-700" />
            <div className="relative h-[500px] lg:h-[700px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1613501258908-4100257e937d?q=80&w=1000&auto=format&fit=crop" 
                alt="Broderie de luxe"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 text-white glass p-6 rounded-2xl border-white/40">
                <p className="text-sm font-bold italic">"Chaque point de broderie raconte une histoire."</p>
                <p className="text-[10px] uppercase tracking-tighter opacity-70 mt-1">Sandrine — Fondatrice</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}