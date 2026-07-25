"use client";

import Image from "next/image";

const links = [
  { label: "Proceso", href: "#proceso" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0C0C0E", borderTop: "1px solid #2A2A30" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-xs">
            <Image
              src="/logo-icon.png"
              alt="HOSTTIP"
              width={698}
              height={504}
              className="h-12 w-auto"
            />
            <p style={{ fontSize: "13px", lineHeight: "1.7", color: "#52525C" }}>
              Construimos con criterio, no con inercia.
            </p>
            <p
              style={{
                fontFamily: "var(--font-jetbrains-mono, monospace)",
                fontSize: "11px",
                letterSpacing: "0.06em",
                color: "#52525C",
              }}
            >
              León, Guanajuato · México
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="transition-colors duration-200"
                style={{ fontSize: "13px", color: "#52525C" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#8A8A96")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#52525C")}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 mt-16 pt-8"
          style={{ borderTop: "1px solid #2A2A30" }}
        >
          <span
            style={{
              fontFamily: "var(--font-jetbrains-mono, monospace)",
              fontSize: "11px",
              letterSpacing: "0.06em",
              color: "#52525C",
            }}
          >
            © {new Date().getFullYear()} HOSTTIP
          </span>
          <span style={{ fontSize: "12px", color: "#52525C" }}>
            Obra · Diseño · Criterio
          </span>
        </div>
      </div>
    </footer>
  );
}
