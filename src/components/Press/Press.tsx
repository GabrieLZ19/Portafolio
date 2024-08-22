"use client";

import { motion } from "framer-motion";

const pressItems = [
  { name: "California Herald", date: "June 23, 2020", link: "#" },
  { name: "Yahoo! Finance", date: "May 15, 2020", link: "#" },
  { name: "Medium", date: "April 2, 2020", link: "#" },
  { name: "Thrive Global", date: "March 10, 2020", link: "#" },
];

const Press = () => (
  <section className="p-8">
    <motion.h2
      className="text-4xl text-green-400 mb-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      My Press
    </motion.h2>
    <div className="space-y-4">
      {pressItems.map((item, index) => (
        <motion.div
          key={index}
          className="flex justify-between items-center border-b border-gray-700 pb-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div>
            <h3 className="text-white text-lg">{item.name}</h3>
            <p className="text-gray-400 text-sm">{item.date}</p>
          </div>
          <motion.a
            href={item.link}
            className="text-green-400 text-2xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            →
          </motion.a>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Press;
