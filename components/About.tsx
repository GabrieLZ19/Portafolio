"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiCode, HiLightningBolt, HiTrendingUp } from "react-icons/hi";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: HiCode, label: "Proyectos", value: "15+" },
    { icon: HiLightningBolt, label: "Tecnologías", value: "20+" },
    { icon: HiTrendingUp, label: "Experiencia", value: "2+ años" },
  ];

  return (
    <section id="sobre-mi" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Sobre <span className="gradient-text">Mí</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-foreground-secondary mb-6 leading-relaxed">
              Soy un{" "}
              <span className="text-accent-blue font-semibold">
                Desarrollador Full Stack
              </span>{" "}
              con sólida experiencia en Front-End y un enfoque constante en el
              aprendizaje de tecnologías Back-End.
            </p>
            <p className="text-lg text-foreground-secondary mb-6 leading-relaxed">
              Me especializo en crear aplicaciones web{" "}
              <span className="text-accent-purple font-semibold">
                intuitivas, eficientes y escalables
              </span>
              , combinando un diseño atractivo con una arquitectura robusta.
            </p>
            <p className="text-lg text-foreground-secondary mb-6 leading-relaxed">
              Apasionado por el aprendizaje constante y la creación de
              soluciones innovadoras, actualmente trabajo en{" "}
              <span className="text-accent-blue font-semibold">
                apps con react native
              </span>{" "}
              creando apps que sean innovadoras y que ayuden a las personas a
              mejorar su calidad de vida.
            </p>
            <p className="text-lg text-foreground-secondary leading-relaxed">
              Mi objetivo es seguir creciendo profesionalmente aprendiendo
              nuevas tecnologías y creando soluciones innovadoras.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="card flex items-center space-x-4"
              >
                <div className="text-4xl text-accent-blue">
                  <stat.icon />
                </div>
                <div>
                  <p className="text-3xl font-bold gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-foreground-secondary">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
