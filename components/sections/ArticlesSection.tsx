"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getAllArticles } from "@/data/articles";

export default function ArticlesSection() {
  const articles = getAllArticles().slice(0, 3);

  return (
    <section id="articles" className="section-padding bg-[#FAF8F5]">
      <div className="container-custom">
        <ScrollReveal>
          <SectionHeading
            title="مقالات وأفكار تساعدك على تطوير أعمالك"
            description="رؤى متخصصة وأدلة استشارية نشاركك فيها خبراتنا لتنمية مشروعك الرقمي في السوق السعودي"
            badge="المدونة"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article, idx) => (
            <ScrollReveal key={article.slug} delay={idx * 0.1}>
              <article className="group rounded-2xl border border-[#E9E4DC] bg-white overflow-hidden card-hover h-full flex flex-col transition-all duration-300 hover:border-[#AD8665]/40 hover:-translate-y-1">
                {/* Image */}
                <Link
                  href={`/articles/${article.slug}`}
                  className="relative aspect-[16/10] overflow-hidden bg-[#F3EEE7] block"
                >
                  <Image
                    src={article.coverImage}
                    alt={article.coverImageAlt || article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {/* Category badge */}
                  <div className="absolute top-4 start-4 z-10">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/95 text-[#283831] rounded-lg backdrop-blur-sm border border-[#E9E4DC]">
                      {article.category}
                    </span>
                  </div>
                </Link>

                {/* Content */}
                <div className="flex-1 flex flex-col p-5 lg:p-6 justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#283831] mb-3 leading-snug group-hover:text-[#AD8665] transition-colors duration-200 line-clamp-2">
                      <Link href={`/articles/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-[#424743] text-sm leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Date & Read time */}
                  <div className="flex items-center justify-between text-xs text-[#777B75] pt-4 border-t border-[#E9E4DC]/60 mt-auto">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#AD8665]" />
                      <span>{article.publishDate}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#AD8665]" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.3}>
          <div className="text-center mt-10 md:mt-14">
            <Button
              variant="secondary"
              size="lg"
              href="/articles"
              icon={<ArrowLeft className="w-4 h-4 rtl-flip" />}
              iconPosition="end"
            >
              تصفح جميع المقالات (20 مقالاً)
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
