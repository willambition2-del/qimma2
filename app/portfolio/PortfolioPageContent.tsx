"use client";

import PageHeader from "@/components/ui/PageHeader";

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
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems = activeCategory === "all"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Hero Header */}
      <PageHeader badge="معرض أعمال قمة"
        title={<>مشاريع نفتخر <span className="text-gold">بإنجازها</span></>}
        description="استعرض نماذج من أعمالنا السابقة في مجالات تطوير المواقع التعريفية، المتاجر الإلكترونية، الأنظمة البرمجية، وتطبيقات الهواتف الذكية."
        imageSrc="/images/hero/slide-2.png" />

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
                  <div 
                    className="bg-white rounded-2xl border border-border overflow-hidden card-hover transition-all duration-300 group hover:shadow-lg h-full flex flex-col cursor-pointer"
                    onClick={() => setSelectedItem(item)}
                  >
                    {/* Visual Container */}
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-primary-light via-white to-primary/5 overflow-hidden flex items-center justify-center p-2">
                      {item.url ? (
                        /* Miniature Smartphone Mockup for Interactive Websites */
                        <div className="relative w-[110px] aspect-[9/19] rounded-[18px] border-[4px] border-neutral-900 bg-neutral-950 overflow-hidden shadow-md transform scale-[1.05] transition-transform duration-500 group-hover:scale-[1.1]">
                          {/* Notch */}
                          <div className="absolute top-0 inset-x-0 flex justify-center z-30">
                            <div className="w-8 h-1.5 bg-neutral-900 rounded-b-md" />
                          </div>
                          {/* Screen */}
                          <div className="absolute inset-0 pt-3 pb-1 bg-white overflow-hidden">
                            <div className="w-full h-full relative overflow-hidden" style={{ direction: "ltr" }}>
                              <iframe
                                src={item.url}
                                title={item.title}
                                className="absolute left-0 top-0 border-0 pointer-events-none select-none"
                                style={{
                                  width: "375px",
                                  height: "733px",
                                  transform: "scale(0.27)",
                                  transformOrigin: "top left",
                                }}
                                sandbox="allow-scripts allow-same-origin"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        </div>
                      ) : item.image && !item.image.includes("placeholder") ? (
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full relative p-4 flex items-center justify-center text-primary/30 text-lg font-bold">
                          {/* Placeholder graphic simulating app screen or web UI */}
                          <div className="absolute inset-4 rounded-xl bg-gradient-to-br from-primary-dark/5 to-primary/20 border border-primary/5 flex flex-col justify-between p-6">
                            <span className="text-xs uppercase tracking-wider text-primary/40">Qimma Portfolio Project</span>
                            <span className="text-2xl font-black text-primary/20">قمة</span>
                          </div>
                        </div>
                      )}
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                        <span className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-md">
                          <ExternalLink className="w-5 h-5" />
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-xs text-muted leading-relaxed mb-4">
                          {item.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {item.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="text-[10px] font-bold bg-primary-light text-primary px-2 py-0.5 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
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

      {/* Image Preview / Details Modal Lightbox */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col md:flex-row relative shadow-2xl border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 bg-white/80 hover:bg-white text-foreground hover:text-primary rounded-full p-2.5 z-10 transition-colors shadow-md border border-border/50 cursor-pointer"
              onClick={() => setSelectedItem(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image / Live Preview Panel (Uncropped View) */}
            <div className="flex-grow bg-black/5 flex items-center justify-center p-6 min-h-[350px] md:min-h-[550px]">
              {selectedItem.url ? (
                /* Interactive Phone Preview inside the modal */
                <div className="relative w-[240px] aspect-[9/19] rounded-[36px] border-[10px] border-neutral-900 bg-neutral-950 overflow-hidden shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-0 inset-x-0 flex justify-center z-30">
                    <div className="w-20 h-4 bg-neutral-900 rounded-b-xl" />
                  </div>
                  {/* Screen */}
                  <div className="absolute inset-0 pt-10 pb-4 bg-white overflow-hidden">
                    <iframe
                      src={selectedItem.url}
                      title={selectedItem.title}
                      className="w-full h-full border-0 pointer-events-auto"
                      sandbox="allow-scripts allow-same-origin allow-popups"
                      loading="lazy"
                    />
                  </div>
                  {/* Home indicator */}
                  <div className="absolute bottom-1.5 inset-x-0 flex justify-center z-30 pointer-events-none">
                    <div className="w-16 h-1 bg-neutral-900 rounded-full" />
                  </div>
                </div>
              ) : selectedItem.image && !selectedItem.image.includes("placeholder") ? (
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title} 
                  className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-sm"
                />
              ) : (
                <div className="aspect-[4/3] w-full max-w-[400px] rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white text-2xl font-bold p-10 text-center">
                  {selectedItem.title}
                </div>
              )}
            </div>

            {/* Details Panel */}
            <div className="w-full md:w-80 p-6 md:p-8 flex flex-col justify-between bg-surface border-t md:border-t-0 md:border-r border-border">
              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {selectedItem.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] font-bold bg-primary-light text-primary px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  {selectedItem.title}
                </h3>
                <p className="text-xs md:text-sm text-muted leading-relaxed mb-6">
                  {selectedItem.description}
                </p>
              </div>

              {selectedItem.url ? (
                <div className="mt-4 w-full">
                  <Button
                    variant="primary"
                    size="sm"
                    href={selectedItem.url}
                    target="_blank"
                    fullWidth={true}
                    icon={<ExternalLink className="w-3.5 h-3.5" />}
                    iconPosition="end"
                  >
                    زيارة الموقع المباشر
                  </Button>
                </div>
              ) : selectedItem.category === 'marketing' ? (
                <div className="bg-primary/5 border border-primary/10 rounded-xl p-4 mt-4">
                  <span className="text-[11px] font-bold text-primary block mb-1">أعمال التسويق الرقمي</span>
                  <p className="text-[10px] text-muted leading-relaxed">
                    تم تصميم وتطوير هذه الحملة الإعلانية والمواد البصرية بالكامل لتلائم معايير الهوية البصرية للعلامة التجارية وتضمن تحقيق أعلى معدلات وصول وتفاعل.
                  </p>
                </div>
              ) : (
                <div className="bg-gold/5 border border-gold/10 rounded-xl p-4 mt-4">
                  <span className="text-[11px] font-bold text-gold block mb-1">حلول برمجية متكاملة</span>
                  <p className="text-[10px] text-muted leading-relaxed">
                    تم التخطيط والتطوير البرمجي بواسطة فريق البرمجة والأنظمة المخصصة لشركة قمة وفقاً لأحدث التقنيات وأعلى معايير الأمان والأداء.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
