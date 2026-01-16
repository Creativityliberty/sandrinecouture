import React from 'react';
import { Building2, Heart, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

export function SegmentationSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter italic mb-4 uppercase">Deux parcours clairs, une seule exigence : la qualité.</h2>
        <p className="text-lg text-muted-foreground font-medium">Choisissez votre besoin pour aller directement à l’essentiel.</p>
      </div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Card Entreprise */}
        <div className="bento-card glass p-12 group">
          <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center mb-8">
            <Building2 size={28} />
          </div>
          <h3 className="text-4xl font-black tracking-tighter mb-4 italic">Entreprises <br /><span className="text-primary not-italic">& équipes</span></h3>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Uniformes brodés pour une image professionnelle et cohérente : tabliers, polos, sweats, casquettes, patchs (velcro ou cousu). Idéal pour restaurants, artisans, hôtels, clubs, associations, salons.
          </p>
          <Button onClick={() => window.location.hash = 'entreprises'} variant="outline" className="w-full sm:w-auto h-14 uppercase text-[10px] font-black tracking-widest">
            Voir l’offre entreprises <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>

        {/* Card Particulier */}
        <div className="bento-card glass p-12 border-primary/10 bg-primary/5 group">
          <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center mb-8">
            <Heart size={28} />
          </div>
          <h3 className="text-4xl font-black tracking-tighter mb-4 italic">Particuliers <br /><span className="text-primary not-italic">& cadeaux</span></h3>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Broderie personnalisée : prénom, date, message, motifs. Parfait pour bébé / naissance, anniversaires, cadeaux uniques et textiles personnalisés avec l'émotion du fait-main.
          </p>
          <Button onClick={() => window.location.hash = 'particuliers'} className="w-full sm:w-auto h-14 uppercase text-[10px] font-black tracking-widest">
            Voir l’offre particuliers <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}