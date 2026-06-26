import Link from "next/link";
import { BlurBlob } from "@/components/ui/BlurBlob";
import { IconArrow } from "@/components/ui/IconArrow";
import { HERO_STATS } from "@/lib/constants";

// Patrón determinista para el mini-heatmap (evita mismatch de hidratación)
const HEAT = [
  0.15, 0.4, 0.8, 1, 0.3, 0.55, 0.9,
  0.6, 1, 0.25, 0.45, 0.85, 0.2, 0.7,
  0.35, 0.65, 0.5, 0.95, 1, 0.3, 0.5,
  0.9, 0.2, 0.7, 0.4, 0.6, 0.8, 0.15,
];

function CommandCard() {
  return (
    <div className="relative w-full max-w-[480px] rounded-2xl border border-neon/20 bg-panel/70 p-5 shadow-[0_0_50px_rgba(34,211,238,0.12)] backdrop-blur-sm sm:p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-text-dim">
            Centro de Mando
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-neon/30 bg-neon/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-neon">
          <span className="h-1.5 w-1.5 rounded-full bg-neon animate-glow-pulse" />
          En vivo
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between rounded-xl border border-line bg-deep/60 p-3.5">
        <div>
          <div className="text-sm font-semibold text-text">Arena UNADECA #01</div>
          <div className="font-mono text-xs text-text-mute">Inscripción abierta · 2 días</div>
        </div>
        <div className="font-display text-lg font-bold text-gold">2026</div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between font-mono text-[11px] text-text-mute">
          <span>Cupos llenados</span>
          <span className="text-neon">68%</span>
        </div>
        <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-deep">
          <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-electric to-neon shadow-[0_0_12px_rgba(34,211,238,0.6)]" />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2.5">
        {HERO_STATS.map((s) => (
          <div key={s.label} className="rounded-xl border border-line bg-deep/60 p-3 text-center">
            <div className="font-display text-xl font-bold text-neon sm:text-2xl">{s.value}</div>
            <div className="mt-0.5 font-mono text-[10px] uppercase tracking-wide text-text-mute">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between rounded-xl border border-gold/25 bg-gold/5 p-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">🏆</span>
          <span className="text-sm font-semibold text-gold">Nivel: Élite</span>
        </div>
        <span className="font-mono text-[11px] text-text-dim">Listo para competir</span>
      </div>

      <div className="mt-4">
        <div className="mb-1.5 font-mono text-[10px] uppercase tracking-wider text-text-mute">
          Actividad de la comunidad
        </div>
        <div className="grid grid-cols-7 gap-1.5">
          {HEAT.map((v, i) => (
            <div
              key={i}
              className="aspect-square rounded-[3px]"
              style={{
                backgroundColor: `rgba(34, 211, 238, ${0.08 + v * 0.7})`,
                boxShadow: v > 0.85 ? "0 0 8px rgba(34,211,238,0.6)" : "none",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-void">
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-60" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <BlurBlob className="-top-40 -right-32" color="bg-neon/15" size={96} />
        <BlurBlob className="top-1/4 -left-40" color="bg-electric/15" size={90} delay="1.5s" />
        <BlurBlob className="bottom-0 left-1/3" color="bg-gold/10" size={72} delay="0.8s" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/5 px-4 py-1.5 text-xs font-mono font-medium uppercase tracking-wider text-neon mb-7 w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-neon animate-glow-pulse" />
              Alajuela, Costa Rica — 2026
            </div>

            <p className="font-mono text-sm uppercase tracking-[0.2em] text-text-dim mb-3">
              1ra Competencia de Programación UNADECA
            </p>

            <h1 className="font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-text">Entrena como</span>
              <br />
              <span className="bg-gradient-to-r from-neon to-neon-soft bg-clip-text text-transparent text-glow-cyan">
                retador.
              </span>
              <br />
              <span className="text-text">Compite como</span>{" "}
              <span className="bg-gradient-to-r from-gold to-ember bg-clip-text text-transparent text-glow-gold">
                campeón.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-text-dim sm:text-lg">
              Hackathons, talleres y una arena de creadores de software. Dos días
              para aprender, construir y competir junto a estudiantes de toda
              Centroamérica.
            </p>

            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row">
              <Link
                href="/registro"
                className="inline-flex items-center gap-2 rounded-xl bg-neon px-8 py-3.5 text-base font-bold uppercase tracking-wide text-void transition-all hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(34,211,238,0.55)] active:scale-95"
              >
                Inscríbete gratis
                <IconArrow className="h-5 w-5" />
              </Link>
              <Link
                href="/cronograma"
                className="inline-flex items-center gap-2 rounded-xl border border-neon/40 px-8 py-3.5 text-base font-semibold uppercase tracking-wide text-neon transition-all hover:bg-neon/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
              >
                Ver cronograma
              </Link>
            </div>
          </div>

          <div className="flex justify-center items-center order-1 lg:order-2">
            <CommandCard />
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-neon/40 to-transparent" />
    </section>
  );
}
