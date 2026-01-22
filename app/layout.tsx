import type { Metadata } from "next";
import "./globals.css";
import {
  SchemaOrgOrganization,
  SchemaOrgLocalBusiness,
} from "@/components/schema-org";

export const metadata: Metadata = {
  title: "By Sandrine Couture | Broderie d'Excellence en Normandie",
  description:
    "Personnalisation textile haut de gamme pour entreprises et particuliers à Robertot, Normandie. Uniformes pro et cadeaux de naissance uniques.",
  keywords:
    "broderie, personnalisation textile, uniformes professionnels, cadeaux naissance, Normandie, Robertot",
  authors: [{ name: "By Sandrine Couture" }],
  creator: "By Sandrine Couture",
  publisher: "By Sandrine Couture",
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    title: "By Sandrine Couture | Broderie d'Excellence en Normandie",
    description:
      "Artisanat Normand : Donnez vie à vos textiles avec une broderie durable et de précision.",
    url: "https://bysandrinecouture.fr/",
    siteName: "By Sandrine Couture",
    images: [
      {
        url: "https://bysandrinecouture.fr/og.jpg",
        width: 1200,
        height: 630,
        alt: "By Sandrine Couture - Broderie d'Excellence",
        type: "image/jpeg",
      },
    ],
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "By Sandrine Couture | Broderie d'Excellence",
    description:
      "Personnalisation textile haut de gamme pour entreprises et particuliers",
    images: ["https://bysandrinecouture.fr/og.jpg"],
  },
  alternates: {
    canonical: "https://bysandrinecouture.fr/",
  },
};

export const viewport: Metadata = {
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
