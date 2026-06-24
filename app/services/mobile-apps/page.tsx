import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import MobileAppsContent from "./MobileAppsContent";

export const metadata: Metadata = {
  title: "شركة برمجة تطبيقات وتصميم تطبيقات الجوال",
  description: "نحن شركة تصميم تطبيقات وشركة انشاء تطبيقات متخصصة تقدم خدمات برمجة تطبيقات الجوال وتطوير تطبيقات الجوال لنظامي iOS و Android مع مبرمج تطبيقات محترف.",
  openGraph: {
    title: "شركة برمجة تطبيقات وتصميم تطبيقات الجوال | قمة",
    description: "أفضل شركة تطوير تطبيقات في السعودية تقدم حلول تصميم تطبيقات الجوال وتطويرها بأحدث التقنيات وأقوى أداء.",
  },
};

export default function MobileAppsPage() {
  return (
    <>
      <Header />
      <main>
        <MobileAppsContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
