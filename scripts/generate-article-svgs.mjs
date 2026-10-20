import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/images/articles');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const svgs = [
  {
    slug: 'best-marketing-agencies-saudi-2026',
    category: 'التسويق الرقمي',
    title: 'أفضل 5 شركات تسويق إلكتروني في السعودية',
    badge: 'مقارنة 2026',
    iconType: 'marketing'
  },
  {
    slug: 'best-web-design-companies-saudi-2026',
    category: 'تصميم المواقع',
    title: 'أفضل 5 شركات تصميم مواقع في السعودية',
    badge: 'مقارنة الجودة والتكلفة',
    iconType: 'web'
  },
  {
    slug: 'best-mobile-app-companies-saudi-2026',
    category: 'برمجة التطبيقات',
    title: 'أفضل 5 شركات برمجة تطبيقات الجوال',
    badge: 'تطبيقات iOS وAndroid',
    iconType: 'apps'
  },
  {
    slug: 'best-ecommerce-developers-saudi-2026',
    category: 'المتاجر الإلكترونية',
    title: 'أفضل 5 شركات تصميم متاجر إلكترونية',
    badge: 'سلة وزد والمتاجر المخصصة',
    iconType: 'ecommerce'
  },
  {
    slug: 'erp-software-partners-saudi-2026',
    category: 'الأنظمة الإدارية',
    title: '5 شركات وحلول لتطوير ERP والأنظمة الإدارية',
    badge: 'حلول الشركات السعودية',
    iconType: 'erp'
  },
  {
    slug: 'best-seo-agencies-saudi-2026',
    category: 'تحسين محركات البحث',
    title: 'أفضل 5 شركات SEO في السعودية',
    badge: 'معايير تصدر Google',
    iconType: 'seo'
  },
  {
    slug: 'digital-marketing-cost-saudi-2026',
    category: 'التسويق الرقمي',
    title: 'كم تكلفة التسويق الإلكتروني في السعودية؟',
    badge: 'دليل الميزانية والعقود',
    iconType: 'calculator'
  },
  {
    slug: 'how-to-choose-marketing-agency-saudi',
    category: 'التسويق الرقمي',
    title: 'كيف تختار شركة تسويق إلكتروني في السعودية؟',
    badge: 'قائمة فحص قبل التعاقد',
    iconType: 'checklist'
  },
  {
    slug: 'salla-seo-guide-saudi',
    category: 'تحسين محركات البحث',
    title: 'SEO متاجر سلة: دليل تصدر المنتجات والتصنيفات',
    badge: 'دليل عملي لمحركات البحث',
    iconType: 'salla-seo'
  },
  {
    slug: 'google-ads-vs-snapchat-saudi',
    category: 'الإعلانات الرقمية',
    title: 'إعلانات Google أم Snapchat في السعودية؟',
    badge: 'مقارنة قنوات التحويل',
    iconType: 'ads-compare'
  },
  {
    slug: 'salla-store-development-cost-2026',
    category: 'المتاجر الإلكترونية',
    title: 'كم تكلفة تصميم متجر سلة احترافي في السعودية؟',
    badge: 'عناصر التكلفة والتجهيز',
    iconType: 'store-cost'
  },
  {
    slug: 'salla-vs-zid-saudi-2026',
    category: 'المتاجر الإلكترونية',
    title: 'سلة أم زد في السعودية 2026؟',
    badge: 'مقارنة عملية لاختيار المنصة',
    iconType: 'salla-zid'
  },
  {
    slug: 'ecommerce-compliance-saudi-checklist',
    category: 'المتاجر الإلكترونية',
    title: 'إنشاء متجر إلكتروني في السعودية: الامتثال والتشغيل',
    badge: 'اشتراطات وزارة التجارة',
    iconType: 'compliance'
  },
  {
    slug: 'corporate-website-cost-saudi',
    category: 'تصميم المواقع',
    title: 'كم تكلفة تصميم موقع شركة في السعودية؟',
    badge: 'عناصر السعر والعقود',
    iconType: 'web-cost'
  },
  {
    slug: 'wordpress-vs-custom-web-development',
    category: 'تصميم المواقع',
    title: 'WordPress أم برمجة مخصصة لموقع شركتك؟',
    badge: 'مقارنة عملية قبل الاختيار',
    iconType: 'wp-vs-custom'
  },
  {
    slug: 'mobile-app-development-cost-saudi-2026',
    category: 'برمجة التطبيقات',
    title: 'كم تكلفة برمجة تطبيق جوال في السعودية؟',
    badge: 'من الفكرة حتى النشر',
    iconType: 'app-cost'
  },
  {
    slug: 'flutter-vs-native-app-development',
    category: 'برمجة التطبيقات',
    title: 'Flutter أم Native؟ اختيار تقنية التطبيق المناسبة',
    badge: 'مقارنة الأداء والتكلفة',
    iconType: 'flutter-native'
  },
  {
    slug: 'custom-erp-vs-ready-made-software',
    category: 'الأنظمة الإدارية',
    title: 'نظام ERP جاهز أم برمجة نظام مخصص؟',
    badge: 'قرار للشركات السعودية',
    iconType: 'erp-compare'
  },
  {
    slug: 'zatca-pos-inventory-integration-saudi-2026',
    category: 'الأنظمة الإدارية',
    title: 'ربط نقاط البيع والمخزون بالفوترة الإلكترونية ZATCA',
    badge: 'المرحلة الثانية 2026',
    iconType: 'zatca'
  },
  {
    slug: 'whatsapp-crm-automation-saudi-business',
    category: 'الأتمتة والأنظمة',
    title: 'ربط واتساب للأعمال بنظام CRM للشركات',
    badge: 'دليل الأتمتة والمبيعات',
    iconType: 'whatsapp-crm'
  }
];

function getVisualElements(type) {
  switch (type) {
    case 'marketing':
      return `
        <!-- Marketing Chart & Target -->
        <circle cx="850" cy="315" r="140" fill="#E8D8C7" opacity="0.4" />
        <circle cx="850" cy="315" r="95" fill="none" stroke="#AD8665" stroke-width="6" stroke-dasharray="12 8" />
        <circle cx="850" cy="315" r="50" fill="#283831" />
        <circle cx="850" cy="315" r="16" fill="#AD8665" />
        <!-- Trend line -->
        <path d="M720 380 L790 330 L840 350 L910 260 L970 230" fill="none" stroke="#283831" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
        <circle cx="970" cy="230" r="10" fill="#AD8665" />
      `;
    case 'web':
      return `
        <!-- Browser & Wireframe -->
        <rect x="700" y="190" width="320" height="230" rx="16" fill="#FFFFFF" stroke="#E9E4DC" stroke-width="4" filter="drop-shadow(0 10px 25px rgba(40,56,49,0.08))" />
        <rect x="700" y="190" width="320" height="42" rx="16" fill="#F3EEE7" />
        <circle cx="730" cy="211" r="5" fill="#AD8665" />
        <circle cx="745" cy="211" r="5" fill="#E8D8C7" />
        <circle cx="760" cy="211" r="5" fill="#E9E4DC" />
        <rect x="730" y="255" width="160" height="18" rx="6" fill="#283831" />
        <rect x="730" y="285" width="260" height="10" rx="4" fill="#E8D8C7" />
        <rect x="730" y="305" width="220" height="10" rx="4" fill="#E9E4DC" />
        <rect x="730" y="340" width="80" height="45" rx="8" fill="#F3EEE7" />
        <rect x="825" y="340" width="80" height="45" rx="8" fill="#F3EEE7" />
        <rect x="920" y="340" width="70" height="45" rx="8" fill="#AD8665" />
      `;
    case 'apps':
      return `
        <!-- Smartphone Frames -->
        <rect x="730" y="160" width="150" height="290" rx="28" fill="#283831" filter="drop-shadow(0 14px 28px rgba(40,56,49,0.12))" />
        <rect x="740" y="175" width="130" height="260" rx="18" fill="#FAF8F5" />
        <rect x="765" y="185" width="80" height="8" rx="4" fill="#E9E4DC" />
        <rect x="755" y="215" width="100" height="45" rx="10" fill="#AD8665" />
        <rect x="755" y="275" width="100" height="25" rx="6" fill="#F3EEE7" />
        <rect x="755" y="310" width="100" height="25" rx="6" fill="#F3EEE7" />
        <rect x="755" y="345" width="100" height="25" rx="6" fill="#F3EEE7" />
        <!-- Second phone slightly behind -->
        <rect x="870" y="200" width="140" height="250" rx="24" fill="#FFFFFF" stroke="#E9E4DC" stroke-width="4" />
        <rect x="890" y="240" width="100" height="50" rx="10" fill="#E8D8C7" />
        <rect x="890" y="310" width="100" height="20" rx="6" fill="#F3EEE7" />
      `;
    case 'ecommerce':
      return `
        <!-- Shopping Bag & Cart -->
        <rect x="750" y="220" width="200" height="210" rx="20" fill="#FFFFFF" stroke="#AD8665" stroke-width="5" filter="drop-shadow(0 10px 25px rgba(173,134,101,0.15))" />
        <path d="M800 220 C800 170, 900 170, 900 220" fill="none" stroke="#283831" stroke-width="8" stroke-linecap="round" />
        <rect x="785" y="280" width="130" height="16" rx="6" fill="#283831" />
        <rect x="800" y="310" width="100" height="10" rx="4" fill="#E8D8C7" />
        <circle cx="850" cy="370" r="24" fill="#AD8665" />
        <path d="M840 370 L848 378 L862 364" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      `;
    case 'erp':
      return `
        <!-- ERP Modules & Nodes -->
        <rect x="720" y="200" width="110" height="90" rx="12" fill="#283831" />
        <rect x="870" y="200" width="110" height="90" rx="12" fill="#AD8665" />
        <rect x="795" y="330" width="110" height="90" rx="12" fill="#FFFFFF" stroke="#283831" stroke-width="4" />
        <!-- Connectors -->
        <path d="M830 245 L870 245" stroke="#AD8665" stroke-width="4" stroke-dasharray="6 4" />
        <path d="M775 290 L825 330" stroke="#283831" stroke-width="4" />
        <path d="M925 290 L875 330" stroke="#AD8665" stroke-width="4" />
        <circle cx="850" cy="375" r="14" fill="#E8D8C7" />
      `;
    case 'seo':
      return `
        <!-- Search bar & Rank #1 -->
        <rect x="690" y="220" width="340" height="60" rx="30" fill="#FFFFFF" stroke="#E9E4DC" stroke-width="4" filter="drop-shadow(0 8px 20px rgba(40,56,49,0.06))" />
        <circle cx="735" cy="250" r="14" fill="none" stroke="#AD8665" stroke-width="4" />
        <line x1="745" y1="260" x2="757" y2="272" stroke="#AD8665" stroke-width="4" stroke-linecap="round" />
        <rect x="770" y="242" width="140" height="16" rx="6" fill="#283831" />
        <!-- Rank #1 Trophy Badge -->
        <circle cx="860" cy="360" r="55" fill="#283831" />
        <text x="860" y="375" fill="#E8D8C7" font-size="36" font-weight="bold" text-anchor="middle" font-family="sans-serif">#1</text>
      `;
    case 'calculator':
      return `
        <!-- Budget Ledger & Calculator -->
        <rect x="730" y="190" width="220" height="260" rx="20" fill="#FFFFFF" stroke="#283831" stroke-width="4" filter="drop-shadow(0 12px 24px rgba(40,56,49,0.08))" />
        <rect x="755" y="215" width="170" height="45" rx="8" fill="#F3EEE7" />
        <text x="910" y="245" fill="#AD8665" font-size="20" font-weight="bold" text-anchor="end" font-family="sans-serif">SAR 2026</text>
        <circle cx="780" cy="290" r="14" fill="#E8D8C7" />
        <circle cx="840" cy="290" r="14" fill="#E8D8C7" />
        <circle cx="900" cy="290" r="14" fill="#AD8665" />
        <circle cx="780" cy="340" r="14" fill="#E8D8C7" />
        <circle cx="840" cy="340" r="14" fill="#E8D8C7" />
        <circle cx="900" cy="340" r="14" fill="#283831" />
        <rect x="765" y="380" width="150" height="30" rx="8" fill="#283831" />
      `;
    case 'checklist':
      return `
        <!-- Checklist with Checkmarks -->
        <rect x="720" y="190" width="260" height="250" rx="16" fill="#FFFFFF" stroke="#E9E4DC" stroke-width="4" filter="drop-shadow(0 10px 25px rgba(40,56,49,0.07))" />
        <rect x="740" y="225" width="22" height="22" rx="6" fill="#AD8665" />
        <path d="M745 236 L749 240 L757 232" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" />
        <rect x="775" y="230" width="170" height="12" rx="4" fill="#283831" />
        
        <rect x="740" y="275" width="22" height="22" rx="6" fill="#AD8665" />
        <path d="M745 286 L749 290 L757 282" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" />
        <rect x="775" y="280" width="140" height="12" rx="4" fill="#283831" />

        <rect x="740" y="325" width="22" height="22" rx="6" fill="#AD8665" />
        <path d="M745 336 L749 340 L757 332" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" />
        <rect x="775" y="330" width="155" height="12" rx="4" fill="#283831" />
        
        <rect x="740" y="375" width="22" height="22" rx="6" fill="#E8D8C7" />
        <rect x="775" y="380" width="110" height="12" rx="4" fill="#E9E4DC" />
      `;
    case 'salla-seo':
      return `
        <!-- Salla Store + Google Search snippet -->
        <rect x="710" y="200" width="260" height="130" rx="14" fill="#FFFFFF" stroke="#E9E4DC" stroke-width="4" filter="drop-shadow(0 8px 20px rgba(40,56,49,0.06))" />
        <rect x="735" y="225" width="120" height="14" rx="4" fill="#AD8665" />
        <rect x="735" y="250" width="210" height="10" rx="3" fill="#283831" />
        <rect x="735" y="270" width="180" height="8" rx="3" fill="#E8D8C7" />
        <!-- Salla bag badge -->
        <circle cx="890" cy="360" r="50" fill="#AD8665" />
        <rect x="870" y="340" width="40" height="40" rx="6" fill="#FFFFFF" />
        <path d="M880 340 C880 330, 900 330, 900 340" fill="none" stroke="#AD8665" stroke-width="4" />
      `;
    case 'ads-compare':
      return `
        <!-- Google vs Snapchat Ads -->
        <rect x="700" y="210" width="130" height="190" rx="14" fill="#FFFFFF" stroke="#283831" stroke-width="3" />
        <circle cx="765" cy="255" r="22" fill="#283831" />
        <text x="765" y="263" fill="#FFFFFF" font-size="18" font-weight="bold" text-anchor="middle" font-family="sans-serif">G</text>
        <rect x="720" y="295" width="90" height="10" rx="4" fill="#AD8665" />
        <rect x="720" y="320" width="70" height="8" rx="3" fill="#E9E4DC" />

        <rect x="860" y="210" width="130" height="190" rx="14" fill="#FAF8F5" stroke="#AD8665" stroke-width="3" />
        <circle cx="925" cy="255" r="22" fill="#AD8665" />
        <path d="M915 258 C915 248, 935 248, 935 258" fill="none" stroke="#FFFFFF" stroke-width="4" />
        <rect x="880" y="295" width="90" height="10" rx="4" fill="#283831" />
        <rect x="880" y="320" width="70" height="8" rx="3" fill="#E8D8C7" />
      `;
    case 'store-cost':
      return `
        <!-- Store Setup Blueprint -->
        <rect x="710" y="190" width="260" height="240" rx="18" fill="#F3EEE7" stroke="#AD8665" stroke-width="4" stroke-dasharray="8 6" />
        <rect x="735" y="220" width="210" height="40" rx="8" fill="#FFFFFF" stroke="#E9E4DC" stroke-width="2" />
        <rect x="755" y="234" width="70" height="12" rx="4" fill="#283831" />
        <rect x="885" y="234" width="40" height="12" rx="4" fill="#AD8665" />
        
        <rect x="735" y="280" width="95" height="110" rx="10" fill="#FFFFFF" />
        <rect x="750" y="300" width="65" height="12" rx="4" fill="#283831" />
        <rect x="750" y="330" width="45" height="10" rx="3" fill="#E8D8C7" />

        <rect x="850" y="280" width="95" height="110" rx="10" fill="#FFFFFF" />
        <rect x="865" y="300" width="65" height="12" rx="4" fill="#AD8665" />
        <rect x="865" y="330" width="45" height="10" rx="3" fill="#E8D8C7" />
      `;
    case 'salla-zid':
      return `
        <!-- Balanced Scales / Comparison -->
        <path d="M840 200 L840 370" stroke="#283831" stroke-width="6" stroke-linecap="round" />
        <path d="M750 250 L930 250" stroke="#283831" stroke-width="6" stroke-linecap="round" />
        <circle cx="840" cy="200" r="10" fill="#AD8665" />
        <!-- Left Pan -->
        <path d="M750 250 L720 310 L780 310 Z" fill="#AD8665" />
        <!-- Right Pan -->
        <path d="M930 250 L900 310 L960 310 Z" fill="#283831" />
        <rect x="810" y="370" width="60" height="16" rx="4" fill="#283831" />
      `;
    case 'compliance':
      return `
        <!-- Saudi Commerce Official Shield & Seal -->
        <path d="M830 180 L920 220 L920 320 C920 380, 830 420, 830 420 C830 420, 740 380, 740 320 L740 220 Z" fill="#283831" filter="drop-shadow(0 12px 25px rgba(40,56,49,0.15))" />
        <path d="M830 200 L900 232 L900 315 C900 365, 830 398, 830 398 C830 398, 760 365, 760 315 L760 232 Z" fill="none" stroke="#AD8665" stroke-width="3" />
        <!-- Checkmark inside shield -->
        <path d="M800 295 L825 320 L870 270" fill="none" stroke="#E8D8C7" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
      `;
    case 'web-cost':
      return `
        <!-- Website Blueprint with Price Tag -->
        <rect x="710" y="190" width="260" height="210" rx="16" fill="#FFFFFF" stroke="#283831" stroke-width="4" filter="drop-shadow(0 10px 22px rgba(40,56,49,0.08))" />
        <rect x="710" y="190" width="260" height="38" rx="16" fill="#F3EEE7" />
        <circle cx="735" cy="209" r="5" fill="#AD8665" />
        <circle cx="750" cy="209" r="5" fill="#E8D8C7" />
        <!-- Price stamp badge -->
        <rect x="830" y="320" width="120" height="55" rx="12" fill="#AD8665" />
        <text x="890" y="355" fill="#FFFFFF" font-size="18" font-weight="bold" text-anchor="middle" font-family="sans-serif">SAR 2026</text>
      `;
    case 'wp-vs-custom':
      return `
        <!-- WP W vs Code Brackets < / > -->
        <circle cx="760" cy="300" r="55" fill="#283831" />
        <text x="760" y="318" fill="#E8D8C7" font-size="48" font-weight="bold" text-anchor="middle" font-family="sans-serif">W</text>
        <circle cx="910" cy="300" r="55" fill="#AD8665" />
        <text x="910" y="316" fill="#FFFFFF" font-size="34" font-weight="bold" text-anchor="middle" font-family="monospace">&lt;/&gt;</text>
      `;
    case 'app-cost':
      return `
        <!-- App Phone + Launch Rocket -->
        <rect x="720" y="190" width="140" height="250" rx="22" fill="#283831" />
        <rect x="730" y="205" width="120" height="220" rx="14" fill="#FAF8F5" />
        <!-- Rocket / Growth -->
        <path d="M890 320 C890 240, 940 220, 940 220 C940 220, 990 240, 990 320 L940 350 Z" fill="#AD8665" />
        <circle cx="940" cy="270" r="14" fill="#FAF8F5" />
        <path d="M930 350 L940 380 L950 350 Z" fill="#E8D8C7" />
      `;
    case 'flutter-native':
      return `
        <!-- Flutter Wing vs Native Device -->
        <path d="M720 220 L780 280 L740 320 L780 360 L750 390 L690 330 Z" fill="#AD8665" />
        <rect x="850" y="200" width="130" height="210" rx="20" fill="#283831" />
        <rect x="860" y="215" width="110" height="180" rx="12" fill="#FFFFFF" />
        <circle cx="915" cy="370" r="8" fill="#AD8665" />
      `;
    case 'erp-compare':
      return `
        <!-- Standard Package vs Custom Blueprint -->
        <rect x="710" y="220" width="110" height="140" rx="12" fill="#283831" />
        <rect x="730" y="245" width="70" height="12" rx="4" fill="#E8D8C7" />
        <rect x="730" y="270" width="50" height="8" rx="3" fill="#E9E4DC" />

        <rect x="860" y="200" width="120" height="170" rx="14" fill="#FFFFFF" stroke="#AD8665" stroke-width="4" stroke-dasharray="6 4" />
        <circle cx="920" cy="270" r="26" fill="#AD8665" />
        <rect x="880" y="325" width="80" height="12" rx="4" fill="#283831" />
      `;
    case 'zatca':
      return `
        <!-- ZATCA QR Code & POS Terminal -->
        <rect x="700" y="200" width="140" height="210" rx="16" fill="#283831" />
        <rect x="715" y="215" width="110" height="80" rx="8" fill="#F3EEE7" />
        <rect x="725" y="235" width="90" height="16" rx="4" fill="#AD8665" />
        <circle cx="735" cy="325" r="8" fill="#E8D8C7" />
        <circle cx="760" cy="325" r="8" fill="#E8D8C7" />
        <circle cx="785" cy="325" r="8" fill="#E8D8C7" />
        <!-- QR Code Card -->
        <rect x="870" y="220" width="120" height="120" rx="14" fill="#FFFFFF" stroke="#E9E4DC" stroke-width="4" filter="drop-shadow(0 8px 20px rgba(40,56,49,0.08))" />
        <rect x="890" y="240" width="26" height="26" fill="#283831" />
        <rect x="944" y="240" width="26" height="26" fill="#283831" />
        <rect x="890" y="294" width="26" height="26" fill="#283831" />
        <rect x="930" y="280" width="18" height="18" fill="#AD8665" />
      `;
    case 'whatsapp-crm':
      return `
        <!-- WhatsApp Speech Bubble to CRM Cards -->
        <rect x="700" y="210" width="130" height="100" rx="20" fill="#283831" />
        <circle cx="765" cy="260" r="24" fill="#AD8665" />
        <!-- Arrow connection -->
        <path d="M830 260 L870 260" stroke="#AD8665" stroke-width="4" stroke-linecap="round" stroke-dasharray="6 4" />
        <!-- CRM Cards -->
        <rect x="870" y="190" width="130" height="60" rx="10" fill="#FFFFFF" stroke="#E9E4DC" stroke-width="3" />
        <rect x="885" y="210" width="60" height="8" rx="3" fill="#283831" />
        <rect x="885" y="225" width="80" height="6" rx="2" fill="#E8D8C7" />

        <rect x="870" y="270" width="130" height="60" rx="10" fill="#FFFFFF" stroke="#E9E4DC" stroke-width="3" />
        <rect x="885" y="290" width="70" height="8" rx="3" fill="#AD8665" />
        <rect x="885" y="305" width="50" height="6" rx="2" fill="#E9E4DC" />
      `;
    default:
      return '';
  }
}

for (const item of svgs) {
  const visual = getVisualElements(item.iconType);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630" dir="rtl">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FAF8F5" />
      <stop offset="100%" stop-color="#F3EEE7" />
    </linearGradient>
    <pattern id="dotGrid" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.5" fill="#AD8665" opacity="0.12" />
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bgGrad)" />
  <rect width="1200" height="630" fill="url(#dotGrid)" />

  <!-- Soft Accent Corner Ribbon -->
  <path d="M0 0 L260 0 L0 260 Z" fill="#E8D8C7" opacity="0.45" />

  <!-- Left/Center Content Area -->
  <g transform="translate(100, 140)">
    <!-- Category Pill -->
    <rect x="0" y="0" width="180" height="38" rx="19" fill="#283831" />
    <text x="90" y="24" fill="#FAF8F5" font-size="15" font-weight="600" text-anchor="middle" font-family="'IBM Plex Sans Arabic', sans-serif">${item.category}</text>

    <!-- Badge -->
    <rect x="195" y="0" width="160" height="38" rx="19" fill="#FFFFFF" stroke="#AD8665" stroke-width="1.5" />
    <text x="275" y="24" fill="#AD8665" font-size="14" font-weight="600" text-anchor="middle" font-family="'IBM Plex Sans Arabic', sans-serif">${item.badge}</text>

    <!-- Main Title (2-3 lines simulated with tspans) -->
    <text x="0" y="115" fill="#283831" font-size="34" font-weight="bold" font-family="'IBM Plex Sans Arabic', sans-serif" line-height="1.4">
      ${item.title}
    </text>

    <!-- Publisher Branding -->
    <g transform="translate(0, 240)">
      <circle cx="18" cy="18" r="18" fill="#AD8665" />
      <text x="18" y="24" fill="#FFFFFF" font-size="16" font-weight="bold" text-anchor="middle" font-family="sans-serif">ق</text>
      <text x="50" y="24" fill="#283831" font-size="18" font-weight="bold" font-family="'IBM Plex Sans Arabic', sans-serif">قمة للتسويق والبرمجة</text>
      <text x="235" y="24" fill="#777B75" font-size="15" font-family="'IBM Plex Sans Arabic', sans-serif">• أكتوبر 2026</text>
    </g>
  </g>

  <!-- Right Visual Illustration Block -->
  <g>
    <!-- Background circular aura -->
    <circle cx="860" cy="315" r="210" fill="#FFFFFF" opacity="0.6" />
    <circle cx="860" cy="315" r="210" fill="none" stroke="#E9E4DC" stroke-width="2" />
    ${visual}
  </g>

  <!-- Bottom Accent Stripe -->
  <rect x="0" y="620" width="1200" height="10" fill="#AD8665" />
</svg>`;

  fs.writeFileSync(path.join(outDir, `${item.slug}.svg`), svg, 'utf-8');
}

console.log(`Successfully generated ${svgs.length} SVG article covers in ${outDir}`);
