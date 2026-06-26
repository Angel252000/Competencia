import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import TrainingArena from "@/components/TrainingArena";

export const metadata: Metadata = {
  title: "Entrenamiento | 1ra Competencia UNADECA",
  description:
    "Sector de entrenamiento: 85 retos de programación (nivel básico y avanzado) para prepararte para la competencia UNADECA.",
};

export default function EntrenamientoPage() {
  return (
    <>
      <PageHeader
        variant="proyectos"
        badge="85 retos · básico + avanzado"
        title="Entrenamiento"
        subtitle="Resuelve retos de programación, sigue tu progreso y prepárate para competir. Desde fundamentos hasta problemas tipo entrevista."
      />
      <TrainingArena />
    </>
  );
}
