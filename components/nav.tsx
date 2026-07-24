"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Proceso", href: "#proceso" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: "rgba(12,12,14,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #2A2A30" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center" aria-label="HOSTTIP inicio">
            <Image
              src="/logo.png"
              alt="HOSTTIP"
              width={120}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: "#8A8A96" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F2EFE8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#8A8A96")}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contacto"
              className="text-sm font-semibold px-5 py-2 rounded-lg transition-colors duration-200"
              style={{ backgroundColor: "#C9A55A", color: "#0C0C0E", borderRadius: "8px" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#8A6F3A")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#C9A55A")}
            >
              Agenda una visita
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded"
            style={{ color: "#8A8A96" }}
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ borderTop: "1px solid #2A2A30", backgroundColor: "#0C0C0E" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium py-1"
              style={{ color: "#8A8A96" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="text-sm font-semibold px-5 py-3 rounded-lg text-center mt-2"
            style={{ backgroundColor: "#C9A55A", color: "#0C0C0E", borderRadius: "8px" }}
          >
            Agenda una visita
          </a>
        </div>
      )}
    </header>
  );
}
