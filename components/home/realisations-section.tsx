import React, { useState } from 'react';
import { X, ZoomIn, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

export function RealisationsSection() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const images = [
    { url: "https://images.unsplash.com/photo-1596462502278-27bf8761e464?w=800&auto=format&fit=crop", title: "Tablier Brodé Pro", category: "Restauration" },
    { url: "https://images.unsplash.com/photo-1574634534894-89d7576c8259?w=800&auto=format&fit=crop", title: "Polo Logo Entreprise", category: "Équipement" },
    { url: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&auto=format&fit=crop", title: "Cadeau Naissance", category: "Particulier" },
    { url: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&auto=format&fit=crop", title: "Casquette Brodée", category: "Accessoires" },
    { url: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&auto=format&fit=crop", title: "Patch Velcro", category: "Tactique" },
    { url: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&auto=format&fit=crop", title: "Détail Couture", category: "Savoir-faire" }
  ];

  return (
    <section id="réalisations" className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 italic leading-[0.85] uppercase">
              Réalisations <br /><span className="text-primary not-italic text-4xl md:text-6xl tracking-tight">L'Atelier en Image</span>
            </h2>
            <p className="text-xl text-muted-foreground font-medium leading-relaxed">
              Logos, tabliers, patchs, casquettes, broderies prénoms... Chaque projet est différent, mais l’objectif reste le même : un rendu propre et professionnel.
            </p>
          </div>
          <div className="flex gap-4">
             <Button onClick={() => window.location.hash = 'devis'} className="h-16 px-8 uppercase text-[10px] tracking-widest font-black">Demander un Devis</Button>
          </div>
        </div>

        {/* Multiplex Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div 
              key={i} 
              className={`group relative overflow-hidden rounded-[2.5rem] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-700 ${
                i === 0 ? 'lg:row-span-2 h-[400px] lg:h-full' : 'h-[350px]'
              }`}
              onClick={() => setSelectedImg(img.url)}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <p className="text-primary text-[10px] uppercase font-black tracking-[0.3em] mb-2">{img.category}</p>
                <h4 className="text-white text-2xl font-black tracking-tighter italic uppercase">{img.title}</h4>
                <div className="mt-6 flex items-center gap-2 text-white/60 text-[10px] uppercase font-bold tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <ZoomIn size={14} /> Cliquez pour agrandir
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImg && (
          <div 
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6 animate-in fade-in duration-300"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-10 right-10 text-white hover:text-primary transition-colors bg-white/10 p-4 rounded-full border-none cursor-pointer"
              onClick={() => setSelectedImg(null)}
            >
              <X size={32} />
            </button>
            <img 
              src={selectedImg} 
              className="max-w-full max-h-[90vh] rounded-3xl shadow-2xl object-contain animate-in zoom-in-95 duration-500"
              alt="Vue agrandie"
            />
          </div>
        )}
      </div>
    </section>
  );
}