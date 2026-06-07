import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ConsultingContent from "./ConsultingContent";

export const metadata: Metadata = {
  title: "الاستشارات الرقمية والتقنية",
  description: "خدمات الاستشارات الرقمية والتقنية المتخصصة لمساعدة الشركات والمؤسسات على اتخاذ قرارات التحول الرقمي واختيار الأنظمة والبرامج المناسبة.",
  openGraph: {
    title: "الاستشارات الرقمية والتقنية | قمة للتسويق والبرمجة",
    description: "خدمات الاستشارات الرقمية والتقنية المتخصصة لمساعدة الشركات والمؤسسات على اتخاذ قرارات التحول الرقمي واختيار الأنظمة والبرامج المناسبة.",
  },
};

export default function ConsultingPage() {
  return (
    <>
      <Header />
      <main>
        <ConsultingContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
