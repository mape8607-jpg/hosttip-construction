const pillars = [
  {
    tag: "WHY",
    title: "Por qué existimos",
    body: "El valor de un inmueble ya existe, pero está disperso. Está en las decisiones que no se tomaron, en los espacios que no se optimizaron, en la obra que arrancó sin diagnóstico. Existimos para descubrir ese valor y conectar las piezas.",
  },
  {
    tag: "HOW",
    title: "Cómo lo logramos",
    body: "Orquestando talento con propósito común y los recursos correctos. No somos una cuadrilla ni una empresa de diseño. Somos el hilo que une criterio estratégico, arquitectura, ejecución y control — bajo una sola responsabilidad.",
  },
  {
    tag: "WHAT",
    title: "Qué hacemos",
    body: "Descubrimos el estado real del inmueble. Diseñamos la solución con proyecto ejecutivo. Construimos — ya sea obra nueva o remodelación — con supervisión directa y entrega documentada.",
  },
];

export default function Why() {
  return (
    <section id="nosotros" style={{ backgroundColor: "#0C0C0E" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        {/* Header */}
        <div className="mb-20 max-w-3xl">
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
            Filosofía
          </p>
          <h2
            className="font-semibold"
            style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-0.02em", color: "#F2EFE8" }}
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
                  fontFamily: "var(--font-jetbrains-mono, monospace)",
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#C9A55A",
                }}
              >
                {p.tag}
              </span>
              <h3
                className="font-semibold"
                style={{ fontSize: "20px", letterSpacing: "-0.01em", color: "#F2EFE8" }}
              >
                {p.title}
              </h3>
              <p style={{ fontSize: "14px", lineHeight: "1.8", color: "#8A8A96" }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-20 max-w-3xl mx-auto text-center">
          <blockquote
            className="font-light"
            style={{ fontSize: "clamp(20px, 2.5vw, 28px)", letterSpacing: "-0.01em", color: "#8A8A96", lineHeight: 1.6 }}
          >
            "La mayoría de las obras arrancan sin diagnóstico. Se construye por
            intuición, se remodela sin números. Nosotros empezamos por entender
            el inmueble antes de{" "}
            <span style={{ color: "#F2EFE8", fontWeight: 500 }}>mover una piedra.</span>"
          </blockquote>
        </div>
      </div>
    </section>
  );
}
