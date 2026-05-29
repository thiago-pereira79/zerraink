import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { 
  FileText, 
  ShieldCheck, 
  Eye, 
  Lock, 
  FileCheck, 
  Settings, 
  UserCheck, 
  Scale, 
  Hourglass, 
  ExternalLink, 
  RefreshCw,
  Plus,
  Minus,
  Cookie,
  User
} from 'lucide-react';
import SEO from '../components/SEO';
import { BackButton, BackButtonWrapper } from '../components/Common';
import { WHATSAPP_URL, EMAIL_URL } from '../constants';
import { getSupportedLanguage, privacyPolicyContent, type ContentBlock } from '../locales/pageContent';

interface Section {
  id: string;
  num: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

const PrivacyPolicy = () => {
  const { t, i18n } = useTranslation();
  const lang = getSupportedLanguage(i18n.language);
  const localizedPrivacy = privacyPolicyContent[lang];
  const [activeTab, setActiveTab] = useState<string>('01');
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(null);
  const [showCookieNotification, setShowCookieNotification] = useState(false);
  const sectionsRef = useRef<Record<string, HTMLDivElement | null>>({});
  const isProgrammaticScroll = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Scrollspy logic to highlight index items as they pass the viewport
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

  const scrollToSection = (id: string) => {
    const element = sectionsRef.current[id];
    if (element) {
      isProgrammaticScroll.current = true;
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

      setActiveTab(id);

      const headerOffset = 95;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      scrollTimeoutRef.current = setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 850);
    }
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

  const sections: Section[] = [
    {
      id: '01',
      num: '01',
      title: 'Introdução',
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-4 text-zinc-650 font-sans font-light text-[13.5px] sm:text-sm leading-relaxed text-left">
          <p>
            A sua privacidade é importante para o <strong className="text-zinc-900 font-semibold">ZERRAINK Estúdio</strong>.
          </p>
          <p>
            Esta Política de Privacidade explica, de forma clara, como seus dados podem ser coletados, utilizados, armazenados e protegidos quando você navega pelo site, solicita orçamento, envia referências, entra em contato ou agenda uma tatuagem.
          </p>
          <p>
            O tratamento de dados pessoais é realizado com base na <strong className="text-zinc-900 font-medium">Lei Geral de Proteção de Dados Pessoais (LGPD), Lei nº 13.709/2018</strong>, e segue princípios como transparência, necessidade, finalidade, segurança e respeito ao titular dos dados.
          </p>
        </div>
      )
    },
    {
      id: '02',
      num: '02',
      title: 'Quem controla os dados',
      icon: <UserCheck className="w-5 h-5" />,
      content: (
        <div className="space-y-4 text-zinc-650 font-sans font-light text-[13.5px] sm:text-sm leading-relaxed text-left">
          <p>
            Para fins desta Política, o <strong className="text-zinc-900 font-semibold">ZERRAINK Estúdio</strong> é responsável pelas decisões relacionadas ao uso dos dados enviados por meio deste site, formulários, WhatsApp, e-mail ou demais canais oficiais de contato.
          </p>
          <p>
            Esses dados são utilizados apenas para atendimento, orçamento, agendamento, desenvolvimento artístico, organização interna e comunicação relacionada aos serviços do estúdio.
          </p>
        </div>
      )
    },
    {
      id: '03',
      num: '03',
      title: 'Dados que podem ser coletados',
      icon: <Eye className="w-5 h-5" />,
      content: (
        <div className="space-y-4 text-zinc-650 font-sans font-light text-[13.5px] sm:text-sm leading-relaxed text-left">
          <p>
            Durante o contato com o estúdio ou navegação pelo site, podem ser coletados dados fornecidos voluntariamente por você, como:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 pt-1 pl-4 list-disc text-zinc-600 font-light">
            <li>Nome;</li>
            <li>E-mail;</li>
            <li>Telefone ou WhatsApp;</li>
            <li>Cidade;</li>
            <li>Ideia ou descrição da tatuagem;</li>
            <li>Referências visuais enviadas pelo cliente;</li>
            <li>Fotos, imagens, rascunhos ou prints enviados para análise;</li>
            <li>Local do corpo desejado para a tatuagem;</li>
            <li>Tamanho aproximado da tatuagem;</li>
            <li>Estilo desejado;</li>
            <li>Informações necessárias para orçamento, atendimento e agendamento;</li>
            <li className="sm:col-span-2">Dados técnicos de navegação, como IP, navegador, dispositivo, páginas acessadas e data de acesso;</li>
            <li className="sm:col-span-2">Dados coletados por cookies ou tecnologias semelhantes, quando aplicável.</li>
          </ul>
          <p className="pt-2">
            O envio de referências, fotos ou imagens é voluntário e deve ocorrer apenas quando necessário para análise do projeto, orçamento ou atendimento.
          </p>
        </div>
      )
    },
    {
      id: '04',
      num: '04',
      title: 'Como os dados são utilizados',
      icon: <Settings className="w-5 h-5" />,
      content: (
        <div className="space-y-4 text-zinc-650 font-sans font-light text-[13.5px] sm:text-sm leading-relaxed text-left">
          <p>Os dados podem ser utilizados para:</p>
          <ul className="space-y-2.5 pl-4 list-disc text-zinc-600 font-light">
            <li>Responder mensagens e solicitações;</li>
            <li>Entender a ideia da tatuagem;</li>
            <li>Avaliar referências visuais enviadas pelo cliente;</li>
            <li>Analisar estilo, tamanho, local do corpo e complexidade do projeto;</li>
            <li>Enviar orçamentos;</li>
            <li>Organizar agenda e atendimento;</li>
            <li>Confirmar informações antes da sessão;</li>
            <li>Preparar estudos visuais, composições ou orientações do projeto;</li>
            <li>Manter histórico básico de comunicação;</li>
            <li>Enviar orientações relacionadas à sessão, cuidados e cicatrização;</li>
            <li>Melhorar a navegação e o funcionamento do site;</li>
            <li>Analisar desempenho das páginas;</li>
            <li>Cumprir obrigações legais, quando necessário;</li>
            <li>Proteger direitos do estúdio, do cliente ou de terceiros.</li>
          </ul>
          <p className="pt-2">
            Os dados serão utilizados somente para finalidades compatíveis com o atendimento solicitado e com a relação entre cliente e estúdio.
          </p>
        </div>
      )
    },
    {
      id: '05',
      num: '05',
      title: 'Base legal',
      icon: <Scale className="w-5 h-5" />,
      content: (
        <div className="space-y-4 text-zinc-650 font-sans font-light text-[13.5px] sm:text-sm leading-relaxed text-left">
          <p>O tratamento dos dados pode ocorrer com base em:</p>
          <ul className="space-y-2.5 pl-4 list-disc text-zinc-600 font-light">
            <li><strong className="text-zinc-800 font-semibold">Consentimento</strong>, quando você envia informações voluntariamente;</li>
            <li><strong className="text-zinc-800 font-semibold">Procedimentos preliminares</strong> relacionados a orçamento, agendamento ou contratação;</li>
            <li><strong className="text-zinc-800 font-semibold">Execução de contrato</strong> ou prestação de serviço, quando aplicável;</li>
            <li><strong className="text-zinc-800 font-semibold">Interesse legítimo</strong>, para comunicação, melhoria da experiência, segurança e organização do atendimento;</li>
            <li><strong className="text-zinc-800 font-semibold">Cumprimento de obrigação legal</strong> ou regulatória.</li>
          </ul>
          <p className="pt-2">
            O <strong className="text-zinc-900 font-semibold">ZERRAINK Estúdio</strong> utiliza apenas os dados necessários para oferecer um atendimento claro, seguro e adequado ao tipo de projeto solicitado.
          </p>
        </div>
      )
    },
    {
      id: '06',
      num: '06',
      title: 'Compartilhamento de dados',
      icon: <Lock className="w-5 h-5" />,
      content: (
        <div className="space-y-4 text-zinc-650 font-sans font-light text-[13.5px] sm:text-sm leading-relaxed text-left">
          <p>
            O <strong className="text-zinc-900 font-semibold">ZERRAINK Estúdio</strong> não vende seus dados pessoais.
          </p>
          <p>Os dados podem ser compartilhados apenas quando necessário com:</p>
          <ul className="space-y-2.5 pl-4 list-disc text-zinc-600 font-light">
            <li>Serviços de hospedagem e funcionamento do site;</li>
            <li>Ferramentas de formulário, agenda, análise, comunicação ou segurança;</li>
            <li>Aplicativos de atendimento, como WhatsApp e e-mail;</li>
            <li>Profissionais ou fornecedores necessários à operação do serviço, quando aplicável;</li>
            <li>Autoridades públicas ou órgãos legais, quando houver obrigação.</li>
          </ul>
          <p className="pt-2">
            O compartilhamento será limitado ao necessário para viabilizar o atendimento, a segurança, o funcionamento do site ou o cumprimento de obrigações legais.
          </p>
        </div>
      )
    },
    {
      id: '07',
      num: '07',
      title: 'Cookies e tecnologias semelhantes',
      icon: <Eye className="w-5 h-5" />,
      content: (
        <div className="space-y-4 text-zinc-650 font-sans font-light text-[13.5px] sm:text-sm leading-relaxed text-left">
          <p>
            Este site pode utilizar cookies e tecnologias semelhantes para melhorar a navegação, entender como os visitantes interagem com as páginas e garantir o funcionamento adequado da experiência.
          </p>
          <p>Os cookies podem ser utilizados para:</p>
          <ul className="space-y-2.5 pl-4 list-disc text-zinc-600 font-light">
            <li>Funcionamento essencial do site;</li>
            <li>Análise de navegação e desempenho;</li>
            <li>Melhoria contínua da experiência;</li>
            <li>Preferências de navegação, quando aplicável.</li>
          </ul>
          <p className="pt-2">
            Você pode gerenciar cookies pelo próprio navegador ou por ferramentas disponíveis no site, quando houver. A desativação de cookies pode afetar algumas funcionalidades.
          </p>
        </div>
      )
    },
    {
      id: '08',
      num: '08',
      title: 'Direitos de privacidade',
      icon: <FileCheck className="w-5 h-5" />,
      content: (
        <div className="space-y-4 text-zinc-650 font-sans font-light text-[13.5px] sm:text-sm leading-relaxed text-left">
          <p>Você pode solicitar, quando aplicável:</p>
          <ul className="space-y-2.5 pl-4 list-disc text-zinc-600 font-light">
            <li>Confirmação sobre o tratamento dos seus dados;</li>
            <li>Acesso aos dados pessoais;</li>
            <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
            <li>Exclusão de dados, quando possível;</li>
            <li>Revogação de consentimento;</li>
            <li>Informações sobre compartilhamento;</li>
            <li>Limitação ou oposição ao tratamento, quando cabível.</li>
          </ul>
          <p className="pt-2">
            Para exercer seus direitos, entre em contato pelos canais oficiais do <strong className="text-zinc-900 font-semibold">ZERRAINK Estúdio</strong>.
          </p>
        </div>
      )
    },
    {
      id: '09',
      num: '09',
      title: 'Segurança dos dados',
      icon: <ShieldCheck className="w-5 h-5" />,
      content: (
        <div className="space-y-4 text-zinc-650 font-sans font-light text-[13.5px] sm:text-sm leading-relaxed text-left">
          <p>
            O <strong className="text-zinc-900 font-semibold">ZERRAINK Estúdio</strong> adota medidas razoáveis para proteger os dados contra acesso não autorizado, perda, alteração, divulgação indevida ou uso inadequado.
          </p>
          <p>
            Também há cuidado especial com referências visuais, fotos, imagens e informações enviadas para análise de projetos, respeitando a privacidade da pessoa atendida.
          </p>
          <p>
            Ainda assim, nenhum ambiente digital é totalmente livre de riscos. Por isso, recomenda-se que você envie apenas informações necessárias para orçamento, contato e agendamento.
          </p>
        </div>
      )
    },
    {
      id: '10',
      num: '10',
      title: 'Retenção dos dados',
      icon: <Hourglass className="w-5 h-5" />,
      content: (
        <div className="space-y-4 text-zinc-650 font-sans font-light text-[13.5px] sm:text-sm leading-relaxed text-left">
          <p>
            Os dados serão mantidos pelo tempo necessário para cumprir as finalidades descritas nesta Política, como atendimento, orçamento, agendamento, histórico de comunicação, obrigações legais ou proteção de direitos.
          </p>
          <p>
            Referências visuais, fotos, rascunhos e informações relacionadas ao projeto podem ser mantidas pelo tempo necessário para análise, criação, execução, acompanhamento e eventual organização do atendimento.
          </p>
          <p>
            Quando não forem mais necessários, os dados poderão ser excluídos, anonimizados ou mantidos apenas quando houver justificativa legal.
          </p>
        </div>
      )
    },
    {
      id: '11',
      num: '11',
      title: 'Imagens, referências e projetos',
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-4 text-zinc-650 font-sans font-light text-[13.5px] sm:text-sm leading-relaxed text-left">
          <p>
            Imagens, referências, fotos de tatuagens, registros do processo ou materiais enviados pelo cliente podem ser utilizados apenas para análise, criação, orçamento, atendimento ou documentação do projeto.
          </p>
          <p>
            O uso público de imagens de tatuagens, registros do processo ou conteúdos em que a pessoa possa ser identificada será tratado com cuidado e, quando necessário, dependerá de autorização.
          </p>
          <p>
            O <strong className="text-zinc-900 font-semibold">ZERRAINK Estúdio</strong> respeita a privacidade, a imagem e a individualidade de cada pessoa atendida.
          </p>
        </div>
      )
    },
    {
      id: '12',
      num: '12',
      title: 'Ferramentas de terceiros',
      icon: <ExternalLink className="w-5 h-5" />,
      content: (
        <div className="space-y-4 text-zinc-650 font-sans font-light text-[13.5px] sm:text-sm leading-relaxed text-left">
          <p>
            O site pode conter links ou integrações com plataformas externas, como WhatsApp, Instagram, TikTok, Facebook, Google Maps, ferramentas de hospedagem, análise ou comunicação.
          </p>
          <p>
            Ao acessar essas plataformas, você estará sujeito aos termos e políticas de privacidade de cada serviço.
          </p>
          <p>
            O <strong className="text-zinc-900 font-semibold">ZERRAINK Estúdio</strong> não controla diretamente o funcionamento dessas ferramentas externas.
          </p>
        </div>
      )
    },
    {
      id: '13',
      num: '13',
      title: 'Atualizações e contato',
      icon: <RefreshCw className="w-5 h-5" />,
      content: (
        <div className="space-y-4 text-zinc-650 font-sans font-light text-[13.5px] sm:text-sm leading-relaxed text-left">
          <p>
            Esta Política de Privacidade pode ser atualizada a qualquer momento para refletir mudanças no site, nos serviços, nas ferramentas utilizadas ou em exigências legais.
          </p>
          <p>
            Recomenda-se consultar esta página periodicamente.
          </p>
          <p className="pt-2">
            Em caso de dúvidas sobre privacidade, dados pessoais ou uso das informações, entre em contato:
          </p>
          <div className="space-y-2.5 pl-4 text-zinc-650 font-sans text-[13.5px] sm:text-sm">
            <p>E-mail: <a href={EMAIL_URL} className="text-[#005F73] hover:underline font-bold ml-1">zerratattoo1@gmail.com</a></p>
            <p>WhatsApp: <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-[#005F73] hover:underline font-bold ml-1">(16) 98216-0902</a></p>
            <p className="text-[12.5px] sm:text-[13px] text-zinc-500 font-medium pt-1">
              Atendimento mediante agendamento.
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="pt-[var(--header-height)] bg-[#FAF9F6] text-zinc-900 min-h-screen">
      <SEO 
        title={`${t('common.privacyPolicy', { defaultValue: 'Política de Privacidade' })} | ZERRAINK Estúdio`}
        description={t('seo.privacy.description', { defaultValue: "Como o estúdio coleta, utiliza e protege seus dados no site e no atendimento." })}
        canonical="/politica-de-privacidade"
      />

      {/* 1. TOP EDITORIAL BANNER (DARK BACKGROUND - PADRONIZADO E COMPACTO) */}
      <section className="internal-page-hero relative bg-[#000000] border-b border-zinc-900 overflow-hidden py-12 sm:py-14 text-white">

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl space-y-4 text-left">
            <span className="text-[#005F73] text-[11px] sm:text-xs tracking-[0.45em] font-extrabold uppercase block font-sans">
              {t('common.legal.tag', { defaultValue: 'LEGAL' })}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-4xl font-light text-white leading-tight uppercase tracking-tight">
              {t('common.privacyPolicy', { defaultValue: 'Política de Privacidade' })}
            </h1>
            <div className="w-16 h-[1.5px] bg-[#005F73] mt-2"></div>
            <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed pt-1">
              {t('seo.privacy.description', { defaultValue: "Como o estúdio coleta, utiliza e protege seus dados no site e no atendimento." })}
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

      {/* 3. MAIN CONTAINER GRID */}
      <section className="pt-4 pb-16 md:pt-6 md:pb-20 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">
            
            {/* Column Left (Sticky Index Menu Wrapper) */}
            <div className="w-full lg:w-[35%] text-left shrink-0">
              <div className="lg:sticky lg:top-[calc(var(--header-height)+20px)] lg:pt-0 space-y-6">
                
                {/* Index menu */}
                <div className="bg-black border border-[#B1936A]/15 rounded-[28px] px-8 py-9 sm:px-9 sm:py-10 shadow-xl space-y-8">
                  <div className="flex items-center justify-between border-b border-[#B1936A]/15 pb-5">
                    <span className="text-[#B1936A] text-[13px] sm:text-[14px] tracking-[0.35em] font-extrabold uppercase block font-sans">
                      {t('legal.onThisPage', { defaultValue: 'NESTA PÁGINA' })}
                    </span>
                  </div>
                  <div className="relative space-y-[22px]">
                    {/* Decorative vertical line of the flow */}
                    <div className="absolute left-[7px] top-[10px] bottom-[10px] w-[1px] bg-[#B1936A]/20 pointer-events-none"></div>
                    {sections.map((sec) => {
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
                          
                          <span className={`font-mono text-[12.5px] sm:text-[13px] font-semibold shrink-0 w-6 transition-colors duration-300 ${isSelected ? 'text-[#B1936A]' : 'text-[#B1936A]/60 group-hover:text-[#B1936A]'}`}>
                            {sec.num}
                          </span>
                          <span className={`text-[12.5px] sm:text-[13px] font-sans font-semibold tracking-[0.1em] uppercase transition-colors leading-relaxed ${isSelected ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
                            {t(`legal.privacy.sections.${sec.id}.title`, { defaultValue: localizedPrivacy.sections[sec.id]?.title || sec.title })}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Card "Esta Política aborda" */}
                <div className="bg-black border border-[#B1936A]/15 rounded-[28px] px-8 py-9 sm:px-9 sm:py-10 shadow-xl space-y-8">
                  <div className="flex items-center justify-between border-b border-[#B1936A]/15 pb-5">
                    <span className="text-[#B1936A] text-[13px] sm:text-[14px] tracking-[0.35em] font-extrabold uppercase block font-sans">
                      {t('legal.privacy.scopeTitle', { defaultValue: 'ESTA POLÍTICA ABORDA' })}
                    </span>
                  </div>
                  
                  <div className="flex flex-col gap-3 items-start">
                    {/* LGPD Pill */}
                    <div className="flex items-center gap-2.5 px-4 py-2 border border-[#B1936A]/30 rounded-full bg-[#B1936A]/5 text-zinc-300 select-none shadow-sm hover:border-[#B1936A] transition-all duration-300 cursor-default">
                      <ShieldCheck className="w-4 h-4 text-[#B1936A]" />
                      <span className="text-zinc-300 font-sans text-xs sm:text-[13px] font-medium tracking-wide">
                        {t('legal.privacy.scopeLgpd', { defaultValue: 'LGPD' })}
                      </span>
                    </div>

                    {/* Cookies Pill */}
                    <div className="flex items-center gap-2.5 px-4 py-2 border border-[#B1936A]/30 rounded-full bg-[#B1936A]/5 text-zinc-300 select-none shadow-sm hover:border-[#B1936A] transition-all duration-300 cursor-default">
                      <Cookie className="w-4 h-4 text-[#B1936A]" />
                      <span className="text-zinc-300 font-sans text-xs sm:text-[13px] font-medium tracking-wide">
                        {t('legal.privacy.scopeCookies', { defaultValue: 'Cookies' })}
                      </span>
                    </div>

                    {/* Dados Pill */}
                    <div className="flex items-center gap-2.5 px-4 py-2 border border-[#B1936A]/30 rounded-full bg-[#B1936A]/5 text-zinc-300 select-none shadow-sm hover:border-[#B1936A] transition-all duration-300 cursor-default">
                      <User className="w-4 h-4 text-[#B1936A]" />
                      <span className="text-zinc-300 font-sans text-xs sm:text-[13px] font-medium tracking-wide">
                        {t('legal.privacy.scopeData', { defaultValue: 'Dados' })}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Column Right (Cards lists) */}
            <div className="w-full lg:flex-1 flex flex-col gap-6 sm:gap-8">
              {sections.map((sec) => {
                const isCookiesSection = sec.id === '07';
                
                if (isCookiesSection) {
                  return (
                    <div 
                      key={sec.id}
                      id={`section-${sec.id}`}
                      ref={(el) => { sectionsRef.current[sec.id] = el; }}
                      className="bg-black border border-[#B1936A]/15 rounded-[28px] shadow-xl scroll-mt-24 overflow-hidden"
                    >
                      <div className="px-8 py-9 sm:px-10 sm:py-11 space-y-6">
                        <div className="flex items-center gap-4 text-left">
                          <div className="w-12 h-12 rounded-full bg-[#B1936A]/10 border border-[#B1936A]/35 flex items-center justify-center shrink-0 z-10 shadow-lg">
                            <span className="font-serif text-[18px] sm:text-[21px] font-normal italic text-[#B1936A] select-none">
                              {sec.num}
                            </span>
                          </div>
                          <h3 className="font-serif text-lg sm:text-xl text-[#B1936A] font-normal uppercase tracking-wide leading-tight">
                            {t(`legal.privacy.sections.${sec.id}.title`, { defaultValue: localizedPrivacy.sections[sec.id]?.title || sec.title })}
                          </h3>
                        </div>
                        <div className="w-12 h-[1px] bg-[#B1936A]/15"></div>
                        <div className="space-y-4 [&_div]:!text-[clamp(0.95rem,1vw,1.05rem)] [&_div]:!leading-[1.75] [&_div]:!text-zinc-300 [&_div]:!font-light [&_p]:!text-[clamp(0.95rem,1vw,1.05rem)] [&_p]:!leading-[1.75] [&_p]:!text-zinc-300 [&_p]:!font-light [&_ul]:!list-disc [&_ul]:!pl-5 [&_li]:!text-[clamp(0.95rem,1vw,1.05rem)] [&_li]:!leading-[1.75] [&_li]:!text-zinc-300 [&_li]:!font-light [&_strong]:!text-white [&_strong]:!font-semibold [&_a]:!text-[#B1936A] [&_a]:hover:!text-white text-left">
                          {renderContentBlocks(localizedPrivacy.sections[sec.id]?.blocks)}
                        </div>
                      </div>

                      {/* Embed Custom Teal Highlighted Cookie Banner inside section 7 */}
                      <div className="bg-[#B1936A]/5 border-t border-[#B1936A]/15 px-8 py-7 sm:px-10 sm:py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-left">
                        <div className="space-y-1.5 md:max-w-md">
                          <h4 className="font-serif text-sm font-semibold text-[#B1936A] uppercase tracking-wide">
                            {t('legal.privacy.cookiesControl', { defaultValue: 'Você no controle do seu navegador' })}
                          </h4>
                          <p className="text-zinc-400 font-light text-xs sm:text-[13px] leading-relaxed">
                            {t('legal.privacy.cookiesDesc', { defaultValue: 'Ao aceitar os cookies, você ajuda o estúdio a calibrar a jornada de leitura e carregar os portfólios com maior agilidade.' })}
                          </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                          <button
                            type="button"
                            onClick={() => {
                              setCookieConsent(false);
                              setShowCookieNotification(true);
                              setTimeout(() => setShowCookieNotification(false), 3000);
                            }}
                            className="px-4.5 py-2.5 text-xs border border-[#B1936A]/40 hover:border-[#B1936A] text-[#B1936A] hover:text-white rounded-lg transition-colors font-medium cursor-pointer bg-transparent hover:bg-[#B1936A]/10"
                          >
                            {t('legal.privacy.cookiesDecline', { defaultValue: 'Recusar' })}
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setCookieConsent(true);
                              setShowCookieNotification(true);
                              setTimeout(() => setShowCookieNotification(false), 3000);
                            }}
                            className="px-4.5 py-2.5 text-xs bg-[#B1936A] hover:bg-[#a3845b] text-black rounded-lg transition-colors font-medium inline-flex items-center gap-1.5 shadow-sm cursor-pointer"
                          >
                            <Settings className="w-3.5 h-3.5" />
                            <span>{t('legal.privacy.cookiesAccept', { defaultValue: 'Aceitar cookies' })}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <div
                    key={sec.id}
                    id={`section-${sec.id}`}
                    ref={(el) => { sectionsRef.current[sec.id] = el; }}
                    className="bg-black border border-[#B1936A]/15 rounded-[28px] px-8 py-9 sm:px-10 sm:py-11 shadow-xl scroll-mt-24 space-y-6"
                  >
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-12 h-12 rounded-full bg-[#B1936A]/10 border border-[#B1936A]/35 flex items-center justify-center shrink-0 z-10 shadow-lg">
                        <span className="font-serif text-[18px] sm:text-[21px] font-normal italic text-[#B1936A] select-none">
                          {sec.num}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg sm:text-xl text-[#B1936A] font-normal uppercase tracking-wide leading-tight">
                        {t(`legal.privacy.sections.${sec.id}.title`, { defaultValue: localizedPrivacy.sections[sec.id]?.title || sec.title })}
                      </h3>
                    </div>
                    <div className="w-12 h-[1px] bg-[#B1936A]/15"></div>
                    <div className="space-y-4 [&_div]:!text-[clamp(0.95rem,1vw,1.05rem)] [&_div]:!leading-[1.75] [&_div]:!text-zinc-300 [&_div]:!font-light [&_p]:!text-[clamp(0.95rem,1vw,1.05rem)] [&_p]:!leading-[1.75] [&_p]:!text-zinc-300 [&_p]:!font-light [&_ul]:!list-disc [&_ul]:!pl-5 [&_li]:!text-[clamp(0.95rem,1vw,1.05rem)] [&_li]:!leading-[1.75] [&_li]:!text-zinc-300 [&_li]:!font-light [&_strong]:!text-white [&_strong]:!font-semibold [&_a]:!text-[#B1936A] [&_a]:hover:!text-white text-left">
                      {renderContentBlocks(localizedPrivacy.sections[sec.id]?.blocks)}
                    </div>
                  </div>
                );
              })}

              {/* No more Doubt/Contact Card Banner (Dúvidas sobre esta Política?) as it has been removed */}

            </div>

          </div>
        </div>
      </section>

      {/* Persistent Consent Interactive Notification popup */}
      <AnimatePresence>
        {showCookieNotification && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-[9999] bg-[#000000] border border-white/5 text-white p-4.5 rounded-2xl shadow-2xl max-w-sm text-left flex items-start gap-4"
          >
            <div className="w-8 h-8 rounded-full bg-[#005F73]/20 flex items-center justify-center text-[#005F73] shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[13px] font-semibold text-white">{t('legal.privacy.consentUpdated', { defaultValue: 'Preferências atualizadas!' })}</p>
              <p className="text-zinc-400 font-light text-[11px] mt-0.5">
                {cookieConsent 
                  ? t('legal.privacy.cookiesSaved', { defaultValue: 'Os cookies de navegação foram salvos com sucesso.' }) 
                  : t('legal.privacy.cookiesRejected', { defaultValue: 'Os cookies foram recusados. Suas escolhas foram respeitadas.' })}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PrivacyPolicy;
