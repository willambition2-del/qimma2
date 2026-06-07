"use client";

import { useEffect, useRef } from "react";
import { ArrowLeft, MessageCircle, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { stats } from "@/data/stats";

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let ctx: ReturnType<typeof import("gsap").gsap.context> | null = null;

    const initAnimation = async () => {
      const { gsap } = await import("gsap");

      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(
          ".hero-badge",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 }
        )
          .fromTo(
            ".hero-title",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8 },
            "-=0.3"
          )
          .fromTo(
            ".hero-description",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6 },
            "-=0.4"
          )
          .fromTo(
            ".hero-buttons > *",
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
            "-=0.3"
          )
          .fromTo(
            ".hero-stats > *",
            { opacity: 0, y: 15, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1 },
            "-=0.2"
          );

        // Floating orbs animation
        gsap.to(".hero-orb-1", {
          y: -20,
          x: 10,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        gsap.to(".hero-orb-2", {
          y: 15,
          x: -15,
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        gsap.to(".hero-orb-3", {
          y: -10,
          x: 20,
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }, heroRef);
    };

    initAnimation();

    // Mouse parallax (desktop only)
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024 || !orbsRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      orbsRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      ctx?.revert();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const whatsappUrl = buildWhatsAppUrl("مرحبًا، أرغب في بدء مشروع مع قمة");

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-primary-dark"
      id="hero"
    >
      {/* Background */}
      <div className="absolute inset-0">
        {/* Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-dark" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />

        {/* Decorative Orbs */}
        <div ref={orbsRef} className="absolute inset-0 transition-transform duration-300 ease-out">
          <div className="hero-orb-1 absolute top-[15%] end-[10%] w-72 h-72 bg-gold/8 rounded-full blur-3xl" />
          <div className="hero-orb-2 absolute bottom-[20%] start-[5%] w-96 h-96 bg-primary-light/10 rounded-full blur-3xl" />
          <div className="hero-orb-3 absolute top-[50%] end-[40%] w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        </div>

        {/* Decorative Lines */}
        <div className="absolute top-0 start-[20%] w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute top-0 end-[30%] w-px h-full bg-gradient-to-b from-transparent via-gold/5 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container-custom pt-32 pb-20 md:pt-40 md:pb-28" ref={contentRef}>
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="hero-badge opacity-0 mb-6">
            <Badge variant="light">
              <Sparkles className="w-3.5 h-3.5" />
              حلول رقمية متكاملة
            </Badge>
          </div>

          {/* Title */}
          <h1 className="hero-title opacity-0 text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-tight mb-6">
            نصنع حضورك الرقمي
            <br />
            <span className="text-gold">ونحوّل أفكارك</span> إلى نتائج حقيقية
          </h1>

          {/* Description */}
          <p className="hero-description opacity-0 text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mb-10">
            حلول متكاملة في التسويق الرقمي، تصميم المواقع، تطوير الأنظمة،
            وتطبيقات الموبايل لمساعدتك على النمو والوصول إلى عملائك باحترافية.
          </p>

          {/* Buttons */}
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 mb-14">
            <Button
              variant="gold"
              size="lg"
              href="/contact"
              icon={<ArrowLeft className="w-5 h-5 rtl-flip" />}
              iconPosition="end"
            >
              ابدأ مشروعك الآن
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="/services"
              className="border-white/20 text-white hover:bg-white/10"
            >
              استكشف خدماتنا
            </Button>
            <Button
              variant="whatsapp"
              size="lg"
              href={whatsappUrl}
              target="_blank"
              icon={<MessageCircle className="w-5 h-5" />}
            >
              تواصل عبر واتساب
            </Button>
          </div>

          {/* Stats Mini */}
          <div className="hero-stats flex flex-wrap items-center gap-6 md:gap-10">
            {stats.slice(0, 3).map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="font-inter text-2xl md:text-3xl font-bold text-gold">
                  {stat.value > 10 && "+"}{stat.value}
                </div>
                <div className="text-xs md:text-sm text-white/50 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
