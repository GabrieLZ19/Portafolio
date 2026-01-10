"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiExternalLink, HiCode } from "react-icons/hi";
import { projects } from "@/lib/data";
import Image from "next/image";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="proyectos" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Proyectos <span className="gradient-text">Destacados</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative h-48 rounded-lg mb-4 overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <div className="relative h-full bg-gradient-to-br from-accent-blue/20 to-accent-purple/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <HiCode className="text-6xl text-foreground-secondary/30" />
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent-blue transition-colors">
                {project.title}
              </h3>

              <p className="text-foreground-secondary mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-accent-purple/10 text-accent-purple rounded border border-accent-purple/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {(project.demoUrl || project.githubUrl) && (
                <div className="flex gap-4 pt-4 border-t border-white/10">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-accent-blue hover:text-accent-purple transition-colors"
                    >
                      <HiExternalLink />
                      <span>Ver Proyecto</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-accent-blue hover:text-accent-purple transition-colors"
                    >
                      <HiCode />
                      <span>Código</span>
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
