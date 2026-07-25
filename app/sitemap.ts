import { MetadataRoute } from "next";
import { CITIES_CONFIG } from "@/lib/local-seo-data";

const baseUrl = "https://sandrinecouture.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes = [
    "",
    "/entreprises",
    "/particuliers",
    "/realisations",
    "/devis",
    "/contact",
    "/faq",
    "/blog",
    "/mentions-legales",
    "/cgv",
    "/confidentialite",
  ];

  const cityRoutes = Object.keys(CITIES_CONFIG).map((city) => `/broderie-${city}`);
  const allRoutes = [...baseRoutes, ...cityRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route.startsWith("/broderie-") ? 0.6 : (route === "" ? 1.0 : 0.8),
  }));
}

