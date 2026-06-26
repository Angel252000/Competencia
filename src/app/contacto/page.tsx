import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { InputField, TextareaField } from "@/components/ui/InputField";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contacto | 1ra Competencia UNADECA",
  description: "Comunícate con el equipo organizador de la primera competencia de programación UNADECA.",
};

const SOCIALS = ["Instagram", "Twitter/X", "LinkedIn", "YouTube"];

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        variant="contacto"
        badge="Hablemos"
        title="Contacto"
        subtitle="Estamos aquí para ayudarte. Escríbenos cuando quieras."
      />
      <div className="bg-void">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <form className="space-y-4 rounded-2xl border border-line bg-panel/40 p-6">
              <InputField label="Nombre" id="nombre" type="text" placeholder="Tu nombre" />
              <InputField label="Correo electrónico" id="email" type="email" placeholder="correo@ejemplo.com" />
              <TextareaField label="Mensaje" id="mensaje" rows={4} placeholder="¿En qué podemos ayudarte?" />
              <button
                type="submit"
                className="w-full rounded-xl bg-neon px-6 py-3 text-sm font-bold uppercase tracking-wide text-void transition-all hover:shadow-[0_0_28px_rgba(34,211,238,0.5)] active:scale-95"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-line bg-panel/50 p-6">
              <h3 className="font-semibold text-text mb-2">📧 Correo electrónico</h3>
              <a href={`mailto:${SITE.email}`} className="text-sm text-neon hover:underline">
                {SITE.email}
              </a>
            </div>

            <div className="rounded-xl border border-line bg-panel/50 p-6">
              <h3 className="font-semibold text-text mb-2">📍 Ubicación</h3>
              <p className="text-sm text-text-dim">{SITE.location}</p>
              <div className="mt-4 overflow-hidden rounded-lg border border-line">
                <iframe
                  title="Mapa — Campus UNADECA, Alajuela, Costa Rica"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&output=embed`}
                  className="h-56 w-full sm:h-64"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="rounded-xl border border-line bg-panel/50 p-6">
              <h3 className="font-semibold text-text mb-2">🌐 Redes sociales</h3>
              <div className="flex gap-3">
                {SOCIALS.map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="rounded-lg border border-line bg-deep/60 px-3 py-1.5 text-xs font-medium text-text-dim transition-colors hover:border-neon/50 hover:text-neon"
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
    </>
  );
}
