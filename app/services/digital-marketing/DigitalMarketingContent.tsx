"use client";

import Image from "next/image";
import { CheckCircle2, Megaphone, Target, TrendingUp, BarChart3, Users } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const features = [
  {
    title: "إدارة الحملات الإعلانية المدفوعة",
    description: "تخطيط وإطلاق وإدارة حملاتك الإعلانية على Google Ads و Meta Ads و TikTok و Snapchat و X لتحقيق أعلى معدل تحويل.",
  },
  {
    title: "تحسين محركات البحث SEO",
    description: "تحسين ترتيب موقعك في نتائج البحث لجلب زوار مستهدفين بشكل عضوي ومستدام دون تكاليف إعلانية إضافية.",
  },
  {
    title: "إدارة حسابات التواصل الاجتماعي",
    description: "صناعة محتوى متكامل، كتابة منشورات تفاعلية، وتصميم منشورات تناسب هوية شركتك وتبني مجتمعًا متفاعلًا حول علامتك التجارية.",
  },
  {
    title: "صناعة وتسويق المحتوى",
    description: "كتابة المقالات المتوافقة مع الـ SEO، كتابة المحتوى التسويقي لصفحات الهبوط، وسيناريوهات الفيديوهات الإعلانية.",
  },
];

const channels = [
  { name: "إعلانات جوجل", desc: "ظهور فوري للباحثين عن خدماتك" },
  { name: "إعلانات سناب شات", desc: "تفاعل مباشر مع الجمهور الخليجي والسعودي" },
  { name: "إعلانات تيك توك", desc: "وصول سريع وفيديوهات تفاعلية جذابة" },
  { name: "إعلانات انستقرام وفيسبوك", desc: "بناء ثقة وعرض مرئي مبهر لمنتجاتك" },
  { name: "إعلانات منصة X", desc: "استهداف شرائح مهنية وصناع القرار" },
];

export default function DigitalMarketingContent() {
  const whatsappUrl = buildWhatsAppUrl("مرحبًا، أريد الاستفسار عن باقات التسويق الرقمي");

  return (
    <>
      {/* Hero Header */}
      <section className="relative bg-primary-dark pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="relative container-custom text-center">
          <Badge variant="gold" className="mb-6">
            خدمات التسويق
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            التسويق الرقمي وإدارة الحملات
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            نساعدك على مضاعفة مبيعاتك، زيادة الوعي بعلامتك التجارية، وجلب عملاء حقيقيين مستعدين للشراء عبر استراتيجيات تسويقية دقيقة وقابلة للقياس.
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
                <span className="text-gold font-bold text-sm block mb-2">استراتيجيات ذكية لنتائج ملموسة</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  لماذا تسند تسويق مشروعك لشركة قمة؟
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  نحن لا نطلق إعلانات عشوائية؛ بل نبدأ بتحليل دقيق للمنافسين وجمهورك المستهدف، ثم نصمم قمع مبيعات (Sales Funnel) متكامل يرافق العميل من مرحلة المعرفة وحتى اتخاذ قرار الشراء الفعلي.
                </p>
                <p className="text-muted leading-relaxed mb-8">
                  نتابع ونحلل أداء الحملات يوميًا ونقوم بتحسينها باستمرار لضمان خفض تكلفة الحصول على العميل (CAC) ورفع العائد على الاستثمار الإعلاني (ROAS).
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href={whatsappUrl} variant="gold" size="lg" target="_blank">
                    اطلب استشارة تسويقية
                  </Button>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-light to-primary/10">
                <Image
                  src="/images/marketing-campaign.png"
                  alt="إدارة الحملات الإعلانية والتسويق الرقمي"
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
              ماذا نقدم في باقات التسويق لدينا؟
            </h2>
            <p className="text-muted">
              نوفر لك حزمة خدمات تسويقية متكاملة تضمن ظهور مشروعك بالشكل اللائق وجذب الفئة المستهدفة بدقة.
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

      {/* Channels & Platforms */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              المنصات الإعلانية التي نستهدفها
            </h2>
            <p className="text-muted">
              نختار المنصات الأنسب لطبيعة مشروعك وأين يتواجد عملائك المحتملين بكثافة.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {channels.map((channel, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <div className="bg-white p-6 rounded-xl border border-border text-center h-full card-hover">
                  <h3 className="font-bold text-primary mb-2 text-base">{channel.name}</h3>
                  <p className="text-xs text-muted leading-relaxed">{channel.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="section-padding bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="relative container-custom text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            ابدأ مضاعفة مبيعاتك اليوم مع قمة للتسويق
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
            دعنا نضع خطتك الإعلانية القادمة ونحقق لك نتائج تفوق التوقعات. تواصل معنا لمعرفة العروض والخصومات المتاحة حاليًا.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={whatsappUrl} variant="gold" size="lg" target="_blank">
              احصل على استشارة تسويقية مجانية
            </Button>
            <Button href="/contact" variant="secondary" size="lg" className="border-white/20 text-white hover:bg-white/10">
              طلب تسعير حملة
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
