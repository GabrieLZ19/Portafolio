"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const projects = [
  {
    name: "Casino Cubix",
    description:
      "Desarrollo de la página web del Casino Cubix con criptomonedas para jugar múltiples juegos. Creación de páginas como Casino, Apuestas, Tragamonedas, entre otras. Uso de React Js, Vite Js y Ant Design",
    imageUrl: "./Cubix.png",
    link: "https://casino-cubix.vercel.app/", // Ruta del proyecto
  },
  {
    name: "Fast Burger",
    description:
      "Implementación de autenticación con terceros, pasarela de pagos con PayPal y Google Maps. Desarrollo de múltiples vistas: Inicio, Productos, Carrito, Seguimiento, Calificaciones, entre otras.",
    imageUrl: "./FastBurger.png",
    link: "https://fast-burguers.vercel.app/", // Ruta del proyecto
  },

  {
    name: "Ecommerce",
    description:
      "Desarrollo de un Ecommerce completo con dashboard, integración de localStorage, Context API y diseño responsivo. Uso de React, Next.js y Tailwind CSS para crear una experiencia de usuario optimizada.",
    imageUrl: "/images/ecommerce.png",
    link: "/projects/ecommerce", // Ruta del proyecto
  },
  {
    name: "Sistema de Turnos",
    description:
      "Desarrollo de una aplicación web para gestión de turnos con funcionalidades CRUD. Implementación de estilos modulares con CSS, gestión de estados con Redux y desarrollo con React y TypeScript.",
    imageUrl: "/images/sistema-turnos.png",
    link: "/projects/sistema-de-turnos", // Ruta del proyecto
  },
  {
    name: "Cinema",
    description:
      "Desarrollo de una aplicación para mostrar y agregar películas utilizando una base de datos no relacional. Implementación de una interfaz de usuario intuitiva con Bootstrap.",
    imageUrl: "/images/cinema.png",
    link: "/projects/cinema", // Ruta del proyecto
  },
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleImageClick = () => {
    // Navegar a la ruta del proyecto cuando se hace clic en la imagen
    router.push(projects[currentIndex].link);
  };

  const progressPercentage = ((currentIndex + 1) / projects.length) * 100;

  return (
    <section className="p-8">
      <h2 className="text-4xl text-white mb-4">My Portfolio</h2>

      <div className="flex items-center">
        {/* Flecha izquierda */}
        <button onClick={handlePrev} className="text-white text-3xl mr-4">
          &larr;
        </button>

        <div className="flex w-full bg-gray-800 rounded-lg p-4 items-center relative overflow-hidden">
          <div className="flex w-full h-96">
            <div className="flex w-full items-center transition-transform duration-300 ease-in-out ">
              {/* Imagen del proyecto */}
              <div className="w-1/2 cursor-pointer" onClick={handleImageClick}>
                <img
                  src={projects[currentIndex].imageUrl}
                  alt={projects[currentIndex].name}
                  className="rounded-lg object-cover"
                />
              </div>

              {/* Información del proyecto */}
              <div className="w-1/2 pl-4">
                <h3 className="text-green-400 text-2xl">
                  {projects[currentIndex].name}
                </h3>
                <p className="text-white">
                  {projects[currentIndex].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Flecha derecha */}
        <button onClick={handleNext} className="text-white text-3xl ml-4">
          &rarr;
        </button>
      </div>

      {/* Barra de progreso */}
      <div className="w-full bg-gray-700 h-2 rounded-full mt-4 overflow-hidden">
        <div
          className="bg-green-400 h-2 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </section>
  );
};

export default Portfolio;
