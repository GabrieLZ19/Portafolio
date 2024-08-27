"use client";

import Image from "next/image";

const Hero = () => (
  <section className="flex justify-between items-center pl-4 md:pl-20">
    <div>
      <div className="flex pb-2">
        <p className="text-gray-400">{"<p>"}</p>
        <p className="text-green-400">This is</p>
        <p className="text-gray-400">{"</p>"}</p>
      </div>
      <div className="flex flex-col py-2">
        <p className="text-gray-400">{"<h1>"}</p>
        <h1 className="font-bold text-white text-5xl md:text-9xl">
          Gabriel Lazo
        </h1>
        <p className="text-gray-400">{"<h1>"}</p>
      </div>
      <div className="flex items-center ">
        <p className="text-gray-400">{"<p>"}</p>
        <p className="text-green-400 ml-6 text-lg md:text-2xl md:ml-0">
          Front End Developer
        </p>
        <p className="text-gray-400">{"</p>"}</p>
      </div>
    </div>

    <div className="relative bottom-8 left-5 md:top-0 md:left-0">
      <Image
        src="./codigo.svg"
        alt="codigo"
        height={200}
        width={200}
        className="absolute bottom-3 h-12 top-10 md:h-[200px] md:w-[200px] right-4 md:top-16 md:left-16 -rotate-45 opacity-60"
      />
      <a
        href="./Gabriel_Lazo_CV.pdf"
        download="Gabriel_Lazo_CV.pdf"
        className="relative rounded-full mr-10 h-32 w-32 md:h-80 md:w-80 md:mr-20 text-center flex items-center justify-center text-green-400 overflow-hidden group"
        style={{
          position: "relative",
          zIndex: 1,
          transition: "color 0.3s ease",
        }}
      >
        <span
          className="absolute inset-0 bg-green-400 rounded-full transform scale-0 group-hover:scale-100 group-hover:opacity-100"
          style={{
            transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
            zIndex: -1,
          }}
        />
        <span
          className="absolute inset-0 border-2 border-transparent rounded-full group-hover:border-green-400"
          style={{
            transition: "border-color 0.3s ease",
            zIndex: 0,
          }}
        />
        <span
          className="relative group-hover:text-black"
          style={{
            zIndex: 1, // Mantener el texto encima del fondo
            transition: "color 0.3s ease",
          }}
        >
          {"<Download CV/>"}
        </span>
      </a>
    </div>
  </section>
);

export default Hero;
