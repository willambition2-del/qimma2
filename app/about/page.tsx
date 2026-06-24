import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "من نحن | وكالة تسويق وشركة برمجيات في السعودية",
  description:
    "تعرّف على شركة قمة للتسويق والبرمجة — وكالة تسويقية متكاملة تقدم خدمات التسويق الرقمي بالإضافة لكونها شركة برمجة تطبيقات ومواقع ويب وأنظمة برمجية رائدة في السعودية.",
  openGraph: {
    title: "من نحن | قمة للتسويق والبرمجة",
    description:
      "فريق قمة يجمع بين أخصائي تسويق الكتروني ومبرمج تطبيقات ومبرمج مواقع لتلبية احتياجاتك الرقمية والبرمجية باحترافية.",
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
