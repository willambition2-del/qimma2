import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description: "تواصل مع شركة قمة للتسويق والبرمجة للحصول على استشارة مجانية لمشروعك التسويقي أو البرمجي القادم.",
  openGraph: {
    title: "تواصل معنا | قمة للتسويق والبرمجة",
    description: "تواصل مع شركة قمة للتسويق والبرمجة للحصول على استشارة مجانية لمشروعك التسويقي أو البرمجي القادم.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactPageContent />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
