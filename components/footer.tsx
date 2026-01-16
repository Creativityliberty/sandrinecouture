import React from 'react';
import { Mail, Phone, Instagram, Facebook } from 'lucide-react';
import { SITE_CONFIG } from '../lib/site-config';

export function Footer() {
  return (
    <footer className="bg-white border-t border-black/5 py-20 px-6 mt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 text-left">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-black tracking-tighter mb-6 italic">By Sandrine Couture</h3>
            <p className="text-gray-500 max-w-sm leading-relaxed mb-8 text-sm font-medium">
              Atelier de broderie d'excellence en Normandie. Spécialiste du textile professionnel et du cadeau de naissance personnalisé.
            </p>
            <div className="flex gap-4">
              <a href={SITE_CONFIG.socials.instagram} target="_blank" className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-gray-400"><Instagram size={18} /></a>
              <a href={SITE_CONFIG.socials.facebook} target="_blank" className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-gray-400"><Facebook size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-medium list-none p-0">
              <li className="flex items-center gap-3"><Phone size={14} className="text-primary" /> {SITE_CONFIG.phone}</li>
              <li className="flex items-center gap-3"><Mail size={14} className="text-primary" /> {SITE_CONFIG.email}</li>
              <li className="flex items-center gap-3 text-xs opacity-60">📍 Robertot, 76560</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Liens</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-medium list-none p-0">
              <li><a href="#services" className="hover:text-primary transition-colors no-underline">Services</a></li>
              <li><a href="#réalisations" className="hover:text-primary transition-colors no-underline">Réalisations</a></li>
              <li><a href="#" className="hover:text-primary transition-colors no-underline">Mentions Légales</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} By Sandrine Couture — Fait avec amour en Normandie.</p>
          <p>Design & Technologie : NÜMTEMA Core</p>
        </div>
      </div>
    </footer>
  );
}