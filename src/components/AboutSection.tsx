import { IsometricJigsaw } from "@/components/IsometricIllustrations";

export default function AboutSection() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-bright/10 px-3 py-1 text-xs font-mono font-semibold text-blue-bright uppercase tracking-wider mb-4">
              Sobre el evento
            </div>
            <h2 className="font-mono text-3xl font-bold uppercase tracking-[-0.04em] text-navy-dark sm:text-4xl lg:text-5xl leading-[1.1]">
              La competencia{' '}
              <span className="bg-gradient-to-r from-navy-dark via-blue-bright to-blue-400 bg-clip-text text-transparent">
                más importante del país
              </span>
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-gray-700">
              UNADECA te invita a la primera competencia de programación
              abierta a estudiantes de todo el país. Durante dos días,
              participantes de distintas universidades se reunirán para
              resolver desafíos, crear proyectos innovadores y competir por
              premios increíbles.
            </p>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-600">
              MLH is where you build. We&apos;ve created a home for software creators at every stage.
              Build something at a hackathon. Companies like Google, GitHub, ElevenLabs, and
              Snowflake support our community because this is where developers discover the tools
              shaping the future of software.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: "🎯", title: "Retos reales", desc: "Problemas del mundo real para resolver" },
                { icon: "👥", title: "Networking", desc: "Conoce a otros talentos del país" },
                { icon: "🏆", title: "Premios", desc: "Más de $10,000 en premios" },
                { icon: "📚", title: "Talleres", desc: "Aprende de expertos de la industria" },
              ].map((item) => (
                <div key={item.title} className="rounded-xl bg-bg-light p-4">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="font-semibold text-navy-dark text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex flex-col items-center">
            <IsometricJigsaw className="w-full max-w-[320px] h-auto" />
            <div className="relative mt-8 w-full rounded-2xl bg-navy-dark p-6 shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-gray-400 font-mono">terminal@unadeca</span>
              </div>
              <div className="space-y-2 font-mono text-sm">
                <p className="text-green-400">$ git clone competencia-2026</p>
                <p className="text-blue-300">$ cd competencia-2026 && npm install</p>
                <p className="text-yellow">$ npm run innovar</p>
                <p className="text-gray-400 mt-3">&gt; Construyendo el futuro del software...</p>
                <p className="text-green-400 animate-pulse">&gt; ¡Listo! 🚀</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
