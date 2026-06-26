import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProjectGallery from "@/components/ProjectGallery";

export const metadata: Metadata = {
  title: "Proyectos | 1ra Competencia UNADECA",
  description: "Explora los proyectos ganadores de la competencia de programación UNADECA.",
};

export default function ProyectosPage() {
  return (
    <>
      <PageHeader
        variant="proyectos"
        badge="Galería de talento"
        title="Proyectos"
        subtitle="Explora los proyectos más innovadores de nuestras competencias."
      />
      <ProjectGallery showAllLink={false} />
    </>
  );
}
