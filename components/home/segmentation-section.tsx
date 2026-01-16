
import React from 'react';
import { Building2, Heart, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

export function SegmentationSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Card Entreprise */}
        <div className="bento-card glass p-12 group">
          <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center mb-8">
            <Building2 size={28} />
          </div>
          <h3 className="text-4xl font-black tracking-tighter mb-4">Pour les <br /><span className="text-primary">Professionnels</span></h3>
          <p className="text-muted-foreground text-lg mb-8 max-w-sm">
            Uniformes, tabliers et patchs personnalisés pour vos équipes. Image de marque durable.
          </p>
          <Button variant="outline" className="w-full sm:w-auto">
            Espace Pro <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>

        {/* Card Particulier */}
        <div className="bento-card glass p-12 border-primary/10 bg-primary/5 group">
          <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center mb-8">
            <Heart size={28} />
          </div>
          <h3 className="text-4xl font-black tracking-tighter mb-4">Pour les <br /><span className="text-primary">Particuliers</span></h3>
          <p className="text-muted-foreground text-lg mb-8 max-w-sm">
            Cadeaux de naissance, prénoms brodés et souvenirs uniques. L'émotion du fait-main.
          </p>
          <Button className="w-full sm:w-auto">
            Espace Cadeaux <ArrowRight size={18} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
