import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SystemsSection from "@/components/sections/SystemsSection";
import MobileAppsSection from "@/components/sections/MobileAppsSection";
import WhyQimmaSection from "@/components/sections/WhyQimmaSection";
import PackagesSection from "@/components/sections/PackagesSection";
import StatsSection from "@/components/sections/StatsSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ClientsSection from "@/components/sections/ClientsSection";
import ArticlesSection from "@/components/sections/ArticlesSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <TrustBar />
        <AboutSection />
        <ServicesSection />
        <SystemsSection />
        <MobileAppsSection />
        <WhyQimmaSection />
        <PackagesSection />
        <StatsSection />
        <PortfolioSection />
        <ClientsSection />
        <ArticlesSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
