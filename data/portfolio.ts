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
    id: 'makzanelc',
    title: 'متجر مخزن الإلكتروني',
    description:
      'تصميم وتطوير متجر إلكتروني متكامل لبيع وتوزيع الأجهزة الإلكترونية ومستلزمات الجوال الذكية على منصة سلة مع تجربة مستخدم مميزة وسلسة.',
    category: 'stores',
    image: '/portfolio/placeholder-1.jpg',
    tags: ['متجر إلكتروني', 'أجهزة إلكترونية', 'منصة سلة'],
  },
  {
    id: 'mgxsa',
    title: 'مجموعة إم جي إكس (MGX)',
    description:
      'تصميم وتطوير موقع تعريفي متكامل يعرض خدمات وحلول المجموعة الإعلانية والتسويقية بهوية بصرية مميزة وتصميم متجاوب.',
    category: 'websites',
    image: '/portfolio/placeholder-3.jpg',
    tags: ['موقع تعريفي', 'تصميم متجاوب', 'برمجة وتطوير'],
  },
  {
    id: 'roshnreit',
    title: 'صندوق روشن ريت العقاري',
    description:
      'تصميم وتطوير منصة مالية عقارية تفاعلية مخصصة للمستثمرين تعرض بيانات الصندوق والأصول العقارية والتقارير المالية بدقة.',
    category: 'websites',
    image: '/portfolio/placeholder-3.jpg',
    tags: ['منصة عقارية', 'بيانات مالية', 'تطوير ويب'],
  },
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
    id: 'pharmacy-system',
    title: 'نظام إدارة الصيدليات (Sale Savvy)',
    description:
      'نظام سحابي متكامل لإدارة الصيدليات ونقاط البيع والمخازن والمشتريات مصمم خصيصاً لتحسين الكفاءة التشغيلية.',
    category: 'systems',
    image: '/portfolio/placeholder-4.jpg',
    tags: ['نظام سحابي', 'إدارة الصيدليات', 'نقاط بيع'],
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
