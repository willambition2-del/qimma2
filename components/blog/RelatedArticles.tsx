import { Sparkles } from "lucide-react";
import { BlogPost } from "@/data/articles/types";
import ArticleCard from "./ArticleCard";

interface RelatedArticlesProps {
  articles: BlogPost[];
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <section aria-labelledby="related-articles-title" className="mt-16 pt-12 border-t border-[#E9E4DC]">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#AD8665] mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>مقالات مقترحة</span>
          </div>
          <h2 id="related-articles-title" className="text-xl sm:text-2xl font-bold text-[#283831]">
            مقالات ذات صلة قد تهمك
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
