import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CustomSystemsContent from "./CustomSystemsContent";

export const metadata: Metadata = {
  title: "تطوير الأنظمة البرمجية المخصصة",
  description: "خدمات تصميم وتطوير الأنظمة البرمجية المخصصة كأنظمة CRM و ERP وبرامج إدارة المخزون، الحجوزات والموارد المخصصة للشركات.",
  openGraph: {
    title: "تطوير الأنظمة المخصصة | قمة للتسويق والبرمجة",
    description: "خدمات تصميم وتطوير الأنظمة البرمجية المخصصة كأنظمة CRM و ERP وبرامج إدارة المخزون، الحجوزات والموارد المخصصة للشركات.",
  },
};

export default function CustomSystemsPage() {
  return (
    <>
      <Header />
      <main>
        <CustomSystemsContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
