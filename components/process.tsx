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

function StepTitle({ step }: { step: (typeof steps)[number] }) {
  return (
    <div>
      <span
        className="font-light"
        style={{ fontSize: "19.5px", color: "#C9A55A", marginBottom: "9px", display: "block" }}
      >
        {step.id}
      </span>
      <h3 style={{ fontSize: "24px", letterSpacing: "-0.01em", color: "#F2EFE8", fontWeight: 500 }}>
        {step.title}
      </h3>
    </div>
  );
}

function StepPhoto({ step }: { step: (typeof steps)[number] }) {
  return (
    <div className="group relative w-full overflow-hidden" style={{ aspectRatio: "4 / 3" }}>
      <Image
        src={step.image}
        alt=""
        fill
        className="object-cover transition-all duration-300 ease-out group-hover:scale-[1.03] group-hover:blur-[6px]"
        sizes="(max-width: 768px) 45vw, 33vw"
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"
        style={{ backgroundColor: "rgba(12,12,14,0.6)" }}
      />
      <div
        className="absolute inset-0 flex items-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"
        style={{ pointerEvents: "none" }}
      >
        <p style={{ fontSize: "13px", lineHeight: "1.6", color: "#F2EFE8", fontWeight: 300 }}>
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
            style={{ left: "17px", top: "10px", bottom: "10px", width: "1px", backgroundColor: "#2A2A30", zIndex: 0 }}
          />
          <div className="flex flex-col gap-10">
            {steps.map((step) => (
              <div key={step.id} className="flex items-start gap-2">
                <span
                  className="flex-shrink-0 relative"
                  style={{
                    width: "9px",
                    height: "9px",
                    borderRadius: "9999px",
                    backgroundColor: "#F2EFE8",
                    marginTop: "8px",
                    marginLeft: "13px",
                    zIndex: 1,
                  }}
                />
                <div className="flex flex-col gap-3" style={{ width: "62%", marginLeft: "26px" }}>
                  <StepTitle step={step} />
                  <StepPhoto step={step} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop — titles row */}
        <div className="hidden md:grid md:grid-cols-3 gap-x-12">
          {steps.map((step) => (
            <StepTitle key={step.id} step={step} />
          ))}
        </div>

        {/* Desktop — thread connecting the three moments, between titles and photos */}
        <div className="hidden md:block relative" style={{ height: "10px", margin: "24px 0" }}>
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

        {/* Desktop — photos row */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-x-12">
          {steps.map((step) => (
            <StepPhoto key={step.id} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
