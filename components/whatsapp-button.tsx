"use client";

import { Phone } from "lucide-react";

export default function WhatsappButton() {
  const message = encodeURIComponent(
    "¡Hola! Me gustaría cotizar un proyecto."
  );

  return (
    <a
      href={`https://wa.me/524774112011?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed z-[150] flex items-center justify-center transition-colors duration-200"
      style={{
        bottom: "24px",
        right: "24px",
        width: "52px",
        height: "52px",
        borderRadius: "9999px",
        backgroundColor: "#C9A55A",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#8A6F3A")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C9A55A")}
    >
      <Phone size={20} strokeWidth={1.75} style={{ color: "#0C0C0E" }} />
    </a>
  );
}
