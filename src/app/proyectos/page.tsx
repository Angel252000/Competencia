import type { Metadata } from "next";
import ProjectGallery from "@/components/ProjectGallery";

export const metadata: Metadata = {
  title: "Proyectos | 1ra Competencia UNADECA",
  description: "Explora los proyectos ganadores de la competencia de programación UNADECA.",
};

export default function ProyectosPage() {
  return (
    <div className="bg-bg-light min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ProjectGallery showAllLink={false} />
      </div>
    </div>
  );
}
