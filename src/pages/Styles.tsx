import React from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { BackButton, BackButtonWrapper } from '../components/Common';
import SEO from '../components/SEO';
import StyleDetailView from './StyleDetailView';
import { styleCoverImages } from '../assets/tattooImages';

interface StyleDetailModalProps {
  styleId: string;
  onClose: () => void;
}

const StyleDetailModal = ({ styleId, onClose }: StyleDetailModalProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const resetScroll = React.useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    container.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    container.scrollTop = 0;
    container.scrollLeft = 0;
  }, []);

  React.useLayoutEffect(() => {
    resetScroll();

    const frame = window.requestAnimationFrame(resetScroll);
    const timer = window.setTimeout(resetScroll, 80);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, [styleId, resetScroll]);

  React.useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, []);

  return createPortal(
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-xs flex items-center justify-center p-4 md:p-6 lg:p-12"
    >
      <motion.div 
        key={styleId}
        ref={containerRef}
        initial={{ scale: 0.97, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.97, opacity: 0, y: 15 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl bg-[#FAF9F6] border border-stone-200 shadow-2xl rounded-3xl overflow-y-auto max-h-[90vh] p-0 text-zinc-900 text-left style-modal-scroll"
      >
        {/* Faixa branca superior (barra de controle) do modal */}
        <div className="sticky top-0 left-0 right-0 h-14 sm:h-16 bg-white z-[10010] flex items-center justify-end px-5 sm:px-6 rounded-t-3xl">
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar detalhe do estilo"
            className="flex h-[38px] w-[38px] items-center justify-center bg-black text-[#005F73] border border-[#005F73]/25 rounded-full hover:bg-zinc-900 transition-all cursor-pointer select-none group"
          >
            <svg 
              className="w-5 h-5 transition-transform group-hover:rotate-90 duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <StyleDetailView styleId={styleId} onClose={onClose} />
      </motion.div>
    </motion.div>,
    document.body
  );
};

const StylesPage = () => {
  const { t } = useTranslation();
  const [selectedStyleId, setSelectedStyleId] = React.useState<string | null>(null);

  const styleCardsData = [
    {
      id: 'realism',
      title: 'Realismo Preto e Cinza',
      desc: 'Detalhes microscópicos, texturas de pele, profundidade de tons e contrastes tridimensionais.',
      img: styleCoverImages.realism
    },
    {
      id: 'fineline',
      title: 'Fine Line',
      desc: 'Traços incrivelmente finos, precisão milimétrica, elegância geométrica e delicadeza.',
      img: styleCoverImages.fineline
    },
    {
      id: 'colorido',
      title: 'Colorido',
      desc: 'Saturação impecável, cores vivas, gradientes fluidos e contrastes cromáticos refinados.',
      img: styleCoverImages.colorido
    },
    {
      id: 'coverup',
      title: 'Cover-up & Restauro',
      desc: 'Resignificação anatômica de tatuagens antigas e marcas corporais de forma sutil.',
      img: styleCoverImages.coverup
    },
    {
      id: 'ornamental',
      title: 'Ornamental',
      desc: 'Mandalas, rendas e arabescos harmônicos que acompanham as linhas musculares.',
      img: styleCoverImages.ornamental
    },
    {
      id: 'oldschool',
      title: 'Old School',
      desc: 'A energia clássica tradicional americana com traços pretos bold e cores sólidas.',
      img: styleCoverImages.oldschool
    }
  ];

  const styleName = selectedStyleId 
    ? (selectedStyleId === 'realism' ? 'Realismo Preto e Cinza' : selectedStyleId === 'fineline' ? 'Fine Line' : selectedStyleId === 'colorido' ? 'Colorido' : selectedStyleId === 'coverup' ? 'Cover-up & Restauro' : selectedStyleId === 'ornamental' ? 'Ornamental' : 'Old School')
    : null;

  return (
    <div className="pt-[var(--header-height)] bg-[#FAF9F6] text-zinc-900 min-h-screen">
      <style>{`
        .modal-scroll, .style-modal-scroll {
          overflow-y: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .modal-scroll::-webkit-scrollbar, .style-modal-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <SEO 
        title={styleName ? `${t(`techniques.${selectedStyleId}.title`) || styleName} | ZERRAINK` : `${t('styles.seo.title') || "Estilos de Tatuagem Autoral"} | ZERRAINK`}
        description={t('styles.seo.description') || "Conheça os estilos que dominamos no estúdio ZERRAINK: Realismo Preto e Cinza, Fine Line, Colorido, Restauro e mais."}
        canonical="/estilos"
      />

      {/* 1. TOP EDITORIAL BANNER (DARK BACKGROUND - PADRONIZADO E COMPACTO) */}
      <section className="internal-page-hero relative bg-[#000000] border-b border-zinc-900 overflow-hidden py-12 sm:py-14 text-white">

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl space-y-4 text-left">
            <span className="text-[#005F73] text-[11px] sm:text-xs tracking-[0.45em] font-extrabold uppercase block font-sans">
              {t('styles.intro.tag') || 'ESTILOS'}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-4xl font-light text-white leading-tight uppercase tracking-tight">
              {t('styles.intro.title') || 'Traços diferentes para histórias diferentes'}
            </h1>
            <div className="w-16 h-[1.5px] bg-[#005F73] mt-2"></div>
            <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed pt-1">
              {t('styles.intro.description') || 'Cada estilo de tatuagem traduz uma linguagem visual única. Explore abaixo as abordagens que utilizo no estúdio de forma autoral e descubra qual delas combina melhor com o seu projeto.'}
            </p>
          </div>
        </div>
      </section>

      {/* 2. BACK BUTTON SECTION */}
      <div className="bg-[#FAF9F6]">
        <BackButtonWrapper className="!my-0 pt-6 pb-2 md:pt-8 md:pb-3 lg:pt-10 lg:pb-4">
          <BackButton to="/" label={t('common.back') || 'Voltar'} />
        </BackButtonWrapper>
      </div>

      {/* 3. STYLES GRID */}
      <section className="bg-[#FAF9F6] pt-4 pb-16 md:pt-6 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-4">
            {styleCardsData.map((style, idx) => (
              <div 
                key={style.id}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedStyleId(style.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedStyleId(style.id);
                  }
                }}
                className="group relative bg-[#FAF9F6] border border-stone-200/60 hover:border-[#005F73]/30 rounded-[32px] p-8 sm:p-10 shadow-sm hover:shadow-md transition-all duration-500 flex flex-col h-auto min-h-[490px] md:min-h-[520px] pb-10 cursor-pointer text-left"
              >
                {/* Photo Preview */}
                <div className="relative w-full h-[220px] rounded-2xl overflow-hidden bg-stone-100 mb-6 shrink-0">
                  <img 
                    src={style.img} 
                    alt={t(`techniques.${style.id}.title`) || style.title} 
                    className="w-full h-full object-cover brightness-95 saturate-110 contrast-[1.02] scale-100 group-hover:scale-[1.03] transition-transform duration-[1.2s] ease-out"
                    referrerPolicy="no-referrer"
                    width={900}
                    height={620}
                    loading={idx < 3 ? 'eager' : 'lazy'}
                    decoding="async"
                    fetchPriority={idx === 0 ? 'high' : 'auto'}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow justify-between">
                  <div className="space-y-2.5">
                    <h3 className="font-serif text-lg sm:text-xl lg:text-2xl leading-[1.05] tracking-[-0.015em] text-zinc-950 uppercase group-hover:text-[#005F73] transition-colors duration-300">
                      {t(`techniques.${style.id}.title`) || style.title}
                    </h3>
                    <p className="text-[clamp(0.95rem,1vw,1.05rem)] leading-[1.75] text-neutral-600 font-light text-left">
                      {t(`techniques.${style.id}.desc`) || style.desc}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-[#005F73] text-xs font-bold uppercase tracking-[0.2em] pt-4 border-t border-stone-200/45">
                    <span>{t('styles.cards.explore') || 'EXPLORAR ESTILO'}</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW THE FLOW WORKS */}
      <section className="bg-[#FAF9F6] py-24 select-none">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <span className="text-[#005F73] text-[11px] font-sans font-extrabold tracking-[0.45em] uppercase block">
              {t('styles.choose.tag') || 'COMO ESCOLHER O ESTILO IDEAL'}
            </span>
            <h2 className="font-serif text-2xl sm:text-3.5xl md:text-4xl lg:text-[44px] leading-[0.98] tracking-[-0.03em] font-light text-zinc-950 uppercase">
              {t('styles.choose.title') || 'COMO ESCOLHER SEU ESTILO IDEAL?'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Step 1 */}
            <div className="bg-[#050505] p-8 rounded-3xl border border-[#005F73]/20 relative space-y-4 shadow-sm hover:border-[#005F73] hover:shadow-[0_0_20px_rgba(0,95,115,0.08)] transition-all duration-300">
              <h4 className="font-serif text-lg sm:text-xl lg:text-2xl leading-[1.05] tracking-[-0.015em] text-white uppercase">
                {t('styles.choose.step1.title', 'Primeiro diálogo') || 'Primeiro diálogo'}
              </h4>
              <p className="text-[clamp(0.95rem,1vw,1.05rem)] leading-[1.75] text-stone-300 font-light text-left">
                {t('styles.choose.step1.desc') || 'Conversamos de forma sensível sobre sua ideia, os elementos chave e significados que pretende trazer no seu projeto.'}
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#050505] p-8 rounded-3xl border border-[#005F73]/20 relative space-y-4 shadow-sm hover:border-[#005F73] hover:shadow-[0_0_20px_rgba(0,95,115,0.08)] transition-all duration-300">
              <h4 className="font-serif text-lg sm:text-xl lg:text-2xl leading-[1.05] tracking-[-0.015em] text-white uppercase">
                {t('styles.choose.step2.title', 'Escolha de técnicas') || 'Escolha de técnicas'}
              </h4>
              <p className="text-[clamp(0.95rem,1vw,1.05rem)] leading-[1.75] text-stone-300 font-light text-left">
                {t('styles.choose.step2.desc') || 'Avaliamos a anatomia, o local do corpo, e sugerimos os melhores recursos técnicos para obter durabilidade e estética incríveis.'}
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#050505] p-8 rounded-3xl border border-[#005F73]/20 relative space-y-4 shadow-sm hover:border-[#005F73] hover:shadow-[0_0_20px_rgba(0,95,115,0.08)] transition-all duration-300">
              <h4 className="font-serif text-lg sm:text-xl lg:text-2xl leading-[1.05] tracking-[-0.015em] text-white uppercase">
                {t('styles.choose.step3.title', 'Desenho exclusivo') || 'Desenho exclusivo'}
              </h4>
              <p className="text-[clamp(0.95rem,1vw,1.05rem)] leading-[1.75] text-stone-300 font-light text-left">
                {t('styles.choose.step3.desc') || 'Desenvolvemos uma criação 100% personalizada e autorizada por você, encaixando com o maximum de simetria anatômica.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedStyleId && (
          <React.Fragment key={selectedStyleId}>
            <StyleDetailModal styleId={selectedStyleId} onClose={() => setSelectedStyleId(null)} />
          </React.Fragment>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StylesPage;
