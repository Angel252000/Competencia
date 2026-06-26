"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Testimonial {
  quote: string;
  name: string;
  school: string;
  gradient: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Antes de la competencia pasaba mucho tiempo aprendiendo por mi cuenta y dudando si avanzaba de verdad. Este evento cambió cómo me veo en la tecnología y me empujó a tomar mi carrera más en serio.",
    name: "María Fernanda Rojas",
    school: "Universidad Adventista de Centroamérica",
    gradient: "from-blue-bright to-blue-400",
  },
  {
    quote:
      "En dos días aprendí más que en un semestre. Armé un equipo con personas que no conocía y terminamos construyendo un proyecto del que estoy súper orgulloso.",
    name: "Diego Alvarado",
    school: "Tecnológico de Costa Rica",
    gradient: "from-yellow to-yellow-dark",
  },
  {
    quote:
      "Los talleres y las mentorías fueron oro puro. Pude preguntarle a desarrolladores con experiencia real y eso me dio confianza para postularme a mi primera práctica.",
    name: "Valeria Mendoza",
    school: "Universidad Nacional",
    gradient: "from-rose-400 to-red-500",
  },
  {
    quote:
      "Lo mejor fue la comunidad. Nunca había sentido tanto apoyo entre estudiantes de distintas universidades. Salí con amigos, ideas y muchas ganas de seguir creando.",
    name: "Josué Hernández",
    school: "Universidad de Costa Rica",
    gradient: "from-emerald-400 to-green-600",
  },
  {
    quote:
      "Llegué sin saber qué esperar y me fui convencida de que quiero dedicarme a esto. Ver mi proyecto funcionando frente al jurado fue una de las mejores experiencias de mi carrera.",
    name: "Andrea Castillo",
    school: "Universidad Latina",
    gradient: "from-indigo-400 to-blue-bright",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = TESTIMONIALS.length;
  const t = TESTIMONIALS[index];

  const go = (n: number) => setIndex((prev) => (prev + n + total) % total);

  return (
    <section className="relative bg-deep">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          title="Lo que dice la comunidad"
          subtitle="Esto es lo que opinan los participantes de la competencia UNADECA."
        />

        <div className="relative flex min-h-[420px] flex-col overflow-hidden rounded-3xl border border-neon/20 bg-panel/60 p-8 shadow-[0_0_50px_rgba(34,211,238,0.12)] sm:min-h-[380px] sm:p-12">
          <span className="pointer-events-none absolute -top-6 left-6 font-display text-[7rem] leading-none text-neon/15 select-none">
            &ldquo;
          </span>
          <blockquote className="flex flex-1 items-center justify-center">
            <p className="text-center font-mono text-base italic leading-relaxed text-text sm:text-lg lg:text-xl">
              &ldquo;{t.quote}&rdquo;
            </p>
          </blockquote>

          <figcaption className="mt-8 flex items-center gap-4">
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.gradient} text-sm font-bold text-void shadow-[0_0_18px_rgba(34,211,238,0.35)]`}
              aria-hidden="true"
            >
              {initials(t.name)}
            </div>
            <div>
              <div className="font-bold text-text">{t.name}</div>
              <div className="font-mono text-sm text-text-mute">{t.school}</div>
            </div>
          </figcaption>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={() => go(-1)}
            aria-label="Testimonio anterior"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-panel/60 text-text-dim transition-all hover:border-neon/50 hover:text-neon active:scale-95"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Ir al testimonio ${i + 1}`}
                aria-current={i === index}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? "w-7 bg-neon shadow-[0_0_12px_rgba(34,211,238,0.6)]" : "w-2.5 bg-line hover:bg-text-mute"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            aria-label="Siguiente testimonio"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-panel/60 text-text-dim transition-all hover:border-neon/50 hover:text-neon active:scale-95"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
