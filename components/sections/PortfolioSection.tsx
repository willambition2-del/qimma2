"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileDown } from "lucide-react";
import {
  portfolioCategories,
  portfolioItems,
  pdfDownloads,
} from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

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

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

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
                <div className="rounded-2xl border border-border bg-white overflow-hidden card-hover">
                  {/* Image Placeholder */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${
                        gradients[idx % gradients.length]
                      }`}
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/40 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                        عرض التفاصيل
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 lg:p-6">
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
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

        {/* PDF Downloads */}
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 md:mt-16 max-w-2xl mx-auto">
            {pdfDownloads.map((pdf) => (
              <a
                key={pdf.id}
                href={pdf.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-surface hover:bg-primary-light hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-all duration-300">
                  <FileDown className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                    {pdf.title}
                  </h4>
                  <p className="text-xs text-muted mt-0.5 leading-relaxed">
                    {pdf.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
