"use client";

import { useEffect, useRef } from "react";
import { trustItems } from "@/data/trust-items";
import {
  Layers,
  Paintbrush,
  Cpu,
  Headphones,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Layers,
  Paintbrush,
  Cpu,
  Headphones,
};

export default function TrustBar() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let ctx: ReturnType<typeof import("gsap").gsap.context> | null = null;

    const initAnimation = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.fromTo(
          ".trust-item",
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              once: true,
            },
          }
        );
      }, el);
    };

    initAnimation();

    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-surface border-b border-border"
      aria-label="مميزاتنا"
    >
      <div className="container-custom py-8 md:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {trustItems.map((item, idx) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={idx}
                className="trust-item flex flex-col items-center gap-3 text-center opacity-0"
              >
                {Icon && (
                  <div className="w-11 h-11 rounded-xl bg-primary-light flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" strokeWidth={1.8} />
                  </div>
                )}
                <span className="text-sm md:text-base font-semibold text-foreground">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
