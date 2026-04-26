"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { HiCheckCircle } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { contactInfo } from "@/lib/data";
import { useLanguage } from "./LanguageProvider";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { dict } = useLanguage();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setError("");
    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

      await emailjs.send(serviceId, templateId, {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_email: "gabriellazo48@gmail.com",
      }, publicKey);

      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError(dict.contact.form.error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contacto"
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
              {dict.contact.title}
            </h2>
            <span className="font-mono text-xs uppercase tracking-widest text-foreground-secondary">
              {dict.contact.subtitle}
            </span>
          </div>
          <div className="w-full h-px bg-border"></div>
        </motion.div>

        {/* Stack on mobile, 2 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-sans font-medium mb-6 md:mb-8 whitespace-pre-line">
                {dict.contact.heading}
              </h3>
              <p className="text-sm md:text-base text-foreground-secondary mb-8 md:mb-12 leading-[1.7] max-w-md">
                {dict.contact.paragraph}
              </p>
            </div>

            <div className="space-y-5 pt-6 border-t border-border">
              <div className="flex flex-col">
                <span className="font-mono text-xs uppercase text-foreground-tertiary tracking-widest mb-1">{dict.contact.emailLabel}</span>
                <a href={`mailto:${contactInfo.email}`} className="font-sans text-base md:text-lg text-foreground font-medium hover:text-foreground-secondary transition-colors break-all">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xs uppercase text-foreground-tertiary tracking-widest mb-1">{dict.contact.locationLabel}</span>
                <span className="font-sans text-base md:text-lg text-foreground font-medium">
                  {contactInfo.location}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xs uppercase text-foreground-tertiary tracking-widest mb-1">{dict.contact.whatsappLabel}</span>
                <a
                  href={`https://wa.me/543865376697?text=${encodeURIComponent("Hola Gabriel, vi tu portafolio y me gustaría hablar contigo.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-base md:text-lg text-foreground font-medium hover:text-foreground-secondary transition-colors"
                >
                  <FaWhatsapp className="text-[#25d366] text-xl flex-shrink-0" />
                  +54 9 3865 376697
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center p-10 border border-border bg-background-card">
                <HiCheckCircle className="text-4xl text-foreground mb-4" />
                <h3 className="text-xl font-sans font-medium mb-3">{dict.contact.form.successTitle}</h3>
                <p className="text-foreground-secondary text-center font-mono text-xs uppercase">
                  {dict.contact.form.successMessage}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
                <div>
                  <label htmlFor="name" className="block font-mono text-xs uppercase tracking-widest text-foreground-secondary mb-3">
                    {dict.contact.form.name}
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name", { required: dict.contact.form.required })}
                    className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-foreground transition-colors text-foreground placeholder-foreground-tertiary text-sm md:text-base"
                    placeholder={dict.contact.form.namePlaceholder}
                  />
                  {errors.name && (
                    <p className="text-foreground-tertiary font-mono text-xs mt-2 uppercase">✕ {errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block font-mono text-xs uppercase tracking-widest text-foreground-secondary mb-3">
                    {dict.contact.form.email}
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: dict.contact.form.required,
                      pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: dict.contact.form.invalidFormat },
                    })}
                    className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-foreground transition-colors text-foreground placeholder-foreground-tertiary text-sm md:text-base"
                    placeholder={dict.contact.form.emailPlaceholder}
                  />
                  {errors.email && (
                    <p className="text-foreground-tertiary font-mono text-xs mt-2 uppercase">✕ {errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block font-mono text-xs uppercase tracking-widest text-foreground-secondary mb-3">
                    {dict.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register("message", { required: dict.contact.form.required })}
                    className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-foreground transition-colors text-foreground resize-none placeholder-foreground-tertiary text-sm md:text-base"
                    placeholder={dict.contact.form.messagePlaceholder}
                  />
                  {errors.message && (
                    <p className="text-foreground-tertiary font-mono text-xs mt-2 uppercase">✕ {errors.message.message}</p>
                  )}
                </div>

                {error && <p className="text-foreground-tertiary font-mono text-xs uppercase">✕ {error}</p>}

                <div className="pt-2">
                  <button type="submit" className="w-full btn-primary" disabled={isLoading}>
                    {isLoading ? dict.contact.form.sending : dict.contact.form.send}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
