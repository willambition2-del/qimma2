"use client";

import { useState } from "react";
import Image from "next/image";
import { FileDown, ArrowLeft, ExternalLink } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { portfolioCategories, portfolioItems, pdfDownloads } from "@/data/portfolio";

export default function PortfolioPageContent() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Hero Header */}
      <section className="relative bg-primary-dark pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="relative container-custom text-center">
          <Badge variant="gold" className="mb-6">
            معرض أعمال قمة
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            مشاريع نفتخر <span className="text-gold">بإنجازها</span>
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            استعرض نماذج من أعمالنا السابقة في مجالات البرمجة، تطوير الأنظمة، تطبيقات الهواتف الذكية والتسويق الرقمي.
          </p>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Filter Tabs */}
      <section className="pt-16 pb-8">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {portfolioCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-primary text-white shadow-md shadow-primary/10"
                    : "bg-surface hover:bg-primary-light text-muted hover:text-primary border border-border"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-20">
        <div className="container-custom">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20 text-muted">لا توجد مشاريع في هذا القسم حاليًا.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, idx) => (
                <ScrollReveal key={item.id} delay={idx * 0.05}>
                  <div className="bg-white rounded-2xl border border-border overflow-hidden card-hover transition-all duration-300 group hover:shadow-lg h-full flex flex-col">
                    {/* Visual Container */}
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-primary-light via-white to-primary/5 overflow-hidden">
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                        <span className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-md">
                          <ExternalLink className="w-5 h-5" />
                        </span>
                      </div>
                      <div className="w-full h-full relative p-4 flex items-center justify-center text-primary/30 text-lg font-bold">
                        {/* Placeholder graphic simulating app screen or web UI */}
                        <div className="absolute inset-4 rounded-xl bg-gradient-to-br from-primary-dark/5 to-primary/20 border border-primary/5 flex flex-col justify-between p-6">
                          <span className="text-xs uppercase tracking-wider text-primary/40">Qimma Portfolio Project</span>
                          <span className="text-2xl font-black text-primary/20">قمة</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {item.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="text-[10px] font-bold bg-primary-light text-primary px-2 py-0.5 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted leading-relaxed mb-4 flex-grow">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* PDF Download Cards Section */}
      <section className="section-padding bg-surface border-t border-border">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="كتالوجات وملفات الأعمال"
              description="حمل ملفات الكتالوجات المخصصة لأعمالنا بالتفصيل للاطلاع المباشر غير المتصل بالإنترنت."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              {pdfDownloads.map((pdf, idx) => (
                <ScrollReveal key={pdf.id} delay={idx * 0.1}>
                  <a
                    href={pdf.href}
                    download
                    className="flex items-center gap-5 bg-white p-6 rounded-2xl border border-border card-hover hover:border-gold group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gold/10 text-gold flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                      <FileDown className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {pdf.title}
                      </h4>
                      <p className="text-xs text-muted mt-1 leading-relaxed">
                        {pdf.description}
                      </p>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
