import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { MessageSquare, ClipboardCheck, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import { TESTIMONIALS } from '../constants';
import { BackButton, BackButtonWrapper } from '../components/Common';

const Depoimentos = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Trust checkpoints on the right side card (fully translatable format)
  const checkPoints = [
    { 
      title: t('testimonialsPage.trust.check1.title', "Escuta sensível"), 
      desc: t('testimonialsPage.trust.check1.desc', "Cada ideia é tratada com atenção e respeito à sua história.") 
    },
    { 
      title: t('testimonialsPage.trust.check2.title', "Higiene impecável"), 
      desc: t('testimonialsPage.trust.check2.desc', "Ambiente preparado, seguro e profissional.") 
    },
    { 
      title: t('testimonialsPage.trust.check3.title', "Técnica refinada"), 
      desc: t('testimonialsPage.trust.check3.desc', "Precisão do traço e cuidado em cada detalhe.") 
    },
    { 
      title: t('testimonialsPage.trust.check4.title', "Experiência acolhedora"), 
      desc: t('testimonialsPage.trust.check4.desc', "Do primeiro contato à cicatrização, tudo com clareza.") 
    }
  ];

  return (
    <div className="pt-[var(--header-height)] bg-[#FAF9F6] text-zinc-900 min-h-screen">
      <SEO 
        title={t('testimonialsPage.seo.title', "Depoimentos | ZERRAINK Estúdio")}
        description={t('testimonialsPage.seo.description', "Feedbacks reais de pessoas que já viveram o processo com acolhimento, técnica e segurança no ZERRAINK Estúdio.")}
        canonical="/depoimentos"
      />

      {/* 1. TOP EDITORIAL BANNER (DARK BACKGROUND - PADRONIZADO E COMPACTO) */}
      <section className="internal-page-hero relative bg-[#000000] border-b border-zinc-900 overflow-hidden py-12 sm:py-14 text-white">

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl space-y-4 text-left">
            <span className="text-[#005F73] text-[11px] sm:text-xs tracking-[0.45em] font-extrabold uppercase block font-sans">
              {t('testimonialsPage.tag', 'DEPOIMENTOS')}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-4xl font-light text-white leading-tight uppercase tracking-tight">
              {t('testimonialsPage.title', 'Histórias reais, confiança em cada traço')}
            </h1>
            <div className="w-16 h-[1.5px] bg-[#005F73] mt-2"></div>
            <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed pt-1">
              {t('testimonialsPage.desc', 'Cada tatuagem carrega uma história. Confira a experiência de quem já confiou no meu trabalho para transformar significados em arte.')}
            </p>
          </div>
        </div>
      </section>

      {/* 2. BACK BUTTON SECTION */}
      <div className="bg-[#FAF9F6]">
        <BackButtonWrapper className="!my-0 pt-6 pb-2 md:pt-8 md:pb-3 lg:pt-10 lg:pb-4">
          <BackButton to="/" label={t('common.back')} />
        </BackButtonWrapper>
      </div>

      {/* 3. GRID SECTION: CARDS ON THE LEFT, TRUST DETAILS ON THE RIGHT */}
      <section className="relative z-20 pt-4 pb-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Coluna Esquerda: 3 cards informativos empilhados verticalmente */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Card 1 */}
              <div className="bg-white rounded-[20px] p-6 sm:p-7 border border-[#005F73]/12 shadow-sm flex items-center gap-5 hover:border-[#005F73] focus:border-[#005F73] focus:outline-none hover:shadow-[0_0_20px_rgba(0,95,115,0.05)] transition-all duration-300" tabIndex={0}>
                <div className="w-14 h-14 rounded-full bg-[#005F73]/5 border border-[#005F73]/15 flex items-center justify-center text-[#005F73] shrink-0">
                  <MessageSquare size={22} strokeWidth={1.5} />
                </div>
                <div className="text-left space-y-1">
                  <h3 className="font-sans text-[15px] sm:text-[16px] font-bold text-stone-900 tracking-tight">
                    {t('testimonialsPage.cards.feedbacks.title', 'Feedbacks reais')}
                  </h3>
                  <p className="text-[clamp(0.95rem,1vw,1.05rem)] leading-[1.75] text-stone-600 font-light">
                    {t('testimonialsPage.cards.feedbacks.desc', 'Histórias verdadeiras de quem já viveu essa experiência.')}
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-[20px] p-6 sm:p-7 border border-[#005F73]/12 shadow-sm flex items-center gap-5 hover:border-[#005F73] focus:border-[#005F73] focus:outline-none hover:shadow-[0_0_20px_rgba(0,95,115,0.05)] transition-all duration-300" tabIndex={0}>
                <div className="w-14 h-14 rounded-full bg-[#005F73]/5 border border-[#005F73]/15 flex items-center justify-center text-[#005F73] shrink-0">
                  <ClipboardCheck size={22} strokeWidth={1.5} />
                </div>
                <div className="text-left space-y-1">
                  <h3 className="font-sans text-[15px] sm:text-[16px] font-bold text-stone-900 tracking-tight">
                    {t('testimonialsPage.cards.process.title', 'Processo claro')}
                  </h3>
                  <p className="text-[clamp(0.95rem,1vw,1.05rem)] leading-[1.75] text-stone-600 font-light">
                    {t('testimonialsPage.cards.process.desc', 'Orientação desde a ideia até os cuidados pós-sessão.')}
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-[20px] p-6 sm:p-7 border border-[#005F73]/12 shadow-sm flex items-center gap-5 hover:border-[#005F73] focus:border-[#005F73] focus:outline-none hover:shadow-[0_0_20px_rgba(0,95,115,0.05)] transition-all duration-300" tabIndex={0}>
                <div className="w-14 h-14 rounded-full bg-[#005F73]/5 border border-[#005F73]/15 flex items-center justify-center text-[#005F73] shrink-0">
                  <CheckCircle2 size={22} strokeWidth={1.5} />
                </div>
                <div className="text-left space-y-1">
                  <h3 className="font-sans text-[15px] sm:text-[16px] font-bold text-stone-900 tracking-tight">
                    {t('testimonialsPage.cards.safety.title', 'Experiência segura')}
                  </h3>
                  <p className="text-[clamp(0.95rem,1vw,1.05rem)] leading-[1.75] text-stone-600 font-light">
                    {t('testimonialsPage.cards.safety.desc', 'Higiene, técnica e acolhimento em cada etapa.')}
                  </p>
                </div>
              </div>
            </div>

            {/* Coluna Direita: O card da Confiança */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[24px] p-8 sm:p-10 border border-[#005F73]/12 shadow-sm flex flex-col justify-between h-full hover:border-[#005F73] focus:border-[#005F73] focus:outline-none hover:shadow-[0_0_20px_rgba(0,95,115,0.05)] transition-all duration-300 text-left" tabIndex={0}>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-xl sm:text-[22px] font-medium text-stone-900 leading-tight tracking-tight uppercase">
                      {t('testimonialsPage.trust.title', 'A CONFIANÇA DE QUEM JÁ TATUOU')}
                    </h3>
                    <p className="text-stone-500 font-light text-[13px] sm:text-[14px] mt-1.5 leading-relaxed">
                      {t('testimonialsPage.trust.subtitle', 'Muito mais que técnica. Cuidado, respeito e dedicação do início ao fim.')}
                    </p>
                  </div>

                  <div className="space-y-5">
                    {checkPoints.map((pt, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        {/* Custom Double Circle/Target Icon */}
                        <div className="w-[18px] h-[18px] rounded-full border-2 border-[#005F73] flex items-center justify-center shrink-0 mt-0.5">
                          <div className="w-[6px] h-[6px] rounded-full bg-[#005F73]" />
                        </div>
                        <div className="space-y-0.5">
                          <h4 className="font-sans text-[14px] font-bold text-stone-900 leading-tight">
                            {pt.title}
                          </h4>
                          <p className="text-[clamp(0.95rem,1vw,1.05rem)] leading-[1.75] text-stone-600 font-light">
                            {pt.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MORE TESTIMONIALS (Grid of other real testimonials) */}
      <section className="pt-6 pb-16 md:pt-8 md:pb-24 bg-transparent">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Divider & Title */}
          <div className="relative flex items-center justify-center mb-12 sm:mb-16">
            <div className="absolute inset-x-0 h-[1px] bg-stone-200/75" />
            <h2 className="relative bg-[#FAF9F6] px-6 font-serif text-xl sm:text-[22px] text-stone-900 tracking-wider uppercase leading-none font-medium text-center">
              {t('testimonialsPage.more', 'MAIS DEPOIMENTOS')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {TESTIMONIALS.filter(item => item.name !== "THIAGO").map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white rounded-2xl p-6 border border-[#005F73]/12 shadow-sm flex flex-col justify-between h-full hover:border-[#005F73] focus:border-[#005F73] focus:outline-none hover:shadow-[0_0_20px_rgba(0,95,115,0.05)] transition-all duration-300 text-left min-h-[200px]"
                tabIndex={0}
              >
                <div className="space-y-3 pb-4">
                  <span className="font-serif text-4xl text-[#005F73]/25 block select-none pointer-events-none font-bold leading-none mb-1">“</span>
                  <p className="text-[clamp(0.95rem,1vw,1.05rem)] leading-[1.75] text-neutral-600 font-light italic antialiased text-left whitespace-pre-line">
                    {t(`home.testimonials.items.${testimonial.id}`, testimonial.text)}
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-stone-100 mt-6 shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#005F73]/5 border border-[#005F73]/10 flex items-center justify-center text-[#005F73] font-serif font-bold text-sm select-none">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-sans text-[10px] sm:text-[11px] font-bold tracking-wider text-stone-900 uppercase">
                      {testimonial.name}
                    </h4>
                    <div className="flex items-center gap-0.5 text-[#005F73] text-[10px] mt-1 select-none">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Espaço de respiro antes do footer */}
      <div className="pb-8" />
    </div>
  );
};

export default Depoimentos;
