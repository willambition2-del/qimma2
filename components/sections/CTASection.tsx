"use client";

import { useEffect, useRef } from "react";
import { ArrowLeft, MessageCircle } from "lucide-react";
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
          { scaleX: 0 },
          { scaleX: 1, duration: 0.6, ease: "power3.out" }
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
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-dark" />

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gold orbs */}
        <div className="absolute top-[15%] end-[10%] w-40 h-40 bg-gold/8 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] start-[8%] w-56 h-56 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-[50%] start-[45%] w-32 h-32 bg-primary-light/5 rounded-full blur-3xl" />

        {/* Decorative lines */}
        <div className="absolute top-0 start-[20%] w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
        <div className="absolute top-0 end-[25%] w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />

        {/* Corner accents */}
        <div className="absolute top-8 start-8 w-16 h-16 border-t-2 border-s-2 border-gold/20 rounded-tl-2xl" />
        <div className="absolute bottom-8 end-8 w-16 h-16 border-b-2 border-e-2 border-gold/20 rounded-br-2xl" />
      </div>

      {/* Content */}
      <div className="relative container-custom text-center">
        {/* Gold accent line */}
        <div className="cta-gold-line gold-accent-line mx-auto mb-6 origin-center" />

        <h2 className="cta-title opacity-0 text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight mb-5 max-w-3xl mx-auto">
          لديك فكرة؟{" "}
          <span className="text-gold">دعنا نحوّلها</span> إلى مشروع ناجح
        </h2>

        <p className="cta-description opacity-0 text-base md:text-lg text-white/60 leading-relaxed max-w-xl mx-auto mb-10">
          فريقنا جاهز لمساعدتك في تحويل رؤيتك إلى واقع رقمي بمعايير عالمية.
          تواصل معنا اليوم وابدأ رحلة النجاح.
        </p>

        <div className="cta-buttons flex flex-col sm:flex-row items-center justify-center gap-4">
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
            variant="whatsapp"
            size="lg"
            href={whatsappUrl}
            target="_blank"
            icon={<MessageCircle className="w-5 h-5" />}
          >
            تواصل عبر واتساب
          </Button>
        </div>
      </div>
    </section>
  );
}
