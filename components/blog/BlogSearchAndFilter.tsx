"use client";

import { Search, X } from "lucide-react";
import { articleCategories } from "@/data/articles";

interface BlogSearchAndFilterProps {
  activeCategory: string;
  onSelectCategory: (id: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  totalCount: number;
}

export default function BlogSearchAndFilter({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  totalCount,
}: BlogSearchAndFilterProps) {
  return (
    <div className="mb-12">
      {/* Search Input Bar */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="ابحث في المقالات (العنوان، الكلمات المفتاحية، أو الموضوع)..."
            className="w-full pl-12 pr-12 py-3.5 sm:py-4 rounded-2xl border border-[#E9E4DC] bg-[#FFFFFF] text-sm sm:text-base text-[#283831] placeholder:text-[#777B75] shadow-sm focus:outline-none focus:border-[#AD8665] focus:ring-2 focus:ring-[#AD8665]/20 transition-all"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#AD8665]" />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#F3EEE7] flex items-center justify-center text-[#777B75] hover:text-[#283831] transition-colors"
              title="مسح البحث"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-5xl mx-auto">
        {articleCategories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.id)}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#283831] text-[#FAF8F5] shadow-sm"
                  : "bg-[#FFFFFF] text-[#424743] border border-[#E9E4DC] hover:border-[#AD8665]/50 hover:bg-[#FAF8F5]"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Results Count & Reset */}
      <div className="flex items-center justify-between max-w-5xl mx-auto mt-6 px-2 text-xs sm:text-sm text-[#777B75]">
        <span>
          عرض <strong className="text-[#283831] font-semibold">{totalCount}</strong> مقالاً
          {activeCategory !== "all" && " ضمن التصنيف المحدد"}
          {searchQuery && ` لنتائج البحث عن «${searchQuery}»`}
        </span>

        {(activeCategory !== "all" || searchQuery) && (
          <button
            type="button"
            onClick={() => {
              onSelectCategory("all");
              onSearchChange("");
            }}
            className="text-[#AD8665] hover:underline font-medium"
          >
            إعادة تعيين الفلاتر
          </button>
        )}
      </div>
    </div>
  );
}
