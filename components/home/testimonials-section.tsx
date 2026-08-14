import { Star, Award, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ophélie Cavelier",
      role: "Cliente Particulier",
      company: "Avis Google",
      text: "J’ai eu la chance de faire réaliser deux broderies personnalisées chez Sandrine, et je ne peux que la recommander ! C’est une personne adorable, passionnée et très à l’écoute. Elle a su comprendre exactement ce que j’avais en tête et le résultat est tout simplement magnifique. En plus de son immense gentillesse, elle travaille avec beaucoup de soin et de rapidité : j’ai reçu mes broderies très vite. C’est un vrai plaisir de rencontrer une personne aussi investie dans son travail. Encore un immense merci, je reviendrai avec grand plaisir !",
      rating: 5,
      image: "/images/avatars/ophelie.jpg"
    },
    {
      name: "Arthur Lbs",
      role: "Client",
      company: "Avis Google",
      text: "Qualité de broderie au top. Travail de précision soigné et soignabilité exemplaire. Sandrine a su répondre parfaitement à mes attentes avec des finitions impeccables.",
      rating: 5,
      image: "/images/avatars/arthur.jpg"
    },
    {
      name: "Chloé Larchevesque",
      role: "Maman",
      company: "Avis Google",
      text: "Je suis très contente pour la création du premier cartable de ma fille pour sa rentrée scolaire. Les détails sont magnifiques, j'adore le travail réalisé. Encore merci !",
      rating: 5,
      image: "/images/avatars/chloe.jpg"
    },
    {
      name: "Nadège Lobjois",
      role: "Cliente",
      company: "Avis Google",
      text: "Très satisfaite de la gigoteuse faite par Sandrine pour ma petite fille. Je recommande à 100% ! Merci encore pour la rapidité d'exécution et la qualité irréprochable du produit.",
      rating: 5,
      image: "/images/avatars/nadege.jpg"
    },
    {
      name: "Kehlani Lauthner",
      role: "Local Guide",
      company: "Avis Google",
      text: "Je recommande vivement, j’ai commandé à plusieurs reprises : serviettes d'invités mains brodées, carnet de santé personnalisé pour une naissance, etc. Un travail d'une grande finesse et envoi rapide.",
      rating: 5,
      image: "/images/avatars/kehlani.jpg"
    },
    {
      name: "Angélique Justin",
      role: "Cliente",
      company: "Avis Google",
      text: "Atelier de broderie d'une grande qualité et accueil très chaleureux. Sandrine est à l'écoute des besoins et propose un travail méticuleux et rapide. Je recommande vivement !",
      rating: 5,
      image: "/images/avatars/angelique.jpg"
    },
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-gray-50/50">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-1/3 right-0 -z-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[130px] animate-pulse duration-5000" />
      <div className="absolute bottom-10 left-0 -z-10 w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-black/5 rounded-full text-[9px] font-black tracking-widest uppercase text-primary mb-4 shadow-sm">
            <Award className="w-3.5 h-3.5 text-primary" />
            <span>Artisanat local d'excellence</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.95] text-gray-900 mb-6">
            ILS PARLENT DE NOS<br />
            <span className="text-primary font-serif italic normal-case lg:text-7xl">Créations.</span>
          </h2>
          
          <div className="flex items-center gap-2 mt-2 bg-white px-5 py-2.5 rounded-2xl border border-black/5 shadow-sm">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-amber-450 text-amber-450" style={{ fill: "#fbbf24", color: "#fbbf24" }} />
              ))}
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-800">
              Note moyenne : 5/5 sur Google Reviews
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/40 backdrop-blur-xl border border-white/50 p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_60px_rgba(233,30,99,0.06)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Stars */}
                <div className="flex gap-0.5 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-amber-450 text-amber-450"
                      style={{ fill: "#fbbf24", color: "#fbbf24" }}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 text-xs font-semibold leading-relaxed mb-8 italic">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Author */}
              <div className="border-t border-black/5 pt-6 mt-auto">
                <div className="flex items-center gap-3">
                  {/* Realistic Avatar Image */}
                  <div className="w-10 h-10 rounded-full border border-black/10 overflow-hidden bg-gray-50 shrink-0 shadow-sm">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-black uppercase text-xs tracking-wider text-gray-900 leading-tight">
                      {testimonial.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-2 text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-1">
                      <span>{testimonial.role}</span>
                      <span className="text-black/20 font-light">•</span>
                      <span className="text-primary font-black">{testimonial.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-8 bg-white/60 backdrop-blur-md rounded-3xl border border-white/40 shadow-sm text-center">
            <p className="text-4xl font-black tracking-tighter text-primary mb-1">500+</p>
            <h3 className="text-[9px] font-black uppercase tracking-widest text-gray-500">
              Clients satisfaits
            </h3>
          </div>
          <div className="p-8 bg-white/60 backdrop-blur-md rounded-3xl border border-white/40 shadow-sm text-center">
            <p className="text-4xl font-black tracking-tighter text-primary mb-1">10 ans</p>
            <h3 className="text-[9px] font-black uppercase tracking-widest text-gray-500">
              D'expérience artisanale
            </h3>
          </div>
          <div className="p-8 bg-white/60 backdrop-blur-md rounded-3xl border border-white/40 shadow-sm text-center">
            <p className="text-4xl font-black tracking-tighter text-primary mb-1">5/5</p>
            <h3 className="text-[9px] font-black uppercase tracking-widest text-gray-500">
              Note moyenne globale
            </h3>
          </div>
        </div>

        {/* Google Review CTA */}
        <div className="mt-20 flex flex-col items-center text-center">
          <a
            href={SITE_CONFIG.googleReview || "https://g.page/r/bysandrinecouture/review"}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline inline-flex group"
          >
            <Button
              size="lg"
              className="h-14 px-8 rounded-full uppercase text-[9px] tracking-widest font-black shadow-lg bg-black hover:bg-neutral-800 text-white flex items-center justify-center gap-2 group-hover:scale-105 transition-transform"
            >
              <span>Partager votre expérience</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </a>
          <p className="mt-4 text-[9px] text-gray-500 font-bold uppercase tracking-widest">
            Votre soutien sur Google nous aide à faire rayonner l'artisanat normand
          </p>
        </div>
      </div>
    </section>
  );
}
