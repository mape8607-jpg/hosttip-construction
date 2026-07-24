"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

const projectTypes = [
  { value: "", label: "Tipo de proyecto" },
  { value: "obra-nueva", label: "Obra nueva" },
  { value: "remodelacion", label: "Remodelación o adecuación" },
  { value: "diagnostico", label: "Solo diagnóstico" },
  { value: "proyecto-ejecutivo", label: "Proyecto ejecutivo" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contacto"
      style={{ backgroundColor: "#141416", borderTop: "1px solid #2A2A30" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — Copy */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-jetbrains-mono, monospace)",
                fontSize: "11px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#52525C",
                marginBottom: "16px",
              }}
            >
              Contacto
            </p>
            <h2
              className="font-semibold mb-6"
              style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-0.02em", color: "#F2EFE8", lineHeight: 1.1 }}
            >
              Cuéntanos
              <br />
              tu proyecto.
            </h2>
            <p
              className="mb-8"
              style={{ fontSize: "16px", lineHeight: "1.7", color: "#8A8A96", maxWidth: "400px" }}
            >
              Agenda una visita de diagnóstico para entender qué está pasando
              con tu inmueble y qué podemos hacer. Sin compromiso.
            </p>

            {/* WhatsApp alternative */}
            <a
              href="https://wa.me/524771234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 transition-colors duration-200"
              style={{ color: "#8A8A96" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A55A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#8A8A96")}
            >
              <MessageCircle size={18} strokeWidth={1.5} />
              <span style={{ fontSize: "14px" }}>
                O escríbenos directo por WhatsApp
              </span>
            </a>

            {/* Stats */}
            <div
              className="flex gap-10 mt-16 pt-10"
              style={{ borderTop: "1px solid #2A2A30" }}
            >
              {[
                { value: "10+", label: "Proyectos e intervenciones" },
                { value: "2022", label: "Primera obra independiente" },
                { value: "León", label: "Base de operaciones" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontFamily: "var(--font-jetbrains-mono, monospace)",
                      fontSize: "24px",
                      fontWeight: 500,
                      color: "#C9A55A",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{ fontSize: "12px", color: "#52525C", marginTop: "4px" }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {sent ? (
              <div
                className="flex flex-col items-center justify-center text-center p-12 rounded-card"
                style={{ backgroundColor: "#1C1C20", border: "1px solid #2A2A30", borderRadius: "12px", minHeight: "400px" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: "rgba(61,155,110,0.12)" }}
                >
                  <span style={{ color: "#3D9B6E", fontSize: "20px" }}>✓</span>
                </div>
                <h3
                  className="font-semibold mb-3"
                  style={{ fontSize: "20px", color: "#F2EFE8" }}
                >
                  Mensaje recibido.
                </h3>
                <p style={{ fontSize: "14px", color: "#8A8A96" }}>
                  Nos comunicaremos contigo a la brevedad para coordinar la visita.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 p-8 lg:p-10 rounded-card"
                style={{ backgroundColor: "#1C1C20", border: "1px solid #2A2A30", borderRadius: "12px" }}
              >
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    style={{ fontSize: "12px", color: "#52525C", letterSpacing: "0.04em" }}
                  >
                    Nombre
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Tu nombre completo"
                    className="w-full px-4 py-3 rounded-lg outline-none transition-colors duration-200"
                    style={{
                      backgroundColor: "#0C0C0E",
                      border: "1px solid #2A2A30",
                      borderRadius: "8px",
                      color: "#F2EFE8",
                      fontSize: "14px",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#C9A55A")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#2A2A30")}
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    style={{ fontSize: "12px", color: "#52525C", letterSpacing: "0.04em" }}
                  >
                    WhatsApp / Teléfono
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="477 000 0000"
                    className="w-full px-4 py-3 rounded-lg outline-none transition-colors duration-200"
                    style={{
                      backgroundColor: "#0C0C0E",
                      border: "1px solid #2A2A30",
                      borderRadius: "8px",
                      color: "#F2EFE8",
                      fontSize: "14px",
                      fontFamily: "var(--font-jetbrains-mono, monospace)",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#C9A55A")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#2A2A30")}
                  />
                </div>

                {/* Project type */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="type"
                    style={{ fontSize: "12px", color: "#52525C", letterSpacing: "0.04em" }}
                  >
                    Tipo de proyecto
                  </label>
                  <select
                    id="type"
                    required
                    className="w-full px-4 py-3 rounded-lg outline-none transition-colors duration-200 cursor-pointer"
                    style={{
                      backgroundColor: "#0C0C0E",
                      border: "1px solid #2A2A30",
                      borderRadius: "8px",
                      color: "#F2EFE8",
                      fontSize: "14px",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#C9A55A")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#2A2A30")}
                  >
                    {projectTypes.map((t) => (
                      <option key={t.value} value={t.value} style={{ backgroundColor: "#0C0C0E", color: "#F2EFE8" }}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Description */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="description"
                    style={{ fontSize: "12px", color: "#52525C", letterSpacing: "0.04em" }}
                  >
                    Cuéntanos sobre tu proyecto
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    placeholder="Ubicación, tipo de inmueble, qué quieres lograr..."
                    className="w-full px-4 py-3 rounded-lg outline-none transition-colors duration-200 resize-none"
                    style={{
                      backgroundColor: "#0C0C0E",
                      border: "1px solid #2A2A30",
                      borderRadius: "8px",
                      color: "#F2EFE8",
                      fontSize: "14px",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#C9A55A")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#2A2A30")}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full font-semibold py-3.5 rounded-lg mt-2 transition-colors duration-200"
                  style={{
                    backgroundColor: "#C9A55A",
                    color: "#0C0C0E",
                    borderRadius: "8px",
                    fontSize: "15px",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#8A6F3A")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#C9A55A")}
                >
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
