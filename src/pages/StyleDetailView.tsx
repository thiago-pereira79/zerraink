import React, { useLayoutEffect } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { getSupportedLanguage, styleDetailContent } from '../locales/pageContent';

interface StyleTopic {
  title: string;
  desc: string;
}

interface StyleCard {
  number: string;
  title: string;
  desc: string;
}

interface StyleData {
  id: string;
  label: string;
  title: string;
  essence: string;
  whatIs: string;
  topics: StyleTopic[];
  idealPhrase: string;
  tags: string[];
  cards: StyleCard[];
}

const STYLES_DATA: Record<string, StyleData> = {
  realism: {
    id: 'realism',
    label: 'ESTILO EXCLUSIVO',
    title: 'Realismo Preto e Cinza',
    essence: 'Profundidade, contraste e volume para transformar referências em tatuagens com presença visual.',
    whatIs: 'O realismo preto e cinza trabalha com diferentes intensidades de sombra para criar profundidade, textura e sensação de volume na pele. É um estilo muito usado em retratos, animais, imagens religiosas, esculturas, natureza e composições com atmosfera mais dramática.',
    topics: [
      {
        title: 'Como funciona na pele',
        desc: 'A força desse estilo está no equilíbrio entre áreas escuras, tons intermediários e pontos de luz. Quanto melhor o contraste, mais leitura a tatuagem ganha à distância e mais impacto ela mantém ao longo do tempo.'
      },
      {
        title: 'Para quem combina',
        desc: 'Combina com quem busca uma tatuagem marcante, detalhada e com aparência mais realista, especialmente quando a ideia envolve emoção, memória, homenagem ou impacto visual.'
      },
      {
        title: 'Pontos de cuidado',
        desc: 'Referências de boa qualidade ajudam muito no resultado. Também é importante respeitar o tamanho ideal do projeto, porque detalhes muito pequenos podem perder definição com o tempo.'
      }
    ],
    idealPhrase: 'Projetos com leitura forte, atmosfera visual e profundidade bem construída.',
    tags: ['Retratos', 'Animais', 'Religiosos', 'Natureza', 'Esculturas', 'Composições detalhadas', 'Coberturas estratégicas'],
    cards: [
      {
        number: '01',
        title: 'Contraste e profundidade',
        desc: 'Sombras bem construídas e pontos de luz estratégicos reforçam o volume e a presença da composição.'
      },
      {
        number: '02',
        title: 'Leitura à distância',
        desc: 'O equilíbrio entre preto, cinza e pele cria impacto visual mesmo quando a tatuagem é observada de longe.'
      },
      {
        number: '03',
        title: 'Detalhe com presença',
        desc: 'Quando o projeto respeita escala e referência, o resultado ganha definição, textura e força ao longo do tempo.'
      }
    ]
  },
  fineline: {
    id: 'fineline',
    label: 'ESTILO EXCLUSIVO',
    title: 'Fine Line',
    essence: 'Leveza, precisão e delicadeza em traços finos e elegantes.',
    whatIs: 'O Fine Line é um estilo marcado por linhas mais finas, limpas e discretas. Ele valoriza a sutileza e funciona muito bem para desenhos minimalistas, frases, flores, símbolos, composições pequenas e artes com leitura mais delicada.',
    topics: [
      {
        title: 'Como funciona na pele',
        desc: 'Por ter traços finos, esse estilo exige precisão no desenho, no posicionamento e na aplicação. Cada linha precisa ter fluidez e equilíbrio para que o resultado fique elegante, sem excesso de informação.'
      },
      {
        title: 'Para quem combina',
        desc: 'Combina com quem prefere tatuagens mais discretas, sofisticadas e leves, mas ainda assim cheias de significado.'
      },
      {
        title: 'Pontos de cuidado',
        desc: 'Nem todo desenho funciona em tamanho muito pequeno. Alguns detalhes precisam de respiro para cicatrizar bem e continuar legíveis com o tempo.'
      }
    ],
    idealPhrase: 'Projetos delicados, elegantes e com leitura sutil, mas cheios de presença.',
    tags: ['Frases', 'Florais', 'Símbolos', 'Minimalistas', 'Homenagens', 'Traços delicados', 'Microdetalhes'],
    cards: [
      {
        number: '01',
        title: 'Precisão do traço',
        desc: 'Linhas limpas e bem posicionadas garantem leveza visual e acabamento elegante.'
      },
      {
        number: '02',
        title: 'Delicadeza com leitura',
        desc: 'Mesmo sutil, o desenho precisa ter respiro e proporção para continuar legível com o tempo.'
      },
      {
        number: '03',
        title: 'Sutileza com significado',
        desc: 'É um estilo ideal para quem busca uma tatuagem discreta, refinada e pessoal.'
      }
    ]
  },
  colorido: {
    id: 'colorido',
    label: 'ESTILO EXCLUSIVO',
    title: 'Colorido',
    essence: 'Cor, presença e personalidade para transformar ideias em composições vibrantes.',
    whatIs: 'A tatuagem colorida usa pigmentos e combinações cromáticas para criar impacto visual, contraste e vida. Pode aparecer em estilos mais ilustrativos, personagens, florais, elementos geek, composições autorais e artes com maior energia visual.',
    topics: [
      {
        title: 'Como funciona na pele',
        desc: 'O resultado depende da escolha das cores, do contraste, da saturação e da harmonia com o tom da pele. Uma boa composição colorida precisa ser pensada para ter leitura, equilíbrio e durabilidade visual.'
      },
      {
        title: 'Para quem combina',
        desc: 'Combina com quem quer uma tatuagem expressiva, criativa e cheia de presença, seja em uma peça pequena com destaque de cor ou em uma composição maior.'
      },
      {
        title: 'Pontos de cuidado',
        desc: 'Cores podem se comportar de formas diferentes em cada pele. Cuidados no pós, proteção solar e manutenção ao longo do tempo ajudam a preservar melhor o resultado.'
      }
    ],
    idealPhrase: 'Projetos vibrantes, criativos e com personalidade visual bem marcada.',
    tags: ['Personagens', 'Geek', 'Florais', 'Ilustrações', 'Pop culture', 'Composições vibrantes', 'Artes autorais'],
    cards: [
      {
        number: '01',
        title: 'Presença cromática',
        desc: 'O uso correto da cor reforça impacto visual, contraste e personalidade na composição.'
      },
      {
        number: '02',
        title: 'Harmonia de tons',
        desc: 'A escolha das cores precisa conversar com a pele e com a ideia do projeto.'
      },
      {
        number: '03',
        title: 'Vibrante e durável',
        desc: 'Com aplicação bem pensada e cuidados certos, a tatuagem mantém vida e leitura por mais tempo.'
      }
    ]
  },
  coverup: {
    id: 'coverup',
    label: 'SERVIÇO ESPECIALIZADO',
    title: 'Cover-up & Restauro',
    essence: 'Uma nova leitura para tatuagens antigas, marcas ou projetos que precisam de transformação.',
    whatIs: 'Cover-up é o processo de cobrir uma tatuagem antiga com uma nova composição. Restauro é quando a ideia é recuperar uma tatuagem já existente, reforçando traços, sombras ou cores. Em ambos os casos, o projeto precisa ser pensado com estratégia.',
    topics: [
      {
        title: 'Como funciona na pele',
        desc: 'Não é apenas colocar um desenho por cima. É preciso analisar o que já existe: intensidade da tinta antiga, posição, tamanho, formato, tom da pele e possibilidades reais de cobertura ou recuperação.'
      },
      {
        title: 'Para quem combina',
        desc: 'Combina com quem tem uma tatuagem antiga, apagada, mal resolvida ou que já não representa mais a pessoa, mas quer transformar isso com cuidado e respeito pela história da pele.'
      },
      {
        title: 'Pontos de cuidado',
        desc: 'Nem toda tatuagem pode ser coberta com qualquer desenho. Às vezes, o melhor resultado exige adaptação da ideia, uso inteligente de sombras ou até sessões prévias de clareamento, dependendo do caso.'
      }
    ],
    idealPhrase: 'Projetos de transformação, releitura e recuperação pensados com estratégia.',
    tags: ['Cobertura parcial', 'Cobertura total', 'Restauro', 'Releitura', 'Correção visual', 'Tatuagens antigas', 'Marcas e cicatrizes, quando possível'],
    cards: [
      {
        number: '01',
        title: 'Leitura estratégica',
        desc: 'Cada projeto parte da análise do que já existe para encontrar a melhor solução de transformação.'
      },
      {
        number: '02',
        title: 'Cobertura com critério',
        desc: 'Sombras, composição e posicionamento são usados com inteligência para alcançar um bom resultado.'
      },
      {
        number: '03',
        title: 'Respeito pela história',
        desc: 'A proposta não é apagar o passado, mas construir uma nova leitura com mais sentido para o presente.'
      }
    ]
  },
  ornamental: {
    id: 'ornamental',
    label: 'ESTILO EXCLUSIVO',
    title: 'Ornamental',
    essence: 'Simetria, ritmo e fluidez para criar tatuagens que acompanham o corpo.',
    whatIs: 'O Ornamental trabalha com padrões, linhas, formas decorativas, mandalas, arabescos, elementos geométricos e composições que valorizam o movimento natural da anatomia.',
    topics: [
      {
        title: 'Como funciona na pele',
        desc: 'Esse estilo depende muito do encaixe no corpo. A tatuagem precisa conversar com curvas, articulações e proporções para parecer parte da pessoa, não apenas um desenho aplicado sobre a pele.'
      },
      {
        title: 'Para quem combina',
        desc: 'Combina com quem gosta de tatuagens elegantes, simbólicas, decorativas e com presença visual refinada.'
      },
      {
        title: 'Pontos de cuidado',
        desc: 'Simetria e posicionamento são fundamentais. O tamanho, a área do corpo e o fluxo da composição precisam ser bem planejados para o resultado ficar harmônico.'
      }
    ],
    idealPhrase: 'Projetos elegantes, simbólicos e pensados para acompanhar a anatomia.',
    tags: ['Mandalas', 'Geométricos', 'Arabescos', 'Braceletes', 'Pontilhismo', 'Composições simétricas', 'Projetos decorativos'],
    cards: [
      {
        number: '01',
        title: 'Simetria',
        desc: 'O equilíbrio entre formas e espaçamentos é essencial para que a composição funcione com elegância.'
      },
      {
        number: '02',
        title: 'Fluxo corporal',
        desc: 'A leitura do corpo orienta a direção das linhas e faz a tatuagem parecer parte da anatomia.'
      },
      {
        number: '03',
        title: 'Detalhe refinado',
        desc: 'É um estilo ideal para quem valoriza ritmo visual, leveza decorativa e presença sofisticada.'
      }
    ]
  },
  oldschool: {
    id: 'oldschool',
    label: 'ESTILO EXCLUSIVO',
    title: 'Old School',
    essence: 'Traço forte, visual clássico e presença atemporal.',
    whatIs: 'O Old School, também conhecido como Tradicional Americano, é um dos estilos mais clássicos da tatuagem. Ele usa contornos marcantes, sombras sólidas e uma composição mais direta, com símbolos fortes e fáceis de reconhecer.',
    topics: [
      {
        title: 'Como funciona na pele',
        desc: 'A principal força do Old School está na leitura. Os desenhos costumam ter formas claras, linhas firmes e contraste bem definido, o que ajuda a tatuagem a manter presença visual com o passar do tempo.'
      },
      {
        title: 'Para quem combina',
        desc: 'Combina com quem gosta de tatuagens com atitude, tradição e personalidade. É um estilo direto, forte e cheio de história.'
      },
      {
        title: 'Pontos de cuidado',
        desc: 'Mesmo parecendo simples, o Old School exige muita precisão. O traço, o preenchimento e a composição precisam estar bem resolvidos para o resultado ter força.'
      }
    ],
    idealPhrase: 'Projetos clássicos, marcantes e com leitura forte desde o primeiro olhar.',
    tags: ['Rosas', 'Âncoras', 'Adagas', 'Caveiras', 'Andorinhas', 'Corações', 'Panteras', 'Símbolos clássicos'],
    cards: [
      {
        number: '01',
        title: 'Traço marcante',
        desc: 'Linhas firmes e bem resolvidas garantem a força visual característica do estilo.'
      },
      {
        number: '02',
        title: 'Leitura imediata',
        desc: 'Formas claras e contraste definido ajudam a tatuagem a manter presença com o tempo.'
      },
      {
        number: '03',
        title: 'Clássico atemporal',
        desc: 'É uma estética tradicional, cheia de atitude e com grande durabilidade visual.'
      }
    ]
  }
};

export default function StyleDetailView({ styleId, onClose }: { styleId: string; onClose: () => void }) {
  const { t, i18n } = useTranslation();
  const lang = getSupportedLanguage(i18n.language);
  const data = styleDetailContent[lang][styleId] || styleDetailContent.pt[styleId] || styleDetailContent.pt.realism;

  useLayoutEffect(() => {
    const modalEl = document.querySelector('.style-modal-scroll');
    if (modalEl) {
      modalEl.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [styleId]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white text-zinc-900 w-full"
    >
      {/* 1. LIGHT THEME HERO HEADER WITHOUT IMAGES */}
      <div className="bg-white px-5 sm:px-6 md:px-8 pt-5 sm:pt-6 pb-0">
        <section className="relative py-12 sm:py-16 md:py-20 bg-black overflow-hidden shadow-sm rounded-none">
        
        {/* Subtle decorative geometric nodes/radar in background */}
        <div className="absolute top-10 left-10 md:left-24 text-[#005F73]/15 pointer-events-none select-none">
          <svg className="w-48 h-48" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
            <circle cx="50" cy="50" r="30" strokeDasharray="2 2" />
            <circle cx="50" cy="50" r="45" />
            <line x1="10" y1="50" x2="90" y2="50" />
            <line x1="50" y1="10" x2="50" y2="90" />
          </svg>
        </div>

        <div className="absolute right-12 bottom-12 text-[#005F73]/15 pointer-events-none select-none">
          <svg className="w-36 h-36" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
            <circle cx="50" cy="50" r="20" />
            <circle cx="50" cy="50" r="40" strokeDasharray="1 3" />
            <line x1="0" y1="50" x2="100" y2="50" />
            <line x1="50" y1="0" x2="50" y2="100" />
          </svg>
        </div>

        {/* Dots Grid Decoration */}
        <div className="absolute top-12 right-20 hidden md:block text-[#005F73]/10 pointer-events-none select-none">
          <div className="grid grid-cols-6 gap-2">
            {[...Array(18)].map((_, idx) => (
              <div key={idx} className="w-1 h-1 bg-current rounded-full" />
            ))}
          </div>
        </div>

        <div className="absolute bottom-6 left-1/3 hidden md:block text-[#005F73]/10 pointer-events-none select-none">
          <div className="grid grid-cols-6 gap-2">
            {[...Array(12)].map((_, idx) => (
              <div key={idx} className="w-1.5 h-1.5 bg-current rounded-full" />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-8 sm:px-12 md:px-16 lg:px-20 relative z-10 pt-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative pb-6">
            
            {/* Left side: Heading and copy */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* "ESTILO EXCLUSIVO" header tracker */}
              <div className="flex items-center gap-3 text-[#005F73] text-[11px] font-extrabold tracking-[0.4em] uppercase">
                <span>{t(`styles.detail.${styleId}.label`, { defaultValue: data.label })}</span>
              </div>

              {/* Title serifado */}
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight text-white font-normal uppercase">
                {t(`styles.detail.${styleId}.title`, { defaultValue: data.title })}
              </h1>

              {/* Subtítulo / essência em azul petróleo */}
              <p className="text-[#005F73] text-xs sm:text-[13px] font-extrabold tracking-[0.2em] uppercase pt-2 max-w-2xl leading-relaxed">
                {t(`styles.detail.${styleId}.essence`, { defaultValue: data.essence })}
              </p>

              {/* O que é */}
              <div className="pt-6 space-y-4 text-left">
                <div className="inline-flex flex-col">
                  <h3 className="font-serif text-xl font-normal text-white mb-2">{t('styles.detailPage.whatIs', { defaultValue: 'O que é' })}</h3>
                  <div className="w-12 h-[1px] bg-[#005F73]" />
                </div>
                <p className="text-[clamp(0.95rem,1vw,1.05rem)] leading-[1.75] text-white/70 font-light max-w-2xl text-left">
                  {t(`styles.detail.${styleId}.whatIs`, { defaultValue: data.whatIs })}
                </p>
              </div>
            </div>

            {/* Right side: 3 topics + vertical layout */}
            <div className="lg:col-span-5 lg:pl-10 relative pt-4 lg:pt-8 w-full">
              
              {/* Vertical timeline outline */}
              <div className="relative pl-8 border-l border-[#005F73]/25 py-2 space-y-10">
                
                {/* Diamond dot precisely aligned at the peak */}
                <div className="absolute -left-[5.5px] -top-1 w-2.5 h-2.5 bg-[#005F73] rotate-45" />

                {data.topics.map((item, idx) => (
                  <div key={idx} className="relative group text-left">
                    
                    {/* Tick marker sticking out leftwards into the vertical line */}
                    <div className="absolute -left-[36.5px] top-1.5 w-2 h-[1px] bg-[#005F73]/50" />
                    
                    {/* Diamond bullet on topics */}
                    <div className="absolute -left-[36px] top-1 w-1.5 h-1.5 bg-[#005F73] rotate-45" />

                    <h3 className="font-serif text-lg text-white font-normal leading-snug">
                      {t(`styles.detail.${styleId}.topics.${idx}.title`, { defaultValue: item.title })}
                    </h3>
                    <p className="text-[clamp(0.95rem,1vw,1.05rem)] leading-[1.75] text-white/70 font-light mt-2 text-left">
                      {t(`styles.detail.${styleId}.topics.${idx}.desc`, { defaultValue: item.desc })}
                    </p>
                  </div>
                ))}
              </div>

              {/* Vertical Watermark Title on Margin */}
              <div className="absolute right-0 top-0 h-full hidden xl:flex flex-col justify-start items-end pointer-events-none select-none">
                <div className="text-[#005F73]/12 text-[10px] font-bold uppercase tracking-[0.55em] whitespace-nowrap rotate-90 origin-right translate-x-3 translate-y-3">
                  ZERRAINK ESTÚDIO
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>

      {/* 2. WHITE/OFF-WHITE AREA BELOW */}
      <section className="bg-[#FFFFFF] text-stone-900 py-12 sm:py-16 md:py-20 relative px-5 sm:px-6 md:px-8">
        
        <div className="max-w-7xl mx-auto px-6 relative">
          
          {/* BLOCO "IDEAL PARA" ENRIQUECIDO COM ACABAMENTO PREMIUM E TÉCNICO */}
          <div className="bg-white border border-[#005F73]/20 rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-xs text-center max-w-5xl mx-auto mb-16 space-y-4">
            
            {/* Fine outer margin frame with corner decorations */}
            <div className="absolute inset-4 border border-[#005F73]/20 pointer-events-none rounded-2xl"></div>

            {/* Overlapping/Incomplete technical border corners */}
            {/* Top-Left Corner Line */}
            <div className="absolute top-2 left-6 w-12 h-[1px] bg-[#005F73]/30 pointer-events-none" />
            <div className="absolute top-6 left-2 w-[1px] h-12 bg-[#005F73]/30 pointer-events-none" />
            {/* Top-Right Corner Line */}
            <div className="absolute top-2 right-6 w-12 h-[1px] bg-[#005F73]/30 pointer-events-none" />
            <div className="absolute top-6 right-2 w-[1px] h-12 bg-[#005F73]/30 pointer-events-none" />
            {/* Bottom-Left Corner Line */}
            <div className="absolute bottom-2 left-6 w-12 h-[1px] bg-[#005F73]/30 pointer-events-none" />
            <div className="absolute bottom-6 left-2 w-[1px] h-12 bg-[#005F73]/30 pointer-events-none" />
            {/* Bottom-Right Corner Line */}
            <div className="absolute bottom-2 right-6 w-12 h-[1px] bg-[#005F73]/30 pointer-events-none" />
            <div className="absolute bottom-6 right-2 w-[1px] h-12 bg-[#005F73]/30 pointer-events-none" />

            {/* Technical circular crosshair/radar element in the top-left corner */}
            <div className="absolute top-6 left-6 md:top-8 md:left-8 text-[#005F73]/35 hidden sm:block pointer-events-none">
              <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.75">
                <circle cx="50" cy="50" r="30" />
                <circle cx="50" cy="50" r="20" />
                <circle cx="50" cy="50" r="6" />
                <line x1="10" y1="50" x2="90" y2="50" strokeWidth="0.5" />
                <line x1="50" y1="10" x2="50" y2="90" strokeWidth="0.5" />
              </svg>
            </div>

            {/* Technical dots array in the top-right corner */}
            <div className="absolute top-10 right-10 hidden sm:flex items-center gap-1.5 text-[#005F73]/40 pointer-events-none">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-[#005F73] rounded-full" />
                ))}
              </div>
            </div>

            {/* Vertical dotted line on the lateral borders inside the container */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 text-[#005F73]/35 hidden sm:flex pointer-events-none">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-[#005F73] rounded-full" />
              ))}
            </div>
            
            <div className="absolute left-6 bottom-16 flex flex-col gap-1.5 text-[#005F73]/35 hidden sm:flex pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-[#005F73] rounded-full" />
              ))}
            </div>

            {/* Middle Title and Content */}
            <div className="relative z-10 flex flex-col items-center py-4">
              <div className="inline-flex flex-col items-center">
                <h2 className="font-serif text-4xl sm:text-5xl text-stone-900 font-normal leading-snug tracking-tight">
                  {t('styles.detailPage.idealPara', { defaultValue: 'Ideal para' })}
                </h2>
                <div className="w-14 h-[2px] bg-[#005F73] mt-2.5" />
              </div>

              <p className="text-[clamp(0.95rem,1vw,1.05rem)] leading-[1.75] text-[#005F73] font-medium max-w-xl mx-auto pt-3.5">
                {t(`styles.detail.${styleId}.idealPhrase`, { defaultValue: data.idealPhrase })}
              </p>

              {/* Tags block with custom premium rounded capsules */}
              <div className="flex flex-wrap gap-2.5 justify-center pt-8 max-w-3xl mx-auto">
                {data.tags.map((tag, tIdx) => (
                  <div 
                    key={tIdx}
                    className="border border-[#005F73]/25 bg-white hover:bg-[#005F73]/5 px-6 py-2.5 text-stone-800 text-xs tracking-widest uppercase font-bold flex items-center transition-all duration-300 rounded-full shadow-2xs"
                  >
                    <span>{t(`styles.detail.${styleId}.tags.${tIdx}`, { defaultValue: tag })}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3 PREMIUM CARDS */}
          <div className="relative p-0 md:p-2 w-full mt-12">

            {/* 3 Vertically Aligned or Grid Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
              {data.cards.map((card, cIdx) => {
                return (
                  <div 
                    key={card.number}
                    className="border border-[#005F73]/15 bg-white p-8 md:p-10 rounded-2xl flex flex-col items-start justify-start text-left shadow-sm select-none hover:shadow-md transition-shadow duration-300 relative min-h-[300px] h-full overflow-hidden group"
                  >
                    
                    {/* FINE DECORATIVE CORNER MARKS (CROP MARKS) OVERLAPPING/TECHNICAL */}
                    {/* Top-Left Crop Marker */}
                    <div className="absolute top-3 left-1.5 w-5 h-[1.5px] bg-[#005F73]/30 pointer-events-none" />
                    <div className="absolute top-1.5 left-3 w-[1.5px] h-5 bg-[#005F73]/30 pointer-events-none" />
                    {/* Top-Right Crop Marker */}
                    <div className="absolute top-3 right-1.5 w-5 h-[1.5px] bg-[#005F73]/30 pointer-events-none" />
                    <div className="absolute top-1.5 right-3 w-[1.5px] h-5 bg-[#005F73]/30 pointer-events-none" />
                    {/* Bottom-Left Crop Marker */}
                    <div className="absolute bottom-3 left-1.5 w-5 h-[1.5px] bg-[#005F73]/30 pointer-events-none" />
                    <div className="absolute bottom-1.5 left-3 w-[1.5px] h-5 bg-[#005F73]/30 pointer-events-none" />
                    {/* Bottom-Right Crop Marker */}
                    <div className="absolute bottom-3 right-1.5 w-5 h-[1.5px] bg-[#005F73]/30 pointer-events-none" />
                    <div className="absolute bottom-1.5 right-3 w-[1.5px] h-5 bg-[#005F73]/30 pointer-events-none" />

                    {/* Dotted sequence on side of card */}
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 text-[#005F73]/30 pointer-events-none">
                      <div className="w-[3px] h-[3px] rounded-full bg-current" />
                      <div className="w-[3px] h-[3px] rounded-full bg-current" />
                      <div className="w-[3px] h-[3px] rounded-full bg-current" />
                      <div className="w-[3px] h-[3px] rounded-full bg-current" />
                    </div>
                    
                    <div className="absolute left-3.5 bottom-8 flex flex-col gap-1.5 text-[#005F73]/30 pointer-events-none">
                      <div className="w-[3px] h-[3px] rounded-full bg-current" />
                      <div className="w-[3px] h-[3px] rounded-full bg-current" />
                      <div className="w-[3px] h-[3px] rounded-full bg-current" />
                    </div>

                    {/* TECHNICAL SCOPE/RADAR COUNTER CIRCLE AT THE TOP */}
                    <div className="mb-6 relative w-16 h-16 flex items-center justify-center shrink-0">
                      
                      {/* Vertical line through number circle */}
                      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-[#005F73]/30 pointer-events-none" />
                      {/* Horizontal line through number circle */}
                      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-[#005F73]/30 pointer-events-none" />

                      {/* Concentric Circle Target Base */}
                      <div className="absolute w-12 h-12 rounded-full border border-[#005F73]/20 pointer-events-none" />
                      
                      {/* Inner clean circle serving as container for scope */}
                      <div className="w-9 h-9 rounded-full border border-[#005F73]/40 bg-white flex items-center justify-center relative z-10 shadow-3xs">
                        <div className="absolute inset-[1.5px] rounded-full border border-dashed border-[#005F73]/25" />
                        <span className="font-mono text-xs font-bold text-[#005F73] relative z-10">
                          {card.number}
                        </span>
                      </div>
                    </div>

                    {/* Simple horizontal petrol-blue line divider */}
                    <div className="w-10 h-[1.5px] bg-[#005F73] mb-4 z-10" />

                    {/* Serif Card Title */}
                    <h4 className="font-serif text-xl sm:text-[22px] text-stone-950 leading-snug font-normal tracking-wide text-left z-10">
                      {t(`styles.detail.${styleId}.cards.${cIdx}.title`, { defaultValue: card.title })}
                    </h4>
                    
                    {/* Description info */}
                    <p className="text-[clamp(0.95rem,1vw,1.05rem)] leading-[1.75] text-neutral-600 font-light mt-4 text-left max-w-xs z-10">
                      {t(`styles.detail.${styleId}.cards.${cIdx}.desc`, { defaultValue: card.desc })}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </section>
    </motion.div>
  );
}
