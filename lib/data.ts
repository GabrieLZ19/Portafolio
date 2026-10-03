import { Experience, Education, Skill, Project, ContactInfo } from "@/types";

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Padel Nexus",
    position: "Lead Full Stack & Mobile Engineer",
    period: "Jun 2026 - Sep 2026",
    description:
      "Arquitectura y desarrollo integral del ecosistema para pádel (plataforma web, app móvil y API). Monorepo con Turborepo: web en Next.js (App Router) y Tailwind CSS v4, app móvil en React Native (Expo SDK 52) con NativeWind, y backend en Node.js, Express y Supabase (PostgreSQL). Sistema de torneos FAP (llaves, cuadros y zonas), programación de canchas con Dnd-Kit, reservas de turnos en tiempo real con WebSockets y marketplace deportivo.",
    technologies: [
      "Next.js",
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "Node.js",
      "Tailwind CSS",
      "WebSockets",
    ],
  },
  {
    id: 2,
    company: "Naving",
    position: "Desarrollador Full Stack & Mobile",
    period: "Jul 2026 - Sep 2026",
    description:
      "Desarrollo y lanzamiento a producción en App Store y Google Play de app móvil náutica (iOS y Android). Arquitectura con React Native y Expo, telemetría y tracking GPS en segundo plano con mapas offline, telemetría de combustible atómica, alertas SOS de emergencia, pasarela de suscripciones con Apple IAP y Mercado Pago, e integración con Spotify SDK.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "Google Maps",
    ],
  },
  {
    id: 3,
    company: "ServixPlace",
    position: "Desarrollador Frontend & Web",
    period: "Ago 2026",
    description:
      "Desarrollo de la landing page institucional y sistema de captación para marketplace de servicios para el hogar con identidad verificada. Interfaz responsiva con Next.js y Tailwind CSS, integración de waitlist con Resend y arquitectura enfocada en conversión y confianza.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Resend"],
  },
  {
    id: 4,
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
    id: 5,
    company: "Beland",
    position: "Desarrollador Full Stack & Mobile",
    period: "Jul 2025 - Ene 2026",
    description:
      "Desarrollo de aplicación web y móvil para rewards sostenibles. Creación de interfaces en React Native/Expo, backend en NestJS con endpoints RESTful y metodología SCRUM.",
    technologies: ["React Native", "Expo", "Nest JS", "SCRUM"],
  },
  {
    id: 6,
    company: "Cubix Casino & Bets",
    position: "Desarrollador Full Stack (Prácticas)",
    period: "Jul 2024 - Ago 2024",
    description:
      "Desarrollo de plataforma de apuestas con criptomonedas. Módulos de Casino y Tragamonedas. Interfaces responsivas con Ant Design y Tailwind CSS, y gestión de base de datos PostgreSQL con transacciones seguras.",
    technologies: ["React", "Tailwind CSS", "Ant Design", "PostgreSQL"],
  },
  {
    id: 7,
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
    title: "Padel Nexus",
    description:
      "Ecosistema integral para el mundo del pádel compuesto por plataforma web y aplicación móvil. Gestión de torneos oficiales federados FAP (llaves eliminatorias, zonas y programación de canchas), sistema de reservas de turnos en clubes en tiempo real, carné y ranking provincial/nacional, marketplace deportivo y módulo 'Nos falta uno'.",
    technologies: [
      "Next.js",
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "Node.js",
      "Tailwind CSS",
      "WebSockets",
    ],
    image: "/projects/padelnexus.png",
    demoUrl: "https://padelnexus.netlify.app/",
  },
  {
    id: 2,
    title: "Naving",
    description:
      "Bitácora náutica inteligente publicada en App Store y Google Play. Monitoreo de navegación GPS en tiempo real, mapas offline, telemetría de combustible, sistema de alertas SOS, integración con Spotify y gestión de embarcaciones.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Supabase",
      "Google Maps",
    ],
    image: "/projects/naving.png",
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.whapy.navingapp",
  },
  {
    id: 3,
    title: "ServixPlace",
    description:
      "Plataforma y landing institucional para conexión de servicios del hogar con profesionales verificados. Integración de lista de espera con Resend, diseño moderno y alta conversión.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Resend"],
    image: "/projects/servix.png",
    demoUrl: "https://www.servixplace.com/",
  },
  {
    id: 4,
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
    id: 5,
    title: "Beland",
    description:
      "App web y móvil que recompensa a los usuarios por acciones sostenibles. Desarrollo con React Native/Expo y backend en NestJS.",
    technologies: ["React Native", "Expo", "Nest JS"],
    image: "/projects/beland.png",
    demoUrl: "https://beland.app/",
  },
  {
    id: 6,
    title: "Cubix Casino & Bets",
    description:
      "Plataforma de criptomonedas y casino virtual con transacciones integradas y un diseño web interactivo.",
    technologies: ["React", "Tailwind CSS", "PostgreSQL"],
    image: "/projects/cubix.png",
    demoUrl: "https://cubixcasino.com/",
  },
  {
    id: 7,
    title: "Fast Burger",
    description:
      "Ecommerce para cadena de comida rápida, autenticación, pagos y chat en tiempo real.",
    technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    image: "/projects/fastburgers.png",
    demoUrl: "https://fast-burguers.vercel.app/",
  },
  {
    id: 8,
    title: "Recorder IA",
    description:
      "Aplicación orientada a la productividad estudiantil mediante herramientas de grabación y gestión inteligente.",
    technologies: ["React Native", "AI Integration", "TypeScript", "Supabase"],
    image: "",
    demoUrl: "",
  },
  {
    id: 9,
    title: "El Diccionario del Mentiroso",
    description:
      "Videojuego móvil de deducción social desarrollado independientemente desde la conceptualización hasta la implementación.",
    technologies: ["Game Development", "Mobile", "React Native", "Expo"],
    image: "",
    demoUrl: "",
  },
  {
    id: 10,
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
