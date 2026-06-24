"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  portfolioCategories,
  portfolioItems,
} from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { ExternalLink } from "lucide-react";

const gradients = [
  "from-primary to-primary-dark",
  "from-gold to-primary",
  "from-primary-dark to-primary",
  "from-primary to-gold/80",
  "from-primary-dark to-gold/60",
  "from-gold/80 to-primary-dark",
  "from-primary to-primary-dark/80",
  "from-primary-dark/80 to-gold",
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems = (() => {
    if (activeCategory === "all") {
      const marketing = portfolioItems.find((item) => item.category === "marketing");
      const system = portfolioItems.find(
        (item) => item.category === "systems"
      );
      const webOrStore = portfolioItems.find(
        (item) => item.category === "websites" || item.category === "stores"
      );

      const items: typeof portfolioItems = [];
      if (marketing) items.push(marketing);
      if (system) items.push(system);
      if (webOrStore) items.push(webOrStore);

      if (items.length < 3) {
        const remaining = portfolioItems.filter((item) => !items.includes(item));
        return [...items, ...remaining].slice(0, 3);
      }
      return items;
    } else {
      return portfolioItems
        .filter((item) => item.category === activeCategory)
        .slice(0, 3);
    }
  })();

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-custom">
        <ScrollReveal>
          <SectionHeading
            title="نماذج من أعمالنا"
            description="مشاريع حقيقية نفذناها بمعايير عالية تعكس قدراتنا في التسويق الرقمي والتطوير البرمجي"
            badge="أعمالنا"
          />
        </ScrollReveal>

        {/* Category Filters */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-14">
            {portfolioCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-5 py-2.5 text-sm font-semibold rounded-xl transition-colors duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? "text-white"
                    : "text-muted hover:text-primary hover:bg-primary-light"
                }`}
              >
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="portfolio-tab"
                    className="absolute inset-0 bg-primary rounded-xl"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="group"
              >
                <div 
                  className="rounded-2xl border border-border bg-white overflow-hidden card-hover cursor-pointer h-full flex flex-col"
                  onClick={() => setSelectedItem(item)}
                >
                  {/* Image / Mockup Container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted flex items-center justify-center p-2">
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
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${
                          gradients[idx % gradients.length]
                        }`}
                      />
                    )}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/40 transition-colors duration-300 flex items-center justify-center z-10">
                      <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                        عرض التفاصيل
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 lg:p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                        {item.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs font-medium px-2.5 py-1 rounded-lg bg-primary-light text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

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

        {/* View More Button */}
        <ScrollReveal delay={0.15}>
          <div className="flex justify-center mt-12">
            <Button size="lg" variant="secondary" href="/portfolio">
              عرض كافة أعمالنا
            </Button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
