import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { BlogPost } from "@/data/articles/types";

interface ArticleCardProps {
  article: BlogPost;
  isFeatured?: boolean;
}

export default function ArticleCard({ article, isFeatured = false }: ArticleCardProps) {
  return (
    <article
      className={`group rounded-2xl border border-[#E9E4DC] bg-[#FFFFFF] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-md hover:border-[#AD8665]/40 hover:-translate-y-1 ${
        isFeatured ? "md:col-span-2 lg:col-span-2 md:flex-row" : "h-full"
      }`}
    >
      {/* Cover Image */}
      <Link
        href={`/articles/${article.slug}`}
        className={`relative overflow-hidden bg-[#F3EEE7] block ${
          isFeatured ? "md:w-1/2 aspect-[16/10] md:aspect-auto" : "aspect-[16/10]"
        }`}
      >
        <Image
          src={article.coverImage}
          alt={article.coverImageAlt || article.title}
          fill
          sizes={isFeatured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />

        {/* Category Badge overlay on image */}
        <div className="absolute top-4 start-4 z-10">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#FFFFFF]/95 text-[#283831] rounded-lg backdrop-blur-sm shadow-sm border border-[#E9E4DC]">
            {article.category}
          </span>
        </div>

        {article.isComparison && (
          <div className="absolute top-4 end-4 z-10">
            <span className="inline-block px-2.5 py-1 text-[11px] font-semibold bg-[#283831] text-[#E8D8C7] rounded-md shadow-sm">
              مقارنة شركات
            </span>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className={`p-6 flex-1 flex flex-col justify-between ${isFeatured ? "md:w-1/2 md:p-8" : ""}`}>
        <div>
          {/* Metadata Top */}
          <div className="flex items-center gap-3 text-xs text-[#777B75] mb-3">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#AD8665]" />
              <span>{article.publishDate}</span>
            </span>
            <span className="w-1 h-1 rounded-full bg-[#E9E4DC]" />
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#AD8665]" />
              <span>{article.readTime}</span>
            </span>
          </div>

          {/* Title */}
          <h3
            className={`font-bold text-[#283831] mb-3 leading-snug transition-colors duration-200 group-hover:text-[#AD8665] ${
              isFeatured ? "text-xl md:text-2xl" : "text-lg line-clamp-2"
            }`}
          >
            <Link href={`/articles/${article.slug}`}>
              {article.title}
            </Link>
          </h3>

          {/* Excerpt */}
          <p
            className={`text-[#424743] text-sm leading-relaxed mb-4 ${
              isFeatured ? "line-clamp-3 md:line-clamp-4 text-base" : "line-clamp-3"
            }`}
          >
            {article.excerpt}
          </p>
        </div>

        {/* Read More Link */}
        <div className="pt-4 border-t border-[#E9E4DC]/70 flex items-center justify-between mt-auto">
          <Link
            href={`/articles/${article.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#AD8665] group-hover:text-[#283831] transition-colors"
          >
            <span>قراءة المقال</span>
            <ArrowLeft className="w-4 h-4 rtl-flip transition-transform duration-200 group-hover:-translate-x-1" />
          </Link>

          <span className="text-xs text-[#777B75]">
            بقلم {article.author.name}
          </span>
        </div>
      </div>
    </article>
  );
}
