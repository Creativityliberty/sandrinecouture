import {
  SchemaOrgLocalBusiness,
  SchemaOrgOrganization,
} from "@/components/layout/schema-org";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bysandrinecouture.fr"),
  title: {
    default: "By Sandrine Couture | Broderie d'Excellence en Normandie",
    template: "%s | By Sandrine Couture",
  },
  description:
    "Atelier de broderie d'excellence à Robertot, Normandie. Personnalisation textile haut de gamme pour entreprises (uniformes, branding) et particuliers (cadeaux de naissance uniques).",
  keywords: [
    "broderie",
    "personnalisation textile",
    "uniformes professionnels",
    "cadeaux naissance",
    "Normandie",
    "Robertot",
    "broderie sur mesure",
    "artisanat français",
  ],
  authors: [{ name: "By Sandrine Couture" }],
  creator: "By Sandrine Couture",
  publisher: "By Sandrine Couture",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "By Sandrine Couture | Broderie d'Excellence en Normandie",
    description:
      "Artisanat Normand : Donnez vie à vos textiles avec une broderie durable et de précision pour pros et particuliers.",
    url: "https://bysandrinecouture.fr/",
    siteName: "By Sandrine Couture",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "By Sandrine Couture - Broderie d'Excellence",
      },
    ],
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "By Sandrine Couture | Broderie d'Excellence",
    description:
      "Personnalisation textile haut de gamme pour entreprises et particuliers en Normandie.",
    images: ["/og.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <SchemaOrgOrganization />
        <SchemaOrgLocalBusiness />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
