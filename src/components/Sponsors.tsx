export default function Sponsors() {
  const tiers = [
    {
      tier: "Oro",
      color: "text-yellow",
      sponsors: [
        { name: "TechCorp", placeholder: true },
        { name: "Innovatech", placeholder: true },
      ],
    },
    {
      tier: "Plata",
      color: "text-gray-400",
      sponsors: [
        { name: "DevSolutions", placeholder: true },
        { name: "CloudSys", placeholder: true },
        { name: "DataMind", placeholder: true },
      ],
    },
    {
      tier: "Bronce",
      color: "text-amber-700",
      sponsors: [
        { name: "WebCraft", placeholder: true },
        { name: "CodeLab", placeholder: true },
        { name: "StartupRD", placeholder: true },
        { name: "NetSolutions", placeholder: true },
      ],
    },
  ];

  return (
    <section className="bg-bg-light">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-mono text-3xl font-bold uppercase tracking-[-0.04em] text-navy-dark sm:text-4xl lg:text-5xl">
            Patrocinadores
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-lg mx-auto">
            El evento es posible gracias al apoyo de estas increíbles empresas.
          </p>
        </div>

        {tiers.map((tier) => (
          <div key={tier.tier} className="mb-10">
            <div className="text-center mb-4">
              <span className={`inline-block rounded-full border border-current px-3 py-0.5 text-xs font-semibold ${tier.color}`}>
                {tier.tier}
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {tier.sponsors.map((s) => (
                <div
                  key={s.name}
                  className="flex h-20 w-40 items-center justify-center rounded-xl bg-white border border-gray-200 px-4 text-sm font-semibold text-gray-400"
                >
                  {s.name}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            ¿Quieres patrocinar?{" "}
            <a href="/contacto" className="font-semibold text-blue-bright hover:underline">
              Contáctanos
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
