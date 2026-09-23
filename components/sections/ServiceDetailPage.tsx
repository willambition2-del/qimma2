"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  CheckCircle2,
  Phone,
  Sparkles,
  Layers,
  ShieldCheck,
  Zap,
  Clock,
  ExternalLink,
} from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import type { Service, SubService } from "@/types";
import ServiceDetailsModal from "@/components/ui/ServiceDetailsModal";

interface ServiceDetailPageProps {
  service: Service;
  showSystemDemo?: boolean;
}

export default function ServiceDetailPage({
  service,
  showSystemDemo = false,
}: ServiceDetailPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.45);
  const [selectedSubService, setSelectedSubService] = useState<SubService | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!showSystemDemo) return;
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
  }, [showSystemDemo]);

  const defaultWhatsappMsg = `مرحبًا، أرغب في طلب خدمة (${service.title}) مع قمة`;
  const whatsappUrl = buildWhatsAppUrl(defaultWhatsappMsg);

  return (
    <>
      <Header />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <PageHeader
          badge={service.badge || "خدمات قمة"}
          title={service.title}
          description={service.description}
          imageSrc="/images/hero/slide-2.png"
        />

        {/* Quick action bar */}
        <section className="bg-white border-b border-border py-4">
          <div className="container-custom flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs md:text-sm text-muted">
              <Link href="/" className="hover:text-primary transition-colors">
                الرئيسية
              </Link>
              <span>/</span>
              <Link href="/services" className="hover:text-primary transition-colors">
                خدماتنا
              </Link>
              <span>/</span>
              <span className="text-foreground font-semibold">{service.title}</span>
            </div>

            <div className="flex items-center gap-3">
              <Button
                href={whatsappUrl}
                target="_blank"
                variant="gold"
                size="sm"
              >
                اطلب الخدمة الآن
              </Button>
              <Button
                href="#sub-services"
                variant="secondary"
                size="sm"
              >
                استعراض الحلول ({service.subServices.length})
              </Button>
            </div>
          </div>
        </section>

        {/* 2. Sub-Services Grid Section */}
        <section id="sub-services" className="section-padding bg-surface">
          <div className="container-custom">
            <ScrollReveal>
              <SectionHeading
                badge="الخدمات والحلول المتوفرة"
                title={`الخدمات المتاحة ضمن ${service.title}`}
                description="حلول متخصصة ومصممة بدقة لتلبي متطلبات مشروعك بأعلى كفاءة واحترافية."
              />
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
              {service.subServices.map((sub, idx) => {
                const subWhatsappUrl = buildWhatsAppUrl(
                  `مرحبًا، أود الاستفسار والبدء في خدمة (${sub.title}) التابعة لـ (${service.title})`
                );

                return (
                  <ScrollReveal key={sub.id} delay={idx * 0.05}>
                    <div className="bg-white rounded-2xl border border-border p-7 h-full flex flex-col justify-between card-hover transition-all duration-300 group hover:border-primary/40 hover:shadow-lg">
                      <div>
                        {/* Top Indicator */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="w-8 h-8 rounded-lg bg-primary-light text-primary flex items-center justify-center font-inter font-bold text-xs">
                            {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                          </span>
                          <span className="text-[11px] font-semibold text-gold bg-gold/10 px-2.5 py-0.5 rounded-full">
                            حل معتمد
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {sub.title}
                        </h3>

                        {/* Short Description */}
                        <p className="text-sm text-muted leading-relaxed mb-5">
                          {sub.shortDescription}
                        </p>

                        {/* Features if available */}
                        {sub.features && sub.features.length > 0 && (
                          <div className="pt-4 border-t border-border/50 mb-6 space-y-2">
                            {sub.features.slice(0, 4).map((feat, fIdx) => (
                              <div
                                key={fIdx}
                                className="flex items-start gap-2 text-xs text-foreground/80"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="pt-4 border-t border-border/40 flex items-center justify-between gap-3 mt-auto">
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedSubService(sub);
                            setIsModalOpen(true);
                          }}
                          className="text-xs font-bold text-primary hover:text-gold transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                        >
                          تفاصيل الخدمة
                          <ArrowLeft className="w-3.5 h-3.5 rtl-flip" />
                        </button>
                        <a
                          href={subWhatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold bg-surface hover:bg-gold hover:text-white px-3 py-1.5 rounded-lg border border-border transition-all duration-200"
                        >
                          طلب مباشر
                        </a>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Optional Live Demo / Showcase (e.g. for systems) */}
        {showSystemDemo && (
          <section className="section-padding bg-primary-dark text-white overflow-hidden">
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <ScrollReveal>
                  <div>
                    <span className="text-gold font-bold text-sm block mb-3">
                      تجربة حية تفاعلية
                    </span>
                    <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
                      أنظمة سحابية سريعة، آمنة ومريحة للمستخدم
                    </h2>
                    <p className="text-white/70 leading-relaxed mb-6 text-sm md:text-base">
                      صممنا واجهات الأنظمة لتكون سهلة الفهم لجميع موظفيك دون الحاجة لتدريب معقد. تصفح نموذجاً حياً من شاشات النظام السحابي عبر شاشة المحاكي المجاورة.
                    </p>
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                        <span className="text-sm text-white/90">
                          لوحة تحكم تفاعلية وتقارير لحظية دقيقة
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                        <span className="text-sm text-white/90">
                          متوافقة بالكامل مع هيئة الزكاة والضريبة والجمارك (ZATCA)
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                        <span className="text-sm text-white/90">
                          أمان عالي وصلاحيات دقيقة لكل مستخدم
                        </span>
                      </div>
                    </div>
                    <Button
                      href={whatsappUrl}
                      target="_blank"
                      variant="gold"
                      size="lg"
                    >
                      طلب استشارة برمجية مجانية
                    </Button>
                  </div>
                </ScrollReveal>

                {/* Laptop Mockup */}
                <ScrollReveal>
                  <div className="w-full max-w-[560px] mx-auto">
                    <div className="relative bg-neutral-900 rounded-t-[18px] p-[8px] md:p-[10px] border border-neutral-700/60 shadow-2xl">
                      <div className="relative bg-neutral-950 rounded-lg overflow-hidden border border-neutral-800">
                        <div
                          ref={containerRef}
                          className="relative w-full aspect-[16/10] bg-neutral-900 overflow-hidden select-none"
                          style={{ direction: "ltr" }}
                        >
                          <iframe
                            src="https://sale-savvy-pharmacy.vercel.app/"
                            title="نظام الإدارة السحابي"
                            className="absolute left-0 top-0 border-0 pointer-events-auto origin-top-left"
                            style={{
                              width: "1280px",
                              height: "800px",
                              transform: `scale(${scale})`,
                              transformOrigin: "top left",
                              backgroundColor: "#0f172a",
                            }}
                            sandbox="allow-scripts allow-same-origin allow-popups"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="relative h-[10px] bg-gradient-to-b from-neutral-300 via-neutral-400 to-neutral-500 rounded-b-[8px] shadow-md z-10">
                      <div className="absolute top-0 inset-x-0 flex justify-center">
                        <div className="w-16 h-[3px] bg-neutral-600 rounded-b-[4px]" />
                      </div>
                    </div>
                    <div className="w-[92%] mx-auto h-[6px] bg-black/40 rounded-full blur-[3px] mt-1" />
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
        )}

        {/* 3. Why Choose Qimma for this service */}
        {service.advantages && service.advantages.length > 0 && (
          <section className="section-padding bg-white">
            <div className="container-custom">
              <ScrollReveal>
                <SectionHeading
                  badge="لماذا قمة؟"
                  title={`لماذا تختار قمة لخدمة ${service.title}؟`}
                  description="نقدم معايير عمل استثنائية تركز على الجودة العالية والنتائج الملموسة لعملك."
                />
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12">
                {service.advantages.map((adv, idx) => (
                  <ScrollReveal key={idx} delay={idx * 0.08}>
                    <div className="bg-surface p-7 md:p-8 rounded-2xl border border-border/80 card-hover h-full flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2">
                          {adv.title}
                        </h3>
                        <p className="text-sm text-muted leading-relaxed">
                          {adv.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 4. Workflow / Implementation Process */}
        {service.process && service.process.length > 0 && (
          <section className="section-padding bg-surface border-y border-border/60">
            <div className="container-custom">
              <ScrollReveal>
                <SectionHeading
                  badge="طريقة العمل"
                  title="مراحل تنفيذ العمل خطوة بخطوة"
                  description="منهجية واضحة ومنظمة تضمن تسليم مشروعك بأعلى درجات الدقة وفي الوقت المحدد."
                />
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                {service.process.map((step, idx) => (
                  <ScrollReveal key={idx} delay={idx * 0.1}>
                    <div className="bg-white p-6 md:p-7 rounded-2xl border border-border/80 h-full flex flex-col justify-between card-hover relative overflow-hidden group">
                      <div className="absolute top-0 end-0 w-20 h-20 bg-primary/5 rounded-bl-full pointer-events-none group-hover:bg-primary/10 transition-colors" />
                      <div>
                        <span className="font-inter text-3xl md:text-4xl font-extrabold text-gold/40 group-hover:text-gold transition-colors block mb-4">
                          {step.step}
                        </span>
                        <h3 className="text-base md:text-lg font-bold text-foreground mb-3">
                          {step.title}
                        </h3>
                        <p className="text-xs md:text-sm text-muted leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 5. CTA Section */}
        <section className="section-padding bg-primary-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          <div className="container-custom relative text-center max-w-3xl mx-auto">
            <ScrollReveal>
              <span className="inline-block text-gold font-bold text-sm mb-3">
                لديك مشروع؟ دعنا نبدأ
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
                {service.ctaTitle || `ابدأ مشروعك في ${service.title} اليوم`}
              </h2>
              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto">
                {service.ctaDescription ||
                  "تواصل مع خبرائنا لمناقشة أهدافك واحتياجاتك، وسنقدم لك خطة عمل مفصلة وعرض سعر مخصص."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  href={whatsappUrl}
                  target="_blank"
                  variant="gold"
                  size="lg"
                >
                  اطلب الخدمة الآن
                </Button>
                <Button
                  href="/contact"
                  variant="secondary"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  تواصل عبر نموذج الموقع
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <ServiceDetailsModal
        subService={selectedSubService}
        parentServiceTitle={service.title}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <Footer />
      <WhatsAppButton />
    </>
  );
}
