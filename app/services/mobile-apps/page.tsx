import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import MobileAppsContent from "./MobileAppsContent";

export const metadata: Metadata = {
  title: "تطوير تطبيقات الموبايل",
  description: "خدمات تصميم وتطوير تطبيقات الهواتف الذكية لنظامي iOS و Android بأعلى معايير الأداء وتجربة المستخدم الحديثة.",
  openGraph: {
    title: "تطوير تطبيقات الموبايل | قمة للتسويق والبرمجة",
    description: "خدمات تصميم وتطوير تطبيقات الهواتف الذكية لنظامي iOS و Android بأعلى معايير الأداء وتجربة المستخدم الحديثة.",
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
