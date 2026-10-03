import { ContactInfo } from "@/types";

export const dictionaries = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      experience: "Experiencia",
      education: "Educación",
      skills: "Habilidades",
      projects: "Proyectos",
      contact: "Contacto",
      cv: "CV",
    },
    hero: {
      greeting: "HOLA, SOY",
      name: "Gabriel Lazo",
      role: "Desarrollador Full Stack & Mobile.",
      location: "La Rioja, Argentina",
      cta: "Ver Proyectos",
      contact: "Contactar",
      portfolio: "Portafolio 2026",
      available: "Disponible para trabajo",
      subtitle:
        "Construyendo arquitecturas escalables y experiencias precisas.",
      downloadCv: "Descargar CV",
    },
    about: {
      title: "Sobre Mí",
      subtitle: "[01] Biografía",
      p1: "Soy un Desarrollador Full Stack & Mobile con base en Argentina. Diseño arquitecturas de software que resuelvan problemas complejos de forma escalable.",
      p2: "Me especializo en React Native, Next.js y Node.js, construyendo aplicaciones móviles y web de alta calidad con arquitecturas robustas y escalables.",
      p3: "Una buena interfaz no es sólo estética — es una herramienta técnica que debe funcionar con total eficiencia.",
      stats: {
        projects: "Proyectos",
        tech: "Tecnologías",
        exp: "Años exp.",
      },
    },
    experience: {
      title: "Experiencia",
      subtitle: "[Trayectoria Profesional]",
      items: [
        {
          id: 1,
          company: "Padel Nexus",
          position: "Lead Full Stack & Mobile Engineer",
          period: "Jun 2026 - Actualidad",
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
          period: "Jul 2026 - Actualidad",
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
          technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Resend",
          ],
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
      ],
    },
    education: {
      title: "Educación",
      subtitle: "[Formación Académica]",
      items: [
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
      ],
    },
    skills: {
      title: "Habilidades",
      subtitle: "[Stack Tecnológico]",
      items: [
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
      ],
    },
    projects: {
      title: "Proyectos",
      subtitle: "[Trabajos Destacados]",
      viewProject: "Ver Proyecto",
      items: [
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
          technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Resend",
          ],
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
          technologies: [
            "React Native",
            "AI Integration",
            "TypeScript",
            "Supabase",
          ],
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
      ],
    },
    contact: {
      title: "Contacto",
      subtitle: "[Protocolo de Comunicación]",
      heading: "Iniciemos un \n nuevo proyecto.",
      paragraph:
        "Si necesitas escala, precisión o construir desde cero, estoy disponible para hablar.",
      emailLabel: "Email",
      locationLabel: "Ubicación",
      whatsappLabel: "WhatsApp",
      form: {
        name: "Nombre",
        namePlaceholder: "Tu nombre completo",
        email: "Email",
        emailPlaceholder: "tu@email.com",
        message: "Mensaje",
        messagePlaceholder: "Cuéntame sobre tu proyecto...",
        send: "Enviar Mensaje",
        sending: "Enviando...",
        successTitle: "Mensaje Transmitido",
        successMessage: "Comunicación recibida. Respuesta pronto.",
        error: "Hubo un error al enviar el mensaje. Inténtalo de nuevo.",
        required: "Requerido",
        invalidFormat: "Formato inválido",
      },
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      cv: "Resume",
    },
    hero: {
      greeting: "HELLO, I AM",
      name: "Gabriel Lazo",
      role: "Full Stack & Mobile Developer.",
      location: "La Rioja, Argentina",
      cta: "View Projects",
      contact: "Contact Me",
      portfolio: "Portfolio 2026",
      available: "Available for work",
      subtitle: "Building scalable architectures and precise experiences.",
      downloadCv: "Download Resume",
    },
    about: {
      title: "About Me",
      subtitle: "[01] Biography",
      p1: "I am a Full Stack & Mobile Developer based in Argentina. I design software architectures that solve complex problems in a scalable way.",
      p2: "I specialize in React Native, Next.js, and Node.js, building high-quality mobile and web applications with robust and scalable architectures.",
      p3: "A good interface is not just aesthetics — it's a technical tool that must work with total efficiency.",
      stats: {
        projects: "Projects",
        tech: "Technologies",
        exp: "Years exp.",
      },
    },
    experience: {
      title: "Experience",
      subtitle: "[Career Path]",
      items: [
        {
          id: 1,
          company: "Naving",
          position: "Full Stack & Mobile Developer",
          period: "Jul 2026 - Sep 2026",
          description:
            "Lead development and production release on the App Store and Google Play for an intelligent nautical logbook app (iOS and Android). Built with React Native and Expo, background GPS telemetry and tracking with offline maps, atomic fuel telemetry, emergency SOS alerts, Apple IAP & Mercado Pago subscription gateway, and Spotify SDK integration.",
          technologies: [
            "React Native",
            "Expo",
            "TypeScript",
            "Supabase",
            "Google Maps",
          ],
        },
        {
          id: 2,
          company: "ServixPlace",
          position: "Frontend & Web Developer",
          period: "Aug 2026",
          description:
            "Development of the marketing landing page and user acquisition system for ServixPlace, a verified-identity service marketplace. Built with Next.js and Tailwind CSS, featuring an automated waitlist integrated with Resend, and high-conversion UX design.",
          technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Resend",
          ],
        },
        {
          id: 3,
          company: "Furech",
          position: "Frontend & Web Developer",
          period: "Aug 2026",
          description:
            "End-to-end development of the official marketing and landing page for an all-in-one SaaS platform (CRM, Mail, Meet, Drive, and AI Flows). Architecture built with Next.js, React, and TypeScript, seamless dark/light theme switching, ultra-responsive layout with Tailwind CSS, and interactive micro-animations using Framer Motion.",
          technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
          ],
        },
        {
          id: 4,
          company: "Beland",
          position: "Full Stack & Mobile Developer",
          period: "Jul 2025 - Jan 2026",
          description:
            "Developed web and mobile application for sustainable rewards. Created interfaces in React Native/Expo, backend in NestJS with RESTful endpoints, following SCRUM methodology.",
          technologies: ["React Native", "Expo", "Nest JS", "SCRUM"],
        },
        {
          id: 5,
          company: "Cubix Casino & Bets",
          position: "Full Stack Developer (Internship)",
          period: "Jul 2024 - Aug 2024",
          description:
            "Developed a cryptocurrency betting platform. Casino and Slots modules. Responsive interfaces with Ant Design and Tailwind CSS, and PostgreSQL database management with secure transactions.",
          technologies: ["React", "Tailwind CSS", "Ant Design", "PostgreSQL"],
        },
        {
          id: 6,
          company: "Fast Burger",
          position: "Full Stack Developer (Internship)",
          period: "Apr 2024 - May 2024",
          description:
            "Implemented user authentication and payment gateway. Real-time chat system with Socket.io and global state optimization using Context API.",
          technologies: ["React", "Context API", "Socket.io", "PostgreSQL"],
        },
      ],
    },
    education: {
      title: "Education",
      subtitle: "[Academic Background]",
      items: [
        {
          id: 1,
          institution: "National University of La Rioja (UNLaR)",
          degree: "Information Systems Engineering",
          period: "Ongoing",
          status: "Ongoing",
        },
        {
          id: 2,
          institution: "Henry Bootcamp (800 hours)",
          degree: "Full Stack Web Developer",
          period: "2024",
        },
        {
          id: 3,
          institution: "National Technological University (UTN - FRT)",
          degree: "Information Systems Engineering",
          period: "2018 - 2023",
          status: "Partial completion",
        },
      ],
    },
    skills: {
      title: "Skills",
      subtitle: "[Tech Stack]",
      items: [
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
          category: "Backend & Databases",
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
          category: "Web3 & Tools",
          items: ["Git", "Socket.io", "WebSockets", "Vite.js"],
        },
      ],
    },
    projects: {
      title: "Projects",
      subtitle: "[Featured Work]",
      viewProject: "View Project",
      items: [
        {
          id: 1,
          title: "Naving",
          description:
            "Intelligent nautical logbook published on the App Store and Google Play. Real-time GPS navigation monitoring, offline maps, fuel telemetry, emergency SOS alerts, Spotify integration, and comprehensive vessel fleet management.",
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
          id: 2,
          title: "ServixPlace",
          description:
            "Marketing landing page and waitlist platform for ServixPlace, connecting homeowners with verified service professionals. Built with Next.js, Tailwind CSS, and Resend.",
          technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Resend",
          ],
          image: "/projects/servix.png",
          demoUrl: "https://www.servixplace.com/",
        },
        {
          id: 3,
          title: "Furech",
          description:
            "Marketing and product landing page for Furech's all-in-one SaaS suite (CRM, Drive, Meet, Mail, and AI Flows). Built with high visual impact, dark/light modes, and fluid animations.",
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
          id: 4,
          title: "Beland",
          description:
            "Web and mobile app that rewards users for sustainable actions. Developed with React Native/Expo and backend in NestJS.",
          technologies: ["React Native", "Expo", "Nest JS"],
          image: "/projects/beland.png",
          demoUrl: "https://beland.app/",
        },
        {
          id: 5,
          title: "Cubix Casino & Bets",
          description:
            "Cryptocurrency and virtual casino platform with integrated transactions and interactive web design.",
          technologies: ["React", "Tailwind CSS", "PostgreSQL"],
          image: "/projects/cubix.png",
          demoUrl: "https://cubixcasino.com/",
        },
        {
          id: 6,
          title: "Fast Burger",
          description:
            "Ecommerce for a fast food chain, authentication, payments, and real-time chat.",
          technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
          image: "/projects/fastburgers.png",
          demoUrl: "https://fast-burguers.vercel.app/",
        },
        {
          id: 7,
          title: "Recorder IA",
          description:
            "Student productivity-oriented application using recording and intelligent management tools.",
          technologies: [
            "React Native",
            "AI Integration",
            "TypeScript",
            "Supabase",
          ],
          image: "",
          demoUrl: "",
        },
        {
          id: 8,
          title: "El Diccionario del Mentiroso",
          description:
            "Social deduction mobile game developed independently from conceptualization to implementation.",
          technologies: ["Game Development", "Mobile", "React Native", "Expo"],
          image: "",
          demoUrl: "",
        },
        {
          id: 9,
          title: "Appointment System",
          description:
            "CRUD web application for agenda management and appointment booking with relational backend.",
          technologies: ["React", "Redux", "TypeScript", "PostgreSQL"],
          image: "",
          demoUrl: "",
        },
      ],
    },
    contact: {
      title: "Contact",
      subtitle: "[Communication Protocol]",
      heading: "Let's start a \n new project.",
      paragraph:
        "If you need scale, precision, or to build from scratch, I am available to talk.",
      emailLabel: "Email",
      locationLabel: "Location",
      whatsappLabel: "WhatsApp",
      form: {
        name: "Name",
        namePlaceholder: "Your full name",
        email: "Email",
        emailPlaceholder: "you@email.com",
        message: "Message",
        messagePlaceholder: "Tell me about your project...",
        send: "Send Message",
        sending: "Sending...",
        successTitle: "Message Transmitted",
        successMessage: "Communication received. Reply soon.",
        error: "There was an error sending the message. Please try again.",
        required: "Required",
        invalidFormat: "Invalid format",
      },
    },
  },
};
