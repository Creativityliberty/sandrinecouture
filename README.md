# By Sandrine Couture - Broderie d'Excellence

Artisanat d'exception en Normandie. Spécialiste de la broderie personnalisée pour entreprises et particuliers.

## 🚀 À propos du projet

Ce site est une vitrine premium pour l'atelier **By Sandrine Couture**, situé à Robertot (76560). Il met en avant le savoir-faire artisanal de Sandrine, allant de l'uniforme professionnel aux cadeaux de naissance personnalisés.

## 🛠 Stack Technique

- **Framework:** [Next.js 16+ (App Router)](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/) & Custom "Liquid Glass" components
- **Icons:** [Lucide React](https://lucide.dev/)
- **SEO:** Optimisation avancée (JSON-LD, Dynamic Sitemaps, OpenGraph)

## 📁 Structure du Projet

```text
/app             # Routes Next.js (Server Components par défaut)
/components      # Composants React réutilisables
  /home          # Sections spécifiques à la page d'accueil
  /layout        # Composants de structure (Navbar, Footer, etc.)
  /pages         # Composants principaux de chaque page
  /ui            # Composants atomiques (Boutons, Inputs, etc.)
/lib             # Logique métier, données et utilitaires
/public          # Assets statiques (Images, Icons, Fonts)
/docs            # Documentation, design memos et références
/scripts         # Scripts utilitaires pour le développement
```

## 📈 Stratégie SEO

Le projet suit les standards SEO 2026 :
- **Dynamic Sitemaps:** Génération automatique via `app/sitemap.ts`.
- **Structured Data:** Utilisation massive de JSON-LD (`Organization`, `LocalBusiness`, `BreadcrumbList`).
- **Semantic HTML:** Hiérarchie de titres (H1-H6) optimisée pour le crawl.
- **Performance:** Images optimisées (WebP) et chargement différé.

## 🛠 Installation & Développement

1. Installer les dépendances :
   ```bash
   npm install
   ```

2. Lancer le serveur de développement :
   ```bash
   npm run dev
   ```

3. Construire pour la production :
   ```bash
   npm run build
   ```

## ✉️ Contact

- **Atelier:** Robertot, 76560, Normandie
- **Email:** bysandrinecouture@gmail.com
- **Web:** [sandrinecouture.com](https://sandrinecouture.com)
