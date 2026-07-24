import Image from "next/image";

type BadgeType = "OBRA NUEVA" | "REMODELACIÓN" | "PROYECTO EJECUTIVO" | "ESTRUCTURA";

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
    badge: "OBRA NUEVA",
    name: "Locales Comerciales",
    location: "Boulevard Cañaveral · León",
    year: "2022",
    role: "Residencia de obra · ciclo completo",
    description:
      "Responsabilidad integral desde el levantamiento topográfico hasta la entrega. Proyecto ejecutivo, dos locales con mampostería, firmes de concreto y estructura metálica.",
    image: "/images/obra-01.jpg",
  },
  {
    badge: "OBRA NUEVA",
    name: "Cimentación y Terraza",
    location: "Residencial Lomas Punta del Este · León",
    year: "2023",
    role: "Dirección integral independiente",
    description:
      "Proyecto ejecutado de inicio a fin de forma independiente. Terraza sobre terreno con pendiente pronunciada, diseñada como base de cimentación para vivienda futura.",
    image: "/images/obra-12.jpg",
  },
  {
    badge: "PROYECTO EJECUTIVO",
    name: "Torre Tipo — Proyecto Bocanegra",
    location: "León, Gto.",
    year: "2026",
    role: "Proyecto ejecutivo en entorno BIM",
    description:
      "Desarrollo del proyecto ejecutivo de una torre tipo para conjunto de torres, con análisis de precios unitarios e integración de especialistas en BIM.",
    image: "/images/obra-09.jpg",
  },
  {
    badge: "REMODELACIÓN",
    name: "Terminación de Nivel",
    location: "Proyecto H40 · León",
    year: "2025",
    role: "Coordinación de subcontratistas",
    description:
      "Conclusión del nivel pendiente coordinando directamente fontanería, vidrio y aluminio, carpintería y limpieza de puesta en marcha. Incorporación de ocho nuevas puertas.",
    image: "/images/obra-07.jpg",
  },
  {
    badge: "ESTRUCTURA",
    name: "Diagnóstico y Reparación Estructural",
    location: "Local Brisas · Blvd. La Luz · León",
    year: "2026",
    role: "Diagnóstico estructural y ejecución",
    description:
      "Local comercial imposibilitado para renta por grietas. Dictamen estructural, reparación y restitución de viabilidad comercial.",
    image: "/images/obra-05.jpg",
  },
  {
    badge: "OBRA NUEVA",
    name: "Residencia Unifamiliar",
    location: "Fraccionamiento El Encanto · León",
    year: "2021",
    role: "Colaboración en obra",
    description:
      "Participación en la construcción de vivienda con sistema de muros de mampostería, apoyando en colados estructurales y logística de obra.",
    image: "/images/obra-08.jpg",
  },
];

const badgeColors: Record<BadgeType, { bg: string; text: string }> = {
  "OBRA NUEVA": { bg: "rgba(61,155,110,0.12)", text: "#3D9B6E" },
  "REMODELACIÓN": { bg: "rgba(201,165,90,0.12)", text: "#C9A55A" },
  "PROYECTO EJECUTIVO": { bg: "rgba(74,127,201,0.12)", text: "#4A7FC9" },
  "ESTRUCTURA": { bg: "rgba(201,74,74,0.12)", text: "#C94A4A" },
};

export default function Projects() {
  return (
    <section id="proyectos" style={{ backgroundColor: "#141416" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        {/* Header */}
        <div className="mb-16">
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
            Track record
          </p>
          <h2
            className="font-semibold"
            style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-0.02em", color: "#F2EFE8" }}
          >
            Proyectos ejecutados.
            <br />
            <span style={{ color: "#8A8A96" }}>Documentados con números reales.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => {
            const colors = badgeColors[p.badge];
            return (
              <article
                key={p.name + p.year}
                className="flex flex-col overflow-hidden transition-colors duration-200"
                style={{
                  backgroundColor: "#1C1C20",
                  border: "1px solid #2A2A30",
                  borderRadius: "12px",
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: "200px", backgroundColor: "#0C0C0E" }}>
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Badge overlay */}
                  <div className="absolute top-3 left-3">
                    <span
                      className="inline-flex items-center px-2.5 py-0.5"
                      style={{
                        backgroundColor: colors.bg,
                        color: colors.text,
                        borderRadius: "9999px",
                        fontSize: "10px",
                        letterSpacing: "0.06em",
                        fontWeight: 500,
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      {p.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 p-6 flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3
                      className="font-semibold leading-snug"
                      style={{ fontSize: "16px", color: "#F2EFE8" }}
                    >
                      {p.name}
                    </h3>
                    <span
                      className="flex-shrink-0"
                      style={{
                        fontFamily: "var(--font-jetbrains-mono, monospace)",
                        fontSize: "12px",
                        color: "#52525C",
                      }}
                    >
                      {p.year}
                    </span>
                  </div>

                  <p style={{ fontSize: "12px", color: "#52525C" }}>{p.location}</p>

                  <p style={{ fontSize: "13px", lineHeight: "1.6", color: "#8A8A96" }}>
                    {p.description}
                  </p>

                  <div
                    className="mt-auto pt-4"
                    style={{ borderTop: "1px solid #2A2A30" }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-jetbrains-mono, monospace)",
                        fontSize: "11px",
                        letterSpacing: "0.04em",
                        color: "#52525C",
                      }}
                    >
                      {p.role}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
