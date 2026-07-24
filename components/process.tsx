const steps = [
  {
    id: "01",
    title: "Visita y diagnóstico",
    description:
      "Visitamos el inmueble, entendemos su contexto y detectamos dónde está su potencial. Cada decisión parte de un diagnóstico.",
  },
  {
    id: "02",
    title: "Arquitectura y planeación",
    description:
      "Desarrollamos el proyecto ejecutivo, coordinamos las especialidades y definimos un plan claro para ejecutar con certeza.",
  },
  {
    id: "03",
    title: "Ejecución en sitio",
    description:
      "Dirigimos cada obra de principio a fin, coordinando costo, tiempo y calidad de entrega bajo una sola responsabilidad.",
  },
];

export default function Process() {
  return (
    <section id="proceso" style={{ backgroundColor: "#0C0C0E" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-28 lg:py-40">
        {/* Header */}
        <h2
          className="font-light mb-20 lg:mb-28"
          style={{ fontSize: "clamp(28px, 3.2vw, 40px)", letterSpacing: "-0.01em", color: "#F2EFE8", maxWidth: "20ch" }}
        >
          Tres momentos, un solo hilo de responsabilidad.
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-12">
          {steps.map((step, i) => (
            <div
              key={step.id}
              className={
                "flex flex-col" +
                (i > 0 ? " border-t md:border-t-0 md:border-l pt-8 md:pt-0 md:pl-12" : "")
              }
              style={{ borderColor: "#2A2A30" }}
            >
              <span
                className="font-light"
                style={{ fontSize: "15px", color: "#52525C", marginBottom: "20px" }}
              >
                {step.id}
              </span>
              <h3
                className="mb-4"
                style={{ fontSize: "20px", letterSpacing: "-0.01em", color: "#F2EFE8", fontWeight: 500 }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: "14px", lineHeight: "1.75", color: "#8A8A96", fontWeight: 300 }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
