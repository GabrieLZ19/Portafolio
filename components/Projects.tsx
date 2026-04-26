"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiExternalLink, HiCode } from "react-icons/hi";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { dict } = useLanguage();

  return (
    <section id="proyectos" className="section-padding bg-background border-b border-border" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 md:mb-16"
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-6 md:mb-8 gap-2">
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-foreground uppercase tracking-tight">
              {dict.projects.title}
            </h2>
            <span className="font-mono text-xs uppercase tracking-widest text-foreground-secondary">
              {dict.projects.subtitle}
            </span>
          </div>
          <div className="w-full h-px bg-border"></div>
        </motion.div>

        {/* 1 col mobile, 2 col desktop — no border trick para evitar overflow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-px md:bg-border border border-border">
          {dict.projects.items.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-background group relative overflow-hidden flex flex-col border-border border md:border-0"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-background-card flex items-center justify-center border-b border-border">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                  />
                ) : (
                  <div className="font-mono text-foreground-tertiary tracking-[0.2em] uppercase text-[10px] px-4 text-center">
                    // Sin imagen disponible
                  </div>
                )}
                <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none mix-blend-overlay"></div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-3 md:mb-4 gap-3">
                  <h3 className="text-xl md:text-2xl font-sans font-medium text-foreground tracking-tight">
                    {project.title}
                  </h3>
                  <span className="font-mono text-[9px] text-foreground-secondary border border-border px-1.5 py-0.5 shrink-0">
                    {String(project.id).padStart(3, "0")}
                  </span>
                </div>

                <p className="text-sm md:text-base text-foreground-secondary mb-5 md:mb-8 leading-[1.7] flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5 md:mb-8">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 font-mono text-[9px] md:text-[10px] uppercase tracking-widest border border-border text-foreground-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 font-mono text-[9px] md:text-[10px] uppercase tracking-widest border border-border text-foreground-secondary">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex mt-auto pt-4 md:pt-6 border-t border-border gap-4 md:gap-6">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-foreground hover:text-foreground-secondary transition-colors flex items-center gap-2"
                    >
                      <span>{dict.projects.viewProject}</span>
                      <HiExternalLink />
                    </a>
                  ) : (
                    <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-foreground-tertiary">
                      Offline
                    </span>
                  )}
                  {/* @ts-ignore */}
                  {project.githubUrl && (
                    <a
                      href={(project as any).githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-foreground hover:text-foreground-secondary transition-colors flex items-center gap-2"
                    >
                      <span>Código</span>
                      <HiCode />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
