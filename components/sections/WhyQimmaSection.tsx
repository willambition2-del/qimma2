"use client";

import { whyQimmaCards } from "@/data/why-qimma";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  Award,
  BadgeCheck,
  TrendingUp,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Award,
  BadgeCheck,
  TrendingUp,
  LifeBuoy,
};

export default function WhyQimmaSection() {
  return (
    <section className="section-padding-lg bg-surface" id="why-qimma">
      <div className="container-custom">
        {/* Heading */}
        <ScrollReveal>
          <SectionHeading
            badge="لماذا قمة؟"
            title="لماذا تختار قمة؟"
            description="نجمع بين الخبرة والجودة والدعم المستمر لنكون شريكك الأمثل في رحلة التحول الرقمي."
          />
        </ScrollReveal>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          {whyQimmaCards.map((card, idx) => {
            const Icon = iconMap[card.icon];
            return (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="group bg-white rounded-xl border border-border p-7 text-center card-hover h-full">
                  {/* Icon */}
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-primary-light flex items-center justify-center mb-4">
                    {Icon && (
                      <Icon
                        className="w-6 h-6 text-primary"
                        strokeWidth={1.8}
                      />
                    )}
                  </div>

                  {/* Gold accent line */}
                  <div className="gold-accent-line mx-auto mb-5" />

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
