"use client";

import { useState } from "react";
import Link from "next/link";
import { IconArrow } from "@/components/ui/IconArrow";
import { NAV_ITEMS } from "@/lib/constants";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200/50 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-dark text-white text-sm font-bold">
            U
          </div>
          <span className="hidden text-sm font-semibold text-navy-dark sm:block">
            Competencia UNADECA
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-bright"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/registro"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-yellow px-4 py-2 text-sm font-semibold text-navy-dark transition-all hover:scale-[1.02] hover:bg-yellow-dark active:scale-95"
          >
            Inscríbete
            <IconArrow />
          </Link>

          <button
            className="lg:hidden rounded-lg p-2 text-gray-700 hover:bg-gray-100"
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
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <nav className="flex flex-col px-4 py-4 space-y-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-blue-bright"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/registro"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-yellow px-4 py-2 text-sm font-semibold text-navy-dark"
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
