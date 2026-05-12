import { SchemaOrgBreadcrumb } from "@/components/layout/schema-org";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demande de Devis Gratuit",
  description:
    "Obtenez un devis personnalisé pour vos projets de broderie. Réponse rapide pour entreprises et particuliers en Normandie.",
  alternates: {
    canonical: "/devis",
  },
};

export default function DevisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SchemaOrgBreadcrumb
        items={[
          { name: "Accueil", url: "https://sandrinecouture.com" },
          { name: "Devis", url: "https://sandrinecouture.com/devis" },
        ]}
      />
      {children}
    </>
  );
}
