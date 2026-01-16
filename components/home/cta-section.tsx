
import React from 'react';
import { Button } from '../ui/button';
import { SITE_CONFIG } from '../../lib/site-config';

export function CtaSection() {
  return (
    <section id="contact" className="py-32 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-10 italic">C'est à vous.</h2>
        <p className="text-2xl text-muted-foreground mb-12 leading-relaxed">
          Un logo pour votre restaurant ? Un prénom pour un futur bébé ? <br />
          Expliquez-moi votre projet, je vous réponds sous 24h.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank">
            <Button variant="whatsapp" size="lg" className="w-full sm:w-auto">Parler sur WhatsApp</Button>
          </a>
          <a href="/devis">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">Demander un Devis</Button>
          </a>
        </div>
        <p className="mt-10 text-xs uppercase tracking-widest font-bold text-muted-foreground">Sans engagement • Artisanat Français</p>
      </div>
    </section>
  );
}
