import type { Metadata } from "next";
import { InputField, TextareaField } from "@/components/ui/InputField";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contacto | 1ra Competencia UNADECA",
  description: "Comunícate con el equipo organizador de la primera competencia de programación UNADECA.",
};

const SOCIALS = ["Instagram", "Twitter/X", "LinkedIn", "YouTube"];

export default function ContactoPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-mono text-3xl font-bold uppercase tracking-[-0.04em] text-navy-dark sm:text-4xl lg:text-5xl">
            Contacto
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            Estamos aquí para ayudarte. Escríbenos cuando quieras.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <form className="space-y-4">
              <InputField label="Nombre" id="nombre" type="text" placeholder="Tu nombre" />
              <InputField label="Correo electrónico" id="email" type="email" placeholder="correo@ejemplo.com" />
              <TextareaField label="Mensaje" id="mensaje" rows={4} placeholder="¿En qué podemos ayudarte?" />
              <button
                type="submit"
                className="w-full rounded-xl bg-navy-dark px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-navy active:scale-95"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl bg-bg-light p-6">
              <h3 className="font-semibold text-navy-dark mb-2">📧 Correo electrónico</h3>
              <a href={`mailto:${SITE.email}`} className="text-sm text-blue-bright hover:underline">
                {SITE.email}
              </a>
            </div>

            <div className="rounded-xl bg-bg-light p-6">
              <h3 className="font-semibold text-navy-dark mb-2">📍 Ubicación</h3>
              <p className="text-sm text-gray-600">{SITE.location}</p>
            </div>

            <div className="rounded-xl bg-bg-light p-6">
              <h3 className="font-semibold text-navy-dark mb-2">🌐 Redes sociales</h3>
              <div className="flex gap-3">
                {SOCIALS.map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-gray-600 border border-gray-200 transition-colors hover:border-blue-bright hover:text-blue-bright"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
