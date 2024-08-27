"use client";

import { motion } from "framer-motion";

const socialLinks = [
  { name: "GitHub", link: "https://github.com/GabrieLZ19" },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/gabriel-lazo20/" },
  { name: "Gmail", link: "https://gabriellazo48@gmail.com" },
];

const Connect = () => (
  <section className="p-8">
    <motion.h2
      className="text-4xl text-white mb-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Connect with me
    </motion.h2>
    <div className="flex flex-wrap justify-center gap-6">
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.link}
          className="bg-gray-800 text-green-400 rounded-full w-48 h-48 flex items-center justify-center text-lg"
          whileHover={{
            scale: 1.1,
            backgroundColor: "#4ade80",
            color: "#1f2937",
          }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {social.name}
        </motion.a>
      ))}
    </div>
  </section>
);

export default Connect;
