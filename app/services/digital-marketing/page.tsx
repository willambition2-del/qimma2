import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "التسويق الإلكتروني وإدارة الحملات الإعلانية | قمة",
  description:
    "حلول تسويق إلكتروني متكاملة، إدارة الحملات الإعلانية الممولة (Google, Meta, TikTok, Snapchat)، إدارة حسابات التواصل الاجتماعي، وتحسين محركات البحث SEO لزيادة مبيعاتك.",
  openGraph: {
    title: "التسويق الإلكتروني وإدارة الحملات الإعلانية | قمة للتسويق والبرمجة",
    description:
      "حلول تسويق إلكتروني متكاملة، إدارة الحملات الإعلانية الممولة، إدارة حسابات التواصل الاجتماعي، وتحسين محركات البحث SEO لزيادة مبيعاتك.",
  },
  alternates: {
    canonical: "/services/digital-marketing",
  },
};

export default function DigitalMarketingPage() {
  const service = getServiceBySlug("digital-marketing");
  if (!service) notFound();

  return <ServiceDetailPage service={service} />;
}
