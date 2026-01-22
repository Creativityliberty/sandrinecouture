export function SchemaOrgLocalBusiness() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://bysandrinecouture.fr/",
    name: "By Sandrine Couture",
    description:
      "Atelier de broderie d'excellence en Normandie. Spécialiste du textile professionnel et du cadeau de naissance personnalisé.",
    url: "https://bysandrinecouture.fr/",
    telephone: "+33629492213",
    email: "bysandrinecouture@gmail.com",
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
      latitude: "49.4769",
      longitude: "0.2192",
    },
    image: "https://bysandrinecouture.fr/logo-sandrine.png",
    priceRange: "$$",
    sameAs: [
      "https://instagram.com/bysandrinecouture",
      "https://facebook.com/bysandrinecouture",
    ],
    areaServed: {
      "@type": "GeoShape",
      name: "Normandie, France",
    },
    serviceType: [
      "Broderie personnalisée",
      "Uniformes professionnels",
      "Cadeaux de naissance",
      "Personnalisation textile",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function SchemaOrgOrganization() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "By Sandrine Couture",
    url: "https://bysandrinecouture.fr/",
    logo: "https://bysandrinecouture.fr/logo-sandrine.png",
    description: "Atelier de broderie d'excellence en Normandie",
    sameAs: [
      "https://instagram.com/bysandrinecouture",
      "https://facebook.com/bysandrinecouture",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+33629492213",
      email: "bysandrinecouture@gmail.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function SchemaOrgBreadcrumb(
  items: Array<{ name: string; url: string }>,
) {
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
    />
  );
}
