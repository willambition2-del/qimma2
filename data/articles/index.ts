import { BlogPost } from './types';
import { article01 } from './article-01';
import { article02 } from './article-02';
import { article03 } from './article-03';
import { article04 } from './article-04';
import { article05 } from './article-05';
import { article06 } from './article-06';
import { article07 } from './article-07';
import { article08 } from './article-08';
import { article09 } from './article-09';
import { article10 } from './article-10';
import { article11 } from './article-11';
import { article12 } from './article-12';
import { article13 } from './article-13';
import { article14 } from './article-14';
import { article15 } from './article-15';
import { article16 } from './article-16';
import { article17 } from './article-17';
import { article18 } from './article-18';
import { article19 } from './article-19';
import { article20 } from './article-20';

export * from './types';

export const allArticles: BlogPost[] = [
  article01,
  article02,
  article03,
  article04,
  article05,
  article06,
  article07,
  article08,
  article09,
  article10,
  article11,
  article12,
  article13,
  article14,
  article15,
  article16,
  article17,
  article18,
  article19,
  article20,
];

export function getAllArticles(): BlogPost[] {
  return allArticles;
}

export function getArticleBySlug(slug: string): BlogPost | undefined {
  return allArticles.find((a) => a.slug === slug);
}

export function getFeaturedArticles(): BlogPost[] {
  return allArticles.filter((a) => a.isFeatured);
}

export function getRelatedArticles(currentSlug: string, limit = 3): BlogPost[] {
  const current = getArticleBySlug(currentSlug);
  if (!current) return allArticles.slice(0, limit);

  // First try the explicitly designated related slugs
  const explicit = current.relatedSlugs
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is BlogPost => a !== undefined);

  if (explicit.length >= limit) {
    return explicit.slice(0, limit);
  }

  // Then add articles from the same category or comparison pool
  const sameCategory = allArticles.filter(
    (a) =>
      a.slug !== currentSlug &&
      !explicit.some((e) => e.slug === a.slug) &&
      (a.categorySlug === current.categorySlug || a.isComparison === current.isComparison)
  );

  const combined = [...explicit, ...sameCategory];
  if (combined.length >= limit) {
    return combined.slice(0, limit);
  }

  // Fill up with any other articles
  const others = allArticles.filter(
    (a) => a.slug !== currentSlug && !combined.some((c) => c.slug === a.slug)
  );

  return [...combined, ...others].slice(0, limit);
}

export interface CategoryOption {
  id: string;
  label: string;
}

export const articleCategories: CategoryOption[] = [
  { id: 'all', label: 'جميع المقالات' },
  { id: 'digital-marketing', label: 'التسويق الإلكتروني' },
  { id: 'seo', label: 'تحسين محركات البحث SEO' },
  { id: 'web-development', label: 'تصميم المواقع' },
  { id: 'mobile-apps', label: 'برمجة التطبيقات' },
  { id: 'ecommerce', label: 'المتاجر الإلكترونية' },
  { id: 'systems', label: 'الأنظمة البرمجية وERP' },
  { id: 'comparisons', label: 'المقارنات وأفضل الشركات' },
];
