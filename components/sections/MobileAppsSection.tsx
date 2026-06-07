"use client";

import { useEffect, useRef } from "react";
import { mobileAppExamples } from "@/data/services";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import {
  Truck,
  ShoppingBag,
  Calendar,
  BookOpen,
  Heart,
  Briefcase,
  MessageCircle,
  Home,
  ArrowLeft,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Truck,
  ShoppingBag,
  Calendar,
  BookOpen,
  Heart,
  Briefcase,
  MessageCircle,
  Home,
};

export default function MobileAppsSection() {
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
          ".mobile-phone",
          { opacity: 0, x: -50, scale: 0.95 },
          { opacity: 1, x: 0, scale: 1, duration: 0.9, ease: "power3.out" }
        )
          .fromTo(
            ".mobile-content",
            { opacity: 0, x: 40 },
            { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
            "-=0.5"
          )
          .fromTo(
            ".mobile-example",
            { opacity: 0, y: 12 },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              stagger: 0.06,
              ease: "power3.out",
            },
            "-=0.4"
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
      className="section-padding-lg bg-white overflow-hidden"
      id="mobile-apps"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Phone Mockup — opposite side to SystemsSection */}
          <div className="mobile-phone opacity-0 flex justify-center">
            <div className="relative w-[260px] md:w-[280px]">
              {/* Phone frame */}
              <div className="relative rounded-[36px] border-[6px] border-foreground/90 bg-gradient-to-b from-primary-light to-white overflow-hidden shadow-elevated">
                {/* Notch */}
                <div className="absolute top-0 inset-x-0 flex justify-center z-10">
                  <div className="w-28 h-6 bg-foreground/90 rounded-b-2xl" />
                </div>

                {/* Screen content */}
                <div className="aspect-[9/19] p-4 pt-10 flex flex-col gap-3">
                  {/* Status bar mockup */}
                  <div className="flex items-center justify-between px-1 mb-2">
                    <div className="w-10 h-1.5 rounded-full bg-primary/20" />
                    <div className="flex gap-1">
                      <div className="w-3 h-1.5 rounded-full bg-primary/20" />
                      <div className="w-3 h-1.5 rounded-full bg-primary/20" />
                    </div>
                  </div>

                  {/* Header */}
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                      <span className="text-white text-xs font-bold font-inter">
                        Q
                      </span>
                    </div>
                    <div>
                      <div className="w-20 h-2.5 rounded-full bg-primary/20 mb-1.5" />
                      <div className="w-14 h-2 rounded-full bg-primary/10" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="rounded-xl bg-white shadow-card p-3 border border-border">
                    <div className="w-full h-16 rounded-lg bg-gradient-to-br from-primary-light to-primary/10 mb-2" />
                    <div className="w-3/4 h-2.5 rounded-full bg-foreground/15 mb-1.5" />
                    <div className="w-1/2 h-2 rounded-full bg-foreground/10" />
                  </div>

                  {/* List items */}
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white shadow-card border border-border"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gold/15 shrink-0" />
                        <div className="flex-1">
                          <div className="w-3/4 h-2 rounded-full bg-foreground/15 mb-1" />
                          <div className="w-1/2 h-1.5 rounded-full bg-foreground/8" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom nav */}
                  <div className="mt-auto flex items-center justify-around py-2 border-t border-border">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className={`w-5 h-5 rounded-lg ${
                          i === 1 ? "bg-primary/30" : "bg-primary/10"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -start-4 w-24 h-24 bg-gold/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -end-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            </div>
          </div>

          {/* Text Content */}
          <div className="mobile-content opacity-0">
            <SectionHeading
              badge="تطبيقات الموبايل"
              title="تطبيقات موبايل تمنح مشروعك تجربة أكثر قربًا من عملائك"
              description="نصمّم ونطوّر تطبيقات موبايل احترافية لنظامي iOS و Android تمنح عملاءك تجربة سلسة وسهلة تزيد من ولائهم وتفاعلهم مع علامتك التجارية."
              centered={false}
            />

            {/* Mobile App Examples */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              {mobileAppExamples.map((example, idx) => {
                const Icon = iconMap[example.icon];
                return (
                  <div
                    key={idx}
                    className="mobile-example opacity-0 flex items-center gap-3 px-4 py-3 rounded-xl bg-primary-light/50 border border-primary/5 hover:bg-primary-light transition-colors duration-300"
                  >
                    {Icon && (
                      <Icon
                        className="w-4.5 h-4.5 text-primary shrink-0"
                        strokeWidth={1.8}
                      />
                    )}
                    <span className="text-xs md:text-sm text-foreground leading-snug">
                      {example.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Button
                variant="primary"
                href="/services/mobile-apps"
                icon={<ArrowLeft className="w-4 h-4 rtl-flip" />}
                iconPosition="end"
              >
                ابدأ تطوير تطبيقك
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
