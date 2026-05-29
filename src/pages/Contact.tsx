import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Clock, Mail, CheckCircle2, Instagram } from 'lucide-react';
import { BackButton, BackButtonWrapper } from '../components/Common';
import SEO from '../components/SEO';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { WHATSAPP_URL, EMAIL_URL } from '../constants';

const contactSmallTextClass = "font-sans text-sm sm:text-[14.5px] leading-relaxed font-light";

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-[var(--header-height)] bg-[#FAF9F6] text-zinc-900 min-h-screen">
      <SEO 
        title={t('seo.contact.title') || "Contato e Orçamentos | ZERRAINK Estúdio"}
        description={t('seo.contact.description') || "Agende uma consultoria, envie suas referências e solicite orçamentos diretos comigo pelo WhatsApp ou Instagram."}
        canonical="/contato"
      />

      {/* 1. HERO HEADER WITH THE DETAILED LINE ART BANNER (PADRONIZADO E COMPACTO) */}
      <section className="internal-page-hero relative bg-[#000000] border-b border-zinc-900 overflow-hidden py-12 sm:py-14 text-white">

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl space-y-4 text-left">
            <span className="text-[#005F73] text-[11px] sm:text-xs tracking-[0.45em] font-extrabold uppercase block font-sans">
              {t('contact.tag', 'CONTATO')}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-4xl font-light text-white leading-tight uppercase tracking-tight">
              {t('contact.intro.title', 'Sua próxima arte começa aqui')}
            </h1>
            <div className="w-16 h-[1.5px] bg-[#005F73] mt-2"></div>
            <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed pt-1">
              {t('contact.intro.description', 'Cada linha conta uma história. Conte-me em detalhes como imagina o seu projeto e eu irei desenvolver uma proposta única sob medida.')}
            </p>
          </div>
        </div>
      </section>

      {/* 2. BACK BUTTON SECTION */}
      <div className="bg-[#FAF9F6]">
        <BackButtonWrapper className="!my-0 pt-6 pb-2 md:pt-8 md:pb-3 lg:pt-10 lg:pb-4">
          <BackButton isBack={true} label={t('common.back')} />
        </BackButtonWrapper>
      </div>

      {/* 3. CORE CARDS GRID SECTION */}
      <section className="bg-[#FAF9F6] pt-4 pb-8 md:pt-6 md:pb-12">
        <div className="max-w-7xl mx-auto px-6 space-y-6 md:space-y-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch pt-2">
            
            {/* Card Black 1 (Left Column, spanned over rows 1-3) */}
            <div className="lg:col-span-5 lg:col-start-1 lg:row-span-3 lg:row-start-1 bg-[#050505] rounded-[32px] p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden ring-1 ring-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.15)] bg-zinc-950 text-white text-left">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3.5xl sm:text-4.5xl font-serif text-[#005F73] leading-tight font-normal uppercase lg:whitespace-nowrap">
                    {t('contact.info.ideaTitle', 'Vamos começar sua ideia.')}
                  </h3>
                </div>

                <div className="space-y-4 text-justify">
                  <p className={`${contactSmallTextClass} text-white`}>
                    {t('contact.info.p1', 'Mais do que uma tatuagem, aqui a sua ideia é ouvida com cuidado, técnica e respeito à sua história.')}
                  </p>
                  <p className={`${contactSmallTextClass} text-white`}>
                    {t('contact.info.p2', 'Me conte o que você imaginou e vamos criar uma arte feita para a sua pele.')}
                  </p>
                </div>

                {/* LIST BOX: O QUE ENVIAR NO PRIMEIRO CONTATO */}
                <div className="space-y-3.5 mt-6 pt-5 border-t border-white/10">
                  <span className="text-[#005F73] text-[10px] sm:text-[11px] font-bold tracking-[0.45em] block uppercase font-sans">
                    {t('contact.info.checklistTag', 'O QUE ENVIAR NO PRIMEIRO CONTATO')}
                  </span>
                  <ul className="space-y-3">
                    {[
                      t('contact.info.check1', 'Sua ideia em poucas palavras'),
                      t('contact.info.check2', 'Referências visuais (fotos ou prints)'),
                      t('contact.info.check3', 'Local do corpo desejado'),
                      t('contact.info.check4', 'Tamanho aproximado (se tiver ideia)')
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-justify">
                        <CheckCircle2 size={18} className="text-[#005F73] shrink-0 mt-1" />
                        <span className={`${contactSmallTextClass} text-zinc-100`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Card Black 2 (Left Column, at row 4) */}
            <div className="lg:col-span-5 lg:col-start-1 lg:row-span-1 lg:row-start-4 bg-[#050505] bg-zinc-950 border border-zinc-800/50 p-6 sm:p-8 rounded-[24px] transition-all duration-300 shadow-sm text-left flex flex-col justify-center">
              <div className="space-y-3">
                <h4 className="text-lg sm:text-[19px] font-serif font-bold tracking-wide text-[#005F73] uppercase leading-snug">
                  {t('contact.info.storyTitle', 'CADA TATUAGEM CARREGA UMA HISTÓRIA')}
                </h4>
                <p className={`${contactSmallTextClass} text-zinc-100 text-justify`}>
                  {t('contact.info.storyDesc', 'Será um prazer transformar a sua história em arte.')}
                </p>
              </div>
            </div>

            {/* Card 1: WhatsApp */}
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group lg:col-span-7 lg:col-start-6 lg:row-span-1 lg:row-start-1 bg-[#050505] border border-[#005F73]/20 hover:border-[#005F73] focus:border-[#005F73] focus:outline-none p-6 sm:p-8 rounded-[24px] flex flex-col sm:flex-row sm:items-center justify-between gap-6 transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(0,95,115,0.08)] cursor-pointer text-left decoration-transparent"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-stone-900/50 border border-[#005F73]/20 text-[#128C7E] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#128C7E]/10">
                  <WhatsAppIcon size={24} className="transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#005F73] block uppercase font-sans">
                    {t('common.whatsapp', 'WHATSAPP')}
                  </span>
                  <h4 className="text-lg sm:text-xl font-serif text-white font-semibold leading-snug">
                    {t('contact.cards.whatsapp.title', 'Fale direto com o estúdio')}
                  </h4>
                  <p className={`${contactSmallTextClass} text-stone-300 text-left`}>
                    {t('contact.cards.whatsapp.desc', 'Respostas rápidas para dúvidas, alinhamentos iniciais e orçamentos.')}
                  </p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-stone-900/50 border border-[#005F73]/20 text-[#005F73] flex items-center justify-center group-hover:bg-[#005F73] group-hover:text-white group-hover:border-transparent transition-all duration-300 shrink-0 self-start sm:self-center">
                <span className="text-xl transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>

            {/* Card 2: E-mail */}
            <a 
              href={EMAIL_URL}
              className="group lg:col-span-7 lg:col-start-6 lg:row-span-1 lg:row-start-2 bg-[#050505] border border-[#005F73]/20 hover:border-[#005F73] focus:border-[#005F73] focus:outline-none p-6 sm:p-8 rounded-[24px] flex flex-col sm:flex-row sm:items-center justify-between gap-6 transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(0,95,115,0.08)] cursor-pointer text-left decoration-transparent"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-stone-900/50 border border-[#005F73]/20 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#EA4335]/10">
                  <svg className="w-7 h-[21px] transition-transform duration-300 group-hover:scale-110" viewBox="52 42 88 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"/>
                    <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"/>
                    <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"/>
                    <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92"/>
                    <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"/>
                  </svg>
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#005F73] block uppercase font-sans">
                    {t('contact.cards.email.tag', 'E-MAIL')}
                  </span>
                  <h4 className="text-lg sm:text-xl font-serif text-white font-semibold leading-snug">
                    {t('contact.cards.email.title', 'Propostas e arquivos detalhados')}
                  </h4>
                  <p className={`${contactSmallTextClass} text-stone-300 text-left`}>
                    {t('contact.cards.email.desc', 'Envie e-mails com ideias, referências e arquivos para propostas mais completas.')}
                  </p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-stone-900/50 border border-[#005F73]/20 text-[#005F73] flex items-center justify-center group-hover:bg-[#005F73] group-hover:text-white group-hover:border-transparent transition-all duration-300 shrink-0 self-start sm:self-center">
                <span className="text-xl transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>

            {/* Card 3: Endereço */}
            <div 
              className="group lg:col-span-7 lg:col-start-6 lg:row-span-1 lg:row-start-3 bg-[#050505] border border-[#005F73]/20 hover:border-[#005F73] focus:border-[#005F73] focus:outline-none p-6 sm:p-8 rounded-[24px] flex flex-row items-center gap-6 transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(0,95,115,0.08)] text-left"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-stone-900/50 border border-[#005F73]/20 text-[#005F73] flex items-center justify-center shrink-0">
                  <MapPin size={24} strokeWidth={2.0} />
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#005F73] block uppercase font-sans">
                    {t('common.address', 'ENDEREÇO')}
                  </span>
                  <h4 className="text-lg sm:text-xl font-serif text-white font-semibold leading-snug">
                    {t('contact.cards.address.title', 'Rua Casemiro de Abreu, 256, Sala 26')}
                  </h4>
                  <p className={`${contactSmallTextClass} text-stone-300 text-left`}>
                    {t('contact.cards.address.desc', 'Vila Seixas, Ribeirão Preto/SP, com atendimento exclusivo e individualizado.')}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4: Atendimento */}
            <div className="group lg:col-span-7 lg:col-start-6 lg:row-span-1 lg:row-start-4 bg-[#050505] border border-[#005F73]/20 hover:border-[#005F73] focus:border-[#005F73] focus:outline-none p-6 sm:p-8 rounded-[24px] flex flex-col sm:flex-row sm:items-center justify-between gap-6 transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(0,95,115,0.08)] text-left">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-stone-900/50 border border-[#005F73]/20 text-[#005F73] flex items-center justify-center shrink-0">
                  <Clock size={24} strokeWidth={2.0} />
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-[#005F73] block uppercase font-sans">
                    {t('contact.cards.hours.tag', 'ATENDIMENTO')}
                  </span>
                  <h4 className="text-lg sm:text-xl font-serif text-white font-semibold leading-snug">
                    {t('contact.cards.hours.title', 'Atendimento com hora marcada')}
                  </h4>
                  <p className={`${contactSmallTextClass} text-stone-300 text-left`}>
                    {t('contact.cards.hours.desc', 'Cada projeto é desenvolvido com dedicação, escuta e análise de cada detalhe.')}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* 4. GOOGLE MAPS BLOCK */}
          <div className="w-full mt-4 rounded-[32px] overflow-hidden border border-zinc-200/85 shadow-sm">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.25263640058!2d-47.803730723821706!3d-21.182142280260463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9be97f480adbb%3A0xa19ec6da9e31d33d!2sR.%20Casemiro%20de%20Abreu%2C%20256%20-%20Vila%20Seixas%2C%20Ribeir%C3%A3o%20Preto%20-%20SP%2C%2014020-060!5e0!3m2!1spt-BR!2sbr!4v1716744800000!5m2!1spt-BR!2sbr"
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title={t('contact.map.title', 'Endereço do Estúdio ZERRAINK')}
              className="grayscale-[20%] contrast-[110%] w-full"
            ></iframe>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactPage;
