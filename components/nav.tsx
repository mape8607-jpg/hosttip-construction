"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Proceso", href: "#proceso" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: "rgba(12,12,14,0.65)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center" aria-label="HOSTTIP inicio">
            <Image
              src="/logo.png"
              alt="HOSTTIP"
              width={120}
              height={40}
              className="h-11 w-auto"
              priority
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="transition-colors duration-200"
                style={{ fontSize: "13px", letterSpacing: "0.02em", color: "rgba(242,239,232,0.75)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F2EFE8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(242,239,232,0.75)")}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2"
            style={{ color: "#F2EFE8" }}
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
          className="md:hidden px-6 pb-8 pt-2 flex flex-col gap-5"
          style={{ backgroundColor: "#0C0C0E" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ fontSize: "14px", color: "#8A8A96" }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
