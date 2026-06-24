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
        label: 'المواقع التعريفية',
        href: '/services/info-websites',
      },
      {
        label: 'المتاجر الإلكترونية',
        href: '/services/e-commerce',
      },
      {
        label: 'تطوير الأنظمة المخصصة',
        href: '/services/custom-systems',
      },
      {
        label: 'تطوير تطبيقات الموبايل',
        href: '/services/mobile-apps',
      },
    ],
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
