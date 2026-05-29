import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { PremiumImage, BackButton, BackButtonWrapper } from '../components/Common';
import { PROCESS_STEPS, VIDEOS } from '../constants';
import { Play, Sparkles, Film } from 'lucide-react';
import SEO from '../components/SEO';

const BehindTheScenes = () => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="pt-[var(--header-height)]">
      <SEO 
        title={t('seo.behind.title')}
        description={t('seo.behind.description')}
        canonical="/bastidores"
      />
      {/* Introduction Header */}
      <section className="bg-ink-black border-b border-[#005F73]/10">
        {/* Standardized Back Button Wrapper */}
        <BackButtonWrapper>
          <BackButton dark={true} />
        </BackButtonWrapper>

        <div className="max-w-7xl mx-auto px-6 pb-12 sm:pb-16 md:pb-24">
          <header className="mb-12 md:mb-20 text-left">
            <span className="text-[#005F73] text-[10px] sm:text-xs tracking-[0.4em] sm:tracking-[0.5em] font-bold uppercase mb-4 block">{t('nav.videos').toUpperCase()}</span>
            <h1 className="fluid-h2 font-serif leading-[1.1] text-white tracking-tight">{t('home.videos.title')}</h1>
            <div className="mt-6 h-[1px] w-16 md:w-20 bg-[#005F73]/30"></div>
          </header>
          
          <p className="text-gray-400 text-lg font-light max-w-2xl -mt-10 mb-20 leading-relaxed">
            {t('home.videos.description')}
          </p>

          <div className="aspect-video relative overflow-hidden border border-[#005F73]/10 group mb-24">
             <PremiumImage 
               src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=1200" 
               className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-105 transition-transform duration-[5s]" 
               alt={t('seo.behind.description')} 
               containerClassName="w-full h-full"
             />
             <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <button className="w-24 h-24 rounded-full border border-[#005F73]/40 flex items-center justify-center bg-black/45 hover:bg-[#005F73] hover:text-white hover:border-[#005F73] transition-all group/btn" aria-label={t('home.videos.viewAll')}>
                   <Play size={28} fill="currentColor" className="ml-1" />
                </button>
                <div className="mt-10">
                   <h2 className="text-white font-serif text-3xl mb-3">{t('home.videos.title')}</h2>
                   <span className="text-[#005F73]/60 text-[10px] uppercase font-bold tracking-[0.4em]">{t('home.videos.description')}</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-24 bg-ink-black border-b border-[#005F73]/10">
        <div className="max-w-7xl mx-auto px-6">
          <header className="mb-20">
             <div className="flex items-center gap-4 mb-4">
                <Film className="text-[#005F73]" size={24} />
                <span className="text-[#005F73] text-[10px] tracking-[0.5em] font-bold uppercase">{t('home.videos.tag')}</span>
             </div>
             <h2 className="text-4xl font-serif text-white">{t('home.videos.title')}</h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VIDEOS.map((video) => (
              <motion.div 
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="group cursor-pointer"
              >
                <div className="aspect-video overflow-hidden border border-[#005F73]/10 relative">
                   <PremiumImage 
                      src={video.thumbnail} 
                      alt={t(`videos.${video.id}.title`)} 
                      className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                      containerClassName="w-full h-full"
                   />
                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 rounded-full bg-[#005F73] text-white flex items-center justify-center">
                         <Play size={16} fill="currentColor" className="ml-1" />
                      </div>
                   </div>
                   <div className="absolute bottom-3 right-3 bg-black/60 px-2 py-1 text-[8px] text-[#005F73] font-mono">
                      {video.duration}
                   </div>
                </div>
                <div className="mt-4">
                   <h3 className="text-white font-serif text-xl group-hover:text-[#005F73] transition-colors">{t(`videos.${video.id}.title`)}</h3>
                   <p className="text-gray-500 text-xs mt-2 font-light">{t(`videos.${video.id}.desc`)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Interactive */}
      <section className="py-24 bg-ink-brown">
         <div className="max-w-7xl mx-auto px-6">
            <header className="mb-12 md:mb-20 text-center">
              <span className="text-[#005F73] text-[10px] sm:text-xs tracking-[0.4em] sm:tracking-[0.5em] font-bold uppercase mb-4 block">{t('styles.process.tag')}</span>
              <h2 className="fluid-h2 font-serif leading-[1.1] text-ink-black tracking-tight">{t('styles.process.title')}</h2>
              <div className="mt-6 h-[1px] w-16 md:w-20 bg-[#005F73]/30 mx-auto"></div>
            </header>

            <div className="flex flex-col gap-12 mt-20">
               {/* Timeline selector */}
               <div className="flex flex-wrap md:flex-nowrap gap-4 justify-between border-b border-[#005F73]/10 pb-8">
                  {PROCESS_STEPS.map((step, i) => (
                  <button
                     key={i}
                     onClick={() => setActiveStep(i)}
                     className={`flex flex-col items-center transition-all ${activeStep === i ? 'text-[#005F73] opacity-100' : 'text-gray-600 opacity-50 hover:opacity-80'}`}
                  >
                     <span className="font-serif text-2xl mb-2">{step.icon}</span>
                     <div className={`w-12 h-1 bg-current transition-all duration-500 mb-2 ${activeStep === i ? 'scale-x-100' : 'scale-x-0'}`}></div>
                     <span className="text-[10px] uppercase tracking-widest hidden sm:block font-bold">{t(`styles.process.steps.${step.id}.title`)}</span>
                  </button>
                  ))}
               </div>

               {/* Active Step Content */}
               <AnimatePresence mode="wait">
                  <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#FFFFFF] p-10 sm:p-20 border border-[#005F73]/5"
                  >
                  <div>
                     <span className="text-[#005F73] text-xs font-bold uppercase tracking-widest mb-6 block">{t('about.manifesto.tag')} {PROCESS_STEPS[activeStep].icon}</span>
                     <h3 className="text-ink-black font-serif text-4xl mb-8">{t(`styles.process.steps.${PROCESS_STEPS[activeStep].id}.title`)}</h3>
                     <p className="text-gray-600 text-lg font-light leading-relaxed mb-10 max-w-md">
                        {t(`styles.process.steps.${PROCESS_STEPS[activeStep].id}.desc`)}
                     </p>
                     <div className="w-20 h-[1px] bg-[#005F73]/40"></div>
                  </div>
                  <div className="aspect-video relative overflow-hidden border border-[#005F73]/10">
                     <PremiumImage 
                        src={`https://images.unsplash.com/photo-${['1598371839696-5c5bb00bdc28', '1562967916-eb82221dfb92', '1634676100870-1376fac7ce4b'][activeStep % 3]}?auto=format&fit=crop&q=80&w=800`}
                        alt={`${t('home.gallery.tag')}: ${t(`styles.process.steps.${PROCESS_STEPS[activeStep].id}.title`)}`} 
                        className="w-full h-full object-cover opacity-60 grayscale"
                        containerClassName="w-full h-full"
                     />
                     <div className="absolute inset-0 bg-[#005F73]/5"></div>
                  </div>
                  </motion.div>
               </AnimatePresence>
            </div>
         </div>
      </section>

      {/* Routine Blocks */}
      <section className="py-24 sm:py-32 bg-ink-black overflow-hidden relative">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-12 border border-[#005F73]/10 bg-white/5 relative group h-full">
               <Sparkles className="text-[#005F73]/20 absolute top-10 right-10" size={40} strokeWidth={1} />
               <h2 className="text-2xl font-serif text-white mb-6">{t('about.differentials.safety.title')}</h2>
               <p className="text-gray-500 font-light text-sm leading-relaxed mb-8">
                  {t('about.differentials.safety.desc')}
               </p>
               <div className="w-12 h-[1px] bg-[#005F73]/30"></div>
            </div>
            <div className="p-12 border border-[#005F73]/10 bg-white/5 relative group h-full">
               <h2 className="text-2xl font-serif text-white mb-6">{t('about.differentials.private.title')}</h2>
               <p className="text-gray-500 font-light text-sm leading-relaxed mb-8">
                  {t('about.differentials.private.desc')}
               </p>
               <div className="w-12 h-[1px] bg-[#005F73]/30"></div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default BehindTheScenes;
