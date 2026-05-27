import React from 'react';
import { COMPANY_INFO, NAV_LINKS } from '../data/constants';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-brown-900 pt-20 border-t border-brown-800">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-6 shrink-0 group">
              <div className="relative h-14 w-auto flex items-center bg-cream-50/10 px-3 py-1.5 rounded-lg backdrop-blur-sm border border-cream-100/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300 group-hover:bg-cream-50/20 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                <img 
                  src={COMPANY_INFO.logo} 
                  alt={COMPANY_INFO.name} 
                  className="h-full w-auto object-contain drop-shadow-md filter brightness-110 contrast-125"
                />
              </div>
            </a>
            <p className="text-cream-100/60 font-light leading-relaxed max-w-md mb-8">
              {t('footer.brand_desc')}
            </p>
            <div className="flex gap-4">
              {Object.entries(COMPANY_INFO.social).map(([platform, url]) => (
                <a 
                  key={platform} 
                  href={url} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-brown-700 flex items-center justify-center text-cream-100/70 hover:text-gold-500 hover:border-gold-500 transition-colors"
                >
                  <i className={`fab fa-${platform === 'skype' ? 'skype' : platform === 'facebook' ? 'facebook-f' : platform}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif text-cream-100 mb-6">{t('footer.quick_links')}</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.id}>
                  <a href={link.url} className="text-cream-100/60 hover:text-gold-400 transition-colors font-light">
                    {t(`nav.${link.id}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif text-cream-100 mb-6">{t('footer.contact_info')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-cream-100/60 font-light">
                <i className="fas fa-map-marker-alt mt-1 text-gold-500/70"></i>
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3 text-cream-100/60 font-light">
                <i className="fas fa-phone-alt text-gold-500/70"></i>
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-gold-400 transition-colors">{COMPANY_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-3 text-cream-100/60 font-light">
                <i className="fas fa-envelope text-gold-500/70"></i>
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-gold-400 transition-colors">{COMPANY_INFO.email}</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright & Credits */}
        <div className="py-6 border-t border-brown-800 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-cream-100/40 text-sm font-light">
              &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. {t('footer.rights')}
            </p>
            <p className="text-cream-100/30 text-[11px] tracking-wide font-light">
              {t('footer.credits')} <span className="hover:text-gold-400 hover:drop-shadow-[0_0_8px_rgba(218,165,32,0.4)] transition-all duration-300 cursor-default">Jil Dobariya</span>
            </p>
          </div>
          <div className="text-cream-100/40 text-sm font-light space-x-4">
            <a href="#" className="hover:text-gold-400 transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-gold-400 transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
