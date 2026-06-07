import PageHeader from "@/components/ui/PageHeader";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Badge from "@/components/ui/Badge";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "الشروط والأحكام",
  description: "الشروط والأحكام الخاصة بالتعامل والاستخدام لموقع وخدمات شركة قمة للتسويق والبرمجة.",
  openGraph: {
    title: "الشروط والأحكام | قمة للتسويق والبرمجة",
    description: "الشروط والأحكام الخاصة بالتعامل والاستخدام لموقع وخدمات شركة قمة للتسويق والبرمجة.",
  },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* Header */}
        <PageHeader badge="الاتفاقية التنظيمية"
        title="الشروط والأحكام"
        description="تحدد هذه الاتفاقية البنود والشروط القانونية والتنظيمية لاستخدام خدمات موقع قمة للتسويق والبرمجة."
        imageSrc="/images/hero/slide-1.png" />

        {/* Content */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <ScrollReveal>
              <div className="bg-white border border-border rounded-3xl p-8 md:p-12 space-y-8 text-muted leading-relaxed">
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">1. الشروط العامة وقبول الاتفاقية</h2>
                  <p>
                    دخولك وتصفحك لموقع قمة أو طلبك لأي من خدماتنا التقنية أو التسويقية يعني موافقتك الصريحة والكاملة على هذه الشروط والأحكام. إذا كنت لا توافق على أي بند من هذه الشروط، يرجى التوقف عن استخدام الموقع والخدمات المرتبطة به.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">2. حقوق الملكية الفكرية</h2>
                  <p>
                    تظل جميع حقوق الملكية الفكرية الخاصة بالأكواد البرمجية، تصاميم المواقع والواجهات، والشعارات التي نطورها ملكًا لشركة قمة للتسويق والبرمجة حتى سداد كامل مستحقات العقد المتفق عليه. بعد السداد الكامل للمشروع، تنتقل ملكية العمل المنجز للعميل بالكامل، مع احتفاظ قمة بحق عرض العمل في معرض أعمالها ما لم يتم الاتفاق على خلاف ذلك خطيًا.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">3. التزامات العميل وتوفير البيانات</h2>
                  <p>
                    يلتزم العميل بتزويد فريق عمل قمة بكافة البيانات والشعارات والمحتويات والمواد المطلوبة لإنجاز المشروع في الأوقات المحددة. قمة للتسويق والبرمجة ليست مسؤولة عن أي تأخير في تسليم المشروع ينتج عن تأخر العميل في تقديم هذه المواد.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">4. سياسة الدفع والدفعات المالية</h2>
                  <p>
                    يتم الاتفاق على نظام الدفعات وقيمتها في العقد الفردي المبرم لكل مشروع. تبدأ الأعمال عادة بعد دفع دفعة مقدمة متفق عليها. في حال توقف العميل عن المشروع أو إلغائه بعد بدء التنفيذ الفعلي، لا تحق له استعادة الدفعة المقدمة لتغطية تكاليف جهد التصميم والتخطيط المبذول.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">5. الضمان والصيانة الفنية</h2>
                  <p>
                    نقدم ضمانًا على الأكواد والبرمجيات المنجزة ضد العيوب البرمجية لفترة محددة في العقد (تتراوح بين 30 إلى 90 يومًا). هذا الضمان لا يغطي أي مشاكل أو أعطال تنتج عن عبث أو تعديل من طرف خارجي أو عميل آخر في لوحة التحكم أو ملفات الاستضافة.
                  </p>
                </div>

                <div className="pt-6 border-t border-border text-xs text-muted/60 text-center">
                  تاريخ آخر تحديث: يونيو 2026
                </div>
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
