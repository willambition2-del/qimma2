"use client";

import { useEffect, useRef } from "react";
import { services } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Megaphone,
  Globe,
  Settings,
  Smartphone,
  Palette,
  Lightbulb,
  ArrowLeft,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Megaphone,
  Globe,
  Settings,
  Database: Settings, // fallback for 'Database' icon string to Settings
  Smartphone,
  Palette,
  Lightbulb,
  ShoppingBag,
};

export default function ServicesSection() {
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
        // Heading animation
        gsap.fromTo(
          ".services-heading",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              once: true,
            },
          }
        );

        // Staggered card reveal
        gsap.fromTo(
          ".service-card",
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ".services-grid",
              start: "top 82%",
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
      className="section-padding-lg bg-surface"
      id="services"
    >
      <div className="container-custom">
        {/* Heading */}
        <div className="services-heading opacity-0">
          <SectionHeading
            badge="خدماتنا"
            title="حلول رقمية متكاملة لنمو أعمالك"
            description="نقدّم مجموعة شاملة من الخدمات الرقمية المصممة لتلبية احتياجات مشروعك وتحقيق أهدافك."
          />
        </div>

        {/* Cards Grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <a
                key={service.id}
                href={service.href}
                className="service-card group relative opacity-0 block bg-white rounded-xl border border-border p-7 card-hover overflow-hidden"
              >
                {/* Gold top border on hover */}
                <div className="absolute top-0 inset-x-0 h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center" />

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-primary-light flex items-center justify-center mb-5">
                  {Icon && (
                    <Icon
                      className="w-6 h-6 text-primary"
                      strokeWidth={1.8}
                    />
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed mb-5 line-clamp-3">
                  {service.description}
                </p>

                {/* Link */}
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  اعرف المزيد
                  <ArrowLeft
                    className="w-4 h-4 rtl-flip transition-transform duration-300 group-hover:-translate-x-1 rtl:group-hover:translate-x-1"
                    strokeWidth={2}
                  />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
