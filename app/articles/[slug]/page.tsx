import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { getAllArticles, getArticleBySlug, getRelatedArticles } from "@/data/articles";
import ReadingProgressBar from "@/components/blog/ReadingProgressBar";
import ArticleHeader from "@/components/blog/ArticleHeader";
import TableOfContents from "@/components/blog/TableOfContents";
import ArticleBody from "@/components/blog/ArticleBody";
import ShareButtons from "@/components/blog/ShareButtons";
import ArticleFaqAccordion from "@/components/blog/ArticleFaqAccordion";
import ServiceCta from "@/components/blog/ServiceCta";
import ArticleSources from "@/components/blog/ArticleSources";
import RelatedArticles from "@/components/blog/RelatedArticles";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "المقال غير موجود | قمة",
      description: "الصفحة المطلوبة غير موجودة في مدونة قمة.",
    };
  }

  const canonicalUrl = `https://qimmaaa.com/articles/${article.slug}`;
  const imageUrl = `https://qimmaaa.com${article.coverImage}`;

  return {
    title: article.seoTitle,
    description: article.metaDescription,
    keywords: [article.primaryKeyword, ...article.secondaryKeywords],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: article.seoTitle,
      description: article.metaDescription,
      url: canonicalUrl,
      siteName: "قمة للتسويق والبرمجة",
      locale: "ar_SA",
      type: "article",
      publishedTime: article.dateISO,
      modifiedTime: article.dateISO,
      authors: [article.author.name],
      tags: [article.category, article.primaryKeyword, ...article.secondaryKeywords],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.coverImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.metaDescription,
      images: [imageUrl],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.slug, 3);
  const articleUrl = `https://qimmaaa.com/articles/${article.slug}`;
  const imageUrl = `https://qimmaaa.com${article.coverImage}`;

  // JSON-LD Structured Data: BlogPosting Schema
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    headline: article.title,
    description: article.metaDescription,
    image: [imageUrl],
    datePublished: article.dateISO,
    dateModified: article.dateISO,
    author: {
      "@type": "Organization",
      name: article.author.name,
      url: "https://qimmaaa.com",
    },
    publisher: {
      "@type": "Organization",
      name: "قمة للتسويق والبرمجة",
      url: "https://qimmaaa.com",
      logo: {
        "@type": "ImageObject",
        url: "https://qimmaaa.com/brand/qimma-logo.png",
      },
    },
    keywords: [article.primaryKeyword, ...article.secondaryKeywords].join(", "),
    articleSection: article.category,
    inLanguage: "ar-SA",
  };

  // JSON-LD: BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "الرئيسية",
        item: "https://qimmaaa.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "المدونة",
        item: "https://qimmaaa.com/articles",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.category,
        item: `https://qimmaaa.com/articles?category=${article.categorySlug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: article.title,
        item: articleUrl,
      },
    ],
  };

  // JSON-LD: FAQPage Schema (if FAQs exist)
  const faqSchema =
    article.faqs && article.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: article.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      {/* Schema.org Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Reading Progress Indicator */}
      <ReadingProgressBar />

      <Header />

      <main className="bg-[#FAF8F5] min-h-screen py-10 sm:py-14">
        <div className="container-custom">
          {/* Main Article Header */}
          <div className="max-w-4xl mx-auto">
            <ArticleHeader article={article} />
          </div>

          {/* Article Content Container (Clean, Centered Reading Flow) */}
          <div className="max-w-4xl mx-auto mt-8">
            {/* Simple & Compact Table of Contents with Sticky Top Navigator */}
            <TableOfContents items={article.tableOfContents} />

            {/* Article Prose HTML */}
            <ArticleBody contentHtml={article.contentHtml} />

            {/* Social Share & Copy Link */}
            <ShareButtons title={article.title} slug={article.slug} />

            {/* Quiet Service CTA */}
            <ServiceCta cta={article.serviceCta} />

            {/* FAQ Accordion */}
            <ArticleFaqAccordion faqs={article.faqs} />

            {/* Verified Sources & References */}
            <ArticleSources sources={article.sources} />

            {/* Related Articles Carousel / Grid */}
            <RelatedArticles articles={relatedArticles} />
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
