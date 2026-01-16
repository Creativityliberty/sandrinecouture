
import React from 'react';
import { Button } from '../ui/button';

export function RealisationsSection() {
  const images = [
    "https://images.unsplash.com/photo-1596462502278-27bf8761e464?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&auto=format&fit=crop"
  ];

  return (
    <section id="réalisations" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <h2 className="text-6xl font-black tracking-tighter mb-4 italic text-gradient">L'Atelier en Image</h2>
            <p className="text-xl text-muted-foreground max-w-xl">
              Chaque création est unique. Voici un aperçu des derniers projets sortis de l'atelier.
            </p>
          </div>
          <Button variant="outline">Découvrir tout l'album</Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div key={i} className="aspect-[3/4] rounded-3xl overflow-hidden bento-card border-none">
              <img src={img} alt="Réalisation Sandrine Couture" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
