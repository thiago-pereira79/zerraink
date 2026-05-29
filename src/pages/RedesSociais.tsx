import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { BackButton, BackButtonWrapper } from '../components/Common';
import { getSupportedLanguage, socialPageContent } from '../locales/pageContent';

const RedesSociais = () => {
  const { i18n } = useTranslation();
  const lang = getSupportedLanguage(i18n.language);
  const content = socialPageContent[lang];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="pt-[var(--header-height)] bg-[#FAF9F6] text-zinc-900 min-h-screen">
      <SEO 
        title={content.seoTitle}
        description={content.seoDescription}
        canonical="/redes-sociais"
      />

      {/* 1. TOP EDITORIAL BANNER (DARK BACKGROUND - PADRONIZADO E COMPACTO) */}
      <section className="internal-page-hero relative bg-[#000000] border-b border-zinc-900 overflow-hidden py-12 sm:py-14 text-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl space-y-4 text-left">
            <span className="text-[#005F73] text-[11px] sm:text-xs tracking-[0.45em] font-extrabold uppercase block font-sans">
              {content.tag}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-4xl font-light text-white leading-tight uppercase tracking-tight">
              {content.title}
            </h1>
            <div className="w-16 h-[1.5px] bg-[#005F73] mt-2"></div>
            <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed pt-1">
              {content.description}
            </p>
          </div>
        </div>
      </section>

      {/* 2. BACK BUTTON SECTION */}
      <div className="bg-[#FAF9F6]">
        <BackButtonWrapper className="!my-0 pt-6 pb-2 md:pt-8 md:pb-3 lg:pt-10 lg:pb-4">
          <BackButton to="/" label={content.back} />
        </BackButtonWrapper>
      </div>

      {/* 3. MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 pt-4 pb-16 md:pt-6 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Coluna Esquerda: Texto */}
          <div className="lg:col-span-5 space-y-4 text-left lg:pt-3">
            <div className="w-12 h-[2px] bg-[#005F73]"></div>
            <p className="text-[clamp(0.95rem,1vw,1.05rem)] leading-[1.75] text-neutral-600 font-light max-w-sm pt-2">
              {content.intro}
            </p>
          </div>

          {/* Coluna Direita: 3 horizontal or vertical cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Card 1: Instagram (White background with filled colored SVG) */}
              <a
                href="https://www.instagram.com/zerraink/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-[#050505] border border-[#005F73]/20 text-white p-7 rounded-[24px] shadow-sm hover:shadow-[0_0_20px_rgba(0,95,115,0.08)] transition-all duration-300 hover:-translate-y-1 text-left flex flex-col justify-between min-h-[340px] no-underline"
              >
                <div>
                  <div className="mb-6 flex">
                    {/* Official Colored Filled Instagram Icon */}
                    <svg className="w-11 h-11" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <radialGradient id="ig-grad" cx="25%" cy="100%" r="95%">
                          <stop offset="0%" stopColor="#FFD600" />
                          <stop offset="25%" stopColor="#FF7A00" />
                          <stop offset="50%" stopColor="#FF0069" />
                          <stop offset="75%" stopColor="#D300C5" />
                          <stop offset="100%" stopColor="#7638FA" />
                        </radialGradient>
                      </defs>
                      <rect width="24" height="24" rx="5.5" fill="url(#ig-grad)" />
                      <rect x="5.5" y="5.5" width="13" height="13" rx="3.5" stroke="white" strokeWidth="1.5" fill="none" />
                      <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5" fill="none" />
                      <circle cx="15.8" cy="8.2" r="0.8" fill="white" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-lg font-normal text-white uppercase tracking-tight leading-snug mb-3">
                    INSTAGRAM
                  </h3>
                  <p className="text-[clamp(0.95rem,1vw,1.05rem)] leading-[1.75] text-stone-300 font-light mb-4">
                    {content.cards.instagram}
                  </p>
                </div>
                <div className="flex justify-end mt-6">
                  <div className="w-10 h-10 rounded-full bg-stone-900/50 border border-[#005F73]/20 text-[#005F73] flex items-center justify-center group-hover:bg-[#005F73] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    <span className="font-serif text-lg">&rarr;</span>
                  </div>
                </div>
              </a>

              {/* Card 2: TikTok (White background with filled colored SVG) */}
              <a
                href="https://www.tiktok.com/@zerraink"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-[#050505] border border-[#005F73]/20 text-white p-7 rounded-[24px] shadow-sm hover:shadow-[0_0_20px_rgba(0,95,115,0.08)] transition-all duration-300 hover:-translate-y-1 text-left flex flex-col justify-between min-h-[340px] no-underline"
              >
                <div>
                  <div className="mb-6 flex">
                    {/* Official Colored Filled TikTok Icon */}
                    <svg className="w-11 h-11" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="12" fill="#000000" />
                      <g transform="translate(5.6, 5.6) scale(0.8)">
                        <path 
                          d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" 
                          fill="#FFFFFF" 
                        />
                      </g>
                    </svg>
                  </div>
                  <h3 className="font-serif text-lg font-normal text-white uppercase tracking-tight leading-snug mb-3">
                    TIKTOK
                  </h3>
                  <p className="text-[clamp(0.95rem,1vw,1.05rem)] leading-[1.75] text-stone-300 font-light mb-4">
                    {content.cards.tiktok}
                  </p>
                </div>
                <div className="flex justify-end mt-6">
                  <div className="w-10 h-10 rounded-full bg-stone-900/50 border border-[#005F73]/20 text-[#005F73] flex items-center justify-center group-hover:bg-[#005F73] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    <span className="font-serif text-lg">&rarr;</span>
                  </div>
                </div>
              </a>

              {/* Card 3: Facebook (White background with filled colored SVG) */}
              <a
                href="https://www.facebook.com/lukas.fernando.1088/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-[#050505] border border-[#005F73]/20 text-white p-7 rounded-[24px] shadow-sm hover:shadow-[0_0_20px_rgba(0,95,115,0.08)] transition-all duration-300 hover:-translate-y-1 text-left flex flex-col justify-between min-h-[340px] no-underline"
              >
                <div>
                  <div className="mb-6 flex">
                    {/* Official Colored Filled Facebook Icon */}
                    <svg className="w-11 h-11" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" rx="5.5" fill="#1877F2" />
                      <path d="M16 11.5h-3V19h-3.5v-7.5H7.5V8.5h2V7a3.5 3.5 0 0 1 3.5-3.5H16v3h-2.5a1 1 0 0 0-1 1v1h3.5l-.5 3z" fill="#FFFFFF" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-lg font-normal text-white uppercase tracking-tight leading-snug mb-3">
                    FACEBOOK
                  </h3>
                  <p className="text-[clamp(0.95rem,1vw,1.05rem)] leading-[1.75] text-stone-300 font-light mb-4">
                    {content.cards.facebook}
                  </p>
                </div>
                <div className="flex justify-end mt-6">
                  <div className="w-10 h-10 rounded-full bg-stone-900/50 border border-[#005F73]/20 text-[#005F73] flex items-center justify-center group-hover:bg-[#005F73] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    <span className="font-serif text-lg">&rarr;</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedesSociais;
