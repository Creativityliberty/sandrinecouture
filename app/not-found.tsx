import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen font-sans bg-white flex items-center justify-center px-6">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(233,30,99,0.03),transparent_50%)]" />

      <div className="max-w-2xl mx-auto text-center animate-in fade-in zoom-in-95 duration-700">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl sm:text-[150px] font-black italic tracking-tighter leading-none text-primary/20 mb-4">
            404
          </h1>
        </div>

        {/* Content */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter italic uppercase mb-4 leading-[0.9]">
            Page non trouvée
          </h2>
          <p className="text-xl text-gray-600 mb-6 font-medium">
            Désolé, la page que vous cherchez n'existe pas ou a été déplacée.
          </p>
          <p className="text-gray-500 font-medium max-w-lg mx-auto">
            Peut-être que vous cherchiez une de nos pages principales ?
            Retournez à l'accueil ou explorez nos services.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-12 p-8 bg-gray-50 rounded-2xl border border-black/5">
          <p className="text-sm font-bold uppercase tracking-widest text-gray-600 mb-6">
            Pages populaires
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/" className="no-underline">
              <button className="w-full px-4 py-3 text-left font-bold italic uppercase text-sm tracking-tight hover:bg-primary/10 rounded-lg transition-colors">
                → Accueil
              </button>
            </Link>
            <Link href="/entreprises" className="no-underline">
              <button className="w-full px-4 py-3 text-left font-bold italic uppercase text-sm tracking-tight hover:bg-primary/10 rounded-lg transition-colors">
                → Entreprises
              </button>
            </Link>
            <Link href="/particuliers" className="no-underline">
              <button className="w-full px-4 py-3 text-left font-bold italic uppercase text-sm tracking-tight hover:bg-primary/10 rounded-lg transition-colors">
                → Particuliers
              </button>
            </Link>
            <Link href="/realisations" className="no-underline">
              <button className="w-full px-4 py-3 text-left font-bold italic uppercase text-sm tracking-tight hover:bg-primary/10 rounded-lg transition-colors">
                → Réalisations
              </button>
            </Link>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="no-underline">
            <Button
              size="lg"
              className="h-14 px-8 rounded-full shadow-xl uppercase text-[9px] font-black tracking-widest w-full sm:w-auto"
            >
              <Home className="mr-2 w-4 h-4" />
              Retour à l'accueil
            </Button>
          </Link>
          <Link href="/devis" className="no-underline">
            <Button
              variant="outline"
              size="lg"
              className="h-14 px-8 rounded-full uppercase text-[9px] font-black tracking-widest w-full sm:w-auto"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Demander un devis
            </Button>
          </Link>
        </div>

        {/* Contact Info */}
        <div className="mt-16 pt-8 border-t border-black/10">
          <p className="text-sm text-gray-600 font-medium mb-4">
            Besoin d'aide ? Contactez-nous directement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm font-bold">
            <a
              href="tel:+33629492213"
              className="text-primary hover:underline no-underline"
            >
              📞 06 29 49 22 13
            </a>
            <a
              href="mailto:bysandrinecouture@gmail.com"
              className="text-primary hover:underline no-underline"
            >
              ✉️ bysandrinecouture@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
