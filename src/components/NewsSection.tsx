import Link from "next/link";

interface Post {
  title: string;
  author: string;
  date: string;
  tag: string;
  read: string;
  featured?: boolean;
}

const POSTS: Post[] = [
  {
    title: "¡Bienvenidos a la 1ra Competencia de Programación UNADECA!",
    author: "Comité Organizador",
    date: "15 FEB",
    tag: "anuncio",
    read: "3 min de lectura",
    featured: true,
  },
  {
    title: "Cómo prepararte para tu primer hackathon (aunque seas principiante)",
    author: "Equipo de Mentorías",
    date: "22 OCT",
    tag: "guía",
    read: "2 min de lectura",
  },
  {
    title: "Conoce a los jueces y mentores de la edición 2026",
    author: "Comité Organizador",
    date: "08 NOV",
    tag: "anuncio",
    read: "5 min de lectura",
  },
  {
    title: "5 ideas de proyectos ganadores para inspirarte este año",
    author: "Equipo de Contenido",
    date: "18 NOV",
    tag: "proyectos",
    read: "5 min de lectura",
  },
];

function Avatar() {
  return (
    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-neon to-electric text-[11px] font-bold text-void">
      U
    </div>
  );
}

function Meta({ author, date }: { author: string; date: string }) {
  return (
    <div className="flex items-center gap-2">
      <Avatar />
      <div className="leading-tight">
        <div className="text-sm font-semibold text-text">
          {author}{" "}
          <span className="font-normal text-text-mute">
            para Competencia UNADECA
          </span>
        </div>
        <div className="font-mono text-xs text-text-mute">{date}</div>
      </div>
    </div>
  );
}

function Footer({ tag, read }: { tag: string; read: string }) {
  return (
    <div className="mt-4 flex items-center justify-between">
      <span className="font-mono text-sm text-neon">#{tag}</span>
      <span className="font-mono text-xs text-text-mute">{read}</span>
    </div>
  );
}

export default function NewsSection() {
  const [featured, ...rest] = POSTS;

  return (
    <section className="relative bg-void">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-text sm:text-4xl lg:text-5xl">
            Noticias y novedades
          </h2>
          <div className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-gradient-to-r from-transparent via-neon to-transparent" />
          <p className="mt-4 text-base md:text-lg text-text-dim max-w-lg mx-auto">
            Todo lo que necesitas saber sobre la competencia, directo del equipo.
          </p>
        </div>

        <Link
          href="#"
          className="group mb-6 block overflow-hidden rounded-2xl border border-line bg-panel/60 transition-all hover:-translate-y-1 hover:border-neon/40 hover:shadow-[0_0_36px_rgba(34,211,238,0.18)]"
        >
          <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-deep via-electric/30 to-deep sm:h-60">
            <div className="absolute inset-0 bg-grid opacity-30" />
            <span className="relative font-display text-2xl font-bold uppercase tracking-widest text-text sm:text-4xl">
              Competencia <span className="text-neon text-glow-cyan">UNADECA</span>
            </span>
          </div>
          <div className="p-6">
            <Meta author={featured.author} date={featured.date} />
            <h3 className="mt-4 font-display text-xl font-bold leading-snug text-text transition-colors group-hover:text-neon sm:text-2xl">
              {featured.title}
            </h3>
            <Footer tag={featured.tag} read={featured.read} />
          </div>
        </Link>

        <div className="grid gap-6 sm:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.title}
              href="#"
              className="group flex flex-col rounded-2xl border border-line bg-panel/60 p-6 transition-all hover:-translate-y-1 hover:border-neon/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
            >
              <Meta author={post.author} date={post.date} />
              <h3 className="mt-4 flex-1 font-display text-lg font-bold leading-snug text-text transition-colors group-hover:text-neon">
                {post.title}
              </h3>
              <Footer tag={post.tag} read={post.read} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
