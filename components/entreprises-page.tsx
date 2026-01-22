import {
  Bed,
  CheckCircle2,
  Info,
  Layout,
  MapPin,
  MessageSquare,
  Package,
  PartyPopper,
  Phone,
  Scissors,
  Store,
  Utensils,
  Wrench,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export function EntreprisesPage() {
  const sectors = [
    {
      icon: Utensils,
      name: "Restaurants & métiers de bouche",
      slug: "restaurant",
    },
    { icon: Bed, name: "Hôtels / accueil / entretien", slug: "hotel" },
    { icon: Wrench, name: "Artisans, BTP, garages", slug: "artisans" },
    { icon: Store, name: "Boulangeries / traiteurs", slug: "boulangerie" },
    {
      icon: Scissors,
      name: "Salons coiffure / esthétique",
      slug: "esthetique",
    },
    {
      icon: PartyPopper,
      name: "Événementiel / assos / clubs",
      slug: "evenement",
    },
  ];

  const products = [
    "Polos brodés",
    "T-shirts personnalisés",
    "Sweats / hoodies brodés",
    "Tabliers brodés",
    "Patchs brodés (cousus ou velcro)",
  ];

  const placements = [
    { title: "Logo cœur", desc: "Le plus demandé", badge: "Classique" },
    { title: "Manche", desc: "Détail premium discret", badge: "Premium" },
    { title: "Nuque", desc: "Très élégant & moderne", badge: "Chic" },
    {
      title: "Grand dos",
      desc: "Impact & visibilité maximale",
      badge: "Impact",
    },
  ];

  const packs = [
    {
      name: "STARTER",
      target: "Idéal : petites équipes / artisans",
      features: ["Série courte", "Logo cœur", "Finition propre et durable"],
      variant: "outline",
    },
    {
      name: "TEAM",
      target: "Idéal : PME / équipe complète",
      features: ["Série moyenne", "Options manche/nuque", "Contrôle qualité"],
      variant: "primary",
    },
    {
      name: "PREMIUM",
      target: "Idéal : image de marque luxe",
      features: [
        "Multi-articles",
        "Patch velcro possible",
        "Accompagnement complet",
      ],
      variant: "outline",
    },
  ];

  return (
    <div className="pt-32 animate-in fade-in duration-700">
      {/* HERO SECTION */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center text-center lg:text-left">
          <div className="animate-in slide-in-from-left-8 duration-1000 flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 glass rounded-full text-[9px] font-black tracking-widest uppercase text-primary mb-6">
              <MapPin className="w-3 h-3" />
              <span>Robertot (76560) • Normandie • Livraison France</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-black tracking-tighter mb-6 italic leading-[0.9] uppercase">
              Uniformes brodés <br />
              <span className="text-primary not-italic">pour entreprises</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 font-bold mb-6 italic uppercase tracking-tighter leading-tight">
              Une image d’équipe professionnelle, durable et cohérente.
            </p>
            <p className="text-base text-gray-500 mb-8 leading-relaxed max-w-xl font-medium">
              Restaurants, artisans, hôtels, salons, clubs… Je personnalise vos
              tenues avec une broderie nette et résistante : logo, patch, prénom
              ou fonction. L’objectif : une finition propre, lisible, qui dure
              dans le temps.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10 py-5 border-y border-black/5">
              {[
                "Devis rapide",
                "Travail soigné",
                "Facture pro",
                "Livraison",
              ].map((check, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-primary"
                >
                  <CheckCircle2 size={14} /> <span>{check}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <Link href="/devis?type=entreprise">
                <Button
                  variant="whatsapp"
                  size="lg"
                  className="h-12 px-6 rounded-full shadow-xl uppercase text-[10px] font-bold tracking-widest w-full flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Demander un devis
                </Button>
              </Link>
              <Link href="/#réalisations">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 px-6 rounded-full uppercase text-[10px] font-bold tracking-widest w-full"
                >
                  Réalisations
                </Button>
              </Link>
            </div>
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-tight italic">
              Vous remplissez le devis → WhatsApp s’ouvre avec un message
              complet prêt à envoyer.
            </p>
          </div>

          <div className="relative group hidden lg:block">
            <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-3xl" />
            <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-[10px] border-white">
              <img
                src="/images/realisations/2b-couverture-collection-2.webp"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                alt="Uniformes 2B Couverture - Collection professionnelle"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 glass p-6 rounded-2xl border-white/40 text-white">
                <p className="text-xs uppercase font-black tracking-widest text-primary mb-1">
                  Qualité Pro
                </p>
                <p className="text-xl font-bold italic">
                  "La tenue qui soude vos équipes."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: POUR QUI ? */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter italic uppercase mb-4">
              Pour quels types d’entreprises ?
            </h2>
            <p className="text-muted-foreground font-medium uppercase tracking-tighter text-sm italic">
              Les demandes les plus fréquentes en broderie professionnelle.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((s, i) => (
              <div
                key={i}
                className="bento-card glass p-8 group hover:bg-primary hover:text-white transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-white/20">
                  <s.icon className="text-primary group-hover:text-white w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-2 italic">
                  {s.name}
                </h3>
                <p className="text-sm opacity-60 font-medium">
                  Personnalisation adaptée à votre métier.
                </p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-sm font-bold uppercase tracking-widest text-muted-foreground/50 italic">
            Vous n’êtes pas dans la liste ? Aucun souci : on adapte selon votre
            besoin.
          </p>
        </div>
      </section>

      {/* SECTION 2 & 3: PRODUITS & PLACEMENTS */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter italic uppercase mb-8">
              Articles brodés <br />
              <span className="text-primary not-italic">pour vos équipes</span>
            </h2>
            <div className="space-y-4 mb-12">
              {products.map((p, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-black/5 shadow-sm group hover:border-primary/50 transition-all"
                >
                  <Package className="text-primary w-5 h-5" />
                  <span className="font-bold uppercase tracking-widest text-xs">
                    {p}
                  </span>
                </div>
              ))}
            </div>
            <p className="p-4 bg-primary/5 rounded-xl border border-primary/20 text-[10px] font-black uppercase tracking-widest text-primary italic flex items-center gap-3">
              <Info size={14} /> Je peux broder sur vos textiles ou vous
              proposer une solution selon le projet.
            </p>
          </div>

          <div className="bg-black text-white p-10 md:p-16 rounded-[3rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
            <h2 className="text-3xl font-black tracking-tighter italic uppercase mb-12 text-primary">
              Placement du logo & options
            </h2>
            <div className="space-y-8 mb-12">
              {placements.map((pl, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border-b border-white/10 pb-6 group"
                >
                  <div>
                    <h4 className="font-bold italic text-lg">{pl.title}</h4>
                    <p className="text-xs text-white/50">{pl.desc}</p>
                  </div>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-[8px] font-black uppercase tracking-widest group-hover:bg-primary transition-colors">
                    {pl.badge}
                  </span>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                <CheckCircle2 size={12} className="text-primary" /> Ajout prénom
                / fonction
              </div>
              <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                <CheckCircle2 size={12} className="text-primary" /> Patch velcro
                vêtements travail
              </div>
            </div>
            <p className="mt-12 text-[10px] font-black uppercase tracking-[0.2em] text-primary bg-primary/10 p-4 rounded-xl text-center italic flex items-center justify-center gap-2">
              <Info size={14} /> Votre logo est optimisé avant broderie pour un
              rendu propre et lisible.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: PACKS ENTREPRISE */}
      <section className="py-24 px-6 bg-pink-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter italic uppercase mb-4">
              Packs entreprise
            </h2>
            <p className="text-muted-foreground font-medium uppercase tracking-tighter text-sm italic">
              Idéal pour démarrer rapidement avec une base claire.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packs.map((pack, i) => (
              <div
                key={i}
                className={`p-10 rounded-[2.5rem] border flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 ${
                  i === 1
                    ? "bg-primary text-white border-primary shadow-2xl scale-105 z-10"
                    : "bg-white border-black/5"
                }`}
              >
                <div>
                  <h4 className="text-4xl font-black tracking-tighter mb-2 italic uppercase">
                    {pack.name}
                  </h4>
                  <p
                    className={`text-[10px] uppercase tracking-widest font-black mb-8 ${i === 1 ? "text-white/70" : "text-primary"}`}
                  >
                    {pack.target}
                  </p>
                  <ul className="space-y-4 mb-12 list-none p-0">
                    {pack.features.map((f, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-3 text-sm font-bold italic"
                      >
                        <CheckCircle2
                          size={16}
                          className={i === 1 ? "text-white" : "text-primary"}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/devis" className="no-underline">
                  <Button
                    variant={i === 1 ? "ghost" : "primary"}
                    className={`w-full h-14 uppercase text-[10px] tracking-widest font-black ${i === 1 ? "bg-white text-primary hover:bg-white/95" : ""}`}
                  >
                    {i === 2 ? "Demander un devis" : "Choisir ce pack"}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 font-black italic uppercase tracking-tighter text-2xl">
            👉 Vous voulez une config sur mesure ?{" "}
            <span className="text-primary not-italic">On le fait.</span>
          </p>
        </div>
      </section>

      {/* SECTION 5: PROCESS */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter italic uppercase mb-16 text-center">
            Comment se déroule une commande ?
          </h2>
          <div className="space-y-12 relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-black/5 hidden md:block" />
            {[
              {
                t: "Briefing",
                d: "Vous envoyez : logo + quantité + article(s)",
              },
              { t: "Devis", d: "Je vous réponds avec un devis clair sous 24h" },
              {
                t: "Validation",
                d: "Validation + acompte (si nécessaire) pour lancer la programmation",
              },
              { t: "Production", d: "Broderie artisanale soignée à Robertot" },
              {
                t: "Livraison",
                d: "Livraison ou retrait direct selon votre localisation",
              },
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-8 relative z-10">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-black text-xl shrink-0 shadow-lg shadow-primary/20">
                  {i + 1}
                </div>
                <div className="pt-3">
                  <h4 className="text-xl font-bold uppercase italic tracking-tight mb-2">
                    {step.t}
                  </h4>
                  <p className="text-muted-foreground font-medium">{step.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 grid md:grid-cols-2 gap-6">
            <div className="p-8 glass rounded-[2rem] flex items-center gap-6">
              <Zap className="text-primary w-8 h-8" />
              <div>
                <p className="text-2xl font-black italic">~10 JOURS</p>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-50">
                  Délai moyen constaté
                </p>
              </div>
            </div>
            <div className="p-8 glass rounded-[2rem] flex items-center gap-6">
              <Layout className="text-primary w-8 h-8" />
              <div>
                <p className="text-2xl font-black italic">FACTURE PRO</p>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-50">
                  Disponible pour entreprises
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CONSEIL */}
      <section className="py-24 px-6 bg-black text-white rounded-[4rem] mx-6 mb-24 overflow-hidden relative text-center">
        <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full translate-x-1/2" />
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter italic uppercase mb-8">
            Besoin d’un conseil ?
          </h2>
          <p className="text-xl text-white/50 mb-12 font-medium leading-relaxed">
            Vous hésitez sur le placement ou le textile ? Pas de souci.
            Dites-moi votre activité + le rendu souhaité (discret ou visible),
            et je vous conseille la meilleure option.
          </p>
          <Link href="/devis" className="no-underline">
            <Button
              variant="whatsapp"
              size="lg"
              className="h-20 px-12 rounded-full uppercase text-[10px] font-black tracking-widest shadow-2xl"
            >
              <MessageSquare className="mr-3 w-5 h-5" /> Demander conseil sur
              WhatsApp
            </Button>
          </Link>
        </div>
      </section>

      {/* SECTION 7: ZONE & SEO */}
      <section className="py-24 px-6 border-t border-black/5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-black italic uppercase mb-4">
            Normandie & livraison France
          </h2>
          <p className="text-muted-foreground mb-12 font-medium">
            Atelier basé à Robertot (76560). Je travaille avec des entreprises
            en Normandie et partout en France.
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
            {[
              "Broderie Normandie",
              "Seine-Maritime 76",
              "Rouen",
              "Le Havre",
            ].map((link, i) => (
              <a
                key={i}
                href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                className="text-sm font-black uppercase tracking-[0.2em] text-black/30 hover:text-primary transition-colors no-underline"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8 italic uppercase leading-[0.85]">
            Demandez votre <br />
            <span className="text-primary not-italic">devis en 1 minute</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/devis" className="no-underline">
              <Button
                variant="whatsapp"
                size="lg"
                className="h-16 px-10 rounded-full uppercase text-[9px] font-black tracking-widest"
              >
                Devis entreprise WhatsApp
              </Button>
            </Link>
            <Button
              onClick={() => (window.location.href = "tel:+33629492213")}
              variant="outline"
              size="lg"
              className="h-16 px-10 rounded-full uppercase text-[9px] font-black tracking-widest"
            >
              <Phone className="mr-2 w-4 h-4" /> 06 29 49 22 13
            </Button>
          </div>
          <p className="mt-8 text-[9px] font-black uppercase tracking-widest text-muted-foreground italic">
            Logo + article + quantité + délai = devis rapide.
          </p>
        </div>
      </section>
    </div>
  );
}
