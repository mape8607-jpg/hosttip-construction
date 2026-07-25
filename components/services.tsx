"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Obra Residencial y Comercial",
    description:
      "Ejecutamos obra nueva residencial y comercial, desde levantamiento topográfico, permisos, proyecto ejecutivo y obra hasta la entrega final.",
    points: [
      "Desarrollo de proyecto ejecutivo integral",
      "Modelado y coordinación BIM",
      "Coordinación de especialidades",
      "Planeación y control de obra",
      "Dirección y supervisión en sitio",
      "Control de calidad y entregas",
    ],
    images: ["/images/obra-residencial-comercial.jpeg"],
  },
  {
    title: "Remodelaciones y Adecuaciones",
    description:
      "Transformamos espacios existentes, mejorando su funcionalidad, valor y forma de habitarse.",
    points: [
      "Diagnóstico y evaluación del inmueble",
      "Diseño y optimización de espacios",
      "Adecuaciones residenciales y comerciales",
      "Reforzamientos y mejoras constructivas",
      "Ejecución y supervisión de la intervención",
    ],
    images: ["/images/obra-remodelaciones-adecuaciones.jpeg"],
  },
];

function ServiceImage({ images, title }: { images: string[]; title: string }) {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="group relative w-full" style={{ aspectRatio: "4 / 3", direction: "ltr" }}>
      <Image
        src={images[index]}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />

      <button
        onClick={prev}
        aria-label="Foto anterior"
        className="absolute flex items-center justify-center transition-opacity duration-200"
        style={{
          left: "12px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "32px",
          height: "32px",
          opacity: 0.5,
          background: "none",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.5")}
      >
        <ChevronLeft size={20} strokeWidth={1.25} style={{ color: "#F2EFE8" }} />
      </button>

      <button
        onClick={next}
        aria-label="Foto siguiente"
        className="absolute flex items-center justify-center transition-opacity duration-200"
        style={{
          right: "12px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "32px",
          height: "32px",
          opacity: 0.5,
          background: "none",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.5")}
      >
        <ChevronRight size={20} strokeWidth={1.25} style={{ color: "#F2EFE8" }} />
      </button>
    </div>
  );
}

export default function Services() {
  return (
    <section id="servicios" style={{ backgroundColor: "#0C0C0E" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28 lg:py-40">
        {/* Header */}
        <div className="mb-20 lg:mb-28">
          <h2
            className="font-light mb-5"
            style={{ fontSize: "clamp(28px, 3.2vw, 40px)", letterSpacing: "-0.01em", color: "#F2EFE8", maxWidth: "22ch" }}
          >
            Dos enfoques, una sola responsabilidad.
          </h2>
          <p style={{ fontSize: "15px", lineHeight: "1.7", color: "#8A8A96", fontWeight: 300, maxWidth: "48ch" }}>
            Ya sea remodelación u obra nueva, todo comienza por entender el
            proyecto y su entorno antes de proponer soluciones.
          </p>
        </div>

        <div className="flex flex-col gap-24 lg:gap-32">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={
                "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center" +
                (i % 2 === 1 ? " lg:[direction:rtl]" : "")
              }
            >
              <ServiceImage images={s.images} title={s.title} />

              <div style={{ direction: "ltr" }}>
                <h3
                  className="mb-5"
                  style={{
                    fontSize: "26px",
                    letterSpacing: "-0.01em",
                    color: "#F2EFE8",
                    fontWeight: 500,
                    textDecoration: "underline",
                    textUnderlineOffset: "6px",
                    textDecorationColor: "#2A2A30",
                  }}
                >
                  {i + 1}. {s.title}
                </h3>
                <p className="mb-8" style={{ fontSize: "15px", lineHeight: "1.8", color: "#8A8A96", fontWeight: 300, maxWidth: "48ch" }}>
                  {s.description}
                </p>
                <ul className="flex flex-col gap-3 mb-10">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-3"
                      style={{ fontSize: "14px", color: "#8A8A96", fontWeight: 300 }}
                    >
                      <span
                        className="inline-block flex-shrink-0"
                        style={{ width: "4px", height: "4px", borderRadius: "9999px", backgroundColor: "#C9A55A" }}
                      />
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className="inline-block transition-colors duration-200"
                  style={{ fontSize: "13px", color: "#F2EFE8", borderBottom: "1px solid #8A8A96", paddingBottom: "3px" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#C9A55A";
                    e.currentTarget.style.borderBottomColor = "#C9A55A";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#F2EFE8";
                    e.currentTarget.style.borderBottomColor = "#8A8A96";
                  }}
                >
                  Platícanos tu proyecto
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
