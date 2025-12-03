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
  { id: 'telegram', url: 'https://t.me/anil_klk?text=Good%20day!%20I%20am%20reaching%20out%20via%20Bruncho_uk.%20Could%20you%20please%20assist%20me%20with%20your%20services%3F', icon: 'SiTelegram', external: true },
  { id: 'whatsapp', url: 'https://wa.me/971507793349?text=Good%20day!%20I%20am%20reaching%20out%20via%20Bruncho_uk.%20Could%20you%20please%20assist%20me%20with%20your%20services%3F', icon: 'SiWhatsapp', external: true },
  { id: 'instagram', url: 'https://www.instagram.com/maison.nomade.tourism/', icon: 'SiInstagram', external: true },
  { id: 'website', url: 'https://maison-nomade-tourism.com/', icon: 'Globe', external: true },
  { id: 'call', url: 'tel:+971507793349', icon: 'Phone', external: false }
];
