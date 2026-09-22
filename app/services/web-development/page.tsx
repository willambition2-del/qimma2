import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/data/services";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "تصميم وتطوير المواقع الإلكترونية للشركات والمؤسسات | قمة",
  description:
    "تصميم وبرمجة مواقع ويب احترافية، مواقع تعريفية للشركات، صفحات هبوط تسويقية، ومواقع تفاعلية بأحدث التقنيات وسرعة تحميل فائقة وتوافق كامل مع الهواتف ومحركات البحث.",
  openGraph: {
    title: "تصميم وتطوير المواقع الإلكترونية | قمة للتسويق والبرمجة",
    description:
      "تصميم وبرمجة مواقع ويب احترافية، مواقع تعريفية للشركات، صفحات هبوط تسويقية، ومواقع تفاعلية بأحدث التقنيات وسرعة تحميل فائقة.",
  },
  alternates: {
    canonical: "/services/web-development",
  },
};

export default function WebDevelopmentPage() {
  const service = getServiceBySlug("web-development");
  if (!service) notFound();

  return <ServiceDetailPage service={service} />;
}
