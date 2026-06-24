import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CustomSystemsContent from "./CustomSystemsContent";

export const metadata: Metadata = {
  title: "شركة تطوير برمجيات وتطوير البرمجيات المخصصة",
  description: "خدمات تصميم البرمجيات وتطوير البرامج والأنظمة المخصصة (CRM, ERP). نحن شركة برمجيات رائدة في السعودية متخصصة في البرمجه والتطبيقات وأنظمة الموارد.",
  openGraph: {
    title: "تطوير البرمجيات والأنظمة المخصصة | قمة للتسويق والبرمجة",
    description: "خدمات تصميم البرمجيات وتطوير البرامج والأنظمة المخصصة (CRM, ERP) بأعلى درجات الكفاءة والأمان.",
  },
};

export default function CustomSystemsPage() {
  return (
    <>
      <Header />
      <main>
        <CustomSystemsContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
