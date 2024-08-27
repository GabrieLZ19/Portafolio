"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const projects = [
  {
    name: "Casino Cubix",
    description:
      "Desarrollo de la página web del Casino Cubix con criptomonedas para jugar múltiples juegos. Creación de páginas como Casino, Apuestas, Tragamonedas, entre otras. Uso de React Js, Vite Js, Tailwind CSS y Ant Design",
    imageUrl: "./Cubix.png",
    link: "https://casino-cubix.vercel.app/",
  },
  {
    name: "Fast Burger",
    description:
      "Implementación de autenticación con terceros, pasarela de pagos con PayPal y Google Maps. Desarrollo de múltiples vistas: Inicio, Productos, Carrito, Seguimiento, Calificaciones, entre otras. Uso de React js,Next js, Typescript y Tailwind CSS",
    imageUrl: "./FastBurger.png",
    link: "https://fast-burguers.vercel.app/",
  },
  {
    name: "Ecommerce",
    description:
      "Desarrollo de un Ecommerce completo con dashboard, integración de localStorage, Context API y diseño responsivo. Uso de React, Next.js y Tailwind CSS para crear una experiencia de usuario optimizada.",
    imageUrl: "./Ecommerce.png",
    link: "https://github.com/GabrieLZ19/Ecommerce",
  },
  {
    name: "Sistema de Turnos",
    description:
      "Desarrollo de una aplicación web para gestión de turnos con funcionalidades CRUD. Implementación de estilos modulares con CSS, gestión de estados con Redux y desarrollo con React y TypeScript.",
    imageUrl: "./SistemaTurnos.png",
    link: "https://github.com/GabrieLZ19/SistemaTurnos",
  },
  {
    name: "Cinema",
    description:
      "Desarrollo de una aplicación para mostrar y agregar películas utilizando una base de datos no relacional. Implementación de una interfaz de usuario intuitiva con Bootstrap.",
    imageUrl: "./Cinema.png",
    link: "https://github.com/GabrieLZ19/Cinema",
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
    router.push(projects[currentIndex].link);
  };

  const progressPercentage = ((currentIndex + 1) / projects.length) * 100;

  return (
    <section className="p-4 pt-10 sm:p-8">
      <div className="flex items-center gap-2 md:gap-4 md:pl-8">
        <p className="text-gray-400">{"<h3>"}</p>
        <h2 className="text-3xl sm:text-4xl text-white mb-4">My Portfolio</h2>
        <p className="text-gray-400">{"<h3>"}</p>
      </div>
      <div className="flex items-center">
        {/* Flecha izquierda */}
        <button
          onClick={handlePrev}
          className="text-white text-2xl sm:text-3xl mr-2 sm:mr-4"
        >
          &larr;
        </button>

        <div className="flex w-full bg-gray-800 rounded-lg p-4 items-center relative overflow-hidden">
          <div className="flex flex-col sm:flex-row w-full h-72 sm:h-96">
            <div
              className="w-full sm:w-1/2 cursor-pointer"
              onClick={handleImageClick}
            >
              <img
                src={projects[currentIndex].imageUrl}
                alt={projects[currentIndex].name}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>

            <div className="w-full sm:w-1/2 sm:pl-4 mt-4 sm:mt-0 overflow-y-auto">
              <h3 className="text-green-400 text-xl sm:text-4xl">
                {projects[currentIndex].name}
              </h3>
              <p className="text-white text-sm sm:text-lg">
                {projects[currentIndex].description}
              </p>
            </div>
          </div>
        </div>

        {/* Flecha derecha */}
        <button
          onClick={handleNext}
          className="text-white text-2xl sm:text-3xl ml-2 sm:ml-4"
        >
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
