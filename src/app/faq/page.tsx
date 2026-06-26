import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import FaqAccordion from "@/components/FaqAccordion";
import { FAQ_ITEMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ | 1ra Competencia UNADECA",
  description: "Preguntas frecuentes sobre la primera competencia de programación UNADECA.",
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        variant="faq"
        badge="Resolvemos tus dudas"
        title="Preguntas Frecuentes"
        subtitle="Todo lo que necesitas saber antes de participar."
      />
      <div className="bg-void">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <FaqAccordion items={FAQ_ITEMS} />

          <div className="mt-10 text-center rounded-xl border border-line bg-panel/50 p-8">
            <h2 className="font-display font-bold uppercase tracking-wide text-text">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="mt-1 text-sm text-text-dim">
              Escríbenos y te responderemos a la brevedad.
            </p>
            <a
              href="/contacto"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-neon px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-void transition-all hover:shadow-[0_0_24px_rgba(34,211,238,0.5)]"
            >
              Contactar
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
