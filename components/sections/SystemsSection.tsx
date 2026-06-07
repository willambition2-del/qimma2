"use client";

import { useEffect, useRef } from "react";
import { systemExamples } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import {
  Stethoscope,
  GraduationCap,
  Users,
  Warehouse,
  CalendarCheck,
  Building,
  CreditCard,
  FolderKanban,
  Handshake,
  ArrowLeft,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Stethoscope,
  GraduationCap,
  Users,
  Warehouse,
  CalendarCheck,
  Building,
  CreditCard,
  FolderKanban,
  Handshake,
};

export default function SystemsSection() {
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
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
            once: true,
          },
        });

        tl.fromTo(
          ".systems-content",
          { opacity: 0, x: -40 },
          { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }
        )
          .fromTo(
            ".systems-example",
            { opacity: 0, y: 15 },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              stagger: 0.06,
              ease: "power3.out",
            },
            "-=0.4"
          )
          .fromTo(
            ".systems-mockup",
            { opacity: 0, x: 40, scale: 0.95 },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.9,
              ease: "power3.out",
            },
            "-=0.6"
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
      className="section-padding-lg bg-primary-dark overflow-hidden"
      id="systems"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="systems-content opacity-0">
            <SectionHeading
              badge="الأنظمة المخصصة"
              title="أنظمة مخصصة تبنيها وفق احتياجك الحقيقي"
              description="نطوّر أنظمة برمجية متكاملة مصممة خصيصًا لطبيعة عملك، تساعدك على أتمتة العمليات وتحسين الكفاءة وتوفير الوقت والجهد."
              centered={false}
              light
            />

            {/* System Examples Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-8">
              {systemExamples.map((example, idx) => {
                const Icon = iconMap[example.icon];
                return (
                  <div
                    key={idx}
                    className="systems-example opacity-0 flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/8 hover:bg-white/10 transition-colors duration-300"
                  >
                    {Icon && (
                      <Icon
                        className="w-4.5 h-4.5 text-gold shrink-0"
                        strokeWidth={1.8}
                      />
                    )}
                    <span className="text-xs md:text-sm text-white/80 leading-snug">
                      {example.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Button
                variant="gold"
                href="/contact"
                icon={<ArrowLeft className="w-4 h-4 rtl-flip" />}
                iconPosition="end"
              >
                اطلب نظامك الخاص
              </Button>
              <Button
                variant="secondary"
                href="/services/custom-systems"
                className="border-white/20 text-white hover:bg-white/10"
              >
                استكشف حلول الأنظمة
              </Button>
            </div>
          </div>

          {/* Dashboard Mockup Placeholder */}
          <div className="systems-mockup opacity-0">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              {/* Dark gradient background simulating a dashboard */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B3E] via-[#142B5A] to-[#0D1B3E] rounded-2xl border border-white/10" />

              {/* Grid pattern */}
              <div className="absolute inset-0 bg-grid-pattern opacity-5" />

              {/* Simulated dashboard UI elements */}
              <div className="absolute inset-5 flex flex-col gap-4">
                {/* Top bar */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gold/60" />
                    <div className="w-20 h-2.5 rounded-full bg-white/15" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-2.5 rounded-full bg-white/10" />
                    <div className="w-8 h-2.5 rounded-full bg-white/10" />
                    <div className="w-8 h-2.5 rounded-full bg-white/10" />
                  </div>
                </div>

                {/* Content area */}
                <div className="flex-1 grid grid-cols-3 gap-3">
                  {/* Sidebar */}
                  <div className="col-span-1 space-y-2">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className={`h-3 rounded-full ${
                          i === 1 ? "bg-gold/30 w-full" : "bg-white/8 w-4/5"
                        }`}
                      />
                    ))}
                  </div>
                  {/* Main content */}
                  <div className="col-span-2 space-y-3">
                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="p-3 rounded-lg bg-white/5 border border-white/5"
                        >
                          <div className="w-8 h-2 rounded-full bg-gold/25 mb-2" />
                          <div className="w-12 h-3 rounded-full bg-white/15" />
                        </div>
                      ))}
                    </div>
                    {/* Chart placeholder */}
                    <div className="flex-1 rounded-lg bg-white/5 border border-white/5 p-3 min-h-[80px]">
                      <div className="flex items-end justify-around h-full gap-1.5 pt-4">
                        {[40, 65, 45, 80, 55, 70, 60].map((h, i) => (
                          <div
                            key={i}
                            className="w-full rounded-t bg-gradient-to-t from-gold/40 to-gold/10"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -top-10 -end-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
