export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  features?: string[];
}

export interface Package {
  id: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
  highlighted: boolean;
  badge?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  url?: string;
}

export interface ClientLogo {
  id: string;
  name: string;
  logo: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address?: string;
}

export interface SiteConfig {
  name: string;
  nameEn: string;
  description: string;
  url: string;
  locale: string;
  direction: 'rtl' | 'ltr';
  contact: ContactInfo;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  date: string;
  author: string;
  keywords: string[];
  readTime?: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface SystemExample {
  title: string;
  icon: string;
}

export interface MobileAppExample {
  title: string;
  icon: string;
}

export interface WhyQimmaCard {
  title: string;
  description: string;
  icon: string;
}

export interface TrustItem {
  label: string;
  icon: string;
}

export type PortfolioCategory = {
  id: string;
  label: string;
};
