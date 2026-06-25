export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  year: number;
  slug: string;
  technologies: string[];
  participants: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "ChessMate",
    description: "Un asistente de ajedrez inteligente con piezas motorizadas y entrenamiento por IA.",
    longDescription: "ChessMate es un compañero de ajedrez inteligente: juega en una aplicación web o en un tablero real con piezas motorizadas, recibe entrenamiento instantáneo y controles de voz para accesibilidad, haciendo que el ajedrez sea inclusivo e interactivo.",
    year: 2025,
    slug: "chessmate",
    technologies: ["Python", "Computer Vision", "IA", "IoT"],
    participants: ["Ana Martínez", "Carlos Pérez", "Luis Gómez"],
  },
  {
    id: "2",
    title: "Coach Bob!",
    description: "Experiencia interactiva de realidad aumentada para el gimnasio.",
    longDescription: "Coach Bob! es una experiencia interactiva de AR que te guía en tus rutinas de ejercicio con un entrenador virtual. Usa visión computarizada para corregir tu forma y motivarte en tiempo real.",
    year: 2025,
    slug: "coach-bob",
    technologies: ["AR", "React Native", "TensorFlow"],
    participants: ["María Rodríguez", "Pedro Sánchez"],
  },
  {
    id: "3",
    title: "Lattice",
    description: "Comunicación holográfica en cualquier momento y lugar.",
    longDescription: "Lattice permite comunicación holográfica en tiempo real, transformando la manera en que las personas se conectan a distancia mediante proyecciones 3D interactivas.",
    year: 2025,
    slug: "lattice",
    technologies: ["WebRTC", "Three.js", "WebSockets"],
    participants: ["José Fernández", "Laura Jiménez", "Diego Ramírez"],
  },
  {
    id: "4",
    title: "AutOST",
    description: "Generación de música en tiempo real para acompañar cualquier escenario.",
    longDescription: "AutOST genera música en tiempo real que se adapta al estado de ánimo y las acciones del usuario, ideal para videojuegos, presentaciones y experiencias interactivas.",
    year: 2024,
    slug: "autost",
    technologies: ["Python", "Magenta", "TensorFlow", "WebAudio"],
    participants: ["Sofía Torres", "Andrés Nova"],
  },
  {
    id: "5",
    title: "Flashback",
    description: "Experiencia VR que transforma recuerdos en exhibiciones interactivas.",
    longDescription: "Flashback es una experiencia de realidad virtual que convierte tus recuerdos más preciados en exhibiciones interactivas e inmersivas. Fotos, videos y sonidos cobran vida en entornos 3D.",
    year: 2024,
    slug: "flashback",
    technologies: ["Unity", "C#", "VR", "Three.js"],
    participants: ["Valentina Cruz", "Gabriel Santos", "Camila Reyes"],
  },
  {
    id: "6",
    title: "PearPiano",
    description: "Herramienta de composición musical en realidad aumentada.",
    longDescription: "PearPiano es una herramienta de composición musical en AR que da vida a la música no solo para tus oídos sino también para tus ojos, permitiendo componer visualmente en el espacio 3D.",
    year: 2023,
    slug: "pearpiano",
    technologies: ["AR", "Swift", "AudioKit"],
    participants: ["Daniela Ortiz", "Miguel Ángel"],
  },
  {
    id: "7",
    title: "DreamWeaver",
    description: "Generador de cuentos infantiles con texto e imágenes usando IA.",
    longDescription: "DreamWeaver genera cuentos infantiles personalizados con texto e imágenes usando inteligencia artificial, creando historias únicas para cada niño.",
    year: 2023,
    slug: "dreamweaver",
    technologies: ["GPT", "DALL-E", "Next.js"],
    participants: ["Elena Vargas", "Ricardo Méndez", "Paola Castillo"],
  },
  {
    id: "8",
    title: "BrAInstorm",
    description: "Visualización del arte de la emoción mediante interfaces cerebrales.",
    longDescription: "BrAInstorm visualiza las emociones humanas en tiempo real usando interfaces cerebro-computadora, transformando señales cerebrales en arte visual generativo.",
    year: 2022,
    slug: "brainstorm",
    technologies: ["EEG", "Python", "Processing", "Machine Learning"],
    participants: ["Fernanda López", "Héctor Peña"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
