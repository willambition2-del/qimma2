"use client";

import PageHeader from "@/components/ui/PageHeader";
import Link from "next/link";
import { Megaphone, Globe, Settings, Smartphone, ShoppingBag, ArrowLeft, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { services } from "@/data/services";

const iconMap: { [key: string]: any } = {
  Megaphone,
  Globe,
  Settings,
  Smartphone,
  ShoppingBag,
};

export default function ServicesContent() {
  return (
    <>
      {/* Hero Header */}
      <PageHeader
        badge="خدماتنا الرقمية"
        title={<>حلول متكاملة تغطي <span className="text-gold">جميع احتياجاتك</span></>}
        description="نقدم خدمات تسويق إلكتروني احترافية، برمجة مواقع الويب، تطوير المتاجر الإلكترونية، تطوير الأنظمة المخصصة، وتطبيقات الجوال لمساعدتك على التفوق والريادة."
        imageSrc="/images/hero/slide-2.png"
      />

      {/* Services Grid */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const IconComponent = iconMap[service.icon] || Globe;
              return (
                <ScrollReveal key={service.id} delay={idx * 0.06}>
                  <div className="relative flex flex-col justify-between h-full bg-white rounded-2xl border border-border p-8 card-hover transition-all duration-300 group hover:shadow-xl hover:border-primary/40">
                    {/* Top Accent Line */}
                    <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-l from-primary via-gold to-primary rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div>
                      {/* Icon & Count */}
                      <div className="flex items-center justify-between gap-4 mb-6">
                        <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-primary-light text-primary transition-transform duration-300 group-hover:scale-110">
                          <IconComponent className="w-7 h-7" />
                        </div>
                        <span className="text-xs font-semibold text-muted bg-surface px-3 py-1 rounded-full border border-border/80">
                          {service.subServices.length} خدمات فرعية
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted leading-relaxed mb-6 text-sm">
                        {service.shortDescription}
                      </p>

                      {/* Sub-services pills */}
                      <div className="mb-6 pt-3 border-t border-border/60">
                        <span className="text-[11px] font-bold text-gold block mb-2">أبرز الحلول:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {service.subServices.slice(0, 4).map((sub) => (
                            <span
                              key={sub.id}
                              className="text-[11px] bg-surface text-foreground/80 px-2.5 py-1 rounded-lg border border-border/50"
                            >
                              {sub.title}
                            </span>
                          ))}
                          {service.subServices.length > 4 && (
                            <span className="text-[11px] text-muted self-center">
                              +{service.subServices.length - 4} المزيد
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Link Button */}
                    <div className="pt-4 border-t border-border/50">
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 text-primary font-bold hover:text-gold transition-colors duration-300 text-sm"
                      >
                        استكشف الخدمة وحلولها
                        <ArrowLeft className="w-4 h-4 rtl-flip transition-transform duration-300 group-hover:-translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                هل تحتاج إلى استشارة متخصصة لمشروعك؟
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed text-sm md:text-base">
                فريقنا جاهز لدراسة متطلبات عملك وتقديم الحلول الرقمية الأنسب لتحقيق أهدافك التسويقية والبرمجية.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" variant="gold" size="lg">
                  احصل على استشارة مجانية
                </Button>
                <Button
                  href="https://wa.me/966531539622"
                  variant="secondary"
                  size="lg"
                  target="_blank"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  تحدث معنا عبر واتساب
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
