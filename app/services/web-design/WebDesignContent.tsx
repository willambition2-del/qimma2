"use client";

import Image from "next/image";
import { CheckCircle2, Globe, ShoppingBag, Layout, Zap, Search, ShieldCheck } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const features = [
  {
    title: "مواقع تعريفية للشركات والمؤسسات",
    description: "تصميم موقع تعريفي يعكس قيمة وأهداف مؤسستك، بتصميم فريد يجذب العملاء ويرسخ الثقة.",
  },
  {
    title: "متاجر إلكترونية متكاملة للبيع",
    description: "تأسيس وبرمجة متاجر إلكترونية تدعم سلات الشراء، طرق دفع متعددة (مدى، فيزا، أبل باي)، وربط الشحن والتخزين.",
  },
  {
    title: "صفحات هبوط تسويقية (Landing Pages)",
    description: "صفحات هبوط مخصصة لحملاتك الإعلانية، تركز على منتج أو خدمة محددة لضمان تحقيق أعلى نسب تحويل للمبيعات.",
  },
  {
    title: "تصميم متجاوب ومتوافق بالكامل",
    description: "تظهر مواقعنا بشكل مثالي وسلس على كافة أحجام الشاشات، من الهواتف الذكية إلى أجهزة الكمبيوتر المكتبية.",
  },
];

const technicalStrengths = [
  {
    icon: Zap,
    title: "سرعة وأداء فائق",
    desc: "نستخدم أحدث تقنيات الويب النظيفة والخفيفة لضمان تحميل موقعك في أجزاء من الثانية.",
  },
  {
    icon: Search,
    title: "صديق لمحركات البحث SEO",
    desc: "تتم كتابة الكود البرمجي وبناء الهيكل بالشكل الذي يسهل على عناكب جوجل أرشفة موقعك وتصدره.",
  },
  {
    icon: ShieldCheck,
    title: "أمان وحماية قصوى",
    desc: "نطبق أعلى معايير الحماية لشهادات SSL وتأمين البيانات ضد الاختراقات والهجمات السيبرانية.",
  },
];

export default function WebDesignContent() {
  const whatsappUrl = buildWhatsAppUrl("مرحبًا، أريد الاستفسار عن تفاصيل تصميم موقع/متجر إلكتروني");

  return (
    <>
      {/* Hero Header */}
      <section className="relative bg-primary-dark pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="relative container-custom text-center">
          <Badge variant="gold" className="mb-6">
            تصميم وبرمجة
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            تصميم المواقع والمتاجر الإلكترونية
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            نبني واجهتك الرقمية الأولى. مواقع سريعة، جذابة، وآمنة تزيد من مبيعاتك وتعكس حجم وقيمة عملك واحترافيته.
          </p>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Main Details Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="text-gold font-bold text-sm block mb-2">منصات رقمية متكاملة لنمو تجارتك</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  موقعك الإلكتروني هو موظف المبيعات الذي لا ينام
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  تصميم المواقع في قمة لا يقتصر على الشكل الجمالي فقط؛ نحن نهتم برحلة المستخدم وتجربة التصفح (UI/UX) لضمان سهولة الوصول للمعلومات أو إتمام الشراء بأقل عدد من الخطوات.
                </p>
                <p className="text-muted leading-relaxed mb-8">
                  ندمج موقعك مع أنظمة التحليلات (Google Analytics, Pixel) لتتبع سلوك الزوار وفهم مصادر الترافيك بدقة، مما يساعدك على اتخاذ القرارات التسويقية المبنية على بيانات حقيقية.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href={whatsappUrl} variant="gold" size="lg" target="_blank">
                    اطلب تصميم موقعك الآن
                  </Button>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-light to-primary/10">
                <Image
                  src="/images/systems-dashboard.png"
                  alt="تصميم وبرمجة المواقع والمتاجر"
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
              ماذا تشمل خدمات الويب لدينا؟
            </h2>
            <p className="text-muted">
              نصمم ونطور المواقع والمتاجر لتكون مرنة وقابلة للتطوير المستقبلي بما يتماشى مع توسع أعمالك.
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
              معايير الجودة التقنية في مواقع قمة
            </h2>
            <p className="text-muted">
              نحن نبني مواقع تدوم طويلاً، وتوفر تجربة أداء ممتازة لزوارها مع أعلى درجات الحماية والسرعة.
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
            هل أنت جاهز لنقل تجارتك للأونلاين؟
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
            سواء كنت ترغب في متجر إلكتروني متكامل أو موقع تعريفي للشركة، فريقنا قادر على بناء ذلك بدقة متناهية. تواصل معنا للحصول على مقترح فني ومالي لموقعك.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={whatsappUrl} variant="gold" size="lg" target="_blank">
              اطلب عرض سعر لمشروعك
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
