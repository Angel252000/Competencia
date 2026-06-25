import type { Metadata } from "next";
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
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="font-mono text-3xl font-bold uppercase tracking-[-0.04em] text-navy-dark sm:text-4xl lg:text-5xl">
            Inscripción
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            Completa tus datos para asegurar tu lugar en la competencia.
          </p>
        </div>

        <form className="space-y-6">
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
            className="w-full rounded-xl bg-yellow px-6 py-3 text-sm font-bold text-navy-dark transition-all hover:bg-yellow-dark hover:scale-[1.01] active:scale-95 shadow-lg shadow-yellow/20"
          >
            Completar inscripción
          </button>

          <p className="text-center text-xs text-gray-400">
            Al registrarte aceptas nuestras políticas y el código de conducta del evento.
          </p>
        </form>
      </div>
    </div>
  );
}
