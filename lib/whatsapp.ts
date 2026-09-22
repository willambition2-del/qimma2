/**
 * WhatsApp URL builder utility
 */

const WHATSAPP_NUMBER = '966531539622';

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export function buildContactWhatsAppMessage({
  name,
  countryCode,
  phone,
  service,
  message,
}: {
  name: string;
  countryCode: string;
  phone: string;
  service: string;
  message: string;
}): string {
  return `مرحبًا، أنا ${name}
رقم الهاتف: ${countryCode}${phone}
الخدمة المطلوبة: ${service}
الرسالة: ${message}`;
}

export function buildServiceWhatsAppMessage(serviceName: string): string {
  return `مرحبًا، أرغب في الاستفسار عن خدمة: ${serviceName}`;
}

export function buildPackageWhatsAppMessage(packageName: string): string {
  return `مرحبًا، أرغب في طلب ${packageName}`;
}
