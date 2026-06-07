import { NavItem } from '@/types';

export const mainNavItems: NavItem[] = [
  {
    label: 'الرئيسية',
    href: '/',
  },
  {
    label: 'من نحن',
    href: '/about',
  },
  {
    label: 'خدماتنا',
    href: '/services',
    children: [
      {
        label: 'التسويق الرقمي',
        href: '/services/digital-marketing',
      },
      {
        label: 'تصميم المواقع والمتاجر',
        href: '/services/web-design',
      },
      {
        label: 'تطوير الأنظمة المخصصة',
        href: '/services/custom-systems',
      },
      {
        label: 'تطوير تطبيقات الموبايل',
        href: '/services/mobile-apps',
      },
      {
        label: 'الهوية والمحتوى الإعلاني',
        href: '/services/branding',
      },
      {
        label: 'الاستشارات الرقمية',
        href: '/services/consulting',
      },
    ],
  },
  {
    label: 'الباقات',
    href: '/packages',
  },
  {
    label: 'أعمالنا',
    href: '/portfolio',
  },
  {
    label: 'المقالات',
    href: '/articles',
  },
  {
    label: 'تواصل معنا',
    href: '/contact',
  },
];
