import PageHeader from "@/components/ui/PageHeader";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Badge from "@/components/ui/Badge";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "سياسة الخصوصية",
  description: "سياسة الخصوصية الخاصة بشركة قمة للتسويق والبرمجة — نلتزم بحفظ وسرية بيانات عملائنا وزوارنا.",
  openGraph: {
    title: "سياسة الخصوصية | قمة للتسويق والبرمجة",
    description: "سياسة الخصوصية الخاصة بشركة قمة للتسويق والبرمجة — نلتزم بحفظ وسرية بيانات عملائنا وزوارنا.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        {/* Header */}
        <PageHeader badge="الأمان والسرية"
        title="سياسة الخصوصية"
        description="نهتم بخصوصية بياناتك وسريتها. يوضح هذا المستند كيفية جمع معلوماتك واستخدامها وحمايتها."
        imageSrc="/images/hero/slide-2.png" />

        {/* Content */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <ScrollReveal>
              <div className="bg-white border border-border rounded-3xl p-8 md:p-12 space-y-8 text-muted leading-relaxed">
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">1. مقدمة وتعهد الخصوصية</h2>
                  <p>
                    مرحبًا بكم في موقع شركة قمة للتسويق والبرمجة. نحن نتعهد بالكامل باحترام وحماية خصوصية وأمان جميع بيانات زوارنا وعملائنا. في هذا البيان، نشرح القواعد التي نتبعها في التعامل مع البيانات الشخصية التي نقوم بجمعها عبر هذا الموقع أو القنوات الرقمية التابعة لنا.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">2. ما هي البيانات التي نجمعها؟</h2>
                  <p>
                    نقوم بجمع بيانات محددة عندما تتفاعل معنا عبر نموذج التواصل أو الواتساب، بما في ذلك:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-2 pr-4">
                    <li>الاسم الشخصي أو اسم الشركة.</li>
                    <li>رقم الهاتف ورمز الدولة للتواصل.</li>
                    <li>البريد الإلكتروني المخصص للاتصال.</li>
                    <li>تفاصيل ونوع الخدمة البرمجية أو التسويقية المطلوبة.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">3. استخدام البيانات وتطوير الخدمات</h2>
                  <p>
                    نستخدم هذه البيانات حصريًا من أجل:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-2 pr-4">
                    <li>التواصل معك لمناقشة تفاصيل المشاريع وتوفير الاستشارات.</li>
                    <li>تقديم عروض الأسعار والتحليلات الفنية والمالية لطلبك.</li>
                    <li>تحسين تجربة تصفح موقعنا ومتابعة جودة خدماتنا.</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">4. مشاركة وسرية البيانات</h2>
                  <p>
                    نحن لا نبيع أو نقوم بتأجير أو مشاركة بياناتك الشخصية مع أي طرف ثالث على الإطلاق. تظل بياناتك محفوظة بسرية تامة ولا تتاح إلا للموظفين المعنيين بخدمتك داخل قمة للتسويق والبرمجة.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">5. التغييرات في سياسة الخصوصية</h2>
                  <p>
                    قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر لتعكس أي تغييرات تقنية أو تنظيمية في كيفية التعامل مع البيانات. ننصح بمراجعة هذه الصفحة بشكل دوري لمعرفة أي تحديثات.
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
