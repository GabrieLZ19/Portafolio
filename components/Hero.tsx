"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import { contactInfo } from "@/lib/data";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center animated-gradient relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container-custom px-4 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hola, soy <span className="gradient-text">Gabriel Lazo</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-4xl text-foreground-secondary mb-6">
              Desarrollador Full Stack
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-foreground-secondary max-w-2xl mx-auto mb-8"
          >
            Especializado en{" "}
            <span className="text-accent-blue font-semibold">React</span>,{" "}
            <span className="text-accent-blue font-semibold">Next.js</span>,{" "}
            <span className="text-accent-blue font-semibold">Node.js</span> y{" "}
            <span className="text-accent-purple font-semibold">
              React Native
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a href="#proyectos" className="btn-primary">
              Ver Proyectos
            </a>
            <a href="#contacto" className="btn-secondary">
              Contactar
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center gap-6 mb-12"
          >
            <a
              href={`https://linkedin.com/in/${contactInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-foreground-secondary hover:text-accent-blue transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            {contactInfo.github && (
              <a
                href={`https://github.com/${contactInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-foreground-secondary hover:text-accent-blue transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            )}
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-3xl text-foreground-secondary hover:text-accent-blue transition-all hover:scale-110"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </motion.div>

          <motion.a
            href="#sobre-mi"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="inline-block text-foreground-secondary hover:text-accent-blue transition-all animate-bounce"
          >
            <HiArrowDown className="text-4xl" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
