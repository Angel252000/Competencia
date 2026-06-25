import type { Metadata } from "next";

export const SITE = {
  name: "1ra Competencia de Programación UNADECA",
  shortName: "Competencia UNADECA",
  url: "https://unadeca.edu.do",
  email: "competencias@unadeca.edu.do",
  location: "Campus UNADECA, Santo Domingo, República Dominicana",
  year: 2026,
} as const;

export const SITE_METADATA: Metadata = {
  title: SITE.name,
  description: `Participa en la primera competencia de programación de UNADECA. Hackathons, talleres, premios y más para estudiantes de todo el país.`,
  keywords: ["UNADECA", "competencia de programación", "hackathon", "República Dominicana", "programación", "estudiantes"],
  openGraph: { title: SITE.name, description: `Participa en la primera competencia de programación de UNADECA.`, locale: "es_DO", type: "website" },
};

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "El Evento", href: "/#about" },
  { label: "Cronograma", href: "/cronograma" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Registro", href: "/registro" },
  { label: "FAQ", href: "/faq" },
  { label: "Contacto", href: "/contacto" },
];

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Instagram", href: "#", icon: "📸" },
  { label: "Twitter/X", href: "#", icon: "🐦" },
  { label: "LinkedIn", href: "#", icon: "💼" },
  { label: "YouTube", href: "#", icon: "▶️" },
];

export const HERO_STATS = [
  { value: "500+", label: "Participantes" },
  { value: "10+", label: "Universidades" },
  { value: "$10K", label: "En premios" },
] as const;

export const ABOUT_FEATURES = [
  { icon: "🎯", title: "Retos reales", desc: "Problemas del mundo real para resolver" },
  { icon: "👥", title: "Networking", desc: "Conoce a otros talentos del país" },
  { icon: "🏆", title: "Premios", desc: "Más de $10,000 en premios" },
  { icon: "📚", title: "Talleres", desc: "Aprende de expertos de la industria" },
] as const;

export interface ScheduleEvent {
  time: string;
  title: string;
  type: keyof typeof SCHEDULE_TYPE_STYLES;
}

export interface ScheduleDay {
  day: string;
  events: ScheduleEvent[];
}

export const SCHEDULE: ScheduleDay[] = [
  {
    day: "Día 1 — Viernes",
    events: [
      { time: "08:00", title: "Registro y acreditación", type: "apertura" },
      { time: "09:00", title: "Ceremonia de apertura", type: "apertura" },
      { time: "10:00", title: "Taller: Introducción a la IA", type: "taller" },
      { time: "11:30", title: "Inicio del Hackathon", type: "competencia" },
      { time: "13:00", title: "Almuerzo", type: "taller" },
      { time: "14:00", title: "Taller: Desarrollo Web moderno", type: "taller" },
      { time: "16:00", title: "Mentorías técnicas", type: "competencia" },
      { time: "19:00", title: "Cierre del primer día", type: "cierre" },
    ],
  },
  {
    day: "Día 2 — Sábado",
    events: [
      { time: "08:00", title: "Apertura del segundo día", type: "apertura" },
      { time: "09:00", title: "Taller: DevOps y Cloud", type: "taller" },
      { time: "11:00", title: "Entrega de proyectos", type: "competencia" },
      { time: "13:00", title: "Almuerzo", type: "taller" },
      { time: "14:00", title: "Presentación de proyectos (Demo Fair)", type: "competencia" },
      { time: "16:00", title: "Evaluación del jurado", type: "competencia" },
      { time: "18:00", title: "Ceremonia de premiación", type: "premio" },
      { time: "20:00", title: "Cierre y networking", type: "cierre" },
    ],
  },
];

export const SCHEDULE_TYPE_STYLES: Record<string, string> = {
  apertura: "border-l-blue-bright bg-blue-bright/5",
  taller: "border-l-yellow bg-yellow/5",
  competencia: "border-l-green-500 bg-green-500/5",
  premio: "border-l-purple-500 bg-purple-500/5",
  cierre: "border-l-gray-400 bg-gray-100",
};

export const SCHEDULE_TYPE_LABELS: Record<string, string> = {
  apertura: "Apertura",
  taller: "Taller",
  competencia: "Competencia",
  premio: "Premiación",
  cierre: "Cierre",
};

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export const FOOTER_LINKS: Record<string, FooterLink[]> = {
  Evento: [
    { label: "Cronograma", href: "/cronograma" },
    { label: "Proyectos", href: "/proyectos" },
    { label: "Registro", href: "/registro" },
    { label: "FAQ", href: "/faq" },
  ],
  Recursos: [
    { label: "Bases y condiciones", href: "/faq" },
    { label: "Código de conducta", href: "/faq" },
    { label: "Guía del participante", href: "/faq" },
  ],
  UNADECA: [
    { label: "Sobre UNADECA", href: "https://unadeca.edu.do", external: true },
    { label: "Carreras", href: "https://unadeca.edu.do", external: true },
    { label: "Contacto", href: "/contacto" },
  ],
};

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "¿Quién puede participar?",
    answer: "Estudiantes universitarios de cualquier carrera y universidad del país. No es necesario ser de UNADECA. También pueden participar estudiantes de término y recién graduados (menos de 1 año).",
  },
  {
    question: "¿Tengo que saber programar?",
    answer: "Sí, aunque no necesitas ser un experto. Habrá categorías para diferentes niveles: principiante, intermedio y avanzado. También ofreceremos talleres previos para nivelar conocimientos.",
  },
  {
    question: "¿Es gratuito?",
    answer: "Sí, la participación es completamente gratuita. Incluye acceso a todos los talleres, mentorías, comidas durante el evento y materiales de trabajo.",
  },
  {
    question: "¿Puedo participar en equipo?",
    answer: "Sí, los equipos pueden ser de 2 a 4 personas. Si no tienes equipo, te ayudaremos a formar uno durante el evento.",
  },
  {
    question: "¿Qué necesito traer?",
    answer: "Tu propia laptop, cargador y muchas ganas de innovar. Nosotros proveemos internet, alimentación, café, snacks y estaciones de trabajo.",
  },
  {
    question: "¿Hay estacionamiento?",
    answer: "Sí, el campus de UNADECA cuenta con estacionamiento gratuito para los participantes durante ambos días del evento.",
  },
  {
    question: "¿Cómo se evaluarán los proyectos?",
    answer: "Un jurado de expertos de la industria evaluará los proyectos según: innovación, impacto, complejidad técnica, presentación y trabajo en equipo.",
  },
  {
    question: "¿Habrá certificados?",
    answer: "Sí, todos los participantes recibirán un certificado digital de participación. Los ganadores recibirán certificados especiales y premios.",
  },
];
