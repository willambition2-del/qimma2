import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import DigitalMarketingContent from "./DigitalMarketingContent";

export const metadata: Metadata = {
  title: "التسويق الرقمي",
  description: "خدمات تسويق رقمي متكاملة تشمل إدارة الحملات الإعلانية المدفوعة، تحسين محركات البحث SEO، وإدارة السوشال ميديا لتحقيق أقصى عائد.",
  openGraph: {
    title: "التسويق الرقمي | قمة للتسويق والبرمجة",
    description: "خدمات تسويق رقمي متكاملة تشمل إدارة الحملات الإعلانية المدفوعة، تحسين محركات البحث SEO، وإدارة السوشال ميديا لتحقيق أقصى عائد.",
  },
};

export default function DigitalMarketingPage() {
  return (
    <>
      <Header />
      <main>
        <DigitalMarketingContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
