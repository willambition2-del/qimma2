"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, MessageCircle, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { stats } from "@/data/stats";

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/images/hero/slide-2.png"
  ];

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

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

        // Floating orbs animation if present
        if (heroRef.current?.querySelector(".hero-orb-1")) {
          gsap.to(".hero-orb-1", {
            y: -20,
            x: 10,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }
        if (heroRef.current?.querySelector(".hero-orb-2")) {
          gsap.to(".hero-orb-2", {
            y: 15,
            x: -15,
            duration: 5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }
        if (heroRef.current?.querySelector(".hero-orb-3")) {
          gsap.to(".hero-orb-3", {
            y: -10,
            x: 20,
            duration: 6,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }
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
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
      id="hero"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 bg-white overflow-hidden">
        {/* Slides */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide})`,
                opacity: currentSlide === idx ? 1 : 0,
                zIndex: currentSlide === idx ? 1 : 0,
                transition: "opacity 1.5s ease-in-out",
              }}
            />
          ))}
        </div>

        {/* Grid & Lines Parallax Container */}
        <div ref={orbsRef} className="absolute inset-0 z-10 transition-transform duration-300 ease-out">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-15" />

          {/* Decorative Lines */}
          <div className="absolute top-0 start-[20%] w-px h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          <div className="absolute top-0 end-[30%] w-px h-full bg-gradient-to-b from-transparent via-gold/15 to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative container-custom pt-32 pb-20 md:pt-40 md:pb-28" ref={contentRef}>
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="hero-badge opacity-0 mb-6">
            <Badge variant="blue">
              <Sparkles className="w-3.5 h-3.5" />
              حلول رقمية متكاملة
            </Badge>
          </div>

          {/* Title */}
          <h1 className="hero-title opacity-0 text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-tight mb-6">
            نصنع حضورك الرقمي
            <br />
            عبر <span className="text-gold">برمجة مواقع وتطبيقات</span> مبتكرة
          </h1>

          {/* Description */}
          <p className="hero-description opacity-0 text-base md:text-lg text-muted leading-relaxed max-w-2xl mb-10">
            شريكك الأول في التسويق الرقمي والتسويق في السعودية. نقدم خدمات برمجية متكاملة تشمل برمجة خاصة وتطوير تطبيقات وادارة حملات التسويق الالكتروني لتعزيز نمو أعمالك ومبيعاتك باحترافية.
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
          <div className="hero-stats flex items-center justify-center gap-6 sm:gap-10 text-center w-full">
            {stats.slice(0, 3).map((stat, idx) => (
              <div key={idx} className="text-center shrink-0">
                <div className="font-inter text-2xl md:text-3xl font-bold text-gold">
                  {stat.value > 10 && "+"}{stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted mt-1 whitespace-nowrap">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
