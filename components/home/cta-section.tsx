import React from 'react';
import { Button } from '../ui/button';
import { MessageCircle, FileText, MapPin } from 'lucide-react';

export function CtaSection() {
  return (
    <section id="contact" className="py-24 px-6 text-center bg-[radial-gradient(circle_at_bottom,rgba(233,30,99,0.02),transparent)]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-8 italic uppercase leading-[0.9]">
          Prêt(e) à lancer <br /> votre projet ?
        </h2>
        <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
          Dites-moi ce que vous voulez broder — je vous réponds rapidement.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => window.location.hash = 'devis'}
            variant="whatsapp"
            size="lg"
            className="w-full sm:w-auto h-16 px-10 text-[9px] uppercase tracking-[0.2em] font-black shadow-lg"
          >
            <MessageCircle className="mr-3 w-5 h-5" /> Devis WhatsApp
          </Button>
          <Button
            onClick={() => window.location.hash = 'contact'}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto h-16 px-10 text-[9px] uppercase tracking-[0.2em] font-black"
          >
            <FileText className="mr-3 w-4 h-4" /> Nous Contacter
          </Button>
        </div>

        <div className="mt-10 inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] font-black text-muted-foreground/50">
          <MapPin size={10} /> Robertot (76560) • Livraison France
        </div>
      </div>
    </section>
  );
}