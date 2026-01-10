import { Experience, Education, Skill, Project, ContactInfo } from "@/types";

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Beland",
    position: "Desarrollador Full Stack",
    period: "Jul 2024 - Presente",
    description:
      "Desarrollo de una plataforma móvil que recompensa acciones sostenibles mediante una moneda virtual que se puede usar para comprar productos y servicios.",
    technologies: [
      "React Native",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Socket.io",
      "Native Wind",
    ],
  },
  {
    id: 2,
    company: "Cubix",
    position: "Desarrollador Front-end",
    period: "Jul 2024 - Ago 2024",
    description:
      "Construcción de interfaces interactivas (sidebar, carruseles) utilizando React.js, Vite y Ant Design. Implementación de diseños desde Figma con alta fidelidad.",
    technologies: ["React.js", "Vite", "Ant Design", "Figma", "TypeScript"],
  },
  {
    id: 3,
    company: "Henry",
    position: "Desarrollador Full Stack",
    period: "Jun 2024",
    description:
      'Desarrollo del proyecto "FastBurgers": plataforma e-commerce con seguimiento en tiempo real, pasarela de pagos (PayPal) y autenticación de terceros.',
    technologies: ["React", "Node.js", "PayPal API", "MongoDB", "Express"],
  },
];

export const education: Education[] = [
  {
    id: 1,
    institution: "Universidad Nacional de La Rioja",
    degree: "Ingeniería en Sistemas de Información",
    period: "2025 - 2029",
    status: "En curso",
  },
  {
    id: 2,
    institution: "Universidad Tecnológica Nacional",
    degree: "Ingeniería en Sistemas y Programación",
    period: "2018 - 2023",
  },
  {
    id: 3,
    institution: "Henry",
    degree: "Desarrollador Full Stack",
    period: "2023 - 2024",
  },
  {
    id: 4,
    institution: "Alura Latam",
    degree: "Programación G5",
    period: "2023",
  },
];

export const skills: Skill[] = [
  {
    category: "Frontend",
    items: [
      "React.js",
      "React Native",
      "Next.js",
      "Vite",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Bootstrap",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "NestJS", "PHP", "Java", "Spring Boot", "Express"],
  },
  {
    category: "Bases de Datos",
    items: ["MySQL", "PostgreSQL", "MongoDB", "NoSQL"],
  },
  {
    category: "Herramientas & Otros",
    items: ["Git", "GitHub", "Figma", "Scrum", "Docker"],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Beland Platform",
    description:
      "Plataforma móvil que recompensa acciones sostenibles con monedas virtuales. Se puede usar para comprar productos y servicios.",
    technologies: [
      "React Native",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Socket.io",
      "Native Wind",
    ],
    image: "/projects/beland.png",
    demoUrl: "https://beland.app/",
  },
  {
    id: 2,
    title: "FastBurgers",
    description:
      "Aplicación e-commerce de venta de hamburguesas con tracking en tiempo real, chatbot integrado y pasarela de pagos PayPal.",
    technologies: ["React", "Node.js", "MongoDB", "PayPal API", "Socket.io"],
    image: "/projects/fastburgers.png",
    demoUrl: "https://fast-burguers.vercel.app/",
  },
  {
    id: 3,
    title: "Cubix - Plataforma Interactiva",
    description:
      "Plataforma web con interfaces interactivas incluyendo sidebar dinámico, carruseles de contenido y componentes reutilizables. Implementación pixel-perfect desde diseños de Figma.",
    technologies: ["React.js", "Vite", "Ant Design", "Figma", "TypeScript"],
    image: "/projects/cubix.png",
    demoUrl: "https://cubixcasino.com/",
  },
];

export const contactInfo: ContactInfo = {
  email: "gabriellazo48@gmail.com",
  phone: "03865376697",
  location: "San Miguel de Tucumán, Argentina",
  linkedin: "gabriel-lazo20",
  github: "GabrieLZ19",
};
