"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function WhatsAppButton() {
  const whatsappUrl = buildWhatsAppUrl("مرحبًا، أرغب في التواصل مع فريق قمة");

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 start-6 z-50 flex items-center justify-center w-14 h-14 bg-whatsapp text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      aria-label="تواصل عبر واتساب"
    >
      <MessageCircle className="w-7 h-7" fill="white" strokeWidth={0} />
    </motion.a>
  );
}
