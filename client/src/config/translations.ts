export const content = {
  title: "CHOOSE A CONVENIENT MESSENGER TO CONTACT US",
  helper: "Make your trip easier with our support team that works flawlessly and personally",
  buttons: {
    telegram: "Telegram",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    website: "Website",
    call: "Call us"
  },
  footer: "©2025 MAISON NOMADE"
};

export interface ContactLink {
  id: string;
  url: string;
  icon: string;
  external: boolean;
}

export const contactLinks: ContactLink[] = [
  { id: 'telegram', url: 'https://t.me/faklllp?text=Hello!%20I%20learned%20about%20you%20through%20Syndicate%20barbershop.%20I%20would%20like%20to%20get%20a%20consultation%20on%20organizing%20a%20trip.', icon: 'SiTelegram', external: true },
  { id: 'whatsapp', url: 'https://wa.me/375333712473?text=Hello!%20I%20learned%20about%20you%20through%20Syndicate%20barbershop.%20I%20would%20like%20to%20get%20a%20consultation%20on%20organizing%20a%20trip.', icon: 'SiWhatsapp', external: true },
  { id: 'instagram', url: 'https://www.instagram.com/maison.nomade.tourism/', icon: 'SiInstagram', external: true },
  { id: 'website', url: 'https://maison-nomade-tourism.com/', icon: 'Globe', external: true },
  { id: 'call', url: 'tel:+375333712473', icon: 'Phone', external: false }
];
