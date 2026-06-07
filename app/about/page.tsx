import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "من نحن",
  description:
    "تعرّف على قمة للتسويق والبرمجة — فريق احترافي يجمع بين الخبرة التسويقية والتقنية لمساعدتك على تحقيق النمو الرقمي.",
  openGraph: {
    title: "من نحن | قمة للتسويق والبرمجة",
    description:
      "فريق احترافي يساعدك على تحقيق المبيعات عبر الأونلاين بخبرات تسويقية وبرمجية متكاملة.",
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
