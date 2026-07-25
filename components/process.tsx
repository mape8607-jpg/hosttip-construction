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

function StepCard({ step }: { step: (typeof steps)[number] }) {
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
          sizes="(max-width: 768px) 45vw, 33vw"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgba(12,12,14,0.6)",
            opacity: active ? 1 : 0,
            transition: "opacity 500ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />

        {/* Caption — only appears over the photo while it's centered/active */}
        <div
          className="absolute inset-x-0 bottom-0 p-3 md:p-6"
          style={{
            opacity: active ? 1 : 0,
            transform: active ? "translateY(0)" : "translateY(14px)",
            transition: "opacity 500ms cubic-bezier(0.4, 0, 0.2, 1), transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",
            pointerEvents: "none",
          }}
        >
          <span className="font-light" style={{ fontSize: "12px", color: "#C9A55A", marginBottom: "6px", display: "block" }}>
            {step.id}
          </span>
          <h3 className="mb-2 md:mb-3" style={{ fontSize: "14px", letterSpacing: "-0.01em", color: "#F2EFE8", fontWeight: 500 }}>
            {step.title}
          </h3>
          <p className="hidden md:block" style={{ fontSize: "13px", lineHeight: "1.6", color: "#F2EFE8", fontWeight: 300 }}>
            {step.description}
          </p>
        </div>
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
          className="font-light mb-16 md:mb-20 lg:mb-28 md:whitespace-nowrap"
          style={{ fontSize: "clamp(26px, 3.2vw, 40px)", letterSpacing: "-0.01em", color: "#F2EFE8" }}
        >
          Tres momentos,
          <br className="md:hidden" />
          un solo hilo de responsabilidad.
        </h2>

        {/* Mobile — vertical timeline: line + 3 dots on the left, small images to the right */}
        <div className="md:hidden relative">
          <div
            className="absolute"
            style={{ left: "4px", top: "10px", bottom: "10px", width: "1px", backgroundColor: "#2A2A30" }}
          />
          <div className="flex flex-col gap-10">
            {steps.map((step, i) => (
              <div key={step.id} className="flex items-start gap-5">
                <span
                  className="flex-shrink-0"
                  style={{
                    width: "9px",
                    height: "9px",
                    borderRadius: "9999px",
                    backgroundColor: "#F2EFE8",
                    marginTop: "8px",
                  }}
                />
                <div style={{ width: "62%", marginLeft: "auto" }}>
                  <StepCard step={step} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop — thread connecting the three moments */}
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

        {/* Desktop — full grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-y-16 md:gap-x-12" style={{ paddingTop: "28px" }}>
          {steps.map((step) => (
            <StepCard key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
