import { CheckCircle2, MapPin, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden min-h-[90vh] flex flex-col justify-center bg-gray-50/50">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 -z-10 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 max-w-7xl">
        {/* Top Section: Split Title with overlap space */}
        <div className="relative z-20 flex flex-col md:flex-row justify-between items-center text-center md:text-left mb-8 md:mb-4">
          
          {/* Left Title */}
          <div className="w-full md:w-5/12 animate-in fade-in slide-in-from-left-8 duration-1000">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter uppercase italic text-black leading-none">
              Marquez votre <br />
              <span className="text-primary not-italic">Image.</span>
            </h1>
          </div>

          {/* Spacer for central overlap image on Desktop */}
          <div className="w-2/12 hidden md:block" />

          {/* Right Title */}
          <div className="w-full md:w-5/12 mt-4 md:mt-0 text-center md:text-right animate-in fade-in slide-in-from-right-8 duration-1000">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/80 border border-black/5 rounded-full text-[9px] font-black tracking-widest uppercase text-primary mb-3 shadow-sm">
              <Sparkles className="w-3 h-3 text-primary animate-pulse" />
              <span>Savoir-faire normand</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter uppercase italic text-black leading-none">
              Broderie <br />
              <span className="text-gray-900 not-italic">Pro.</span>
            </h2>
          </div>
        </div>

        {/* Central Overlay Image Section (overlaps title and glass card) */}
        <div className="relative w-full flex justify-center z-30 -my-6 md:-my-14 pointer-events-none">
          <div className="relative w-56 sm:w-64 md:w-72 lg:w-80 h-72 sm:h-80 md:h-[400px] animate-in fade-in zoom-in-95 duration-1000 delay-200">
            <img
              src="/images/realisations/muspelheim-hoodie-model.webp"
              alt="Modèle portant le sweat rouge personnalisé Les Ours de Muspelheim"
              className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)] hover:scale-105 transition-transform duration-700 pointer-events-auto rounded-3xl"
              loading="eager"
            />
          </div>
        </div>

        {/* Bottom Section: Glassmorphism Card */}
        <div className="relative z-10 w-full bg-white/45 backdrop-blur-xl border border-white/40 shadow-[0_30px_100px_rgba(0,0,0,0.08)] rounded-[2.5rem] p-6 sm:p-8 md:p-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Brand Context and CTA */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/5 rounded-full text-[9px] font-bold uppercase tracking-wider text-black mb-4">
                <MapPin className="w-3 h-3 text-primary" />
                <span>Atelier Robertot • Normandie</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight mb-4 uppercase">
                Le détail qui fait la différence
              </h3>
              
              <p className="text-sm text-gray-800 font-medium leading-relaxed mb-6 max-w-md">
                By Sandrine Couture réalise vos personnalisations de vêtements et accessoires avec une précision haute définition. De la pièce unique aux séries professionnelles, marquez les esprits.
              </p>

              {/* Guarantees */}
              <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center lg:justify-start mb-8 py-3 border-y border-black/5 w-full">
                {[
                  { text: "Devis rapide", icon: CheckCircle2 },
                  { text: "Rendu Haute Précision", icon: CheckCircle2 },
                  { text: "Facture Pro", icon: CheckCircle2 },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-[8px] font-black uppercase tracking-wider text-primary">
                    <item.icon className="w-3.5 h-3.5" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <Link href="/devis">
                  <Button
                    size="lg"
                    variant="whatsapp"
                    className="h-12 px-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 uppercase text-[10px] tracking-widest font-bold w-full sm:w-auto flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Demander un devis
                  </Button>
                </Link>
                <Link href="/realisations">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 px-6 rounded-full border-black/10 hover:bg-black hover:text-white transition-all uppercase text-[10px] tracking-widest font-bold w-full sm:w-auto flex items-center justify-center gap-1"
                  >
                    <span>Voir l'atelier</span>
                    <ArrowRight className="w-3 h-3" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Middle Spacer for Image Overlap */}
            <div className="hidden lg:block lg:col-span-3" />

            {/* Right Column: Featured Look widget */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-sm bg-white/70 backdrop-blur-md border border-white/80 p-4 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-3.5 bg-gray-100">
                  <img
                    src="/images/realisations/sweat-capuche-rouge-brode-ours-muspelheim-detail.webp"
                    alt="Zoom sur la broderie de l'Ours de Muspelheim"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 bg-primary text-white text-[8px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                    Zoom Technique
                  </div>
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-black">
                      Ours de Muspelheim
                    </h4>
                    <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-widest mt-0.5">
                      Catégorie Entreprises
                    </p>
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest bg-black text-white px-2 py-0.5 rounded">
                    PRO
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

