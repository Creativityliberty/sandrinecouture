import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Scissors, Ruler, Truck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Service de Retouches & Ourlets | By Sandrine Couture",
  description: "Faites réaliser vos ourlets avec précision par un atelier normand. Simple, rapide, avec envoi postal ou dépôt local.",
};

export default function OurletsPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5]">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[60vh] sm:h-[70vh] flex items-center justify-center bg-stone-900 overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-particuliers-prop3-atelier-artisan.webp" // Fallback premium image for now
            alt="Atelier couture et retouches"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto flex flex-col items-center">
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-6 bg-white/5 backdrop-blur-sm">
            <Scissors className="text-white" size={20} strokeWidth={1.5} />
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-white mb-6 tracking-wide" style={{ fontFamily: "var(--font-playfair)" }}>
            Service de <span className="italic text-stone-300">Retouches</span>
          </h1>
          <p className="text-sm sm:text-base text-stone-200 font-mono tracking-wider max-w-xl leading-relaxed">
            PROLONGEZ LA VIE DE VOS PIÈCES FAVORITES. UN TOMBÉ PARFAIT, RÉALISÉ AVEC PRÉCISION DANS NOTRE ATELIER NORMAND.
          </p>
        </div>
      </section>

      {/* 2. LE PROCESSUS */}
      <section className="py-24 px-4 bg-[#faf8f5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl text-stone-900 mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              L'Art de la Mesure à Distance
            </h2>
            <div className="w-12 h-px bg-primary mx-auto mb-6"></div>
            <p className="text-stone-600 font-mono text-xs uppercase tracking-widest">Simple. Fluide. Sur-mesure.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {/* Etape 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-stone-100 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110">
                <Ruler className="text-stone-900" size={32} strokeWidth={1} />
              </div>
              <h3 className="text-sm font-bold text-stone-900 uppercase tracking-widest mb-3">1. Marquez la longueur</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                À l'aide d'une simple épingle à nourrice, marquez le pli souhaité sur vous-même. Vous pouvez également nous confier un vêtement modèle à la taille parfaite.
              </p>
            </div>

            {/* Etape 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-stone-100 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110">
                <Truck className="text-stone-900" size={32} strokeWidth={1} />
              </div>
              <h3 className="text-sm font-bold text-stone-900 uppercase tracking-widest mb-3">2. Confiez-nous votre pièce</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Expédiez votre colis via Mondial Relay/Colissimo, ou venez simplement le déposer dans notre atelier normand à Robertot (76).
              </p>
            </div>

            {/* Etape 3 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-stone-100 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110">
                <Scissors className="text-stone-900" size={32} strokeWidth={1} />
              </div>
              <h3 className="text-sm font-bold text-stone-900 uppercase tracking-widest mb-3">3. Portez l'élégance</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Sous quelques jours ouvrés, nous réalisons un ourlet aux finitions professionnelles et vous réexpédions votre pièce prête à porter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LA CARTE DES SOINS (TARIFS) */}
      <section className="py-24 px-4 bg-white border-y border-stone-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl text-stone-900 mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              La Carte des Soins
            </h2>
            <div className="w-12 h-px bg-primary mx-auto mb-6"></div>
          </div>

          <div className="space-y-6">
            {/* Prestation 1 */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between p-6 sm:p-8 border border-stone-100 bg-stone-50/50 hover:bg-stone-50 transition-colors">
              <div className="mb-4 sm:mb-0">
                <h3 className="text-sm font-bold text-stone-900 uppercase tracking-widest mb-2">L'Essentiel — Ourlet Simple</h3>
                <p className="text-stone-500 text-sm italic">Idéal pour jean, pantalon droit, chino, coton.</p>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-lg font-light text-stone-900">12,00 €</span>
                <Link href="/boutique/retouche-ourlet-simple">
                  <Button variant="outline" className="rounded-full text-xs font-mono uppercase tracking-widest hover:bg-primary hover:text-white hover:border-primary transition-all">
                    Commander
                  </Button>
                </Link>
              </div>
            </div>

            {/* Prestation 2 */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between p-6 sm:p-8 border border-stone-100 bg-stone-50/50 hover:bg-stone-50 transition-colors">
              <div className="mb-4 sm:mb-0">
                <h3 className="text-sm font-bold text-stone-900 uppercase tracking-widest mb-2">Le Tailleur — Ourlet Invisible</h3>
                <p className="text-stone-500 text-sm italic">Parfait pour pantalon de costume, tailleur, laine fine.</p>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-lg font-light text-stone-900">18,00 €</span>
                <Link href="/boutique/retouche-ourlet-invisible">
                  <Button variant="outline" className="rounded-full text-xs font-mono uppercase tracking-widest hover:bg-primary hover:text-white hover:border-primary transition-all">
                    Commander
                  </Button>
                </Link>
              </div>
            </div>

            {/* Prestation 3 */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between p-6 sm:p-8 border border-stone-100 bg-stone-50/50 hover:bg-stone-50 transition-colors">
              <div className="mb-4 sm:mb-0">
                <h3 className="text-sm font-bold text-stone-900 uppercase tracking-widest mb-2">Le Vestiaire Féminin — Jupe & Robe</h3>
                <p className="text-stone-500 text-sm italic">Ourlet droit classique pour vos pièces habillées.</p>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-lg font-light text-stone-900">18,00 €</span>
                <Link href="/boutique/retouche-ourlet-jupe-robe">
                  <Button variant="outline" className="rounded-full text-xs font-mono uppercase tracking-widest hover:bg-primary hover:text-white hover:border-primary transition-all">
                    Commander
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-xs text-stone-400 font-mono tracking-wide mb-6">
              * Pour toute demande spécifique (rideaux, robes de mariée, tissus délicats type soie), merci de nous contacter pour un devis.
            </p>
            <Link href="/devis">
              <Button className="rounded-full bg-stone-900 hover:bg-primary text-white font-mono text-xs uppercase tracking-widest h-12 px-8">
                Demander un devis sur-mesure
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
