"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiCode, HiLightningBolt, HiTrendingUp } from "react-icons/hi";
import { useLanguage } from "./LanguageProvider";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { dict } = useLanguage();

  const stats = [
    { icon: HiCode, label: dict.about.stats.projects, value: "10+" },
    { icon: HiLightningBolt, label: dict.about.stats.tech, value: "15+" },
    { icon: HiTrendingUp, label: dict.about.stats.exp, value: "2+" },
  ];

  return (
    <section
      id="sobre-mi"
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
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-foreground uppercase tracking-tight">
            {dict.about.title}
          </h2>
          <div className="w-full h-px bg-border mt-6 md:mt-8"></div>
        </motion.div>

        {/* Main grid — stacks to column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Biography Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bento-card md:col-span-2"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-foreground-secondary mb-5 block">
              {dict.about.subtitle}
            </span>
            <p className="text-base text-foreground-secondary mb-4 leading-[1.75]">
              {dict.about.p1}
            </p>
            <p className="text-base text-foreground-secondary mb-4 leading-[1.75]">
              {dict.about.p2}
            </p>
            <p className="text-base text-foreground-secondary leading-[1.75]">
              {dict.about.p3}
            </p>
          </motion.div>

          {/* Stats — lado a lado en mobile, columna en desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-4"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bento-card flex flex-col justify-center items-start py-5 md:py-6"
              >
                <div className="text-base md:text-xl text-foreground-secondary mb-2 md:mb-3">
                  <stat.icon />
                </div>
                <p className="text-3xl md:text-4xl font-sans font-bold text-foreground tracking-tighter leading-none mb-1.5">
                  {stat.value}
                </p>
                {/* Label on one line — shortened text to avoid wrapping */}
                <p className="font-mono text-[10px] uppercase tracking-wider text-foreground-tertiary leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
