import React from 'react';
import { Button } from '../ui/button';
import { MessageCircle, FileText } from 'lucide-react';

export function CtaSection() {
  return (
    <section id="contact" className="py-24 px-6 text-center bg-[radial-gradient(circle_at_bottom,rgba(233,30,99,0.02),transparent)]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-8 italic uppercase leading-[0.9]">
          Prêt(e) à lancer <br /> votre projet ?
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
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
        
        <p className="mt-10 text-[9px] uppercase tracking-[0.3em] font-black text-muted-foreground/40">
          📍 Robertot (76560) • Livraison France
        </p>
      </div>
    </section>
  );
}