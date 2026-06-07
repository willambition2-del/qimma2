"use client";

import { useEffect, useRef } from "react";
import { Check, ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const bulletPoints = [
  "فريق متعدد التخصصات يجمع بين التسويق والتصميم والبرمجة",
  "مشاريع منجزة لعملاء في مختلف القطاعات",
  "حلول مخصصة تناسب احتياجات كل عميل",
  "دعم فني مستمر وصيانة دورية بعد التسليم",
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
        });

        tl.fromTo(
          ".about-visual",
          { opacity: 0, x: 60, scale: 0.95 },
          { opacity: 1, x: 0, scale: 1, duration: 0.9, ease: "power3.out" }
        )
          .fromTo(
            ".about-badge",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
            "-=0.5"
          )
          .fromTo(
            ".about-title",
            { opacity: 0, y: 25 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
            "-=0.3"
          )
          .fromTo(
            ".about-desc",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
            "-=0.3"
          )
          .fromTo(
            ".about-bullet",
            { opacity: 0, x: -15 },
            {
              opacity: 1,
              x: 0,
              duration: 0.4,
              stagger: 0.1,
              ease: "power3.out",
            },
            "-=0.2"
          )
          .fromTo(
            ".about-cta",
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
            "-=0.1"
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
      className="section-padding bg-white"
      id="about-preview"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-1">
            <div className="about-badge opacity-0 mb-5">
              <Badge variant="gold">5 سنوات من الخبرة</Badge>
            </div>

            <div className="about-title opacity-0">
              <div className="gold-accent-line mb-5" />
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                شريكك نحو النجاح الرقمي
              </h2>
            </div>

            <p className="about-desc opacity-0 mt-5 text-base md:text-lg text-muted leading-relaxed max-w-xl">
              في قمة، نؤمن أن كل مشروع يستحق حضورًا رقميًا يعكس قيمته
              الحقيقية. نعمل مع عملائنا كشركاء حقيقيين، نصمّم ونبني حلولًا
              رقمية متكاملة تجمع بين الإبداع والتقنية لتحقيق نتائج ملموسة.
            </p>

            <ul className="mt-7 space-y-3">
              {bulletPoints.map((point, idx) => (
                <li
                  key={idx}
                  className="about-bullet opacity-0 flex items-start gap-3"
                >
                  <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-primary-light flex items-center justify-center">
                    <Check
                      className="w-3 h-3 text-primary"
                      strokeWidth={2.5}
                    />
                  </span>
                  <span className="text-sm md:text-base text-foreground leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <div className="about-cta opacity-0 mt-9">
              <Button
                variant="primary"
                href="/about"
                icon={<ArrowLeft className="w-4 h-4 rtl-flip" />}
                iconPosition="end"
              >
                تعرّف علينا أكثر
              </Button>
            </div>
          </div>

          {/* Visual Placeholder */}
          <div className="order-2 about-visual opacity-0">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              {/* Gradient placeholder simulating an image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-primary rounded-2xl" />

              {/* Decorative elements */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              <div className="absolute top-6 end-6 w-20 h-20 rounded-full bg-gold/20 blur-xl" />
              <div className="absolute bottom-8 start-8 w-32 h-32 rounded-full bg-primary-light/10 blur-2xl" />

              {/* Inner content mockup */}
              <div className="absolute inset-6 rounded-xl border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gold/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gold font-inter">
                      Q
                    </span>
                  </div>
                  <p className="text-white/60 text-sm">قمة للتسويق والبرمجة</p>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 start-0 w-16 h-16">
                <div className="absolute top-0 start-0 w-full h-[3px] bg-gold" />
                <div className="absolute top-0 start-0 h-full w-[3px] bg-gold" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
