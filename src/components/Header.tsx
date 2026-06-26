"use client";

import { useState } from "react";
import Link from "next/link";
import { IconArrow } from "@/components/ui/IconArrow";
import { NAV_ITEMS } from "@/lib/constants";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line/70 bg-void/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-neon to-electric text-sm font-bold text-void shadow-[0_0_18px_rgba(34,211,238,0.45)]">
            U
          </div>
          <span className="hidden font-display text-sm font-bold uppercase tracking-wider text-text sm:block">
            Competencia <span className="text-neon">UNADECA</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-text-dim transition-colors hover:text-neon"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/registro"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-neon px-4 py-2 text-sm font-bold uppercase tracking-wide text-void transition-all hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(34,211,238,0.55)] active:scale-95"
          >
            Inscríbete
            <IconArrow />
          </Link>

          <button
            className="lg:hidden rounded-lg p-2 text-text-dim hover:bg-panel hover:text-neon"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-line bg-deep">
          <nav className="flex flex-col px-4 py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-text-dim transition-colors hover:bg-panel hover:text-neon"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/registro"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-neon px-4 py-2 text-sm font-bold uppercase tracking-wide text-void"
              onClick={() => setMobileOpen(false)}
            >
              Inscríbete
              <IconArrow />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
