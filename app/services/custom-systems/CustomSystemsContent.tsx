"use client";

import PageHeader from "@/components/ui/PageHeader";

import Image from "next/image";
import { CheckCircle2, Stethoscope, GraduationCap, Users, Warehouse, CalendarCheck, Building, CreditCard, FolderKanban, Handshake, Code2, ShieldAlert } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { systemExamples } from "@/data/services";

const iconMap: { [key: string]: any } = {
  Stethoscope,
  GraduationCap,
  Users,
  Warehouse,
  CalendarCheck,
  Building,
  CreditCard,
  FolderKanban,
  Handshake,
};

const advantages = [
  {
    title: "مبني خصيصًا لدورة عملك",
    description: "لا تحتاج لتغيير أسلوب عملك ليناسب البرنامج؛ نحن نصمم ونبني البرنامج ليتطابق بدقة مع دورة العمل الفعلية في شركتك.",
  },
  {
    title: "أمان كامل وحفظ للبيانات",
    description: "أنظمتنا تُبنى وتُستضاف بأعلى معايير الأمان والتشفير، مع إمكانية أخذ نسخ احتياطية دورية وتلقائية لحماية بياناتك.",
  },
  {
    title: "لوحات تحكم متقدمة وتقارير لحظية",
    description: "احصل على رؤية شاملة لأداء مؤسستك عبر رسوم بيانية ومؤشرات أداء تفاعلية تساعدك على اتخاذ القرارات الصحيحة فورًا.",
  },
  {
    title: "صيانة ودعم فني مستمر",
    description: "فريقنا التقني متواجد دائمًا لحل أي مشكلات تقنية وتحديث النظام ليتواكب مع الاحتياجات المتطورة لشركتك.",
  },
];

export default function CustomSystemsContent() {
  const whatsappUrl = buildWhatsAppUrl("مرحبًا، أريد طلب استشارة لبرمجة نظام مخصص لشركتي");

  return (
    <>
      {/* Hero Header */}
      <PageHeader badge="أنظمة مخصصة"
        title="برمجة وتطوير الأنظمة المخصصة"
        description="أنظمة برمجية مصممة خصيصًا لإدارة وتسهيل أعمالك، من أنظمة ERP و CRM إلى لوحات التحكم وإدارة الموارد والمخازن."
        imageSrc="/images/hero/slide-2.png" />

      {/* Main Details Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="text-gold font-bold text-sm block mb-2">أتمتة ذكية لزيادة إنتاجية شركتك</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  لماذا تحتاج إلى نظام برمجي مخصص؟
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  البرامج الجاهزة قد لا تغطي كافة متطلبات شركتك وتجبرك على التنازل عن بعض تفاصيل دورتك التشغيلية. مع حلول الأنظمة المخصصة من قمة، نصمم لك حلولاً برمجية تغطي 100% من احتياجاتك.
                </p>
                <p className="text-muted leading-relaxed mb-8">
                  سواء كنت بحاجة لربط الفروع، إدارة المستودعات، تنظيم شؤون الموظفين، أو متابعة طلبات العملاء؛ نحن نبني نظامك بشكل مرن، آمن، وقابل للتوسع المستقبلي بسهولة.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href={whatsappUrl} variant="gold" size="lg" target="_blank">
                    اطلب استشارة تقنية مجانية
                  </Button>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-light to-primary/10">
                <Image
                  src="/images/systems-dashboard.png"
                  alt="تطوير الأنظمة البرمجية المخصصة"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* System Examples Grid */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              أمثلة على الأنظمة التي نطورها
            </h2>
            <p className="text-muted">
              نقوم بأتمتة جميع عملياتك التشغيلية لتسهيل الإدارة ورفع كفاءة موظفيك.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systemExamples.map((system, idx) => {
              const IconComponent = iconMap[system.icon] || Code2;
              return (
                <ScrollReveal key={idx} delay={idx * 0.05}>
                  <div className="bg-white p-6 rounded-xl border border-border flex items-center gap-4 card-hover">
                    <div className="w-12 h-12 rounded-lg bg-primary-light text-primary flex items-center justify-center shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-foreground text-sm md:text-base">{system.title}</h3>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              مميزات حلولنا البرمجية المخصصة
            </h2>
            <p className="text-muted">
              نبني أنظمة سحابية سريعة، آمنة ومريحة للمستخدم لتسهل عليك إدارة جميع جوانب مشروعك.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((adv, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <div className="bg-white p-8 rounded-2xl border border-border card-hover h-full flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{adv.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{adv.description}</p>
                  </div>
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
            دعنا نبني النظام المثالي لعملياتك التشغيلية
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
            تواصل مع خبرائنا التقنيين وسيقومون بتحليل دورتك التشغيلية واقتراح أفضل هيكل برمجي لنظامك القادم.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={whatsappUrl} variant="gold" size="lg" target="_blank">
              اطلب استشارة برمجية مجانية
            </Button>
            <Button href="/contact" variant="secondary" size="lg" className="border-white/20 text-white hover:bg-white/10">
              تواصل معنا لتحديد المتطلبات
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
