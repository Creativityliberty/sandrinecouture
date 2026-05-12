import { MetadataRoute } from "next";

const baseUrl = "https://bysandrinecouture.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
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

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
