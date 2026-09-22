import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "تطوير الأنظمة البرمجية السحابية وإدارة العمليات التشغيلية | قمة",
  description:
    "برمجة وتطوير أنظمة سحابية مخصصة، أنظمة إدارة العيادات، المدارس، الموارد البشرية HR، المخزون، الحجز، العقارات، ونقاط البيع POS المتوافقة مع هيئة الزكاة والضريبة والجمارك.",
  openGraph: {
    title: "تطوير الأنظمة البرمجية المخصصة | قمة للتسويق والبرمجة",
    description:
      "برمجة وتطوير أنظمة سحابية مخصصة لإدارة العمليات التشغيلية والعيادات والمدارس والمخزون ونقاط البيع.",
  },
  alternates: {
    canonical: "/services/systems",
  },
};

export default function SystemsPage() {
  const service = getServiceBySlug("systems");
  if (!service) notFound();

  return <ServiceDetailPage service={service} showSystemDemo={true} />;
}
