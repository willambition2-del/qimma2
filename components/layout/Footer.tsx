import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageSquare, Ghost } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { mainNavItems } from "@/data/navigation";
import { services } from "@/data/services";
import { socialLinks } from "@/data/social-links";

// Custom SVG components for brand icons that are missing in Lucide React 1.x
const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Music2 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const iconMap = {
  Twitter,
  Instagram,
  Linkedin,
  Music2,
  Ghost,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white">
      {/* Main Footer */}
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/brand/qimma-logo.png"
                alt={siteConfig.name}
                width={120}
                height={48}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {siteConfig.description}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => {
                const IconComponent = iconMap[link.icon as keyof typeof iconMap];
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-white/60 hover:bg-gold hover:text-white transition-all duration-300"
                    aria-label={link.platform}
                  >
                    {IconComponent && <IconComponent className="w-5 h-5" />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-6 text-white">
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              {mainNavItems.filter(item => !item.children).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/60 hover:text-gold transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-white/60 hover:text-gold transition-colors duration-200"
                >
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-white/60 hover:text-gold transition-colors duration-200"
                >
                  الشروط والأحكام
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-bold mb-6 text-white">
              خدماتنا
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.href}
                    className="text-sm text-white/60 hover:text-gold transition-colors duration-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-bold mb-6 text-white">
              تواصل معنا
            </h3>
            <div className="space-y-4">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-3 text-sm text-white/60 hover:text-gold transition-colors group"
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 group-hover:bg-gold/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-inter" dir="ltr">{siteConfig.contact.phone}</span>
              </a>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/60 hover:text-gold transition-colors group"
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 group-hover:bg-gold/20 transition-colors">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <span className="font-inter" dir="ltr">{siteConfig.contact.whatsapp}</span>
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 text-sm text-white/60 hover:text-gold transition-colors group"
              >
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 group-hover:bg-gold/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>{siteConfig.contact.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            جميع الحقوق محفوظة © {currentYear} {siteConfig.name}
          </p>
          <p className="text-xs text-white/30">
            صنع بـ ❤️ بواسطة فريق قمة
          </p>
        </div>
      </div>
    </footer>
  );
}
