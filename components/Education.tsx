"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { education } from "@/lib/data";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="educacion" className="section-padding bg-background border-b border-border" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 md:mb-16"
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-6 md:mb-8 gap-2">
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-foreground uppercase tracking-tight">
              Educación
            </h2>
            <span className="font-mono text-xs uppercase tracking-widest text-foreground-secondary">
              [Formación Académica]
            </span>
          </div>
          <div className="w-full h-px bg-border"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="card group flex flex-col justify-between min-h-[180px]"
            >
              <div>
                <div className="flex flex-wrap justify-between items-start mb-4 md:mb-6 gap-2">
                  <span className="font-mono text-xs text-foreground-secondary uppercase tracking-widest px-2 py-1 border border-border">
                    {edu.period}
                  </span>
                  {edu.status && (
                    <span className="font-mono text-xs text-foreground bg-border px-2 py-1 uppercase tracking-widest">
                      {edu.status}
                    </span>
                  )}
                </div>
                <h3 className="text-lg md:text-xl font-sans font-medium text-foreground leading-tight">
                  {edu.degree}
                </h3>
              </div>

              <div className="mt-6 pt-4 border-t border-border group-hover:border-foreground/20 transition-colors">
                <p className="font-sans text-foreground-secondary text-xs md:text-sm uppercase tracking-wider">
                  {edu.institution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
