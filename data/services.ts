import { Service, SystemExample, MobileAppExample } from '@/types';

export const services: Service[] = [
  {
    id: 'digital-marketing',
    title: 'التسويق الرقمي',
    description:
      'نصمّم استراتيجيات تسويق رقمي فعّالة تشمل إدارة الحملات الإعلانية، تحسين محركات البحث، وإدارة حسابات التواصل الاجتماعي لتحقيق أقصى عائد على الاستثمار.',
    icon: 'Megaphone',
    href: '/services/digital-marketing',
    features: [
      'إدارة حملات إعلانية مدفوعة',
      'تحسين محركات البحث SEO',
      'إدارة حسابات التواصل الاجتماعي',
      'تسويق المحتوى',
      'التسويق عبر البريد الإلكتروني',
    ],
  },
  {
    id: 'web-design',
    title: 'تصميم المواقع والمتاجر',
    description:
      'نبني مواقع إلكترونية ومتاجر رقمية احترافية بتصاميم عصرية متجاوبة مع جميع الأجهزة، مع التركيز على تجربة المستخدم وسرعة الأداء.',
    icon: 'Globe',
    href: '/services/web-design',
    features: [
      'مواقع تعريفية للشركات',
      'متاجر إلكترونية متكاملة',
      'صفحات هبوط تسويقية',
      'تصميم متجاوب مع جميع الأجهزة',
      'تحسين سرعة الأداء',
    ],
  },
  {
    id: 'custom-systems',
    title: 'تطوير الأنظمة المخصصة',
    description:
      'نطوّر أنظمة برمجية مخصصة تناسب احتياجات عملك، من أنظمة إدارة الموارد إلى أنظمة الحجز والمتابعة وغيرها.',
    icon: 'Settings',
    href: '/services/custom-systems',
    features: [
      'أنظمة إدارة الموارد ERP',
      'أنظمة إدارة العلاقات CRM',
      'أنظمة الحجز والمواعيد',
      'لوحات تحكم مخصصة',
      'أنظمة متابعة وتقارير',
    ],
  },
  {
    id: 'mobile-apps',
    title: 'تطوير تطبيقات الموبايل',
    description:
      'نصمم ونطوّر تطبيقات موبايل أصلية وهجينة لنظامي iOS و Android بأعلى معايير الجودة والأداء.',
    icon: 'Smartphone',
    href: '/services/mobile-apps',
    features: [
      'تطبيقات iOS و Android',
      'تطبيقات هجينة متعددة المنصات',
      'تطبيقات توصيل وخدمات',
      'تطبيقات تجارة إلكترونية',
      'صيانة ودعم مستمر',
    ],
  },
  {
    id: 'branding',
    title: 'تصميم الهوية والمحتوى',
    description:
      'نبني هويتك البصرية المتكاملة من الشعار إلى دليل الهوية، مع تصميم محتوى إعلاني جذاب يعكس قيم علامتك التجارية.',
    icon: 'Palette',
    href: '/services/branding',
    features: [
      'تصميم الشعارات',
      'دليل الهوية البصرية',
      'تصميم المطبوعات',
      'تصميم محتوى السوشال ميديا',
      'موشن جرافيك وفيديو إعلاني',
    ],
  },
  {
    id: 'consulting',
    title: 'الاستشارات الرقمية',
    description:
      'نقدّم استشارات رقمية متخصصة تساعدك على اتخاذ القرارات الصحيحة في التحول الرقمي، واختيار الحلول التقنية المناسبة لنمو أعمالك.',
    icon: 'Lightbulb',
    href: '/services/consulting',
    features: [
      'استشارات التحول الرقمي',
      'تحليل المنافسين والسوق',
      'استراتيجيات النمو الرقمي',
      'اختيار الحلول التقنية',
      'تقييم الأداء الرقمي',
    ],
  },
];

export const systemExamples: SystemExample[] = [
  { title: 'نظام إدارة العيادات والمراكز الطبية', icon: 'Stethoscope' },
  { title: 'نظام إدارة المدارس والمعاهد', icon: 'GraduationCap' },
  { title: 'نظام إدارة الموارد البشرية', icon: 'Users' },
  { title: 'نظام إدارة المخزون والمستودعات', icon: 'Warehouse' },
  { title: 'نظام الحجز والمواعيد', icon: 'CalendarCheck' },
  { title: 'نظام إدارة العقارات', icon: 'Building' },
  { title: 'نظام نقاط البيع POS', icon: 'CreditCard' },
  { title: 'نظام إدارة المشاريع', icon: 'FolderKanban' },
  { title: 'نظام إدارة علاقات العملاء CRM', icon: 'Handshake' },
];

export const mobileAppExamples: MobileAppExample[] = [
  { title: 'تطبيقات التوصيل', icon: 'Truck' },
  { title: 'تطبيقات المتاجر الإلكترونية', icon: 'ShoppingBag' },
  { title: 'تطبيقات الحجز والمواعيد', icon: 'Calendar' },
  { title: 'تطبيقات التعليم والتدريب', icon: 'BookOpen' },
  { title: 'تطبيقات اللياقة والصحة', icon: 'Heart' },
  { title: 'تطبيقات إدارة الأعمال', icon: 'Briefcase' },
  { title: 'تطبيقات التواصل الاجتماعي', icon: 'MessageCircle' },
  { title: 'تطبيقات الخدمات المنزلية', icon: 'Home' },
];
