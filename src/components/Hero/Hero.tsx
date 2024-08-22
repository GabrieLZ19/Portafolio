"use client";

import Image from "next/image";

const Hero = () => (
  <section className="flex justify-between items-center pl-20">
    <div>
      <div className="flex pb-2">
        <p className="text-gray-400">{"<p>"}</p>
        <p className="text-green-400">This is</p>
        <p className="text-gray-400">{"</p>"}</p>
      </div>
      <div className="flex flex-col py-2">
        <p className="text-gray-400">{"<h1>"}</p>
        <h1 className="font-bold text-white text-9xl">Gabriel Lazo</h1>
        <p className="text-gray-400">{"<h1>"}</p>
      </div>
      <div className="flex items-center ">
        <p className="text-gray-400">{"<p>"}</p>
        <p className="text-green-400 text-2xl">Front End Developer</p>
        <p className="text-gray-400">{"</p>"}</p>
      </div>
    </div>

    <div className="relative">
      <Image
        src="./codigo.svg"
        alt="codigo"
        height={200}
        width={200}
        className="absolute top-24 left-16 -rotate-45 opacity-60" // Aplica la rotación y la transparencia
      />
      <a
        href="./Gabriel_Lazo_CV.pdf"
        download="Gabriel_Lazo_CV.pdf"
        className="relative rounded-full h-80 w-80 mr-20 text-center flex items-center justify-center text-green-400  overflow-hidden group"
        style={{
          border: "2px solid transparent",
          position: "relative",
          zIndex: 1,
          transition: "color 0.3s ease",
        }}
      >
        {"<Download CV/>"}
        <span
          className="absolute inset-0 border-2 border-green-400 rounded-full transform scale-0 group-hover:scale-100"
          style={{
            borderColor: "#4ADE80" /* Color del borde cuando se hace hover */,
            transition: "transform 0.5s ease-in-out",
          }}
        />
        <span
          className="absolute inset-0 border-2 border-transparent rounded-full transform scale-0 group-hover:scale-100"
          style={{
            borderColor: "#4ADE80" /* Color del borde cuando se hace hover */,
            borderWidth: "2px",
            transition: "transform 0.5s ease-in-out",
            zIndex: -1,
          }}
        />
      </a>
    </div>
  </section>
);

export default Hero;
