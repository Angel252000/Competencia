"use client";

import { useEffect, useMemo, useState } from "react";
import { TRAINING, LEVELS, type Exercise, type Level } from "@/lib/training";

const DONE_KEY = "unadeca:training:done";
const CODE_KEY = "unadeca:training:code";

type FilterMode = "todos" | "pendientes" | "resueltos";

export default function TrainingArena() {
  const [level, setLevel] = useState<Level>("basico");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<FilterMode>("todos");
  const [done, setDone] = useState<Record<string, boolean>>({});
  const [code, setCode] = useState<Record<string, string>>({});
  const [selected, setSelected] = useState<Exercise | null>(null);

  // Cargar progreso guardado
  useEffect(() => {
    try {
      const d = localStorage.getItem(DONE_KEY);
      const c = localStorage.getItem(CODE_KEY);
      if (d) setDone(JSON.parse(d));
      if (c) setCode(JSON.parse(c));
    } catch {}
  }, []);

  // Cerrar modal con Escape
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  const persistDone = (next: Record<string, boolean>) => {
    setDone(next);
    try { localStorage.setItem(DONE_KEY, JSON.stringify(next)); } catch {}
  };

  const toggleDone = (id: string) =>
    persistDone({ ...done, [id]: !done[id] });

  const saveCode = (id: string, value: string) => {
    const next = { ...code, [id]: value };
    setCode(next);
    try { localStorage.setItem(CODE_KEY, JSON.stringify(next)); } catch {}
  };

  const levelItems = useMemo(
    () => TRAINING.filter((e) => e.level === level),
    [level]
  );

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return levelItems.filter((e) => {
      if (filter === "resueltos" && !done[e.id]) return false;
      if (filter === "pendientes" && done[e.id]) return false;
      if (!q) return true;
      return (
        e.title.toLowerCase().includes(q) ||
        e.prompt.toLowerCase().includes(q) ||
        String(e.n) === q
      );
    });
  }, [levelItems, query, filter, done]);

  const completedCount = levelItems.filter((e) => done[e.id]).length;
  const pct = Math.round((completedCount / levelItems.length) * 100);

  return (
    <div className="relative bg-void">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* Tabs de nivel */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {LEVELS.map((lv) => {
            const count = TRAINING.filter((e) => e.level === lv.key).length;
            const active = level === lv.key;
            return (
              <button
                key={lv.key}
                onClick={() => setLevel(lv.key)}
                className={`rounded-xl border px-5 py-2.5 text-sm font-bold uppercase tracking-wide transition-all ${
                  active
                    ? "border-neon/50 bg-neon/10 text-neon shadow-[0_0_24px_rgba(34,211,238,0.2)]"
                    : "border-line bg-panel/50 text-text-dim hover:border-neon/30 hover:text-text"
                }`}
              >
                {lv.label}
                <span className="ml-2 font-mono text-xs text-text-mute">{count}</span>
              </button>
            );
          })}
        </div>

        <p className="mt-4 text-center text-sm text-text-dim">
          {LEVELS.find((l) => l.key === level)?.blurb}
        </p>

        {/* Progreso */}
        <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-line bg-panel/50 p-5">
          <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider text-text-mute">
            <span>Tu progreso · {LEVELS.find((l) => l.key === level)?.label}</span>
            <span className="text-neon">{completedCount}/{levelItems.length} · {pct}%</span>
          </div>
          <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-deep">
            <div
              className="h-full rounded-full bg-gradient-to-r from-electric to-neon shadow-[0_0_12px_rgba(34,211,238,0.6)] transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        {/* Buscador + filtros */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-xs">
            <svg className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-mute" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar reto…"
              className="w-full rounded-lg border border-line bg-deep/60 py-2.5 pl-9 pr-3 text-sm text-text placeholder:text-text-mute focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon"
            />
          </div>
          <div className="flex gap-2">
            {(["todos", "pendientes", "resueltos"] as FilterMode[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-lg px-3.5 py-2 text-xs font-semibold uppercase tracking-wide transition-all ${
                  filter === f
                    ? "bg-neon text-void"
                    : "border border-line bg-panel/50 text-text-dim hover:text-text"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de retos */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((e) => {
            const isDone = !!done[e.id];
            return (
              <button
                key={e.id}
                onClick={() => setSelected(e)}
                className={`group flex flex-col rounded-xl border p-5 text-left transition-all hover:-translate-y-0.5 ${
                  isDone
                    ? "border-neon/40 bg-neon/5"
                    : "border-line bg-panel/50 hover:border-neon/40 hover:shadow-[0_0_26px_rgba(34,211,238,0.14)]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-neon">
                    #{String(e.n).padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-2">
                    {e.source && (
                      <span className="rounded-full border border-gold/30 bg-gold/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-gold">
                        {e.source}
                      </span>
                    )}
                    {isDone ? (
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-neon text-void">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    ) : (
                      <span className="h-5 w-5 rounded-full border border-line" />
                    )}
                  </div>
                </div>
                <h3 className="mt-3 font-display text-base font-bold uppercase tracking-tight text-text group-hover:text-neon">
                  {e.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-text-mute">
                  {e.prompt}
                </p>
                <span className="mt-3 font-mono text-xs text-neon/80 group-hover:text-neon">
                  Resolver →
                </span>
              </button>
            );
          })}
        </div>

        {visible.length === 0 && (
          <p className="mt-12 text-center font-mono text-sm text-text-mute">
            No hay retos que coincidan con tu búsqueda.
          </p>
        )}
      </div>

      {/* Modal del reto */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-void/80 p-0 backdrop-blur-sm sm:items-center sm:p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl border border-neon/25 bg-panel shadow-[0_0_60px_rgba(34,211,238,0.18)] sm:rounded-2xl"
            onClick={(ev) => ev.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-line p-5">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-neon">
                    #{String(selected.n).padStart(2, "0")}
                  </span>
                  <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-text-dim">
                    {selected.level === "basico" ? "Básico" : "Avanzado"}
                  </span>
                  {selected.source && (
                    <span className="rounded-full border border-gold/30 bg-gold/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-gold">
                      {selected.source}
                    </span>
                  )}
                </div>
                <h3 className="mt-2 font-display text-xl font-bold uppercase tracking-tight text-text">
                  {selected.title}
                </h3>
              </div>
              <button
                onClick={() => setSelected(null)}
                aria-label="Cerrar"
                className="rounded-lg p-1.5 text-text-mute hover:bg-deep hover:text-neon"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              <div className="rounded-xl border border-line bg-deep/60 p-4">
                <p className="text-sm leading-relaxed text-text-dim">{selected.prompt}</p>
              </div>

              <div className="mt-4">
                <div className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-text-mute">
                  <span className="h-2 w-2 rounded-full bg-blood" />
                  <span className="h-2 w-2 rounded-full bg-gold" />
                  <span className="h-2 w-2 rounded-full bg-neon" />
                  <span className="ml-1">solución.txt</span>
                </div>
                <textarea
                  value={code[selected.id] ?? ""}
                  onChange={(e) => saveCode(selected.id, e.target.value)}
                  spellCheck={false}
                  rows={8}
                  placeholder="// Escribe tu solución aquí…"
                  className="w-full resize-y rounded-lg border border-line bg-[#05080f] p-4 font-mono text-sm text-neon-soft placeholder:text-text-mute focus:border-neon focus:outline-none focus:ring-1 focus:ring-neon"
                />
                <p className="mt-1 font-mono text-[11px] text-text-mute">
                  Tu código se guarda en este navegador automáticamente.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-line p-5">
              <button
                onClick={() => setSelected(null)}
                className="rounded-lg border border-line px-4 py-2 text-sm font-semibold text-text-dim transition-colors hover:text-text"
              >
                Cerrar
              </button>
              <button
                onClick={() => toggleDone(selected.id)}
                className={`rounded-lg px-5 py-2 text-sm font-bold uppercase tracking-wide transition-all ${
                  done[selected.id]
                    ? "border border-neon/50 bg-neon/10 text-neon"
                    : "bg-neon text-void hover:shadow-[0_0_24px_rgba(34,211,238,0.5)]"
                }`}
              >
                {done[selected.id] ? "✓ Resuelto" : "Marcar como resuelto"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
