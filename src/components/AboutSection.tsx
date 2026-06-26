import { IsometricJigsaw } from "@/components/IsometricIllustrations";

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-void">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/5 px-3 py-1 text-xs font-mono font-semibold text-neon uppercase tracking-wider mb-4">
              Sobre el evento
            </div>
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-text sm:text-4xl lg:text-5xl leading-[1.05]">
              La arena de programación{" "}
              <span className="bg-gradient-to-r from-neon to-electric bg-clip-text text-transparent">
                más importante de la región
              </span>
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-text-dim">
              UNADECA te invita a la primera competencia de programación
              abierta a estudiantes de toda Centroamérica. Durante dos días,
              participantes de distintas universidades se reunirán para
              resolver desafíos, crear proyectos innovadores y competir por
              premios increíbles.
            </p>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-text-mute">
              Aquí es donde construyes. Hemos creado un espacio para creadores
              de software en cualquier etapa: aprende en talleres, lánzate a un
              hackathon y demuestra tu talento. Empresas y mentores de la
              industria nos acompañan porque esta es la comunidad donde nacen
              las ideas que dan forma al futuro de la tecnología.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: "🎯", title: "Retos reales", desc: "Problemas del mundo real para resolver" },
                { icon: "👥", title: "Networking", desc: "Conoce a otros talentos de la región" },
                { icon: "🏆", title: "Premios", desc: "Más de $10,000 en premios" },
                { icon: "📚", title: "Talleres", desc: "Aprende de expertos de la industria" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-line bg-panel/60 p-4 transition-all hover:border-neon/40 hover:shadow-[0_0_24px_rgba(34,211,238,0.15)]"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="font-semibold text-text text-sm">{item.title}</h3>
                  <p className="text-xs text-text-mute mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex flex-col items-center">
            <IsometricJigsaw className="w-full max-w-[320px] h-auto" />
            <div className="relative mt-8 w-full rounded-2xl border border-neon/20 bg-deep p-6 shadow-[0_0_40px_rgba(34,211,238,0.1)]">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-3 w-3 rounded-full bg-blood" />
                <div className="h-3 w-3 rounded-full bg-gold" />
                <div className="h-3 w-3 rounded-full bg-neon" />
                <span className="ml-2 text-xs text-text-mute font-mono">terminal@unadeca</span>
              </div>
              <div className="space-y-2 font-mono text-sm">
                <p className="text-neon">$ git clone competencia-2026</p>
                <p className="text-electric">$ cd competencia-2026 &amp;&amp; npm install</p>
                <p className="text-gold">$ npm run innovar</p>
                <p className="text-text-mute mt-3">&gt; Construyendo el futuro del software...</p>
                <p className="text-neon animate-pulse">&gt; ¡Listo! 🚀</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
