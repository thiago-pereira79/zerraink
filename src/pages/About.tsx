import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Award, Pencil, Users, Shield, Eye, MessageSquare, Gem, X, ChevronLeft, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import { BackButton } from '../components/Common';

const processPhotos = [
  '/sobre/lucas2.jpeg',
  '/sobre/lucas3.jpeg',
  '/sobre/lucas4.jpeg',
  '/sobre/lucas5.jpeg',
  '/sobre/lucas6.jpeg',
  '/sobre/lucas7.jpeg'
];

const AboutPage = () => {
  const { t } = useTranslation();
  const [selectedProcessIdx, setSelectedProcessIdx] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (selectedProcessIdx === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProcessIdx(null);
      } else if (event.key === 'ArrowRight') {
        setSelectedProcessIdx((prev) => (prev === null ? null : (prev + 1) % processPhotos.length));
      } else if (event.key === 'ArrowLeft') {
        setSelectedProcessIdx((prev) => (prev === null ? null : (prev - 1 + processPhotos.length) % processPhotos.length));
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProcessIdx]);

  return (
    <div className="pt-[var(--header-height)] bg-[#FAF9F6] text-zinc-900 min-h-screen">
      <SEO 
        title={t('seo.about.title') || "Sobre Lucas Zerra | ZERRAINK Estúdio"}
        description={t('seo.about.description') || "Conheça Lucas Zerra, trajetória, prêmios e o manifesto por trás do estúdio de tatuagem de alto padrão em Ribeirão Preto."}
        canonical="/sobre"
      />
      
      {/* SECTION 1: HERO / PORTRAIT AREA */}
      <section className="relative bg-[#050505] pt-12 sm:pt-16 pb-12 overflow-visible text-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Narrative Biografica */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="space-y-4">
                <span className="text-[#005F73] text-[11px] sm:text-xs tracking-[0.45em] font-extrabold uppercase block font-sans">
                  {t('about.artist.tag')}
                </span>
                <h1 className="font-serif text-5xl sm:text-6xl md:text-7.5xl leading-none font-normal tracking-tight text-white uppercase">
                  {t('about.artist.name')}
                </h1>
              </div>

              <div className="space-y-6 text-stone-300 font-light text-sm sm:text-base leading-relaxed max-w-[580px] antialiased text-justify">
                <p>
                  {t('about.artist.p1')}
                </p>
                <p>
                  {t('about.artist.p2')}
                </p>
                <p>
                  {t('about.artist.p3')}
                </p>
                <p>
                  {t('about.artist.p4')}
                </p>
              </div>

              {/* Botão Voltar directly below biography paragraph */}
              <div className="mt-7 mb-7 md:mt-8 md:mb-8 lg:mt-10 lg:mb-10 text-left">
                <BackButton isBack={true} label={t('common.back')} dark={true} />
              </div>
            </div>

            {/* Right Column: Large portrait photography with DESDE 2018 */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end lg:pt-10 items-stretch">
              <div className="flex items-center w-full max-w-[480px]">
                {/* Image Container */}
                <div className="relative flex-1 aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-[0_12px_44px_rgba(0,0,0,0.4)] bg-zinc-950">
                  <img 
                    src="/sobre/lucas1.jpeg" 
                    alt="Lucas Zerra" 
                    className="w-full h-full object-cover object-top hover:scale-101 transition-all duration-1000 ease-out animate-fade-in"
                    width={960}
                    height={1280}
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                  />
                </div>
                
                {/* Vertical DESDE 2018 ribbon on the right */}
                <div className="hidden sm:flex flex-col items-center justify-center shrink-0 ml-6 py-4 select-none">
                  <div className="h-16 w-[1.5px] bg-[#005F73]/35 mb-4"></div>
                  <span className="font-sans text-[#005F73] font-bold text-[10px] tracking-[0.45em] uppercase [writing-mode:vertical-lr] rotate-180">
                    {t('about.artist.since', 'DESDE 2018')}
                  </span>
                  <div className="h-16 w-[1.5px] bg-[#005F73]/35 mt-4"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: 6 HORIZONTAL PROCESS PHOTOS */}
      <section className="bg-[#FAF9F6] pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {processPhotos.map((img, i) => (
              <button
                key={i} 
                type="button"
                onClick={() => setSelectedProcessIdx(i)}
                className="aspect-[10/16] rounded-2xl overflow-hidden border border-stone-200/50 bg-stone-50 shadow-[0_4px_12px_rgba(0,0,0,0.015)] group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005F73] focus-visible:ring-offset-4 focus-visible:ring-offset-[#FAF9F6]"
                aria-label={`Abrir imagem ${i + 1}`}
              >
                <img 
                  src={img} 
                  alt={`Processo ${i + 1}`} 
                  className="w-full h-full object-cover object-center scale-100 group-hover:scale-104 duration-700 transition-transform"
                  width={640}
                  height={1024}
                  loading={i < 3 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: TRAJETÓRIA */}
      <section className="bg-[#FAF9F6] py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Subsection Header */}
          <div className="mb-16 text-left space-y-4">
            <span className="text-[#005F73] text-[11px] sm:text-xs tracking-[0.45em] font-extrabold uppercase block font-sans">
              {t('about.trajectory.tag')}
            </span>
            <h2 className="font-serif text-2xl sm:text-3.5xl md:text-4xl lg:text-[44px] leading-[0.98] tracking-[-0.03em] font-light text-zinc-950 uppercase">
              {t('about.trajectory.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            
            {/* Step 1 */}
            <div className="bg-[#050505] p-8 rounded-3xl border border-[#005F73]/20 shadow-sm flex flex-col justify-start min-h-[340px] md:min-h-[340px] h-full pb-8 relative overflow-hidden group hover:border-[#005F73] hover:shadow-[0_0_20px_rgba(0,95,115,0.08)] transition-all duration-300">
              <div className="w-12 h-12 rounded-full border border-[#005F73]/15 bg-[#005F73]/5 flex items-center justify-center text-[#005F73] shrink-0">
                <Users size={20} strokeWidth={1.5} />
              </div>
              <div className="space-y-3 text-left mt-8">
                <h3 className="font-serif text-lg sm:text-xl lg:text-2xl leading-[1.05] tracking-[-0.015em] text-white uppercase">
                  {t('about.trajectory.step1.title')}
                </h3>
                <p className="text-[clamp(0.95rem,1vw,1.05rem)] leading-[1.75] text-stone-300 font-light text-left">
                  {t('about.trajectory.step1.desc')}
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#050505] p-8 rounded-3xl border border-[#005F73]/20 shadow-sm flex flex-col justify-start min-h-[340px] md:min-h-[340px] h-full pb-8 relative overflow-hidden group hover:border-[#005F73] hover:shadow-[0_0_20px_rgba(0,95,115,0.08)] transition-all duration-300">
              <div className="w-12 h-12 rounded-full border border-[#005F73]/15 bg-[#005F73]/5 flex items-center justify-center text-[#005F73] shrink-0">
                <Pencil size={20} strokeWidth={1.5} />
              </div>
              <div className="space-y-3 text-left mt-8">
                <h3 className="font-serif text-lg sm:text-xl lg:text-2xl leading-[1.05] tracking-[-0.015em] text-white uppercase">
                  {t('about.trajectory.step2.title')}
                </h3>
                <p className="text-[clamp(0.95rem,1vw,1.05rem)] leading-[1.75] text-stone-300 font-light text-left">
                  {t('about.trajectory.step2.desc')}
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#050505] p-8 rounded-3xl border border-[#005F73]/20 shadow-sm flex flex-col justify-start min-h-[340px] md:min-h-[340px] h-full pb-8 relative overflow-hidden group hover:border-[#005F73] hover:shadow-[0_0_20px_rgba(0,95,115,0.08)] transition-all duration-300">
              <div className="w-12 h-12 rounded-full border border-[#005F73]/15 bg-[#005F73]/5 flex items-center justify-center text-[#005F73] shrink-0">
                <Pencil size={20} strokeWidth={1.5} />
              </div>
              <div className="space-y-3 text-left mt-8">
                <h3 className="font-serif text-lg sm:text-xl lg:text-2xl leading-[1.05] tracking-[-0.015em] text-white uppercase">
                  {t('about.trajectory.step3.title')}
                </h3>
                <p className="text-[clamp(0.95rem,1vw,1.05rem)] leading-[1.75] text-stone-300 font-light text-left">
                  {t('about.trajectory.step3.desc')}
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-[#050505] p-8 rounded-3xl border border-[#005F73]/20 shadow-sm flex flex-col justify-start min-h-[340px] md:min-h-[340px] h-full pb-8 relative overflow-hidden group hover:border-[#005F73] hover:shadow-[0_0_20px_rgba(0,95,115,0.08)] transition-all duration-300">
              <div className="w-12 h-12 rounded-full border border-[#005F73]/15 bg-[#005F73]/5 flex items-center justify-center text-[#005F73] shrink-0">
                <Award size={20} strokeWidth={1.5} />
              </div>
              <div className="space-y-3 text-left mt-8">
                <h3 className="font-serif text-lg sm:text-xl lg:text-2xl leading-[1.05] tracking-[-0.015em] text-white uppercase">
                  {t('about.trajectory.step4.title')}
                </h3>
                <p className="text-[clamp(0.95rem,1vw,1.05rem)] leading-[1.75] text-stone-300 font-light text-left">
                  {t('about.trajectory.step4.desc')}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: HOW I WORK / VALUES */}
      <section className="bg-[#FAF9F6] py-24 select-none">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-left space-y-4">
            <span className="text-[#005F73] text-[11px] sm:text-xs tracking-[0.45em] font-extrabold uppercase block font-sans">
              {t('about.values.tag')}
            </span>
            <h2 className="font-serif text-2xl sm:text-3.5xl md:text-4xl lg:text-[44px] leading-[0.98] tracking-[-0.03em] font-light text-zinc-950 uppercase">
              {t('about.values.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {/* Value 1 */}
            <div className="bg-[#050505] p-8 rounded-3xl border border-[#005F73]/20 shadow-sm flex flex-col justify-start min-h-[340px] md:min-h-[340px] h-full pb-8 relative overflow-hidden group hover:border-[#005F73] hover:shadow-[0_0_20px_rgba(0,95,115,0.08)] transition-all duration-300">
              <div className="w-12 h-12 rounded-full border border-[#005F73]/15 bg-[#005F73]/5 flex items-center justify-center text-[#005F73] shrink-0">
                <Shield size={20} strokeWidth={1.5} />
              </div>
              <div className="space-y-3 text-left mt-8">
                <h3 className="font-serif text-lg sm:text-xl lg:text-2xl leading-[1.05] tracking-[-0.015em] text-white uppercase">
                  {t('about.values.val1.title')}
                </h3>
                <p className="text-[clamp(0.95rem,1vw,1.05rem)] leading-[1.75] text-stone-300 font-light text-left">
                  {t('about.values.val1.desc')}
                </p>
              </div>
            </div>

            {/* Value 2 */}
            <div className="bg-[#050505] p-8 rounded-3xl border border-[#005F73]/20 shadow-sm flex flex-col justify-start min-h-[340px] md:min-h-[340px] h-full pb-8 relative overflow-hidden group hover:border-[#005F73] hover:shadow-[0_0_20px_rgba(0,95,115,0.08)] transition-all duration-300">
              <div className="w-12 h-12 rounded-full border border-[#005F73]/15 bg-[#005F73]/5 flex items-center justify-center text-[#005F73] shrink-0">
                <Eye size={20} strokeWidth={1.5} />
              </div>
              <div className="space-y-3 text-left mt-8">
                <h3 className="font-serif text-lg sm:text-xl lg:text-2xl leading-[1.05] tracking-[-0.015em] text-white uppercase">
                  {t('about.values.val2.title')}
                </h3>
                <p className="text-[clamp(0.95rem,1vw,1.05rem)] leading-[1.75] text-stone-300 font-light text-left">
                  {t('about.values.val2.desc')}
                </p>
              </div>
            </div>

            {/* Value 3 */}
            <div className="bg-[#050505] p-8 rounded-3xl border border-[#005F73]/20 shadow-sm flex flex-col justify-start min-h-[340px] md:min-h-[340px] h-full pb-8 relative overflow-hidden group hover:border-[#005F73] hover:shadow-[0_0_20px_rgba(0,95,115,0.08)] transition-all duration-300">
              <div className="w-12 h-12 rounded-full border border-[#005F73]/15 bg-[#005F73]/5 flex items-center justify-center text-[#005F73] shrink-0">
                <MessageSquare size={20} strokeWidth={1.5} />
              </div>
              <div className="space-y-3 text-left mt-8">
                <h3 className="font-serif text-lg sm:text-xl lg:text-2xl leading-[1.05] tracking-[-0.015em] text-white uppercase">
                  {t('about.values.val3.title')}
                </h3>
                <p className="text-[clamp(0.95rem,1vw,1.05rem)] leading-[1.75] text-stone-300 font-light text-left">
                  {t('about.values.val3.desc')}
                </p>
              </div>
            </div>

            {/* Value 4 */}
            <div className="bg-[#050505] p-8 rounded-3xl border border-[#005F73]/20 shadow-sm flex flex-col justify-start min-h-[340px] md:min-h-[340px] h-full pb-8 relative overflow-hidden group hover:border-[#005F73] hover:shadow-[0_0_20px_rgba(0,95,115,0.08)] transition-all duration-300">
              <div className="w-12 h-12 rounded-full border border-[#005F73]/15 bg-[#005F73]/5 flex items-center justify-center text-[#005F73] shrink-0">
                <Gem size={20} strokeWidth={1.5} />
              </div>
              <div className="space-y-3 text-left mt-8">
                <h3 className="font-serif text-lg sm:text-xl lg:text-2xl leading-[1.05] tracking-[-0.015em] text-white uppercase">
                  {t('about.values.val4.title')}
                </h3>
                <p className="text-[clamp(0.95rem,1vw,1.05rem)] leading-[1.75] text-stone-300 font-light text-left">
                  {t('about.values.val4.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProcessIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#050505]/98 z-[9999] flex items-center justify-center select-none"
            onClick={() => setSelectedProcessIdx(null)}
          >
            <button
              type="button"
              onClick={() => setSelectedProcessIdx(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-[#005F73] transition-colors cursor-pointer p-3 z-50 bg-black/20 hover:bg-black/40 rounded-full"
              aria-label={t('gallery.closeImage') || 'Fechar imagem'}
            >
              <X size={28} strokeWidth={1.5} />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setSelectedProcessIdx((prev) => (prev === null ? null : (prev - 1 + processPhotos.length) % processPhotos.length));
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#005F73] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer p-3 md:p-4 z-50 bg-black/20 hover:bg-black/40 rounded-full"
              aria-label={t('gallery.prevImage') || 'Imagem anterior'}
            >
              <ChevronLeft size={36} strokeWidth={1.5} />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setSelectedProcessIdx((prev) => (prev === null ? null : (prev + 1) % processPhotos.length));
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#005F73] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer p-3 md:p-4 z-50 bg-black/20 hover:bg-black/40 rounded-full"
              aria-label={t('gallery.nextImage') || 'Próxima imagem'}
            >
              <ChevronRight size={36} strokeWidth={1.5} />
            </button>

            <div
              className="relative max-w-[86vw] max-h-[86vh] flex flex-col items-center justify-center pointer-events-none"
              onClick={(event) => event.stopPropagation()}
            >
              <motion.img
                key={selectedProcessIdx}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2 }}
                src={processPhotos[selectedProcessIdx]}
                alt={`Processo ${selectedProcessIdx + 1}`}
                className="max-w-full max-h-[68vh] md:max-h-[74vh] object-contain rounded-xl border border-white/10 shadow-2xl pointer-events-auto"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />

              <div className="mt-5 flex flex-col items-center gap-3 pointer-events-auto">
                <div className="flex items-center justify-center gap-2">
                  {processPhotos.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={() => setSelectedProcessIdx(dotIdx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        dotIdx === selectedProcessIdx ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/60'
                      }`}
                      aria-label={`Ir para imagem ${dotIdx + 1}`}
                    />
                  ))}
                </div>

                <div className="text-white/45 text-[10px] sm:text-xs tracking-widest font-mono">
                  {selectedProcessIdx + 1} / {processPhotos.length}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AboutPage;
