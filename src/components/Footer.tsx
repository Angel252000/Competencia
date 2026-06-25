import Link from "next/link";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-bright text-white text-sm font-bold">
                U
              </div>
              <span className="text-sm font-semibold">UNADECA</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              1ra Competencia de Programación UNADECA. Innovando el futuro del
              software en República Dominicana.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-gray-300 mb-3">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-gray-400 transition-colors hover:text-yellow"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="text-gray-400 transition-colors hover:text-yellow text-sm"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} UNADECA. Hecho con 💙 en República
            Dominicana.
          </p>
        </div>
      </div>
    </footer>
  );
}
