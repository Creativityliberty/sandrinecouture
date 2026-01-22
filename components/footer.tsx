"use client";

import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { SITE_CONFIG } from "../lib/site-config";

export function Footer() {
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  return (
    <footer className="bg-rose-200 border-t border-black/5 py-16 px-6 mt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-left mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div
              className="flex items-center gap-3 mb-5 group cursor-pointer relative"
              onMouseEnter={() => setIsLogoHovered(true)}
              onMouseLeave={() => setIsLogoHovered(false)}
            >
              <div className="w-10 h-10 rounded-full border border-black/10 overflow-hidden bg-white shadow-sm p-1 transition-all duration-500 group-hover:shadow-md group-hover:scale-110">
                <img
                  src="/logo-sandrine.png"
                  className="w-full h-full object-cover rounded-full"
                  alt="Sandrine Couture Logo"
                />
              </div>
              <h3
                className={`font-black tracking-tighter italic uppercase leading-none text-black transition-all duration-500 overflow-hidden whitespace-nowrap ${
                  isLogoHovered
                    ? "max-w-xs opacity-100 translate-x-0"
                    : "max-w-[60px] opacity-100 -translate-x-1"
                }`}
              >
                By Sandrine <br />
                Couture
              </h3>
            </div>
            <p className="text-gray-700 max-w-sm leading-relaxed mb-6 text-sm md:text-xs font-medium">
              Atelier de broderie d'excellence en Normandie. Spécialiste du
              textile professionnel et du cadeau de naissance personnalisé à
              Robertot.
            </p>
            <div className="flex gap-3 mb-6">
              <a
                href={SITE_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors text-black bg-white/40"
              >
                <Instagram size={16} />
              </a>
              <a
                href={SITE_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors text-black bg-white/40"
              >
                <Facebook size={16} />
              </a>
            </div>
            <div className="space-y-2 text-sm md:text-xs font-bold uppercase tracking-widest text-black/80 drop-shadow-sm">
              <div className="flex items-center gap-2">
                <Phone size={14} /> {SITE_CONFIG.phone}
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} /> {SITE_CONFIG.email}
              </div>
            </div>
          </div>

          {/* SEO Column: Secteurs */}
          <div>
            <h4 className="font-bold mb-4 text-xs md:text-[10px] uppercase tracking-widest text-black">
              Nos Secteurs
            </h4>
            <ul className="space-y-2 text-sm md:text-xs text-gray-700 font-medium list-none p-0">
              {SITE_CONFIG.seo.sectors.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/devis?secteur=${s.slug}`}
                    className="hover:text-black transition-colors no-underline"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SEO Column: Produits */}
          <div>
            <h4 className="font-bold mb-4 text-xs md:text-[10px] uppercase tracking-widest text-black">
              Nos Produits
            </h4>
            <ul className="space-y-2 text-sm md:text-xs text-gray-700 font-medium list-none p-0">
              {SITE_CONFIG.seo.products.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/devis?produit=${p.slug}`}
                    className="hover:text-black transition-colors no-underline"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SEO Column: Zone */}
          <div>
            <h4 className="font-bold mb-4 text-xs md:text-[10px] uppercase tracking-widest text-black">
              Zone d'intervention
            </h4>
            <ul className="space-y-2 text-sm md:text-xs text-gray-700 font-medium list-none p-0">
              {SITE_CONFIG.seo.regions.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/#${r.slug}`}
                    className="hover:text-black transition-colors font-bold no-underline"
                  >
                    {r.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-black/10 mt-3">
                <div className="flex flex-wrap gap-2">
                  {SITE_CONFIG.seo.cities.map((c) => (
                    <Link
                      key={c}
                      href={`/#broderie-${c.toLowerCase()}`}
                      className="text-[10px] md:text-[9px] hover:text-black no-underline uppercase tracking-tighter text-gray-600"
                    >
                      {c}
                    </Link>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-[9px] font-bold text-gray-600 uppercase tracking-widest">
          <div className="flex gap-6">
            <Link
              href="/mentions-legales"
              className="hover:text-black no-underline"
            >
              Mentions Légales
            </Link>
            <Link
              href="/confidentialite"
              className="hover:text-black no-underline"
            >
              Confidentialité
            </Link>
            <Link href="/cgv" className="hover:text-black no-underline">
              CGV
            </Link>
          </div>
          <p className="text-[10px] md:text-[8px]">
            © {new Date().getFullYear()} By Sandrine Couture — Broderie
            d'excellence en Seine-Maritime.
          </p>
        </div>
      </div>
    </footer>
  );
}
