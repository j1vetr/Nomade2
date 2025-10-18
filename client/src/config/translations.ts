export type Language = 'ru' | 'en';

export interface Translations {
  title: string;
  helper: string;
  buttons: {
    telegram: string;
    whatsapp: string;
    instagram: string;
    website: string;
    email: string;
    linkedin: string;
    call: string;
  };
  footer: string;
}

export const translations: Record<Language, Translations> = {
  ru: {
    title: "ВЫБЕРИТЕ УДОБНЫЙ МЕССЕНДЖЕР ДЛЯ СВЯЗИ",
    helper: "Облегчите свое путешествие с помощью нашей службы поддержки, которая работает безупречно и индивидуально",
    buttons: {
      telegram: "Telegram",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      website: "Веб-сайт",
      email: "E-mail",
      linkedin: "LinkedIn",
      call: "Позвонить"
    },
    footer: "©2025 MAISON NOMADE"
  },
  en: {
    title: "CHOOSE A CONVENIENT MESSENGER TO CONTACT US",
    helper: "Make your trip easier with our support team that works flawlessly and personally",
    buttons: {
      telegram: "Telegram",
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      website: "Website",
      email: "E-mail",
      linkedin: "LinkedIn",
      call: "Call us"
    },
    footer: "©2025 MAISON NOMADE"
  }
};

export interface ContactLink {
  id: string;
  url: string;
  icon: string;
  external: boolean;
}

export const contactLinks: ContactLink[] = [
  { id: 'telegram', url: 'https://t.me/faklllp', icon: 'SiTelegram', external: true },
  { id: 'whatsapp', url: 'https://wa.me/375333712473', icon: 'SiWhatsapp', external: true },
  { id: 'instagram', url: 'https://www.instagram.com/maison.nomade.tourism/', icon: 'SiInstagram', external: true },
  { id: 'website', url: 'https://maison-nomade-tourism.com/', icon: 'Globe', external: true },
  { id: 'email', url: 'mailto:info@mn-tourism.com', icon: 'Mail', external: false },
  { id: 'linkedin', url: 'https://www.linkedin.com/company/maison-nomade-tourism', icon: 'SiLinkedin', external: true },
  { id: 'call', url: 'tel:+375333712473', icon: 'Phone', external: false }
];
