import { PortfolioCategory, PortfolioItem } from '@/types';

export const portfolioCategories: PortfolioCategory[] = [
  { id: 'all', label: 'الكل' },
  { id: 'marketing', label: 'التسويق' },
  { id: 'websites', label: 'المواقع' },
  { id: 'stores', label: 'المتاجر' },
  { id: 'systems', label: 'الأنظمة' },
  { id: 'apps', label: 'التطبيقات' },
  { id: 'branding', label: 'الهوية البصرية' },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'project-1',
    title: 'متجر أزياء إلكتروني',
    description:
      'تصميم وتطوير متجر إلكتروني متكامل لبيع الأزياء والملابس مع بوابات دفع متعددة ونظام إدارة مخزون.',
    category: 'stores',
    image: '/portfolio/placeholder-1.jpg',
    tags: ['متجر إلكتروني', 'تصميم UI/UX', 'بوابات دفع'],
  },
  {
    id: 'project-2',
    title: 'حملة تسويقية لمطعم',
    description:
      'إدارة حملة تسويق رقمي شاملة لسلسلة مطاعم شملت إدارة السوشال ميديا والحملات الإعلانية المدفوعة.',
    category: 'marketing',
    image: '/portfolio/placeholder-2.jpg',
    tags: ['تسويق رقمي', 'سوشال ميديا', 'حملات إعلانية'],
  },
  {
    id: 'project-3',
    title: 'موقع شركة عقارية',
    description:
      'تصميم وتطوير موقع احترافي لشركة عقارية مع نظام عرض العقارات والبحث المتقدم وصفحات تفصيلية لكل عقار.',
    category: 'websites',
    image: '/portfolio/placeholder-3.jpg',
    tags: ['موقع إلكتروني', 'عقارات', 'تصميم متجاوب'],
  },
  {
    id: 'project-4',
    title: 'نظام إدارة عيادات طبية',
    description:
      'تطوير نظام متكامل لإدارة العيادات والمراكز الطبية يشمل الحجوزات والسجلات الطبية والتقارير.',
    category: 'systems',
    image: '/portfolio/placeholder-4.jpg',
    tags: ['نظام إدارة', 'قطاع طبي', 'لوحة تحكم'],
  },
  {
    id: 'project-5',
    title: 'تطبيق توصيل طلبات',
    description:
      'تصميم وتطوير تطبيق موبايل لتوصيل الطلبات بنظامي iOS و Android مع لوحة تحكم للإدارة وتتبع مباشر.',
    category: 'apps',
    image: '/portfolio/placeholder-5.jpg',
    tags: ['تطبيق موبايل', 'توصيل', 'iOS & Android'],
  },
  {
    id: 'project-6',
    title: 'هوية بصرية لشركة تقنية',
    description:
      'تصميم هوية بصرية متكاملة لشركة تقنية ناشئة تشمل الشعار والألوان والخطوط والمطبوعات وقالب السوشال ميديا.',
    category: 'branding',
    image: '/portfolio/placeholder-6.jpg',
    tags: ['هوية بصرية', 'شعار', 'دليل الهوية'],
  },
  {
    id: 'project-7',
    title: 'متجر إلكتروني للعطور',
    description:
      'تصميم متجر إلكتروني فاخر لبيع العطور مع تجربة مستخدم مميزة ونظام توصيات ذكي وربط مع شركات الشحن.',
    category: 'stores',
    image: '/portfolio/placeholder-7.jpg',
    tags: ['متجر إلكتروني', 'عطور', 'تجربة مستخدم'],
  },
  {
    id: 'project-8',
    title: 'تطبيق حجز مواعيد صالون',
    description:
      'تطوير تطبيق موبايل لحجز مواعيد صالون تجميل مع نظام إشعارات وتذكير وإدارة الحجوزات والموظفين.',
    category: 'apps',
    image: '/portfolio/placeholder-8.jpg',
    tags: ['تطبيق موبايل', 'حجز مواعيد', 'صالون'],
  },
];

export interface PdfDownload {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
}

export const pdfDownloads: PdfDownload[] = [
  {
    id: 'marketing-samples',
    title: 'نماذج التسويق 2025',
    description: 'تحميل ملف نماذج أعمالنا في التسويق الرقمي وإدارة الحملات',
    href: '/downloads/marketing-samples-2025.pdf',
    icon: 'FileDown',
  },
  {
    id: 'programming-samples',
    title: 'نماذج البرمجة 2025',
    description:
      'تحميل ملف نماذج أعمالنا في تطوير المواقع والأنظمة والتطبيقات',
    href: '/downloads/programming-samples-2025.pdf',
    icon: 'FileDown',
  },
];
