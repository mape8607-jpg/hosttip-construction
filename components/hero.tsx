"use client";

import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col justify-center min-h-screen px-6 lg:px-8"
      style={{ paddingTop: "4rem" }}
    >
      {/* Subtle grid texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,165,90,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,165,90,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-7xl mx-auto w-full py-24 lg:py-40">
        {/* Location badge */}
        <div
          className="inline-flex items-center gap-2 mb-10"
          style={{
            fontFamily: "var(--font-jetbrains-mono, monospace)",
            fontSize: "11px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#52525C",
          }}
        >
          <span
            className="inline-block w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: "#C9A55A" }}
          />
          León, Guanajuato · México
        </div>

        {/* Headline */}
        <h1
          className="font-semibold leading-none tracking-tight mb-8"
          style={{
            fontSize: "clamp(48px, 8vw, 96px)",
            letterSpacing: "-0.02em",
            color: "#F2EFE8",
          }}
        >
          El valor ya existe.
          <br />
          <span style={{ color: "#C9A55A" }}>Hay que descubrirlo.</span>
        </h1>

        {/* Sub */}
        <p
          className="max-w-2xl mb-12"
          style={{ fontSize: "18px", lineHeight: "1.7", color: "#8A8A96", fontWeight: 400 }}
        >
          Construimos obra residencial y comercial, y ejecutamos remodelaciones
          con criterio estratégico. Primero entendemos el inmueble. Luego lo
          transformamos.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200"
            style={{ backgroundColor: "#C9A55A", color: "#0C0C0E", borderRadius: "8px", fontSize: "15px" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#8A6F3A")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#C9A55A")}
          >
            Agenda tu diagnóstico
          </a>
          <a
            href="#proyectos"
            className="inline-flex items-center gap-2 font-medium px-7 py-3.5 rounded-lg transition-colors duration-200"
            style={{
              border: "1px solid #2A2A30",
              color: "#8A8A96",
              borderRadius: "8px",
              fontSize: "15px",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#F2EFE8";
              (e.currentTarget as HTMLElement).style.borderColor = "#8A8A96";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#8A8A96";
              (e.currentTarget as HTMLElement).style.borderColor = "#2A2A30";
            }}
          >
            Ver proyectos
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-0 flex items-center gap-2" style={{ color: "#52525C" }}>
          <ArrowDown size={14} strokeWidth={1.5} />
          <span style={{ fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "var(--font-jetbrains-mono, monospace)" }}>
            Descubre el proceso
          </span>
        </div>
      </div>
    </section>
  );
}
