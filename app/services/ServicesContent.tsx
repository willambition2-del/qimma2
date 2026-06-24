"use client";

import PageHeader from "@/components/ui/PageHeader";

import Link from "next/link";
import { Megaphone, Globe, Settings, Smartphone, Palette, Lightbulb, ArrowLeft, ShoppingBag } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { services } from "@/data/services";

const iconMap: { [key: string]: any } = {
  Megaphone,
  Globe,
  Settings,
  Smartphone,
  Palette,
  Lightbulb,
  ShoppingBag,
};

export default function ServicesContent() {
  return (
    <>
      {/* Hero Header */}
      <PageHeader badge="خدماتنا الرقمية"
        title={<>حلول متكاملة تغطي <span className="text-gold">جميع احتياجاتك</span></>}
        description="نقدم خدمات تسويق الكتروني احترافية، برمجة مواقع الويب، تطوير تطبيقات الجوال، وتطوير البرمجيات المخصصة لمساعدتك على التفوق الرقمي."
        imageSrc="/images/hero/slide-2.png" />

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const IconComponent = iconMap[service.icon] || Globe;
              return (
                <ScrollReveal key={service.id} delay={idx * 0.05}>
                  <div className="relative flex flex-col h-full bg-white rounded-2xl border border-border p-8 card-hover transition-all duration-300 group hover:shadow-lg">
                    {/* Top Accent Line */}
                    <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-l from-primary to-gold rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Icon */}
                    <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-2xl bg-primary-light text-primary transition-transform duration-300 group-hover:scale-110">
                      <IconComponent className="w-7 h-7" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted leading-relaxed mb-6 flex-grow text-sm">
                      {service.description}
                    </p>

                    {/* Features preview */}
                    {service.features && (
                      <ul className="mb-8 space-y-2">
                        {service.features.slice(0, 3).map((feature, fIdx) => (
                          <li key={fIdx} className="text-xs text-muted/80 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Link Button */}
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-primary font-bold hover:text-gold transition-colors duration-300 text-sm mt-auto self-start"
                    >
                      تفاصيل الخدمة
                      <ArrowLeft className="w-4 h-4 rtl-flip transition-transform duration-300 group-hover:-translate-x-1" />
                    </Link>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                هل تحتاج إلى استشارة متخصصة لمشروعك؟
              </h2>
              <p className="text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
                فريقنا جاهز لدراسة متطلبات عملك وتقديم الحلول الرقمية الأنسب لتحقيق أهدافك التسويقية والبرمجية.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" variant="primary" size="lg">
                  احصل على استشارة مجانية
                </Button>
                <Button href="https://wa.me/966504469214" variant="whatsapp" size="lg" target="_blank">
                  تحدث معنا مباشرة
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
