import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconArrow } from "@/components/ui/IconArrow";
import { LEVELS, exercisesByLevel } from "@/lib/training";

const ACCENT: Record<string, { chip: string; bar: string; glow: string }> = {
  basico: {
    chip: "border-neon/40 bg-neon/10 text-neon",
    bar: "from-electric to-neon",
    glow: "hover:shadow-[0_0_36px_rgba(34,211,238,0.18)] hover:border-neon/40",
  },
  avanzado: {
    chip: "border-gold/40 bg-gold/10 text-gold",
    bar: "from-ember to-gold",
    glow: "hover:shadow-[0_0_36px_rgba(251,191,36,0.18)] hover:border-gold/40",
  },
};

export default function TrainingShowcase() {
  return (
    <section className="relative bg-deep">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          title="Sector de Entrenamiento"
          subtitle="85 retos de programación para calentar antes de la competencia. Tú llevas el progreso."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {LEVELS.map((lv) => {
            const items = exercisesByLevel(lv.key);
            const accent = ACCENT[lv.key];
            const samples = items.slice(0, 4);
            return (
              <Link
                key={lv.key}
                href="/entrenamiento"
                className={`group flex flex-col rounded-2xl border border-line bg-panel/50 p-6 transition-all hover:-translate-y-1 ${accent.glow}`}
              >
                <div className="flex items-center justify-between">
                  <span className={`rounded-full border px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider ${accent.chip}`}>
                    {lv.label}
                  </span>
                  <span className="font-display text-3xl font-bold text-text">
                    {items.length}
                    <span className="ml-1 font-mono text-xs font-normal text-text-mute">retos</span>
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-text-dim">{lv.blurb}</p>

                <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-deep">
                  <div className={`h-full w-full rounded-full bg-gradient-to-r ${accent.bar} opacity-70`} />
                </div>

                <ul className="mt-5 space-y-2">
                  {samples.map((s) => (
                    <li key={s.id} className="flex items-center gap-2 text-sm text-text-dim">
                      <span className="font-mono text-xs text-neon">#{String(s.n).padStart(2, "0")}</span>
                      <span className="truncate">{s.title}</span>
                    </li>
                  ))}
                </ul>

                <span className="mt-6 inline-flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-wide text-neon">
                  Entrar a la arena
                  <IconArrow />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
