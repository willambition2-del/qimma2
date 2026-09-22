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
        label: 'التسويق الإلكتروني',
        href: '/services/digital-marketing',
      },
      {
        label: 'تصميم وتطوير المواقع',
        href: '/services/web-development',
      },
      {
        label: 'تصميم وتطوير المتاجر',
        href: '/services/ecommerce',
      },
      {
        label: 'تطوير الأنظمة',
        href: '/services/systems',
      },
      {
        label: 'تطوير التطبيقات',
        href: '/services/mobile-apps',
      },
    ],
  },
  {
    label: 'المدونة',
    href: '/articles',
  },
  {
    label: 'تواصل معنا',
    href: '/contact',
  },
];
