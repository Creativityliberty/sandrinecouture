import { SchemaOrgBreadcrumb } from "@/components/layout/schema-org";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cadeaux Personnalisés & Broderie",
  description:
    "Cadeaux de naissance, linges de maison et accessoires personnalisés. Offrez un présent unique et durable brodé avec soin en Normandie.",
  alternates: {
    canonical: "/particuliers",
  },
};

export default function ParticuliersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SchemaOrgBreadcrumb
        items={[
          { name: "Accueil", url: "https://sandrinecouture.com" },
          { name: "Particuliers", url: "https://sandrinecouture.com/particuliers" },
        ]}
      />
      {children}
    </>
  );
}
