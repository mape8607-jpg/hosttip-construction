"use client";

import { useState } from "react";
import Image from "next/image";

type BadgeType = "OBRA NUEVA" | "REMODELACIÓN" | "PROYECTO EJECUTIVO" | "ESTRUCTURA";

const projects: {
  badge: BadgeType;
  name: string;
  location: string;
  year: string;
  image: string;
}[] = [
  {
    badge: "OBRA NUEVA",
    name: "Locales Comerciales",
    location: "Boulevard Cañaveral · León",
    year: "2022",
    image: "/images/locales-canaveral.png",
  },
  {
    badge: "OBRA NUEVA",
    name: "Cimentación y Terraza",
    location: "Residencial Lomas Punta del Este · León",
    year: "2023",
    image: "/images/terraza-punta.png",
  },
  {
    badge: "PROYECTO EJECUTIVO",
    name: "Torre Tipo — Proyecto Bocanegra",
    location: "León, Gto.",
    year: "2026",
    image: "/images/torre-bocanegra.jpeg",
  },
  {
    badge: "REMODELACIÓN",
    name: "Terminación de Nivel",
    location: "Proyecto H40 · León",
    year: "2025",
    image: "/images/terminacion-nivel.jpeg",
  },
  {
    badge: "ESTRUCTURA",
    name: "Diagnóstico y Reparación Estructural",
    location: "Local Brisas · Blvd. La Luz · León",
    year: "2026",
    image: "/images/obra-05.jpg",
  },
];

const filters: ("TODOS" | BadgeType)[] = [
  "TODOS",
  "OBRA NUEVA",
  "REMODELACIÓN",
  "PROYECTO EJECUTIVO",
  "ESTRUCTURA",
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
        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-16">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="transition-colors duration-200"
              style={{
                fontSize: "13px",
                letterSpacing: "0.02em",
                color: active === f ? "#F2EFE8" : "#52525C",
                background: "none",
              }}
              onMouseEnter={(e) => {
                if (active !== f) e.currentTarget.style.color = "#8A8A96";
              }}
              onMouseLeave={(e) => {
                if (active !== f) e.currentTarget.style.color = "#52525C";
              }}
            >
              {f === "TODOS" ? "Todos" : f.charAt(0) + f.slice(1).toLowerCase()}
            </button>
          ))}
        </div>

        {/* Grid — pure images, minimal caption */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {visible.map((p) => (
            <article key={p.name + p.year} className="group flex flex-col">
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4 / 5" }}>
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-200 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
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
