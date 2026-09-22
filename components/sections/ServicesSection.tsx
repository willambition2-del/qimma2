"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { services } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Megaphone,
  Globe,
  Settings,
  Smartphone,
  ShoppingBag,
  ArrowLeft,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Megaphone,
  Globe,
  Settings,
  Smartphone,
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
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
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
      className="section-padding-lg bg-surface relative overflow-hidden"
      id="services"
    >
      {/* Subtle decorative background blur */}
      <div className="absolute top-1/4 start-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 end-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative">
        {/* Heading */}
        <div className="services-heading opacity-0">
          <SectionHeading
            badge="خدماتنا الرئيسية"
            title="حلول رقمية متكاملة لنمو وريادة أعمالك"
            description="نقدّم منظومة احترافية من الخدمات المتخصصة المصممة لدفع مشروعك نحو القمة بأحدث التقنيات وأفضل الممارسات."
          />
        </div>

        {/* Cards Grid: 5 cards arranged cleanly (3 on top, 2 centered below on desktop) */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon] || Globe;
            const isLastRowCentered = idx >= 3;

            return (
              <div
                key={service.id}
                className={`service-card opacity-0 flex ${
                  isLastRowCentered ? "lg:col-span-1" : ""
                }`}
              >
                <Link
                  href={service.href}
                  className="group relative flex flex-col justify-between w-full bg-white rounded-2xl border border-border/80 p-7 md:p-8 card-hover overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/30"
                >
                  {/* Top Animated Gold Accent Border */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-l from-primary via-gold to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center" />

                  <div>
                    {/* Header: Icon & Subservices count pill */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-primary-light/80 text-primary flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white shadow-xs">
                        <Icon className="w-7 h-7" strokeWidth={1.8} />
                      </div>
                      <span className="text-[11px] font-bold text-muted bg-surface px-3 py-1 rounded-full border border-border/60">
                        {service.subServices.length} خدمات فرعية
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm text-muted leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>

                    {/* Highlights Preview */}
                    <div className="space-y-2 mb-6 pt-2 border-t border-border/40">
                      {service.subServices.slice(0, 3).map((sub) => (
                        <div
                          key={sub.id}
                          className="flex items-center gap-2 text-xs text-foreground/80 font-medium"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                          <span className="truncate">{sub.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link Button */}
                  <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:text-gold transition-colors duration-300">
                      استكشف الخدمة
                      <ArrowLeft className="w-4 h-4 rtl-flip transition-transform duration-300 group-hover:-translate-x-1 rtl:group-hover:translate-x-1" />
                    </span>
                    <span className="text-xs text-muted/60 group-hover:text-muted transition-colors">
                      عرض التفاصيل
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
