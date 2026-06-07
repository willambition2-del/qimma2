import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "خدماتنا",
  description: "اكتشف حلولنا المتكاملة في التسويق الرقمي، تصميم المواقع، تطوير الأنظمة المخصصة وتطبيقات الجوال لمساعدتك على النمو والريادة.",
  openGraph: {
    title: "خدماتنا | قمة للتسويق والبرمجة",
    description: "اكتشف حلولنا المتكاملة في التسويق الرقمي، تصميم المواقع، تطوير الأنظمة المخصصة وتطبيقات الجوال لمساعدتك على النمو والريادة.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
