"use client";

import PageHeader from "@/components/ui/PageHeader";

import Image from "next/image";
import { CheckCircle, Users, Target, Award, Lightbulb } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { stats } from "@/data/stats";

const values = [
  {
    icon: Target,
    title: "التركيز على النتائج",
    description: "نعمل على تحقيق أهداف واضحة وقابلة للقياس في كل مشروع.",
  },
  {
    icon: Users,
    title: "شراكة حقيقية",
    description: "نتعامل مع كل عميل كشريك ونهتم بنجاح مشروعه.",
  },
  {
    icon: Award,
    title: "جودة لا تتنازل",
    description: "نلتزم بأعلى معايير الجودة في التصميم والبرمجة والتسويق.",
  },
  {
    icon: Lightbulb,
    title: "ابتكار مستمر",
    description: "نتابع أحدث التقنيات والأساليب لتقديم حلول متقدمة.",
  },
];

const teamHighlights = [
  "فريق متخصص في التسويق الرقمي وإدارة الحملات",
  "مطورون محترفون في بناء المواقع والأنظمة والتطبيقات",
  "مصممون يهتمون بالتفاصيل وتجربة المستخدم",
  "دعم فني مستمر بعد تسليم المشروع",
  "خبرة تزيد عن 5 سنوات في السوق السعودي والخليجي",
  "أكثر من 150 مشروعًا ناجحًا",
];

export default function AboutPageContent() {
  return (
    <>
      {/* Hero Banner */}
      <PageHeader badge="تعرّف علينا"
        title={<>شريكك نحو <span className="text-gold">النجاح الرقمي</span></>}
        description="فريق احترافي يساعدك على تحقيق المبيعات عبر الأونلاين. نضع بين يديك خبرات تسويقية وبرمجية متكاملة لمساعدتك على تطوير أعمالك."
        imageSrc="/images/hero/slide-1.png" />

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="gold-accent-line mb-6" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  قصتنا
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  بدأنا في قمة بهدف واضح: مساعدة الشركات والمشاريع على بناء
                  حضور رقمي قوي يحقق لهم نتائج حقيقية. نجمع بين الخبرة في
                  التسويق الرقمي والبرمجة لتقديم حلول متكاملة تناسب احتياجات
                  كل مشروع.
                </p>
                <p className="text-muted leading-relaxed mb-8">
                  على مدار أكثر من 5 سنوات، عملنا مع أكثر من 90 عميلًا
                  وأنجزنا أكثر من 150 مشروعًا في مختلف المجالات، من التسويق
                  وإدارة الحملات إلى تطوير المواقع والأنظمة وتطبيقات الموبايل.
                </p>
                <div className="flex flex-wrap gap-4">
                  {stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="bg-primary-light rounded-xl px-5 py-3 text-center"
                    >
                      <div className="font-inter text-xl font-bold text-primary">
                        {stat.value > 10 && "+"}
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-light to-primary/10">
                  <Image
                    src="/images/hero/about-team.png"
                    alt="فريق قمة للتسويق والبرمجة"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -start-4 bg-gold text-white px-6 py-3 rounded-xl shadow-lg">
                  <span className="font-inter font-bold text-lg">+5</span>
                  <span className="text-sm mr-1">سنوات خبرة</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <SectionHeading
            title="قيمنا ومبادئنا"
            description="المبادئ التي نلتزم بها في كل مشروع نعمل عليه."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-xl p-6 border border-border card-hover text-center h-full">
                  <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-xl bg-primary-light">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Highlights */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="لماذا فريق قمة؟"
              description="ما يميزنا عن غيرنا"
            />
            <div className="space-y-4">
              {teamHighlights.map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.05}>
                  <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-border card-hover">
                    <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button href="/contact" variant="primary" size="lg">
                تواصل معنا الآن
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
