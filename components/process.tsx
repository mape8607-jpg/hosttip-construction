"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const steps = [
  {
    id: "01",
    title: "Visita y diagnóstico",
    description:
      "Visitamos el inmueble, entendemos su contexto y detectamos dónde está su potencial. Cada decisión parte de un diagnóstico.",
    image: "/images/proceso-diagnostico.jpg",
  },
  {
    id: "02",
    title: "Arquitectura y planeación",
    description:
      "Desarrollamos el proyecto ejecutivo, coordinamos las especialidades y definimos un plan claro para ejecutar con certeza.",
    image: "/images/proceso-planeacion.jpg",
  },
  {
    id: "03",
    title: "Ejecución en sitio",
    description:
      "Dirigimos cada obra de principio a fin, coordinando costo, tiempo y calidad de entrega bajo una sola responsabilidad.",
    image: "/images/proceso-ejecucion.jpg",
  },
];

function StepCard({
  step,
  bordered,
}: {
  step: (typeof steps)[number];
  bordered: boolean;
}) {
  const [active, setActive] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;

    // Shrinks the observation area to a single line at the exact vertical
    // center of the viewport — the effect fires right as the photo's
    // center is about to cross that line, and reverses on the way back up.
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col">
      <div ref={imageRef} className="relative w-full overflow-hidden" style={{ aspectRatio: "4 / 3" }}>
        <Image
          src={step.image}
          alt=""
          fill
          className="object-cover"
          style={{
            filter: active ? "blur(8px)" : "blur(0px)",
            transform: active ? "scale(1.04)" : "scale(1)",
            transition: "filter 500ms cubic-bezier(0.4, 0, 0.2, 1), transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgba(12,12,14,0.6)",
            opacity: active ? 1 : 0,
            transition: "opacity 500ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />

        {/* Overlay caption — rises over the blurred photo (visual duplicate; real text stays below for a11y) */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 p-6"
          style={{
            opacity: active ? 1 : 0,
            transform: active ? "translateY(0)" : "translateY(14px)",
            transition: "opacity 500ms cubic-bezier(0.4, 0, 0.2, 1), transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",
            pointerEvents: "none",
          }}
        >
          <span className="font-light" style={{ fontSize: "15px", color: "#C9A55A", marginBottom: "12px", display: "block" }}>
            {step.id}
          </span>
          <h3 className="mb-3" style={{ fontSize: "20px", letterSpacing: "-0.01em", color: "#F2EFE8", fontWeight: 500 }}>
            {step.title}
          </h3>
          <p style={{ fontSize: "14px", lineHeight: "1.7", color: "#F2EFE8", fontWeight: 300 }}>
            {step.description}
          </p>
        </div>
      </div>

      {/* Normal-flow caption — fades out as the overlay version takes over */}
      <div
        className={"mt-6" + (bordered ? " border-t md:border-t-0 md:border-l pt-8 md:pt-0 md:pl-12" : "")}
        style={{
          borderColor: "#2A2A30",
          opacity: active ? 0 : 1,
          transition: "opacity 400ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <span className="font-light" style={{ fontSize: "15px", color: "#52525C", marginBottom: "20px", display: "block" }}>
          {step.id}
        </span>
        <h3 className="mb-4" style={{ fontSize: "20px", letterSpacing: "-0.01em", color: "#F2EFE8", fontWeight: 500 }}>
          {step.title}
        </h3>
        <p style={{ fontSize: "14px", lineHeight: "1.75", color: "#8A8A96", fontWeight: 300 }}>
          {step.description}
        </p>
      </div>
    </div>
  );
}

export default function Process() {
  return (
    <section id="proceso" style={{ backgroundColor: "#0C0C0E" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-28 lg:pt-40 pb-14 lg:pb-20">
        {/* Header */}
        <h2
          className="font-light mb-20 lg:mb-28 whitespace-nowrap"
          style={{ fontSize: "clamp(22px, 3.2vw, 40px)", letterSpacing: "-0.01em", color: "#F2EFE8" }}
        >
          Tres momentos, un solo hilo de responsabilidad.
        </h2>

        {/* Thread connecting the three moments — desktop only */}
        <div className="hidden md:block relative" style={{ height: "10px", marginBottom: "-10px" }}>
          <div
            className="absolute"
            style={{ top: "50%", left: "16.667%", right: "16.667%", height: "1px", backgroundColor: "#2A2A30" }}
          />
          <div className="grid grid-cols-3 gap-x-12 relative h-full">
            {steps.map((step) => (
              <div key={step.id} className="flex items-center justify-center">
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "9999px",
                    backgroundColor: "#F2EFE8",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-12" style={{ paddingTop: "28px" }}>
          {steps.map((step, i) => (
            <StepCard key={step.id} step={step} bordered={i > 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
