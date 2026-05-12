import { SchemaOrgBreadcrumb } from "@/components/layout/schema-org";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre Portfolio de Broderie",
  description:
    "Découvrez nos dernières réalisations en broderie artisanale : uniformes pro, cadeaux de naissance et projets sur mesure en Normandie.",
  alternates: {
    canonical: "/realisations",
  },
};

export default function RealisationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SchemaOrgBreadcrumb
        items={[
          { name: "Accueil", url: "https://bysandrinecouture.fr" },
          { name: "Réalisations", url: "https://bysandrinecouture.fr/realisations" },
        ]}
      />
      {children}
    </>
  );
}
