import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { 
  Check, 
  Calendar, 
  CreditCard, 
  Clock, 
  Activity, 
  Heart, 
  Laptop, 
  Compass, 
  Slash, 
  Mail, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';
import SEO from '../components/SEO';
import { BackButton, BackButtonWrapper } from '../components/Common';
import { WHATSAPP_URL, EMAIL_URL } from '../constants';
import { getSupportedLanguage, termsOfUseContent, type ContentBlock } from '../locales/pageContent';

interface TermSection {
  id: string;
  num: string;
  title: string;
  summary: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

const TermsOfUse = () => {
  const { t, i18n } = useTranslation();
  const lang = getSupportedLanguage(i18n.language);
  const localizedTerms = termsOfUseContent[lang];
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [activeTab, setActiveTab] = useState<string>('01');
  const sectionsRef = useRef<Record<string, HTMLDivElement | null>>({});
  const isProgrammaticScroll = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Scrollspy logic to match category highlights
  useEffect(() => {
    const handleScroll = () => {
      if (isProgrammaticScroll.current) return;

      const headerOffset = 110;
      let currentSection = '01';

      for (const key in sectionsRef.current) {
        const element = sectionsRef.current[key];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= headerOffset + 10) {
            currentSection = key;
          }
        }
      }
      setActiveTab(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const scrollToSection = (id: string) => {
    isProgrammaticScroll.current = true;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

    // 1. Force open if closed
    setOpenSections(prev => ({ ...prev, [id]: true }));

    // 2. Set active highlight immediately
    setActiveTab(id);

    // 3. Scroll after DOM update registers open state
    setTimeout(() => {
      const element = sectionsRef.current[id];
      if (element) {
        const headerOffset = 95;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }

      scrollTimeoutRef.current = setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 850);
    }, 60);
  };

  const renderContentBlocks = (blocks: ContentBlock[] = []) => (
    <div className="space-y-4 text-left">
      {blocks.map((block, index) => {
        if (block.type === 'contact') {
          return (
            <div key={`contact-${index}`} className="pt-1 flex flex-col sm:flex-row gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a href={EMAIL_URL}>E-mail</a>
            </div>
          );
        }

        if (block.type === 'list') {
          return (
            <ul key={`list-${index}`} className="list-disc pl-5 space-y-2">
              {(block.items || []).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }

        return <p key={`p-${index}`}>{block.text}</p>;
      })}
    </div>
  );

  const termSections: TermSection[] = [
    {
      id: '01',
      num: '01',
      title: 'Aceitação',
      summary: 'Ao acessar e utilizar o site ou serviços do estúdio, você concorda de forma expressa com estes Termos de Uso.',
      icon: <Check className="w-5 h-5 text-white" />,
      content: (
        <div className="space-y-4 text-zinc-300 font-sans font-light text-[13.5px] sm:text-sm leading-relaxed text-left pt-2 pb-2">
          <p>
            Ao acessar este site, enviar uma solicitação de orçamento ou entrar em contato com o ZERRAINK Estúdio, você declara estar ciente das condições de uso aqui descritas.
          </p>
          <p>
            Estes Termos orientam a navegação no site, o envio de informações, o processo de orçamento, o agendamento e os cuidados relacionados aos serviços de tatuagem realizados por Lucas Zerra.
          </p>
        </div>
      )
    },
    {
      id: '02',
      num: '02',
      title: 'Finalidade do site',
      summary: 'Este site apresenta o portfólio, serviços e orientações do ZERRAINK Estúdio.',
      icon: <Laptop className="w-5 h-5 text-white" />,
      content: (
        <div className="space-y-4 text-zinc-300 font-sans font-light text-[13.5px] sm:text-sm leading-relaxed text-left pt-2 pb-2">
          <p>
            Este site tem como finalidade apresentar o trabalho do ZERRAINK Estúdio, estilos atendidos, galeria de projetos, informações sobre o artista, canais de contato, orientações de cuidado e dúvidas frequentes.
          </p>
          <p>
            As informações publicadas têm caráter informativo e não substituem a conversa individual necessária para avaliação de cada tatuagem.
          </p>
        </div>
      )
    },
    {
      id: '03',
      num: '03',
      title: 'Orçamentos',
      summary: 'Como são elaborados e calculados os valores para cada projeto.',
      icon: <CreditCard className="w-5 h-5 text-white" />,
      content: (
        <div className="space-y-4 text-zinc-300 font-sans font-light text-[13.5px] sm:text-sm leading-relaxed text-left pt-2 pb-2">
          <p>
            Os orçamentos são feitos de forma personalizada. Para avaliar corretamente uma tatuagem, podem ser solicitadas informações como ideia, referências, tamanho aproximado, local do corpo, estilo desejado e complexidade visual.
          </p>
          <p>
            O valor pode variar conforme nível de detalhe, tempo estimado, técnica aplicada, área anatômica, necessidade de criação autoral, cover-up, restauração ou ajustes de composição.
          </p>
        </div>
      )
    },
    {
      id: '04',
      num: '04',
      title: 'Agendamento',
      summary: 'Regras sobre agendamento, atendimento individual e horários marcados.',
      icon: <Calendar className="w-5 h-5 text-white" />,
      content: (
        <div className="space-y-4 text-zinc-300 font-sans font-light text-[13.5px] sm:text-sm leading-relaxed text-left pt-2 pb-2">
          <p>
            O atendimento no ZERRAINK Estúdio acontece com horário marcado. A data da sessão só é considerada reservada após confirmação direta com Lucas Zerra e, quando aplicável, pagamento de sinal.
          </p>
          <p>
            O cliente deve comparecer no horário combinado. Atrasos podem comprometer o tempo de sessão e a organização da agenda.
          </p>
        </div>
      )
    },
    {
      id: '05',
      num: '05',
      title: 'Sinal, pagamentos e cancelamentos',
      summary: 'Regras para sinal de garantia, abatimento no valor e reagendamentos.',
      icon: <Clock className="w-5 h-5 text-white" />,
      content: (
        <div className="space-y-4 text-zinc-300 font-sans font-light text-[13.5px] sm:text-sm leading-relaxed text-left pt-2 pb-2">
          <p>
            Quando solicitado, o sinal serve para reservar a data, organizar a agenda e iniciar a preparação do projeto. O valor do sinal é abatido do valor final da tatuagem.
          </p>
          <p>
            Reagendamentos devem ser solicitados com antecedência mínima de 48 horas. Cancelamentos fora do prazo ou não comparecimento podem resultar na perda do sinal, devido ao bloqueio da agenda e ao tempo dedicado ao projeto.
          </p>
        </div>
      )
    },
    {
      id: '06',
      num: '06',
      title: 'Referências e criação artística',
      summary: 'Criação de projetos autorais e uso respeitoso de referências visuais.',
      icon: <Compass className="w-5 h-5 text-white" />,
      content: (
        <div className="space-y-4 text-zinc-300 font-sans font-light text-[13.5px] sm:text-sm leading-relaxed text-left pt-2 pb-2">
          <p>
            Referências visuais enviadas pelo cliente são usadas apenas como direção estética. O objetivo do estúdio é criar uma arte própria, adaptada ao corpo, ao estilo desejado e à proposta individual de cada pessoa.
          </p>
          <p>
            Não é garantida a cópia literal de tatuagens de terceiros. O ZERRAINK valoriza projetos com identidade, originalidade e respeito ao trabalho artístico.
          </p>
        </div>
      )
    },
    {
      id: '07',
      num: '07',
      title: 'Alterações no projeto',
      summary: 'Refinamentos, ajustes e mudanças na ideia contratada.',
      icon: <Activity className="w-5 h-5 text-white" />,
      content: (
        <div className="space-y-4 text-zinc-300 font-sans font-light text-[13.5px] sm:text-sm leading-relaxed text-left pt-2 pb-2">
          <p>
            Ajustes podem ser conversados durante o processo de criação, desde que respeitem a viabilidade técnica, o estilo aprovado e o tempo disponível.
          </p>
          <p>
            Mudanças grandes de ideia, tamanho, local do corpo ou composição podem exigir novo orçamento, nova análise ou reagendamento.
          </p>
        </div>
      )
    },
    {
      id: '08',
      num: '08',
      title: 'Condições para a sessão',
      summary: 'Cuidados prévios essenciais antes de iniciar sua tatuagem.',
      icon: <Activity className="w-5 h-5 text-white" />,
      content: (
        <div className="space-y-4 text-zinc-300 font-sans font-light text-[13.5px] sm:text-sm leading-relaxed text-left pt-2 pb-2">
          <p>
            Para uma boa sessão, o cliente deve estar alimentado, hidratado, descansado e evitar bebidas alcoólicas nas 24 horas anteriores.
          </p>
          <p>
            Também é recomendado evitar exposição solar intensa, machucados ou irritações na região que será tatuada. Caso a pele não esteja em boas condições, a sessão poderá ser reagendada por segurança.
          </p>
        </div>
      )
    },
    {
      id: '09',
      num: '09',
      title: 'Cuidados pós-tatuagem',
      summary: 'Processo de lavagem, proteção e conduta no pós-sessão.',
      icon: <Heart className="w-5 h-5 text-white" />,
      content: (
        <div className="space-y-4 text-zinc-300 font-sans font-light text-[13.5px] sm:text-sm leading-relaxed text-left pt-2 pb-2">
          <p>
            Após a sessão, o cliente receberá orientações de cuidado. Seguir corretamente essas recomendações é essencial para uma boa cicatrização.
          </p>
          <p>
            O estúdio não se responsabiliza por problemas causados por falta de higiene, exposição ao sol, praia, piscina, atrito, remoção de casquinhas, uso de produtos inadequados ou descumprimento das orientações recebidas.
          </p>
        </div>
      )
    },
    {
      id: '10',
      num: '10',
      title: 'Retoques',
      summary: 'Condições e avaliação de retoques após a cicatrização.',
      icon: <Check className="w-5 h-5 text-white" />,
      content: (
        <div className="space-y-4 text-zinc-300 font-sans font-light text-[13.5px] sm:text-sm leading-relaxed text-left pt-2 pb-2">
          <p>
            A necessidade de retoque depende da cicatrização, região do corpo, tipo de pele, estilo da tatuagem e cuidados realizados pelo cliente.
          </p>
          <p>
            Quando aplicável, o retoque será avaliado individualmente. Retoques decorrentes de falhas de cuidado, exposição indevida ou alterações na pele podem ter custo adicional.
          </p>
        </div>
      )
    },
    {
      id: '11',
      num: '11',
      title: 'Cover-up e restauração',
      summary: 'Especificidades técnicas para cobertura de tatuagens antigas e cicatrizes.',
      icon: <Slash className="w-5 h-5 text-white" />,
      content: (
        <div className="space-y-4 text-zinc-300 font-sans font-light text-[13.5px] sm:text-sm leading-relaxed text-left pt-2 pb-2">
          <p>
            Projetos de cover-up e restauração exigem avaliação prévia. Nem toda tatuagem antiga pode ser coberta exatamente como o cliente imagina.
          </p>
          <p>
            A viabilidade depende da cor, intensidade, tamanho, profundidade do pigmento, estado da pele e possibilidade técnica de criar uma nova composição com bom resultado visual.
          </p>
        </div>
      )
    },
    {
      id: '12',
      num: '12',
      title: 'Propriedade intelectual',
      summary: 'Direitos autorais e de imagem sobre as artes, desenhos e conteúdos.',
      icon: <Compass className="w-5 h-5 text-white" />,
      content: (
        <div className="space-y-4 text-zinc-300 font-sans font-light text-[13.5px] sm:text-sm leading-relaxed text-left pt-2 pb-2">
          <p>
            Desenhos, fotografias, textos, vídeos, identidade visual, composições e conteúdos publicados neste site pertencem ao ZERRAINK Estúdio ou a Lucas Zerra, salvo quando indicado de outra forma.
          </p>
          <p>
            Não é permitida a cópia, reprodução, adaptação ou uso comercial das artes sem autorização prévia.
          </p>
        </div>
      )
    },
    {
      id: '13',
      num: '13',
      title: 'Imagens e divulgação',
      summary: 'Divulgação de imagens e registros do processo em redes sociais e portfólio.',
      icon: <Laptop className="w-5 h-5 text-white" />,
      content: (
        <div className="space-y-4 text-zinc-300 font-sans font-light text-[13.5px] sm:text-sm leading-relaxed text-left pt-2 pb-2">
          <p>
            Fotos e vídeos de tatuagens podem ser utilizados para portfólio, divulgação e redes sociais do estúdio, sempre com cuidado e respeito à imagem da pessoa tatuada.
          </p>
          <p>
            Quando houver identificação clara da pessoa ou exposição sensível, o uso poderá depender de autorização prévia.
          </p>
        </div>
      )
    },
    {
      id: '14',
      num: '14',
      title: 'Limitação de responsabilidade',
      summary: 'Individualidade biológica das reações e fixação de pigmento na pele.',
      icon: <Slash className="w-5 h-5 text-white" />,
      content: (
        <div className="space-y-4 text-zinc-300 font-sans font-light text-[13.5px] sm:text-sm leading-relaxed text-left pt-2 pb-2">
          <p>
            Cada pele reage de forma diferente ao processo de tatuagem. Resultado, cicatrização, intensidade de pigmento e necessidade de retoque podem variar de acordo com organismo, local do corpo e cuidados posteriores.
          </p>
          <p>
            O estúdio se compromete com técnica, higiene e orientação, mas o resultado final também depende da resposta individual da pele e do cumprimento dos cuidados recomendados.
          </p>
        </div>
      )
    },
    {
      id: '15',
      num: '15',
      title: 'Links externos',
      summary: 'Diretrizes de navegação ao acessar WhatsApp ou canais de terceiros.',
      icon: <Laptop className="w-5 h-5 text-white" />,
      content: (
        <div className="space-y-4 text-zinc-300 font-sans font-light text-[13.5px] sm:text-sm leading-relaxed text-left pt-2 pb-2">
          <p>
            O site pode conter links para WhatsApp, Instagram, TikTok, Facebook, mapas ou outras plataformas externas. Ao acessar esses links, o usuário estará sujeito às políticas e termos dessas plataformas.
          </p>
        </div>
      )
    },
    {
      id: '16',
      num: '16',
      title: 'Atualizações dos Termos',
      summary: 'Alterações e ajustes nestes termos para melhorias no atendimento.',
      icon: <Clock className="w-5 h-5 text-white" />,
      content: (
        <div className="space-y-4 text-zinc-300 font-sans font-light text-[13.5px] sm:text-sm leading-relaxed text-left pt-2 pb-2">
          <p>
            Estes Termos de Uso podem ser atualizados sempre que necessário para refletir mudanças no site, atendimento, serviços, agenda ou exigências legais.
          </p>
          <p>
            A versão atualizada será publicada nesta página.
          </p>
        </div>
      )
    },
    {
      id: '17',
      num: '17',
      title: 'Contato',
      summary: 'Canais oficiais para dirimir dúvidas legais ou de agendamento.',
      icon: <Mail className="w-5 h-5 text-white" />,
      content: (
        <div className="space-y-4 text-zinc-300 font-sans font-light text-[13.5px] sm:text-sm leading-relaxed text-left pt-2 pb-2">
          <p>
            Em caso de dúvidas sobre estes Termos, orçamento, agendamento ou atendimento, entre em contato pelos canais oficiais:
          </p>
          <div className="space-y-2.5 pl-4 text-zinc-300 font-sans text-[13.5px] sm:text-sm text-left">
            <p>E-mail: <a href={EMAIL_URL} className="text-[#B1936A] hover:underline font-bold ml-1">zerratattoo1@gmail.com</a></p>
            <p>WhatsApp: <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-[#B1936A] hover:underline font-bold ml-1">(16) 98216-0902</a></p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="pt-[var(--header-height)] bg-[#FAF9F6] text-zinc-900 min-h-screen">
      <SEO 
        title={`${t('common.termsOfUse', { defaultValue: 'Termos de Uso' })} | ZERRAINK Estúdio`}
        description={t('seo.terms.description', { defaultValue: "Condições de uso do site e orientações de agendamento, atendimento e biossegurança do ZERRAINK Estúdio." })}
        canonical="/termos-de-uso"
      />

      {/* 1. TOP EDITORIAL BANNER (DARK BACKGROUND - PADRONIZADO E COMPACTO) */}
      <section className="internal-page-hero relative bg-[#000000] border-b border-zinc-900 overflow-hidden py-12 sm:py-14 text-white">

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl space-y-4 text-left">
            <span className="text-[#005F73] text-[11px] sm:text-xs tracking-[0.45em] font-extrabold uppercase block font-sans">
              {t('common.legal.tag', { defaultValue: 'LEGAL' })}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-4xl font-light text-white leading-tight uppercase tracking-tight">
              {t('common.termsOfUse', { defaultValue: 'Termos de Uso' })}
            </h1>
            <div className="w-16 h-[1.5px] bg-[#005F73] mt-2"></div>
            <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed pt-1">
              {t('seo.terms.description', { defaultValue: "Condições de uso do site e orientações sobre atendimento, orçamento e agendamento." })}
            </p>
          </div>
        </div>
      </section>

      {/* 2. ACTIONS AND BACK SECTION */}
      <div className="bg-[#FAF9F6]">
        <BackButtonWrapper className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 !my-0 pt-6 pb-2 md:pt-8 md:pb-3 lg:pt-10 lg:pb-4">
          <BackButton to="/" label={t('common.back', { defaultValue: "Voltar" })} />
          <div className="relative">
            <span className="text-zinc-500 font-sans text-xs sm:text-[13px] font-medium block sm:inline">
              {t('legal.updatedAt', { defaultValue: 'Atualizado em' })} <strong className="text-[#005F73] font-semibold">{t('legal.updatedDate', { defaultValue: 'Junho de 2026' })}</strong>
            </span>
            <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#005F73]/25 rounded-full hidden sm:block"></div>
          </div>
        </BackButtonWrapper>
      </div>

      {/* 3. MAIN CONTENT SECTION */}
      <section className="pt-4 pb-16 md:pt-6 md:pb-20 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">
            
            {/* Column Left Sidebar: Navigation Index (Deep Petroleum Sidebar Card) */}
            <div className="w-full lg:w-[35%] text-left shrink-0">
              <div className="lg:sticky lg:top-[calc(var(--header-height)+20px)] lg:pt-0">
                <div className="bg-black border border-[#B1936A]/15 rounded-[28px] px-8 py-9 sm:px-9 sm:py-10 shadow-xl space-y-8">
                  <span className="text-[#B1936A] text-[13px] sm:text-[14px] tracking-[0.35em] font-extrabold uppercase block font-sans border-b border-[#B1936A]/15 pb-5">
                    {t('legal.terms.indexHeader', { defaultValue: 'ÍNDICE' })}
                  </span>
                  
                  <div className="relative space-y-[22px]">
                    {/* Decorative vertical line of the flow */}
                    <div className="absolute left-[7px] top-[10px] bottom-[10px] w-[1px] bg-[#B1936A]/20 pointer-events-none"></div>
                    {termSections.map((sec) => {
                      const isSelected = activeTab === sec.id;
                      return (
                        <button
                          key={sec.id}
                          type="button"
                          onClick={() => scrollToSection(sec.id)}
                          className="w-full text-left flex items-center gap-[18px] group cursor-pointer relative py-1.5 leading-relaxed"
                        >
                          {/* Golden connecting dot */}
                          <div className={`w-3.5 h-3.5 rounded-full border border-[#B1936A]/40 flex items-center justify-center bg-black z-10 shrink-0 transition-all duration-300 ${isSelected ? 'border-[#B1936A] scale-110 bg-[#B1936A]' : 'group-hover:border-[#B1936A]'}`}>
                            <div className={`w-1.5 h-1.5 rounded-full bg-[#B1936A] ${isSelected ? 'bg-black' : 'opacity-75 group-hover:opacity-100'}`}></div>
                          </div>
                          
                          <span className={`font-mono text-[12.5px] sm:text-[13px] font-semibold shrink-0 w-6 ${isSelected ? 'text-[#B1936A]' : 'text-[#B1936A]/60 group-hover:text-[#B1936A]'}`}>
                            {sec.num}
                          </span>
                          <span className={`text-[12.5px] sm:text-[13px] font-sans font-semibold tracking-[0.1em] uppercase transition-colors leading-relaxed ${isSelected ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
                            {t(`legal.terms.sections.${sec.id}.title`, { defaultValue: localizedTerms.sections[sec.id]?.title || sec.title })}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Column Right: Elegant Accordion terms display (DARK ACCORDIONS - DEEP PETROLEUM DESIGN) */}
            <div className="w-full lg:flex-1 flex flex-col gap-4">
              {termSections.map((sec) => {
                const isOpen = !!openSections[sec.id];
                return (
                  <div 
                    key={sec.id}
                    id={`section-${sec.id}`}
                    ref={(el) => { sectionsRef.current[sec.id] = el; }}
                    className={`border overflow-hidden transition-all duration-300 scroll-mt-24 rounded-[16px] border-[#B1936A]/15 bg-black hover:border-[#B1936A]/40 shadow-sm ${
                      isOpen ? 'shadow-[0_12px_28px_rgba(0,0,0,0.25)] ring-1 ring-[#B1936A]/35 border-[#B1936A]/50' : ''
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleSection(sec.id)}
                      className="w-full px-6 py-5.5 flex items-center justify-between text-left select-none outline-none cursor-pointer group gap-4 min-h-[68px] sm:h-[72px]"
                    >
                      <div className="flex items-center gap-4 flex-1">
                        {/* Number in gold, elegant font-serif display */}
                        <span className="font-serif text-[18px] sm:text-[21px] font-normal italic text-[#B1936A] w-8 shrink-0 select-none">
                          {sec.num}
                        </span>
                        {/* Title in white */}
                        <h3 className="font-serif text-[14px] sm:text-[15px] text-white font-normal uppercase tracking-wide leading-tight">
                          {t(`legal.terms.sections.${sec.id}.title`, { defaultValue: localizedTerms.sections[sec.id]?.title || sec.title })}
                        </h3>
                      </div>
                      
                      {/* Premium elegant trigger icon '+ / −' - no circular container */}
                      <span className="text-[#B1936A] text-2xl font-light w-6 h-6 flex items-center justify-center shrink-0 select-none transition-transform duration-300 group-hover:scale-110">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22, ease: 'easeOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-3 border-t border-[#B1936A]/10 [&_div]:!text-[clamp(0.95rem,1vw,1.05rem)] [&_div]:!leading-[1.75] [&_div]:!text-white/70 [&_div]:!font-light [&_p]:!text-[clamp(0.95rem,1vw,1.05rem)] [&_p]:!leading-[1.75] [&_p]:!text-white/70 [&_p]:!font-light [&_a]:text-[#B1936A] [&_a]:hover:underline">
                            {renderContentBlocks(localizedTerms.sections[sec.id]?.blocks)}
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
    </div>
  );
};

export default TermsOfUse;
