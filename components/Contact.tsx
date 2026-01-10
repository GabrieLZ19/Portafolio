"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiCheckCircle,
} from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { contactInfo } from "@/lib/data";

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
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_email: "gabriellazo48@gmail.com",
        },
        publicKey
      );

      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError(
        "Hubo un error al enviar el mensaje. Por favor, intenta de nuevo."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contacto"
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
            <span className="gradient-text">Contacto</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mb-12"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">¡Hablemos!</h3>
            <p className="text-foreground-secondary mb-8 leading-relaxed">
              Estoy siempre abierto a nuevas oportunidades y colaboraciones. No
              dudes en contactarme si tienes alguna pregunta o propuesta.
            </p>

            <div className="space-y-6">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-4 text-foreground-secondary hover:text-accent-blue transition-colors group"
              >
                <div className="text-2xl text-accent-blue group-hover:scale-110 transition-transform">
                  <HiMail />
                </div>
                <div>
                  <p className="text-sm text-foreground-secondary">Email</p>
                  <p className="font-semibold">{contactInfo.email}</p>
                </div>
              </a>

              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center space-x-4 text-foreground-secondary hover:text-accent-blue transition-colors group"
              >
                <div className="text-2xl text-accent-blue group-hover:scale-110 transition-transform">
                  <HiPhone />
                </div>
                <div>
                  <p className="text-sm text-foreground-secondary">Teléfono</p>
                  <p className="font-semibold">{contactInfo.phone}</p>
                </div>
              </a>

              <div className="flex items-center space-x-4">
                <div className="text-2xl text-accent-blue">
                  <HiLocationMarker />
                </div>
                <div>
                  <p className="text-sm text-foreground-secondary">Ubicación</p>
                  <p className="font-semibold text-foreground-secondary">
                    {contactInfo.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              <a
                href={`https://linkedin.com/in/${contactInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-foreground-secondary hover:text-accent-blue transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              {contactInfo.github && (
                <a
                  href={`https://github.com/${contactInfo.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-foreground-secondary hover:text-accent-blue transition-all hover:scale-110"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
              )}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card"
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12">
                <HiCheckCircle className="text-6xl text-green-500 mb-4" />
                <h3 className="text-2xl font-bold mb-2">¡Mensaje Enviado!</h3>
                <p className="text-foreground-secondary text-center">
                  Gracias por contactarme. Te responderé lo antes posible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-2"
                  >
                    Nombre
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name", {
                      required: "El nombre es requerido",
                    })}
                    className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:border-accent-blue transition-colors text-foreground"
                    placeholder="Tu nombre"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email", {
                      required: "El email es requerido",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Email inválido",
                      },
                    })}
                    className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:border-accent-blue transition-colors text-foreground"
                    placeholder="tu@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register("message", {
                      required: "El mensaje es requerido",
                    })}
                    className="w-full px-4 py-3 bg-background border border-white/10 rounded-lg focus:outline-none focus:border-accent-blue transition-colors text-foreground resize-none"
                    placeholder="Tu mensaje..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                  type="submit"
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isLoading}
                >
                  {isLoading ? "Enviando..." : "Enviar Mensaje"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
