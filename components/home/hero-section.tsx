import { CheckCircle2, MapPin, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[95vh] flex flex-col justify-center bg-white">
      {/* Soft background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-10 right-10 -z-10 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px]" />

      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Top Grid: Titles and Model Image */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-center justify-center relative z-20 mb-8">
          
          {/* Left Title: Marques / Image */}
          <div className="col-span-1 md:col-span-4 flex flex-col items-center md:items-end text-center md:text-right">
            <span className="text-xs font-black tracking-[0.2em] text-gray-400 uppercase mb-2">
              Personnalisation
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.9] text-gray-900">
              Marquez <br />
              votre <br />
              <span className="text-primary font-serif italic normal-case lg:text-7xl">Image.</span>
            </h1>
          </div>

          {/* Center Column: Model Image in a premium Rounded Arch Portal */}
          <div className="col-span-1 md:col-span-4 flex justify-center">
            <div className="relative w-64 sm:w-72 aspect-[3/4] rounded-t-full overflow-hidden border-8 border-white shadow-[0_25px_60px_rgba(0,0,0,0.15)] bg-gray-100 transform hover:scale-[1.02] transition-transform duration-500">
              <img
                src="/images/realisations/muspelheim-hoodie-model.webp"
                alt="Modèle portant le sweat rouge personnalisé Les Ours de Muspelheim"
                className="w-full h-full object-cover"
                loading="eager"
              />
              {/* Overlay shadow inside the arch */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Title: Broderie / Excellence */}
          <div className="col-span-1 md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[9px] font-black tracking-widest uppercase text-primary mb-3.5 shadow-sm">
              <Sparkles className="w-3 h-3 text-primary animate-pulse" />
              <span>Savoir-faire normand</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.9] text-gray-900">
              Broderie <br />
              d' <br />
              <span className="text-black font-serif italic normal-case lg:text-7xl">Excellence.</span>
            </h2>
          </div>
        </div>

        {/* Bottom Card: Glassmorphism layout overlapping the top */}
        <div className="relative z-10 w-full bg-white/60 backdrop-blur-xl border border-white/50 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[2.5rem] p-6 sm:p-8 md:p-10 md:-mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Content and CTA */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/5 rounded-full text-[9px] font-black uppercase tracking-wider text-gray-600 mb-4">
                <MapPin className="w-3 h-3 text-primary" />
                <span>Atelier Robertot • Normandie</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight mb-4 uppercase">
                Le détail qui fait la différence
              </h3>
              
              <p className="text-sm text-gray-700 font-medium leading-relaxed mb-6 max-w-xl">
                Créations uniques et marquages textiles haut de gamme pour les entreprises et les particuliers. Vos logos et designs sont sublimés fil par fil avec précision dans notre atelier normand.
              </p>

              {/* Guarantees */}
              <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center lg:justify-start mb-6 py-4 border-y border-black/5 w-full max-w-xl">
                {[
                  { text: "Devis rapide", icon: CheckCircle2 },
                  { text: "Rendu Haute Définition", icon: CheckCircle2 },
                  { text: "Facture Professionnelle", icon: CheckCircle2 },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-[8px] font-black uppercase tracking-wider text-primary">
                    <item.icon className="w-3.5 h-3.5 text-primary" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
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
                <Link href="/realisations">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 px-6 rounded-full border-black/10 hover:bg-black hover:text-white transition-all uppercase text-[10px] tracking-widest font-bold w-full sm:w-auto flex items-center justify-center gap-1.5"
                  >
                    <span>Découvrir l'atelier</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Featured Product Widget */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm bg-white/80 border border-white p-4 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-3.5 bg-gray-50">
                  <img
                    src="/images/realisations/sweat-capuche-rouge-brode-ours-muspelheim-detail.webp"
                    alt="Zoom sur la broderie de l'Ours de Muspelheim"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 bg-primary text-white text-[8px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                    Zoom Broderie
                  </div>
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-gray-900">
                      Ours de Muspelheim
                    </h4>
                    <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-widest mt-0.5">
                      Broderie d'Entreprise
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


