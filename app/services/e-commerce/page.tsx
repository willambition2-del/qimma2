import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ECommerceContent from "./ECommerceContent";

export const metadata: Metadata = {
  title: "تسويق متجر الكتروني وبرمجة المتاجر الإلكترونية",
  description: "خدمات تصميم وتطوير المتاجر الإلكترونية المتكاملة وربط بوابات الدفع والشحن، بالإضافة إلى تسويق المتاجر الالكترونية وادارة حملات التسويق الالكتروني لزيادة مبيعاتك.",
  openGraph: {
    title: "تسويق وتطوير المتاجر الإلكترونية | قمة للتسويق والبرمجة",
    description: "خدمات تصميم وتطوير المتاجر الإلكترونية المتكاملة وتسويق المتاجر الالكترونية وإدارتها باحترافية تامة.",
  },
};

export default function ECommercePage() {
  return (
    <>
      <Header />
      <main>
        <ECommerceContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
