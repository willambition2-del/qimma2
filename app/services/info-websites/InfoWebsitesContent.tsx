"use client";

import PageHeader from "@/components/ui/PageHeader";
import Image from "next/image";
import { CheckCircle2, Globe, Layout, Zap, Search, ShieldCheck } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const features = [
  {
    title: "مواقع تعريفية للشركات والمؤسسات",
    description: "تصميم موقع تعريفي يعكس قيمة وأهداف مؤسستك، بتصميم فريد يجذب العملاء ويرسخ الثقة والمهنية في قطاع أعمالك.",
  },
  {
    title: "صفحات هبوط تسويقية (Landing Pages)",
    description: "صفحات هبوط مخصصة لحملاتك الإعلانية، تركز على منتج أو خدمة محددة لضمان تحقيق أعلى نسب تحويل للمبيعات.",
  },
  {
    title: "تصميم متجاوب ومتوافق بالكامل",
    description: "تظهر مواقعنا بشكل مثالي وسلس على كافة أحجام الشاشات، من الهواتف الذكية والأجهزة اللوحية إلى أجهزة الكمبيوتر المكتبية.",
  },
  {
    title: "لوحات تحكم عربية مرنة وسهلة",
    description: "لوحة تحكم تمكنك من تعديل المحتوى والصور وإضافة خدمات جديدة بسهولة بالغة ودون الحاجة لأي خبرة برمجية سابقة.",
  },
];

const technicalStrengths = [
  {
    icon: Zap,
    title: "سرعة وأداء فائق",
    desc: "نستخدم أحدث تقنيات الويب النظيفة والخفيفة لضمان تحميل موقعك في أجزاء من الثانية مما يقلل من معدلات الارتداد.",
  },
  {
    icon: Search,
    title: "صديق لمحركات البحث SEO",
    desc: "تتم كتابة الكود البرمجي وبناء الهيكل بالشكل الذي يسهل على عناكب جوجل أرشفة موقعك وتصدره في محركات البحث.",
  },
  {
    icon: ShieldCheck,
    title: "أمان وحماية قصوى",
    desc: "نطبق أعلى معايير الحماية لشهادات SSL وتأمين البيانات لضمان سلامة موقعك وزوارك ضد أي ثغرات أو اختراقات.",
  },
];

export default function InfoWebsitesContent() {
  const whatsappUrl = buildWhatsAppUrl("مرحبًا، أريد الاستفسار عن تفاصيل تطوير موقع تعريفي للشركة");

  return (
    <>
      {/* Hero Header */}
      <PageHeader badge="حلول ويب"
        title="برمجة مواقع الويب التعريفية"
        description="نبني واجهتك الرقمية الأولى عبر خدمات برمجة مواقع وتطوير مواقع سريعة وجذابة تزيد من مصداقيتك وتعكس حجم وقيمة عملك واحترافيته."
        imageSrc="/images/hero/slide-2.png" />

      {/* Main Details Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="text-gold font-bold text-sm block mb-2">حضور رقمي يعكس هويتك الحقيقية</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  موقعك الإلكتروني هو عنوانك الدائم على شبكة الإنترنت
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  برمجة مواقع الويب وتطويرها في قمة لا يقتصر على المظهر الخارجي فقط؛ نحن نهتم برحلة المستخدم وتجربة التصفح (UI/UX) لضمان سهولة الوصول للمعلومات أو إرسال استفسار عبر موقع برمجيات متكامل بأقل عدد من الخطوات.
                </p>
                <p className="text-muted leading-relaxed mb-8">
                  سواء كنت تريد برمجة موقع الكتروني تعريفي أو صفحة هبوط تسويقية، يوفر لك مبرمج مواقع متخصص لدينا الأداء الأسرع والأمثل، وندمج موقعك مع أنظمة التحليلات وتتبع سلوك الزوار لخدمتك.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href={whatsappUrl} variant="gold" size="lg" target="_blank">
                    اطلب موقعك التعريفي الآن
                  </Button>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-light to-primary/10">
                <Image
                  src="/images/systems-dashboard.png"
                  alt="تطوير المواقع التعريفية"
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
              ماذا تشمل خدمات المواقع التعريفية؟
            </h2>
            <p className="text-muted">
              نصمم ونطور المواقع لتكون مرنة وقابلة للتطوير المستقبلي بما يتماشى مع توسع أعمالك.
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
            هل أنت جاهز لبناء موقعك التعريفي؟
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
            فريقنا جاهز لدراسة متطلبات مشروعك وتقديم موقع احترافي مخصص بالكامل ليناسب هوية وأهداف عملك وميزانيتك.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={whatsappUrl} variant="gold" size="lg" target="_blank">
              اطلب موقعك التعريفي الآن
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
