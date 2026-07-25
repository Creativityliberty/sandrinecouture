import { SchemaOrgBreadcrumb } from "@/components/layout/schema-org";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Questions Fréquentes | FAQ",
  description: "Des questions sur les délais, tarifs, broderies de logos ou textiles éligibles ? Retrouvez toutes les réponses de l'atelier By Sandrine Couture.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaOrgBreadcrumb
        items={[
          { name: "Accueil", url: "https://sandrinecouture.com" },
          { name: "FAQ", url: "https://sandrinecouture.com/faq" },
        ]}
      />
      {children}
    </>
  );
}
