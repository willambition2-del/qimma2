"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { mainNavItems } from "@/data/navigation";
import { siteConfig } from "@/data/site-config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import Button from "@/components/ui/Button";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const whatsappUrl = buildWhatsAppUrl("مرحبًا، أرغب في بدء مشروع مع قمة");

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-header"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="relative flex items-center shrink-0">
              <Image
                src="/brand/qimma-logo.png"
                alt={siteConfig.name}
                width={100}
                height={40}
                className={`h-10 w-auto transition-all duration-300 ${(isScrolled || isHomePage) ? "" : "brightness-0 invert"}`}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
              {mainNavItems.map((item) => (
                <div key={item.href} className="relative">
                  {item.children ? (
                    <>
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === item.href ? null : item.href
                          )
                        }
                        className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                          (isScrolled || isHomePage)
                            ? "text-foreground hover:text-primary hover:bg-primary-light"
                            : "text-white/90 hover:text-white hover:bg-white/10"
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.href ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.href && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.96 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full end-0 mt-2 w-56 bg-white rounded-xl shadow-elevated border border-border overflow-hidden"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="block px-4 py-3 text-sm text-foreground hover:bg-primary-light hover:text-primary transition-colors border-b border-border/50 last:border-0"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                        (isScrolled || isHomePage)
                          ? "text-foreground hover:text-primary hover:bg-primary-light"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className={`p-2 rounded-lg transition-colors ${
                  (isScrolled || isHomePage)
                    ? "text-muted hover:text-primary hover:bg-primary-light"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
                aria-label="اتصل بنا"
              >
                <Phone className="w-5 h-5" />
              </a>
              <Button
                variant={(isScrolled || isHomePage) ? "primary" : "white"}
                size="sm"
                href={whatsappUrl}
                target="_blank"
              >
                ابدأ مشروعك
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                (isScrolled || isHomePage)
                  ? "text-foreground hover:bg-primary-light"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label={isMobileOpen ? "إغلاق القائمة" : "فتح القائمة"}
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute top-0 end-0 h-full w-[85%] max-w-sm bg-white shadow-2xl overflow-y-auto"
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-5 border-b border-border">
                <Image
                  src="/brand/qimma-logo.png"
                  alt={siteConfig.name}
                  width={80}
                  height={32}
                  className="h-8 w-auto"
                />
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-surface transition-colors"
                  aria-label="إغلاق القائمة"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="py-4">
                {mainNavItems.map((item, idx) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    {item.children ? (
                      <div>
                        <button
                          onClick={() =>
                            setActiveDropdown(
                              activeDropdown === item.href ? null : item.href
                            )
                          }
                          className="flex items-center justify-between w-full px-6 py-3.5 text-base font-medium text-foreground hover:bg-surface transition-colors"
                        >
                          {item.label}
                          <ChevronDown
                            className={`w-4 h-4 text-muted transition-transform duration-200 ${
                              activeDropdown === item.href ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.href && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden bg-surface"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="block px-10 py-3 text-sm text-muted hover:text-primary transition-colors"
                                  onClick={() => setIsMobileOpen(false)}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-6 py-3.5 text-base font-medium text-foreground hover:bg-surface transition-colors"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="px-6 py-6 border-t border-border space-y-3">
                <Button
                  variant="primary"
                  fullWidth
                  href={whatsappUrl}
                  target="_blank"
                >
                  ابدأ مشروعك
                </Button>
                <Button
                  variant="whatsapp"
                  fullWidth
                  href={whatsappUrl}
                  target="_blank"
                >
                  تواصل عبر واتساب
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
