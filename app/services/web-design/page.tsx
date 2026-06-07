import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import WebDesignContent from "./WebDesignContent";

export const metadata: Metadata = {
  title: "تصميم المواقع والمتاجر",
  description: "خدمات تصميم المواقع والمتاجر الإلكترونية المتكاملة المتجاوبة مع الأجهزة، سريعة وآمنة، مهيأة بالكامل لمحركات البحث.",
  openGraph: {
    title: "تصميم المواقع والمتاجر | قمة للتسويق والبرمجة",
    description: "خدمات تصميم المواقع والمتاجر الإلكترونية المتكاملة المتجاوبة مع الأجهزة، سريعة وآمنة، مهيأة بالكامل لمحركات البحث.",
  },
};

export default function WebDesignPage() {
  return (
    <>
      <Header />
      <main>
        <WebDesignContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
