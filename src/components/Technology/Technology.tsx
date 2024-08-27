"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

// Ejemplo de las tecnologías que dominas
const technologies = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
  { name: "Vite", icon: <SiVite className="text-purple-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
];

const Technology = () => (
  <section className="p-8">
    <motion.h2
      className="text-4xl text-green-400 mb-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      My Skills
    </motion.h2>
    <div className="grid grid-cols-2 gap-4">
      {technologies.map((tech, index) => (
        <motion.div
          key={index}
          className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, delay: index * 0.01 }}
        >
          <div className="text-4xl">{tech.icon}</div>
          <h3 className="text-white md:text-lg">{tech.name}</h3>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Technology;
