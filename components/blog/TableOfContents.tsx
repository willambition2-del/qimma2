"use client";

import { useEffect, useState, useRef } from "react";
import { ListFilter, ChevronDown, ChevronUp, Bookmark } from "lucide-react";
import { TableOfContentsItem } from "@/data/articles/types";

interface TableOfContentsProps {
  items: TableOfContentsItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id || "");
  const [isInlineOpen, setIsInlineOpen] = useState(true);
  const [isStickyVisible, setIsStickyVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Track active heading and sticky bar visibility
  useEffect(() => {
    if (items.length === 0) return;

    const handleScroll = () => {
      // Show sticky top bar after scrolling past the header area (~500px)
      setIsStickyVisible(window.scrollY > 480);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // IntersectionObserver to highlight current active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "0px 0px -70% 0px",
        threshold: 0.1,
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [items]);

  // Close sticky dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen]);

  const scrollToHeading = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveId(id);
      setIsDropdownOpen(false);
    }
  };

  if (!items || items.length === 0) return null;

  const activeItem = items.find((i) => i.id === activeId) || items[0];

  return (
    <>
      {/* 1. فِهرس بسيط وصغير في رأس المقال (Inline Compact Box) */}
      <div className="mb-8 rounded-2xl border border-[#E9E4DC] bg-[#FFFFFF] shadow-xs overflow-hidden transition-all">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#FAF8F5] border-b border-[#E9E4DC]">
          <div className="flex items-center gap-2 text-[#283831] font-bold text-sm sm:text-base">
            <ListFilter className="w-4 h-4 text-[#AD8665]" />
            <span>فهرس محتويات المقال</span>
            <span className="text-xs font-normal text-[#777B75] bg-[#FFFFFF] px-2 py-0.5 rounded-full border border-[#E9E4DC]">
              {items.length} أقسام
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsInlineOpen((prev) => !prev)}
            className="flex items-center gap-1 text-xs font-medium text-[#777B75] hover:text-[#283831] transition-colors py-1 px-2 rounded-lg hover:bg-[#F3EEE7]"
            aria-expanded={isInlineOpen}
          >
            <span>{isInlineOpen ? "تصغير" : "عرض"}</span>
            {isInlineOpen ? (
              <ChevronUp className="w-4 h-4 text-[#AD8665]" />
            ) : (
              <ChevronDown className="w-4 h-4 text-[#AD8665]" />
            )}
          </button>
        </div>

        {/* Collapsible Content */}
        {isInlineOpen && (
          <nav className="p-4 sm:p-5">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5 text-xs sm:text-sm">
              {items.map((item, idx) => {
                const isActive = activeId === item.id;
                return (
                  <li key={item.id} className={item.level === 3 ? "pr-3 opacity-90" : ""}>
                    <button
                      type="button"
                      onClick={() => scrollToHeading(item.id)}
                      className={`text-start w-full leading-relaxed transition-colors flex items-start gap-2 py-1 px-1.5 rounded-lg hover:bg-[#FAF8F5] ${
                        isActive
                          ? "text-[#AD8665] font-bold bg-[#F3EEE7]/50"
                          : "text-[#424743] hover:text-[#283831]"
                      }`}
                    >
                      <span className="text-[11px] font-mono text-[#AD8665] shrink-0 mt-0.5 font-bold">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="line-clamp-1">{item.title}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>

      {/* 2. شريط فهرس صغير وبسيط مثبت بأعلى الصفحة عند التمرير (Sticky Top Pill Bar) */}
      {isStickyVisible && (
        <div
          ref={dropdownRef}
          className="fixed top-22 inset-x-0 mx-auto w-[92%] max-w-3xl z-40 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="relative">
            {/* Slim Pill */}
            <div className="flex items-center justify-between gap-3 px-4 py-2 rounded-full bg-[#FFFFFF]/95 backdrop-blur-md border border-[#E9E4DC] shadow-md text-xs sm:text-sm">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <Bookmark className="w-4 h-4 text-[#AD8665] shrink-0" />
                <span className="text-[11px] text-[#777B75] hidden sm:inline shrink-0">
                  أنت تقرأ:
                </span>
                <span className="font-semibold text-[#283831] truncate">
                  {activeItem.title}
                </span>
              </div>

              {/* Toggle Dropdown Button */}
              <button
                type="button"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5] hover:bg-[#F3EEE7] border border-[#E9E4DC] text-[#283831] font-semibold text-xs transition-colors shrink-0 cursor-pointer"
                aria-expanded={isDropdownOpen}
              >
                <span>فهرس الأقسام</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#AD8665] transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full mt-2 inset-x-0 max-h-72 overflow-y-auto rounded-2xl bg-[#FFFFFF] border border-[#E9E4DC] shadow-xl p-3 z-50">
                <div className="text-[11px] font-bold text-[#777B75] px-3 py-1 border-b border-[#E9E4DC] mb-1">
                  انتقل مباشرة إلى:
                </div>
                <ul className="space-y-1 text-xs sm:text-sm">
                  {items.map((item, idx) => {
                    const isActive = activeId === item.id;
                    return (
                      <li key={item.id} className={item.level === 3 ? "pr-3" : ""}>
                        <button
                          type="button"
                          onClick={() => scrollToHeading(item.id)}
                          className={`w-full text-start flex items-center gap-2.5 px-3 py-2 rounded-xl transition-colors ${
                            isActive
                              ? "bg-[#F3EEE7] text-[#AD8665] font-bold"
                              : "text-[#424743] hover:bg-[#FAF8F5] hover:text-[#283831]"
                          }`}
                        >
                          <span className="font-mono text-[11px] text-[#AD8665]">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span className="truncate">{item.title}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
