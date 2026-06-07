import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { mainNavItems } from "@/data/navigation";
import { services } from "@/data/services";
import { socialLinks } from "@/data/social-links";

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
                src="/brand/qimma-logo-white.svg"
                alt={siteConfig.name}
                width={120}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {siteConfig.description}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-white/60 hover:bg-gold hover:text-white transition-all duration-300"
                  aria-label={link.platform}
                >
                  <span className="text-sm font-semibold">{link.icon}</span>
                </a>
              ))}
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
                  <Phone className="w-4 h-4" />
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
