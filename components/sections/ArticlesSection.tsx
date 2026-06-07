"use client";

import { ArrowLeft, Calendar } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

const placeholderArticles = [
  {
    id: "article-1",
    title: "كيف تبني استراتيجية تسويق رقمي ناجحة في 2025",
    description:
      "دليل شامل لبناء خطة تسويق رقمي فعّالة تساعدك على الوصول لجمهورك المستهدف وزيادة مبيعاتك بأقل تكلفة.",
    category: "التسويق الرقمي",
    date: "15 مايو 2025",
    gradient: "from-primary to-primary-dark",
  },
  {
    id: "article-2",
    title: "أهمية تصميم تجربة المستخدم لنجاح متجرك الإلكتروني",
    description:
      "تعرّف على كيف يؤثر تصميم UX على معدلات التحويل وولاء العملاء وأهم المبادئ التي يجب اتباعها.",
    category: "تطوير المواقع",
    date: "8 مايو 2025",
    gradient: "from-gold/80 to-primary",
  },
  {
    id: "article-3",
    title: "5 أخطاء شائعة في إدارة حملات السوشال ميديا وكيف تتجنبها",
    description:
      "اكتشف الأخطاء التي يقع فيها أصحاب المشاريع عند إدارة حساباتهم على منصات التواصل وكيفية تجنبها.",
    category: "السوشال ميديا",
    date: "1 مايو 2025",
    gradient: "from-primary-dark to-gold/60",
  },
];

export default function ArticlesSection() {
  return (
    <section id="articles" className="section-padding bg-white">
      <div className="container-custom">
        <ScrollReveal>
          <SectionHeading
            title="مقالات وأفكار تساعدك على تطوير أعمالك"
            description="محتوى متخصص نشاركك فيه خبراتنا ونصائح عملية لتنمية أعمالك الرقمية"
            badge="المدونة"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {placeholderArticles.map((article, idx) => (
            <ScrollReveal key={article.id} delay={idx * 0.1}>
              <article className="group rounded-2xl border border-border bg-white overflow-hidden card-hover h-full flex flex-col">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${article.gradient}`}
                  />
                  {/* Category badge */}
                  <div className="absolute top-4 start-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/90 text-primary rounded-lg backdrop-blur-sm">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col p-5 lg:p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors duration-200 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                    {article.description}
                  </p>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="font-inter">{article.date}</span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.3}>
          <div className="text-center mt-10 md:mt-14">
            <Button
              variant="secondary"
              size="lg"
              href="/articles"
              icon={<ArrowLeft className="w-4 h-4 rtl-flip" />}
              iconPosition="end"
            >
              تصفح جميع المقالات
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
