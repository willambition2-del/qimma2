import { ExternalLink, BookOpen } from "lucide-react";
import { ArticleSource } from "@/data/articles/types";

interface ArticleSourcesProps {
  sources: ArticleSource[];
}

export default function ArticleSources({ sources }: ArticleSourcesProps) {
  if (!sources || sources.length === 0) return null;

  return (
    <div className="my-10 p-6 rounded-2xl border border-[#E9E4DC] bg-[#FFFFFF]">
      <div className="flex items-center gap-2 mb-4 text-[#283831] font-bold text-sm sm:text-base">
        <BookOpen className="w-4 h-4 text-[#AD8665]" />
        <span>المصادر والمراجع الرسمية للمراجعة والتدقيق:</span>
      </div>

      <ul className="space-y-2 text-xs sm:text-sm">
        {sources.map((source, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="text-[#AD8665] font-mono mt-0.5">•</span>
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#424743] hover:text-[#AD8665] transition-colors inline-flex items-center gap-1.5 underline underline-offset-4 decoration-[#E9E4DC]"
            >
              <span>{source.title}</span>
              <ExternalLink className="w-3 h-3 text-[#777B75]" />
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-4 pt-3 border-t border-[#E9E4DC]/60 text-[11px] text-[#777B75]">
        ملاحظة تحريرية: تُراجع المعلومات المتغيرة وتحديثات الأنظمة واللوائح الرسمية دورياً لضمان دقة المحتوى المنشور.
      </p>
    </div>
  );
}
