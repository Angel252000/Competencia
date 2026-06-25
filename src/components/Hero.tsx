import Link from "next/link";
import { IsometricHeroScene } from "@/components/IsometricIllustrations";
import { BlurBlob } from "@/components/ui/BlurBlob";
import { IconArrow } from "@/components/ui/IconArrow";
import { HERO_STATS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-dark">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <BlurBlob className="-top-40 -right-40" color="bg-blue-bright/20" size={96} />
        <BlurBlob className="-bottom-40 -left-40" color="bg-yellow/10" size={80} delay="2s" />
        <BlurBlob className="top-1/3 left-1/2" color="bg-blue-400/10" size={64} delay="1s" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1.5 text-xs font-mono font-medium text-blue-300 uppercase tracking-wider mb-8 w-fit">
              RD — 2026
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-t from-blue-400 via-blue-300 to-white bg-clip-text text-transparent">
                1ra Competencia de
              </span>
              <br />
              <span className="bg-gradient-to-t from-yellow via-yellow-dark to-yellow bg-clip-text text-transparent">
                Programación UNADECA
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg lg:text-xl">
              Hackathons, talleres y una comunidad de creadores de software.
              5 millones de desarrolladores aprenden, construyen y comparten juntos.
            </p>

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
              <Link
                href="/registro"
                className="inline-flex items-center gap-2 rounded-xl bg-yellow px-8 py-3.5 text-base font-bold text-navy-dark transition-all hover:scale-[1.03] hover:bg-yellow-dark active:scale-95 shadow-lg shadow-yellow/25"
              >
                Inscríbete gratis
                <IconArrow className="h-5 w-5" />
              </Link>
              <Link
                href="/cronograma"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-600 px-8 py-3.5 text-base font-semibold text-white transition-all hover:border-gray-400 hover:bg-white/5"
              >
                Ver cronograma
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-8 sm:gap-16">
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="text-left">
                  <div className="font-mono font-bold text-white text-3xl sm:text-4xl lg:text-[3.5rem] leading-none tracking-[-0.04em]">
                    {stat.value}
                  </div>
                  <div className="mt-1.5 text-xs font-medium text-gray-400 sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center">
            <IsometricHeroScene className="w-full max-w-[550px] h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
