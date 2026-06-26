import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { SCHEDULE, SCHEDULE_TYPE_STYLES, SCHEDULE_TYPE_LABELS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cronograma | 1ra Competencia UNADECA",
  description: "Conoce el cronograma completo de la primera competencia de programación UNADECA.",
};

export default function CronogramaPage() {
  return (
    <>
      <PageHeader
        variant="cronograma"
        badge="2 días de evento"
        title="Cronograma"
        subtitle="Dos días llenos de innovación, aprendizaje y competencia."
      />
      <div className="bg-bg-light">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="space-y-12">
          {SCHEDULE.map((day) => (
            <div key={day.day}>
              <h2 className="font-display text-xl font-bold uppercase tracking-tight text-text mb-6 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-neon shadow-[0_0_10px_rgba(34,211,238,0.7)]" />
                {day.day}
              </h2>

              <div className="space-y-3">
                {day.events.map((event) => (
                  <div
                    key={event.time}
                    className={`rounded-xl border border-line border-l-4 p-4 ${SCHEDULE_TYPE_STYLES[event.type] || "border-l-line bg-panel/40"}`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-text-mute">
                          {SCHEDULE_TYPE_LABELS[event.type] || event.type}
                        </div>
                        <h3 className="mt-0.5 font-semibold text-text">
                          {event.title}
                        </h3>
                      </div>
                      <div className="shrink-0 rounded-lg border border-line bg-deep px-3 py-1 text-sm font-bold text-neon">
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
    </>
  );
}
