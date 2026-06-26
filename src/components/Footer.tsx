import Link from "next/link";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-void text-text">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-neon to-electric text-void text-sm font-bold shadow-[0_0_18px_rgba(34,211,238,0.4)]">
                U
              </div>
              <span className="font-display text-sm font-bold uppercase tracking-wider">UNADECA</span>
            </div>
            <p className="text-sm text-text-mute leading-relaxed max-w-xs">
              1ra Competencia de Programación UNADECA. Innovando el futuro del
              software en Costa Rica y Centroamérica.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-neon mb-3">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-text-dim transition-colors hover:text-neon"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-line flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="text-text-dim transition-colors hover:text-neon text-sm"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
          <p className="text-xs text-text-mute">
            &copy; {new Date().getFullYear()} UNADECA. Hecho con 💙 en Costa Rica.
          </p>
        </div>
      </div>
    </footer>
  );
}
