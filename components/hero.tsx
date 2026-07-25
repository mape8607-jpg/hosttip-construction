"use client";

import { useState } from "react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const [ended, setEnded] = useState(false);

  return (
    <section className="relative flex flex-col justify-end min-h-screen">
      {/* Full-bleed video — plays once */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={() => setEnded(true)}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "50% 50%" }}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, #0C0C0E 0%, rgba(12,12,14,0.86) 22%, rgba(12,12,14,0.35) 50%, rgba(12,12,14,0.18) 75%, rgba(12,12,14,0.35) 100%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-6 lg:px-8 pb-20 lg:pb-28 pt-40">
        <p
          style={{
            fontSize: "13px",
            letterSpacing: "0.04em",
            color: "#C9A55A",
            marginBottom: "28px",
          }}
        >
          León, Guanajuato
        </p>

        <h1
          className="font-light"
          style={{
            fontSize: "clamp(32px, 4.6vw, 58px)",
            lineHeight: "1.2",
            letterSpacing: "-0.01em",
            color: "#F2EFE8",
            maxWidth: "20ch",
          }}
        >
          El valor ya existe, pero está disperso.
          <br />
          <span style={{ color: "#8A8A96" }}>Hay que descubrirlo y conectar las piezas.</span>
        </h1>

        <p
          className="mt-8 mb-14"
          style={{ fontSize: "16px", lineHeight: "1.7", color: "#8A8A96", maxWidth: "42ch", fontWeight: 300 }}
        >
          Construimos obra residencial y comercial, y ejecutamos remodelaciones.
          Siempre empezamos entendiendo el proyecto para tomar mejores decisiones.
        </p>

        <a
          href="#contacto"
          className="inline-flex items-center gap-3 transition-colors duration-200"
          style={{ fontSize: "14px", color: "#F2EFE8", borderBottom: "1px solid #8A8A96", paddingBottom: "4px" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#C9A55A";
            e.currentTarget.style.borderBottomColor = "#C9A55A";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#F2EFE8";
            e.currentTarget.style.borderBottomColor = "#8A8A96";
          }}
        >
          Agenda tu diagnóstico
        </a>

        {/* Appears once the video finishes playing */}
        <div
          className="absolute left-6 lg:left-8 bottom-8 flex flex-col items-center gap-2 transition-opacity duration-700 ease-out"
          style={{ opacity: ended ? 1 : 0 }}
          aria-hidden={!ended}
        >
          <span
            style={{
              fontSize: "11px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#F2EFE8",
            }}
          >
            Desliza hacia abajo
          </span>
          <ArrowDown size={16} strokeWidth={1.5} style={{ color: "#F2EFE8" }} />
        </div>
      </div>
    </section>
  );
}
