"use client";

import PageHeader from "@/components/ui/PageHeader";

import Image from "next/image";
import { CheckCircle2, Palette, Sparkles, Image as ImageIcon, Video, BookOpen, Heart } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const brandFeatures = [
  {
    title: "تصميم الشعارات الاحترافية",
    description: "نبتكر شعارات ذكية وفريدة تعبر عن طبيعة عملك ورؤيتك، وتثبت في أذهان عملائك وتصلح للاستخدام على جميع المنصات والمطبوعات.",
  },
  {
    title: "دليل الهوية البصرية المتكامل",
    description: "نصمم دليلاً شاملاً يحدد لوحة الألوان، الخطوط الرسمية، نماذج المطبوعات (البطاقات، الأظرف، الورق الرسمي) لتوحيد مظهر علامتك التجارية.",
  },
  {
    title: "تصميم محتوى السوشال ميديا",
    description: "نصمم منشورات جذابة وتفاعلية لحساباتك على السوشال ميديا (انستقرام، تويتر، سناب شات) تناسب أحدث أبعاد وتوجهات التصميم.",
  },
  {
    title: "موشن جرافيك وفيديوهات إعلانية",
    description: "ننتج فيديوهات موشن جرافيك إبداعية مع سيناريو قوي وتعليق صوتي مميز، لشرح خدماتك أو الترويج لمنتجاتك بطريقة مشوقة وسريعة.",
  },
];

const designProcess = [
  { step: "01", title: "دراسة الفكرة والمنافسين", desc: "نحلل السوق وعلامات المنافسين لتجنب التكرار وتحديد النمط الأنسب لجمهورك." },
  { step: "02", title: "رسم المسودات والسكيتشات", desc: "نبدأ برسم أفكار مختلفة يدويًا لاستكشاف الخطوط والكتل والرموز المناسبة." },
  { step: "03", title: "الرسم الرقمي والألوان", desc: "نقوم بنقل الأفكار للبرامج الرقمية وتجربة الألوان والتفاصيل الدقيقة." },
  { step: "04", title: "تقديم العروض والتسليم", desc: "نعرض عليك نماذج الشعار بأسلوب محاكاة (Mockup)، ثم نسلم الملفات بجميع الصيغ المفتوحة." },
];

export default function BrandingContent() {
  const whatsappUrl = buildWhatsAppUrl("مرحبًا، أريد الاستفسار عن باقات تصميم الهوية البصرية");

  return (
    <>
      {/* Hero Header */}
      <PageHeader badge="الهوية والمحتوى"
        title="تصميم الهوية البصرية والمحتوى"
        description="نبني شخصية لعلامتك التجارية. تصميم شعارات وهويات بصرية كاملة وصناعة محتوى إعلاني مميز يجعل مشروعك يبرز بين المنافسين."
        imageSrc="/images/hero/slide-3.png" />

      {/* Main Details Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="text-gold font-bold text-sm block mb-2">انطباع أول يدوم للأبد</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  تصميم يعبر عن قيم علامتك التجارية
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  الهوية البصرية ليست مجرد شعار جميل؛ بل هي اللغة المرئية التي تتحدث بها مع عملائك. من خلال الألوان المناسبة، الرموز الدقيقة، والخطوط المتناسقة، نساعدك على خلق صورة ذهنية تعكس الثقة والمهنية العالية لمشروعك.
                </p>
                <p className="text-muted leading-relaxed mb-8">
                  سواء كنت تطلق علامة تجارية جديدة من الصفر، أو ترغب في إعادة تصميم وتحديث (Rebranding) لهويتك الحالية، فريقنا يقدم لك أفضل الحلول الإبداعية والفنية.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href={whatsappUrl} variant="gold" size="lg" target="_blank">
                    اطلب تصميم هويتك الآن
                  </Button>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-light to-primary/10">
                <Image
                  src="/images/about-team.png"
                  alt="تصميم الهوية البصرية وصناعة المحتوى"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              ماذا نقدم في خدمات الهوية الإبداعية؟
            </h2>
            <p className="text-muted">
              نصمم ونصنع أصولك الإعلانية برؤية فنية تتناسب مع طبيعة السوق والمستهلك.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brandFeatures.map((feature, idx) => (
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

      {/* Process */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              كيف نعمل على تصميم هويتك؟
            </h2>
            <p className="text-muted">
              عملية منظمة ومجربة تضمن الخروج بتصميم مذهل يعبر عن قيم علامتك بدقة.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {designProcess.map((step, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <div className="bg-white p-6 rounded-xl border border-border text-center h-full card-hover relative pt-10">
                  <span className="absolute top-4 start-4 text-3xl font-inter font-bold text-gold/20">{step.step}</span>
                  <h3 className="font-bold text-foreground mb-2 text-base md:text-lg">{step.title}</h3>
                  <p className="text-xs text-muted leading-relaxed">{step.desc}</p>
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
            امنح مشروعك الوجه الذي يستحقه اليوم
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
            تواصل معنا اليوم لبدء تصميم شعار شركتك أو هوية بصرية كاملة، واحصل على مميزات إضافية مع الباقة الكاملة.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={whatsappUrl} variant="gold" size="lg" target="_blank">
              اطلب تصميم الهوية البصرية
            </Button>
            <Button href="/portfolio" variant="secondary" size="lg" className="border-white/20 text-white hover:bg-white/10">
              استكشف هويات بصرية نفذناها
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
