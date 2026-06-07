import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import PortfolioPageContent from "./PortfolioPageContent";

export const metadata: Metadata = {
  title: "أعمالنا ومشاريعنا السابقة",
  description: "استعرض معرض أعمال ومشاريع شركة قمة للتسويق والبرمجة في تصميم المواقع، المتاجر الإلكترونية، الأنظمة البرمجية، وتطبيقات الجوال.",
  openGraph: {
    title: "أعمالنا | قمة للتسويق والبرمجة",
    description: "استعرض معرض أعمال ومشاريع شركة قمة للتسويق والبرمجة في تصميم المواقع، المتاجر الإلكترونية، الأنظمة البرمجية، وتطبيقات الجوال.",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        <PortfolioPageContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
