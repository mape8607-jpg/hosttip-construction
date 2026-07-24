const whatItems = [
  "Diagnóstico y análisis inmobiliario",
  "Diseño arquitectónico y proyecto ejecutivo",
  "Planeación y viabilidad financiera",
  "Ejecución de obra residencial y comercial",
  "Remodelaciones y adecuaciones",
  "Supervisión y dirección de obra",
];

const pillars = [
  {
    tag: "WHY",
    title: "Por qué existimos",
    body: "El valor ya existe, pero está disperso. Hay que descubrirlo y conectar las piezas. Creemos que cada espacio tiene un potencial que muchas veces permanece oculto. Nuestra pasión es descubrirlo y convertirlo en decisiones que generen más valor.",
    list: null as string[] | null,
  },
  {
    tag: "HOW",
    title: "Cómo lo logramos",
    body: "Orquestando talento con un propósito común, conectando visión, diseño, inversión y ejecución. Entendemos la visión de nuestros clientes para diseñar soluciones donde la arquitectura, la viabilidad financiera y la ejecución encuentran equilibrio, creando valor a largo plazo.",
    list: null as string[] | null,
  },
  {
    tag: "WHAT",
    title: "Qué hacemos",
    body: null as string | null,
    list: whatItems,
  },
];

export default function Why() {
  return (
    <section id="nosotros" style={{ backgroundColor: "#0C0C0E" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <h2
            className="font-light"
            style={{ fontSize: "clamp(28px, 3.2vw, 40px)", letterSpacing: "-0.01em", color: "#F2EFE8" }}
          >
            Construimos con criterio,
            <br />
            <span style={{ color: "#8A8A96" }}>no con inercia.</span>
          </h2>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px" style={{ backgroundColor: "#2A2A30" }}>
          {pillars.map((p) => (
            <div
              key={p.tag}
              className="flex flex-col gap-6 p-8 lg:p-12"
              style={{ backgroundColor: "#0C0C0E" }}
            >
              <span
                style={{
                  fontSize: "13px",
                  letterSpacing: "0.04em",
                  color: "#C9A55A",
                }}
              >
                {p.tag}
              </span>
              <h3
                style={{ fontSize: "19px", letterSpacing: "-0.01em", color: "#F2EFE8", fontWeight: 500 }}
              >
                {p.title}
              </h3>

              {p.body && (
                <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#8A8A96", fontWeight: 300 }}>
                  {p.body}
                </p>
              )}

              {p.list && (
                <ul className="flex flex-col gap-3">
                  {p.list.map((item) => (
                    <li
                      key={item}
                      style={{ fontSize: "14px", color: "#8A8A96", fontWeight: 300, lineHeight: "1.5" }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-20 max-w-3xl mx-auto text-center">
          <blockquote
            className="font-light"
            style={{ fontSize: "clamp(20px, 2.5vw, 28px)", letterSpacing: "-0.01em", color: "#8A8A96", lineHeight: 1.6 }}
          >
            "Cada espacio merece ser entendido antes de intervenirse.
            Un buen diagnóstico permite tomar{" "}
            <span style={{ color: "#F2EFE8", fontWeight: 500 }}>mejores decisiones desde el inicio.</span>"
          </blockquote>
        </div>
      </div>
    </section>
  );
}
