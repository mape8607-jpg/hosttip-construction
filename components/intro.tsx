"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Intro() {
  const [phase, setPhase] = useState<"visible" | "fading" | "hidden">("visible");
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setPhase("hidden");
      return;
    }

    document.body.style.overflow = "hidden";

    const enterFrame = requestAnimationFrame(() => setEntered(true));
    const fadeTimer = setTimeout(() => setPhase("fading"), 500);
    const hideTimer = setTimeout(() => {
      setPhase("hidden");
      document.body.style.overflow = "";
    }, 2500);

    return () => {
      cancelAnimationFrame(enterFrame);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "hidden") return null;

  const fading = phase === "fading";

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{
        backgroundColor: "#0C0C0E",
        opacity: fading ? 0 : 1,
        filter: fading ? "blur(24px)" : "blur(0px)",
        pointerEvents: fading ? "none" : "auto",
        transition: "opacity 2000ms cubic-bezier(0.4, 0, 0.2, 1), filter 2000ms cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      aria-hidden="true"
    >
      <Image
        src="/logo.png"
        alt="HOSTTIP"
        width={180}
        height={60}
        className="w-40 sm:w-52 h-auto"
        priority
        style={{
          filter: "brightness(0) invert(1)",
          opacity: entered ? 1 : 0,
          transform: fading ? "scale(1.3)" : entered ? "scale(1)" : "scale(0.94)",
          transition: fading
            ? "transform 2000ms cubic-bezier(0.4, 0, 0.2, 1)"
            : "opacity 500ms cubic-bezier(0.4, 0, 0.2, 1), transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />
    </div>
  );
}
