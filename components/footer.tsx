import React from 'react';
import { Mail, Phone, Instagram, Facebook, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../lib/site-config';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-white border-t border-black/5 py-16 px-6 mt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-left mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full border border-primary/20 overflow-hidden bg-white shadow-sm p-1">
                <img src="/logo-sandrine.png" className="w-full h-full object-cover rounded-full" alt="Sandrine Couture Logo" />
              </div>
              <h3 className="text-lg font-black tracking-tighter italic uppercase leading-none">By Sandrine <br />Couture</h3>
            </div>
            <p className="text-gray-500 max-w-sm leading-relaxed mb-6 text-xs font-medium">
              Atelier de broderie d'excellence en Normandie. Spécialiste du textile professionnel et du cadeau de naissance personnalisé à Robertot.
            </p>
            <div className="flex gap-3 mb-6">
              <a href={SITE_CONFIG.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-gray-400"><Instagram size={16} /></a>
              <a href={SITE_CONFIG.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-gray-400"><Facebook size={16} /></a>
            </div>
            <div className="space-y-2 text-xs font-bold uppercase tracking-widest text-primary/70">
              <div className="flex items-center gap-2"><Phone size={12} /> {SITE_CONFIG.phone}</div>
              <div className="flex items-center gap-2"><Mail size={12} /> {SITE_CONFIG.email}</div>
            </div>
          </div>

          {/* SEO Column: Secteurs */}
          <div>
            <h4 className="font-bold mb-4 text-[10px] uppercase tracking-widest text-black">Nos Secteurs</h4>
            <ul className="space-y-2 text-xs text-gray-400 font-medium list-none p-0">
              {SITE_CONFIG.seo.sectors.map(s => (
                <li key={s.slug}><Link href={`/devis?secteur=${s.slug}`} className="hover:text-primary transition-colors no-underline">{s.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* SEO Column: Produits */}
          <div>
            <h4 className="font-bold mb-4 text-[10px] uppercase tracking-widest text-black">Nos Produits</h4>
            <ul className="space-y-2 text-xs text-gray-400 font-medium list-none p-0">
              {SITE_CONFIG.seo.products.map(p => (
                <li key={p.slug}><Link href={`/devis?produit=${p.slug}`} className="hover:text-primary transition-colors no-underline">{p.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* SEO Column: Zone */}
          <div>
            <h4 className="font-bold mb-4 text-[10px] uppercase tracking-widest text-black">Zone d'intervention</h4>
            <ul className="space-y-2 text-xs text-gray-400 font-medium list-none p-0">
              {SITE_CONFIG.seo.regions.map(r => (
                <li key={r.slug}><Link href={`/#${r.slug}`} className="hover:text-primary transition-colors font-bold no-underline">{r.name}</Link></li>
              ))}
              <li className="pt-2 border-t border-black/5 mt-3">
                <div className="flex flex-wrap gap-2">
                  {SITE_CONFIG.seo.cities.map(c => (
                    <Link key={c} href={`/#broderie-${c.toLowerCase()}`} className="text-[9px] hover:text-primary no-underline uppercase tracking-tighter">{c}</Link>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-bold text-gray-400 uppercase tracking-widest">
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-primary no-underline">Mentions Légales</Link>
            <Link href="/confidentialite" className="hover:text-primary no-underline">Confidentialité</Link>
            <Link href="/cgv" className="hover:text-primary no-underline">CGV</Link>
          </div>
          <p className="text-[8px]">© {new Date().getFullYear()} By Sandrine Couture — Broderie d'excellence en Seine-Maritime.</p>
        </div>
      </div>
    </footer>
  );
}