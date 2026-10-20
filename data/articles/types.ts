export interface TableOfContentsItem {
  id: string;
  title: string;
  level: 2 | 3;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceCTA {
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

export interface ArticleSource {
  title: string;
  url: string;
}

export type ArticleCategorySlug =
  | 'digital-marketing'
  | 'web-development'
  | 'mobile-apps'
  | 'ecommerce'
  | 'systems'
  | 'seo'
  | 'digital-ads';

export interface BlogPost {
  id: string;
  number: string; // '01' - '20'
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  category: string;
  categorySlug: ArticleCategorySlug;
  isComparison: boolean;
  isFeatured: boolean;
  primaryKeyword: string;
  secondaryKeywords: string[];
  publishDate: string; // e.g. "20 أكتوبر 2026"
  dateISO: string; // "2026-10-20"
  readTime: string; // e.g. "6 دقائق قراءة"
  author: {
    name: string;
    role: string;
  };
  coverImage: string;
  coverImageAlt: string;
  excerpt: string;
  tableOfContents: TableOfContentsItem[];
  contentHtml: string;
  faqs: FAQItem[];
  serviceCta: ServiceCTA;
  sources: ArticleSource[];
  relatedSlugs: string[];
}
