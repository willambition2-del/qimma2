import { Service, SystemExample, MobileAppExample } from '@/types';

export const services: Service[] = [
  {
    id: 'info-websites',
    title: 'مواقع تعريفية',
    description:
      'نبني مواقع تعريفية احترافية للشركات والمؤسسات لتعزيز حضورها الرقمي وبناء هوية رقمية موثوقة وجذابة تتوافق مع جميع الأجهزة.',
    icon: 'Globe',
    href: '/services/info-websites',
    features: [
      'مواقع تعريفية متكاملة للشركات',
      'صفحات هبوط تسويقية عالية التحويل',
      'تصميم متجاوب مع الهواتف والأجهزة الذكية',
      'تحسين محركات البحث SEO والأرشفة السريعة',
      'لوحة تحكم سهلة لإدارة محتوى الموقع',
    ],
  },
  {
    id: 'e-commerce',
    title: 'متاجر إلكترونية',
    description:
      'ننشئ متاجر إلكترونية متكاملة وقوية تمنح عملائك تجربة تسوق سلسة وتساعدك على زيادة مبيعاتك وإدارة طلباتك ومخزونك بكل كفاءة.',
    icon: 'ShoppingBag',
    href: '/services/e-commerce',
    features: [
      'برمجة متاجر إلكترونية متكاملة بالكامل',
      'ربط بوابات الدفع الإلكتروني (مدى، فيزا، Apple Pay)',
      'ربط تلقائي مع شركات الشحن والتوصيل',
      'إدارة المخزون والمنتجات والطلبات بسهولة',
      'تقارير وإحصائيات مبيعات تفصيلية ومتكاملة',
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
