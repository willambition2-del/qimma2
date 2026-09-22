import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "تصميم وتطوير المتاجر الإلكترونية (سلة، زد، ووكومرس، برمجة خاصة) | قمة",
  description:
    "إنشاء وتطوير متاجر إلكترونية احترافية على منصة سلة، زد، ووكومرس، ومتاجر مخصصة، مع ربط بوابات الدفع (مدى، Apple Pay، تابي، تمارا) وشركات الشحن لزيادة مبيعاتك.",
  openGraph: {
    title: "تصميم وتطوير المتاجر الإلكترونية | قمة للتسويق والبرمجة",
    description:
      "إنشاء وتطوير متاجر إلكترونية احترافية على سلة، زد، وووكومرس، مع ربط بوابات الدفع وشركات الشحن لزيادة مبيعاتك.",
  },
  alternates: {
    canonical: "/services/ecommerce",
  },
};

export default function EcommercePage() {
  const service = getServiceBySlug("ecommerce");
  if (!service) notFound();

  return <ServiceDetailPage service={service} />;
}
