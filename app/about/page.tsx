import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "من نحن | وكالة تسويق وبرمجة في السعودية",
  description:
    "تعرّف على قمة — وكالة متخصصة في التسويق الإلكتروني والبرمجة، نقدم حلولًا رقمية متكاملة تشمل تطوير المواقع والمتاجر والتطبيقات وإدارة الحملات الإعلانية لمساعدة أعمالك على النمو.",
  openGraph: {
    title: "من نحن | قمة للتسويق والبرمجة",
    description:
      "فريق قمة يجمع بين خبراء التسويق الإلكتروني ومطوري التطبيقات والمواقع لتقديم حلول رقمية متكاملة تساعد الشركات والمتاجر على بناء حضورها الرقمي وتنمية أعمالها.",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutPageContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
