import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import PackagesPageContent from "./PackagesPageContent";

export const metadata: Metadata = {
  title: "باقات خدمات تسويق الكتروني والحلول البرمجية",
  description: "اطلع على باقات الخدمات التي تقدمها شركات تسويق الكتروني في السعودية. نوفر باقات مرنة في التسويق الرقمي وتطوير المواقع والأنظمة المخصصة بأسعار منافسة.",
  openGraph: {
    title: "الباقات والأسعار | قمة للتسويق والبرمجة",
    description: "باقات تسويق الكتروني متكاملة وحلول برمجية متنوعة تناسب حجم نمو أعمالك في السعودية.",
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
