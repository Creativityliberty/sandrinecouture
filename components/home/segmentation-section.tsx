import React from 'react';
import { Building2, Heart, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

export function SegmentationSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter italic mb-4 uppercase leading-[1.1]">Deux parcours, une seule exigence.</h2>
        <p className="text-base text-muted-foreground font-medium">Choisissez votre besoin pour aller à l’essentiel.</p>
      </div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 lg:gap-8">
        {/* Card Entreprise */}
        <div className="bento-card glass p-8 md:p-12 group">
          <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mb-6">
            <Building2 size={24} />
          </div>
          <h3 className="text-3xl sm:text-4xl font-black tracking-tighter mb-4 italic uppercase leading-none">Entreprises <br /><span className="text-primary not-italic">& équipes</span></h3>
          <p className="text-muted-foreground text-base mb-8 leading-relaxed font-medium">
            Uniformes brodés pour une image pro : tabliers, polos, casquettes, patchs velcro. Idéal pour restaurants et artisans.
          </p>
          <Button onClick={() => window.location.hash = 'entreprises'} variant="outline" className="w-full sm:w-auto h-12 uppercase text-[9px] font-black tracking-widest px-8">
            Offre entreprises <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>

        {/* Card Particulier */}
        <div className="bento-card glass p-8 md:p-12 border-primary/5 bg-primary/[0.02] group">
          <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center mb-6">
            <Heart size={24} />
          </div>
          <h3 className="text-3xl sm:text-4xl font-black tracking-tighter mb-4 italic uppercase leading-none">Particuliers <br /><span className="text-primary not-italic">& cadeaux</span></h3>
          <p className="text-muted-foreground text-base mb-8 leading-relaxed font-medium">
            Prénom, date, message brodé. Parfait pour bébé, anniversaires et cadeaux uniques personnalisés.
          </p>
          <Button onClick={() => window.location.hash = 'particuliers'} className="w-full sm:w-auto h-12 uppercase text-[9px] font-black tracking-widest px-8">
            Offre particuliers <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}