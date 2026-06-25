import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import { FAQ_ITEMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ | 1ra Competencia UNADECA",
  description: "Preguntas frecuentes sobre la primera competencia de programación UNADECA.",
};

export default function FaqPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-mono text-3xl font-bold uppercase tracking-[-0.04em] text-navy-dark sm:text-4xl lg:text-5xl">
            Preguntas Frecuentes
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            Todo lo que necesitas saber antes de participar.
          </p>
        </div>

        <FaqAccordion items={FAQ_ITEMS} />

        <div className="mt-10 text-center rounded-xl bg-bg-light p-8">
          <h2 className="font-semibold text-navy-dark">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Escríbenos y te responderemos a la brevedad.
          </p>
          <a
            href="/contacto"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-navy-dark px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-navy"
          >
            Contactar
          </a>
        </div>
      </div>
    </div>
  );
}
