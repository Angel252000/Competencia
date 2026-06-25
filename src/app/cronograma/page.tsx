import type { Metadata } from "next";
import { SCHEDULE, SCHEDULE_TYPE_STYLES, SCHEDULE_TYPE_LABELS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cronograma | 1ra Competencia UNADECA",
  description: "Conoce el cronograma completo de la primera competencia de programación UNADECA.",
};

export default function CronogramaPage() {
  return (
    <div className="bg-bg-light min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-mono text-3xl font-bold uppercase tracking-[-0.04em] text-navy-dark sm:text-4xl lg:text-5xl">
            Cronograma
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            Dos días llenos de innovación, aprendizaje y competencia.
          </p>
        </div>

        <div className="space-y-12">
          {SCHEDULE.map((day) => (
            <div key={day.day}>
              <h2 className="font-mono text-xl font-bold uppercase tracking-[-0.04em] text-navy-dark mb-6 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-bright" />
                {day.day}
              </h2>

              <div className="space-y-3">
                {day.events.map((event) => (
                  <div
                    key={event.time}
                    className={`rounded-xl border-l-4 p-4 ${SCHEDULE_TYPE_STYLES[event.type] || "border-l-gray-300 bg-white"}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                          {SCHEDULE_TYPE_LABELS[event.type] || event.type}
                        </div>
                        <h3 className="mt-0.5 font-semibold text-navy-dark">
                          {event.title}
                        </h3>
                      </div>
                      <div className="shrink-0 rounded-lg bg-white px-3 py-1 text-sm font-bold text-blue-bright shadow-sm">
                        {event.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
