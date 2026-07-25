import { CITIES_CONFIG } from "@/lib/local-seo-data";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { SchemaOrgBreadcrumb } from "@/components/layout/schema-org";
import { MapPin, Truck, Award, ShieldCheck, ChevronRight } from "lucide-react";
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

  // Local schema.org LocalBusiness with specific areaServed
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

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden bg-gradient-to-b from-primary/5 via-white to-white">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-[9px] font-black tracking-widest uppercase text-primary mb-8 border-primary/10">
            <MapPin className="w-3.5 h-3.5" />
            <span>Zone d'intervention : {cityConfig.name} ({cityConfig.zip})</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8 italic uppercase leading-[0.9]">
            Broderie Personnalisée <br />
            <span className="text-primary not-italic">à {cityConfig.name}.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto font-medium mb-12">
            Professionnels ou particuliers à {cityConfig.name} et ses alentours, donnez vie à vos projets textiles avec une broderie haut de gamme, durable et fabriquée localement en Normandie.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/devis" className="no-underline">
              <Button size="lg" className="h-14 px-8 rounded-full uppercase text-[10px] tracking-widest font-black shadow-lg shadow-primary/20">
                Demander un devis gratuit
              </Button>
            </Link>
            <Link href="/realisations" className="no-underline">
              <Button variant="outline" size="lg" className="h-14 px-8 rounded-full uppercase text-[10px] tracking-widest font-black">
                Voir nos réalisations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Local Information */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-black tracking-tighter italic uppercase">
              Votre artisan de proximité <br />
              <span className="text-primary not-italic">en Seine-Maritime</span>
            </h2>
            
            <p className="text-gray-700 font-medium leading-relaxed">
              Basé à Robertot, notre atelier de broderie dessert directement la ville de <strong>{cityConfig.name}</strong> et l'ensemble du département. Nous offrons des solutions sur mesure adaptées aux besoins locaux de personnalisation de textile.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Truck className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1">Livraison et Retrait</h3>
                  <p className="text-sm text-gray-700 font-medium">{cityConfig.deliveryText}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1">Proximité géographique</h3>
                  <p className="text-sm text-gray-700 font-medium">{cityConfig.proximityText}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[450px] rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-white">
            <img 
              src="/images/realisations/broderie-vetement-professionnel-entreprise-duha-loc-sandrine-couture-normandie.webp"
              alt={`Atelier de broderie pour ${cityConfig.name}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Services summary */}
      <section className="py-24 bg-primary/5 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter italic uppercase mb-4">
              Ce que nous brodons pour vous
            </h2>
            <p className="text-gray-700 font-medium max-w-xl mx-auto">
              Un savoir-faire de précision appliqué à tous types de textiles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pro */}
            <div className="glass p-10 rounded-[2.5rem] border-primary/5 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-black uppercase tracking-widest text-primary mb-4 block">B2B / Entreprises</span>
                <h3 className="text-2xl font-black italic uppercase mb-4">Textile Professionnel</h3>
                <p className="text-sm text-gray-700 font-medium mb-6">
                  Boostez l'image de marque de votre entreprise à {cityConfig.name} avec des uniformes, polos, sweats et tabliers marqués de votre logo. Idéal pour les restaurants, artisans, clubs et commerces.
                </p>
              </div>
              <Link href="/entreprises" className="inline-flex items-center gap-2 text-primary font-bold uppercase text-[10px] tracking-wider no-underline hover:gap-4 transition-all">
                Découvrir l'offre Pro <ChevronRight size={14} />
              </Link>
            </div>

            {/* Particuliers */}
            <div className="glass p-10 rounded-[2.5rem] border-primary/5 flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-black uppercase tracking-widest text-primary mb-4 block">B2C / Particuliers</span>
                <h3 className="text-2xl font-black italic uppercase mb-4">Cadeaux & Linge Unique</h3>
                <p className="text-sm text-gray-700 font-medium mb-6">
                  Offrez ou créez des pièces uniques : bavoirs brodés, doudous personnalisés avec prénom, capes de bain brodées et serviettes de bain originales pour toutes vos occasions à {cityConfig.name}.
                </p>
              </div>
              <Link href="/particuliers" className="inline-flex items-center gap-2 text-primary font-bold uppercase text-[10px] tracking-wider no-underline hover:gap-4 transition-all">
                Découvrir l'offre Particuliers <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Guarantee */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Award className="text-primary mb-4" size={32} />
            <h4 className="font-bold text-lg mb-2">Qualité Artisanale</h4>
            <p className="text-sm text-gray-700 font-medium">Chaque pièce est numérisée et brodée individuellement avec soin.</p>
          </div>
          <div className="flex flex-col items-center">
            <ShieldCheck className="text-primary mb-4" size={32} />
            <h4 className="font-bold text-lg mb-2">Fil Durable</h4>
            <p className="text-sm text-gray-700 font-medium">Nos broderies résistent aux lavages fréquents et conservent leur éclat.</p>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="text-primary mb-4" size={32} />
            <h4 className="font-bold text-lg mb-2">100% Normand</h4>
            <p className="text-sm text-gray-700 font-medium">Fabriqué localement à Robertot, en circuit de proximité.</p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <div className="glass p-12 rounded-[3.5rem] border-primary/5">
          <h2 className="text-3xl font-black tracking-tighter italic uppercase mb-6">
            Besoin d'une broderie à {cityConfig.name} ?
          </h2>
          <p className="text-gray-700 font-medium mb-8 max-w-xl mx-auto">
            Discutez de votre projet de personnalisation avec Sandrine et obtenez un devis gratuit sous 24h.
          </p>
          <Link href="/contact" className="no-underline">
            <Button size="lg" className="h-16 px-12 rounded-full uppercase text-[10px] tracking-widest font-black shadow-xl">
              Nous contacter maintenant
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
