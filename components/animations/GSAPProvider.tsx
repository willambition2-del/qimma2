"use client";

import { useEffect, useRef } from "react";

/**
 * GSAP Provider - Registers GSAP plugins globally.
 * Must be rendered once in the layout.
 */
export default function GSAPProvider({ children }: { children: React.ReactNode }) {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const initGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Respect reduced motion
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) {
        gsap.globalTimeline.timeScale(100);
      }
    };

    initGSAP();
  }, []);

  return <>{children}</>;
}
