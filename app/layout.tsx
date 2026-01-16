import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "By Sandrine Couture | Broderie d'Excellence en Normandie",
    description: "Personnalisation textile haut de gamme pour entreprises et particuliers à Robertot, Normandie. Uniformes pro et cadeaux de naissance uniques.",
    openGraph: {
        title: "By Sandrine Couture | Broderie d'Excellence",
        description: "Artisanat Normand : Donnez vie à vos textiles avec une broderie durable et de précision.",
        url: "https://bysandrinecouture.fr/",
        images: ["/og.jpg"],
        type: "website",
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
            <body className="antialiased" suppressHydrationWarning>{children}</body>
        </html>
    );
}
