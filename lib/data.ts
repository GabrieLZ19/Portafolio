import { Experience, Education, Skill, Project, ContactInfo } from "@/types";

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Yatta",
    position: "Desarrollador de Software Desktop & Sistemas",
    period: "Sep 2026 - Actualidad",
    description:
      "Diseño y desarrollo integral de aplicación de escritorio POS para facturación electrónica (ARCA / ex AFIP). Arquitectura de costo cero en infraestructura con Tauri v2, Rust y SQLite embebido por perfil. Integración de sidecar en TypeScript para emisión fiscal en tiempo real (Factura C y Notas de Crédito), tickets térmicos ESC/POS, sistema de licencias por HWID offline y pipeline de auto-actualizaciones firmadas.",
    technologies: [
      "Tauri v2",
      "Rust",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "SQLite",
      "ARCA / SOAP",
    ],
  },
  {
    id: 2,
    company: "Furech",
    position: "Desarrollador Frontend & Web",
    period: "Ago 2026",
    description:
      "Desarrollo integral de la landing page institucional y de marketing para plataforma SaaS all-in-one (CRM, Mail, Meet, Drive y Flows IA). Arquitectura moderna con Next.js, React y TypeScript, sistema de temas dinámico claro/oscuro, diseño responsivo con Tailwind CSS y microanimaciones interactivas con Framer Motion.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    id: 3,
    company: "Beland",
    position: "Desarrollador Full Stack & Mobile",
    period: "Jul 2025 - Ene 2026",
    description:
      "Desarrollo de aplicación web y móvil para rewards sostenibles. Creación de interfaces en React Native/Expo, backend en NestJS con endpoints RESTful y metodología SCRUM.",
    technologies: ["React Native", "Expo", "Nest JS", "SCRUM"],
  },
  {
    id: 4,
    company: "Cubix Casino & Bets",
    position: "Desarrollador Full Stack (Prácticas)",
    period: "Jul 2024 - Ago 2024",
    description:
      "Desarrollo de plataforma de apuestas con criptomonedas. Módulos de Casino y Tragamonedas. Interfaces responsivas con Ant Design y Tailwind CSS, y gestión de base de datos PostgreSQL con transacciones seguras.",
    technologies: ["React", "Tailwind CSS", "Ant Design", "PostgreSQL"],
  },
  {
    id: 5,
    company: "Fast Burger",
    position: "Desarrollador Full Stack (Prácticas)",
    period: "Abr 2024 - May 2024",
    description:
      "Implementación de autenticación de usuarios y pasarela de pagos. Sistema de chat en tiempo real con Socket.io y optimización del estado global mediante Context API.",
    technologies: ["React", "Context API", "Socket.io", "PostgreSQL"],
  },
];

export const education: Education[] = [
  {
    id: 1,
    institution: "Universidad Nacional de La Rioja (UNLaR)",
    degree: "Ingeniería en Sistemas de Información",
    period: "En curso",
    status: "En curso",
  },
  {
    id: 2,
    institution: "Henry Bootcamp (800 horas)",
    degree: "Full Stack Web Developer",
    period: "2024",
  },
  {
    id: 3,
    institution: "Universidad Tecnológica Nacional (UTN - FRT)",
    degree: "Ingeniería en Sistemas e Información",
    period: "2018 - 2023",
    status: "Cursada parcial",
  },
];

export const skills: Skill[] = [
  {
    category: "Frontend & Mobile",
    items: [
      "React.js",
      "React Native (Expo)",
      "Next.js",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "Bootstrap",
      "Flutter",
    ],
  },
  {
    category: "Backend & Bases de Datos",
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "PostgreSQL",
      "MongoDB",
      "Mongoose",
      "Supabase",
    ],
  },
  {
    category: "Web3 & Herramientas",
    items: ["Git", "Socket.io", "WebSockets", "Vite.js"],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Yatta",
    description:
      "Sistema de facturación electrónica POS de escritorio (Tauri v2 + Rust) para emisión de Factura C y Notas de Crédito con autorización en tiempo real ante ARCA (ex AFIP). Arquitectura de costo cero en infraestructura con SQLite embebido por perfil, sidecar local de alto rendimiento, soporte para tickets térmicos (58/80mm), QR RG 4892, licencias offline por hardware (HWID) y auto-actualizaciones firmadas.",
    technologies: [
      "Tauri v2",
      "Rust",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "SQLite",
      "ARCA / SOAP",
      "Bun",
    ],
    image: "/projects/yatta.png",
    videoUrl: "/projects/yatta-promo.mp4",
    demoUrl: "https://github.com/GabrieLZ19/Facturador-releases",
    githubUrl: "https://github.com/GabrieLZ19/Facturador-releases/releases",
  },
  {
    id: 2,
    title: "Furech",
    description:
      "Landing page de marketing e institucional para la suite SaaS Furech (CRM, Drive, Meet, Mail y Flows IA). Diseñada con alto impacto visual, modo oscuro/claro y microanimaciones fluidas.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    image: "/projects/furech.png",
    demoUrl: "https://www.furech.com/",
  },
  {
    id: 3,
    title: "Beland",
    description:
      "App web y móvil que recompensa a los usuarios por acciones sostenibles. Desarrollo con React Native/Expo y backend en NestJS.",
    technologies: ["React Native", "Expo", "Nest JS"],
    image: "/projects/beland.png",
    demoUrl: "https://beland.app/",
  },
  {
    id: 4,
    title: "Cubix Casino & Bets",
    description:
      "Plataforma de criptomonedas y casino virtual con transacciones integradas y un diseño web interactivo.",
    technologies: ["React", "Tailwind CSS", "PostgreSQL"],
    image: "/projects/cubix.png",
    demoUrl: "https://cubixcasino.com/",
  },
  {
    id: 5,
    title: "Fast Burger",
    description:
      "Ecommerce para cadena de comida rápida, autenticación, pagos y chat en tiempo real.",
    technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    image: "/projects/fastburgers.png",
    demoUrl: "https://fast-burguers.vercel.app/",
  },
  {
    id: 6,
    title: "Recorder IA",
    description:
      "Aplicación orientada a la productividad estudiantil mediante herramientas de grabación y gestión inteligente.",
    technologies: ["React Native", "AI Integration", "TypeScript", "Supabase"],
    image: "",
    demoUrl: "",
  },
  {
    id: 7,
    title: "El Diccionario del Mentiroso",
    description:
      "Videojuego móvil de deducción social desarrollado independientemente desde la conceptualización hasta la implementación.",
    technologies: ["Game Development", "Mobile", "React Native", "Expo"],
    image: "",
    demoUrl: "",
  },
  {
    id: 8,
    title: "Sistema de Turnos",
    description:
      "Aplicación web CRUD para gestión de agendas y reservas de turnos con backend relacional.",
    technologies: ["React", "Redux", "TypeScript", "PostgreSQL"],
    image: "",
    demoUrl: "",
  },
];

export const contactInfo: ContactInfo = {
  email: "gabriellazo48@gmail.com",
  phone: "+54 9 3865 376697",
  location: "La Rioja, Argentina",
  linkedin: "gabriel-lazo20",
  github: "GabrieLZ19",
};
