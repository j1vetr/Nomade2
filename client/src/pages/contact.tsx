import { useState, useEffect } from 'react';
import { Globe, Mail, Phone, ArrowRight } from 'lucide-react';
import { SiTelegram, SiWhatsapp, SiInstagram, SiLinkedin } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { translations, contactLinks, type Language } from '@/config/translations';
import logoImage from '@assets/logo_1760818509957.png';

const iconComponents = {
  SiTelegram,
  SiWhatsapp,
  SiInstagram,
  Globe,
  Mail,
  SiLinkedin,
  Phone
};

export default function ContactPage() {
  const [language, setLanguage] = useState<Language>('ru');
  const [isVisible, setIsVisible] = useState(false);

  const t = translations[language];

  useEffect(() => {
    setIsVisible(true);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ru' ? 'en' : 'ru');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden" style={{ backgroundColor: '#1e2e52' }}>
      <div 
        className={`w-full max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-10">
          <Button
            onClick={toggleLanguage}
            variant="outline"
            size="sm"
            className="bg-white/10 hover:bg-white/20 border-white/30 text-white font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105"
            data-testid="button-language-toggle"
          >
            {language === 'ru' ? 'EN' : 'RU'}
          </Button>
        </div>

        <div className="text-center space-y-8 sm:space-y-10 md:space-y-12">
          <div 
            className={`transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <img 
              src={logoImage} 
              alt="Maison Nomade Tourism" 
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-8 drop-shadow-2xl"
              data-testid="img-logo"
            />
          </div>

          <div 
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight px-4"
              data-testid="text-title"
            >
              {t.title}
            </h1>
            <p 
              className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto px-4 font-light"
              data-testid="text-helper"
            >
              {t.helper}
            </p>
          </div>

          <div 
            className={`grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto px-4 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {contactLinks.map((link, index) => {
              const IconComponent = iconComponents[link.icon as keyof typeof iconComponents];
              const buttonLabel = t.buttons[link.id as keyof typeof t.buttons];
              
              if (!IconComponent) {
                console.error(`Icon component not found for: ${link.icon}`);
                return null;
              }
              
              return (
                <a
                  key={link.id}
                  href={link.url}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className={`transition-all duration-500 delay-${(index + 4) * 100}`}
                  style={{
                    transitionDelay: `${(index + 4) * 100}ms`
                  }}
                  data-testid={`link-${link.id}`}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full h-auto py-4 px-6 bg-white/95 hover:bg-white border-white/20 text-[#1e2e52] hover:text-[#1e2e52] font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] group backdrop-blur-sm"
                    data-testid={`button-${link.id}`}
                  >
                    <div className="flex items-center justify-between w-full gap-3">
                      <div className="flex items-center gap-3">
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                        <span className="whitespace-nowrap">{buttonLabel}</span>
                      </div>
                      <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </Button>
                </a>
              );
            })}
          </div>

          <div 
            className={`pt-8 transition-all duration-700 delay-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p 
              className="text-sm sm:text-base text-white/60 font-light"
              data-testid="text-footer"
            >
              {t.footer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
