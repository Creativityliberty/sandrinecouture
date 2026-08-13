import { CheckCircle2, MapPin, MessageCircle, ArrowRight, Sparkles, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export function HeroSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Width of card + gap
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const carouselItems = [
    {
      id: 1,
      title: "Sweat Ours de Muspelheim",
      category: "Entreprises & Clubs",
      tagline: "Votre logo d'entreprise brodé sur-mesure",
      imgUrl: "/images/realisations/sweat-capuche-rouge-brode-ours-muspelheim.webp",
      detailImgUrl: "/images/realisations/sweat-capuche-rouge-brode-ours-muspelheim-detail.webp",
      badge: "PRO"
    },
    {
      id: 2,
      title: "Gilet de Berger Réversible",
      category: "Bébé & Naissance",
      tagline: "Personnalisation prénom brodé au choix",
      imgUrl: "/images/realisations/gilet-berger-bebe-reversible-moumoute-sherpa.webp",
      detailImgUrl: "/images/realisations/gilet-berger-bebe-reversible-suedine-marron.webp",
      badge: "BEBE"
    },
    {
      id: 3,
      title: "Drap de Bain PSG Julian",
      category: "Particuliers",
      tagline: "Vos thèmes préférés sur éponge de qualité",
      imgUrl: "/images/realisations/drap-bain-personnalise-julian-logo-psg-broderie-sur-mesure-france.webp",
      detailImgUrl: "/images/realisations/drap-bain-personnalise-julian-logo-psg-broderie-sur-mesure-france.webp",
      badge: "PERSO"
    }
  ];

  return (
    <section className="relative pt-32 pb-24 overflow-hidden min-h-[90vh] flex flex-col justify-center bg-white">
      {/* Subtle background glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 -z-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-10 right-10 -z-10 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[9px] font-black tracking-widest uppercase text-primary mb-4 shadow-sm">
              <Sparkles className="w-3 h-3 text-primary animate-pulse" />
              <span>Atelier Artisanal Normand</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.95] text-gray-900 mb-6">
              Marquez votre <br />
              <span className="text-primary font-serif italic normal-case lg:text-7xl">Image</span> <br />
              par la broderie.
            </h1>

            <p className="text-sm text-gray-700 font-semibold leading-relaxed mb-8 max-w-lg">
              De la pièce unique de naissance aux séries textiles professionnelles pour entreprises et clubs. Nous donnons du relief à vos logos et créations fil par fil.
            </p>

            {/* Guarantees */}
            <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center lg:justify-start mb-8 py-4 border-y border-black/5 w-full max-w-lg">
              {[
                { text: "Devis rapide sous 24h", icon: CheckCircle2 },
                { text: "Rendu 3D Haute Précision", icon: CheckCircle2 },
                { text: "Facturation Pro", icon: CheckCircle2 },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 text-[8px] font-black uppercase tracking-wider text-primary">
                  <item.icon className="w-3.5 h-3.5 text-primary" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mb-4">
              <Link href="/devis">
                <Button
                  size="lg"
                  variant="whatsapp"
                  className="h-12 px-6 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 uppercase text-[10px] tracking-widest font-bold w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Demander un devis
                </Button>
              </Link>
              <Link href="/#réalisations">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-6 rounded-full border-black/10 hover:bg-black hover:text-white transition-all uppercase text-[10px] tracking-widest font-bold w-full sm:w-auto flex items-center justify-center gap-1.5"
                >
                  <span>Nos réalisations</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-2 text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-2">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span>Atelier à Robertot (76) • Normandie</span>
            </div>
          </div>

          {/* Right Column: Interactive Realisations Carousel */}
          <div className="lg:col-span-7 flex flex-col w-full overflow-hidden">
            {/* Carousel Header Controls */}
            <div className="flex justify-between items-center mb-6 px-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                Faites défiler nos créations réelles
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => scroll("left")}
                  className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-all text-gray-700 active:scale-95 border border-black/5"
                  aria-label="Précédent"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-all text-gray-700 active:scale-95 border border-black/5"
                  aria-label="Suivant"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Scrollable Container */}
            <div
              ref={scrollContainerRef}
              className="flex gap-5 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 px-1 scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {carouselItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative shrink-0 w-[260px] sm:w-[280px] aspect-[3/4] rounded-[2rem] overflow-hidden snap-start shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-black/5 bg-gray-50 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_45px_rgba(0,0,0,0.1)]"
                >
                  {/* Real Product Image */}
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Scrim for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />

                  {/* Category Badge (Top Left) */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest bg-white/20 backdrop-blur-md text-white border border-white/25 shadow-sm">
                      {item.category}
                    </span>
                  </div>

                  {/* PRO/BEBE Badge (Top Right) */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-block px-2.5 py-0.5 rounded text-[8px] font-black uppercase tracking-widest bg-black text-white">
                      {item.badge}
                    </span>
                  </div>

                  {/* Text Details (Bottom) */}
                  <div className="absolute inset-0 z-10 flex flex-col justify-end p-5 text-white pointer-events-none">
                    <h3 className="text-base font-extrabold leading-snug drop-shadow-md">
                      {item.title}
                    </h3>
                    <p className="text-[10px] text-gray-300 font-medium mt-1 uppercase tracking-wider drop-shadow-sm">
                      {item.tagline}
                    </p>

                    {/* Macro Zoom Thumbnail on hover */}
                    <div className="mt-3.5 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 pointer-events-auto">
                      <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/40 shadow-md shrink-0">
                        <img
                          src={item.detailImgUrl}
                          alt="Zoom texture"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[8px] font-black uppercase tracking-wider text-primary">
                          Zoom Broderie
                        </span>
                        <span className="text-[7px] font-bold text-gray-300 uppercase tracking-widest flex items-center gap-0.5">
                          Voir la texture <ArrowUpRight size={8} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}



