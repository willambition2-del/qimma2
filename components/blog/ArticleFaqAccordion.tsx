"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQItem } from "@/data/articles/types";

interface ArticleFaqAccordionProps {
  faqs: FAQItem[];
}

export default function ArticleFaqAccordion({ faqs }: ArticleFaqAccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]); // First item open by default

  if (!faqs || faqs.length === 0) return null;

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section aria-labelledby="faq-section-title" className="my-14 pt-10 border-t border-[#E9E4DC]">
      <div className="flex items-center gap-2 mb-6">
        <HelpCircle className="w-5 h-5 text-[#AD8665]" />
        <h2 id="faq-section-title" className="text-xl md:text-2xl font-bold text-[#283831]">
          أسئلة شائعة وإجاباتها
        </h2>
      </div>

      <div className="space-y-3.5">
        {faqs.map((faq, idx) => {
          const isOpen = openIndices.includes(idx);
          return (
            <div
              key={idx}
              className="rounded-xl border border-[#E9E4DC] bg-[#FFFFFF] overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => toggleIndex(idx)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-start font-bold text-[#283831] hover:bg-[#FAF8F5] transition-colors gap-4"
                aria-expanded={isOpen}
              >
                <span className="text-base sm:text-lg leading-snug">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#AD8665] shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-5 sm:px-5 sm:pb-5 pt-1 text-[#424743] leading-relaxed text-sm sm:text-base border-t border-[#E9E4DC]/50 bg-[#FAF8F5]/30">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
