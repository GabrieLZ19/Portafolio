"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "543865376697";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hola Gabriel, vi tu portafolio y me gustaría hablar contigo sobre un proyecto."
);

const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);

  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="whatsapp-fab"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Pulse ring */}
      <span className="whatsapp-pulse" aria-hidden="true" />

      {/* Tooltip */}
      <span
        className={`whatsapp-tooltip ${hovered ? "whatsapp-tooltip--visible" : ""}`}
        aria-hidden="true"
      >
        ¡Hablemos!
      </span>

      {/* Icon */}
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppButton;
