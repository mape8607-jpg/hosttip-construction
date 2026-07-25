"use client";

import { useState } from "react";
import Image from "next/image";

type BadgeType = "Comercial y Residencial" | "Remodelaciones y Adecuaciones" | "Diseño y Proyecto";

const projects: {
  badge: BadgeType;
  name: string;
  location: string;
  year: string;
  role: string;
  description: string;
  image: string;
}[] = [
  {
    badge: "Comercial y Residencial",
    name: "Locales Comerciales",
    location: "Boulevard Cañaveral · León",
    year: "2022",
    role: "Residencia de obra · ciclo completo",
    description:
      "Responsabilidad integral desde el levantamiento topográfico hasta la entrega. Proyecto ejecutivo, dos locales con mampostería, firmes de concreto y estructura metálica.",
    image: "/images/obra-residencial-comercial.jpeg",
  },
  {
    badge: "Comercial y Residencial",
    name: "Cimentación y Terraza",
    location: "Residencial Lomas Punta del Este · León",
    year: "2023",
    role: "Dirección integral independiente",
    description:
      "Proyecto ejecutado de inicio a fin de forma independiente. Terraza sobre terreno con pendiente pronunciada, diseñada como base de cimentación para vivienda futura.",
    image: "/images/cimentacion-terraza.jpeg",
  },
  {
    badge: "Remodelaciones y Adecuaciones",
    name: "Terminación de Nivel",
    location: "Proyecto H40 · León",
    year: "2025",
    role: "Coordinación de subcontratistas",
    description:
      "Conclusión del nivel pendiente coordinando directamente fontanería, vidrio y aluminio, carpintería y limpieza de puesta en marcha. Incorporación de ocho nuevas puertas.",
    image: "/images/terminacion-nivel.jpeg",
  },
  {
    badge: "Diseño y Proyecto",
    name: "Torre Tipo — Proyecto Bocanegra",
    location: "León, Gto.",
    year: "2026",
    role: "Proyecto ejecutivo en entorno BIM",
    description:
      "Desarrollo del proyecto ejecutivo de una torre tipo para conjunto de torres, con análisis de precios unitarios e integración de especialistas en BIM.",
    image: "/images/torre-bocanegra.jpeg",
  },
  {
    badge: "Remodelaciones y Adecuaciones",
    name: "Remodelación de Oficina Brisas",
    location: "Oficina Brisas · Blvd. La Luz · León",
    year: "2026",
    role: "Remodelación integral",
    description:
      "Remodelación de oficina con muros de cristal, acabados nuevos y mobiliario a medida — entregada lista para operar.",
    image: "/images/oficina-brisas.jpeg",
  },
];

const filters: ("TODOS" | BadgeType)[] = [
  "TODOS",
  "Comercial y Residencial",
  "Remodelaciones y Adecuaciones",
  "Diseño y Proyecto",
];

export default function Projects() {
  const [active, setActive] = useState<"TODOS" | BadgeType>("TODOS");
  const visible = active === "TODOS" ? projects : projects.filter((p) => p.badge === active);

  return (
    <section id="proyectos" style={{ backgroundColor: "#0C0C0E" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28 lg:py-40">
        {/* Header */}
        <h2
          className="font-light mb-12"
          style={{ fontSize: "clamp(28px, 3.2vw, 40px)", letterSpacing: "-0.01em", color: "#F2EFE8", maxWidth: "22ch" }}
        >
          Cada proyecto cuenta una historia.
          <br />
          <span style={{ color: "#8A8A96" }}>Del diagnóstico a los resultados.</span>
        </h2>

        {/* Filters */}
        <div className="flex flex-col mb-16" style={{ maxWidth: "320px", borderTop: "1px solid #2A2A30" }}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="text-left transition-colors duration-200"
              style={{
                fontSize: "14px",
                letterSpacing: "0.02em",
                color: active === f ? "#F2EFE8" : "#52525C",
                background: "none",
                padding: "14px 4px",
                borderBottom: "1px solid #2A2A30",
              }}
              onMouseEnter={(e) => {
                if (active !== f) e.currentTarget.style.color = "#8A8A96";
              }}
              onMouseLeave={(e) => {
                if (active !== f) e.currentTarget.style.color = "#52525C";
              }}
            >
              {f === "TODOS" ? "Todos" : f}
            </button>
          ))}
        </div>

        {/* Grid — hover reveals description over the photo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {visible.map((p) => (
            <article key={p.name + p.year} className="group flex flex-col">
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4 / 5", borderRadius: "4px" }}>
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover transition-all duration-300 ease-out group-hover:scale-[1.05]"
                  style={{ filter: "blur(0px)" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"
                  style={{ backgroundColor: "rgba(12,12,14,0.55)", backdropFilter: "blur(6px)" }}
                />
                <div
                  className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out"
                >
                  <p
                    style={{
                      fontSize: "12px",
                      letterSpacing: "0.03em",
                      color: "#C9A55A",
                      marginBottom: "10px",
                    }}
                  >
                    {p.badge}
                  </p>
                  <p style={{ fontSize: "13px", lineHeight: "1.6", color: "#F2EFE8", fontWeight: 300 }}>
                    {p.description}
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      letterSpacing: "0.03em",
                      color: "#8A8A96",
                      marginTop: "12px",
                    }}
                  >
                    {p.role}
                  </p>
                </div>
              </div>

              <div className="flex items-baseline justify-between gap-3 mt-5">
                <h3 style={{ fontSize: "16px", color: "#F2EFE8", fontWeight: 400 }}>{p.name}</h3>
                <span style={{ fontSize: "13px", color: "#52525C" }}>{p.year}</span>
              </div>
              <p style={{ fontSize: "13px", color: "#8A8A96", marginTop: "4px" }}>{p.location}</p>
              <p style={{ fontSize: "12px", letterSpacing: "0.03em", color: "#C9A55A", marginTop: "8px" }}>
                {p.badge.charAt(0) + p.badge.slice(1).toLowerCase()}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
