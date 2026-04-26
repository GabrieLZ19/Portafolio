"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "./LanguageProvider";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { dict } = useLanguage();

  return (
    <section
      id="experiencia"
      className="section-padding bg-background border-b border-border"
      ref={ref}
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 md:mb-16"
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-6 md:mb-8 gap-2">
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-foreground uppercase tracking-tight">
              {dict.experience.title}
            </h2>
            <span className="font-mono text-xs uppercase tracking-widest text-foreground-secondary">
              {dict.experience.subtitle}
            </span>
          </div>
          <div className="w-full h-px bg-border"></div>
        </motion.div>

        <div className="flex flex-col gap-4 md:gap-0">
          {dict.experience.items.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 * index, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-background-card md:bg-transparent border border-border md:border-0 md:border-b md:border-border p-6 md:p-0 md:py-10 flex flex-col md:flex-row md:gap-16 hover:bg-background-card transition-colors duration-300"
            >
              {/* Company / Period */}
              <div className="md:w-1/4 flex flex-col shrink-0 mb-4 md:mb-0">
                <span className="font-mono text-xs text-foreground-secondary mb-1 md:mb-2">
                  {exp.period}
                </span>
                <span className="text-lg md:text-xl font-sans font-semibold text-foreground">
                  {exp.company}
                </span>
              </div>

              {/* Position & Description */}
              <div className="md:w-3/4 flex flex-col">
                <h3 className="text-xl md:text-2xl font-sans font-medium text-foreground mb-3 md:mb-4">
                  {exp.position}
                </h3>

                <p className="text-sm md:text-base text-foreground-secondary mb-5 md:mb-6 leading-[1.7] max-w-3xl">
                  {exp.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest bg-background border border-border text-foreground-tertiary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
