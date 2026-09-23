"use client";

import { useEffect, useRef } from "react";
import {
  Code2,
  Smartphone,
  TrendingUp,
  ShieldCheck,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import Button from "@/components/ui/Button";

const services = [
  {
    icon: Code2,
    title: "تطوير وبرمجة المواقع",
    desc: "منصات ومواقع ويب فائقة السرعة بتجربة مستخدم تفاعلية.",
  },
  {
    icon: Smartphone,
    title: "برمجة تطبيقات الجوال",
    desc: "تطبيقات ذكية لنظامي iOS وأندرويد بأعلى معايير الأداء.",
  },
  {
    icon: TrendingUp,
    title: "التسويق ونمو المبيعات",
    desc: "استراتيجيات وحملات إعلانية مدروسة تضاعف مبيعاتك.",
  },
  {
    icon: ShieldCheck,
    title: "أنظمة مخصصة ودعم فني",
    desc: "حلول سحابية لإدارة أعمالك مع صيانة ومتابعة مستمرة.",
  },
];

export default function AboutSection() {
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
          defaults: { ease: "power3.out" },
        });

        tl.fromTo(
          ".about-badge",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.4 }
        )
          .fromTo(
            ".about-title",
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.5 },
            "-=0.2"
          )
          .fromTo(
            ".about-desc",
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.4 },
            "-=0.2"
          )
          .fromTo(
            ".about-action",
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.4 },
            "-=0.2"
          )
          .fromTo(
            ".about-card",
            { opacity: 0, y: 15 },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              stagger: 0.08,
            },
            "-=0.2"
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
      className="py-16 lg:py-20 bg-white"
      id="about-preview"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Main Info Column */}
          <div className="lg:col-span-6">
            
            {/* Minimalist Badge */}
            <div className="about-badge opacity-0 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-soft border border-gold/25 text-gold text-xs font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>5 سنوات من الريادة التقنية والتسويقية</span>
            </div>

            {/* Title */}
            <div className="about-title opacity-0">
              <div className="gold-accent-line mb-4" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground leading-[1.3] tracking-tight">
                نجمع بين <span className="text-primary">قوة البرمجة</span>{" "}
                و<span className="text-gold">ذكاء التسويق</span>
              </h2>
            </div>

            {/* Description - Short & Punchy */}
            <p className="about-desc opacity-0 mt-4 text-sm sm:text-base text-muted leading-relaxed max-w-lg">
              وكالة سعودية متخصصة في تطوير البرمجيات والتسويق الرقمي. نبتكر مواقع ويب سريعة، تطبيقات جوال ذكية، وحملات تسويقية مدروسة تعزز حضورك وتضمن نمو مبيعاتك.
            </p>

            {/* CTA Action */}
            <div className="about-action opacity-0 mt-7">
              <Button
                variant="primary"
                href="/about"
                icon={<ArrowLeft className="w-4 h-4 rtl-flip" />}
                iconPosition="end"
                size="md"
              >
                تعرّف علينا أكثر
              </Button>
            </div>

          </div>

          {/* 4 Clean Lightweight Cards */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {services.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="about-card opacity-0 group p-4 sm:p-5 rounded-2xl bg-surface/50 border border-border/70 hover:bg-white hover:border-gold/30 hover:shadow-card transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary-light/80 text-primary group-hover:bg-primary group-hover:text-white flex items-center justify-center mb-3 transition-colors duration-300">
                      <IconComponent className="w-5 h-5" strokeWidth={2} />
                    </div>
                    
                    <h3 className="text-sm sm:text-base font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-xs text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
