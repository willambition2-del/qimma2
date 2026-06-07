import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import PackagesPageContent from "./PackagesPageContent";

export const metadata: Metadata = {
  title: "باقات الخدمات وعروض الأسعار",
  description: "اطلع على باقات التسويق الرقمي والحلول البرمجية المتكاملة من شركة قمة للتسويق والبرمجة بأسعار منافسة وجودة عالية.",
  openGraph: {
    title: "الباقات والأسعار | قمة للتسويق والبرمجة",
    description: "اطلع على باقات التسويق الرقمي والحلول البرمجية المتكاملة من شركة قمة للتسويق والبرمجة بأسعار منافسة وجودة عالية.",
  },
};

export default function PackagesPage() {
  return (
    <>
      <Header />
      <main>
        <PackagesPageContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
