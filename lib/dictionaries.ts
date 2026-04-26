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
      cv: "CV"
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
      subtitle: "Construyendo arquitecturas escalables y experiencias precisas.",
      downloadCv: "Descargar CV"
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
        exp: "Años exp."
      }
    },
    experience: {
      title: "Experiencia",
      subtitle: "[Trayectoria Profesional]",
      items: [
        {
          id: 1,
          company: "Beland",
          position: "Desarrollador Full Stack & Mobile",
          period: "Jul 2025 - Ene 2026",
          description: "Desarrollo de aplicación web y móvil para rewards sostenibles. Creación de interfaces en React Native/Expo, backend en NestJS con endpoints RESTful y metodología SCRUM.",
          technologies: ["React Native", "Expo", "Nest JS", "SCRUM"],
        },
        {
          id: 2,
          company: "Cubix Casino & Bets",
          position: "Desarrollador Full Stack (Prácticas)",
          period: "Jul 2024 - Ago 2024",
          description: "Desarrollo de plataforma de apuestas con criptomonedas. Módulos de Casino y Tragamonedas. Interfaces responsivas con Ant Design y Tailwind CSS, y gestión de base de datos PostgreSQL con transacciones seguras.",
          technologies: ["React", "Tailwind CSS", "Ant Design", "PostgreSQL"],
        },
        {
          id: 3,
          company: "Fast Burger",
          position: "Desarrollador Full Stack (Prácticas)",
          period: "Abr 2024 - May 2024",
          description: "Implementación de autenticación de usuarios y pasarela de pagos. Sistema de chat en tiempo real con Socket.io y optimización del estado global mediante Context API.",
          technologies: ["React", "Context API", "Socket.io", "PostgreSQL"],
        },
      ]
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
      ]
    },
    skills: {
      title: "Habilidades",
      subtitle: "[Stack Tecnológico]",
      items: [
        {
          category: "Frontend & Mobile",
          items: ["React.js", "React Native (Expo)", "Next.js", "TypeScript", "Redux", "Tailwind CSS", "Bootstrap", "Flutter"],
        },
        {
          category: "Backend & Bases de Datos",
          items: ["Node.js", "Express.js", "NestJS", "PostgreSQL", "MongoDB", "Mongoose", "Supabase"],
        },
        {
          category: "Web3 & Herramientas",
          items: ["Git", "Socket.io", "WebSockets", "Vite.js"],
        },
      ]
    },
    projects: {
      title: "Proyectos",
      subtitle: "[Trabajos Destacados]",
      viewProject: "Ver Proyecto",
      items: [
        {
          id: 1,
          title: "Beland",
          description: "App web y móvil que recompensa a los usuarios por acciones sostenibles. Desarrollo con React Native/Expo y backend en NestJS.",
          technologies: ["React Native", "Expo", "Nest JS"],
          image: "/projects/beland.png",
          demoUrl: "https://beland.app/",
        },
        {
          id: 2,
          title: "Cubix Casino & Bets",
          description: "Plataforma de criptomonedas y casino virtual con transacciones integradas y un diseño web interactivo.",
          technologies: ["React", "Tailwind CSS", "PostgreSQL"],
          image: "/projects/cubix.png",
          demoUrl: "https://cubixcasino.com/",
        },
        {
          id: 3,
          title: "Fast Burger",
          description: "Ecommerce para cadena de comida rápida, autenticación, pagos y chat en tiempo real.",
          technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
          image: "/projects/fastburgers.png",
          demoUrl: "https://fast-burguers.vercel.app/",
        },
        {
          id: 4,
          title: "Recorder IA",
          description: "Aplicación orientada a la productividad estudiantil mediante herramientas de grabación y gestión inteligente.",
          technologies: ["React Native", "AI Integration", "TypeScript", "Supabase"],
          image: "",
          demoUrl: "",
        },
        {
          id: 5,
          title: "El Diccionario del Mentiroso",
          description: "Videojuego móvil de deducción social desarrollado independientemente desde la conceptualización hasta la implementación.",
          technologies: ["Game Development", "Mobile", "React Native", "Expo"],
          image: "",
          demoUrl: "",
        },
        {
          id: 6,
          title: "Sistema de Turnos",
          description: "Aplicación web CRUD para gestión de agendas y reservas de turnos con backend relacional.",
          technologies: ["React", "Redux", "TypeScript", "PostgreSQL"],
          image: "",
          demoUrl: "",
        },
      ]
    },
    contact: {
      title: "Contacto",
      subtitle: "[Protocolo de Comunicación]",
      heading: "Iniciemos un \n nuevo proyecto.",
      paragraph: "Si necesitas escala, precisión o construir desde cero, estoy disponible para hablar.",
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
        invalidFormat: "Formato inválido"
      }
    }
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
      cv: "Resume"
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
      downloadCv: "Download Resume"
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
        exp: "Years exp."
      }
    },
    experience: {
      title: "Experience",
      subtitle: "[Career Path]",
      items: [
        {
          id: 1,
          company: "Beland",
          position: "Full Stack & Mobile Developer",
          period: "Jul 2025 - Jan 2026",
          description: "Developed web and mobile application for sustainable rewards. Created interfaces in React Native/Expo, backend in NestJS with RESTful endpoints, following SCRUM methodology.",
          technologies: ["React Native", "Expo", "Nest JS", "SCRUM"],
        },
        {
          id: 2,
          company: "Cubix Casino & Bets",
          position: "Full Stack Developer (Internship)",
          period: "Jul 2024 - Aug 2024",
          description: "Developed a cryptocurrency betting platform. Casino and Slots modules. Responsive interfaces with Ant Design and Tailwind CSS, and PostgreSQL database management with secure transactions.",
          technologies: ["React", "Tailwind CSS", "Ant Design", "PostgreSQL"],
        },
        {
          id: 3,
          company: "Fast Burger",
          position: "Full Stack Developer (Internship)",
          period: "Apr 2024 - May 2024",
          description: "Implemented user authentication and payment gateway. Real-time chat system with Socket.io and global state optimization using Context API.",
          technologies: ["React", "Context API", "Socket.io", "PostgreSQL"],
        },
      ]
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
      ]
    },
    skills: {
      title: "Skills",
      subtitle: "[Tech Stack]",
      items: [
        {
          category: "Frontend & Mobile",
          items: ["React.js", "React Native (Expo)", "Next.js", "TypeScript", "Redux", "Tailwind CSS", "Bootstrap", "Flutter"],
        },
        {
          category: "Backend & Databases",
          items: ["Node.js", "Express.js", "NestJS", "PostgreSQL", "MongoDB", "Mongoose", "Supabase"],
        },
        {
          category: "Web3 & Tools",
          items: ["Git", "Socket.io", "WebSockets", "Vite.js"],
        },
      ]
    },
    projects: {
      title: "Projects",
      subtitle: "[Featured Work]",
      viewProject: "View Project",
      items: [
        {
          id: 1,
          title: "Beland",
          description: "Web and mobile app that rewards users for sustainable actions. Developed with React Native/Expo and backend in NestJS.",
          technologies: ["React Native", "Expo", "Nest JS"],
          image: "/projects/beland.png",
          demoUrl: "https://beland.app/",
        },
        {
          id: 2,
          title: "Cubix Casino & Bets",
          description: "Cryptocurrency and virtual casino platform with integrated transactions and interactive web design.",
          technologies: ["React", "Tailwind CSS", "PostgreSQL"],
          image: "/projects/cubix.png",
          demoUrl: "https://cubixcasino.com/",
        },
        {
          id: 3,
          title: "Fast Burger",
          description: "Ecommerce for a fast food chain, authentication, payments, and real-time chat.",
          technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
          image: "/projects/fastburgers.png",
          demoUrl: "https://fast-burguers.vercel.app/",
        },
        {
          id: 4,
          title: "Recorder IA",
          description: "Student productivity-oriented application using recording and intelligent management tools.",
          technologies: ["React Native", "AI Integration", "TypeScript", "Supabase"],
          image: "",
          demoUrl: "",
        },
        {
          id: 5,
          title: "The Liar's Dictionary",
          description: "Social deduction mobile game developed independently from conceptualization to implementation.",
          technologies: ["Game Development", "Mobile", "React Native", "Expo"],
          image: "",
          demoUrl: "",
        },
        {
          id: 6,
          title: "Appointment System",
          description: "CRUD web application for agenda management and appointment booking with relational backend.",
          technologies: ["React", "Redux", "TypeScript", "PostgreSQL"],
          image: "",
          demoUrl: "",
        },
      ]
    },
    contact: {
      title: "Contact",
      subtitle: "[Communication Protocol]",
      heading: "Let's start a \n new project.",
      paragraph: "If you need scale, precision, or to build from scratch, I am available to talk.",
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
        invalidFormat: "Invalid format"
      }
    }
  }
};
