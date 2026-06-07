"use client";

import Image from "next/image";
import { CheckCircle2, Lightbulb, TrendingUp, Search, ShieldCheck, Compass, HelpCircle } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const consultingAreas = [
  {
    title: "استشارات التحول الرقمي والأتمتة",
    description: "نساعدك على نقل عملياتك التشغيلية الورقية أو التقليدية إلى بيئة رقمية سحابية متكاملة لزيادة السرعة وتقليل التكلفة.",
  },
  {
    title: "تحليل السوق والمنافسين رقميًا",
    description: "ندرس نقاط القوة والضعف لمنافسيك في الفضاء الرقمي، ونحدد لك القنوات والفرص الأقل كلفة والأكثر عائدًا لمشروعك.",
  },
  {
    title: "استراتيجيات النمو وزيادة المبيعات",
    description: "تصميم خطط تسويقية مبنية على الأرقام وتطوير قنوات مبيعات إلكترونية تساعد مشروعك على التوسع وجلب عملاء جدد بشكل مستدام.",
  },
  {
    title: "اختيار وتوجيه الحلول التقنية",
    description: "نساعدك على اختيار الأنظمة والبرمجيات والمخدمات الأنسب لحجم ونوع عملك، وتجنب الهدر المالي في تقنيات قد لا تحتاجها.",
  },
];

const faqConsulting = [
  { q: "ماذا أستفيد من الجلسة الاستشارية؟", a: "في الجلسة نقوم بمناقشة التحديات التي تواجه مشروعك حاليًا، ونحلل قنواتك الرقمية، ونقترح عليك حلولاً برمجية أو تسويقية فورية ذات فعالية عالية." },
  { q: "هل الاستشارات تناسب المشاريع الناشئة؟", a: "نعم، الاستشارة المبكرة للمشروع توفر عليك آلاف الريالات المهدرة في تجربة طرق إعلانية أو منصات برمجية خاطئة وغير مناسبة لمجالك." },
];

export default function ConsultingContent() {
  const whatsappUrl = buildWhatsAppUrl("مرحبًا، أرغب في حجز جلسة استشارية رقمية لمشروعي");

  return (
    <>
      {/* Hero Header */}
      <section className="relative bg-primary-dark pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="relative container-custom text-center">
          <Badge variant="gold" className="mb-6">
            استشارات رقمية
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            الاستشارات الرقمية والتقنية
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            نوجهك نحو الطريق الصحيح. نساعدك على اتخاذ القرارات الذكية وتحديد التقنيات واستراتيجيات التسويق الأنسب لنمو مشروعك بأقل تكاليف وأعلى كفاءة.
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
                <span className="text-gold font-bold text-sm block mb-2">رؤية واضحة في عالم رقمي متسارع</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  تجنب الأخطاء المكلفة ووفر جهدك ووقتك
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  التحول الرقمي وتأسيس العمليات التقنية والتسويقية قد يكون معقدًا ومكلفًا إذا لم يبدأ على أساس صحيح. في قمة، نقوم بدور المستشار الأمين الذي يقدم لك الرأي التقني والتسويقي السديد بناءً على خبرة عملية ممتدة لسنوات في السوق السعودي والخليجي.
                </p>
                <p className="text-muted leading-relaxed mb-8">
                  ندرس معك تحديات مشروعك، ونقترح الحلول، ونساعدك على تتبع مؤشرات القياس (KPIs) لضمان تحقيق أهداف نمو مشروعك.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href={whatsappUrl} variant="gold" size="lg" target="_blank">
                    احجز جلسة استشارية مجانية
                  </Button>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-light to-primary/10">
                <Image
                  src="/images/marketing-campaign.png"
                  alt="الاستشارات الرقمية والتقنية"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Areas */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              مجالات استشاراتنا
            </h2>
            <p className="text-muted">
              نغطي كافة الجوانب التسويقية والتقنية لتأسيس وتوسيع المشاريع رقميًا.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {consultingAreas.map((area, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <div className="bg-white p-8 rounded-2xl border border-border card-hover h-full flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{area.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{area.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs on Consulting */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                الأسئلة الشائعة حول الاستشارات
              </h2>
            </div>
            <div className="space-y-6">
              {faqConsulting.map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.05}>
                  <div className="bg-white p-6 rounded-xl border border-border">
                    <h3 className="font-bold text-primary mb-3 flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-gold shrink-0" />
                      {item.q}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed pr-7">{item.a}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="section-padding bg-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="relative container-custom text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            خذ الخطوة الأولى والذكية لمشروعك اليوم
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
            جلسة واحدة مدتها 30 دقيقة كفيلة بأن تفتح لك آفاقًا جديدة وتوفر عليك الكثير من الموارد الضائعة. احجز موعدك الآن.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={whatsappUrl} variant="gold" size="lg" target="_blank">
              احجز جلسة استشارية مجانًا
            </Button>
            <Button href="/contact" variant="secondary" size="lg" className="border-white/20 text-white hover:bg-white/10">
              تواصل معنا
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
