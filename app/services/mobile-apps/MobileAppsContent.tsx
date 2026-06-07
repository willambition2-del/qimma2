"use client";

import PageHeader from "@/components/ui/PageHeader";

import Image from "next/image";
import { CheckCircle2, Truck, ShoppingBag, Calendar, BookOpen, Heart, Briefcase, MessageCircle, Home, Smartphone, Apple, Play } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { mobileAppExamples } from "@/data/services";

const iconMap: { [key: string]: any } = {
  Truck,
  ShoppingBag,
  Calendar,
  BookOpen,
  Heart,
  Briefcase,
  MessageCircle,
  Home,
};

const appFeatures = [
  {
    title: "تطوير أصيل لنظامي iOS و Android",
    description: "نبرمج تطبيقات الهواتف الذكية بلغات برمجية حديثة تضمن سرعة أداء فائق وتكامل كامل مع مميزات الجهاز كالكاميرا والإشعارات والموقع الجغرافي.",
  },
  {
    title: "تصميم واجهات UI/UX عصرية وجذابة",
    description: "نصمم واجهات استخدام مريحة، متوافقة بالكامل مع أدلة تصميم أبل وجوجل، لضمان بقاء المستخدم وسهولة الاستخدام.",
  },
  {
    title: "نظام إشعارات لحظية متكامل (Push Notifications)",
    description: "تفاعل مع عملائك باستمرار عبر إرسال إشعارات فورية بالعروض والخصومات وحالة الطلبات مباشرة لهواتفهم.",
  },
  {
    title: "رفع التطبيق على المتاجر الرسمية ودعم فني",
    description: "نهيئ التطبيقات للنشر ونرافقك خطوة بخطوة في عملية رفع التطبيقات على App Store و Google Play مع صيانة مستمرة.",
  },
];

export default function MobileAppsContent() {
  const whatsappUrl = buildWhatsAppUrl("مرحبًا، أرغب في الاستفسار عن باقة برمجة تطبيقات الموبايل");

  return (
    <>
      {/* Hero Header */}
      <PageHeader badge="تطبيقات ذكية"
        title="تطوير تطبيقات الموبايل"
        description="اجعل فكرتك في جيب عملائك دائمًا. نطور تطبيقات موبايل لنظامي iOS و Android بأعلى معايير السرعة، الأمان، والجمال البصري."
        imageSrc="/images/hero/slide-3.png" />

      {/* Main Details Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="text-gold font-bold text-sm block mb-2">تطبيق جوال يعبر عن هوية مشروعك</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  تطبيقات تمنح مشروعك تجربة أكثر قربًا من عملائك
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  تطوير تطبيقات الجوال في قمة يبدأ من فهم دقيق لسلوك عملائك. نحن نركز على تصميم تجربة تصفح تجعل المستخدم ينجز مهمته (سواء كانت شراء، حجز، أو تصفح) بأقل عدد من النقرات وبسرعة استجابة مذهلة.
                </p>
                <p className="text-muted leading-relaxed mb-8">
                  ندعم بناء تطبيقات التجارة الإلكترونية، تطبيقات التوصيل المتكاملة مع خرائط جوجل، تطبيقات مقدمي الخدمات، منصات الحجز العقاري أو الطبي، وأنظمة الأعمال المخصصة.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href={whatsappUrl} variant="gold" size="lg" target="_blank">
                    تحدث مع مستشار التطبيقات
                  </Button>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-light to-primary/10">
                <Image
                  src="/images/mobile-apps-mockup.png"
                  alt="تطوير تطبيقات الهواتف الذكية"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* App Types Grid */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              أنواع التطبيقات التي نبنيها
            </h2>
            <p className="text-muted">
              نطور تطبيقات مخصصة لمختلف المجالات بأحدث التقنيات وبأعلى كفاءة تشغيلية.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mobileAppExamples.map((app, idx) => {
              const IconComponent = iconMap[app.icon] || Smartphone;
              return (
                <ScrollReveal key={idx} delay={idx * 0.05}>
                  <div className="bg-white p-6 rounded-xl border border-border flex flex-col items-center text-center gap-4 card-hover">
                    <div className="w-12 h-12 rounded-full bg-primary-light text-primary flex items-center justify-center shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-foreground text-sm md:text-base">{app.title}</h3>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              مميزات تطبيقات قمة
            </h2>
            <p className="text-muted">
              نحن نلتزم ببناء تطبيقات جوال متقدمة تزيد من ولاء عملائك وتضمن سهولة الاستخدام.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {appFeatures.map((feature, idx) => (
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

      {/* Platform Badges */}
      <section className="py-12 bg-primary text-white">
        <div className="container-custom flex flex-wrap justify-center items-center gap-10">
          <div className="flex items-center gap-3">
            <Apple className="w-8 h-8 text-gold" />
            <div>
              <span className="text-xs text-white/50 block">متاح على</span>
              <span className="font-bold">Apple App Store</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Play className="w-8 h-8 text-gold" />
            <div>
              <span className="text-xs text-white/50 block">متاح على</span>
              <span className="font-bold">Google Play Store</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="section-padding bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="relative container-custom text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            ابدأ رحلة تطوير تطبيقك الآن مع قمة
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
            تواصل معنا وشاركنا فكرتك، وسنقوم بتحليل المتطلبات وتجهيز خطة العمل الفنية والتصميمية لتطبيقك.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={whatsappUrl} variant="gold" size="lg" target="_blank">
              اطلب دراسة جدوى تطبيقك مجانًا
            </Button>
            <Button href="/contact" variant="secondary" size="lg" className="border-white/20 text-white hover:bg-white/10">
              تواصل معنا الآن
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
