"use client";

import { Building2, Hammer, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Building2,
    badge: "Obra nueva",
    title: "Obra Residencial y Comercial",
    description:
      "Ejecutamos proyectos de edificación desde cimentación hasta obra terminada — viviendas, locales comerciales y estructuras en León y alrededores.",
    groupLabel: null,
    points: [
      "Proyecto ejecutivo integral",
      "Dirección y supervisión en sitio",
      "Coordinación de subcontratistas",
      "Control de calidad y entregas",
      "Desarrollo en entorno BIM",
    ],
  },
  {
    icon: Hammer,
    badge: "Intervención",
    title: "Remodelaciones y Adecuaciones",
    description:
      "Intervenimos inmuebles existentes para mejorar su funcionalidad, estética o rentabilidad. Del diagnóstico estructural a la entrega, con criterio.",
    groupLabel: null,
    points: [
      "Diagnóstico estructural previo",
      "Rediseño de distribución",
      "Adecuaciones comerciales",
      "Reparaciones y reforzamientos",
      "Optimización de espacios",
    ],
  },
];

export default function Services() {
  return (
    <section id="servicios" style={{ backgroundColor: "#0C0C0E" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
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
            Qué hacemos
          </p>
          <h2
            className="font-semibold mb-4"
            style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-0.02em", color: "#F2EFE8" }}
          >
            Dos servicios. Una sola responsabilidad.
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.7", color: "#8A8A96" }}>
            Tanto en obra nueva como en remodelación, el proceso empieza por
            entender el inmueble antes de proponer soluciones.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="flex flex-col p-8 lg:p-10 gap-8"
                style={{
                  backgroundColor: "#141416",
                  border: "1px solid #2A2A30",
                  borderRadius: "12px",
                }}
              >
                {/* Badge + icon */}
                <div className="flex items-start justify-between">
                  <span
                    className="inline-flex items-center px-3 py-1"
                    style={{
                      backgroundColor: "rgba(201,165,90,0.1)",
                      color: "#C9A55A",
                      borderRadius: "9999px",
                      fontSize: "11px",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      fontWeight: 500,
                    }}
                  >
                    {s.badge}
                  </span>
                  <Icon size={22} strokeWidth={1.5} style={{ color: "#52525C" }} />
                </div>

                {/* Title */}
                <div>
                  <h3
                    className="font-semibold mb-3"
                    style={{ fontSize: "24px", letterSpacing: "-0.02em", color: "#F2EFE8" }}
                  >
                    {s.title}
                  </h3>
                  <p style={{ fontSize: "14px", lineHeight: "1.7", color: "#8A8A96" }}>
                    {s.description}
                  </p>
                </div>

                {/* Points */}
                <div className="pt-6 mt-auto" style={{ borderTop: "1px solid #2A2A30" }}>
                  {s.groupLabel && (
                    <p
                      className="mb-3"
                      style={{
                        fontFamily: "var(--font-jetbrains-mono, monospace)",
                        fontSize: "10px",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "#52525C",
                      }}
                    >
                      {s.groupLabel}
                    </p>
                  )}
                  <ul className="flex flex-col gap-3">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-center gap-3"
                        style={{ fontSize: "13px", color: "#8A8A96" }}
                      >
                        <span
                          className="inline-block w-1 h-1 rounded-full flex-shrink-0"
                          style={{ backgroundColor: "#C9A55A" }}
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 font-medium transition-colors duration-200 mt-2"
                  style={{ fontSize: "13px", color: "#8A8A96" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A55A")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#8A8A96")}
                >
                  Platícanos tu proyecto
                  <ArrowRight size={14} strokeWidth={2} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
