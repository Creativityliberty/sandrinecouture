import type { Metadata } from "next";
import { OurletsServicePage } from "@/components/pages/ourlets-service-page";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AIAssistant } from "@/components/layout/ai-assistant";
import { RevealOnScroll } from "@/components/effects/reveal-on-scroll";

export const metadata: Metadata = {
  title: "Service d'Ourlets & Retouches Vêtements en Ligne & Atelier (76) | By Sandrine Couture",
  description:
    "Faites retoucher vos jeans, pantalons de costume, robes et jupes avec précision dans notre atelier normand à Robertot (76). Finition point invisible et d'origine, expédition France (Mondial Relay, Colissimo) ou dépôt sur place. Dès 12 €.",
  keywords: [
    "retouche ourlet pantalon",
    "ourlet jean",
    "ourlet invisible costume",
    "retouche couture en ligne",
    "couturiere ourlet normandie",
    "couturiere robertot",
    "retouche vetement yvetot",
    "ourlet robe jupe",
    "couture sur mesure seine-maritime"
  ],
  alternates: {
    canonical: "/services/ourlets",
  },
  openGraph: {
    title: "Service d'Ourlets & Retouches Vêtements | By Sandrine Couture Normandie",
    description:
      "Ajustement parfait au millimètre. Jeans, pantalons de costume, robes et jupes retouchés avec soin artisanal à Robertot. Expédition toute France.",
    url: "https://sandrinecouture.com/services/ourlets",
    siteName: "By Sandrine Couture",
    images: [
      {
        url: "/images/hero/hero-services-ourlets.webp",
        width: 1200,
        height: 630,
        alt: "Atelier de retouche et confection d'ourlets By Sandrine Couture",
      },
    ],
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Service d'Ourlets & Retouches | By Sandrine Couture",
    description:
      "Ajustez vos pantalons, costumes et robes avec un tombé impeccable. Atelier normand, commande en ligne et envoi partout en France.",
    images: ["/images/hero/hero-services-ourlets.webp"],
  },
};

export default function Page() {
  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Service de Retouches & Ourlets Vêtements",
    serviceType: "Clothing Alteration Service",
    provider: {
      "@type": "LocalBusiness",
      name: "By Sandrine Couture",
      image: "https://sandrinecouture.com/images/hero/hero-services-ourlets.webp",
      telephone: "+33624021287",
      email: "contact@sandrinecouture.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Robertot",
        addressLocality: "Robertot",
        postalCode: "76560",
        addressRegion: "Normandie",
        addressCountry: "FR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 49.7153,
        longitude: 0.7425,
      },
      priceRange: "12€ - 50€",
    },
    areaServed: [
      {
        "@type": "State",
        name: "Normandie",
      },
      {
        "@type": "Country",
        name: "France",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Carte des Ourlets & Retouches",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "L'Essentiel — Ourlet Simple & Jean",
            description: "Ajustement de longueur avec surpiqûre ton sur ton ou fil or contrasté pour jean, chino et pantalon droit.",
          },
          price: "12.00",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Le Tailleur — Point Invisible Haute Tenue",
            description: "Ourlet invisible sans point apparent sur l'endroit, idéal pour pantalon de costume, tailleur et laine fine.",
          },
          price: "18.00",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Le Vestiaire Féminin — Robes & Jupes",
            description: "Ajustement de longueur pour jupes droites et robes avec finitions soignées.",
          },
          price: "18.00",
          priceCurrency: "EUR",
        },
      ],
    },
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Comment puis-je être sûr(e) de ne pas me tromper dans la mesure de l'ourlet ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Deux méthodes très simples : soit vous mettez une épingle à nourrice sur l'un des côtés du pantalon avec vos chaussures habituelles ; soit vous glissez dans le colis un autre pantalon dont la longueur vous convient parfaitement comme modèle.",
        },
      },
      {
        "@type": "Question",
        name: "Puis-je déposer directement mes vêtements à l'atelier en Normandie ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui ! Si vous êtes situé(e) près de Robertot, Yvetot, Doudeville ou Cany-Barville (76), vous pouvez choisir l'option Retrait / Dépôt Atelier lors de la commande.",
        },
      },
      {
        "@type": "Question",
        name: "Conservez-vous la couleur d'origine du fil sur les jeans ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, nous disposons d'une large palette de fils de coutellerie et tailleur (Madeira & Gütermann), incluant les fils spécifiques couleur or/tabac pour préserver le style originel des toiles denim.",
        },
      },
      {
        "@type": "Question",
        name: "Faites-vous les ourlets de rideaux ou de robes de mariée ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, ces prestations particulières font l'objet d'une étude sur mesure. Contactez-nous directement via notre formulaire de devis ou sur WhatsApp pour une estimation gratuite sous 24h.",
        },
      },
    ],
  };

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://sandrinecouture.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://sandrinecouture.com/services/ourlets",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Retouches & Ourlets",
        item: "https://sandrinecouture.com/services/ourlets",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
      
      <div className="relative min-h-screen font-sans selection:bg-primary/20 bg-white">
        <Navbar />
        <main>
          <RevealOnScroll direction="up" delay={50}>
            <OurletsServicePage />
          </RevealOnScroll>
        </main>
        <AIAssistant />
        <Footer />
      </div>
    </>
  );
}
