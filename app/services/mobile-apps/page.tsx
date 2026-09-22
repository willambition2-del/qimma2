import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "تصميم وتطوير تطبيقات الجوال لنظامي iOS و Android | قمة",
  description:
    "برمجة تطبيقات الهواتف الذكية الأصلية (Swift, Kotlin) والهجينة (Flutter, React Native)، تطبيقات المتاجر، الحجز، وتطبيقات الأنظمة الإدارية ونشرها على App Store و Google Play.",
  openGraph: {
    title: "تصميم وتطوير تطبيقات الجوال | قمة للتسويق والبرمجة",
    description:
      "تطوير وتصميم تطبيقات الهواتف الذكية لنظامي iOS و Android بأحدث التقنيات وأعلى معايير الأداء والاعتماد في المتاجر.",
  },
  alternates: {
    canonical: "/services/mobile-apps",
  },
};

export default function MobileAppsPage() {
  const service = getServiceBySlug("mobile-apps");
  if (!service) notFound();

  return <ServiceDetailPage service={service} />;
}
