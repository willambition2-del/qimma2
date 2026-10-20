import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { getAllArticles } from "@/data/articles";
import ArticlesClient from "./ArticlesClient";

export const metadata: Metadata = {
  title: "مدونة قمة | رؤى وخبرات في التسويق والتقنية",
  description:
    "مقالات استشارية متخصصة ومقارنات مهنية في التسويق الإلكتروني، وتصميم المواقع، وبرمجة التطبيقات، والمتاجر الإلكترونية، وأنظمة ERP للشركات السعودية.",
  alternates: {
    canonical: "https://qimmaaa.com/articles",
  },
  openGraph: {
    title: "مدونة قمة | رؤى وخبرات في التسويق والتقنية",
    description:
      "مقالات استشارية متخصصة ومقارنات مهنية في التسويق الإلكتروني، وتصميم المواقع، وبرمجة التطبيقات، والمتاجر الإلكترونية، وأنظمة ERP للشركات السعودية.",
    url: "https://qimmaaa.com/articles",
    siteName: "قمة للتسويق والبرمجة",
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "مدونة قمة | رؤى وخبرات في التسويق والتقنية",
    description:
      "مقالات استشارية متخصصة ومقارنات مهنية في التسويق الإلكتروني، وتصميم المواقع، وبرمجة التطبيقات، والمتاجر الإلكترونية، وأنظمة ERP للشركات السعودية.",
  },
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <>
      <Header />
      <main>
        <ArticlesClient initialArticles={articles} />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
