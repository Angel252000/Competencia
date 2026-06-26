"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects as allProjects } from "@/lib/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconArrow } from "@/components/ui/IconArrow";

const years = Array.from(new Set(allProjects.map((p) => p.year))).sort((a, b) => b - a);

export default function ProjectGallery({ showAllLink = true }: { showAllLink?: boolean }) {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const filtered = selectedYear
    ? allProjects.filter((p) => p.year === selectedYear)
    : allProjects;

  const grouped = useMemo(
    () =>
      years.reduce(
        (acc, year) => {
          const group = filtered.filter((p) => p.year === year);
          if (group.length > 0) acc[year] = group;
          return acc;
        },
        {} as Record<number, typeof allProjects>
      ),
    [filtered]
  );

  return (
    <section className="relative bg-deep">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          title="Proyectos Destacados"
          subtitle="Una colección de proyectos innovadores de nuestras competencias."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedYear(null)}
            className={`rounded-full px-5 py-1.5 text-sm font-medium transition-all ${
              selectedYear === null
                ? "bg-neon text-void shadow-[0_0_18px_rgba(34,211,238,0.45)]"
                : "border border-line bg-panel/60 text-text-dim hover:border-neon/40 hover:text-neon"
            }`}
          >
            Todos
          </button>
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`rounded-full px-5 py-1.5 text-sm font-medium transition-all ${
                selectedYear === year
                  ? "bg-neon text-void shadow-[0_0_18px_rgba(34,211,238,0.45)]"
                  : "border border-line bg-panel/60 text-text-dim hover:border-neon/40 hover:text-neon"
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {Object.entries(grouped).map(([year, items]) => (
          <div key={year} className="mb-14 last:mb-0">
            <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-text mb-6 flex items-center gap-3">
              <span className="text-neon">{year}</span> Finalistas
              <span className="h-px flex-1 bg-line" />
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {items.map((project) => (
                <Link key={project.id} href={`/proyectos/${project.slug}`} className="group block">
                  <div className="relative overflow-hidden rounded-xl border border-line bg-panel/60 transition-all group-hover:border-neon/40 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]">
                    <div className="relative aspect-video overflow-hidden bg-deep">
                      <Image
                        src={`/projects/${project.slug}.jpg`}
                        alt={project.title}
                        fill
                        className="object-cover opacity-90 transition-all duration-300 group-hover:scale-[1.03] group-hover:opacity-100"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-text group-hover:text-neon transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-sm text-text-mute line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {showAllLink && (
          <div className="text-center mt-10">
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-2 rounded-lg border border-neon/40 px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-neon transition-all hover:bg-neon/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
            >
              Ver todos los proyectos
              <IconArrow />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
