"use client";

import { Phone, Mail, MessageSquare, MapPin } from "lucide-react";
import Badge from "@/components/ui/Badge";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactForm from "@/components/sections/ContactForm";
import { siteConfig } from "@/data/site-config";

const contactCards = [
  {
    icon: Phone,
    title: "رقم الهاتف",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone}`,
  },
  {
    icon: MessageSquare,
    title: "واتساب",
    value: siteConfig.contact.whatsapp,
    href: `https://wa.me/${siteConfig.contact.phone}`,
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
];

export default function ContactPageContent() {
  return (
    <>
      {/* Hero Header */}
      <section className="relative bg-primary-dark pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="relative container-custom text-center">
          <Badge variant="gold" className="mb-6">
            ابقى على اتصال
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            تواصل معنا <span className="text-gold">اليوم</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            فريقنا جاهز دائمًا لمناقشة فكرتك وتقديم أفضل الحلول الرقمية لمشروعك. راسلنا أو اتصل بنا وسنسعد بخدمتك.
          </p>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Contact Cards & Form split */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Info Cards Side */}
            <div className="space-y-6 lg:col-span-1">
              <ScrollReveal>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">معلومات الاتصال</h2>
                  <p className="text-sm text-muted leading-relaxed mb-8">
                    يمكنك الوصول إلينا عبر إحدى قنوات الاتصال المباشرة أو تعبئة النموذج البريدي وسنقوم بالرد عليك في غضون 24 ساعة عمل.
                  </p>
                </div>
              </ScrollReveal>

              <div className="space-y-4">
                {contactCards.map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <ScrollReveal key={idx} delay={idx * 0.05}>
                      <a
                        href={card.href}
                        target={card.icon === MessageSquare ? "_blank" : undefined}
                        className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-border card-hover group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-xs text-muted block">{card.title}</span>
                          <span className="font-bold text-foreground group-hover:text-primary transition-colors duration-300 text-sm md:text-base dir-ltr inline-block">
                            {card.value}
                          </span>
                        </div>
                      </a>
                    </ScrollReveal>
                  );
                })}
              </div>

              {/* Map Placeholder */}
              <ScrollReveal delay={0.2}>
                <div className="bg-white p-5 rounded-2xl border border-border card-hover flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-muted block">الموقع الجغرافي</span>
                    <span className="font-bold text-foreground text-sm">
                      المملكة العربية السعودية، الرياض
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="bg-white border border-border p-8 rounded-3xl shadow-sm">
                  <h3 className="text-xl font-bold text-foreground mb-2">أرسل لنا تفاصيل مشروعك</h3>
                  <p className="text-xs text-muted mb-8">
                    يرجى تعبئة الحقول أدناه، وسيتولى مستشار من فريقنا دراسة المتطلبات وتجهيز استجابة مفصلة.
                  </p>
                  <ContactForm />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
