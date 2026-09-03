import { MetadataRoute } from "next";
import { CITIES_CONFIG } from "@/lib/local-seo-data";
import { BLOG_POSTS } from "@/lib/blog-data";
import { SITE_CONFIG } from "@/lib/site-config";

const baseUrl = "https://sandrinecouture.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/boutique", priority: 0.9, changeFrequency: "daily" as const },
    { path: "/entreprises", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/particuliers", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/realisations", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/devis", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/mentions-legales", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/cgv", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/confidentialite", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  // City landing pages
  const cityRoutes = Object.keys(CITIES_CONFIG).map((city) => ({
    url: `${baseUrl}/broderie-${city}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Sector landing pages
  const sectorRoutes = SITE_CONFIG.seo.sectors.map((s) => ({
    url: `${baseUrl}/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Blog articles
  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date || Date.now()),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const standardRoutes = baseRoutes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  return [...standardRoutes, ...cityRoutes, ...sectorRoutes, ...blogRoutes];
}
