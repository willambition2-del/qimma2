import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ArticlesPageContent from "./ArticlesPageContent";

export const metadata: Metadata = {
  title: "المقالات والمدونة",
  description: "مقالات وأفكار ونصائح متخصصة في التسويق الرقمي وتصميم المواقع وتطبيقات الموبايل من كتاب شركة قمة.",
  openGraph: {
    title: "المقالات والمدونة | قمة للتسويق والبرمجة",
    description: "مقالات وأفكار ونصائح متخصصة في التسويق الرقمي وتصميم المواقع وتطبيقات الموبايل من كتاب شركة قمة.",
  },
};

export default function ArticlesPage() {
  return (
    <>
      <Header />
      <main>
        <ArticlesPageContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
