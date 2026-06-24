"use client";

import PageHeader from "@/components/ui/PageHeader";

import { useState } from "react";
import { Check, ChevronDown, Sparkles, MessageCircle } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { packages } from "@/data/packages";
import { faqItems } from "@/data/faq";

export default function PackagesPageContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <>
      {/* Hero Header */}
      <PageHeader badge="عروض وباقات قمة"
        title={<>باقات مرنة تناسب <span className="text-gold">حجم نموك</span></>}
        description="اختر الباقة الأنسب لاحتياجاتك سواء خدمات تسويق الكتروني أو خدمات برمجية. نقدم حلولاً تضمن لك أفضل أداء وتصدر لمحركات البحث."
        imageSrc="/images/hero/slide-2.png" />

      {/* Packages Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
            {packages.map((pkg, idx) => (
              <ScrollReveal key={pkg.id} delay={idx * 0.1} className="h-full">
                <div
                  className={`relative flex flex-col h-full bg-white rounded-3xl border p-8 md:p-10 transition-all duration-300 ${
                    pkg.highlighted
                      ? "border-gold shadow-xl shadow-gold/5 lg:scale-105 z-10"
                      : "border-border shadow-sm hover:shadow-lg"
                  }`}
                >
                  {/* Highlighted Badge */}
                  {pkg.highlighted && pkg.badge && (
                    <span className="absolute -top-4 start-1/2 -translate-x-1/2 bg-gold text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-md">
                      <Sparkles className="w-3.5 h-3.5" />
                      {pkg.badge}
                    </span>
                  )}

                  {/* Header */}
                  <div className="mb-8 text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{pkg.title}</h3>
                    <p className="text-sm text-muted leading-relaxed max-w-md mx-auto">{pkg.description}</p>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-border mb-8" />

                  {/* Features List */}
                  <ul className="space-y-4 mb-10 flex-grow">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm text-foreground/80">
                        <div className="shrink-0 w-5 h-5 rounded-full bg-primary-light flex items-center justify-center text-primary mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    href={pkg.ctaHref}
                    target="_blank"
                    variant={pkg.highlighted ? "gold" : "primary"}
                    size="lg"
                    className="w-full mt-auto"
                    icon={<MessageCircle className="w-5 h-5" />}
                  >
                    {pkg.cta}
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="الأسئلة الشائعة"
              description="كل ما تود معرفته عن خدماتنا، طريقة العمل والتسعير."
            />

            <div className="mt-12 space-y-4">
              {faqItems.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <ScrollReveal key={idx} delay={idx * 0.05}>
                    <div className="bg-white border border-border rounded-2xl overflow-hidden transition-colors duration-300">
                      <button
                        onClick={() => toggleFAQ(idx)}
                        className="flex justify-between items-center w-full px-6 py-5 text-start font-bold text-foreground hover:text-primary transition-colors duration-300"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-muted transition-transform duration-300 shrink-0 ${
                            isOpen ? "rotate-180 text-primary" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          isOpen ? "max-h-[500px] border-t border-border" : "max-h-0"
                        }`}
                      >
                        <div className="px-6 py-5 text-sm leading-relaxed text-muted bg-zinc-50/50">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
