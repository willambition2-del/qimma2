import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, Calendar, Clock, User, ShieldCheck } from "lucide-react";
import { BlogPost } from "@/data/articles/types";

interface ArticleHeaderProps {
  article: BlogPost;
}

export default function ArticleHeader({ article }: ArticleHeaderProps) {
  return (
    <header className="mb-10">
      {/* Breadcrumb Navigation */}
      <nav aria-label="مسار التنقل" className="mb-6">
        <ol className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-[#777B75]">
          <li>
            <Link href="/" className="hover:text-[#283831] transition-colors">
              الرئيسية
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronLeft className="w-3.5 h-3.5 rtl-flip text-[#AD8665]" />
          </li>
          <li>
            <Link href="/articles" className="hover:text-[#283831] transition-colors">
              المدونة
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronLeft className="w-3.5 h-3.5 rtl-flip text-[#AD8665]" />
          </li>
          <li>
            <span className="text-[#AD8665] font-medium">
              {article.category}
            </span>
          </li>
        </ol>
      </nav>

      {/* Category & Badge */}
      <div className="flex flex-wrap items-center gap-2.5 mb-4">
        <span className="inline-block px-3.5 py-1 text-xs font-semibold bg-[#283831] text-[#FAF8F5] rounded-full">
          {article.category}
        </span>
        {article.isComparison && (
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#E8D8C7] text-[#283831] rounded-full border border-[#AD8665]/30">
            مقارنة شركات وخدمات
          </span>
        )}
        <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-[#F3EEE7] text-[#424743] rounded-full">
          <ShieldCheck className="w-3.5 h-3.5 text-[#AD8665]" />
          مراجعة تحريرية معتمدة
        </span>
      </div>

      {/* H1 Heading */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#283831] leading-tight mb-5">
        {article.title}
      </h1>

      {/* Excerpt / Lead */}
      <p className="text-base sm:text-lg text-[#424743] leading-relaxed mb-6 font-normal">
        {article.excerpt}
      </p>

      {/* Meta Information Bar */}
      <div className="flex flex-wrap items-center gap-4 sm:gap-6 py-4 border-y border-[#E9E4DC] text-xs sm:text-sm text-[#777B75] mb-8">
        {/* Author */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#E8D8C7] flex items-center justify-center text-[#283831]">
            <User className="w-4 h-4 text-[#AD8665]" />
          </div>
          <div>
            <span className="font-semibold text-[#283831] block">
              {article.author.name}
            </span>
            <span className="text-[11px] text-[#777B75] hidden sm:inline">
              {article.author.role}
            </span>
          </div>
        </div>

        <span className="w-1 h-1 rounded-full bg-[#E9E4DC] hidden sm:block" />

        {/* Date */}
        <div className="flex items-center gap-1.5">
          <Calendar className="w-4 h-4 text-[#AD8665]" />
          <span>تاريخ النشر: {article.publishDate}</span>
        </div>

        <span className="w-1 h-1 rounded-full bg-[#E9E4DC] hidden sm:block" />

        {/* Read Time */}
        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-[#AD8665]" />
          <span>وقت القراءة التقديري: {article.readTime}</span>
        </div>
      </div>

      {/* Featured Cover Image */}
      <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#E9E4DC] bg-[#F3EEE7] shadow-sm">
        <Image
          src={article.coverImage}
          alt={article.coverImageAlt || article.title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 850px"
          className="object-cover"
        />
      </div>
    </header>
  );
}
