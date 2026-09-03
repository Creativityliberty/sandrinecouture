"use client";

import { Facebook, Instagram, Mail, Phone, MapPin, Truck, ShieldCheck, Clock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { SITE_CONFIG } from "@/lib/site-config";

export function Footer() {
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  return (
    <footer className="bg-rose-200/90 backdrop-blur-md border-t border-rose-300/40 py-12 sm:py-16 px-3.5 sm:px-6 mt-12 relative z-10 w-full max-w-full overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Confiance & Livraison Partenaires — Framed Bento Architecture */}
        <div className="bg-white/70 backdrop-blur-md rounded-[2rem] sm:rounded-[2.5rem] p-3 sm:p-6 border border-white/60 shadow-xl mb-12 sm:mb-14 w-full max-w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Card 1: Mondial Relay */}
            <div className="group relative overflow-hidden bg-white/90 hover:bg-white rounded-3xl p-5 border border-pink-500/15 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-400 text-white flex items-center justify-center shrink-0 shadow-md shadow-pink-500/20 group-hover:scale-105 transition-transform">
                <Truck className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="inline-block text-[8px] font-black uppercase tracking-widest text-primary bg-pink-50 px-2 py-0.5 rounded-full mb-1">
                  Expédition France
                </div>
                <h5 className="text-xs font-black uppercase tracking-wider text-stone-900 mb-1 leading-snug">
                  Mondial Relay & Colissimo
                </h5>
                <p className="text-[10px] text-stone-600 font-medium leading-relaxed">
                  Livraison en point relais partout en France ou à domicile en 48h.
                </p>
              </div>
            </div>

            {/* Card 2: Atelier Normand */}
            <div className="group relative overflow-hidden bg-white/90 hover:bg-white rounded-3xl p-5 border border-pink-500/15 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-stone-900 text-white flex items-center justify-center shrink-0 shadow-md shadow-stone-900/20 group-hover:scale-105 transition-transform">
                <MapPin className="w-6 h-6 text-pink-400" />
              </div>
              <div className="flex-1">
                <div className="inline-block text-[8px] font-black uppercase tracking-widest text-stone-700 bg-stone-100 px-2 py-0.5 rounded-full mb-1">
                  Fait Main 76
                </div>
                <h5 className="text-xs font-black uppercase tracking-wider text-stone-900 mb-1 leading-snug">
                  Atelier Normand
                </h5>
                <p className="text-[10px] text-stone-600 font-medium leading-relaxed">
                  Confection & broderie artisanale soignée à Robertot (Seine-Maritime).
                </p>
              </div>
            </div>

            {/* Card 3: Devis 24h */}
            <div className="group relative overflow-hidden bg-white/90 hover:bg-white rounded-3xl p-5 border border-pink-500/15 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-400 text-white flex items-center justify-center shrink-0 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="inline-block text-[8px] font-black uppercase tracking-widest text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full mb-1">
                  Réactivité
                </div>
                <h5 className="text-xs font-black uppercase tracking-wider text-stone-900 mb-1 leading-snug">
                  Devis Express 24h
                </h5>
                <p className="text-[10px] text-stone-600 font-medium leading-relaxed">
                  Chiffrage précis et maquette numérique pour particuliers & pros.
                </p>
              </div>
            </div>

            {/* Card 4: Qualité Artisanale */}
            <div className="group relative overflow-hidden bg-white/90 hover:bg-white rounded-3xl p-5 border border-pink-500/15 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="inline-block text-[8px] font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full mb-1">
                  Certification
                </div>
                <h5 className="text-xs font-black uppercase tracking-wider text-stone-900 mb-1 leading-snug">
                  Qualité Artisanale
                </h5>
                <p className="text-[10px] text-stone-600 font-medium leading-relaxed">
                  Fils haute résistance Madeira Polyneon et textiles Oeko-Tex.
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-left mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              aria-label="Retour à l'accueil"
              className="flex items-center gap-3 mb-5 group cursor-pointer relative no-underline"
              onMouseEnter={() => setIsLogoHovered(true)}
              onMouseLeave={() => setIsLogoHovered(false)}
            >
              <div className="w-10 h-10 rounded-full border border-black/10 overflow-hidden bg-white shadow-sm p-1 transition-all duration-500 group-hover:shadow-md group-hover:scale-110">
                <img
                  src="/logo-sandrine.webp"
                  width={40}
                  height={40}
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
            </Link>
            <p className="text-black max-w-sm leading-relaxed mb-6 text-sm md:text-xs font-medium">
              Atelier de broderie d'excellence en Normandie. Spécialiste du
              textile professionnel et du cadeau de naissance personnalisé à
              Robertot. Expédition soignée via Mondial Relay et Colissimo.
            </p>
            
            {/* Modern Social Icons */}
            <div className="flex items-center gap-3 mb-6">
              <a
                href={SITE_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Suivez mes créations sur Instagram"
                title="Instagram @bysandrinecouture"
                className="group relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] p-[1px] shadow-sm hover:shadow-md hover:scale-110 transition-all duration-300"
              >
                <div className="w-full h-full bg-white/90 group-hover:bg-transparent rounded-2xl flex items-center justify-center transition-colors">
                  <Instagram size={18} className="text-[#bc1888] group-hover:text-white transition-colors" />
                </div>
              </a>

              <a
                href={SITE_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Suivez-nous sur Facebook"
                title="Facebook @bysandrinecouture"
                className="group relative w-10 h-10 rounded-2xl bg-[#1877F2] p-[1px] shadow-sm hover:shadow-md hover:scale-110 transition-all duration-300"
              >
                <div className="w-full h-full bg-white/90 group-hover:bg-transparent rounded-2xl flex items-center justify-center transition-colors">
                  <Facebook size={18} className="text-[#1877F2] group-hover:text-white transition-colors" />
                </div>
              </a>

              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp || "33629492213"}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactez-nous sur WhatsApp"
                title="WhatsApp Direct Atelier"
                className="group relative w-10 h-10 rounded-2xl bg-[#25D366] p-[1px] shadow-sm hover:shadow-md hover:scale-110 transition-all duration-300"
              >
                <div className="w-full h-full bg-white/90 group-hover:bg-transparent rounded-2xl flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 fill-[#25D366] group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.075-1.579-.271-1.077-.394-1.89-1.393-2.023-1.574-.134-.181-.497-.661-.497-1.258 0-.598.307-.891.417-1.011.111-.12.242-.15.324-.15.081 0 .162.002.233.006.074.004.172-.029.27.205.101.242.348.85.378.912.03.061.05.132.01.213-.04.08-.06.13-.12.2-.06.071-.128.158-.183.212-.06.061-.123.127-.053.248.07.121.312.515.67 834.461.411.849.539.97.599.12.06.192.051.262-.03.07-.081.303-.353.383-.474.08-.121.162-.101.272-.06.111.04.707.333.828.394.12.06.202.091.232.141.03.051.03.292-.114.697z"/>
                  </svg>
                </div>
              </a>
            </div>

            <div className="space-y-2 text-sm md:text-xs font-bold uppercase tracking-widest text-black drop-shadow-sm">
              <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-2 hover:text-primary transition-colors no-underline text-inherit">
                <Phone size={14} /> {SITE_CONFIG.phone}
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-2 hover:text-primary transition-colors no-underline text-inherit">
                <Mail size={14} /> {SITE_CONFIG.email}
              </a>
            </div>
          </div>

          {/* Navigation Rapide */}
          <div>
            <h4 className="font-bold mb-4 text-xs md:text-[10px] uppercase tracking-widest text-black">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm md:text-xs text-black font-medium list-none p-0">
              <li>
                <Link href="/boutique" className="hover:text-primary transition-colors no-underline">
                  Boutique en Ligne
                </Link>
              </li>
              <li>
                <Link href="/entreprises" className="hover:text-primary transition-colors no-underline">
                  Espace Entreprises & Artisans
                </Link>
              </li>
              <li>
                <Link href="/realisations" className="hover:text-primary transition-colors no-underline">
                  Galerie & Bibliothèque 3D
                </Link>
              </li>
              <li>
                <Link href="/devis" className="hover:text-primary transition-colors no-underline font-bold text-primary">
                  Demande de Devis 24h
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors no-underline">
                  Blog & Conseils Broderie
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors no-underline">
                  Contact Atelier
                </Link>
              </li>
            </ul>
          </div>

          {/* SEO Column: Secteurs */}
          <div>
            <h4 className="font-bold mb-4 text-xs md:text-[10px] uppercase tracking-widest text-black">
              Nos Secteurs Pro
            </h4>
            <ul className="space-y-2 text-sm md:text-xs text-black font-medium list-none p-0">
              {SITE_CONFIG.seo.sectors.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/devis?secteur=${s.slug}`}
                    className="hover:text-primary transition-colors no-underline"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SEO Column: Zone */}
          <div>
            <h4 className="font-bold mb-4 text-xs md:text-[10px] uppercase tracking-widest text-black">
              Normandie & France
            </h4>
            <ul className="space-y-2 text-sm md:text-xs text-gray-700 font-medium list-none p-0">
              {SITE_CONFIG.seo.regions.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/${r.slug}`}
                    className="hover:text-black transition-colors font-bold no-underline"
                  >
                    {r.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-black/10 mt-3">
                <p className="text-[10px] font-black uppercase tracking-wider text-black mb-1.5">Expédition France :</p>
                <span className="text-[9px] font-semibold text-black/80">Mondial Relay, Colissimo & Retrait Atelier</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-[9px] font-bold text-black uppercase tracking-widest">
          <div className="flex flex-wrap gap-6">
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
              CGV & Livraisons
            </Link>
          </div>
          <p className="text-[10px] md:text-[8px]">
            © {new Date().getFullYear()} By Sandrine Couture — Broderie d'excellence en Seine-Maritime.
          </p>
        </div>
      </div>
    </footer>
  );
}
