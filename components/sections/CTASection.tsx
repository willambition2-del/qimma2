"use client";

import { useEffect, useRef } from "react";
import { ArrowLeft, MessageCircle, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function CTASection() {
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
            start: "top 80%",
            once: true,
          },
        });

        tl.fromTo(
          ".cta-gold-line",
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }
        )
          .fromTo(
            ".cta-title",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
            "-=0.3"
          )
          .fromTo(
            ".cta-description",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
            "-=0.3"
          )
          .fromTo(
            ".cta-buttons > *",
            { opacity: 0, y: 15 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.1,
              ease: "power3.out",
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

  const whatsappUrl = buildWhatsAppUrl(
    "مرحبًا، لدي فكرة مشروع وأرغب في مناقشتها"
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-primary-dark"
    >
      {/* Background Decorative Grid and Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        {/* Large gold/primary glowing highlights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-gold/10 via-primary/20 to-gold/10 rounded-full blur-3xl" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl" />
      </div>

      {/* Content wrapper */}
      <div className="relative container-custom max-w-5xl">
        {/* Glowing glass panel */}
        <div className="relative rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-md p-10 md:p-16 overflow-hidden shadow-2xl">
          {/* Internal grid patterns */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
          
          <div className="relative z-10 text-center flex flex-col items-center">
            {/* Sparkling badge icon */}
            <div className="cta-gold-line opacity-0 w-16 h-16 rounded-2xl bg-gold/20 text-gold flex items-center justify-center mb-8 shadow-lg shadow-gold/10 scale-0 origin-center">
              <Sparkles className="w-8 h-8" />
            </div>

            {/* Glowing Headline */}
            <h2 className="cta-title opacity-0 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 max-w-3xl mx-auto">
              لديك فكرة؟ <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-200 to-gold drop-shadow-sm">دعنا نحوّلها</span> إلى مشروع ناجح
            </h2>

            {/* Description */}
            <p className="cta-description opacity-0 text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto mb-10">
              فريقنا جاهز لمساعدتك في تقديم خدمات تسويق الكتروني وادارة حملات اعلانية وتطوير البرامج لتحويل رؤيتك إلى واقع رقمي بمعايير عالمية.
            </p>

            {/* Buttons wrapper */}
            <div className="cta-buttons flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Button
                variant="gold"
                size="lg"
                href="/contact"
                icon={<ArrowLeft className="w-5 h-5 rtl-flip" />}
                iconPosition="end"
                className="w-full sm:w-auto shadow-lg shadow-gold/20 hover:scale-105 transition-transform duration-300"
              >
                ابدأ مشروعك الآن
              </Button>
              <Button
                variant="whatsapp"
                size="lg"
                href={whatsappUrl}
                target="_blank"
                icon={<MessageCircle className="w-5 h-5" />}
                className="w-full sm:w-auto hover:scale-105 transition-transform duration-300"
              >
                تواصل عبر واتساب
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
