import { CheckCircle2, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden min-h-[85vh] flex items-center">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(233,30,99,0.03),transparent_50%)]" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-7xl mx-auto text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start w-full">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 inline-flex items-center gap-3 px-4 py-1.5 glass rounded-full text-[9px] font-black tracking-widest uppercase text-primary mb-6">
              <MapPin className="w-3 h-3" />
              <span>Robertot (76560) • Normandie</span>
            </div>

            <h1 className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 fill-mode-backwards text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-black mb-5 leading-[0.9] tracking-tighter italic uppercase text-balance">
              Broderie & <br />
              <span className="text-primary not-italic">Textile.</span>
            </h1>

            <p className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-backwards text-base md:text-lg text-gray-800 font-bold mb-5 leading-tight italic uppercase tracking-tighter max-w-lg">
              Uniformes d'équipe, accessoires et cadeaux personnalisés —
              finition nette et durable.
            </p>

            <p className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-backwards text-sm text-gray-500 mb-6 leading-relaxed max-w-lg font-medium">
              Bienvenue chez{" "}
              <span className="text-black font-bold">By Sandrine Couture</span>.
              Je réalise vos broderies avec soin : logos pro, patchs velcro,
              tabliers, mais aussi cadeaux de naissance personnalisés.
            </p>

            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-backwards flex flex-wrap items-center gap-x-6 gap-y-3 mb-10 py-5 border-y border-black/5">
              {[
                { text: "Devis rapide", icon: CheckCircle2 },
                { text: "Travail soigné", icon: CheckCircle2 },
                { text: "Facture pro", icon: CheckCircle2 },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-primary"
                >
                  <item.icon size={14} /> <span>{item.text}</span>
                </div>
              ))}
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700 fill-mode-backwards flex flex-col sm:flex-row gap-3 mb-6">
              <Link href="/devis">
                <Button
                  size="lg"
                  variant="whatsapp"
                  className="h-12 px-6 rounded-full shadow-xl transition-all hover:scale-105 uppercase text-[10px] tracking-widest font-bold w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Demander un devis
                </Button>
              </Link>
              <Link href="/#réalisations">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-6 rounded-full border-black/10 hover:bg-black hover:text-white transition-all uppercase text-[10px] tracking-widest font-bold w-full sm:w-auto"
                >
                  Réalisations
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative group animate-in fade-in zoom-in duration-1000 delay-500 hidden lg:block w-full max-w-lg">
            <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-3xl group-hover:bg-primary/10 transition-all duration-700" />
            <div className="relative h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white transform transition-transform duration-700 hover:rotate-1">
              <img
                src="/images/realisations/2b-couverture-collection-1.webp"
                alt="Uniformes professionnels 2B Couverture - T-shirts brodés"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 text-white glass p-5 rounded-2xl border-white/40 backdrop-blur-md">
                <p className="text-sm font-bold italic mb-1 tracking-tight">
                  "Le détail qui fait la différence."
                </p>
                <p className="text-[8px] uppercase font-black tracking-[0.2em] opacity-70 text-primary">
                  Atelier Robertot • Normandie
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
