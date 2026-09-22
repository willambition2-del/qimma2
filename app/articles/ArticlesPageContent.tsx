"use client";

import PageHeader from "@/components/ui/PageHeader";

import { useState } from "react";
import { Calendar, Search, ArrowLeft } from "lucide-react";
import Badge from "@/components/ui/Badge";
import ScrollReveal from "@/components/ui/ScrollReveal";

const articles = [
  {
    id: "article-1",
    title: "كيف تبني استراتيجية تسويق رقمي ناجحة في 2025",
    description: "دليل شامل لبناء خطة تسويق رقمي فعّالة تساعدك على الوصول لجمهورك المستهدف وزيادة مبيعاتك بأقل تكلفة.",
    category: "marketing",
    categoryLabel: "التسويق الرقمي",
    date: "15 مايو 2025",
    gradient: "from-primary to-primary-dark",
  },
  {
    id: "article-2",
    title: "أهمية تصميم تجربة المستخدم لنجاح متجرك الإلكتروني",
    description: "تعرّف على كيف يؤثر تصميم UX على معدلات التحويل وولاء العملاء وأهم المبادئ التي يجب اتباعها.",
    category: "programming",
    categoryLabel: "تطوير المواقع",
    date: "8 مايو 2025",
    gradient: "from-gold/80 to-primary",
  },
  {
    id: "article-3",
    title: "5 أخطاء شائعة في إدارة حملات السوشال ميديا وكيف تتجنبها",
    description: "اكتشف الأخطاء التي يقع فيها أصحاب المشاريع عند إدارة حساباتهم على منصات التواصل وكيفية تجنبها.",
    category: "marketing",
    categoryLabel: "السوشال ميديا",
    date: "1 مايو 2025",
    gradient: "from-primary-dark to-gold/60",
  },
  {
    id: "article-4",
    title: "كيف تختار لغة البرمجة أو إطار العمل المناسب لموقعك؟",
    description: "مقارنة شاملة بين أشهر أطر العمل واللغات البرمجية لمساعدتك على اتخاذ القرار المناسب لمشروعك.",
    category: "programming",
    categoryLabel: "البرمجة والتطوير",
    date: "22 أبريل 2025",
    gradient: "from-primary to-gold",
  },
  {
    id: "article-5",
    title: "دليل تصدر نتائج البحث في جوجل للشركات المحلية SEO",
    description: "نصائح عملية وعلمية لتهيئة موقع شركتك لمحركات البحث المحلية وجذب العملاء القريبين منك مجانًا.",
    category: "seo",
    categoryLabel: "تحسين محركات البحث",
    date: "14 أبريل 2025",
    gradient: "from-gold to-primary-dark",
  },
  {
    id: "article-6",
    title: "أهمية تطوير نظام مخصص ERP لإدارة الموارد في الشركات",
    description: "لماذا تفضل الشركات المتوسطة والكبيرة الأنظمة البرمجية المخصصة على البرامج السحابية الجاهزة؟",
    category: "programming",
    categoryLabel: "الأنظمة المخصصة",
    date: "5 أبريل 2025",
    gradient: "from-primary-dark via-primary to-gold/40",
  },
];

const categories = [
  { id: "all", label: "الكل" },
  { id: "marketing", label: "التسويق الرقمي" },
  { id: "programming", label: "البرمجة والأنظمة" },
  { id: "seo", label: "محركات البحث SEO" },
];

export default function ArticlesPageContent() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = activeCategory === "all" || article.category === activeCategory;
    const matchesSearch =
      article.title.includes(searchQuery) || article.description.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero Header */}
      <PageHeader badge="مقالات وأفكار"
        title="المدونة المعرفية"
        description="نشاركك خبراتنا في البرمجة والتسويق لمساعدتك على أخذ قرارات أفضل وتنمية تجارتك بذكاء."
        imageSrc="/images/hero/slide-2.png" />

      {/* Filters & Search controls */}
      <section className="pt-16 pb-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center max-w-5xl mx-auto">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "bg-primary text-white shadow-md shadow-primary/10"
                      : "bg-surface hover:bg-primary-light text-muted hover:text-primary border border-border"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="ابحث عن مقال..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full border border-border bg-white text-sm focus:border-primary focus:outline-none transition-colors"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-20">
        <div className="container-custom">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-20 text-muted">لا توجد مقالات تطابق بحثك حاليًا.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, idx) => (
                <ScrollReveal key={article.id} delay={idx * 0.05}>
                  <article className="group rounded-2xl border border-border bg-white overflow-hidden card-hover h-full flex flex-col">
                    {/* Visual Card Banner */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient}`} />
                      <div className="absolute top-4 start-4">
                        <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/95 text-primary rounded-lg backdrop-blur-sm shadow-sm">
                          {article.categoryLabel}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col p-6">
                      <h3 className="text-lg font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors duration-200 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                        {article.description}
                      </p>

                      {/* Footer Info */}
                      <div className="flex items-center gap-2 text-xs text-muted mt-auto pt-4 border-t border-border/60">
                        <Calendar className="w-3.5 h-3.5" />
                        <span className="font-inter">{article.date}</span>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
