"use client";

import { motion } from "framer-motion";
import { 
  Lock, 
  RotateCw, 
  ExternalLink, 
  ShoppingBag, 
  Search, 
  Star, 
  Zap, 
  Headphones, 
  Sparkles,
  Smartphone,
  Info,
  Laptop
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface WebsiteItem {
  id: string;
  title: string;
  type: string;
  category: "website" | "store";
  url: string;
  displayUrl: string;
  description: string;
  isMocked?: boolean;
}

const showcaseItems: WebsiteItem[] = [
  {
    id: "mgxsa",
    title: "مجموعة إم جي إكس (MGX)",
    type: "موقع تعريفي وتسويقي",
    category: "website",
    url: "https://www.mgxsa.com/",
    displayUrl: "mgxsa.com",
    description: "موقع احترافي متكامل يعرض خدمات وحلول المجموعة الإعلانية والتسويقية بهوية بصرية مميزة."
  },
  {
    id: "cleanshine",
    title: "شركة كلين شاين للخدمات",
    type: "موقع حجز خدمات التنظيف",
    category: "website",
    url: "https://cleanshine.vercel.app/",
    displayUrl: "cleanshine.vercel.app",
    description: "تصميم وتطوير موقع إلكتروني تعريفي حديث لخدمات التنظيف يتيح للعملاء حجز المواعيد واستكشاف باقات الخدمات بسهولة."
  },
  {
    id: "rebunesastore",
    title: "متجر ريبون الإلكتروني",
    type: "متجر إلكتروني متكامل",
    category: "store",
    url: "https://rebunesastore.com/",
    displayUrl: "rebunesastore.com",
    description: "متجر إلكتروني حديث لبراند ريبون الشهير للأجهزة المنزلية وأدوات التجميل يتميز بالسرعة وتجربة التسوق السلسة.",
    isMocked: true
  }
];

export default function WebsitesShowcaseSection() {
  return (
    <section id="showcase" className="section-padding-lg bg-surface bg-dots-pattern overflow-hidden border-y border-border">
      <div className="container-custom">
        <ScrollReveal>
          <SectionHeading
            badge="أعمالنا التفاعلية"
            title="مواقع ومتاجر عملائنا في متناول يدك"
            description="تصفح مباشرة نماذج حية وتفاعلية من أعمالنا في تطوير المواقع التعريفية والمتاجر الإلكترونية وكأنك تتصفحها من شاشة هاتفك."
            centered={true}
          />
        </ScrollReveal>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mt-12">
          {showcaseItems.map((item, idx) => (
            <ScrollReveal key={item.id} delay={idx * 0.15} className="h-full">
              <div className="flex flex-col items-center p-6 bg-white rounded-2xl border border-border/80 shadow-sm hover:shadow-md transition-all duration-300 h-full group">
                
                {/* Smartphone Container */}
                <div className="relative w-[210px] aspect-[9/19] rounded-[36px] border-[8px] border-neutral-900 bg-neutral-950 overflow-hidden shadow-elevated mb-6 shrink-0 transition-transform duration-500 hover:scale-[1.03]">
                  
                  {/* Speaker & Camera Notch (Dynamic Island style) */}
                  <div className="absolute top-0 inset-x-0 flex justify-center z-30">
                    <div className="w-16 h-3.5 bg-neutral-900 rounded-b-xl flex items-center justify-center gap-1.5">
                      <div className="w-6 h-0.5 bg-neutral-800 rounded-full" />
                      <div className="w-1.5 h-1.5 bg-neutral-800 rounded-full" />
                    </div>
                  </div>

                  {/* Glass Gloss Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] pointer-events-none z-20" />

                  {/* Browser Address Bar */}
                  <div className="absolute top-5 inset-x-0 px-2 z-25 bg-neutral-950/90 pt-1 pb-1.5 border-b border-neutral-800/30">
                    <div className="bg-neutral-900/90 py-1 px-2.5 rounded-lg flex items-center justify-between border border-neutral-800">
                      <Lock className="w-2 h-2 text-emerald-500 shrink-0" />
                      <span className="text-[7.5px] font-medium text-neutral-400 truncate max-w-[120px] font-sans direction-ltr select-none">
                        {item.displayUrl}
                      </span>
                      <RotateCw className="w-2.5 h-2.5 text-neutral-600 shrink-0" />
                    </div>
                  </div>

                  {/* Phone Screen Area */}
                  <div className="absolute inset-0 pt-12 pb-4 bg-white overflow-hidden select-none">
                    {item.isMocked ? (
                      /* Simulated Store Screen (Rebunes Store) */
                      <div className="h-full flex flex-col bg-slate-50 overflow-y-auto scrollbar-none text-right text-foreground font-sans">
                        
                        {/* Store Header */}
                        <div className="bg-primary-dark text-white p-3 flex justify-between items-center shadow-sm shrink-0">
                          <div className="flex items-center gap-1.5">
                            <span className="relative">
                              <ShoppingBag className="w-3.5 h-3.5 text-gold" />
                              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-rose-500 text-white rounded-full text-[6px] flex items-center justify-center">٣</span>
                            </span>
                            <Search className="w-3.5 h-3.5 text-neutral-300" />
                          </div>
                          <span className="text-xs font-bold tracking-wide text-gold">متجر ريبون</span>
                        </div>

                        {/* Store Promo Banner */}
                        <div className="p-2 shrink-0">
                          <div className="bg-gradient-to-l from-gold to-primary-dark text-white p-2.5 rounded-lg text-center shadow-xs">
                            <div className="text-[9px] font-bold">خصومات ريبون الكبرى 🌟</div>
                            <div className="text-[7px] text-white/90 mt-0.5">أجهزة التجميل والمنزل بخصم 40%</div>
                            <div className="inline-block bg-white/20 text-[6px] px-1 py-0.5 rounded-md mt-1 font-bold">كود: REBUNE</div>
                          </div>
                        </div>

                        {/* Store Categories */}
                        <div className="px-2 mb-2 shrink-0">
                          <div className="text-[8px] font-bold text-slate-700 mb-1.5">الأقسام</div>
                          <div className="grid grid-cols-4 gap-1">
                            {[
                              { label: "أجهزة شعر", icon: Sparkles },
                              { label: "أجهزة مطبخ", icon: Zap },
                              { label: "أجهزة منزلية", icon: ShoppingBag },
                              { label: "جديدنا", icon: Star },
                            ].map((cat, cIdx) => (
                              <div key={cIdx} className="bg-white p-1 rounded-md border border-slate-100 flex flex-col items-center justify-center gap-0.5">
                                <cat.icon className="w-3 h-3 text-primary" />
                                <span className="text-[6px] font-bold text-slate-600">{cat.label}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Store Featured Products */}
                        <div className="px-2 flex-grow">
                          <div className="text-[8px] font-bold text-slate-700 mb-1.5 flex justify-between items-center">
                            <span className="text-[6px] text-primary font-semibold">عرض الكل</span>
                            <span>الأكثر طلباً 🔥</span>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-2">
                            {[
                              {
                                name: "مصفف شعر ريبون 2 في 1",
                                price: "١٩٩ ر.س",
                                oldPrice: "٣٩٩ ر.س",
                                rating: "٤.٩",
                                icon: Sparkles,
                                color: "from-pink-400 to-rose-600"
                              },
                              {
                                name: "محضرة قهوة ريبون 15 بار",
                                price: "٢٤٩ ر.س",
                                oldPrice: "٤٩٩ ر.س",
                                rating: "٤.٨",
                                icon: Zap,
                                color: "from-purple-500 to-indigo-600"
                              }
                            ].map((prod, pIdx) => (
                              <div key={pIdx} className="bg-white p-1.5 rounded-lg border border-slate-100 shadow-2xs flex flex-col justify-between">
                                {/* CSS Thumbnail */}
                                <div className={`aspect-square w-full rounded-md bg-gradient-to-br ${prod.color} flex items-center justify-center text-white mb-1.5 relative overflow-hidden`}>
                                  <prod.icon className="w-6 h-6 drop-shadow-md" />
                                  <span className="absolute top-0.5 right-0.5 bg-rose-500 text-white text-[5px] px-1 rounded-sm font-bold">أفضل سعر</span>
                                </div>
                                <h4 className="text-[7px] font-bold text-slate-800 line-clamp-1 mb-0.5">{prod.name}</h4>
                                <div className="flex items-center justify-between text-[6px] mb-1">
                                  <span className="text-amber-500 font-bold">⭐ {prod.rating}</span>
                                  <span className="text-slate-400 line-through">{prod.oldPrice}</span>
                                </div>
                                <div className="text-[7.5px] font-bold text-primary mb-1">{prod.price}</div>
                                <button className="w-full bg-primary-dark text-white text-[6px] py-1 rounded-md font-bold cursor-pointer hover:bg-gold transition-colors duration-200">
                                  أضف للسلة
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Interactive overlay for mockup */}
                        <div className="absolute inset-0 bg-primary-dark/80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center z-10">
                          <Sparkles className="w-6 h-6 text-gold mb-2 animate-bounce" />
                          <h4 className="text-xs font-bold text-white mb-1">متجر ريبون الإلكتروني</h4>
                          <p className="text-[9px] text-white/80 mb-3 leading-relaxed">الموقع محمي ضد التضمين الخارجي. انقر لتجربة المتجر المباشر على سلة</p>
                          <a 
                            href={item.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-gold text-white text-[8px] font-bold py-1.5 px-3 rounded-lg flex items-center gap-1 shadow-md hover:scale-105 transition-transform"
                          >
                            <span>فتح المتجر</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        </div>

                      </div>
                    ) : (
                      /* Live Iframe - Scaled to render actual mobile layout in a tiny space */
                      <div className="w-full h-full relative overflow-hidden" style={{ direction: "ltr" }}>
                        <iframe
                          src={item.url}
                          title={item.title}
                          className="absolute left-0 top-0 border-0 pointer-events-auto"
                          style={{
                            width: "375px",
                            height: "733px",
                            transform: "scale(0.5173)",
                            transformOrigin: "top left",
                          }}
                          sandbox="allow-scripts allow-same-origin allow-popups"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>

                  {/* Home Indicator line */}
                  <div className="absolute bottom-1.5 inset-x-0 flex justify-center z-30 pointer-events-none">
                    <div className="w-16 h-1 bg-neutral-900 rounded-full" />
                  </div>
                </div>

                {/* Content Block */}
                <div className="text-center flex-grow flex flex-col justify-between w-full">
                  <div>
                    <div className="flex justify-center mb-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                        item.category === "store" 
                          ? "bg-amber-50 text-amber-600 border-amber-200" 
                          : "bg-blue-50 text-blue-600 border-blue-200"
                      }`}>
                        {item.type}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed mb-5 px-2">
                      {item.description}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-auto pt-2 w-full">
                    <Button
                      variant="secondary"
                      size="sm"
                      href={item.url}
                      target="_blank"
                      fullWidth={true}
                      icon={<ExternalLink className="w-3 h-3 rtl-flip" />}
                      iconPosition="end"
                    >
                      زيارة الموقع
                    </Button>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
