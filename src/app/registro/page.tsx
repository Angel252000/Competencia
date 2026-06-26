import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { InputField, SelectField } from "@/components/ui/InputField";

export const metadata: Metadata = {
  title: "Registro | 1ra Competencia UNADECA",
  description: "Inscríbete a la primera competencia de programación UNADECA. Participación gratuita.",
};

const NIVELES = [
  { value: "principiante", label: "Principiante" },
  { value: "intermedio", label: "Intermedio" },
  { value: "avanzado", label: "Avanzado" },
];

export default function RegistroPage() {
  return (
    <>
      <PageHeader
        variant="registro"
        badge="Inscripción gratuita"
        title="Inscripción"
        subtitle="Completa tus datos para asegurar tu lugar en la competencia."
      />
      <div className="bg-void">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
          <form className="space-y-6 rounded-2xl border border-line bg-panel/40 p-6 sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <InputField label="Nombre completo" id="nombre" type="text" placeholder="Tu nombre" />
            <InputField label="Correo electrónico" id="email" type="email" placeholder="correo@ejemplo.com" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <InputField label="Universidad" id="universidad" type="text" placeholder="Tu universidad" />
            <InputField label="Carrera" id="carrera" type="text" placeholder="Tu carrera" />
          </div>

          <SelectField
            label="Nivel de programación"
            id="nivel"
            placeholder="Selecciona tu nivel"
            options={NIVELES}
          />

          <InputField
            label="¿Tienes equipo? (opcional)"
            id="equipo"
            type="text"
            placeholder="Nombres de tus compañeros separados por coma"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-neon px-6 py-3 text-sm font-bold uppercase tracking-wide text-void transition-all hover:scale-[1.01] hover:shadow-[0_0_28px_rgba(34,211,238,0.5)] active:scale-95"
          >
            Completar inscripción
          </button>

          <p className="text-center text-xs text-text-mute">
            Al registrarte aceptas nuestras políticas y el código de conducta del evento.
          </p>
          </form>
        </div>
      </div>
    </>
  );
}
