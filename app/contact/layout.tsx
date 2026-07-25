import { SchemaOrgBreadcrumb } from "@/components/layout/schema-org";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Devis de Broderie",
  description: "Contactez l'atelier By Sandrine Couture en Normandie. Demandez un devis personnalisé pour vos projets de broderie professionnelle ou de cadeaux de naissance.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaOrgBreadcrumb
        items={[
          { name: "Accueil", url: "https://sandrinecouture.com" },
          { name: "Contact", url: "https://sandrinecouture.com/contact" },
        ]}
      />
      {children}
    </>
  );
}
