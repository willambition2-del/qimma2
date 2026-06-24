export interface ContactService {
  id: string;
  label: string;
}

export interface CountryCode {
  code: string;
  country: string;
  flag: string;
}

export const contactServices: ContactService[] = [
  { id: 'info-websites', label: 'موقع تعريفي' },
  { id: 'e-commerce', label: 'متجر إلكتروني' },
  { id: 'custom-systems', label: 'تطوير الأنظمة المخصصة' },
  { id: 'mobile-apps', label: 'تطوير تطبيقات الموبايل' },
];

export const countryCodes: CountryCode[] = [
  { code: '+966', country: 'السعودية', flag: '🇸🇦' },
  { code: '+971', country: 'الإمارات', flag: '🇦🇪' },
  { code: '+973', country: 'البحرين', flag: '🇧🇭' },
  { code: '+965', country: 'الكويت', flag: '🇰🇼' },
  { code: '+968', country: 'عُمان', flag: '🇴🇲' },
  { code: '+974', country: 'قطر', flag: '🇶🇦' },
  { code: '+20', country: 'مصر', flag: '🇪🇬' },
  { code: '+962', country: 'الأردن', flag: '🇯🇴' },
  { code: '+961', country: 'لبنان', flag: '🇱🇧' },
  { code: '+964', country: 'العراق', flag: '🇮🇶' },
  { code: '+212', country: 'المغرب', flag: '🇲🇦' },
  { code: '+216', country: 'تونس', flag: '🇹🇳' },
  { code: '+213', country: 'الجزائر', flag: '🇩🇿' },
  { code: '+249', country: 'السودان', flag: '🇸🇩' },
  { code: '+967', country: 'اليمن', flag: '🇾🇪' },
];

export const whatsappNumber = '+966504469214';
