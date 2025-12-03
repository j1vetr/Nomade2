import { useState, useEffect } from 'react';
import { Globe, Phone, ArrowRight } from 'lucide-react';
import { SiTelegram, SiWhatsapp, SiInstagram } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { content, contactLinks } from '@/config/translations';
import logoImage from '@assets/logo_1760818509957.png';

const iconComponents = {
  SiTelegram,
  SiWhatsapp,
  SiInstagram,
  Globe,
  Phone
};

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    document.documentElement.lang = 'en';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden" style={{ backgroundColor: '#1e2e52' }}>
      <div 
        className={`w-full max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
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
              {content.title}
            </h1>
            <p 
              className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto px-4 font-light"
              data-testid="text-helper"
            >
              {content.helper}
            </p>
          </div>

          <div 
            className={`grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto px-4 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {contactLinks.map((link, index) => {
              const IconComponent = iconComponents[link.icon as keyof typeof iconComponents];
              const buttonLabel = content.buttons[link.id as keyof typeof content.buttons];
              
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
              {content.footer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
