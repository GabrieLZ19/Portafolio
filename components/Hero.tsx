"use client";

import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";
import { contactInfo } from "@/lib/data";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative bg-background overflow-hidden border-b border-border"
    >
      {/* Background Dots Pattern */}
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none"></div>

      <div className="container-custom px-4 md:px-8 relative z-10 w-full mt-20">
        <div className="flex flex-col items-start max-w-5xl">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 md:mb-8"
          >
            <span className="font-mono text-xs tracking-[0.2em] text-foreground-secondary uppercase px-3 py-1.5 md:px-4 md:py-2 border border-border">
              Portafolio 2026
            </span>
          </motion.div>

          {/* Headline — fluid scale */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="mb-6 w-full"
          >
            <h1 className="text-[2.8rem] leading-[0.92] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] font-sans font-bold tracking-tighter text-foreground uppercase">
              Gabriel Lazo
            </h1>
          </motion.div>

          {/* Subtitle + Scroll arrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="mb-10 md:mb-12 w-full flex flex-col md:flex-row md:justify-between md:items-end border-t border-border pt-6 gap-4"
          >
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-sans text-foreground-secondary leading-tight max-w-xl">
              Desarrollador Full Stack & Mobile. <br className="hidden sm:block" />
              Construyendo arquitecturas escalables y experiencias precisas.
            </h2>

            <a
              href="#sobre-mi"
              className="hidden md:flex flex-col items-center justify-center text-foreground-secondary hover:text-foreground transition-colors"
            >
              <HiArrowDown className="text-2xl" />
            </a>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
          >
            <a href="#proyectos" className="btn-primary text-center">
              Ver Proyectos
            </a>
            <a href="#contacto" className="btn-secondary text-center">
              Contactar
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

