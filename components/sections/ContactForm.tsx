"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, Send } from "lucide-react";
import {
  contactServices,
  countryCodes,
  whatsappNumber,
} from "@/data/contact";
import {
  buildContactWhatsAppMessage,
  buildWhatsAppUrl,
} from "@/lib/whatsapp";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "الاسم يجب أن يكون حرفين على الأقل")
    .max(100, "الاسم طويل جدًا"),
  countryCode: z.string().min(1, "اختر رمز الدولة"),
  phone: z
    .string()
    .min(7, "رقم الهاتف غير صالح")
    .max(15, "رقم الهاتف غير صالح")
    .regex(/^[0-9]+$/, "رقم الهاتف يجب أن يحتوي على أرقام فقط"),
  service: z.string().min(1, "اختر نوع الخدمة"),
  message: z
    .string()
    .min(10, "الرسالة يجب أن تكون 10 أحرف على الأقل")
    .max(1000, "الرسالة طويلة جدًا"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      countryCode: "+966",
      name: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    const serviceLabel =
      contactServices.find((s) => s.id === data.service)?.label || data.service;

    const waMessage = buildContactWhatsAppMessage({
      name: data.name,
      countryCode: data.countryCode,
      phone: data.phone,
      service: serviceLabel,
      message: data.message,
    });

    const url = buildWhatsAppUrl(waMessage);
    window.open(url, "_blank", "noopener,noreferrer");

    setIsSuccess(true);
    reset();

    setTimeout(() => setIsSuccess(false), 5000);
  };

  const inputClasses =
    "w-full px-4 py-3 bg-white rounded-xl border border-border text-foreground text-sm placeholder:text-muted/50 focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 outline-none";
  const labelClasses = "block text-sm font-semibold text-foreground mb-2";
  const errorClasses = "text-xs text-red-500 mt-1.5";

  if (isSuccess) {
    return (
      <ScrollReveal>
        <div className="text-center py-16">
          <div className="w-16 h-16 bg-whatsapp/10 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle className="w-8 h-8 text-whatsapp" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-3">
            تم إرسال رسالتك بنجاح!
          </h3>
          <p className="text-muted text-sm max-w-md mx-auto">
            شكرًا لتواصلك معنا. سيتم فتح محادثة واتساب مع فريقنا لمتابعة طلبك
            في أقرب وقت.
          </p>
        </div>
      </ScrollReveal>
    );
  }

  return (
    <ScrollReveal>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
        noValidate
      >
        {/* Name & Phone Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Name */}
          <div>
            <label htmlFor="name" className={labelClasses}>
              الاسم
            </label>
            <input
              id="name"
              type="text"
              placeholder="أدخل اسمك الكامل"
              className={`${inputClasses} ${
                errors.name ? "border-red-400 focus:border-red-500" : ""
              }`}
              {...register("name")}
            />
            {errors.name && (
              <p className={errorClasses}>{errors.name.message}</p>
            )}
          </div>

          {/* Phone with Country Code */}
          <div>
            <label htmlFor="phone" className={labelClasses}>
              رقم الهاتف
            </label>
            <div className="flex gap-2">
              <select
                className={`${inputClasses} w-[140px] shrink-0 cursor-pointer`}
                {...register("countryCode")}
              >
                {countryCodes.map((cc) => (
                  <option key={cc.code} value={cc.code}>
                    {cc.flag} {cc.code}
                  </option>
                ))}
              </select>
              <input
                id="phone"
                type="tel"
                dir="ltr"
                placeholder="5XXXXXXXX"
                className={`${inputClasses} font-inter ${
                  errors.phone ? "border-red-400 focus:border-red-500" : ""
                }`}
                {...register("phone")}
              />
            </div>
            {errors.phone && (
              <p className={errorClasses}>{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service" className={labelClasses}>
            نوع الخدمة
          </label>
          <select
            id="service"
            className={`${inputClasses} cursor-pointer ${
              errors.service ? "border-red-400 focus:border-red-500" : ""
            }`}
            {...register("service")}
          >
            <option value="">اختر الخدمة المطلوبة</option>
            {contactServices.map((svc) => (
              <option key={svc.id} value={svc.id}>
                {svc.label}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className={errorClasses}>{errors.service.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className={labelClasses}>
            الرسالة
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="اكتب تفاصيل مشروعك أو استفسارك..."
            className={`${inputClasses} resize-none ${
              errors.message ? "border-red-400 focus:border-red-500" : ""
            }`}
            {...register("message")}
          />
          {errors.message && (
            <p className={errorClasses}>{errors.message.message}</p>
          )}
        </div>

        {/* Submit */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          disabled={isSubmitting}
          icon={<Send className="w-4 h-4" />}
        >
          {isSubmitting ? "جاري الإرسال..." : "إرسال عبر واتساب"}
        </Button>

        <p className="text-center text-xs text-muted mt-2">
          سيتم فتح محادثة واتساب مباشرة مع فريقنا على الرقم {whatsappNumber}
        </p>
      </form>
    </ScrollReveal>
  );
}
