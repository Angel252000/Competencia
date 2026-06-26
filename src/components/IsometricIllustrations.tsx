"use client";

import { useId, type ReactNode } from "react";

function IsoBlock({
  tx, ty, w, d, h, topColor, leftColor, rightColor, className,
}: {
  tx: number; ty: number; w: number; d: number; h: number;
  topColor: string; leftColor: string; rightColor: string;
  className?: string;
}) {
  const scale = 0.6;
  const sw = w * scale;
  const sd = d * scale;
  const sh = h * scale;
  const cos30 = 0.866;
  const sin30 = 0.5;
  const rightEdgeX = sw * cos30;
  const rightEdgeY = sw * sin30;
  const leftEdgeX = -sd * cos30;
  const leftEdgeY = sd * sin30;
  const bottomX = sw * cos30 + leftEdgeX;
  const bottomY = sw * sin30 + leftEdgeY;

  const top = `0,0 ${rightEdgeX},${rightEdgeY} ${bottomX},${bottomY} ${leftEdgeX},${leftEdgeY}`;
  const right = `${rightEdgeX},${rightEdgeY} ${bottomX},${bottomY} ${bottomX},${bottomY + sh} ${rightEdgeX},${rightEdgeY + sh}`;
  const left = `${leftEdgeX},${leftEdgeY} 0,0 0,${sh} ${leftEdgeX},${leftEdgeY + sh}`;

  return (
    <g className={className} transform={`translate(${tx}, ${ty})`}>
      <polygon points={right} fill={rightColor} />
      <polygon points={left} fill={leftColor} />
      <polygon points={top} fill={topColor} />
    </g>
  );
}

function IsoPyramid({
  tx, ty, w, d, h, frontColor, leftColor, rightColor, className,
}: {
  tx: number; ty: number; w: number; d: number; h: number;
  frontColor: string; leftColor: string; rightColor: string;
  className?: string;
}) {
  const scale = 0.6;
  const sw = w * scale;
  const sd = d * scale;
  const sh = h * scale;
  const cos30 = 0.866;
  const sin30 = 0.5;
  const rightEdgeX = sw * cos30;
  const rightEdgeY = sw * sin30;
  const leftEdgeX = -sd * cos30;
  const leftEdgeY = sd * sin30;
  const bottomX = sw * cos30 + leftEdgeX;
  const bottomY = sw * sin30 + leftEdgeY;

  const baseCX = (0 + rightEdgeX + bottomX + leftEdgeX) / 4;
  const baseCY = (0 + rightEdgeY + bottomY + leftEdgeY) / 4;
  const apexX = baseCX;
  const apexY = baseCY - sh;

  return (
    <g className={className} transform={`translate(${tx}, ${ty})`}>
      <polygon points={`${apexX},${apexY} ${rightEdgeX},${rightEdgeY} ${bottomX},${bottomY}`} fill={frontColor} />
      <polygon points={`${apexX},${apexY} ${bottomX},${bottomY} ${leftEdgeX},${leftEdgeY}`} fill={leftColor} />
      <polygon points={`${apexX},${apexY} ${leftEdgeX},${leftEdgeY} ${0},${0}`} fill={rightColor} />
    </g>
  );
}

function IsoMonitor({ tx, ty, className }: { tx: number; ty: number; className?: string }) {
  const gradId = useId();
  const cos30 = 0.866;
  const sin30 = 0.5;
  const s = 40;
  const standH = 25;
  const baseH = 8;
  const bezW = 3;

  const rightX = s * cos30;
  const rightY = s * sin30;
  const leftX = -s * cos30;
  const leftY = s * sin30;

  return (
    <g className={className} transform={`translate(${tx}, ${ty})`}>
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1065E4" />
          <stop offset="50%" stopColor="#4A90FF" />
          <stop offset="100%" stopColor="#1065E4" />
        </linearGradient>
      </defs>
      <polygon
        points={`${rightX * 0.4},${rightY * 0.4 + standH} ${rightX * 0.4 + baseH * cos30},${rightY * 0.4 + standH + baseH * sin30} ${leftX * 0.4 + baseH * cos30},${leftY * 0.4 + standH + baseH * sin30} ${leftX * 0.4},${leftY * 0.4 + standH}`}
        fill="#0d1b3a"
      />
      <polygon
        points={`0,${standH} ${rightX * 0.4},${rightY * 0.4 + standH} ${leftX * 0.4},${leftY * 0.4 + standH}`}
        fill="#16233d"
      />
      <polygon
        points={`${leftX},${leftY} 0,0 ${0},${standH} ${leftX},${leftY + standH}`}
        fill="#1e2d4a"
      />
      <polygon
        points={`0,0 ${rightX},${rightY} ${rightX},${rightY + standH} ${0},${standH}`}
        fill="#16233d"
      />
      <polygon
        points={`0,0 ${rightX},${rightY} ${rightX + leftX},${rightY + leftY} ${leftX},${leftY}`}
        fill="#2a3d5e"
      />
      <polygon
        points={`${leftX + bezW * (rightX / s)},${leftY + bezW * (rightY / s)} ${bezW},${bezW} ${rightX - bezW},${rightY - bezW} ${rightX + leftX - bezW * (1 + rightX / s)},${rightY + leftY - bezW * (1 + rightY / s)}`}
        fill={`url(#${gradId})`}
        opacity="0.85"
      />
      <g opacity="0.5">
        {[0.2, 0.4, 0.6, 0.8].map((t, i) => {
          const x1 = leftX + (0 - leftX) * t + rightX * 0.15;
          const y1 = leftY + (0 - leftY) * t + rightY * 0.15;
          const x2 = leftX + (0 - leftX) * t + rightX * 0.8;
          const y2 = leftY + (0 - leftY) * t + rightY * 0.8;
          return (
            <line
              key={i}
              x1={x1 + bezW * (1 - t)}
              y1={y1 + bezW * (1 - t)}
              x2={x2 + bezW * (1 - t)}
              y2={y2 + bezW * (1 - t)}
              stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round"
              opacity={1 - i * 0.15}
            />
          );
        })}
      </g>
    </g>
  );
}

function IsoTrophy({ tx, ty, className }: { tx: number; ty: number; className?: string }) {
  const cos30 = 0.866;
  const sin30 = 0.5;
  const s = 20;
  const baseH = 6;
  const stemH = 12;
  const rightX = s * cos30;
  const rightY = s * sin30;
  const leftX = -s * cos30;
  const leftY = s * sin30;
  const cupBottom = s * 1.2;

  return (
    <g className={className} transform={`translate(${tx}, ${ty})`}>
      <polygon
        points={`${leftX * 0.8},${leftY * 0.8 + cupBottom + stemH + baseH} 0,${cupBottom + stemH} ${rightX * 0.8},${rightY * 0.8 + cupBottom + stemH + baseH} 0,${cupBottom + stemH + baseH * 2}`}
        fill="#8B6914"
      />
      <rect x={-3 * cos30} y={cupBottom} width={6 * cos30} height={stemH} fill="#B8860B" transform={`skewY(${sin30 * 60})`} />
      <polygon
        points={`${leftX * 0.5},${leftY * 0.5} 0,${-s * 0.5} ${rightX * 0.5},${rightY * 0.5} 0,${cupBottom}`}
        fill="#FFD700"
      />
      <polygon
        points={`0,${-s * 0.5} ${rightX * 0.5},${rightY * 0.5} ${rightX * 0.6},${rightY * 0.6 + cupBottom * 0.3} 0,${cupBottom * 0.4}`}
        fill="#DAA520"
      />
      <ellipse cx="0" cy={-s * 0.3} rx={s * 0.35} ry={s * 0.12} fill="#FFC107" />
    </g>
  );
}

export function IsometricHeroScene({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="hero-bg" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#0f2040" />
          <stop offset="100%" stopColor="#0a1a3a" />
        </radialGradient>
        <filter id="hero-glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="hero-shadow">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000" floodOpacity="0.3" />
        </filter>
      </defs>
      <rect width="600" height="400" fill="url(#hero-bg)" rx="16" />
      <ellipse cx="300" cy="360" rx="220" ry="30" fill="#0d1b3a" opacity="0.6" />
      <g filter="url(#hero-shadow)">
        <g style={{ animation: "float 3.5s ease-in-out infinite" }}>
          <IsoMonitor tx={280} ty={250} />
        </g>
        <g style={{ animation: "float 4s ease-in-out infinite 0.5s" }}>
          <IsoBlock tx={120} ty={280} w={50} d={50} h={30}
            topColor="#4A90FF" leftColor="#1065E4" rightColor="#0d4eb8" />
          <circle cx={120} cy={272} r={18} fill="#4A90FF" opacity="0.8" />
          <circle cx={120} cy={272} r={8} fill="#0a1a3a" opacity="0.5" />
        </g>
        <g style={{ animation: "float 4.5s ease-in-out infinite 1s" }}>
          <IsoBlock tx={180} ty={310} w={30} d={30} h={20}
            topColor="#EAA914" leftColor="#CD900A" rightColor="#A07008" />
          <circle cx={180} cy={305} r={11} fill="#EAA914" opacity="0.8" />
          <circle cx={180} cy={305} r={5} fill="#0a1a3a" opacity="0.5" />
        </g>
        <g style={{ animation: "float 3.8s ease-in-out infinite 1.5s" }}>
          <IsoTrophy tx={430} ty={280} />
        </g>
        <g style={{ animation: "float 4.2s ease-in-out infinite 0.8s" }}>
          <IsoBlock tx={440} ty={270} w={35} d={35} h={12}
            topColor="#FF6B6B" leftColor="#E05555" rightColor="#B84040" />
          <IsoBlock tx={455} ty={255} w={35} d={35} h={10}
            topColor="#1065E4" leftColor="#0d4eb8" rightColor="#0a3a8a" />
        </g>
        <g style={{ animation: "float 5s ease-in-out infinite 2s" }}>
          <IsoBlock tx={480} ty={330} w={25} d={25} h={25}
            topColor="#4A90FF" leftColor="#1065E4" rightColor="#0d4eb8" />
        </g>
        <g style={{ animation: "float 4.5s ease-in-out infinite 0.3s" }}>
          <IsoPyramid tx={380} ty={330} w={20} d={20} h={30}
            frontColor="#EAA914" leftColor="#CD900A" rightColor="#A07008" />
        </g>
        <g style={{ animation: "float 3.2s ease-in-out infinite 2.5s" }}>
          <IsoBlock tx={70} ty={340} w={15} d={15} h={15}
            topColor="#FF6B6B" leftColor="#E05555" rightColor="#B84040" />
        </g>
      </g>
      <g filter="url(#hero-glow)" style={{ animation: "float 3s ease-in-out infinite 0.3s" }}>
        <text x={160} y={170} fill="#4A90FF" fontSize="22" fontFamily="monospace" fontWeight="bold" opacity="0.5">{'<'}</text>
      </g>
      <g filter="url(#hero-glow)" style={{ animation: "float 3.5s ease-in-out infinite 1.2s" }}>
        <text x={440} y={180} fill="#EAA914" fontSize="20" fontFamily="monospace" fontWeight="bold" opacity="0.4">{'/>'}</text>
      </g>
      <g filter="url(#hero-glow)" style={{ animation: "float 4s ease-in-out infinite 0.8s" }}>
        <text x={350} y={150} fill="#4A90FF" fontSize="16" fontFamily="monospace" fontWeight="bold" opacity="0.3">{'{ }'}</text>
      </g>
      {[
        [200, 140, 3, "#4A90FF", "1s"],
        [420, 145, 2.5, "#EAA914", "2s"],
        [100, 200, 2, "#FF6B6B", "3s"],
        [520, 200, 3, "#4A90FF", "0.5s"],
        [300, 140, 2, "#FFFFFF", "1.5s"],
      ].map(([x, y, r, col, delay], i) => (
        <circle key={i}
          cx={x as number} cy={y as number} r={r as number} fill={col as string}
          opacity="0.3"
          style={{ animation: `float ${3 + i * 0.3}s ease-in-out infinite ${delay}` }}
        />
      ))}
    </svg>
  );
}

export function IsometricJigsaw({ className }: { className?: string }) {
  const cos30 = 0.866;
  const sin30 = 0.5;

  const pieces = [
    { dx: -1, dy: -1, color: "#1065E4", light: "#4A90FF", dark: "#0d4eb8", delay: "0s" },
    { dx: 1, dy: -1, color: "#EAA914", light: "#FFC107", dark: "#CD900A", delay: "0.3s" },
    { dx: -1, dy: 1, color: "#FF6B6B", light: "#FF8888", dark: "#E05555", delay: "0.6s" },
    { dx: 1, dy: 1, color: "#4A90FF", light: "#66B0FF", dark: "#1065E4", delay: "0.9s" },
  ];

  const s = 30;

  return (
    <svg viewBox="-80 -80 160 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="jig-shadow">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000" floodOpacity="0.25" />
        </filter>
        <radialGradient id="jig-bg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#1a3060" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0a1a3a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="-80" y="-80" width="160" height="160" rx="16" fill="url(#jig-bg)" />
      <circle cx="0" cy="0" r="12" fill="#4A90FF" opacity="0.12" filter="url(#jig-shadow)" />
      <circle cx="0" cy="0" r="5" fill="#4A90FF" opacity="0.25" filter="url(#jig-shadow)" />

      {pieces.map((p, i) => {
        const px = p.dx * (s + 3) * cos30;
        const py = p.dy * (s + 3) * sin30 + (p.dy > 0 ? (s + 3) : 0);
        const rightX = s * cos30;
        const rightY = s * sin30;
        const leftX = -s * cos30;
        const leftY = s * sin30;

        return (
          <g key={i} filter="url(#jig-shadow)"
            transform={`translate(${px}, ${py})`}
            style={{ animation: `float ${3 + i * 0.3}s ease-in-out infinite ${p.delay}` }}
          >
            <polygon points={`0,0 ${rightX},${rightY} ${rightX + leftX},${rightY + leftY} ${leftX},${leftY}`} fill={p.color} />
            {i === 0 && (
              <>
                <polygon points={`0,0 ${rightX * 0.4},${rightY * 0.4} ${rightX * 0.4 + rightX * 0.1},${rightY * 0.4 - rightY * 0.1} ${rightX * 0.1},${-rightY * 0.1}`} fill={p.light} opacity="0.6" />
                <circle cx={rightX * 0.3} cy={rightY * 0.3} r={s * 0.08} fill={p.light} opacity="0.4" />
              </>
            )}
            {i === 3 && (
              <polygon points={`${leftX},${leftY + rightY} ${leftX + rightX * 0.5},${leftY + rightY + rightY * 0.5} ${leftX + rightX * 0.5},${leftY + rightY + rightY * 0.5 - s * 0.3} ${leftX},${leftY + rightY - s * 0.3}`} fill={p.light} opacity="0.5" />
            )}
          </g>
        );
      })}

      <g style={{ animation: "pulse-slow 2s ease-in-out infinite" }}>
        <circle cx="0" cy="0" r="2.5" fill="#FFFFFF" opacity="0.9" />
        <line x1="-7" y1="0" x2="7" y2="0" stroke="#FFFFFF" strokeWidth="1" opacity="0.5" />
        <line x1="0" y1="-7" x2="0" y2="7" stroke="#FFFFFF" strokeWidth="1" opacity="0.5" />
      </g>
    </svg>
  );
}

export function IsometricGears({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 160" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="gear-shadow">
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000" floodOpacity="0.25" />
        </filter>
      </defs>
      <g filter="url(#gear-shadow)">
        <g style={{ animation: "spin-slow 10s linear infinite", transformOrigin: "85px 85px" }}>
          <IsoBlock tx={45} ty={68} w={50} d={50} h={25}
            topColor="#4A90FF" leftColor="#1065E4" rightColor="#0d4eb8" />
          <circle cx={70} cy={60} r={16} fill="#4A90FF" opacity="0.7" />
          <circle cx={70} cy={60} r={7} fill="#0a1a3a" opacity="0.4" />
        </g>
        <g style={{ animation: "spin-slow 8s linear infinite reverse", transformOrigin: "135px 78px" }}>
          <IsoBlock tx={105} ty={62} w={35} d={35} h={20}
            topColor="#EAA914" leftColor="#CD900A" rightColor="#A07008" />
          <circle cx={122} cy={56} r={11} fill="#EAA914" opacity="0.7" />
          <circle cx={122} cy={56} r={5} fill="#0a1a3a" opacity="0.4" />
        </g>
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Cuadros nuevos (piezas focales por página)                         */
/* ------------------------------------------------------------------ */

function IsoRocket({ tx, ty }: { tx: number; ty: number }) {
  return (
    <g transform={`translate(${tx}, ${ty})`}>
      <g style={{ animation: "pulse-slow 1.1s ease-in-out infinite" }}>
        <polygon points="-8,72 0,104 8,72" fill="#EAA914" />
        <polygon points="-4.5,72 0,90 4.5,72" fill="#FF6B6B" />
      </g>
      <polygon points="-13,52 -26,74 -13,72" fill="#1065E4" />
      <polygon points="13,52 26,74 13,72" fill="#0d4eb8" />
      <path d="M0,-2 C17,18 17,54 11,72 L-11,72 C-17,54 -17,18 0,-2 Z" fill="#EEF3FA" />
      <path d="M0,-2 C17,18 17,54 11,72 L0,72 L0,-2 Z" fill="#C2CFE0" />
      <path d="M0,-2 C9,9 12,16 13,23 C6,9 -6,9 -13,23 C-12,16 -9,9 0,-2 Z" fill="#FF6B6B" />
      <circle cx="0" cy="30" r="10" fill="#0a1a3a" />
      <circle cx="0" cy="30" r="7.5" fill="#4A90FF" />
      <circle cx="-2.5" cy="27.5" r="2.6" fill="#cfe2ff" />
    </g>
  );
}

function IsoBulb({ tx, ty }: { tx: number; ty: number }) {
  return (
    <g transform={`translate(${tx}, ${ty})`}>
      <circle cx="0" cy="0" r="34" fill="#EAA914" opacity="0.18" style={{ animation: "pulse-slow 3s ease-in-out infinite" }} />
      <circle cx="0" cy="0" r="23" fill="#FFD75E" />
      <path d="M-23,0 A23,23 0 0,1 8,-21 A20,20 0 0,0 -16,16 A23,23 0 0,1 -23,0 Z" fill="#FFE9A0" opacity="0.8" />
      <path d="M-7,3 L0,-9 L7,3" stroke="#CD900A" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="-10" y="19" width="20" height="6" rx="2" fill="#C2CFE0" />
      <rect x="-9" y="26" width="18" height="5" rx="2" fill="#8aa0bd" />
      <rect x="-7" y="32" width="14" height="6" rx="3" fill="#C2CFE0" />
    </g>
  );
}

function IsoCalendar({ tx, ty }: { tx: number; ty: number }) {
  const cos30 = 0.866;
  const sin30 = 0.5;
  const s = 36;
  const h = 11;
  const rX = s * cos30;
  const rY = s * sin30;
  const lX = -s * cos30;
  const lY = s * sin30;
  const bX = rX + lX;
  const bY = rY + lY;
  return (
    <g transform={`translate(${tx}, ${ty})`}>
      <polygon points={`${rX},${rY} ${bX},${bY} ${bX},${bY + h} ${rX},${rY + h}`} fill="#0d4eb8" />
      <polygon points={`${lX},${lY} 0,0 0,${h} ${lX},${lY + h}`} fill="#1065E4" />
      <polygon points={`0,0 ${rX},${rY} ${bX},${bY} ${lX},${lY}`} fill="#EEF3FA" />
      <polygon points={`0,0 ${rX * 0.32},${rY * 0.32} ${bX + lX * -0.68},${(rY * 0.32) + lY} ${lX},${lY}`} fill="#FF6B6B" />
      {[0.4, 0.65, 0.9].map((t, i) => (
        <line key={`g${i}`} x1={lX * (1 - t)} y1={lY * (1 - t)} x2={rX + (bX - rX) * t} y2={rY + (bY - rY) * t} stroke="#b9c7db" strokeWidth="0.7" opacity="0.7" />
      ))}
      {[0.4, 0.65, 0.9].map((t, i) => (
        <line key={`h${i}`} x1={rX * (1 - t)} y1={rY * (1 - t)} x2={lX + (bX - lX) * t} y2={lY + (bY - lY) * t} stroke="#b9c7db" strokeWidth="0.7" opacity="0.7" />
      ))}
      <rect x={-3} y={-9} width={2.4} height={8} rx={1.2} fill="#0a1a3a" />
      <rect x={6} y={-7} width={2.4} height={8} rx={1.2} fill="#0a1a3a" />
    </g>
  );
}

function IsoEnvelope({ tx, ty }: { tx: number; ty: number }) {
  const cos30 = 0.866;
  const sin30 = 0.5;
  const s = 40;
  const h = 9;
  const rX = s * cos30;
  const rY = s * sin30;
  const lX = -s * cos30;
  const lY = s * sin30;
  const bX = rX + lX;
  const bY = rY + lY;
  const cx = (rX + lX) / 2;
  const cy = (rY + lY) / 2;
  return (
    <g transform={`translate(${tx}, ${ty})`}>
      <polygon points={`${rX},${rY} ${bX},${bY} ${bX},${bY + h} ${rX},${rY + h}`} fill="#0d4eb8" />
      <polygon points={`${lX},${lY} 0,0 0,${h} ${lX},${lY + h}`} fill="#1065E4" />
      <polygon points={`0,0 ${rX},${rY} ${bX},${bY} ${lX},${lY}`} fill="#EEF3FA" />
      <polyline points={`${lX},${lY} ${cx},${cy + 6} ${rX},${rY}`} fill="none" stroke="#9fb3cd" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points={`${lX},${lY} ${cx},${cy - 5} ${rX},${rY}`} fill="none" stroke="#EAA914" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={cx} cy={cy - 5} r={3.2} fill="#FF6B6B" />
    </g>
  );
}

/* ------------------------------------------------------------------ */
/*  Banner reutilizable para encabezados de páginas internas           */
/* ------------------------------------------------------------------ */

const BANNER_FOCAL: Record<string, ReactNode> = {
  registro: <IsoRocket tx={260} ty={78} />,
  faq: <IsoBulb tx={260} ty={150} />,
  cronograma: <IsoCalendar tx={235} ty={120} />,
  contacto: <IsoEnvelope tx={232} ty={135} />,
  proyectos: <IsoMonitor tx={258} ty={120} />,
};

export function IsometricBanner({
  variant,
  className,
}: {
  variant: keyof typeof BANNER_FOCAL;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 520 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id={`banner-glow-${variant}`} cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#1a3568" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#0a1a3a" stopOpacity="0" />
        </radialGradient>
        <filter id={`banner-shadow-${variant}`}>
          <feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#000" floodOpacity="0.3" />
        </filter>
      </defs>

      <rect x="40" y="20" width="440" height="260" rx="24" fill={`url(#banner-glow-${variant})`} />
      <ellipse cx="260" cy="248" rx="180" ry="26" fill="#0a1428" opacity="0.55" />

      <g filter={`url(#banner-shadow-${variant})`}>
        <g style={{ animation: "float 3.6s ease-in-out infinite" }}>{BANNER_FOCAL[variant]}</g>

        <g style={{ animation: "float 4.4s ease-in-out infinite 0.5s" }}>
          <IsoBlock tx={120} ty={170} w={46} d={46} h={28}
            topColor="#4A90FF" leftColor="#1065E4" rightColor="#0d4eb8" />
        </g>
        <g style={{ animation: "float 4s ease-in-out infinite 1s" }}>
          <IsoBlock tx={172} ty={198} w={28} d={28} h={18}
            topColor="#EAA914" leftColor="#CD900A" rightColor="#A07008" />
        </g>
        <g style={{ animation: "float 4.8s ease-in-out infinite 0.8s" }}>
          <IsoBlock tx={372} ty={186} w={40} d={40} h={22}
            topColor="#1065E4" leftColor="#0d4eb8" rightColor="#0a3a8a" />
        </g>
        <g style={{ animation: "float 3.4s ease-in-out infinite 1.6s" }}>
          <IsoBlock tx={398} ty={214} w={20} d={20} h={20}
            topColor="#FF6B6B" leftColor="#E05555" rightColor="#B84040" />
        </g>
        <g style={{ animation: "float 4.2s ease-in-out infinite 0.3s" }}>
          <IsoPyramid tx={330} ty={216} w={18} d={18} h={26}
            frontColor="#EAA914" leftColor="#CD900A" rightColor="#A07008" />
        </g>
        <g style={{ animation: "float 5s ease-in-out infinite 2s" }}>
          <IsoBlock tx={86} ty={214} w={16} d={16} h={16}
            topColor="#4A90FF" leftColor="#1065E4" rightColor="#0d4eb8" />
        </g>
      </g>

      <g fill="none" fontFamily="monospace" fontWeight="bold">
        <text x={150} y={96} fill="#4A90FF" fontSize="20" opacity="0.45"
          style={{ animation: "float 3s ease-in-out infinite 0.3s" }}>{'<'}</text>
        <text x={360} y={104} fill="#EAA914" fontSize="18" opacity="0.4"
          style={{ animation: "float 3.5s ease-in-out infinite 1.2s" }}>{'/>'}</text>
        <text x={262} y={70} fill="#FFFFFF" fontSize="14" opacity="0.28"
          style={{ animation: "float 4s ease-in-out infinite 0.8s" }}>{'{ }'}</text>
      </g>

      {[
        [170, 70, 3, "#4A90FF", "1s"],
        [380, 72, 2.4, "#EAA914", "2s"],
        [110, 120, 2, "#FF6B6B", "3s"],
        [430, 130, 2.6, "#4A90FF", "0.5s"],
      ].map(([x, y, r, col, delay], i) => (
        <circle key={i}
          cx={x as number} cy={y as number} r={r as number} fill={col as string}
          opacity="0.3"
          style={{ animation: `float ${3 + i * 0.3}s ease-in-out infinite ${delay}` }} />
      ))}
    </svg>
  );
}
