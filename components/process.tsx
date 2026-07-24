import { Search, PenLine, HardHat, ArrowRight } from "lucide-react";

const steps = [
  {
    id: "01",
    label: "DESCUBRIR",
    title: "Visita y\ndiagnóstico",
    description:
      "Vamos al inmueble, lo leemos completo y detectamos dónde está el valor. Ninguna decisión antes de entender qué hay.",
    icon: Search,
    sub: null,
  },
  {
    id: "02",
    label: "DISEÑAR",
    title: "Arquitectura\ny planeación",
    description:
      "Desarrollamos el proyecto ejecutivo, definimos el alcance, coordinamos especialistas y establecemos un plan de acción con números.",
    icon: PenLine,
    sub: null,
  },
  {
    id: "03",
    label: "CONSTRUIR",
    title: "Ejecución\nen sitio",
    description:
      "Dirigimos la obra con responsabilidad integral — coordinando cuadrillas, subcontratistas y entregas.",
    icon: HardHat,
    sub: ["Obra residencial y comercial", "Remodelaciones y adecuaciones"],
  },
];

export default function Process() {
  return (
    <section
      id="proceso"
      style={{ backgroundColor: "#141416", borderTop: "1px solid #2A2A30", borderBottom: "1px solid #2A2A30" }}
    >
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
            Cómo trabajamos
          </p>
          <h2
            className="font-semibold"
            style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-0.02em", color: "#F2EFE8" }}
          >
            Tres momentos. Un solo hilo.
          </h2>
        </div>

        {/* Steps — desktop: horizontal with arrows / mobile: vertical */}
        <div className="flex flex-col md:flex-row items-stretch gap-0">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="flex flex-col md:flex-row items-stretch flex-1">
                {/* Card */}
                <div
                  className="flex-1 p-8 lg:p-10 rounded-card flex flex-col gap-6"
                  style={{
                    backgroundColor: "#1C1C20",
                    border: "1px solid #2A2A30",
                    borderRadius: "12px",
                  }}
                >
                  {/* Number + icon row */}
                  <div className="flex items-start justify-between">
                    <span
                      style={{
                        fontFamily: "var(--font-jetbrains-mono, monospace)",
                        fontSize: "11px",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "#C9A55A",
                      }}
                    >
                      {step.id} · {step.label}
                    </span>
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                      style={{ color: "#52525C", flexShrink: 0 }}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="font-semibold"
                    style={{
                      fontSize: "clamp(24px, 2.5vw, 32px)",
                      letterSpacing: "-0.02em",
                      color: "#F2EFE8",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p style={{ fontSize: "14px", lineHeight: "1.7", color: "#8A8A96" }}>
                    {step.description}
                  </p>

                  {/* Sub-items for step 3 */}
                  {step.sub && (
                    <ul className="flex flex-col gap-2 mt-auto pt-4" style={{ borderTop: "1px solid #2A2A30" }}>
                      {step.sub.map((s) => (
                        <li
                          key={s}
                          className="flex items-center gap-2"
                          style={{ fontSize: "13px", color: "#8A8A96" }}
                        >
                          <span
                            className="inline-block w-1 h-1 rounded-full flex-shrink-0"
                            style={{ backgroundColor: "#C9A55A" }}
                          />
                          {s}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Arrow between steps (desktop) */}
                {i < steps.length - 1 && (
                  <div
                    className="hidden md:flex items-center justify-center px-4 flex-shrink-0"
                    aria-hidden="true"
                  >
                    <ArrowRight size={20} strokeWidth={1.5} style={{ color: "#C9A55A" }} />
                  </div>
                )}

                {/* Connector line between steps (mobile) */}
                {i < steps.length - 1 && (
                  <div
                    className="flex md:hidden items-center justify-start py-3 pl-10"
                    aria-hidden="true"
                  >
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-px h-5" style={{ backgroundColor: "#2A2A30" }} />
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: "#C9A55A" }}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
