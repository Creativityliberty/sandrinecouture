import React from 'react';
import { Building2, Heart, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

export function SegmentationSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-4xl sm:text-6xl font-black tracking-tighter italic mb-6 uppercase leading-tight">Deux parcours, <br /><span className="text-primary not-italic">une seule exigence.</span></h2>
        <p className="text-lg text-muted-foreground font-medium max-w-xl mx-auto italic uppercase tracking-tighter">Choisissez votre besoin pour aller à l’essentiel.</p>
      </div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Card Entreprise */}
        <div className="bento-card glass group min-h-[500px] flex flex-col">
          <div className="h-64 overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Entreprise" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            <div className="absolute top-6 left-6 w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center shadow-xl">
              <Building2 size={28} />
            </div>
          </div>
          <div className="p-10 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl sm:text-4xl font-black tracking-tighter mb-4 italic uppercase leading-none">Entreprises <br /><span className="text-primary not-italic">& équipes</span></h3>
              <p className="text-gray-500 text-base mb-8 leading-relaxed font-medium">
                Uniformes brodés pour une image pro : tabliers, polos, casquettes, patchs velcro. Idéal pour valoriser votre identité visuelle avec durabilité.
              </p>
            </div>
            <Button onClick={() => window.location.hash = 'entreprises'} variant="outline" className="w-full sm:w-auto h-14 uppercase text-[9px] font-black tracking-widest px-10">
              Offre entreprises <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>

        {/* Card Particulier */}
        <div className="bento-card glass border-primary/5 bg-primary/[0.02] group min-h-[500px] flex flex-col">
          <div className="h-64 overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1515488442805-d378204b9bdf?w=800&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Particulier" />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors" />
            <div className="absolute top-6 left-6 w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-xl">
              <Heart size={28} fill="currentColor" />
            </div>
          </div>
          <div className="p-10 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl sm:text-4xl font-black tracking-tighter mb-4 italic uppercase leading-none">Particuliers <br /><span className="text-primary not-italic">& cadeaux</span></h3>
              <p className="text-gray-500 text-base mb-8 leading-relaxed font-medium">
                Prénom, date, message brodé. Parfait pour bébé, anniversaires et cadeaux uniques qui durent toute une vie.
              </p>
            </div>
            <Button onClick={() => window.location.hash = 'particuliers'} className="w-full sm:w-auto h-14 uppercase text-[9px] font-black tracking-widest px-10">
              Offre particuliers <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}