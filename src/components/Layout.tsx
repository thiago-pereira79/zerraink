import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import { 
  X, 
  ChevronRight, 
  ArrowUp,
  MapPin,
  Clock
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { WHATSAPP_URL } from '../constants';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'HOME', key: 'home', href: '/' },
    { name: 'SOBRE', key: 'about', href: '/sobre' },
    { name: 'ESTILOS', key: 'styles', href: '/estilos' },
    { name: 'GALERIA', key: 'gallery', href: '/galeria' },
    { name: 'CONTATO', key: 'contact', href: '/contato' },
  ];

  return (
    <nav className="site-header flex items-center dark-header bg-[#050505] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center w-full">
        {/* Logo */}
        <Link to="/" className="group flex items-center shrink-0 h-14 sm:h-16" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img
            src="/logos/zerraink-menu-original-style.png"
            alt="ZERRAINK"
            className="h-[40px] sm:h-[46px] w-auto max-w-[230px] sm:max-w-[260px] object-contain transition-opacity duration-300 group-hover:opacity-90"
            width={260}
            height={56}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <div className="hidden w-[44px] h-[44px] rounded-full border border-[#005F73]/50 bg-transparent items-center justify-center relative overflow-hidden transition-colors duration-300">
            <span className="text-[#005F73] font-serif text-base font-bold relative z-10">ZI</span>
          </div>
          <div className="hidden flex-col text-left">
            <span className="font-serif text-[17px] tracking-[0.1em] font-bold leading-none transition-colors text-white group-hover:text-[#005F73]">ZERRAINK</span>
            <span className="text-[#005F73] text-[8px] tracking-[0.2em] font-semibold uppercase mt-1 leading-none">{t('common.ziStudio') || 'ESTÚDIO'}</span>
          </div>
        </Link>

        {/* Desktop Menu Group */}
        <div className="hidden desktop-only-menu items-center">
          {/* Main Navigation Links */}
          <div className="flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`text-[13px] tracking-wide transition-colors duration-300 font-semibold whitespace-nowrap ${
                  location.pathname === link.href ? 'text-[#005F73]' : 'text-white/95 hover:text-[#005F73]'
                }`}
              >
                {(t(`nav.${link.key}`) || link.name).toUpperCase()}
              </Link>
            ))}
          </div>
          
          {/* Actions: Budget Button & Language Selector */}
          <div className="flex items-center gap-5 xl:gap-7 ml-7 xl:ml-9">
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#005F73] hover:bg-[#004e5f] text-white text-[13px] tracking-wider font-bold rounded-full transition-all duration-300 shrink-0 flex items-center justify-center no-underline uppercase cursor-pointer"
            >
              <span>ORÇAMENTO</span>
            </a>
            <LanguageSelector />
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="hidden mobile-menu-toggle text-[#005F73] z-[10001] p-2" 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X size={28} className="opacity-0" />
          ) : (
            <div className="hamburger-lines">
              <span className="bg-[#005F73]"></span>
              <span className="bg-[#005F73]"></span>
              <span className="bg-[#005F73]"></span>
            </div>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#050505]/40 backdrop-blur-[6px] z-[99998] lg:hidden"
            />
            {/* Floating Off-White Mobile Menu Panel */}
            <div className="fixed inset-0 z-[99999] flex justify-end p-0 md:p-6 pointer-events-none lg:hidden">
              <motion.div 
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 350 }}
                className="pointer-events-auto bg-[#FAF9F6] text-zinc-950 rounded-l-[32px] rounded-r-none md:rounded-[28px] shadow-[0_24px_60px_rgba(0,0,0,0.15)] flex flex-col p-6 md:p-8 w-full max-w-[310px] md:max-w-[370px] h-full md:h-auto md:max-h-[calc(100vh-48px)] my-0 md:my-auto overflow-y-auto scrollbar-none border-l md:border border-zinc-200/50"
              >
                {/* Panel Header */}
                <div className="flex items-center justify-between pb-6 border-b border-zinc-200/60 w-full mb-4">
                  {/* ZERRAINK Logo in Panel */}
                  <div className="flex items-center text-left">
                    <img
                      src="/logos/zerraink-menu-original-style.png"
                      alt="ZERRAINK"
                      className="h-[38px] w-auto max-w-[230px] object-contain"
                      width={230}
                      height={50}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="hidden w-[38px] h-[38px] rounded-full border border-[#005F73] bg-[#005F73]/5 items-center justify-center relative overflow-hidden">
                      <span className="text-[#005F73] font-serif text-sm font-bold relative z-10">ZI</span>
                    </div>
                    <div className="hidden flex-col text-left">
                      <span className="text-zinc-950 font-serif text-[14px] tracking-[0.1em] font-bold leading-none">ZERRAINK</span>
                      <span className="text-[#005F73] text-[7.5px] tracking-[0.2em] font-semibold uppercase mt-0.5 leading-none">{t('common.ziStudio') || 'ESTÚDIO'}</span>
                    </div>
                  </div>

                  {/* Close button X on the right */}
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-[#005F73] hover:text-white hover:bg-[#005F73] hover:border-transparent transition-all duration-300 cursor-pointer bg-white shadow-sm"
                    aria-label="Dispensar Menu"
                  >
                    <X size={20} strokeWidth={1.5} />
                  </button>
                </div>

                {/* Main Nav Links Section */}
                <div className="flex flex-col gap-2 py-4 border-b border-zinc-200/60">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.href || (link.href === '/#estudio' && location.pathname === '/' && location.hash === '#estudio');
                    const displayName = (t(`nav.${link.key}`) || link.name).toUpperCase();
 
                    return (
                      <motion.div key={link.name} whileHover={{ x: 6 }} transition={{ duration: 0.2 }}>
                        <Link 
                          to={link.href} 
                          onClick={() => setIsOpen(false)}
                          className={`text-[19px] font-sans font-semibold tracking-wide transition-colors flex items-center justify-between py-2 ${
                            isActive ? 'text-[#005F73]' : 'text-zinc-900 hover:text-[#005F73]'
                          }`}
                        >
                          <span>{displayName}</span>
                          <ChevronRight size={16} className={`transition-transform duration-300 ${isActive ? 'text-[#005F73]' : 'text-zinc-300'}`} />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Languages Section */}
                <div className="mt-4 pt-4 flex flex-col gap-4">
                  <span className="text-[#005F73] text-[10px] uppercase tracking-[0.25em] font-extrabold font-sans leading-none">IDIOMAS</span>
                  
                  <div className="flex flex-col gap-3 py-1">
                    {[
                      { code: 'pt', label: 'PT - PORTUGUÊS' },
                      { code: 'en', label: 'EN - ENGLISH' },
                      { code: 'es', label: 'ES - ESPAÑOL' },
                    ].map((lng) => {
                      const isSelected = i18n.language.startsWith(lng.code);
                      return (
                        <button
                          key={lng.code}
                          onClick={() => {
                            i18n.changeLanguage(lng.code);
                            document.documentElement.lang = lng.code === 'pt' ? 'pt-BR' : lng.code;
                          }}
                          className={`text-left text-[19px] font-sans font-semibold tracking-wide transition-colors py-1 cursor-pointer mobile-language-option ${
                            isSelected ? 'text-[#005F73]' : 'text-zinc-950 hover:text-[#005F73]'
                          }`}
                        >
                          {lng.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Action Button: WhatsApp in Footer of Panel */}
                <div className="mt-auto pt-8 flex justify-center w-full">
                  <a 
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-4 bg-[#005F73] hover:bg-[#004e5f] text-white text-[14px] font-bold tracking-wider rounded-full transition-all duration-300 shadow-md hover:shadow-lg no-link-underline cursor-pointer uppercase"
                  >
                    <span>ORÇAMENTO</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const FooterFull = () => {
  const { t } = useTranslation();

  const navLinks = [
    { name: t('nav.home') || 'Início', href: '/' },
    { name: t('nav.about') || 'Sobre', href: '/sobre' },
    { name: t('nav.styles') || 'Estilos', href: '/estilos' },
    { name: t('nav.gallery') || 'Galeria', href: '/galeria' },
    { name: t('nav.contact') || 'Contato', href: '/contato' },
  ];

  const specialties = [
    { name: t('techniques.realism.title') || 'Realismo Preto e Ceniza', href: '/estilos' },
    { name: t('techniques.fineline.title') || 'Fine Line', href: '/estilos' },
    { name: t('techniques.colorido.title') || 'Colorido', href: '/estilos' },
    { name: t('techniques.coverup.title') || 'Cover-up & Restauro', href: '/estilos' },
    { name: t('techniques.ornamental.title') || 'Ornamental', href: '/estilos' },
    { name: t('techniques.oldschool.title') || 'Old School', href: '/estilos' },
  ];

  return (
    <section className="pt-16 pb-12 bg-black border-t border-[#005F73]/20 overflow-hidden text-left text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-16">
          {/* Coluna 1: Mensagem Autoral */}
          <div className="flex flex-col items-start max-w-[240px]">
            <h4 className="text-[#005F73] text-[10px] tracking-[0.3em] font-bold uppercase mb-4 h-5 flex items-end">
              {t('footer.concept') || 'O ESTÚDIO'}
            </h4>
            <p className="text-gray-400 text-sm font-light leading-relaxed whitespace-pre-line text-left">
              {t('footer.about')}
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="lg:pl-8">
            <h4 className="text-[#005F73] text-[10px] tracking-[0.3em] font-bold uppercase mb-4 h-5 flex items-end">{t('footer.navigation')}</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-white text-sm font-light transition-all duration-300 flex items-center group">
                    <span className="w-0 group-hover:w-3.5 h-[1px] bg-[#005F73] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Especialidades */}
          <div className="lg:pl-4">
            <h4 className="text-[#005F73] text-[10px] tracking-[0.3em] font-bold uppercase mb-4 h-5 flex items-end">{t('footer.specialties') || 'ESTILOS'}</h4>
            <ul className="space-y-2.5">
              {specialties.map((spec) => (
                <li key={spec.name}>
                  <Link to={spec.href} className="text-gray-400 hover:text-white text-sm font-light transition-all duration-300 flex items-center group">
                    <span className="w-0 group-hover:w-3.5 h-[1px] bg-[#005F73] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {spec.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-[#005F73] text-[10px] tracking-[0.3em] font-bold uppercase mb-4 h-5 flex items-end leading-tight">{t('footer.contact')}</h4>
            <div className="space-y-4">
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-8 flex justify-center pt-0.5 text-[#005F73]">
                  <WhatsAppIcon className="group-hover:scale-110 transition-all duration-300 shrink-0" size={18} />
                </div>
                <div>
                  <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold mb-0.5 group-hover:text-[#005F73] transition-colors">{t('footer.labels.whatsapp')}</p>
                  <p className="text-gray-400 text-sm font-light hover:text-white transition-colors duration-300 group-hover:text-white">(16) 98216-0902</p>
                </div>
              </a>
              <div className="flex items-start gap-4 group">
                <div className="w-8 flex justify-center pt-0.5 text-[#005F73]">
                  <MapPin className="group-hover:scale-110 transition-all duration-300" size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold mb-0.5">{t('footer.labels.address')}</p>
                  <p className="text-gray-400 text-sm font-light hover:text-white transition-colors duration-300">Rua Casemiro de Abreu, 256, Sala 26</p>
                  <p className="text-gray-400 text-xs font-light mt-0.5">{t('footer.values.city')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FooterMinimal = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-10 bg-black border-t border-white/5 relative text-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Mobile / Tablet / iPad vertical (less than desktop width, i.e., lg screen size) */}
        <div className="flex lg:hidden flex-col items-center justify-center text-center gap-6 w-full">
          {/* Copyright */}
          <p className="text-gray-400 text-[10px] sm:text-[11.5px] uppercase tracking-[0.18em] font-medium leading-relaxed max-w-full text-center">
            {t('footer.copyright').toUpperCase().replace('2026', new Date().getFullYear().toString())}
          </p>

          {/* Design & desenvolvimento */}
          <p className="text-gray-400 text-[11px] sm:text-[12px] font-light tracking-[0.05em] leading-normal -mt-2 text-center">
            Design & desenvolvimento por <a href="https://tpstudio.io/" target="_blank" rel="noopener noreferrer" className="text-[#005F73] hover:text-[#004e5f] cursor-pointer transition-colors duration-300 font-semibold inline-block">TP Studio</a>.
          </p>

          {/* Legal Links (one below the other, centered, beautifully vertical spaced, no pipes) */}
          <div className="flex flex-col items-center gap-5 text-[11px] sm:text-[12px] uppercase tracking-[0.18em] font-semibold text-gray-400 pt-2 w-full">
            <Link to="/politica-de-privacidade" className="hover:text-[#005F73] transition-colors py-1 cursor-pointer">
              {t('footer.privacy').toUpperCase()}
            </Link>
            <Link to="/termos-de-uso" className="hover:text-[#005F73] transition-colors py-1 cursor-pointer">
              {t('footer.terms').toUpperCase()}
            </Link>
            <Link to="/faq" className="hover:text-[#005F73] transition-colors py-1 cursor-pointer">
              {t('footer.faq').toUpperCase()}
            </Link>
          </div>

          {/* Back to Top Button */}
          <div className="flex items-center justify-center shrink-0 pt-4">
            <motion.button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ scale: 1.1, translateY: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-[#005F73] text-white hover:bg-[#004e5f] transition-all duration-300 group shadow-sm cursor-pointer border border-[#005F73]"
              aria-label={t('common.backToTop') || "Voltar ao início"}
            >
              <ArrowUp size={18} strokeWidth={2.5} className="text-white" />
            </motion.button>
          </div>
        </div>

        {/* Desktop Layout (>= lg screen size) */}
        <div className="hidden lg:flex flex-row justify-between items-center gap-8 w-full">
          {/* Left Side: Copyright & credit */}
          <div className="flex flex-col gap-2 text-left items-start md:w-auto">
            <p className="text-gray-400 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-medium leading-relaxed whitespace-normal max-w-full">
              {t('footer.copyright').toUpperCase().replace('2026', new Date().getFullYear().toString())}
            </p>
            <p className="text-gray-500 text-[11px] sm:text-[11.5px] font-light tracking-[0.05em] leading-normal whitespace-normal">
              Design & desenvolvimento por <a href="https://tpstudio.io/" target="_blank" rel="noopener noreferrer" className="text-[#005F73] hover:text-[#004e5f] cursor-pointer transition-colors duration-300 font-semibold inline-block">TP Studio</a>.
            </p>
          </div>

          {/* Right Side: Links and Button */}
          <div className="flex flex-row items-center gap-8 lg:gap-12 justify-end">
            {/* Legal Links with vertical separator pipes */}
            <div className="flex items-center gap-4 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-medium text-gray-500">
              <Link to="/politica-de-privacidade" className="text-gray-400 hover:text-[#005F73] transition-colors whitespace-normal text-center">
                {t('footer.privacy').toUpperCase()}
              </Link>
              <span className="text-white/10">|</span>
              <Link to="/termos-de-uso" className="text-gray-400 hover:text-[#005F73] transition-colors whitespace-normal text-center">
                {t('footer.terms').toUpperCase()}
              </Link>
              <span className="text-white/10">|</span>
              <Link to="/faq" className="text-gray-400 hover:text-[#005F73] transition-colors whitespace-normal text-center">
                {t('footer.faq').toUpperCase()}
              </Link>
            </div>

            {/* Back to Top Button */}
            <div className="flex items-center justify-center shrink-0">
              <motion.button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                whileHover={{ scale: 1.1, translateY: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full flex items-center justify-center bg-[#005F73] text-white hover:bg-[#004e5f] transition-all duration-300 group shadow-sm cursor-pointer border border-[#005F73]"
                aria-label={t('common.backToTop') || "Voltar ao início"}
              >
                <ArrowUp size={18} strokeWidth={2.5} className="text-white" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
