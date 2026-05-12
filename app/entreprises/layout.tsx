import { SchemaOrgBreadcrumb } from "@/components/layout/schema-org";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions Broderie pour Entreprises",
  description:
    "Marquez l'esprit de vos clients avec une image de marque forte. Broderie sur uniformes, vêtements de travail et cadeaux d'affaires en Normandie.",
  alternates: {
    canonical: "/entreprises",
  },
};

export default function EntreprisesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SchemaOrgBreadcrumb
        items={[
          { name: "Accueil", url: "https://bysandrinecouture.fr" },
          { name: "Entreprises", url: "https://bysandrinecouture.fr/entreprises" },
        ]}
      />
      {children}
    </>
  );
}
