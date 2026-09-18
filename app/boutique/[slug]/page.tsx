import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS_CATALOG } from "@/lib/products-catalog";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ProductView } from "@/components/boutique/product-view";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PRODUCTS_CATALOG.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS_CATALOG.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Produit non trouvé | By Sandrine Couture",
      description: "Cette création n'est plus disponible ou a été déplacée.",
    };
  }

  const siteUrl = "https://sandrinecouture.com";
  const canonicalUrl = `${siteUrl}/boutique/${product.slug}`;
  const fullImageUrl = product.imgUrl.startsWith("http") 
    ? product.imgUrl 
    : `${siteUrl}${product.imgUrl}`;

  const metaTitle = `${product.title} • Création Fait Main Normandie | By Sandrine Couture`;
  const metaDescription = `${product.description} Confectionné artisanalement à Robertot (76). Personnalisation prénom disponible. Expédition rapide 48h.`;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      siteName: "By Sandrine Couture - Atelier de Broderie & Couture Normandie",
      images: [
        {
          url: fullImageUrl,
          width: 800,
          height: 800,
          alt: `${product.title} - By Sandrine Couture`,
        },
      ],
      locale: "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [fullImageUrl],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS_CATALOG.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const siteUrl = "https://sandrinecouture.com";
  const productUrl = `${siteUrl}/boutique/${product.slug}`;
  const fullImageUrl = product.imgUrl.startsWith("http") 
    ? product.imgUrl 
    : `${siteUrl}${product.imgUrl}`;

  const jsonLdProduct = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.title,
    "image": [fullImageUrl],
    "description": product.description,
    "sku": product.slug,
    "mpn": `BSC-${product.id}`,
    "brand": {
      "@type": "Brand",
      "name": "By Sandrine Couture",
    },
    "category": product.category,
    "offers": {
      "@type": "Offer",
      "url": productUrl,
      "priceCurrency": "EUR",
      "price": product.price.toFixed(2),
      "priceValidUntil": "2027-12-31",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "LocalBusiness",
        "name": "By Sandrine Couture",
        "telephone": "+33624021287",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Atelier Robertot",
          "addressLocality": "Robertot",
          "postalCode": "76560",
          "addressRegion": "Normandie",
          "addressCountry": "FR",
        },
      },
    },
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": siteUrl,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Boutique",
        "item": `${siteUrl}/boutique`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.title,
        "item": productUrl,
      },
    ],
  };

  return (
    <>
      {/* Schema.org Product & Breadcrumb JSON-LD for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      <Navbar />
      <main>
        <ProductView product={product} />
      </main>
      <Footer />
    </>
  );
}
