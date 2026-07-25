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
            <div key={step.id} className="group flex flex-col">
              <div className="relative w-full overflow-hidden mb-6" style={{ aspectRatio: "4 / 3" }}>
                <Image
                  src={step.image}
                  alt=""
                  fill
                  className="object-cover transition-all duration-300 ease-out group-hover:scale-[1.04] group-hover:blur-[2px]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div
                className={i > 0 ? "border-t md:border-t-0 md:border-l pt-8 md:pt-0 md:pl-12" : ""}
                style={{ borderColor: "#2A2A30" }}
              >
                <span
                  className="font-light transition-transform duration-300 ease-out group-hover:-translate-y-1"
                  style={{ fontSize: "15px", color: "#52525C", marginBottom: "20px", display: "block" }}
                >
                  {step.id}
                </span>
                <h3
                  className="mb-4 transition-transform duration-300 ease-out group-hover:-translate-y-1"
                  style={{ fontSize: "20px", letterSpacing: "-0.01em", color: "#F2EFE8", fontWeight: 500 }}
                >
                  {step.title}
                </h3>
                <p
                  className="transition-transform duration-300 ease-out delay-75 group-hover:-translate-y-0.5"
                  style={{ fontSize: "14px", lineHeight: "1.75", color: "#8A8A96", fontWeight: 300 }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
