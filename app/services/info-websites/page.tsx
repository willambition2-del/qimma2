import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import InfoWebsitesContent from "./InfoWebsitesContent";

export const metadata: Metadata = {
  title: "برمجة مواقع الويب وتطوير مواقع الشركات التعريفية",
  description: "خدمات تصميم وبرمجة مواقع الويب الاحترافية للشركات والمؤسسات. نوفر أفضل مبرمج مواقع لتصميم وبرمجة موقع الكتروني متكامل وجذاب متوافق مع كافة الأجهزة.",
  openGraph: {
    title: "برمجة مواقع الويب وتطوير مواقع الشركات | قمة للتسويق والبرمجة",
    description: "خدمات تصميم وبرمجة مواقع الويب الاحترافية وتطوير مواقع تعريفية تعزز حضورك الرقمي في السعودية.",
  },
};

export default function InfoWebsitesPage() {
  return (
    <>
      <Header />
      <main>
        <InfoWebsitesContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
