import React from 'react';
import { Button } from '../ui/button';
import { SITE_CONFIG } from '../../lib/site-config';
import { MessageCircle, FileText } from 'lucide-react';

export function CtaSection() {
  return (
    <section id="contact" className="py-32 px-6 text-center bg-[radial-gradient(circle_at_bottom,rgba(233,30,99,0.05),transparent)]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-10 italic">Prêt(e) à lancer votre projet ?</h2>
        <p className="text-2xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
          Dites-moi ce que vous voulez broder — je vous réponds rapidement. 
          <br className="hidden md:block" />
          <span className="text-sm italic opacity-70">Entreprise : logo + quantité + placement • Particulier : article + prénom/texte + date</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <Button 
            onClick={() => window.location.hash = 'devis'}
            variant="whatsapp" 
            size="lg" 
            className="w-full sm:w-auto h-20 px-12 text-xs uppercase tracking-[0.2em] font-black"
          >
            <MessageCircle className="mr-3 w-6 h-6" /> Demander un devis WhatsApp
          </Button>
          <Button 
            onClick={() => window.location.hash = 'contact'}
            variant="outline" 
            size="lg" 
            className="w-full sm:w-auto h-20 px-12 text-xs uppercase tracking-[0.2em] font-black"
          >
            <FileText className="mr-3 w-5 h-5" /> Nous Contacter
          </Button>
        </div>
        
        <p className="mt-12 text-[10px] uppercase tracking-[0.3em] font-black text-muted-foreground/50">
          📍 Atelier basé à Robertot (76560) • Livraison partout en France
        </p>
      </div>
    </section>
  );
}