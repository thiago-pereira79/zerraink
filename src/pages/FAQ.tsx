import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { 
  Plus, 
  Minus, 
  Info, 
  Calendar, 
  DollarSign, 
  Sparkles, 
  Heart, 
  Layers, 
  MessageCircle, 
  Compass, 
  HelpCircle, 
  Scissors, 
  ShieldAlert, 
  Maximize2,
  Users,
  MapPin,
  Lock,
  Sun
} from 'lucide-react';
import SEO from '../components/SEO';
import { BackButton, BackButtonWrapper } from '../components/Common';

interface FAQItem {
  id: string;
  category: string;
  q: string;
  a: string;
  icon: React.ReactNode;
}

interface Category {
  id: string;
  num: string;
  name: string;
  description?: string;
}

const FAQPage = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openFaqs, setOpenFaqs] = useState<Record<string, boolean>>({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const categories: Category[] = [
    { id: 'all', num: '01', name: 'Todas as perguntas' },
    { id: 'processo', num: '02', name: 'Sobre o processo', description: 'Como funciona o atendimento e a criação da tatuagem.' },
    { id: 'orcamento', num: '03', name: 'Orçamento e agenda', description: 'Valores, disponibilidade, sinal e reserva de horário.' },
    { id: 'estilos', num: '04', name: 'Referências e estilos', description: 'Ideias, imagens, estilos e desenvolvimento do projeto.' },
    { id: 'cobertura', num: '05', name: 'Cobertura e retoque', description: 'Cover-up, restauração, ajustes e manutenção.' },
    { id: 'cuidados', num: '06', name: 'Cuidados e cicatrização', description: 'Antes, durante e depois da sessão.' },
    { id: 'pagamento', num: '07', name: 'Pagamento e sessão', description: 'Formas de pagamento, tempo de sessão e organização.' }
  ];

  const faqData: FAQItem[] = [
    {
      id: 'faq-1',
      category: 'orcamento',
      q: 'Como funciona o orçamento?',
      a: 'O orçamento é feito de forma individual, após o envio da sua ideia, referências, local do corpo e tamanho aproximado. Eu avalio estilo, complexidade, área anatômica, nível de detalhe e tempo estimado de sessão para calcular o valor com mais precisão.',
      icon: <DollarSign className="w-5 h-5 text-zinc-600" />
    },
    {
      id: 'faq-2',
      category: 'orcamento',
      q: 'Preciso agendar antes?',
      a: 'Sim. O atendimento no ZERRAINK Estúdio acontece com horário marcado, para garantir organização, privacidade e dedicação individual. Após a aprovação do orçamento, a data é alinhada diretamente comigo.',
      icon: <Calendar className="w-5 h-5 text-zinc-600" />
    },
    {
      id: 'faq-3',
      category: 'estilos',
      q: 'Posso enviar referências?',
      a: 'Sim. Referências ajudam a entender o caminho visual, o estilo, a composição e a atmosfera que você busca. Elas servem como direção, mas o objetivo é criar uma tatuagem própria, adaptada ao seu corpo e à proposta do estúdio.',
      icon: <Layers className="w-5 h-5 text-zinc-600" />
    },
    {
      id: 'faq-4',
      category: 'cobertura',
      q: 'Como funciona uma cobertura?',
      a: 'Cover-up e restauração precisam de avaliação. É necessário analisar a tatuagem antiga, intensidade do pigmento, tamanho, localização e possibilidades técnicas. Em alguns casos, a ideia precisa ser adaptada para alcançar um resultado mais limpo e durável.',
      icon: <Scissors className="w-5 h-5 text-zinc-600" />
    },
    {
      id: 'faq-5',
      category: 'estilos',
      q: 'Que tipo de tatuagem você faz?',
      a: 'Eu trabalho com projetos autorais e diferentes estilos, como realismo preto e cinza, fine line, ornamental, colorido, old school, cover-up, restauração e composições personalizadas. A melhor direção é definida após entender sua ideia, o local do corpo e o resultado que você busca.',
      icon: <Sparkles className="w-5 h-5 text-zinc-600" />
    },
    {
      id: 'faq-6',
      category: 'processo',
      q: 'O desenho é exclusivo?',
      a: 'Sim. As referências enviadas servem como ponto de partida, mas o objetivo é criar uma arte com identidade própria, pensada para o seu corpo, seu estilo e sua história.',
      icon: <Compass className="w-5 h-5 text-zinc-600" />
    },
    {
      id: 'faq-7',
      category: 'processo',
      q: 'Você copia tatuagem de outro artista?',
      a: 'Não. Referências ajudam a entender o caminho visual, mas não são copiadas literalmente. O ZERRAINK valoriza projetos autorais, originais e respeitosos com o trabalho de outros artistas.',
      icon: <ShieldAlert className="w-5 h-5 text-zinc-600" />
    },
    {
      id: 'faq-8',
      category: 'estilos',
      q: 'Preciso já ter a ideia totalmente pronta?',
      a: 'Não. Você pode chegar com uma ideia inicial, uma sensação, um tema ou algumas referências. Eu te ajudo a organizar visualmente o conceito e transformar isso em uma proposta possível para tatuagem.',
      icon: <HelpCircle className="w-5 h-5 text-zinc-600" />
    },
    {
      id: 'faq-9',
      category: 'orcamento',
      q: 'Como faço para agendar?',
      a: 'O primeiro passo é entrar em contato pelo WhatsApp ou formulário, enviando sua ideia, referências, local do corpo e tamanho aproximado. Depois da avaliação e aprovação do orçamento, a data é alinhada diretamente comigo.',
      icon: <Lock className="w-5 h-5 text-zinc-600" />
    },
    {
      id: 'faq-10',
      category: 'pagamento',
      q: 'Quanto tempo leva uma sessão?',
      a: 'Depende do tamanho, estilo, complexidade e região do corpo. Algumas tatuagens podem ser finalizadas em uma única sessão; outras precisam de mais tempo ou etapas. Essa estimativa é informada durante o orçamento.',
      icon: <Maximize2 className="w-5 h-5 text-zinc-600" />
    },
    {
      id: 'faq-11',
      category: 'cuidados',
      q: 'Quanto tempo demora para cicatrizar?',
      a: 'A cicatrização inicial costuma levar de 10 a 15 dias, mas a recuperação completa da pele pode levar de 30 a 45 dias. Esse tempo pode variar conforme região do corpo, organismo, tamanho da tatuagem e cuidados após a sessão.',
      icon: <Calendar className="w-5 h-5 text-zinc-600" />
    },
    {
      id: 'faq-12',
      category: 'cuidados',
      q: 'Quais cuidados preciso ter depois?',
      a: 'É importante seguir as orientações passadas pelo estúdio. Em geral, evite sol, praia, piscina, atrito, coçar ou arrancar casquinhas. A higienização correta e o uso dos produtos indicados ajudam na cicatrização e conservação da tatuagem.',
      icon: <Heart className="w-5 h-5 text-zinc-600" />
    },
    {
      id: 'faq-13',
      category: 'cuidados',
      q: 'Posso tomar sol depois da tatuagem?',
      a: 'Não é recomendado durante o período de cicatrização. O sol pode prejudicar a pele, alterar a pigmentação e comprometer o resultado. Depois de cicatrizada, o uso de protetor solar ajuda a preservar a tatuagem.',
      icon: <Sun className="w-5 h-5 text-zinc-600" />
    },
    {
      id: 'faq-14',
      category: 'estilos',
      q: 'Você trabalha com tattoo colorida e preto e cinza?',
      a: 'Sim. O estúdio trabalha tanto com propostas em preto e cinza quanto com projetos coloridos. A escolha depende do estilo, da composição, da pele e do resultado desejado.',
      icon: <Layers className="w-5 h-5 text-zinc-600" />
    },
    {
      id: 'faq-15',
      category: 'estilos',
      q: 'Posso levar uma ideia e adaptar com você?',
      a: 'Sim. Esse é um dos caminhos mais interessantes. A ideia pode ser refinada, reorganizada e adaptada para funcionar melhor no corpo, respeitando proporção, leitura visual e durabilidade.',
      icon: <Sparkles className="w-5 h-5 text-zinc-600" />
    },
    {
      id: 'faq-16',
      category: 'cobertura',
      q: 'Você faz retoque?',
      a: 'A necessidade de retoque é avaliada caso a caso, considerando cicatrização, cuidados, local do corpo e tipo de tatuagem. Quando aplicável, as condições são alinhadas diretamente comigo.',
      icon: <Info className="w-5 h-5 text-zinc-600" />
    },
    {
      id: 'faq-17',
      category: 'processo',
      q: 'Dói muito?',
      a: 'A dor varia de pessoa para pessoa e também conforme a região do corpo. Áreas próximas a ossos, articulações ou regiões mais sensíveis podem incomodar mais. O estúdio busca oferecer uma experiência tranquila, segura e respeitosa durante todo o processo.',
      icon: <Heart className="w-5 h-5 text-zinc-600" />
    },
    {
      id: 'faq-18',
      category: 'pagamento',
      q: 'Quais formas de pagamento você aceita?',
      a: 'As formas de pagamento são informadas durante o atendimento, de acordo com o tipo de projeto, valor e organização da sessão.',
      icon: <DollarSign className="w-5 h-5 text-zinc-600" />
    },
    {
      id: 'faq-19',
      category: 'orcamento',
      q: 'O valor muda conforme o estilo?',
      a: 'Sim. O valor pode variar conforme tamanho, estilo, nível de detalhe, complexidade, local do corpo, tempo estimado e necessidade de criação autoral.',
      icon: <DollarSign className="w-5 h-5 text-zinc-600" />
    },
    {
      id: 'faq-20',
      category: 'pagamento',
      q: 'Posso parcelar?',
      a: 'As possibilidades de pagamento são combinadas diretamente no atendimento, conforme o projeto e as condições disponíveis no momento.',
      icon: <DollarSign className="w-5 h-5 text-zinc-600" />
    },
    {
      id: 'faq-21',
      category: 'processo',
      q: 'Você atende Ribeirão Preto e região?',
      a: 'Sim. O ZERRAINK Estúdio fica em Ribeirão Preto, SP e atende pessoas da cidade e região, sempre com horário marcado.',
      icon: <MapPin className="w-5 h-5 text-zinc-600" />
    },
    {
      id: 'faq-22',
      category: 'orcamento',
      q: 'Posso ir ao estúdio sem agendar?',
      a: 'O atendimento acontece preferencialmente com horário marcado, para garantir organização, privacidade e dedicação individual.',
      icon: <Users className="w-5 h-5 text-zinc-600" />
    },
    {
      id: 'faq-23',
      category: 'processo',
      q: 'Você faz tatuagem em qualquer lugar do corpo?',
      a: 'Nem sempre. Algumas regiões exigem avaliação técnica por questões de pele, cicatrização, durabilidade, visibilidade e segurança. A viabilidade é analisada antes da confirmação do projeto.',
      icon: <Maximize2 className="w-5 h-5 text-zinc-600" />
    },
    {
      id: 'faq-24',
      category: 'cobertura',
      q: 'Posso tatuar cobrindo cicatriz?',
      a: 'Em alguns casos, sim. É necessário avaliar a cicatriz, tempo de cicatrização, textura da pele e possibilidade técnica. Nem toda cicatriz pode ser tatuada imediatamente ou com qualquer tipo de desenho.',
      icon: <Info className="w-5 h-5 text-zinc-600" />
    },
    {
      id: 'faq-25',
      category: 'orcamento',
      q: 'Como entro em contato mais rápido?',
      a: 'O contato mais rápido é pelo WhatsApp oficial do estúdio: (16) 98216-0902.',
      icon: <MessageCircle className="w-5 h-5 text-zinc-600" />
    }
  ];

  const filteredFaqs = activeCategory === 'all' 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory);

  const toggleFaq = (id: string) => {
    setOpenFaqs(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="pt-[var(--header-height)] bg-[#FAF9F6] text-zinc-900 min-h-screen">
      <SEO 
        title={`${t('faq.seo.title') || "Dúvidas Frequentes"} | ZERRAINK Estúdio`}
        description={t('faq.seo.description') || "FAQ oficial do estúdio: tire suas principais dúvidas sobre cuidados pré e pós-tattoo, orçamentos, agendamentos e dor."}
        canonical="/faq"
      />

      {/* 1. HERO HEADER WITH THE DETAILED LINE ART BANNER (PADRONIZADO E COMPACTO) */}
      <section className="internal-page-hero relative bg-[#000000] border-b border-zinc-900 overflow-hidden py-12 sm:py-14 text-white">

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl space-y-4 text-left">
            <span className="text-[#005F73] text-[11px] sm:text-xs tracking-[0.45em] font-extrabold uppercase block font-sans">
              {t('faq.intro.tag') || 'SUPORTE'}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-4xl font-light text-white leading-tight uppercase tracking-tight">
              {t('faq.intro.title') || 'Dúvidas Frequentes'}
            </h1>
            <div className="w-16 h-[1.5px] bg-[#005F73] mt-2"></div>
            <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed pt-1">
              {t('faq.intro.desc') || 'Respostas claras para ajudar você a entender o processo, o orçamento e os cuidados com a sua tatuagem.'}
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

      {/* 3. MAIN CONTENT LAYER GRID */}
      <section className="pt-4 pb-16 md:pt-6 md:pb-20 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column Categories + Connection card inside a single integrated sidebar card */}
            <div className="lg:col-span-4 text-left">
              <div className="lg:sticky lg:top-[calc(var(--header-height)+20px)] lg:pt-0">
                <div className="bg-black border border-[#B1936A]/15 rounded-[28px] p-7 shadow-[0_12px_40px_rgba(0,0,0,0.2)] space-y-7">
                  
                  {/* Header (Título CATEGORIAS) */}
                  <div className="border-b border-[#B1936A]/15 pb-4">
                    <h3 className="font-serif text-2xl sm:text-[23px] font-medium text-[#B1936A] tracking-[0.1em] uppercase">
                      {t('faq.sidebar.title') || 'Categorias'}
                    </h3>
                  </div>

                  {/* List of Category Buttons */}
                  <div className="space-y-2">
                    {categories.map((cat) => {
                      const isActive = activeCategory === cat.id;
                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => setActiveCategory(cat.id)}
                          className={`w-full text-left py-3.5 px-4 rounded-xl transition-all duration-300 flex items-center gap-3.5 group cursor-pointer ${
                            isActive 
                              ? 'bg-[#B1936A]/12 text-white border-l-4 border-l-[#B1936A] pl-2.5' 
                              : 'bg-transparent text-zinc-400 hover:text-white border-l-4 border-[#B1936A]/0 hover:bg-[#B1936A]/5'
                          }`}
                        >
                          <span className="font-mono text-[12.5px] sm:text-[13px] font-semibold text-[#B1936A] shrink-0">
                            {cat.num}
                          </span>
                          <span className={`text-[12.5px] sm:text-[13px] font-semibold tracking-[0.1em] uppercase font-sans leading-relaxed ${isActive ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
                            {t(`faq.categories.${cat.id}.name`) || cat.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                </div>
              </div>
            </div>

            {/* Right Column: Interactive Grid of cards with accordion */}
            <div className="lg:col-span-8 flex flex-col gap-8">

              {/* Título Mais buscadas (Centralizado em relação aos 4 cards da direita) */}
              <div className="text-center w-full">
                <h2 className="font-serif text-2xl sm:text-3xl text-zinc-900 font-normal tracking-tight uppercase">
                  {t('faq.spotlight.title') || 'MAIS BUSCADAS'}
                </h2>
              </div>

              {/* 4 Cards Escuros de Destaque - Deep Petroleum, Comfortable Height and Gaps */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Card 1 */}
                <div 
                  onClick={() => {
                    setActiveCategory('orcamento');
                    setOpenFaqs(prev => ({ ...prev, 'faq-1': true }));
                    const element = document.getElementById('faq-item-faq-1');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}
                  className="relative overflow-hidden bg-black border border-[#B1936A]/15 hover:border-[#B1936A]/50 rounded-[24px] p-6 flex flex-col justify-center h-[205px] text-left transition-all duration-300 hover:scale-[1.02] cursor-pointer group shadow-lg"
                >
                  <div className="space-y-2 z-10">
                    <h4 className="font-serif text-sm sm:text-base lg:text-[17px] leading-snug font-medium text-white group-hover:text-[#B1936A] transition-colors duration-300 min-h-[50px] flex items-center uppercase">
                      {t('faq.questions.faq-1.q') || 'Como funciona o orçamento?'}
                    </h4>
                    <span className="text-[#B1936A] font-mono text-[10.5px] font-bold uppercase tracking-wider flex items-center gap-1 group-hover:underline">
                      {t('faq.spotlight.viewAnswer') || 'Ver resposta →'}
                    </span>
                  </div>
                </div>

                {/* Card 2 */}
                <div 
                  onClick={() => {
                    setActiveCategory('orcamento');
                    setOpenFaqs(prev => ({ ...prev, 'faq-2': true }));
                    const element = document.getElementById('faq-item-faq-2');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}
                  className="relative overflow-hidden bg-black border border-[#B1936A]/15 hover:border-[#B1936A]/50 rounded-[24px] p-6 flex flex-col justify-center h-[205px] text-left transition-all duration-300 hover:scale-[1.02] cursor-pointer group shadow-lg"
                >
                  <div className="space-y-2 z-10">
                    <h4 className="font-serif text-sm sm:text-base lg:text-[17px] leading-snug font-medium text-white group-hover:text-[#B1936A] transition-colors duration-300 min-h-[50px] flex items-center uppercase">
                      {t('faq.questions.faq-2.q') || 'Preciso agendar antes?'}
                    </h4>
                    <span className="text-[#B1936A] font-mono text-[10.5px] font-bold uppercase tracking-wider flex items-center gap-1 group-hover:underline">
                      {t('faq.spotlight.viewAnswer') || 'Ver resposta →'}
                    </span>
                  </div>
                </div>

                {/* Card 3 */}
                <div 
                  onClick={() => {
                    setActiveCategory('estilos');
                    setOpenFaqs(prev => ({ ...prev, 'faq-3': true }));
                    const element = document.getElementById('faq-item-faq-3');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}
                  className="relative overflow-hidden bg-black border border-[#B1936A]/15 hover:border-[#B1936A]/50 rounded-[24px] p-6 flex flex-col justify-center h-[205px] text-left transition-all duration-300 hover:scale-[1.02] cursor-pointer group shadow-lg"
                >
                  <div className="space-y-2 z-10">
                    <h4 className="font-serif text-sm sm:text-base lg:text-[17px] leading-snug font-medium text-white group-hover:text-[#B1936A] transition-colors duration-300 min-h-[50px] flex items-center uppercase">
                      {t('faq.questions.faq-3.q') || 'Posso enviar referências?'}
                    </h4>
                    <span className="text-[#B1936A] font-mono text-[10.5px] font-bold uppercase tracking-wider flex items-center gap-1 group-hover:underline">
                      {t('faq.spotlight.viewAnswer') || 'Ver resposta →'}
                    </span>
                  </div>
                </div>

                {/* Card 4 */}
                <div 
                  onClick={() => {
                    setActiveCategory('cobertura');
                    setOpenFaqs(prev => ({ ...prev, 'faq-16': true }));
                    const element = document.getElementById('faq-item-faq-16');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}
                  className="relative overflow-hidden bg-black border border-[#B1936A]/15 hover:border-[#B1936A]/50 rounded-[24px] p-6 flex flex-col justify-center h-[205px] text-left transition-all duration-300 hover:scale-[1.02] cursor-pointer group shadow-lg"
                >
                  <div className="space-y-2 z-10">
                    <h4 className="font-serif text-sm sm:text-base lg:text-[17px] leading-snug font-medium text-white group-hover:text-[#B1936A] transition-colors duration-300 min-h-[50px] flex items-center uppercase">
                      {t('faq.questions.faq-16.q') || 'Você faz retoque?'}
                    </h4>
                    <span className="text-[#B1936A] font-mono text-[10.5px] font-bold uppercase tracking-wider flex items-center gap-1 group-hover:underline">
                      {t('faq.spotlight.viewAnswer') || 'Ver resposta →'}
                    </span>
                  </div>
                </div>
              </div>

              {/* list of filtered accordions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredFaqs.map((faq) => {
                  const isOpen = !!openFaqs[faq.id];
                  return (
                    <div 
                      key={faq.id}
                      id={`faq-item-${faq.id}`}
                      className={`border rounded-xl bg-black overflow-hidden transition-all duration-300 flex flex-col justify-center min-h-[82px] ${
                        isOpen 
                          ? 'border-[#B1936A]/40 shadow-[0_8px_20px_rgba(0,0,0,0.25)] ring-1 ring-[#B1936A]/20' 
                          : 'border-[#B1936A]/15 hover:border-[#B1936A]/40 hover:shadow-xs'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full p-4.5 sm:p-5 flex items-center justify-between text-left select-none outline-none cursor-pointer group min-h-[80px]"
                      >
                        <div className="flex-1 pr-2">
                          <h4 className="font-serif text-sm sm:text-base lg:text-[17px] leading-snug font-medium text-white group-hover:text-zinc-200 transition-colors">
                            {t(`faq.questions.${faq.id}.q`) || faq.q}
                          </h4>
                        </div>

                        {/* Interactive trigger plus / minus */}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all shrink-0 ${isOpen ? 'bg-[#B1936A] text-zinc-950 border-transparent' : 'bg-transparent border-[#B1936A]/30 text-[#B1936A] group-hover:border-[#B1936A] group-hover:text-[#B1936A]'}`}>
                          {isOpen ? (
                            <Minus size={14} className="transition-transform duration-200" />
                          ) : (
                            <Plus size={14} className="transition-transform duration-200" />
                          )}
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 pt-2 text-[clamp(0.95rem,1vw,1.05rem)] leading-[1.75] text-white/70 font-sans font-light text-left border-t border-[#B1936A]/10 whitespace-pre-line">
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
        </div>
      </section>

      {/* 4. FINAL CTA BANNER CARD (AJUSTADO: APENAS TEXTO, SEM BOTÃO, VISUAL PREMIUM E CENTRALIZADO) */}
      <section className="bg-[#FAF9F6] pb-24 pt-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-black text-white py-14 sm:py-20 px-8 sm:px-16 rounded-[32px] border border-[#B1936A]/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden flex flex-col items-center justify-center text-center">
            
            {/* Subtle decorative grid/border lines for an elegant, editorial/premium feel */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-stone-800 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-stone-800 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-stone-800 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-stone-800 pointer-events-none"></div>

            <div className="max-w-3xl space-y-5 relative z-10 flex flex-col items-center">
              {/* Título de Encerramento com Destaque em Azul Petróleo */}
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light leading-tight uppercase tracking-[0.06em]">
                {t('faq.footer.titlePrefix') || 'Ainda com'} <span className="text-[#005F73] font-normal block sm:inline">{t('faq.footer.titleHighlight') || 'Dúvidas?'}</span>
              </h3>
              
              {/* Elegant divider line */}
              <div className="w-12 h-[1px] bg-stone-800 my-2"></div>

              {/* Texto de Apoio Centrado e Altamente Legível */}
              <p className="text-zinc-300 font-light text-sm sm:text-[15px] leading-relaxed max-w-2xl">
                {t('faq.footer.desc') || 'Se alguma pergunta ainda ficou em aberto, fale diretamente comigo. Posso orientar você sobre orçamento, processo, sessão e cuidados com a tatuagem.'}
              </p>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
