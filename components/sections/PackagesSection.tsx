"use client";

import { Check } from "lucide-react";
import { packages } from "@/data/packages";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PackagesSection() {
  return (
    <section id="packages" className="section-padding bg-surface">
      <div className="container-custom">
        <ScrollReveal>
          <SectionHeading
            title="باقاتنا"
            description="اختر الباقة المناسبة لاحتياجاتك وابدأ رحلة نمو أعمالك الرقمية"
            badge="الباقات"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {packages.map((pkg, idx) => (
            <ScrollReveal key={pkg.id} delay={idx * 0.15}>
              <div
                className={`relative flex flex-col h-full rounded-2xl p-8 lg:p-10 transition-all duration-300 ${
                  pkg.highlighted
                    ? "border-2 border-gold bg-white shadow-elevated"
                    : "border border-border bg-white shadow-card card-hover"
                }`}
              >
                {/* Gold gradient at top for highlighted card */}
                {pkg.highlighted && (
                  <div className="absolute inset-x-0 top-0 h-1.5 rounded-t-2xl bg-gradient-to-l from-gold via-gold-soft to-gold" />
                )}

                {/* Badge */}
                {pkg.badge && (
                  <span className="absolute -top-3.5 start-6 inline-block bg-gold text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-md">
                    {pkg.badge}
                  </span>
                )}

                {/* Title & Description */}
                <div className="mb-6">
                  <h3
                    className={`text-xl lg:text-2xl font-bold mb-3 ${
                      pkg.highlighted ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {pkg.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-border mb-6" />

                {/* Features */}
                <ul className="flex-1 space-y-3 mb-8">
                  {pkg.features.map((feature, fIdx) => (
                    <li
                      key={fIdx}
                      className="flex items-start gap-3 text-sm text-foreground"
                    >
                      <span
                        className={`shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center ${
                          pkg.highlighted
                            ? "bg-gold/10 text-gold"
                            : "bg-primary-light text-primary"
                        }`}
                      >
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={pkg.highlighted ? "gold" : "primary"}
                  size="lg"
                  href={pkg.ctaHref}
                  target="_blank"
                  fullWidth
                >
                  {pkg.cta}
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
