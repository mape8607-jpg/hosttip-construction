"use client";

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
    badge: "Remodelaciones y Adecuaciones",
    name: "Remodelación de Oficina Brisas",
    location: "Oficina Brisas · Blvd. La Luz · León",
    year: "2026",
    role: "Remodelación integral",
    description:
      "Remodelación de oficina con muros de cristal, acabados nuevos y mobiliario a medida — entregada lista para operar.",
    image: "/images/oficina-brisas.jpeg",
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
];

const categories: BadgeType[] = [
  "Comercial y Residencial",
  "Remodelaciones y Adecuaciones",
  "Diseño y Proyecto",
];

export default function Projects() {
  return (
    <section id="proyectos" style={{ backgroundColor: "#0C0C0E" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28 lg:py-40">
        {/* Header */}
        <h2
          className="font-light mb-20 lg:mb-28"
          style={{ fontSize: "clamp(28px, 3.2vw, 40px)", letterSpacing: "-0.01em", color: "#F2EFE8", maxWidth: "22ch" }}
        >
          Cada proyecto cuenta una historia.
          <br />
          <span style={{ color: "#8A8A96" }}>Del diagnóstico a los resultados.</span>
        </h2>

        {/* Grouped by category — heading, then its projects, repeated */}
        <div className="flex flex-col gap-20 lg:gap-24">
          {categories.map((category) => {
            const items = projects.filter((p) => p.badge === category);
            if (items.length === 0) return null;

            return (
              <div key={category}>
                <h3
                  className="mb-8 lg:mb-10"
                  style={{
                    fontSize: "13px",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#C9A55A",
                    paddingBottom: "16px",
                    borderBottom: "1px solid #2A2A30",
                  }}
                >
                  {category}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
                  {items.map((p) => (
                    <article key={p.name + p.year} className="group flex flex-col">
                      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4 / 5", borderRadius: "4px" }}>
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          className="object-cover transition-all duration-300 ease-out group-hover:scale-[1.05]"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"
                          style={{ backgroundColor: "rgba(12,12,14,0.55)", backdropFilter: "blur(6px)" }}
                        />
                        <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                          <p style={{ fontSize: "12px", letterSpacing: "0.03em", color: "#C9A55A", marginBottom: "10px" }}>
                            {p.badge}
                          </p>
                          <p style={{ fontSize: "13px", lineHeight: "1.6", color: "#F2EFE8", fontWeight: 300 }}>
                            {p.description}
                          </p>
                          <p style={{ fontSize: "11px", letterSpacing: "0.03em", color: "#8A8A96", marginTop: "12px" }}>
                            {p.role}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-baseline justify-between gap-3 mt-5">
                        <h3 style={{ fontSize: "16px", color: "#F2EFE8", fontWeight: 400 }}>{p.name}</h3>
                        <span style={{ fontSize: "13px", color: "#52525C" }}>{p.year}</span>
                      </div>
                      <p style={{ fontSize: "13px", color: "#8A8A96", marginTop: "4px" }}>{p.location}</p>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
