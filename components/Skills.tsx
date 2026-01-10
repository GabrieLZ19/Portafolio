"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiFigma,
  SiVite,
  SiNestjs,
  SiJavascript,
  SiMysql,
  SiPhp,
  SiRedux,
  SiBootstrap,
  SiExpress,
  SiDocker,
  SiGithub,
  SiSpring,
} from "react-icons/si";
import { HiUserGroup, HiDatabase } from "react-icons/hi";
import { FaJava } from "react-icons/fa";
import { skills } from "@/lib/data";

const iconMap: { [key: string]: any } = {
  "React.js": SiReact,
  "React Native": SiReact,
  "Next.js": SiNextdotjs,
  Vite: SiVite,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  Redux: SiRedux,
  Bootstrap: SiBootstrap,
  "Node.js": SiNodedotjs,
  NestJS: SiNestjs,
  PHP: SiPhp,
  Java: FaJava,
  "Spring Boot": SiSpring,
  Express: SiExpress,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  NoSQL: HiDatabase,
  Git: SiGit,
  GitHub: SiGithub,
  Figma: SiFigma,
  Docker: SiDocker,
  Scrum: HiUserGroup,
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="habilidades"
      className="section-padding bg-background-secondary"
      ref={ref}
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Habilidades</span> Técnicas
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="card"
            >
              <h3 className="text-2xl font-bold gradient-text mb-6">
                {skillCategory.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skillCategory.items.map((skill, skillIndex) => {
                  const Icon = iconMap[skill];
                  return (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      className="flex flex-col items-center justify-center p-4 bg-background/50 rounded-lg hover:bg-accent-blue/10 hover:border-accent-blue/30 border border-transparent transition-all duration-300 group"
                    >
                      {Icon && (
                        <Icon className="text-3xl mb-2 text-foreground-secondary group-hover:text-accent-blue transition-colors" />
                      )}
                      <span className="text-sm text-center text-foreground-secondary group-hover:text-foreground transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
