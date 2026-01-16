import React from 'react';
import { Mail, Phone, Instagram, Facebook, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../lib/site-config';

export function Footer() {
  return (
    <footer className="bg-white border-t border-black/5 py-24 px-6 mt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 text-left mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-black tracking-tighter mb-6 italic">By Sandrine Couture</h3>
            <p className="text-gray-500 max-w-sm leading-relaxed mb-8 text-sm font-medium">
              Atelier de broderie d'excellence en Normandie. Spécialiste du textile professionnel et du cadeau de naissance personnalisé à Robertot.
            </p>
            <div className="flex gap-4 mb-8">
              <a href={SITE_CONFIG.socials.instagram} target="_blank" className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-gray-400"><Instagram size={18} /></a>
              <a href={SITE_CONFIG.socials.facebook} target="_blank" className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-gray-400"><Facebook size={18} /></a>
            </div>
            <div className="space-y-3 text-sm font-bold uppercase tracking-widest text-primary/60">
               <div className="flex items-center gap-2"><Phone size={14} /> {SITE_CONFIG.phone}</div>
               <div className="flex items-center gap-2"><Mail size={14} /> {SITE_CONFIG.email}</div>
            </div>
          </div>
          
          {/* SEO Column: Secteurs */}
          <div>
            <h4 className="font-bold mb-6 text-xs uppercase tracking-widest text-black">Nos Secteurs</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-medium list-none p-0">
              {SITE_CONFIG.seo.sectors.map(s => (
                <li key={s.slug}><a href={`#devis?secteur=${s.slug}`} className="hover:text-primary transition-colors no-underline">{s.name}</a></li>
              ))}
            </ul>
          </div>

          {/* SEO Column: Produits */}
          <div>
            <h4 className="font-bold mb-6 text-xs uppercase tracking-widest text-black">Nos Produits</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-medium list-none p-0">
              {SITE_CONFIG.seo.products.map(p => (
                <li key={p.slug}><a href={`#devis?produit=${p.slug}`} className="hover:text-primary transition-colors no-underline">{p.name}</a></li>
              ))}
            </ul>
          </div>

          {/* SEO Column: Zone */}
          <div>
            <h4 className="font-bold mb-6 text-xs uppercase tracking-widest text-black">Zone d'intervention</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-medium list-none p-0">
              {SITE_CONFIG.seo.regions.map(r => (
                <li key={r.slug}><a href={`#${r.slug}`} className="hover:text-primary transition-colors font-bold no-underline">{r.name}</a></li>
              ))}
              <li className="pt-2 border-t border-black/5 mt-4">
                <div className="flex flex-wrap gap-2">
                  {SITE_CONFIG.seo.cities.map(c => (
                    <a key={c} href={`#broderie-${c.toLowerCase()}`} className="text-[10px] hover:text-primary no-underline uppercase tracking-tighter">{c}</a>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          <div className="flex gap-8">
             <a href="#" className="hover:text-primary no-underline">Mentions Légales</a>
             <a href="#" className="hover:text-primary no-underline">Politique de Confidentialité</a>
             <a href="#" className="hover:text-primary no-underline">CGV</a>
          </div>
          <p>© {new Date().getFullYear()} By Sandrine Couture — Broderie d'excellence en Seine-Maritime.</p>
        </div>
      </div>
    </footer>
  );
}