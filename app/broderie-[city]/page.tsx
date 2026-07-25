import { CITIES_CONFIG } from "@/lib/local-seo-data";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { SchemaOrgBreadcrumb } from "@/components/layout/schema-org";
import { MapPin, Truck, Award, ShieldCheck, CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  return Object.keys(CITIES_CONFIG).map((city) => ({
    city: city,
  }));
}

export async function generateMetadata(
  props: { params: Promise<{ city: string }> }
) {
  const params = await props.params;
  const cityConfig = CITIES_CONFIG[params.city];
  if (!cityConfig) {
    return {
      title: "Page introuvable",
    };
  }
  return {
    title: `Broderie Personnalisée à ${cityConfig.name} (${cityConfig.zip}) | By Sandrine Couture`,
    description: cityConfig.description,
    alternates: {
      canonical: `/broderie-${cityConfig.slug}`,
    },
  };
}

export default async function LocalLandingPage(
  props: { params: Promise<{ city: string }> }
) {
  const params = await props.params;
  const cityConfig = CITIES_CONFIG[params.city];

  if (!cityConfig) {
    notFound();
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://sandrinecouture.com/broderie-${cityConfig.slug}`,
    "name": `By Sandrine Couture - Broderie ${cityConfig.name}`,
    "url": `https://sandrinecouture.com/broderie-${cityConfig.slug}`,
    "telephone": "+33629492213",
    "email": "bysandrinecouture@gmail.com",
    "priceRange": "$$",
    "image": "https://sandrinecouture.com/logo-sandrine.webp",
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": `${cityConfig.name}, ${cityConfig.department}`
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Robertot",
      "addressLocality": "Robertot",
      "postalCode": "76560",
      "addressRegion": "Normandie",
      "addressCountry": "FR"
    }
  };

  const localFaqs = [
    {
      q: `Comment faire broder mon logo d'entreprise à ${cityConfig.name} ?`,
      a: "C'est très simple : envoyez-nous votre logo via le formulaire de devis ou WhatsApp. Nous réalisons sa numérisation professionnelle pour obtenir un fichier de broderie parfait, puis nous vous envoyons un aperçu (BAT) pour validation avant de lancer la production."
    },
    {
      q: `Quels sont les délais de livraison pour la zone de ${cityConfig.name} ?`,
      a: `${cityConfig.deliveryText} Si votre commande est urgente, n'hésitez pas à nous le signaler par WhatsApp pour adapter notre planning de production.`
    },
    {
      q: "Proposez-vous un service pour les particuliers (cadeau de naissance, prénom) ?",
      a: "Absolument. Nous personnalisons à l'unité de nombreux articles : capes de bain, protège-carnets de santé, doudous et serviettes. C'est l'assurance d'offrir un cadeau de naissance unique et haut de gamme."
    }
  ];

  return (
    <div className="relative min-h-screen font-sans bg-white selection:bg-primary/20">
      {/* Schemas */}
      <SchemaOrgBreadcrumb
        items={[
          { name: "Accueil", url: "https://sandrinecouture.com" },
          { name: `Broderie ${cityConfig.name}`, url: `https://sandrinecouture.com/broderie-${cityConfig.slug}` }
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <Navbar />

      {/* HERO SECTION (Homepage Layout style) */}
      <section className="relative pt-32 pb-16 overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(233,30,99,0.03),transparent_50%)]" />

        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-7xl mx-auto text-center lg:text-left">
            <div className="flex flex-col items-center lg:items-start w-full">
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 inline-flex items-center gap-3 px-4 py-1.5 glass bg-white/40 rounded-full text-[9px] font-black tracking-widest uppercase text-primary mb-6">
                <MapPin className="w-3 h-3" />
                <span>Zone desservie : {cityConfig.name} ({cityConfig.zip}) • Normandie</span>
              </div>

              <h1 className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 fill-mode-backwards text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-black mb-5 leading-[0.9] tracking-tighter italic uppercase text-balance">
                Broderie <br />
                <span className="text-primary not-italic">à {cityConfig.name}.</span>
              </h1>

              <p className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-backwards text-base md:text-lg text-gray-800 font-bold mb-5 leading-tight italic uppercase tracking-tighter max-w-lg">
                Marquez votre image partout. Uniformes pro, textiles d'entreprise et cadeaux uniques.
              </p>

              <p className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-backwards text-sm text-gray-700 mb-6 leading-relaxed max-w-lg font-medium">
                Particulier ou professionnel basé à <span className="text-black font-bold">{cityConfig.name}</span>, notre atelier haut de gamme réalise vos personnalisations textiles avec un soin artisanal. Nous assurons la numérisation de vos logos et la livraison de proximité.
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

              <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700 fill-mode-backwards flex flex-col sm:flex-row gap-3 mb-6 w-full sm:w-auto">
                <Link href="/devis" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="h-12 px-6 rounded-full shadow-xl hover:scale-105 transition-all uppercase text-[10px] tracking-widest font-bold w-full sm:w-auto flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Demander un devis
                  </Button>
                </Link>
                <Link href="/realisations" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 px-6 rounded-full border-black/10 hover:bg-black hover:text-white transition-all uppercase text-[10px] tracking-widest font-bold w-full sm:w-auto"
                  >
                    Nos réalisations
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative group animate-in fade-in zoom-in duration-1000 delay-500 hidden lg:block w-full max-w-lg">
              <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-3xl group-hover:bg-primary/10 transition-all duration-700" />
              <div className="relative h-[550px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white transform transition-transform duration-700 hover:rotate-1">
                <img
                  src="/images/realisations/2b-couverture-collection-1.webp"
                  alt={`Uniformes brodés professionnels à ${cityConfig.name}`}
                  width={512}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 text-white glass p-5 rounded-2xl border-white/40 backdrop-blur-md">
                  <p className="text-sm font-bold italic mb-1 tracking-tight">
                    "Le détail qui fait la différence."
                  </p>
                  <p className="text-[8px] uppercase font-black tracking-[0.2em] opacity-70 text-primary">
                    Partenaire local à {cityConfig.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGISTICS & PROXIMITY SECTION */}
      <section className="py-24 bg-gray-50/50 border-y border-black/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black tracking-tighter italic uppercase mb-6">
                Artisanat normand, <br />
                <span className="text-primary not-italic">proximité immédiate.</span>
              </h2>
              <p className="text-gray-700 font-medium mb-6 leading-relaxed">
                Notre atelier de Robertot travaille en direct avec les clients de <strong>{cityConfig.name}</strong>. Nous assurons un suivi ultra-rapide et personnalisé pour chaque commande de marquage textile.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Truck className="text-primary" size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm mb-1">Livraison express</h3>
                    <p className="text-xs text-gray-700 font-medium">{cityConfig.deliveryText}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm mb-1">Atelier de proximité</h3>
                    <p className="text-xs text-gray-700 font-medium">{cityConfig.proximityText}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-3xl bg-white border border-black/5 flex flex-col justify-between h-44 shadow-sm">
                <ShieldCheck className="text-primary" size={24} />
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider mb-1">Fil durable</h4>
                  <p className="text-[11px] text-gray-700 font-medium">Broderies résistantes aux lavages fréquents.</p>
                </div>
              </div>
              <div className="p-6 rounded-3xl bg-black text-white border border-white/5 flex flex-col justify-between h-44 shadow-sm">
                <Award className="text-primary" size={24} />
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider mb-1 text-white/80">Premium</h4>
                  <p className="text-[11px] text-white/70 font-medium">Numérisation HD de vos logos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES BENTO (Adapted Home Layout) */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[9px] font-black uppercase tracking-widest text-primary mb-4 block">Nos Offres</span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tighter italic uppercase">
            Solutions Broderie à {cityConfig.name}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass p-10 rounded-[2.5rem] border-primary/5 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
            <div>
              <span className="text-[9px] font-black uppercase tracking-widest text-primary mb-4 block">Professionnels</span>
              <h3 className="text-2xl font-black italic uppercase mb-4">Broderie d'Entreprise</h3>
              <p className="text-sm text-gray-700 font-medium mb-6">
                Faites marquer vos vêtements de travail à {cityConfig.name} (polos, t-shirts, vestes, tabliers). La broderie est le marquage le plus résistant et le plus valorisant pour vos équipes et clients.
              </p>
            </div>
            <Link href="/entreprises" className="inline-flex items-center gap-2 text-primary font-bold uppercase text-[10px] tracking-wider no-underline hover:gap-3 transition-all">
              Découvrir la broderie pro <ArrowRight size={14} />
            </Link>
          </div>

          <div className="glass p-10 rounded-[2.5rem] border-primary/5 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
            <div>
              <span className="text-[9px] font-black uppercase tracking-widest text-primary mb-4 block">Particuliers</span>
              <h3 className="text-2xl font-black italic uppercase mb-4">Cadeaux Personnalisés</h3>
              <p className="text-sm text-gray-700 font-medium mb-6">
                Un cadeau de naissance à offrir à {cityConfig.name} ? Personnalisez un doudou, une couverture, une cape de bain ou un protège-carnet de santé avec le prénom de bébé.
              </p>
            </div>
            <Link href="/particuliers" className="inline-flex items-center gap-2 text-primary font-bold uppercase text-[10px] tracking-wider no-underline hover:gap-3 transition-all">
              Découvrir les cadeaux personnalisés <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* PORTFOLIO HIGHLIGHTS */}
      <section className="py-24 bg-gray-50/50 border-t border-black/5 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black tracking-tighter italic uppercase">
              Exemples de réalisations
            </h2>
            <p className="text-gray-700 font-medium text-sm mt-2">Découvrez la précision de nos points de broderie normands.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { src: "/images/realisations/poules-decoratives-brodees.webp", title: "Poules décoratives brodées" },
              { src: "/images/realisations/protege-carnet-sante-vert-brode.webp", title: "Protège carnet de santé" },
              { src: "/images/realisations/broderie-vetement-professionnel-entreprise-duha-loc-sandrine-couture-normandie.webp", title: "Broderie vêtement pro" }
            ].map((img, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden shadow-md h-64 border border-black/5">
                <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-4">
                  <span className="text-white text-xs font-bold uppercase tracking-wider">{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL FAQ SECTION */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black tracking-tighter italic uppercase">
            FAQ Broderie {cityConfig.name}
          </h2>
        </div>

        <div className="space-y-6">
          {localFaqs.map((faq, index) => (
            <div key={index} className="p-6 rounded-2xl border border-black/5 bg-white shadow-sm">
              <h3 className="font-bold text-base italic uppercase tracking-tight text-black mb-3">{faq.q}</h3>
              <p className="text-gray-700 text-sm leading-relaxed font-medium">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <div className="glass p-12 rounded-[3.5rem] border-primary/5">
          <h2 className="text-3xl font-black tracking-tighter italic uppercase mb-6">
            Prêt à lancer votre projet à {cityConfig.name} ?
          </h2>
          <p className="text-gray-700 font-medium mb-8 max-w-xl mx-auto">
            Contactez Sandrine pour toute demande de renseignements ou de devis gratuit de broderie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="no-underline">
              <Button size="lg" className="h-14 px-8 rounded-full uppercase text-[10px] tracking-widest font-black shadow-lg">
                Nous contacter
              </Button>
            </Link>
            <a href="tel:+33629492213" className="no-underline">
              <Button variant="outline" size="lg" className="h-14 px-8 rounded-full uppercase text-[10px] tracking-widest font-black">
                Appeler l'atelier
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
