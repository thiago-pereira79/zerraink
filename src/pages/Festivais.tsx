import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { PremiumImage } from '../components/Common';
import { EVENTS } from '../constants';
import { Award } from 'lucide-react';
import SEO from '../components/SEO';

const Festivais = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-[var(--header-height)]">
      <SEO 
        title={t('seo.festivals.title')}
        description={t('seo.festivals.description')}
        canonical="/festivais"
      />
      <section className="py-24 sm:py-32 bg-ink-black min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <header className="mb-12 md:mb-20 text-left">
            <span className="text-[#005F73] text-[10px] sm:text-xs tracking-[0.4em] sm:tracking-[0.5em] font-bold uppercase mb-4 block">{t('nav.festivais').toUpperCase()}</span>
            <h1 className="fluid-h2 font-serif leading-[1.1] text-white tracking-tight">{t('festivals.intro.title')}</h1>
            <div className="mt-6 h-[1px] w-16 md:w-20 bg-[#005F73]/30"></div>
          </header>
          
          <p className="text-gray-400 text-lg font-light max-w-2xl -mt-10 mb-20 leading-relaxed">
            {t('festivals.intro.description')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
             {EVENTS.map((event) => (
                <motion.article 
                   key={event.id}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="relative group h-[500px] overflow-hidden border border-[#005F73]/10 bg-ink-brown/20"
                >
                    <PremiumImage 
                      src={event.image} 
                      alt={`${t('festivals.eventAltPrefix')} ${event.title} in ${event.location}`} 
                      className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-all duration-1000 grayscale group-hover:grayscale-0"
                      containerClassName="w-full h-full"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-8 bg-[#0B0B0B] border-t border-white/5">
                     <span className="text-[#005F73] text-[10px] tracking-widest uppercase mb-2 block font-bold">{event.year}</span>
                     <h2 className="text-xl font-serif text-white mb-1">{event.title}</h2>
                     <p className="text-gray-500 text-[10px] tracking-widest uppercase mb-6">{event.location}</p>
                     <div className="h-[1px] w-12 bg-[#005F73]/20 mb-4"></div>
                     <span className="text-[9px] uppercase tracking-widest text-[#005F73]/60 font-bold">{t('festivals.badge')}</span>
                   </div>
                </motion.article>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Festivais;
