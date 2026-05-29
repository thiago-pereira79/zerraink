import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Shield, 
  Sparkles, 
  Award, 
  Clock,
  Heart,
  MessageSquare
} from 'lucide-react';
import { TESTIMONIALS, WHATSAPP_URL, EMAIL_URL } from '../constants';
import SEO from '../components/SEO';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { recentTattooImages, styleCoverImages } from '../assets/tattooImages';

const sectionEyebrowClass = "text-[#005F73] text-[10px] sm:text-xs tracking-[0.45em] font-extrabold block uppercase leading-none font-sans";
const sectionTitleClass = "font-serif text-2xl sm:text-3.5xl md:text-4xl lg:text-[44px] leading-[0.98] tracking-[-0.03em] font-light uppercase";
const sectionCtaClass = "group text-[#005F73] hover:text-[#004e5f] text-xs font-bold uppercase tracking-[0.2em] inline-flex items-center gap-2 pb-1 border-b border-[#005F73]/30 hover:border-[#004e5f]/50 transition-all duration-300 cursor-pointer font-sans select-none";

const Home = () => {
  const { t } = useTranslation();
  const featuredTestimonial = TESTIMONIALS.find(item => item.name === "THIAGO") || TESTIMONIALS[0];
  const studioVideoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleStudioVideo = () => {
    if (!studioVideoRef.current) return;
    if (studioVideoRef.current.paused) {
      studioVideoRef.current.play()
        .then(() => setIsVideoPlaying(true))
        .catch(err => console.log("Video play interrupted", err));
    } else {
      studioVideoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };

  const homeStyleCards = [
    {
      id: 'realism',
      title: 'Realismo Preto e Cinza',
      img: styleCoverImages.realism,
      desc: 'Sombras, contraste e profundidade extrema de preto e cinza.'
    },
    {
      id: 'fineline',
      title: 'Fine Line',
      img: styleCoverImages.fineline,
      desc: 'Linhas finas, precisas, minimalistas e delicadas.'
    },
    {
      id: 'colorido',
      title: 'Colorido',
      img: styleCoverImages.colorido,
      desc: 'Cor, vivacidade e impacto em paletas premium.'
    },
    {
      id: 'coverup',
      title: 'Cover-up & Restauro',
      img: styleCoverImages.coverup,
      desc: 'Transformação impecável e renascimento para marcas antigas.'
    },
    {
      id: 'ornamental',
      title: 'Ornamental',
      img: styleCoverImages.ornamental,
      desc: 'Mandalas, simetria e padrões anatômicos elegantes.'
    },
    {
      id: 'oldschool',
      title: 'Old School',
      img: styleCoverImages.oldschool,
      desc: 'O tradicional clássico americano com traço bold.'
    }
  ];

  const trustItems = [
    {
      id: 'card1',
      title: 'ESCUTA INICIAL',
      desc: 'A ideia começa com uma conversa sobre referências, estilo, pele, significado e expectativa.',
      icon: <MessageSquare size={28} className="text-[#005F73]" />
    },
    {
      id: 'card2',
      title: 'CRIAÇÃO DO PROJETO',
      desc: 'O desenho é pensado para respeitar seu corpo, sua história e a estética que combina com você.',
      icon: <Sparkles size={28} className="text-[#005F73]" />
    },
    {
      id: 'card3',
      title: 'SESSÃO COM CUIDADO',
      desc: 'O atendimento acontece com preparo, segurança, técnica e um ambiente pensado para acolher.',
      icon: <Heart size={28} className="text-[#005F73]" />
    },
    {
      id: 'card4',
      title: 'RESULTADO COM PRESENÇA',
      desc: 'Uma tatuagem feita para durar visualmente, emocionalmente e artisticamente.',
      icon: <Award size={28} className="text-[#005F73]" />
    }
  ];

  const recentTattoos = recentTattooImages;

  const faqData = [
    {
      id: 'faq-1',
      q: 'Como funciona o orçamento?',
      a: 'O orçamento é feito de forma individual, após o envio da sua ideia, referências, local do corpo e tamanho aproximado. Eu avalio estilo, complexidade, área anatômica, nível de detalhe e tempo estimado de sessão para calcular o valor com mais precisão.'
    },
    {
      id: 'faq-2',
      q: 'Preciso agendar antes?',
      a: 'Sim. O atendimento no ZERRAINK Estúdio acontece com horário marcado, para garantir organização, privacidade e dedicação individual. Após a aprovação do orçamento, a data é alinhada diretamente comigo.'
    },
    {
      id: 'faq-3',
      q: 'Posso enviar referências?',
      a: 'Sim. Referências ajudam a entender o caminho visual, o estilo, a composição e a atmosfera que você busca. Elas servem como direção, mas o objetivo é criar uma tatuagem própria, adaptada ao seu corpo e à proposta do estúdio.'
    },
    {
      id: 'faq-12',
      q: 'Quais cuidados preciso ter depois?',
      a: 'É importante seguir as orientações passadas pelo estúdio. Em geral, evite sol, praia, piscina, atrito, coçar ou arrancar casquinhas. A higienização correta e o uso dos produtos indicados ajudam na cicatrização e conservação da tatuagem.'
    }
  ];

  return (
    <div className="bg-[#FAF9F6] text-zinc-900 relative font-sans overflow-x-hidden min-h-screen">
      <SEO 
        title="ZERRAINK STUDIO"
        description={t('hero.description') || 'Estúdio de tatuagem em Ribeirão Preto, especializado em projetos autorais criados com técnica, presença e significado.'}
        canonical="/"
      />
      
      {/* 1. HERO SECTION - Premium Minimalist Dark Layout */}
      <section className="relative min-h-[calc(100vh-var(--header-height))] flex flex-col justify-center pt-32 sm:pt-36 pb-16 sm:pb-20 lg:pb-24 bg-[#050505] overflow-hidden select-none">

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col items-center text-center">
          
          {/* Main big display headings */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-[76px] lg:text-[88px] font-extrabold leading-[1.04] tracking-tight uppercase max-w-5xl mx-auto">
            <span className="text-white block transition-all duration-300">{t('hero.title') || "ARTE EXCLUSIVA"}</span>
            <span className="text-[#005F73] block mt-2 font-serif font-light tracking-tight">{t('hero.subtitle') || "PARA SUA PELE."}</span>
          </h1>

          {/* Ornamental central line with diamonds */}
          <div className="flex items-center justify-center gap-4 my-8 w-full max-w-lg mx-auto">
            <div className="w-16 sm:w-24 h-[1px] bg-[#005F73]/30"></div>
            <div className="flex items-center gap-1.5 shrink-0">
              <div className="w-2.5 h-2.5 rotate-45 border border-[#005F73]/70"></div>
              <div className="w-2.5 h-2.5 rotate-45 bg-[#005F73]"></div>
              <div className="w-2.5 h-2.5 rotate-45 border border-[#005F73]/70"></div>
            </div>
            <div className="w-16 sm:w-24 h-[1px] bg-[#005F73]/30"></div>
          </div>

          {/* Descriptive text block */}
          <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed max-w-[720px] mx-auto text-center px-4">
            {t('hero.description') || 'Estúdio de tatuagem em Ribeirão Preto, especializado em projetos autorais criados com técnica, presença e significado.'}
          </p>

          {/* Horizontal badges row */}
          <div className="flex flex-wrap items-center justify-center gap-4.5 mt-10 max-w-4xl mx-auto">
            {[
              { key: 'autoral', defaultLabel: 'AUTORAL', icon: <Sparkles size={15} className="text-[#005F73]" /> },
              { key: 'exclusive', defaultLabel: 'EXCLUSIVO', icon: <Shield size={15} className="text-[#005F73]" /> },
              { key: 'personalized', defaultLabel: 'PERSONALIZADO', icon: <Award size={15} className="text-[#005F73]" /> },
              { key: 'timeless', defaultLabel: 'ATEMPORAL', icon: <Clock size={15} className="text-[#005F73]" /> }
            ].map((badge) => (
              <div 
                key={badge.key} 
                className="flex items-center gap-2.5 px-6 py-3.5 bg-[#050505]/40 border border-[#005F73]/25 hover:border-[#005F73]/55 transition-all duration-300 rounded-lg shadow-sm"
              >
                {badge.icon}
                <span className="text-white text-[12px] font-bold tracking-[0.2em] font-sans">
                  {(t(`hero.cards.${badge.key}`) || badge.defaultLabel).toUpperCase()}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. TRUST BANNER - Beautiful luxury off-white block section */}
      <section className="bg-white text-zinc-900 py-16 sm:py-20 border-t border-b border-zinc-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left mb-12 sm:mb-16 space-y-3">
            <span className={sectionEyebrowClass}>
              {t('home.trust.tag') || 'CAMINHO ATÉ SUA TATUAGEM'}
            </span>
            <h2 className={`${sectionTitleClass} text-[#050505]`}>
              {t('home.trust.title') || 'A jornada da experiência'}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {trustItems.map((item, i) => (
              <div 
                key={i} 
                className="bg-[#050505] p-8 rounded-3xl border border-[#005F73]/20 shadow-sm flex flex-col justify-start min-h-[320px] h-full pb-8 relative overflow-hidden group hover:border-[#005F73] hover:shadow-[0_0_20px_rgba(0,95,115,0.08)] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full border border-[#005F73]/15 bg-[#005F73]/5 flex items-center justify-center text-[#005F73] shrink-0 group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="space-y-3 text-left mt-8">
                  <h3 className="font-serif text-lg sm:text-xl lg:text-2xl leading-[1.05] tracking-[-0.015em] text-white uppercase">
                    {t(`home.trust.${item.id}.title`) || item.title}
                  </h3>
                  <p className="text-[clamp(0.95rem,1vw,1.05rem)] leading-[1.75] text-stone-300 font-light text-left">
                    {t(`home.trust.${item.id}.desc`) || item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PREVIEW OF STYLES - Premium Minimalist Dark Layout with 6 beautiful cards display */}
      <section className="bg-[#050505] text-white py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12 text-left">
            <div className="space-y-3">
              <span className={sectionEyebrowClass}>
                {t('home.styles.tag') || 'ESTILOS AUTORAIS'}
              </span>
              <h2 className={`${sectionTitleClass} text-white`}>
                {t('styles.intro.titleBriefFirst', 'Encontre o estilo') || 'Encontre o estilo'} <br />
                <span className="text-white font-serif leading-none tracking-tight block mt-2 uppercase font-light">
                  {t('styles.intro.titleBriefSecond', 'QUE COMBINA COM VOCÊ.') || 'QUE COMBINA COM VOCÊ.'}
                </span>
              </h2>
            </div>
            
            <Link 
              to="/estilos"
              className={sectionCtaClass}
            >
              <span>{t('home.styles.viewAll') || 'VER TODOS OS ESTILOS'}</span>
              <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {homeStyleCards.map((style, idx) => (
              <div 
                key={style.id}
                className="group relative h-[400px] rounded-2xl overflow-hidden shadow-xs flex flex-col justify-end p-8 sm:p-10 border border-white/5"
              >
                {/* Background layout */}
                <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
                  <img 
                    src={style.img} 
                    alt={t(`techniques.${style.id}.title`) || style.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover brightness-95 saturate-110 contrast-[1.02] scale-100 group-hover:scale-105 transition-transform duration-700"
                    width={900}
                    height={900}
                    loading={idx < 3 ? 'eager' : 'lazy'}
                    decoding="async"
                    fetchPriority={idx === 0 ? 'high' : 'auto'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/35 to-black/85 group-hover:via-black/45 duration-500" />
                </div>

                <div className="relative z-10 text-left w-full flex flex-col">
                  <h3 className="font-serif text-lg sm:text-xl lg:text-2xl leading-[1.05] tracking-[-0.015em] text-white uppercase mb-3">
                    {t(`techniques.${style.id}.title`) || style.title}
                  </h3>
                  
                  <p className="text-[clamp(0.95rem,1vw,1.05rem)] leading-[1.75] text-white/70 font-light text-left">
                    {t(`techniques.${style.id}.desc`) || style.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PREVIEW OF ABOUT - Pure off-white minimalist and luxury stats */}
      <section className="bg-[#FAF9F6] text-stone-900 py-24 border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Vertical Video Block with Poster */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="w-full max-w-[420px] flex flex-col items-center">
                <div className="relative w-full aspect-[9/16] overflow-hidden border border-stone-200 rounded-3xl shadow-xl bg-stone-100 group">
                  {/* Real Video element */}
                  <video
                    ref={studioVideoRef}
                    src="/sobre/videolucas.mp4"
                    className="w-full h-full object-cover brightness-95 transform scale-100 transition-all duration-1000 ease-out cursor-pointer"
                    controls
                    playsInline
                    preload="metadata"
                    onPlay={() => setIsVideoPlaying(true)}
                    onPause={() => setIsVideoPlaying(false)}
                    onEnded={() => setIsVideoPlaying(false)}
                  />

                  {/* Cinematic Overlays - clickable, disappears when video is playing */}
                  <div 
                    onClick={toggleStudioVideo}
                    className={`absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10 group-hover:bg-black/20 transition-all duration-500 cursor-pointer ${
                      isVideoPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
                    }`}
                  />
                  
                  {/* Pulsing Play Button Center - clickable, disappears when video is playing */}
                  <div 
                    onClick={toggleStudioVideo}
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-300 cursor-pointer ${
                      isVideoPlaying ? "opacity-0 pointer-events-none scale-90" : "opacity-100 scale-100"
                    }`}
                  >
                    <div className="w-16 h-16 rounded-full bg-[#005F73]/90 hover:bg-[#005F73] text-white flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 select-none backdrop-blur-xs relative">
                      {/* Ripple rings to represent motion/pulsation */}
                      <div className="absolute inset-0 rounded-full bg-[#005F73] animate-ping opacity-25" />
                      <svg className="w-6 h-6 fill-current text-white translate-x-0.5 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative + stats */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="space-y-3">
                <span className={sectionEyebrowClass}>
                  {t('home.artist.tag') || t('about.artist.tag') || 'LUCAS ZERRA'}
                </span>
                <h2 className={`${sectionTitleClass} text-[#050505]`}>
                  {t('home.artist.titleBrief') || 'Arte, legado e propósito.'}
                </h2>
              </div>

              <p className="text-stone-600 font-light text-[15px] sm:text-base leading-relaxed max-w-2xl text-justify">
                {t('home.artist.description_full') || t('home.artist.description') || t('about.artist.p1') || 'Tatuador desde 2018, carrego a arte na pele como herança, expressão e propósito. Minha trajetória começou dentro da própria família, tendo no meu irmão mais velho meu primeiro mestre, e segue sendo construída com dedicação, evolução constante e sensibilidade em cada detalhe. Hoje, em Ribeirão Preto, desenvolvo projetos que vão do minimalismo às composições mais complexas, sempre buscando criar tatuagens com personalidade, significado e originalidade.'}
              </p>

              {/* Unique stats row (Reorganized to 2 columns) */}
              <div className="grid grid-cols-2 gap-6 pt-4 max-w-md border-t border-b border-stone-200/60 py-6">
                <div>
                  <span className="font-serif text-3xl sm:text-4xl font-normal text-[#050505] leading-none block">
                    {t('home.artist.experienceValue') || '+8 anos'}
                  </span>
                  <span className="text-[12px] uppercase text-stone-400 tracking-wider font-bold block mt-1 leading-normal">
                    {t('home.artist.experienceLabel') || 'de experiência'}
                  </span>
                </div>
                <div className="border-l border-stone-200 pl-6">
                  <span className="font-serif text-3xl sm:text-4xl font-normal text-[#050505] leading-none block">
                    {t('home.artist.reviewsValue') || '100%'}
                  </span>
                  <span className="text-[12px] uppercase text-stone-400 tracking-wider font-bold block mt-1 leading-normal">
                    {t('home.artist.reviewsLabel') || 'avaliações positivas'}
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Link 
                  to="/sobre" 
                  className="px-8 py-4 bg-[#005F73] hover:bg-[#004e5f] text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full transition-all duration-300 inline-flex items-center gap-2 group shadow-sm cursor-pointer"
                >
                  <span>{t('home.artist.cta') || 'CONHECER MINHA HISTÓRIA'}</span>
                  <span className="transform group-hover:translate-x-1.5 transition-transform">→</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. RECENT GALLERY - Clean elegant row display on dark background */}
      <section className="bg-[#050505] py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-16 text-left">
            <div className="space-y-3">
              <span className={sectionEyebrowClass}>
                {t('home.gallery.tag') || 'GALERIA RECENTE'}
              </span>
              <h2 className={`${sectionTitleClass} text-white`}>
                {t('home.gallery.title') || 'Alguns trabalhos recentes.'}
              </h2>
            </div>
            
            <Link 
              to="/galeria"
              className={sectionCtaClass}
            >
              <span>{t('home.gallery.viewAll') || 'VER GALERIA COMPLETA'}</span>
              <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {recentTattoos.map((img, i) => (
              <div 
                key={i}
                className="relative aspect-square rounded-2xl overflow-hidden border border-white/5 bg-zinc-950 shadow-sm group"
              >
                <img 
                  src={img} 
                  alt={`Trabalho Recente ${i + 1}`} 
                  className="w-full h-full object-cover brightness-100 saturate-110 hover:scale-[1.02] duration-700"
                  width={500}
                  height={500}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5.5 TESTIMONIALS SECTION - Luxury editorial card over soft warm backdrop */}
      <section className="bg-[#FAF9F6] py-24 relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left side text */}
            <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-6">
              <div className="space-y-3">
                <span className={sectionEyebrowClass}>
                  {t('home.testimonials.tag') || 'DEPOIMENTOS'}
                </span>
                <h2 className={`${sectionTitleClass} text-zinc-950`}>
                  {t('home.testimonials.titleBriefFirst', 'Histórias reais,') || 'Histórias reais,'}<br />
                  {t('home.testimonials.titleBriefSecond', 'marcas inesquecíveis.') || 'marcas inesquecíveis.'}
                </h2>
              </div>
              <div className="pt-4 lg:pt-0">
                <Link 
                  to="/depoimentos" 
                  className={sectionCtaClass}
                >
                  <span>{t('home.testimonials.viewAll') || 'VER MAIS DEPOIMENTOS'}</span>
                  <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                </Link>
              </div>
            </div>

            {/* Right side single highlighted testimonial */}
            <div className="lg:col-span-7 flex justify-end w-full">
              <div className="bg-white rounded-[32px] p-8 sm:p-12 border border-stone-200/50 shadow-sm flex flex-col justify-between max-w-[640px] w-full relative hover:shadow-md transition-shadow duration-300">
                <span className="font-serif text-7xl sm:text-8xl text-[#005F73]/25 absolute top-4 left-6 select-none pointer-events-none font-bold pb-2 block">“</span>
                <div className="space-y-4 relative z-10 pt-4">
                  <p className="text-stone-700 font-sans font-light text-[14px] sm:text-[15.5px] leading-relaxed italic antialiased text-left whitespace-pre-line">
                    {t(`home.testimonials.items.${featuredTestimonial.id}`) || featuredTestimonial.text}
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-6 border-t border-stone-100 mt-8 text-left relative z-10">
                  <div className="w-12 h-12 rounded-full bg-[#005F73]/5 border border-[#005F73]/15 flex items-center justify-center text-[#005F73] font-serif font-bold text-lg select-none">
                    {featuredTestimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-sans text-[13px] font-extrabold tracking-widest text-[#005F73] uppercase leading-none">
                      {featuredTestimonial.name}
                    </h4>
                    <div className="flex items-center gap-0.5 text-[#005F73] text-[11px] mt-2 select-none">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. FAQ BLOCK ON INITIAL PAGE - Editorial accordions */}
      <section className="bg-black text-white py-24 border-b border-zinc-900/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left column text */}
            <div className="lg:col-span-5 space-y-6 text-left lg:sticky lg:top-24">
              <div className="space-y-3">
                <span className={sectionEyebrowClass}>
                  {t('home.faq.tag') || 'SUPORTE & ORIENTAÇÃO'}
                </span>
                <h2 className={`${sectionTitleClass} text-zinc-100`}>
                  {t('home.faq.titleBriefFirst', 'Dúvidas') || 'Dúvidas'} <br />
                  {t('home.faq.titleBriefSecond', 'frequentes.') || 'frequentes.'}
                </h2>
              </div>
              <p className="text-stone-300 font-light text-sm sm:text-base leading-relaxed max-w-sm text-left">
                {t('home.faq.desc') || 'Antes de iniciar sua tatuagem, é natural querer entender cada detalhe. Veja as principais dúvidas e siga com mais segurança.'}
              </p>
              <div className="pt-2">
                <Link 
                  to="/faq" 
                  className={sectionCtaClass}
                >
                  <span>{t('home.faq.viewAll') || 'VER TODAS AS PERGUNTAS'}</span>
                  <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                </Link>
              </div>
            </div>

            {/* Right column: 4 clean accordions */}
            <div className="lg:col-span-7 space-y-4">
              {faqData.map((faq, i) => {
                const isOpen = activeFaq === i;
                return (
                  <div 
                    key={i} 
                    className="border border-[#005F73]/15 hover:border-[#005F73]/45 rounded-2xl overflow-hidden bg-[#0c0c0c] transition-all duration-300"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : i)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                    >
                      <span className="font-serif text-base sm:text-lg leading-[1.15] font-medium text-stone-100 pr-4">
                        {t(`faq.questions.${faq.id}.q`) || faq.q}
                      </span>
                      <span className={`text-[#005F73] shrink-0 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-1 text-[clamp(0.95rem,1vw,1.05rem)] leading-[1.75] text-white/70 font-sans font-light border-t border-white/5">
                            {t(`faq.questions.${faq.id}.a`) || faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* 7. FINAL CTA - White/Off-white CTA section per Image Reference 1 */}
      <section className="bg-[#F8F9FA] py-20 lg:py-24 border-t border-zinc-100 relative z-10 text-left">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Column Left: Text & Brand */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className={sectionEyebrowClass}>
                  {t('home.finalCtaBox.tag') || 'VAMOS CONVERSAR?'}
                </span>
                <h2 className={`${sectionTitleClass} text-zinc-900`}>
                  {t('home.finalCtaBox.titleFirstLine', 'Vamos eternizar algo') || 'Vamos eternizar algo'}<br />
                  {t('home.finalCtaBox.titleSecondLine', 'que faça sentido para') || 'que faça sentido para'}<br />
                  {t('home.finalCtaBox.titleThirdLine', 'você?') || 'você?'}
                </h2>
              </div>
              <p className="text-zinc-600 font-light text-sm sm:text-base leading-relaxed max-w-sm">
                {t('home.finalCtaBox.desc') || 'Se você quer tirar uma ideia do papel, entender melhor o processo ou agendar sua próxima tatuagem, esse é o melhor ponto de partida.'}
              </p>
            </div>
            
            {/* Column Right: 3 Interactive Cards */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Card 1: WhatsApp (White background) */}
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-[#050505] border border-[#005F73]/20 text-white p-8 rounded-[24px] shadow-sm hover:shadow-[0_0_20px_rgba(0,95,115,0.08)] transition-all duration-300 hover:-translate-y-1 text-left flex flex-col justify-between min-h-[300px] no-underline"
                >
                  <div className="flex flex-col justify-start text-left">
                    <div className="text-[#128C7E] mb-6 flex items-center justify-start h-10 w-10">
                      <WhatsAppIcon size={32} className="transition-transform duration-300 group-hover:scale-110 shrink-0" />
                    </div>
                    <h3 className="font-serif text-lg font-normal text-white uppercase tracking-tight leading-snug">
                      {t('home.finalCtaBox.whatsappCardTitleFirst', 'CHAMAR NO') || 'CHAMAR NO'}<br />{t('home.finalCtaBox.whatsappCardTitleSecond', 'WHATSAPP') || 'WHATSAPP'}
                    </h3>
                  </div>
                  <div className="flex justify-end mt-6">
                    <div className="w-10 h-10 rounded-full bg-stone-900/50 border border-[#005F73]/20 text-[#005F73] flex items-center justify-center group-hover:bg-[#005F73] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                      <span className="font-serif text-lg">→</span>
                    </div>
                  </div>
                </a>

                {/* Card 2: E-mail (White background) */}
                <a 
                  href={EMAIL_URL}
                  className="group block bg-[#050505] border border-[#005F73]/20 text-white p-8 rounded-[24px] shadow-sm hover:shadow-[0_0_20px_rgba(0,95,115,0.08)] transition-all duration-300 hover:-translate-y-1 text-left flex flex-col justify-between min-h-[300px] no-underline"
                >
                  <div className="flex flex-col justify-start text-left">
                    <div className="mb-6 flex items-center justify-start h-10 w-10">
                      <svg className="w-[35px] h-[26px] transition-transform duration-300 group-hover:scale-110 shrink-0" viewBox="52 42 88 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"/>
                        <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"/>
                        <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"/>
                        <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92"/>
                        <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"/>
                      </svg>
                    </div>
                    <h3 className="font-serif text-lg font-normal text-white uppercase tracking-tight leading-snug">
                      {t('home.finalCtaBox.emailCardTitleFirst', 'ENVIAR') || 'ENVIAR'}<br />{t('home.finalCtaBox.emailCardTitleSecond', 'E-MAIL') || 'E-MAIL'}
                    </h3>
                  </div>
                  <div className="flex justify-end mt-6">
                    <div className="w-10 h-10 rounded-full bg-stone-900/50 border border-[#005F73]/20 text-[#005F73] flex items-center justify-center group-hover:bg-[#005F73] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                      <span className="font-serif text-lg">→</span>
                    </div>
                  </div>
                </a>

                {/* Card 3: VER REDES SOCIAIS (White background, internal link) */}
                <Link 
                  to="/redes-sociais"
                  className="group block bg-[#050505] border border-[#005F73]/20 text-white p-8 rounded-[24px] shadow-sm hover:shadow-[0_0_20px_rgba(0,95,115,0.08)] transition-all duration-300 hover:-translate-y-1 text-left flex flex-col justify-between min-h-[300px] no-underline"
                >
                  <div className="flex flex-col justify-start text-left">
                    <div className="text-[#006C7A] mb-6 flex items-center justify-start h-10 w-10">
                      <svg className="w-[32px] h-[32px] transition-transform duration-300 group-hover:scale-110 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0 1 21.485 12 59.77 59.77 0 0 1 3.27 20.876L5.999 12zm0 0h7.5" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-lg font-normal text-white uppercase tracking-tight leading-snug">
                      {t('home.finalCtaBox.socialCardTitleFirst', 'VER REDES') || 'VER REDES'}<br />{t('home.finalCtaBox.socialCardTitleSecond', 'SOCIAIS') || 'SOCIAIS'}
                    </h3>
                  </div>
                  <div className="flex justify-end mt-6">
                    <div className="w-10 h-10 rounded-full bg-stone-900/50 border border-[#005F73]/20 text-[#005F73] flex items-center justify-center group-hover:bg-[#005F73] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                      <span className="font-serif text-lg">→</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
