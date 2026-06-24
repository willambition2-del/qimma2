"use client";

import PageHeader from "@/components/ui/PageHeader";
import Image from "next/image";
import { 
  Users, 
  Target, 
  Award, 
  Lightbulb, 
  Compass, 
  Eye, 
  ChevronLeft,
  CheckCircle2,
  Briefcase,
  Calendar,
  Headphones
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { stats } from "@/data/stats";

const values = [
  {
    icon: Target,
    title: "التركيز على النتائج",
    description: "نعمل على تحقيق أهداف واضحة وقابلة للقياس في كل مشروع.",
  },
  {
    icon: Users,
    title: "شراكة حقيقية",
    description: "نتعامل مع كل عميل كشريك ونهتم بنجاح مشروعه.",
  },
  {
    icon: Award,
    title: "جودة لا تتنازل",
    description: "نلتزم بأعلى معايير الجودة في التطوير والبرمجة والحلول الرقمية.",
  },
  {
    icon: Lightbulb,
    title: "ابتكار مستمر",
    description: "نتابع أحدث التقنيات والأساليب لتقديم حلول متقدمة.",
  },
];

const teamHighlights = [
  "نحن شركة تطوير برمجيات رائدة نضم مبرمج تطبيقات ومبرمج مواقع لتلبية احتياجاتكم",
  "نركز كـ شركة برمجيات على تقديم أفضل تطوير البرمجيات وحلول الويب المتكاملة",
  "مبرمج تطبيقات سعودي متوفر لمتابعة وإدارة المشاريع وضمان الجودة البرمجية",
  "دعم فني مستمر وصيانة دورية تقدمها أفضل شركات البرمجة",
  "خبرة تزيد عن 5 سنوات في السوق السعودي والخليجي كـ وكالة تسويق وشركة تطبيقات موثوقة",
  "أكثر من 150 مشروعًا ناجحًا في البرمجه والتطبيقات وتصميم تطبيقات جوال",
];

const milestoneTitles = [
  "حلول برمجية متكاملة",
  "التركيز على الابتكار",
  "كفاءات وخبرات سعودية",
  "دعم فني وضمان مستمر",
  "ريادة إقليمية متنامية",
  "سجل حافل بالنجاحات"
];

const statIcons = [Briefcase, Users, Calendar, Headphones];

export default function AboutPageContent() {
  return (
    <>
      {/* Hero Banner */}
      <PageHeader 
        badge="تعرّف علينا"
        title={<>شريكك نحو <span className="text-gold">النجاح الرقمي</span></>}
        description="فريق احترافي يساعدك على تحقيق المبيعات عبر الأونلاين. نضع بين يديك خبرات تسويقية وبرمجية متكاملة لمساعدتك على تطوير أعمالك."
        imageSrc="/images/hero/slide-1.png" 
      />

      {/* Story Section */}
      <section className="section-padding bg-gradient-to-b from-white to-surface">
        <div className="container-custom">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="gold-accent-line mb-6" />
                <h2 className="text-3xl font-extrabold text-foreground mb-6 leading-tight">
                  قصتنا في قمة <span className="text-gold font-inter">Qimma</span>
                </h2>
                <p className="text-muted leading-relaxed mb-6 text-base md:text-lg">
                  بدأنا في قمة بهدف واضح: مساعدة الشركات والمشاريع على بناء حضور رقمي قوي عبر تقديم خدمات تسويق الكتروني متكاملة وابتكار حلول برمجية متميزة. نحن نجمع بين خبرة وكالة تسويق متخصصة وكفاءة شركة تطوير برمجيات محترفة.
                </p>
                <p className="text-muted leading-relaxed mb-8 text-sm md:text-base">
                  على مدار أكثر من 5 سنوات، عملنا مع أكثر من 90 عميلًا كـ مكتب برمجة موثوق وأنجزنا أكثر من 150 مشروعًا في مختلف المجالات، من برمجة مواقع الويب وتصميم تطبيقات الجوال إلى تطوير الأنظمة المخصصة وإطلاق المتاجر الإلكترونية الناجحة.
                </p>
                
                {/* Stats Grid - Premium Symmetrical Redesign */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {stats.map((stat, idx) => {
                    const IconComponent = statIcons[idx] || Briefcase;
                    return (
                      <div
                        key={idx}
                        className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-white to-zinc-50/50 p-5 flex items-center gap-4 transition-all duration-300 hover:border-gold/30 hover:shadow-md group"
                      >
                        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-l from-primary via-gold to-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center" />
                        
                        {/* Icon Container with hover effect */}
                        <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        
                        <div className="text-start">
                          <div className="font-inter text-xl md:text-2xl font-extrabold text-foreground group-hover:text-primary transition-colors duration-300">
                            {stat.value}{stat.suffix || (stat.value > 10 ? "+" : "")}
                          </div>
                          <div className="text-xs text-muted font-semibold mt-0.5">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Interactive Performance Dashboard Card (CSS/SVG only) */}
              <div className="relative group">
                {/* Background decorative glows */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-gold via-primary to-gold opacity-20 blur-lg group-hover:opacity-45 transition duration-1000 group-hover:duration-200" />
                
                {/* Main Glassmorphic Panel */}
                <div className="relative rounded-3xl border border-gold/25 bg-white/90 backdrop-blur-xl p-8 shadow-xl">
                  {/* Panel Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-zinc-100">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-sm font-bold text-foreground">مؤشرات الأداء الرقمي لقسم التطوير</span>
                    </div>
                    <span className="text-xs font-bold text-gold bg-gold-soft px-3 py-1 rounded-full font-inter">Qimma Engine v2.5</span>
                  </div>

                  {/* Metrics List */}
                  <div className="space-y-6 pt-6">
                    {/* Metric 1 */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-bold text-foreground">معدل نجاح وإتمام المشاريع</span>
                        <span className="text-sm font-bold text-primary font-inter">98.4%</span>
                      </div>
                      <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full w-[98%] origin-left" />
                      </div>
                    </div>

                    {/* Metric 2 */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-bold text-foreground">سرعة تحميل المواقع وأداء الأنظمة</span>
                        <span className="text-sm font-bold text-gold font-inter">99.1%</span>
                      </div>
                      <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gold rounded-full w-[99%] origin-left" />
                      </div>
                    </div>

                    {/* Metric 3 */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-bold text-foreground">نسبة رضا العملاء والمتابعة المستمرة</span>
                        <span className="text-sm font-bold text-emerald-600 font-inter">100%</span>
                      </div>
                      <div className="w-full h-2 bg-zinc-100 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full w-[100%] origin-left" />
                      </div>
                    </div>
                  </div>

                  {/* Visual Chart Overlay */}
                  <div className="mt-8 pt-6 border-t border-zinc-100">
                    <div className="text-xs font-bold text-muted mb-4 text-start">مسار نمو وتوسع أعمال قمة</div>
                    
                    {/* SVG Graphic chart */}
                    <svg viewBox="0 0 400 100" className="w-full h-16 overflow-visible">
                      <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#1C3A7E" />
                          <stop offset="50%" stopColor="#C2A04E" />
                          <stop offset="100%" stopColor="#25D366" />
                        </linearGradient>
                      </defs>
                      {/* Lines */}
                      <path 
                        d="M 10,80 Q 80,60 150,40 T 290,20 T 390,10" 
                        fill="none" 
                        stroke="url(#chartGrad)" 
                        strokeWidth="4" 
                        strokeLinecap="round" 
                      />
                      {/* Glow circles */}
                      <circle cx="10" cy="80" r="5" fill="#1C3A7E" />
                      <circle cx="150" cy="40" r="5" fill="#C2A04E" />
                      <circle cx="290" cy="20" r="5" fill="#C2A04E" />
                      <circle cx="390" cy="10" r="6" fill="#25D366" className="animate-pulse" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* New Vision & Mission - Dark Glassmorphism Section */}
      <section className="section-padding bg-gradient-to-br from-primary-dark via-primary to-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-light/5 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ScrollReveal delay={0.1}>
              <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 card-hover transition-all duration-300 group hover:bg-white/10">
                <div className="w-14 h-14 rounded-2xl bg-gold/20 text-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gold">رؤيتنا</h3>
                <p className="text-white/80 leading-relaxed text-sm md:text-base">
                  أن نكون الشريك التقني والتسويقي الأول والأنضج في المملكة العربية السعودية والخليج، عبر تمكين المشاريع المتوسطة والكبيرة وبناء علامات تجارية تفوق تطلعات السوق وتواكب رؤية 2030 للتحول الرقمي.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 card-hover transition-all duration-300 group hover:bg-white/10">
                <div className="w-14 h-14 rounded-2xl bg-gold/20 text-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Compass className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gold">رسالتنا</h3>
                <p className="text-white/80 leading-relaxed text-sm md:text-base">
                  تقديم حلول برمجية عالية الكفاءة ودعم فني ممتد بجانب استراتيجيات تسويق رقمي مدروسة تعتمد على العوائد الحقيقية، لتسريع نمو أعمال شركائنا وبناء علاقات ثقة مستمرة معهم.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-surface relative">
        <div className="container-custom">
          <SectionHeading
            title="قيمنا ومبادئنا"
            description="المبادئ التي نلتزم بها في كل مشروع نعمل عليه لنضمن الريادة والتميز."
            badge="مبادئ النجاح"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 0.08}>
                  <div className="relative group overflow-hidden bg-white rounded-2xl p-7 border border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 hover:border-gold/30 h-full flex flex-col items-center text-center">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-gold to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Icon Container with glowing effect on hover */}
                    <div className="w-16 h-16 mb-5 flex items-center justify-center rounded-2xl bg-primary-light text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                      <Icon className="w-7 h-7 transition-transform duration-500 group-hover:rotate-12" />
                    </div>
                    
                    <h3 className="font-bold text-foreground mb-3 text-lg group-hover:text-primary transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Highlights - Interactive Timeline Roadmap */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            title="لماذا فريق قمة؟"
            description="مزايا وخصائص تجعلنا الخيار الأمثل والأنسب لأعمالك"
            badge="مزايا تنافسية"
          />
          
          <div className="relative border-r-2 border-gold/20 pr-6 md:pr-10 space-y-8 max-w-4xl mx-auto my-12">
            {teamHighlights.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.08}>
                <div className="relative group">
                  {/* Indicator dot */}
                  <div className="absolute -right-[31px] md:-right-[47px] top-2.5 w-4 h-4 rounded-full bg-white border-4 border-gold shadow-md group-hover:bg-gold group-hover:scale-125 transition-all duration-300" />
                  
                  {/* Card content */}
                  <div className="bg-gradient-to-l from-white to-surface rounded-2xl border border-border p-6 shadow-sm hover:shadow-md hover:border-gold/25 hover:-translate-y-0.5 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold font-inter text-gold bg-gold-soft px-3 py-1 rounded-full">
                        0{idx + 1}
                      </span>
                      <h4 className="font-bold text-foreground text-base md:text-lg group-hover:text-primary transition-colors duration-300">
                        {milestoneTitles[idx]}
                      </h4>
                    </div>
                    <p className="text-sm md:text-base text-muted leading-relaxed pr-2">
                      {item}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button 
              href="/contact" 
              variant="primary" 
              size="lg"
              icon={<ChevronLeft className="w-5 h-5 rtl-flip" />}
              iconPosition="end"
            >
              تواصل معنا الآن للبدء
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
