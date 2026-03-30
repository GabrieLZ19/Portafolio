"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiTypescript,
  SiTailwindcss, SiPostgresql, SiMongodb, SiGit,
  SiVite, SiJavascript, SiExpress, SiGithub, SiFlutter,
} from "react-icons/si";
import { skills } from "@/lib/data";

const iconMap: { [key: string]: any } = {
  "React.js": SiReact,
  "React Native (Expo)": SiReact,
  "Next.js": SiNextdotjs,
  "Vite.js": SiVite,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  Flutter: SiFlutter,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Mongoose: SiMongodb,
  Git: SiGit,
  GitHub: SiGithub,
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="habilidades"
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
              Arsenal Técnico
            </h2>
            <span className="font-mono text-xs uppercase tracking-widest text-foreground-secondary">
              [Stack & Herramientas]
            </span>
          </div>
          <div className="w-full h-px bg-border"></div>
        </motion.div>

        {/* Categories — 1 col mobile, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-8 md:gap-y-12">
          {skills.map((skillCategory, categoryIndex) => (
            <div key={skillCategory.category} className="flex flex-col">
              <motion.h3
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                className="font-mono text-xs uppercase tracking-widest text-foreground mb-4 md:mb-6"
              >
                // {skillCategory.category}
              </motion.h3>

              {/* Skill items — 3 cols on mobile (compact), 2 on desktop */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-2 gap-3">
                {skillCategory.items.map((skill, skillIndex) => {
                  const Icon = iconMap[skill];
                  return (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      className="group flex flex-col justify-center items-start border border-border bg-background p-3 md:p-4 hover:bg-foreground hover:border-foreground transition-all duration-300"
                    >
                      {Icon ? (
                        <Icon className="text-xl md:text-2xl mb-2 md:mb-3 text-foreground-secondary group-hover:text-background transition-colors" />
                      ) : (
                        <div className="text-xl md:text-2xl mb-2 md:mb-3 text-foreground-secondary group-hover:text-background font-mono font-bold">
                          {"<>"}
                        </div>
                      )}
                      <span className="font-mono text-[9px] md:text-xs uppercase text-foreground-secondary group-hover:text-background transition-colors leading-tight">
                        {skill}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
