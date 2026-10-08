import { SchemaOrgBreadcrumb } from "@/components/layout/schema-org";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mon Portfolio de Broderie",
  description:
    "Découvrez mes réalisations en broderie artisanale : uniformes professionnels, cadeaux de naissance et confections sur mesure en Normandie.",
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
          { name: "Accueil", url: "https://sandrinecouture.com" },
          { name: "Réalisations", url: "https://sandrinecouture.com/realisations" },
        ]}
      />
      {children}
    </>
  );
}
