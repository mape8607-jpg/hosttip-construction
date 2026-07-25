"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const MIN_HOLD_MS = 500;
const MAX_WAIT_MS = 4500; // fallback if the video never fires "ready"
const VIDEO_LEAD_MS = 200; // video starts a beat before the blur clears
const FADE_MS = 1600;

export default function Intro() {
  const [phase, setPhase] = useState<"visible" | "fading" | "hidden">("visible");
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setPhase("hidden");
      window.dispatchEvent(new Event("hosttip:startvideo"));
      return;
    }

    document.body.style.overflow = "hidden";
    const enterFrame = requestAnimationFrame(() => setEntered(true));

    let minHoldDone = false;
    let videoReady = false;
    let started = false;

    const timers: ReturnType<typeof setTimeout>[] = [];

    const tryStart = () => {
      if (started || !minHoldDone || !videoReady) return;
      started = true;

      // Kick the video off first, then let the blur clear a beat later —
      // so playback is already smooth by the time it's revealed.
      window.dispatchEvent(new Event("hosttip:startvideo"));
      timers.push(
        setTimeout(() => setPhase("fading"), VIDEO_LEAD_MS)
      );
      timers.push(
        setTimeout(() => {
          setPhase("hidden");
          document.body.style.overflow = "";
        }, VIDEO_LEAD_MS + FADE_MS)
      );
    };

    timers.push(
      setTimeout(() => {
        minHoldDone = true;
        tryStart();
      }, MIN_HOLD_MS)
    );

    // Safety net: never wait forever on a slow connection.
    timers.push(
      setTimeout(() => {
        videoReady = true;
        tryStart();
      }, MAX_WAIT_MS)
    );

    const onVideoReady = () => {
      videoReady = true;
      tryStart();
    };
    window.addEventListener("hosttip:videoready", onVideoReady);

    return () => {
      cancelAnimationFrame(enterFrame);
      timers.forEach(clearTimeout);
      window.removeEventListener("hosttip:videoready", onVideoReady);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "hidden") return null;

  const fading = phase === "fading";

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{
        backgroundColor: "#060608",
        opacity: fading ? 0 : 1,
        filter: fading ? "blur(20px)" : "blur(0px)",
        pointerEvents: fading ? "none" : "auto",
        transition: `opacity ${FADE_MS}ms cubic-bezier(0.4, 0, 0.2, 1), filter ${FADE_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`,
      }}
      aria-hidden="true"
    >
      <Image
        src="/logo.png"
        alt="HOSTTIP"
        width={400}
        height={400}
        className="w-56 sm:w-72 h-auto"
        priority
        style={{
          opacity: entered ? 1 : 0,
          transform: fading ? "scale(1.3)" : entered ? "scale(1)" : "scale(0.94)",
          transition: fading
            ? `transform ${FADE_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`
            : "opacity 500ms cubic-bezier(0.4, 0, 0.2, 1), transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />
    </div>
  );
}
