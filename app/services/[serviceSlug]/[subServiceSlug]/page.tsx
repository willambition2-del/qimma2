import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Phone, Sparkles } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getAllServices, getSubService } from "@/data/services";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface PageProps {
  params: Promise<{
    serviceSlug: string;
    subServiceSlug: string;
  }>;
}

export async function generateStaticParams() {
  const services = getAllServices();
  const params: { serviceSlug: string; subServiceSlug: string }[] = [];

  for (const service of services) {
    for (const sub of service.subServices) {
      params.push({
        serviceSlug: service.slug,
        subServiceSlug: sub.slug,
      });
    }
  }

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { serviceSlug, subServiceSlug } = await params;
  const match = getSubService(serviceSlug, subServiceSlug);
  if (!match) return {};

  const { service, subService } = match;

  return {
    title: `${subService.title} | ${service.title} | قمة`,
    description: subService.shortDescription,
    openGraph: {
      title: `${subService.title} | ${service.title} | قمة للتسويق والبرمجة`,
      description: subService.shortDescription,
    },
    alternates: {
      canonical: `/services/${service.slug}/${subService.slug}`,
    },
  };
}

export default async function SubServicePage({ params }: PageProps) {
  const { serviceSlug, subServiceSlug } = await params;
  const match = getSubService(serviceSlug, subServiceSlug);
  if (!match) notFound();

  const { service, subService } = match;

  const whatsappMsg = `مرحبًا قمة، أرغب في طلب خدمة (${subService.title}) التابعة لـ (${service.title})`;
  const whatsappUrl = buildWhatsAppUrl(whatsappMsg);

  return (
    <>
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <PageHeader
          badge={service.title}
          title={subService.title}
          description={subService.shortDescription}
          imageSrc="/images/hero/slide-2.png"
        />

        {/* Breadcrumb Navigation */}
        <section className="bg-white border-b border-border py-4">
          <div className="container-custom flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs md:text-sm text-muted">
              <Link href="/" className="hover:text-primary transition-colors">
                الرئيسية
              </Link>
              <span>/</span>
              <Link href="/services" className="hover:text-primary transition-colors">
                خدماتنا
              </Link>
              <span>/</span>
              <Link
                href={service.href}
                className="hover:text-primary transition-colors"
              >
                {service.title}
              </Link>
              <span>/</span>
              <span className="text-foreground font-semibold">
                {subService.title}
              </span>
            </div>

            <Link
              href={service.href}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-gold transition-colors"
            >
              <span>العودة لصفحة {service.title}</span>
              <ArrowLeft className="w-3.5 h-3.5 rtl-flip" />
            </Link>
          </div>
        </section>

        {/* Details & Features Section */}
        <section className="section-padding bg-surface">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="bg-white rounded-2xl border border-border p-8 md:p-12 shadow-sm mb-12">
                  <span className="text-gold font-bold text-xs uppercase tracking-wider block mb-2">
                    نظرة شاملة
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    ماذا نقدم في خدمة {subService.title}؟
                  </h2>
                  <p className="text-muted text-base md:text-lg leading-relaxed mb-8">
                    {subService.shortDescription} نركز في قمة على تقديم حلول عملية ومتكاملة تراعي احتياج نشاطك وتساعدك على تحقيق أهدافك بأعلى جودة تقنية وتنفيذية.
                  </p>

                  {/* Features List */}
                  {subService.features && subService.features.length > 0 && (
                    <div className="pt-6 border-t border-border">
                      <h3 className="text-lg font-bold text-foreground mb-6">
                        المزايا والمواصفات المشمولة في هذه الخدمة:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {subService.features.map((feat, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-border/60"
                          >
                            <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                            <span className="text-sm font-medium text-foreground">
                              {feat}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-10 flex flex-wrap gap-4">
                    <Button href={whatsappUrl} target="_blank" variant="gold" size="lg">
                      اطلب هذه الخدمة الآن
                    </Button>
                    <Button href="/contact" variant="secondary" size="lg">
                      طلب تسعيرة مفصلة
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Parent Service Advantages */}
        {service.advantages && service.advantages.length > 0 && (
          <section className="section-padding bg-white">
            <div className="container-custom">
              <ScrollReveal>
                <SectionHeading
                  badge="الجودة والضمان"
                  title="لماذا تختار قمة لتنفيذ مشروعك؟"
                  description="فريق خبير يضمن لك معايير تسليم عالمية ودعماً مستمراً."
                />
              </ScrollReveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
                {service.advantages.slice(0, 4).map((adv, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-surface border border-border/80 flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gold/15 text-gold flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1.5">{adv.title}</h4>
                      <p className="text-xs md:text-sm text-muted leading-relaxed">
                        {adv.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="section-padding bg-primary-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          <div className="container-custom relative text-center max-w-2xl mx-auto">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                جاهز لبدء خدمة {subService.title}؟
              </h2>
              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8">
                فريقنا بانتظارك لمناقشة التفاصيل وبدء التنفيذ الفوري لتحقيق أفضل النتائج لمشروعك.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href={whatsappUrl} target="_blank" variant="gold" size="lg">
                  تواصل عبر واتساب فوراً
                </Button>
                <Button
                  href={service.href}
                  variant="secondary"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  استكشف بقية خدمات {service.title}
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
