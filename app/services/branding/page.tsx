import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import BrandingContent from "./BrandingContent";

export const metadata: Metadata = {
  title: "تصميم الهوية والمحتوى الإعلاني",
  description: "خدمات تصميم الهوية البصرية المتكاملة، الشعارات، دليل الهوية، وتصميم المحتوى الإعلاني المبتكر لتعزيز علامتك التجارية.",
  openGraph: {
    title: "تصميم الهوية والمحتوى | قمة للتسويق والبرمجة",
    description: "خدمات تصميم الهوية البصرية المتكاملة، الشعارات، دليل الهوية، وتصميم المحتوى الإعلاني المبتكر لتعزيز علامتك التجارية.",
  },
};

export default function BrandingPage() {
  return (
    <>
      <Header />
      <main>
        <BrandingContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
