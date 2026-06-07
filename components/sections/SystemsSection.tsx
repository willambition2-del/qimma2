"use client";

import { useEffect, useRef, useState } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.45); // Default scale factor

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleResize = () => {
      const width = container.offsetWidth;
      if (width > 0) {
        setScale(width / 1280);
      }
    };

    handleResize();
    const timer = setTimeout(handleResize, 150);

    const observer = new ResizeObserver(handleResize);
    observer.observe(container);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

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
                    className="systems-example flex items-center gap-3 px-4.5 py-3.5 rounded-xl bg-primary-light/10 border border-gold/30 hover:border-gold/60 hover:bg-primary-light/15 transition-all duration-300 shadow-sm"
                  >
                    {Icon && (
                      <Icon
                        className="w-5 h-5 text-gold shrink-0"
                        strokeWidth={1.8}
                      />
                    )}
                    <span className="text-sm md:text-base font-semibold text-white leading-snug">
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

          {/* Laptop Mockup containing live Pharmacy System iframe */}
          <div className="systems-mockup opacity-0 w-full max-w-[580px] mx-auto">
            {/* Laptop Screen Lid */}
            <div className="relative bg-neutral-900 rounded-t-[20px] p-[8px] md:p-[10px] border border-neutral-700/60 shadow-elevated">
              {/* Screen Bezel Interior */}
              <div className="relative bg-neutral-950 rounded-lg overflow-hidden border border-neutral-800 shadow-inner">
                {/* Camera Notch */}
                <div className="absolute top-1.5 inset-x-0 flex justify-center z-20">
                  <div className="w-1.5 h-1.5 bg-neutral-900 rounded-full border border-neutral-800/40" />
                </div>

                {/* Screen frame and Iframe wrapper */}
                <div 
                  ref={containerRef} 
                  className="relative w-full aspect-[16/10] bg-neutral-900 overflow-hidden select-none"
                  style={{ direction: "ltr" }}
                >
                  <iframe
                    src="https://sale-savvy-pharmacy.vercel.app/"
                    title="Sale Savvy Pharmacy Preview"
                    className="absolute left-0 top-0 border-0 pointer-events-auto origin-top-left"
                    style={{
                      width: "1280px",
                      height: "800px",
                      transform: `scale(${scale})`,
                      transformOrigin: "top left",
                      backgroundColor: "#0f172a"
                    }}
                    sandbox="allow-scripts allow-same-origin allow-popups"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Laptop Base keyboard deck */}
            <div className="relative h-[12px] bg-gradient-to-b from-neutral-300 via-neutral-400 to-neutral-500 rounded-b-[8px] shadow-md z-10">
              {/* Open notch */}
              <div className="absolute top-0 inset-x-0 flex justify-center">
                <div className="w-16 h-[4px] bg-neutral-600 rounded-b-[4px]" />
              </div>
            </div>

            {/* Laptop shadow */}
            <div className="w-[94%] mx-auto h-[8px] bg-black/40 rounded-full blur-[3px] mt-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
