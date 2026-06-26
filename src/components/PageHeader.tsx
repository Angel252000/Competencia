import { IsometricBanner } from "@/components/IsometricIllustrations";
import { BlurBlob } from "@/components/ui/BlurBlob";

type Variant = "registro" | "faq" | "cronograma" | "contacto" | "proyectos";

export default function PageHeader({
  title,
  subtitle,
  badge,
  variant,
}: {
  title: string;
  subtitle?: string;
  badge?: string;
  variant: Variant;
}) {
  return (
    <section className="relative overflow-hidden bg-void">
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-50" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <BlurBlob className="-top-32 -right-32" color="bg-neon/15" size={80} />
        <BlurBlob className="-bottom-40 -left-32" color="bg-electric/12" size={72} delay="2s" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col order-2 lg:order-1">
            {badge && (
              <div className="inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/5 px-4 py-1.5 text-xs font-mono font-medium text-neon uppercase tracking-wider mb-6 w-fit">
                <span className="h-1.5 w-1.5 rounded-full bg-neon animate-glow-pulse" />
                {badge}
              </div>
            )}

            <h1 className="font-display text-3xl font-bold uppercase tracking-tight leading-[1.02] sm:text-4xl lg:text-6xl">
              <span className="bg-gradient-to-r from-neon to-neon-soft bg-clip-text text-transparent text-glow-cyan">
                {title}
              </span>
            </h1>

            {subtitle && (
              <p className="mt-5 max-w-xl text-base leading-relaxed text-text-dim sm:text-lg">
                {subtitle}
              </p>
            )}
          </div>

          <div className="flex justify-center items-center order-1 lg:order-2">
            <IsometricBanner
              variant={variant}
              className="w-full max-w-[320px] sm:max-w-[430px] lg:max-w-[520px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
