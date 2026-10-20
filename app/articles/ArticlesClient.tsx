"use client";

import { useState, useMemo } from "react";
import { Sparkles, ArrowDown } from "lucide-react";
import { BlogPost } from "@/data/articles/types";
import BlogSearchAndFilter from "@/components/blog/BlogSearchAndFilter";
import ArticleCard from "@/components/blog/ArticleCard";

interface ArticlesClientProps {
  initialArticles: BlogPost[];
}

const ITEMS_PER_PAGE = 9;

export default function ArticlesClient({ initialArticles }: ArticlesClientProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState<number>(ITEMS_PER_PAGE);

  // Filter articles based on active category and search query
  const filteredArticles = useMemo(() => {
    return initialArticles.filter((article) => {
      // Category match
      let matchesCat = true;
      if (activeCategory === "all") {
        matchesCat = true;
      } else if (activeCategory === "comparisons") {
        matchesCat = article.isComparison;
      } else if (activeCategory === "digital-marketing") {
        matchesCat = article.categorySlug === "digital-marketing" || article.categorySlug === "digital-ads";
      } else {
        matchesCat = article.categorySlug === activeCategory;
      }

      // Search match
      let matchesQuery = true;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inTitle = article.title.toLowerCase().includes(q);
        const inExcerpt = article.excerpt.toLowerCase().includes(q);
        const inCategory = article.category.toLowerCase().includes(q);
        const inKeywords = article.secondaryKeywords.some((k) =>
          k.toLowerCase().includes(q)
        ) || article.primaryKeyword.toLowerCase().includes(q);

        matchesQuery = inTitle || inExcerpt || inCategory || inKeywords;
      }

      return matchesCat && matchesQuery;
    });
  }, [initialArticles, activeCategory, searchQuery]);

  // Featured articles section (only shown when no search query and "all" category)
  const showFeaturedSection = activeCategory === "all" && !searchQuery.trim();
  const featuredArticles = useMemo(() => {
    return initialArticles.filter((a) => a.isFeatured).slice(0, 2);
  }, [initialArticles]);

  // Regular grid articles
  const gridArticles = useMemo(() => {
    if (showFeaturedSection) {
      const featuredSlugs = new Set(featuredArticles.map((a) => a.slug));
      return filteredArticles.filter((a) => !featuredSlugs.has(a.slug));
    }
    return filteredArticles;
  }, [filteredArticles, showFeaturedSection, featuredArticles]);

  // Paginated articles to display
  const displayedArticles = gridArticles.slice(0, visibleCount);
  const hasMore = visibleCount < gridArticles.length;

  const loadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen py-12 sm:py-16">
      <div className="container-custom">
        {/* Main Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E9E4DC] text-xs font-semibold text-[#AD8665] mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#AD8665]" />
            <span>مدونة قمة المعرفية</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#283831] tracking-tight leading-tight mb-5">
            رؤى وخبرات في التسويق والتقنية
          </h1>

          <p className="text-base sm:text-lg text-[#424743] leading-relaxed">
            أدلة استشارية متخصصة ومقارنات عملية لمساعدة أصحاب الشركات ورواد الأعمال في السوق السعودي على اتخاذ قرارات استثمارية مدروسة.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <BlogSearchAndFilter
          activeCategory={activeCategory}
          onSelectCategory={(id) => {
            setActiveCategory(id);
            setVisibleCount(ITEMS_PER_PAGE);
          }}
          searchQuery={searchQuery}
          onSearchChange={(q) => {
            setSearchQuery(q);
            setVisibleCount(ITEMS_PER_PAGE);
          }}
          totalCount={filteredArticles.length}
        />

        {/* Featured Articles Section */}
        {showFeaturedSection && featuredArticles.length > 0 && (
          <section className="mb-14" aria-labelledby="featured-section-title">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-6 rounded-full bg-[#AD8665]" />
              <h2 id="featured-section-title" className="text-xl sm:text-2xl font-bold text-[#283831]">
                مقالات مميزة مختارة
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {featuredArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} isFeatured />
              ))}
            </div>
          </section>
        )}

        {/* Main Articles Grid */}
        <section aria-labelledby="all-articles-title">
          {showFeaturedSection && (
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-6 rounded-full bg-[#283831]" />
              <h2 id="all-articles-title" className="text-xl sm:text-2xl font-bold text-[#283831]">
                جميع المقالات والتحليلات
              </h2>
            </div>
          )}

          {filteredArticles.length === 0 ? (
            <div className="text-center py-20 px-4 rounded-3xl border border-[#E9E4DC] bg-[#FFFFFF] max-w-lg mx-auto">
              <p className="text-lg font-semibold text-[#283831] mb-2">
                لم يتم العثور على مقالات مطابقة
              </p>
              <p className="text-sm text-[#777B75] mb-6">
                جرّب البحث بكلمة مفتاحية أخرى أو إعادة ضبط التصنيفات لتصفح كافة المقالات.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
                className="px-5 py-2.5 rounded-full bg-[#283831] text-[#FAF8F5] text-xs font-bold hover:bg-[#1a2621] transition-colors"
              >
                عرض جميع المقالات
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {displayedArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          )}

          {/* Load More Button */}
          {hasMore && (
            <div className="text-center mt-12 sm:mt-16">
              <button
                type="button"
                onClick={loadMore}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FFFFFF] border border-[#E9E4DC] text-[#283831] text-sm font-bold shadow-2xs hover:bg-[#F3EEE7] hover:border-[#AD8665]/50 transition-all cursor-pointer"
              >
                <span>عرض المزيد من المقالات</span>
                <ArrowDown className="w-4 h-4 text-[#AD8665]" />
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
