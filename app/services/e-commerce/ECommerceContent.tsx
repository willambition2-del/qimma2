"use client";

import PageHeader from "@/components/ui/PageHeader";
import Image from "next/image";
import { CheckCircle2, ShoppingBag, CreditCard, Truck, BarChart2, ShieldCheck, Zap } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const features = [
  {
    title: "متاجر إلكترونية متكاملة للبيع",
    description: "تأسيس وبرمجة متاجر إلكترونية تدعم سلات الشراء وإدارة المنتجات والمخزون، مع صفحات دفع سريعة وآمنة.",
  },
  {
    title: "ربط بوابات الدفع الإلكتروني",
    description: "تفعيل الدفع الإلكتروني بجميع الوسائل المحلية والعالمية مثل (مدى، فيزا، ماستركارد، Apple Pay) لتسهيل الشراء على عملائك.",
  },
  {
    title: "ربط شركات الشحن والتوصيل",
    description: "ربط متجرك تلقائيًا مع كبرى شركات الشحن (أرامكس، سمسا، سبل، وغيرها) لحساب تكلفة الشحن وتوليد بوالص الشحن بضغطة زر.",
  },
  {
    title: "إحصائيات وتقارير المبيعات",
    description: "لوحة تحكم إدارية متكاملة تقدم لك تحليلات فورية لحجم المبيعات، المنتجات الأكثر طلبًا، وسلوك العملاء داخل المتجر.",
  },
];

const technicalStrengths = [
  {
    icon: Zap,
    title: "سرعة تحميل خارقة",
    desc: "سرعة التصفح تزيد من نسبة إتمام الشراء. نضمن تحميل متجرك ومنتجاتك بلمح البصر على كافة الشبكات والأجهزة.",
  },
  {
    icon: ShieldCheck,
    title: "حماية وسلامة المعاملات",
    desc: "تأمين متكامل لمعلومات عملائك وبيانات الدفع الحساسة باستخدام بروتوكولات حماية مشفرة وشهادات SSL معتمدة.",
  },
  {
    icon: BarChart2,
    title: "تهيئة التسويق وإعادة الاستهداف",
    desc: "ندمج متجرك مع بكسل منصات التواصل (Snapchat, TikTok, Google) لتتبع سلوك الشراء وإعادة استهداف السلال المتروكة.",
  },
];

export default function ECommerceContent() {
  const whatsappUrl = buildWhatsAppUrl("مرحبًا، أريد الاستفسار عن تفاصيل تطوير متجر إلكتروني متكامل لمشروعي");

  return (
    <>
      {/* Hero Header */}
      <PageHeader badge="حلول تجارة إلكترونية"
        title="تطوير وتسويق المتاجر الإلكترونية"
        description="انقل تجارتك للمستقبل. نحن نقدم خدمات برمجة موقع الكتروني متكامل لمتجرك مع حلول تسويق متجر الكتروني احترافية لزيادة مبيعاتك وأرباحك."
        imageSrc="/images/hero/slide-2.png" />

      {/* Main Details Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="text-gold font-bold text-sm block mb-2">منصات تجارة رقمية لزيادة أرباحك</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  ابدأ البيع عبر الإنترنت اليوم بكل سهولة وأمان
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  نحن في قمة لا نقوم بمجرد برمجة موقع الكتروني لعرض المنتجات، بل نصمم رحلة تسوق ذكية وندمجها مع خدمات تسويق المتاجر الالكترونية المبتكرة وادارة حملات التسويق الالكتروني الفعالة التي تجلب لك العملاء المستهدفين بدقة.
                </p>
                <p className="text-muted leading-relaxed mb-8">
                  سواء كنت بحاجة إلى برمجة خاصة بالكامل لمتجرك أو إعداد متجر متكامل على المنصات الجاهزة، فإن فريقنا المتخصص في تسويق متجر الكتروني ونموه يضمن لك تحقيق أهدافك التجارية بنجاح.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href={whatsappUrl} variant="gold" size="lg" target="_blank">
                    اطلب متجرك الإلكتروني الآن
                  </Button>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-light to-primary/10">
                <Image
                  src="/images/systems-dashboard.png"
                  alt="تطوير المتاجر الإلكترونية"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              ماذا تشمل خدمات المتاجر الإلكترونية؟
            </h2>
            <p className="text-muted">
              نطور متاجر مرنة وقابلة للتوسع لدعم عملك ونمو مبيعاتك بشكل متسارع.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <div className="bg-white p-8 rounded-2xl border border-border card-hover h-full flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Strengths */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              مواصفات النجاح التقني لمتجرك
            </h2>
            <p className="text-muted">
              معايير صارمة نتبعها لنضمن لعملائك تجربة تسوق سريعة ومثيرة وتتحول مبيعاتها لأرقام ملموسة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technicalStrengths.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 0.05}>
                  <div className="bg-white p-8 rounded-xl border border-border text-center h-full card-hover">
                    <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-xl bg-primary-light text-primary">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-bold text-foreground mb-3 text-lg">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="section-padding bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="relative container-custom text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            هل أنت جاهز لنقل تجارتك عبر الأونلاين؟
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
            تواصل معنا اليوم لبدء التخطيط وتطوير متجرك الإلكتروني بمميزات ذكية وتصميم فريد يحاكي تطلعاتك.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={whatsappUrl} variant="gold" size="lg" target="_blank">
              اطلب متجرك الإلكتروني الآن
            </Button>
            <Button href="/portfolio" variant="secondary" size="lg" className="border-white/20 text-white hover:bg-white/10">
              مشاهدة أعمالنا السابقة
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
