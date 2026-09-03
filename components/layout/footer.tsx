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
                <div className="inline-block text-[8px] font-black uppercase tracking-widest text-rose-950 bg-rose-100 px-2 py-0.5 rounded-full mb-1">
                  Expédition France
                </div>
                <h3 className="text-xs font-black uppercase tracking-wider text-stone-900 mb-1 leading-snug">
                  Mondial Relay & Colissimo
                </h3>
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
                <h3 className="text-xs font-black uppercase tracking-wider text-stone-900 mb-1 leading-snug">
                  Atelier Normand
                </h3>
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
                <h3 className="text-xs font-black uppercase tracking-wider text-stone-900 mb-1 leading-snug">
                  Devis Express 24h
                </h3>
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
                <h3 className="text-xs font-black uppercase tracking-wider text-stone-900 mb-1 leading-snug">
                  Qualité Artisanale
                </h3>
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
              className="flex items-center gap-3.5 mb-5 group cursor-pointer relative no-underline"
            >
              <div className="w-12 h-12 rounded-full border border-black/10 overflow-hidden bg-white shadow-sm p-1 transition-all duration-500 group-hover:shadow-md group-hover:scale-105 shrink-0">
                <img
                  src="/logo-sandrine.webp"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover rounded-full"
                  alt="By Sandrine Couture"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xl sm:text-2xl font-black uppercase tracking-tight text-stone-950 font-mono leading-none">
                  By Sandrine Couture
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold mt-1">
                  Atelier de Broderie & Confection • Robertot
                </span>
              </div>
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
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
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
                <Link href="/devis" className="hover:text-pink-700 transition-colors no-underline font-black text-stone-950 underline decoration-pink-500 underline-offset-4">
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
