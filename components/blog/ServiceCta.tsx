import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { ServiceCTA } from "@/data/articles/types";

interface ServiceCtaProps {
  cta: ServiceCTA;
}

export default function ServiceCta({ cta }: ServiceCtaProps) {
  return (
    <section
      aria-label="دعوة للتواصل والخدمات"
      className="my-12 p-8 sm:p-10 rounded-3xl border border-[#E9E4DC] bg-[#F3EEE7] relative overflow-hidden"
    >
      {/* Decorative accent element */}
      <div
        className="absolute -top-12 -left-12 w-40 h-40 rounded-full bg-[#E8D8C7] opacity-60 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-2xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFFF] text-xs font-semibold text-[#AD8665] border border-[#E9E4DC] mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#AD8665]" />
          <span>حلول واستشارات قمة</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-[#283831] leading-snug mb-3">
          {cta.title}
        </h3>

        <p className="text-[#424743] text-sm sm:text-base leading-relaxed mb-6">
          {cta.description}
        </p>

        <div>
          <Link
            href={cta.href}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#283831] text-[#FAF8F5] text-sm font-bold shadow-sm hover:bg-[#1a2621] transition-all duration-200 group"
          >
            <span>{cta.buttonText}</span>
            <ArrowLeft className="w-4 h-4 rtl-flip transition-transform duration-200 group-hover:-translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
