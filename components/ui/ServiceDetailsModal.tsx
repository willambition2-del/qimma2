"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import type { SubService } from "@/types";

export interface ServiceDetailsModalProps {
  subService?: SubService | null;
  service?: SubService | null;
  parentServiceTitle?: string;
  isOpen?: boolean;
  open?: boolean;
  onClose?: () => void;
  onOpenChange?: (open: boolean) => void;
}

export default function ServiceDetailsModal({
  subService,
  service,
  parentServiceTitle = "خدمات قمة",
  isOpen,
  open,
  onClose,
  onOpenChange,
}: ServiceDetailsModalProps) {
  const currentService = subService || service;
  const isModalOpen = isOpen ?? open ?? false;

  const handleClose = () => {
    if (onClose) onClose();
    if (onOpenChange) onOpenChange(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  if (!currentService) return null;

  const whatsappMsg = `مرحبًا قمة، أرغب في طلب خدمة (${currentService.title}) التابعة لـ (${parentServiceTitle})`;
  const whatsappUrl = buildWhatsAppUrl(whatsappMsg);

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-6 overflow-hidden"
          dir="rtl"
        >
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[700px] bg-white rounded-2xl sm:rounded-3xl shadow-elevated border border-border overflow-hidden z-10 flex flex-col max-h-[85vh] my-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
          >
            {/* Header: Badge, Title & Close Button */}
            <div className="p-6 sm:p-7 pb-0 bg-white shrink-0">
              <div className="flex items-start justify-between gap-4">
                <div>
                  {/* Main Service Badge */}
                  <span className="inline-block text-[11px] sm:text-xs font-bold text-gold bg-gold-soft px-3 py-1 rounded-full border border-gold/25 mb-2.5">
                    {parentServiceTitle}
                  </span>

                  {/* Service Title */}
                  <h3
                    id="service-modal-title"
                    className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight leading-snug"
                  >
                    {currentService.title}
                  </h3>
                </div>

                {/* Close Button X in a clean circle */}
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-9 h-9 rounded-full bg-surface hover:bg-slate-200/80 text-muted hover:text-foreground flex items-center justify-center transition-colors shrink-0 cursor-pointer border border-border/60"
                  aria-label="إغلاق النافذة"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Description directly under the title */}
              <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                {currentService.shortDescription}
              </p>

              {/* Simple Divider Line */}
              <div className="h-px bg-border/80 mt-6" />
            </div>

            {/* Scrollable Features Section - Vertical Layout */}
            <div className="px-6 sm:px-7 py-5 overflow-y-auto flex-grow space-y-4">
              {currentService.features && currentService.features.length > 0 && (
                <div>
                  {/* Section Title */}
                  <h4 className="text-sm sm:text-base font-bold text-foreground mb-3.5">
                    المزايا والمواصفات المشمولة في هذه الخدمة:
                  </h4>

                  {/* Vertical Feature Rows with subtle divider */}
                  <div className="flex flex-col divide-y divide-border/60">
                    {currentService.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 py-3.5 first:pt-1 last:pb-1 group"
                      >
                        <div className="w-5 h-5 rounded-full bg-gold/15 text-gold flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold" strokeWidth={2.4} />
                        </div>
                        <span className="text-sm sm:text-[15px] text-foreground/90 font-medium leading-relaxed">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer with actions */}
            <div className="p-4 sm:p-6 bg-surface/60 border-t border-border/80 shrink-0">
              <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center gap-3 w-full">
                {/* Secondary Close Button */}
                <Button
                  type="button"
                  onClick={handleClose}
                  variant="secondary"
                  size="md"
                  className="w-full sm:w-auto sm:px-7 text-sm font-semibold"
                >
                  إغلاق
                </Button>

                {/* Primary WhatsApp Button */}
                <Button
                  href={whatsappUrl}
                  target="_blank"
                  variant="gold"
                  size="md"
                  icon={<MessageCircle className="w-4 h-4" />}
                  iconPosition="start"
                  className="w-full sm:flex-1 shadow-sm text-sm sm:text-base font-bold"
                >
                  اطلب هذه الخدمة الآن
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
