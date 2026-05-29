export type SupportedLanguage = 'pt' | 'en' | 'es';

export interface ContentBlock {
  type: 'p' | 'list' | 'contact';
  text?: string;
  items?: string[];
}

export interface LegalSectionContent {
  title: string;
  summary?: string;
  blocks: ContentBlock[];
}

export interface StyleTopicContent {
  title: string;
  desc: string;
}

export interface StyleCardContent {
  number: string;
  title: string;
  desc: string;
}

export interface StyleDetailContent {
  id: string;
  label: string;
  title: string;
  essence: string;
  whatIs: string;
  topics: StyleTopicContent[];
  idealPhrase: string;
  tags: string[];
  cards: StyleCardContent[];
}

export const getSupportedLanguage = (language?: string): SupportedLanguage => {
  const normalized = (language || 'pt').toLowerCase();

  if (normalized.startsWith('en')) return 'en';
  if (normalized.startsWith('es')) return 'es';

  return 'pt';
};

export const socialPageContent = {
  pt: {
    seoTitle: 'Redes Sociais | ZERRAINK Estúdio',
    seoDescription: 'Me acompanhe mais de perto nas redes sociais: bastidores, artes finalizadas, rotina do estúdio e novidades.',
    tag: 'Social',
    title: 'Acompanhe Lucas Zerra',
    description: 'Me acompanhe nas redes sociais.',
    back: 'Voltar',
    intro: 'Bastidores, artes finalizadas, rotina do estúdio e novidades compartilhadas diretamente por mim no dia a dia com a tatuagem.',
    cards: {
      instagram: 'Acompanhe artes finalizadas, projetos autorais, bastidores e o dia a dia do estúdio.',
      tiktok: 'Veja vídeos rápidos do processo criativo, detalhes das sessões e momentos reais do estúdio.',
      facebook: 'Confira trabalhos, avaliações de clientes e conteúdos completos das tatuagens realizadas.'
    }
  },
  en: {
    seoTitle: 'Social Media | ZERRAINK Studio',
    seoDescription: 'Follow the studio more closely on social media: behind the scenes, finished work, studio routine, and updates.',
    tag: 'Social',
    title: 'Follow Lucas Zerra',
    description: 'Follow me on social media.',
    back: 'Back',
    intro: 'Behind the scenes, finished tattoos, studio routine, and updates shared directly from my daily work with tattooing.',
    cards: {
      instagram: 'Follow finished pieces, original projects, behind the scenes, and the daily routine of the studio.',
      tiktok: 'Watch quick videos of the creative process, session details, and real moments from the studio.',
      facebook: 'See finished work, client reviews, and complete content about the tattoos created.'
    }
  },
  es: {
    seoTitle: 'Redes Sociales | ZERRAINK Estudio',
    seoDescription: 'Acompaña el estudio más de cerca en redes sociales: bastidores, trabajos terminados, rutina del estudio y novedades.',
    tag: 'Social',
    title: 'Sigue a Lucas Zerra',
    description: 'Sígueme en redes sociales.',
    back: 'Volver',
    intro: 'Bastidores, tatuajes terminados, rutina del estudio y novedades compartidas directamente desde mi día a día con el tatuaje.',
    cards: {
      instagram: 'Sigue trabajos terminados, proyectos autorales, bastidores y el día a día del estudio.',
      tiktok: 'Mira videos rápidos del proceso creativo, detalles de las sesiones y momentos reales del estudio.',
      facebook: 'Consulta trabajos, reseñas de clientes y contenidos completos de los tatuajes realizados.'
    }
  }
} satisfies Record<SupportedLanguage, {
  seoTitle: string;
  seoDescription: string;
  tag: string;
  title: string;
  description: string;
  back: string;
  intro: string;
  cards: Record<'instagram' | 'tiktok' | 'facebook', string>;
}>;

export const styleDetailContent: Record<SupportedLanguage, Record<string, StyleDetailContent>> = {
  pt: {
    realism: {
      id: 'realism',
      label: 'ESTILO EXCLUSIVO',
      title: 'Realismo Preto e Cinza',
      essence: 'Profundidade, contraste e volume para transformar referências em tatuagens com presença visual.',
      whatIs: 'O realismo preto e cinza trabalha com diferentes intensidades de sombra para criar profundidade, textura e sensação de volume na pele. É um estilo muito usado em retratos, animais, imagens religiosas, esculturas, natureza e composições com atmosfera mais dramática.',
      topics: [
        { title: 'Como funciona na pele', desc: 'A força desse estilo está no equilíbrio entre áreas escuras, tons intermediários e pontos de luz. Quanto melhor o contraste, mais leitura a tatuagem ganha à distância e mais impacto ela mantém ao longo do tempo.' },
        { title: 'Para quem combina', desc: 'Combina com quem busca uma tatuagem marcante, detalhada e com aparência mais realista, especialmente quando a ideia envolve emoção, memória, homenagem ou impacto visual.' },
        { title: 'Pontos de cuidado', desc: 'Referências de boa qualidade ajudam muito no resultado. Também é importante respeitar o tamanho ideal do projeto, porque detalhes muito pequenos podem perder definição com o tempo.' }
      ],
      idealPhrase: 'Projetos com leitura forte, atmosfera visual e profundidade bem construída.',
      tags: ['Retratos', 'Animais', 'Religiosos', 'Natureza', 'Esculturas', 'Composições detalhadas', 'Coberturas estratégicas'],
      cards: [
        { number: '01', title: 'Contraste e profundidade', desc: 'Sombras bem construídas e pontos de luz estratégicos reforçam o volume e a presença da composição.' },
        { number: '02', title: 'Leitura à distância', desc: 'O equilíbrio entre preto, cinza e pele cria impacto visual mesmo quando a tatuagem é observada de longe.' },
        { number: '03', title: 'Detalhe com presença', desc: 'Quando o projeto respeita escala e referência, o resultado ganha definição, textura e força ao longo do tempo.' }
      ]
    },
    fineline: {
      id: 'fineline',
      label: 'ESTILO EXCLUSIVO',
      title: 'Fine Line',
      essence: 'Leveza, precisão e delicadeza em traços finos e elegantes.',
      whatIs: 'O Fine Line é um estilo marcado por linhas mais finas, limpas e discretas. Ele valoriza a sutileza e funciona muito bem para desenhos minimalistas, frases, flores, símbolos, composições pequenas e artes com leitura mais delicada.',
      topics: [
        { title: 'Como funciona na pele', desc: 'Por ter traços finos, esse estilo exige precisão no desenho, no posicionamento e na aplicação. Cada linha precisa ter fluidez e equilíbrio para que o resultado fique elegante, sem excesso de informação.' },
        { title: 'Para quem combina', desc: 'Combina com quem prefere tatuagens mais discretas, sofisticadas e leves, mas ainda assim cheias de significado.' },
        { title: 'Pontos de cuidado', desc: 'Nem todo desenho funciona em tamanho muito pequeno. Alguns detalhes precisam de respiro para cicatrizar bem e continuar legíveis com o tempo.' }
      ],
      idealPhrase: 'Projetos delicados, elegantes e com leitura sutil, mas cheios de presença.',
      tags: ['Frases', 'Florais', 'Símbolos', 'Minimalistas', 'Homenagens', 'Traços delicados', 'Microdetalhes'],
      cards: [
        { number: '01', title: 'Precisão do traço', desc: 'Linhas limpas e bem posicionadas garantem leveza visual e acabamento elegante.' },
        { number: '02', title: 'Delicadeza com leitura', desc: 'Mesmo sutil, o desenho precisa ter respiro e proporção para continuar legível com o tempo.' },
        { number: '03', title: 'Sutileza com significado', desc: 'É um estilo ideal para quem busca uma tatuagem discreta, refinada e pessoal.' }
      ]
    },
    colorido: {
      id: 'colorido',
      label: 'ESTILO EXCLUSIVO',
      title: 'Colorido',
      essence: 'Cor, presença e personalidade para transformar ideias em composições vibrantes.',
      whatIs: 'A tatuagem colorida usa pigmentos e combinações cromáticas para criar impacto visual, contraste e vida. Pode aparecer em estilos mais ilustrativos, personagens, florais, elementos geek, composições autorais e artes com maior energia visual.',
      topics: [
        { title: 'Como funciona na pele', desc: 'O resultado depende da escolha das cores, do contraste, da saturação e da harmonia com o tom da pele. Uma boa composição colorida precisa ser pensada para ter leitura, equilíbrio e durabilidade visual.' },
        { title: 'Para quem combina', desc: 'Combina com quem quer uma tatuagem expressiva, criativa e cheia de presença, seja em uma peça pequena com destaque de cor ou em uma composição maior.' },
        { title: 'Pontos de cuidado', desc: 'Cores podem se comportar de formas diferentes em cada pele. Cuidados no pós, proteção solar e manutenção ao longo do tempo ajudam a preservar melhor o resultado.' }
      ],
      idealPhrase: 'Projetos vibrantes, criativos e com personalidade visual bem marcada.',
      tags: ['Personagens', 'Geek', 'Florais', 'Ilustrações', 'Pop culture', 'Composições vibrantes', 'Artes autorais'],
      cards: [
        { number: '01', title: 'Presença cromática', desc: 'O uso correto da cor reforça impacto visual, contraste e personalidade na composição.' },
        { number: '02', title: 'Harmonia de tons', desc: 'A escolha das cores precisa conversar com a pele e com a ideia do projeto.' },
        { number: '03', title: 'Vibrante e durável', desc: 'Com aplicação bem pensada e cuidados certos, a tatuagem mantém vida e leitura por mais tempo.' }
      ]
    },
    coverup: {
      id: 'coverup',
      label: 'SERVIÇO ESPECIALIZADO',
      title: 'Cover-up & Restauro',
      essence: 'Uma nova leitura para tatuagens antigas, marcas ou projetos que precisam de transformação.',
      whatIs: 'Cover-up é o processo de cobrir uma tatuagem antiga com uma nova composição. Restauro é quando a ideia é recuperar uma tatuagem já existente, reforçando traços, sombras ou cores. Em ambos os casos, o projeto precisa ser pensado com estratégia.',
      topics: [
        { title: 'Como funciona na pele', desc: 'Não é apenas colocar um desenho por cima. É preciso analisar o que já existe: intensidade da tinta antiga, posição, tamanho, formato, tom da pele e possibilidades reais de cobertura ou recuperação.' },
        { title: 'Para quem combina', desc: 'Combina com quem tem uma tatuagem antiga, apagada, mal resolvida ou que já não representa mais a pessoa, mas quer transformar isso com cuidado e respeito pela história da pele.' },
        { title: 'Pontos de cuidado', desc: 'Nem toda tatuagem pode ser coberta com qualquer desenho. Às vezes, o melhor resultado exige adaptação da ideia, uso inteligente de sombras ou até sessões prévias de clareamento, dependendo do caso.' }
      ],
      idealPhrase: 'Projetos de transformação, releitura e recuperação pensados com estratégia.',
      tags: ['Cobertura parcial', 'Cobertura total', 'Restauro', 'Releitura', 'Correção visual', 'Tatuagens antigas', 'Marcas e cicatrizes, quando possível'],
      cards: [
        { number: '01', title: 'Leitura estratégica', desc: 'Cada projeto parte da análise do que já existe para encontrar a melhor solução de transformação.' },
        { number: '02', title: 'Cobertura com critério', desc: 'Sombras, composição e posicionamento são usados com inteligência para alcançar um bom resultado.' },
        { number: '03', title: 'Respeito pela história', desc: 'A proposta não é apagar o passado, mas construir uma nova leitura com mais sentido para o presente.' }
      ]
    },
    ornamental: {
      id: 'ornamental',
      label: 'ESTILO EXCLUSIVO',
      title: 'Ornamental',
      essence: 'Simetria, ritmo e fluidez para criar tatuagens que acompanham o corpo.',
      whatIs: 'O Ornamental trabalha com padrões, linhas, formas decorativas, mandalas, arabescos, elementos geométricos e composições que valorizam o movimento natural da anatomia.',
      topics: [
        { title: 'Como funciona na pele', desc: 'Esse estilo depende muito do encaixe no corpo. A tatuagem precisa conversar com curvas, articulações e proporções para parecer parte da pessoa, não apenas um desenho aplicado sobre a pele.' },
        { title: 'Para quem combina', desc: 'Combina com quem gosta de tatuagens elegantes, simbólicas, decorativas e com presença visual refinada.' },
        { title: 'Pontos de cuidado', desc: 'Simetria e posicionamento são fundamentais. O tamanho, a área do corpo e o fluxo da composição precisam ser bem planejados para o resultado ficar harmônico.' }
      ],
      idealPhrase: 'Projetos elegantes, simbólicos e pensados para acompanhar a anatomia.',
      tags: ['Mandalas', 'Geométricos', 'Arabescos', 'Braceletes', 'Pontilhismo', 'Composições simétricas', 'Projetos decorativos'],
      cards: [
        { number: '01', title: 'Simetria', desc: 'O equilíbrio entre formas e espaçamentos é essencial para que a composição funcione com elegância.' },
        { number: '02', title: 'Fluxo corporal', desc: 'A leitura do corpo orienta a direção das linhas e faz a tatuagem parecer parte da anatomia.' },
        { number: '03', title: 'Detalhe refinado', desc: 'É um estilo ideal para quem valoriza ritmo visual, leveza decorativa e presença sofisticada.' }
      ]
    },
    oldschool: {
      id: 'oldschool',
      label: 'ESTILO EXCLUSIVO',
      title: 'Old School',
      essence: 'Traço forte, visual clássico e presença atemporal.',
      whatIs: 'O Old School, também conhecido como Tradicional Americano, é um dos estilos mais clássicos da tatuagem. Ele usa contornos marcantes, sombras sólidas e uma composição mais direta, com símbolos fortes e fáceis de reconhecer.',
      topics: [
        { title: 'Como funciona na pele', desc: 'A principal força do Old School está na leitura. Os desenhos costumam ter formas claras, linhas firmes e contraste bem definido, o que ajuda a tatuagem a manter presença visual com o passar do tempo.' },
        { title: 'Para quem combina', desc: 'Combina com quem gosta de tatuagens com atitude, tradição e personalidade. É um estilo direto, forte e cheio de história.' },
        { title: 'Pontos de cuidado', desc: 'Mesmo parecendo simples, o Old School exige muita precisão. O traço, o preenchimento e a composição precisam estar bem resolvidos para o resultado ter força.' }
      ],
      idealPhrase: 'Projetos clássicos, marcantes e com leitura forte desde o primeiro olhar.',
      tags: ['Rosas', 'Âncoras', 'Adagas', 'Caveiras', 'Andorinhas', 'Corações', 'Panteras', 'Símbolos clássicos'],
      cards: [
        { number: '01', title: 'Traço marcante', desc: 'Linhas firmes e bem resolvidas garantem a força visual característica do estilo.' },
        { number: '02', title: 'Leitura imediata', desc: 'Formas claras e contraste definido ajudam a tatuagem a manter presença com o tempo.' },
        { number: '03', title: 'Clássico atemporal', desc: 'É uma estética tradicional, cheia de atitude e com grande durabilidade visual.' }
      ]
    }
  },
  en: {
    realism: {
      id: 'realism',
      label: 'EXCLUSIVE STYLE',
      title: 'Black and Grey Realism',
      essence: 'Depth, contrast, and volume to turn references into tattoos with strong visual presence.',
      whatIs: 'Black and grey realism uses different shadow intensities to create depth, texture, and a sense of volume on the skin. It is often used for portraits, animals, religious images, sculptures, nature, and compositions with a more dramatic atmosphere.',
      topics: [
        { title: 'How it works on skin', desc: 'The strength of this style is in the balance between dark areas, midtones, and highlights. The better the contrast, the clearer the tattoo reads from a distance and the more impact it keeps over time.' },
        { title: 'Who it suits', desc: 'It suits people looking for a striking, detailed tattoo with a more realistic look, especially when the idea involves emotion, memory, tribute, or visual impact.' },
        { title: 'Care points', desc: 'High-quality references help a lot with the result. It is also important to respect the ideal project size, because very small details can lose definition over time.' }
      ],
      idealPhrase: 'Projects with strong readability, visual atmosphere, and well-built depth.',
      tags: ['Portraits', 'Animals', 'Religious pieces', 'Nature', 'Sculptures', 'Detailed compositions', 'Strategic cover-ups'],
      cards: [
        { number: '01', title: 'Contrast and depth', desc: 'Well-built shadows and strategic highlights reinforce volume and presence in the composition.' },
        { number: '02', title: 'Distance readability', desc: 'The balance between black, grey, and skin creates visual impact even when the tattoo is seen from far away.' },
        { number: '03', title: 'Detail with presence', desc: 'When the project respects scale and reference, the result gains definition, texture, and strength over time.' }
      ]
    },
    fineline: {
      id: 'fineline',
      label: 'EXCLUSIVE STYLE',
      title: 'Fine Line',
      essence: 'Lightness, precision, and delicacy through fine, elegant lines.',
      whatIs: 'Fine Line is defined by thinner, clean, and discreet lines. It values subtlety and works very well for minimalist drawings, phrases, flowers, symbols, small compositions, and artwork with a delicate reading.',
      topics: [
        { title: 'How it works on skin', desc: 'Because it uses fine lines, this style requires precision in the drawing, placement, and application. Each line needs flow and balance so the result stays elegant without excess information.' },
        { title: 'Who it suits', desc: 'It suits people who prefer discreet, sophisticated, and light tattoos that still carry meaning.' },
        { title: 'Care points', desc: 'Not every drawing works at a very small size. Some details need space to heal well and stay readable over time.' }
      ],
      idealPhrase: 'Delicate, elegant projects with subtle readability and strong presence.',
      tags: ['Phrases', 'Florals', 'Symbols', 'Minimalist pieces', 'Tributes', 'Delicate lines', 'Micro details'],
      cards: [
        { number: '01', title: 'Line precision', desc: 'Clean, well-positioned lines create visual lightness and an elegant finish.' },
        { number: '02', title: 'Delicacy with readability', desc: 'Even when subtle, the drawing needs breathing room and proportion to remain legible over time.' },
        { number: '03', title: 'Subtle meaning', desc: 'This style is ideal for anyone looking for a discreet, refined, and personal tattoo.' }
      ]
    },
    colorido: {
      id: 'colorido',
      label: 'EXCLUSIVE STYLE',
      title: 'Color',
      essence: 'Color, presence, and personality to transform ideas into vibrant compositions.',
      whatIs: 'Color tattooing uses pigments and chromatic combinations to create visual impact, contrast, and life. It can appear in illustrative styles, characters, florals, geek elements, original compositions, and artwork with greater visual energy.',
      topics: [
        { title: 'How it works on skin', desc: 'The result depends on color choice, contrast, saturation, and harmony with the skin tone. A good color composition needs to be planned for readability, balance, and visual durability.' },
        { title: 'Who it suits', desc: 'It suits anyone who wants an expressive, creative tattoo full of presence, whether in a small piece with a color highlight or in a larger composition.' },
        { title: 'Care points', desc: 'Colors can behave differently on each skin. Aftercare, sun protection, and maintenance over time help preserve the result better.' }
      ],
      idealPhrase: 'Vibrant, creative projects with a clear visual personality.',
      tags: ['Characters', 'Geek', 'Florals', 'Illustrations', 'Pop culture', 'Vibrant compositions', 'Original artwork'],
      cards: [
        { number: '01', title: 'Chromatic presence', desc: 'Correct use of color reinforces visual impact, contrast, and personality in the composition.' },
        { number: '02', title: 'Tone harmony', desc: 'The choice of colors needs to work with the skin and the idea behind the project.' },
        { number: '03', title: 'Vibrant and lasting', desc: 'With thoughtful application and proper care, the tattoo keeps life and readability for longer.' }
      ]
    },
    coverup: {
      id: 'coverup',
      label: 'SPECIALIZED SERVICE',
      title: 'Cover-up & Restoration',
      essence: 'A new reading for old tattoos, marks, or projects that need transformation.',
      whatIs: 'Cover-up is the process of covering an old tattoo with a new composition. Restoration is used when the goal is to recover an existing tattoo by reinforcing lines, shadows, or colors. In both cases, the project needs to be planned strategically.',
      topics: [
        { title: 'How it works on skin', desc: 'It is not just placing a drawing over another. It is necessary to analyze what already exists: old ink intensity, position, size, shape, skin tone, and real possibilities for coverage or recovery.' },
        { title: 'Who it suits', desc: 'It suits people with an old, faded, unresolved tattoo, or one that no longer represents them, who want to transform it with care and respect for the history on the skin.' },
        { title: 'Care points', desc: 'Not every tattoo can be covered with any drawing. Sometimes the best result requires adapting the idea, using shadows intelligently, or even previous lightening sessions, depending on the case.' }
      ],
      idealPhrase: 'Transformation, reinterpretation, and recovery projects planned strategically.',
      tags: ['Partial coverage', 'Full coverage', 'Restoration', 'Reinterpretation', 'Visual correction', 'Old tattoos', 'Marks and scars, when possible'],
      cards: [
        { number: '01', title: 'Strategic reading', desc: 'Each project starts by analyzing what already exists to find the best transformation solution.' },
        { number: '02', title: 'Coverage with criteria', desc: 'Shadows, composition, and placement are used intelligently to reach a good result.' },
        { number: '03', title: 'Respect for history', desc: 'The goal is not to erase the past, but to build a new reading with more meaning for the present.' }
      ]
    },
    ornamental: {
      id: 'ornamental',
      label: 'EXCLUSIVE STYLE',
      title: 'Ornamental',
      essence: 'Symmetry, rhythm, and flow to create tattoos that follow the body.',
      whatIs: 'Ornamental work uses patterns, lines, decorative shapes, mandalas, arabesques, geometric elements, and compositions that value the natural movement of anatomy.',
      topics: [
        { title: 'How it works on skin', desc: 'This style depends heavily on body placement. The tattoo needs to work with curves, joints, and proportions so it feels like part of the person, not only a drawing applied over the skin.' },
        { title: 'Who it suits', desc: 'It suits people who like elegant, symbolic, decorative tattoos with refined visual presence.' },
        { title: 'Care points', desc: 'Symmetry and placement are essential. Size, body area, and composition flow need to be well planned for a harmonious result.' }
      ],
      idealPhrase: 'Elegant, symbolic projects planned to follow the anatomy.',
      tags: ['Mandalas', 'Geometric work', 'Arabesques', 'Bracelets', 'Dotwork', 'Symmetrical compositions', 'Decorative projects'],
      cards: [
        { number: '01', title: 'Symmetry', desc: 'The balance between shapes and spacing is essential for the composition to work elegantly.' },
        { number: '02', title: 'Body flow', desc: 'Reading the body guides the direction of the lines and makes the tattoo feel part of the anatomy.' },
        { number: '03', title: 'Refined detail', desc: 'This style is ideal for anyone who values visual rhythm, decorative lightness, and sophisticated presence.' }
      ]
    },
    oldschool: {
      id: 'oldschool',
      label: 'EXCLUSIVE STYLE',
      title: 'Old School',
      essence: 'Strong linework, classic visuals, and timeless presence.',
      whatIs: 'Old School, also known as American Traditional, is one of tattooing’s most classic styles. It uses bold outlines, solid shading, and a more direct composition with strong, easy-to-recognize symbols.',
      topics: [
        { title: 'How it works on skin', desc: 'The main strength of Old School is readability. The designs usually have clear shapes, firm lines, and well-defined contrast, which helps the tattoo maintain visual presence over time.' },
        { title: 'Who it suits', desc: 'It suits people who like tattoos with attitude, tradition, and personality. It is a direct, strong style with a lot of history.' },
        { title: 'Care points', desc: 'Even when it looks simple, Old School requires precision. Linework, filling, and composition need to be well resolved for the result to have strength.' }
      ],
      idealPhrase: 'Classic, striking projects with strong readability from the first glance.',
      tags: ['Roses', 'Anchors', 'Daggers', 'Skulls', 'Swallows', 'Hearts', 'Panthers', 'Classic symbols'],
      cards: [
        { number: '01', title: 'Bold linework', desc: 'Firm, well-resolved lines guarantee the visual strength that defines the style.' },
        { number: '02', title: 'Immediate reading', desc: 'Clear shapes and defined contrast help the tattoo keep presence over time.' },
        { number: '03', title: 'Timeless classic', desc: 'It is a traditional aesthetic, full of attitude and with strong visual durability.' }
      ]
    }
  },
  es: {
    realism: {
      id: 'realism',
      label: 'ESTILO EXCLUSIVO',
      title: 'Realismo Negro y Gris',
      essence: 'Profundidad, contraste y volumen para transformar referencias en tatuajes con presencia visual.',
      whatIs: 'El realismo negro y gris trabaja con diferentes intensidades de sombra para crear profundidad, textura y sensación de volumen en la piel. Es un estilo muy usado en retratos, animales, imágenes religiosas, esculturas, naturaleza y composiciones con una atmósfera más dramática.',
      topics: [
        { title: 'Cómo funciona en la piel', desc: 'La fuerza de este estilo está en el equilibrio entre zonas oscuras, tonos intermedios y puntos de luz. Cuanto mejor es el contraste, más lectura gana el tatuaje a distancia y más impacto mantiene con el tiempo.' },
        { title: 'Para quién combina', desc: 'Combina con quien busca un tatuaje llamativo, detallado y con apariencia más realista, especialmente cuando la idea involucra emoción, memoria, homenaje o impacto visual.' },
        { title: 'Puntos de cuidado', desc: 'Las referencias de buena calidad ayudan mucho en el resultado. También es importante respetar el tamaño ideal del proyecto, porque los detalles muy pequeños pueden perder definición con el tiempo.' }
      ],
      idealPhrase: 'Proyectos con lectura fuerte, atmósfera visual y profundidad bien construida.',
      tags: ['Retratos', 'Animales', 'Religiosos', 'Naturaleza', 'Esculturas', 'Composiciones detalladas', 'Coberturas estratégicas'],
      cards: [
        { number: '01', title: 'Contraste y profundidad', desc: 'Sombras bien construidas y puntos de luz estratégicos refuerzan el volumen y la presencia de la composición.' },
        { number: '02', title: 'Lectura a distancia', desc: 'El equilibrio entre negro, gris y piel crea impacto visual incluso cuando el tatuaje se observa de lejos.' },
        { number: '03', title: 'Detalle con presencia', desc: 'Cuando el proyecto respeta escala y referencia, el resultado gana definición, textura y fuerza con el tiempo.' }
      ]
    },
    fineline: {
      id: 'fineline',
      label: 'ESTILO EXCLUSIVO',
      title: 'Fine Line',
      essence: 'Ligereza, precisión y delicadeza en trazos finos y elegantes.',
      whatIs: 'El Fine Line es un estilo marcado por líneas más finas, limpias y discretas. Valora la sutileza y funciona muy bien para diseños minimalistas, frases, flores, símbolos, composiciones pequeñas y artes con lectura más delicada.',
      topics: [
        { title: 'Cómo funciona en la piel', desc: 'Por tener trazos finos, este estilo exige precisión en el dibujo, en la ubicación y en la aplicación. Cada línea necesita fluidez y equilibrio para que el resultado sea elegante, sin exceso de información.' },
        { title: 'Para quién combina', desc: 'Combina con quien prefiere tatuajes más discretos, sofisticados y ligeros, pero aun así llenos de significado.' },
        { title: 'Puntos de cuidado', desc: 'No todo dibujo funciona en tamaño muy pequeño. Algunos detalles necesitan espacio para cicatrizar bien y seguir legibles con el tiempo.' }
      ],
      idealPhrase: 'Proyectos delicados, elegantes y con lectura sutil, pero llenos de presencia.',
      tags: ['Frases', 'Florales', 'Símbolos', 'Minimalistas', 'Homenajes', 'Trazos delicados', 'Microdetalles'],
      cards: [
        { number: '01', title: 'Precisión del trazo', desc: 'Líneas limpias y bien posicionadas garantizan ligereza visual y un acabado elegante.' },
        { number: '02', title: 'Delicadeza con lectura', desc: 'Aunque sea sutil, el dibujo necesita respiro y proporción para mantenerse legible con el tiempo.' },
        { number: '03', title: 'Sutileza con significado', desc: 'Es un estilo ideal para quien busca un tatuaje discreto, refinado y personal.' }
      ]
    },
    colorido: {
      id: 'colorido',
      label: 'ESTILO EXCLUSIVO',
      title: 'Colorido',
      essence: 'Color, presencia y personalidad para transformar ideas en composiciones vibrantes.',
      whatIs: 'El tatuaje colorido usa pigmentos y combinaciones cromáticas para crear impacto visual, contraste y vida. Puede aparecer en estilos más ilustrativos, personajes, florales, elementos geek, composiciones autorales y artes con mayor energía visual.',
      topics: [
        { title: 'Cómo funciona en la piel', desc: 'El resultado depende de la elección de colores, del contraste, de la saturación y de la armonía con el tono de piel. Una buena composición colorida debe pensarse para tener lectura, equilibrio y durabilidad visual.' },
        { title: 'Para quién combina', desc: 'Combina con quien quiere un tatuaje expresivo, creativo y lleno de presencia, ya sea en una pieza pequeña con destaque de color o en una composición mayor.' },
        { title: 'Puntos de cuidado', desc: 'Los colores pueden comportarse de formas diferentes en cada piel. Los cuidados posteriores, la protección solar y el mantenimiento ayudan a preservar mejor el resultado.' }
      ],
      idealPhrase: 'Proyectos vibrantes, creativos y con personalidad visual bien marcada.',
      tags: ['Personajes', 'Geek', 'Florales', 'Ilustraciones', 'Pop culture', 'Composiciones vibrantes', 'Artes autorales'],
      cards: [
        { number: '01', title: 'Presencia cromática', desc: 'El uso correcto del color refuerza impacto visual, contraste y personalidad en la composición.' },
        { number: '02', title: 'Armonía de tonos', desc: 'La elección de colores necesita conversar con la piel y con la idea del proyecto.' },
        { number: '03', title: 'Vibrante y duradero', desc: 'Con una aplicación bien pensada y cuidados correctos, el tatuaje mantiene vida y lectura por más tiempo.' }
      ]
    },
    coverup: {
      id: 'coverup',
      label: 'SERVICIO ESPECIALIZADO',
      title: 'Cover-up y Restauración',
      essence: 'Una nueva lectura para tatuajes antiguos, marcas o proyectos que necesitan transformación.',
      whatIs: 'Cover-up es el proceso de cubrir un tatuaje antiguo con una nueva composición. Restauración es cuando la idea es recuperar un tatuaje ya existente, reforzando trazos, sombras o colores. En ambos casos, el proyecto debe pensarse con estrategia.',
      topics: [
        { title: 'Cómo funciona en la piel', desc: 'No es solo poner un dibujo encima. Es necesario analizar lo que ya existe: intensidad de la tinta antigua, posición, tamaño, formato, tono de piel y posibilidades reales de cobertura o recuperación.' },
        { title: 'Para quién combina', desc: 'Combina con quien tiene un tatuaje antiguo, apagado, mal resuelto o que ya no lo representa, pero quiere transformarlo con cuidado y respeto por la historia de la piel.' },
        { title: 'Puntos de cuidado', desc: 'No todo tatuaje puede cubrirse con cualquier diseño. A veces, el mejor resultado exige adaptar la idea, usar sombras con inteligencia o incluso sesiones previas de aclaramiento, según el caso.' }
      ],
      idealPhrase: 'Proyectos de transformación, reinterpretación y recuperación pensados con estrategia.',
      tags: ['Cobertura parcial', 'Cobertura total', 'Restauración', 'Reinterpretación', 'Corrección visual', 'Tatuajes antiguos', 'Marcas y cicatrices, cuando sea posible'],
      cards: [
        { number: '01', title: 'Lectura estratégica', desc: 'Cada proyecto parte del análisis de lo que ya existe para encontrar la mejor solución de transformación.' },
        { number: '02', title: 'Cobertura con criterio', desc: 'Sombras, composición y ubicación se usan con inteligencia para alcanzar un buen resultado.' },
        { number: '03', title: 'Respeto por la historia', desc: 'La propuesta no es borrar el pasado, sino construir una nueva lectura con más sentido para el presente.' }
      ]
    },
    ornamental: {
      id: 'ornamental',
      label: 'ESTILO EXCLUSIVO',
      title: 'Ornamental',
      essence: 'Simetría, ritmo y fluidez para crear tatuajes que acompañan el cuerpo.',
      whatIs: 'El Ornamental trabaja con patrones, líneas, formas decorativas, mandalas, arabescos, elementos geométricos y composiciones que valoran el movimiento natural de la anatomía.',
      topics: [
        { title: 'Cómo funciona en la piel', desc: 'Este estilo depende mucho del encaje en el cuerpo. El tatuaje debe conversar con curvas, articulaciones y proporciones para parecer parte de la persona, no solo un dibujo aplicado sobre la piel.' },
        { title: 'Para quién combina', desc: 'Combina con quien disfruta tatuajes elegantes, simbólicos, decorativos y con presencia visual refinada.' },
        { title: 'Puntos de cuidado', desc: 'La simetría y la ubicación son fundamentales. El tamaño, la zona del cuerpo y el flujo de la composición deben planificarse bien para que el resultado sea armónico.' }
      ],
      idealPhrase: 'Proyectos elegantes, simbólicos y pensados para acompañar la anatomía.',
      tags: ['Mandalas', 'Geométricos', 'Arabescos', 'Brazaletes', 'Puntillismo', 'Composiciones simétricas', 'Proyectos decorativos'],
      cards: [
        { number: '01', title: 'Simetría', desc: 'El equilibrio entre formas y espacios es esencial para que la composición funcione con elegancia.' },
        { number: '02', title: 'Flujo corporal', desc: 'La lectura del cuerpo orienta la dirección de las líneas y hace que el tatuaje parezca parte de la anatomía.' },
        { number: '03', title: 'Detalle refinado', desc: 'Es un estilo ideal para quien valora ritmo visual, ligereza decorativa y presencia sofisticada.' }
      ]
    },
    oldschool: {
      id: 'oldschool',
      label: 'ESTILO EXCLUSIVO',
      title: 'Old School',
      essence: 'Trazo fuerte, visual clásico y presencia atemporal.',
      whatIs: 'El Old School, también conocido como Tradicional Americano, es uno de los estilos más clásicos del tatuaje. Usa contornos marcados, sombras sólidas y una composición más directa, con símbolos fuertes y fáciles de reconocer.',
      topics: [
        { title: 'Cómo funciona en la piel', desc: 'La principal fuerza del Old School está en la lectura. Los diseños suelen tener formas claras, líneas firmes y contraste bien definido, lo que ayuda al tatuaje a mantener presencia visual con el paso del tiempo.' },
        { title: 'Para quién combina', desc: 'Combina con quien disfruta tatuajes con actitud, tradición y personalidad. Es un estilo directo, fuerte y lleno de historia.' },
        { title: 'Puntos de cuidado', desc: 'Aunque parezca simple, el Old School exige mucha precisión. El trazo, el relleno y la composición deben estar bien resueltos para que el resultado tenga fuerza.' }
      ],
      idealPhrase: 'Proyectos clásicos, marcantes y con lectura fuerte desde el primer vistazo.',
      tags: ['Rosas', 'Anclas', 'Dagas', 'Calaveras', 'Golondrinas', 'Corazones', 'Panteras', 'Símbolos clásicos'],
      cards: [
        { number: '01', title: 'Trazo marcado', desc: 'Líneas firmes y bien resueltas garantizan la fuerza visual característica del estilo.' },
        { number: '02', title: 'Lectura inmediata', desc: 'Formas claras y contraste definido ayudan al tatuaje a mantener presencia con el tiempo.' },
        { number: '03', title: 'Clásico atemporal', desc: 'Es una estética tradicional, llena de actitud y con gran durabilidad visual.' }
      ]
    }
  }
};

export const termsOfUseContent: Record<SupportedLanguage, { sections: Record<string, LegalSectionContent> }> = {
  pt: {
    sections: {
      '01': { title: 'Aceitação', summary: 'Ao acessar e utilizar o site ou serviços do estúdio, você concorda de forma expressa com estes Termos de Uso.', blocks: [{ type: 'p', text: 'Ao acessar este site, enviar uma solicitação de orçamento ou entrar em contato com o ZERRAINK Estúdio, você declara estar ciente das condições de uso aqui descritas.' }, { type: 'p', text: 'Estes Termos orientam a navegação no site, o envio de informações, o processo de orçamento, o agendamento e os cuidados relacionados aos serviços de tatuagem realizados por Lucas Zerra.' }] },
      '02': { title: 'Finalidade do site', summary: 'Este site apresenta informações institucionais, estilos de tatuagem, portfólio, orientações e canais oficiais de contato.', blocks: [{ type: 'p', text: 'O site tem finalidade informativa e institucional. Ele apresenta o estúdio, estilos de tatuagem, galeria de trabalhos, depoimentos, perguntas frequentes, políticas e canais oficiais de contato.' }, { type: 'p', text: 'As informações publicadas não substituem uma avaliação individual do projeto, que depende de referências, área do corpo, tamanho, técnica, estado da pele e disponibilidade de agenda.' }] },
      '03': { title: 'Orçamentos', summary: 'Os orçamentos são personalizados e dependem da análise de cada projeto.', blocks: [{ type: 'p', text: 'Os orçamentos são feitos de forma personalizada. Para avaliar corretamente uma tatuagem, podem ser solicitadas informações como ideia, referências, tamanho aproximado, local do corpo, estilo desejado e complexidade visual.' }, { type: 'p', text: 'O valor pode variar conforme nível de detalhe, tempo estimado, técnica aplicada, área anatômica, necessidade de criação autoral, cover-up, restauração ou ajustes de composição.' }] },
      '04': { title: 'Agendamento', summary: 'A confirmação de horário depende de disponibilidade, aprovação do projeto e eventual pagamento de sinal.', blocks: [{ type: 'p', text: 'O agendamento é confirmado somente após alinhamento do projeto, disponibilidade de agenda e, quando aplicável, pagamento de sinal.' }, { type: 'p', text: 'Horários podem ser ajustados por motivos de força maior, atraso, condições inadequadas de pele, necessidade técnica ou segurança do procedimento.' }] },
      '05': { title: 'Sinal, pagamentos e cancelamentos', summary: 'Condições de sinal, pagamento, reagendamento e cancelamento devem ser combinadas diretamente com o estúdio.', blocks: [{ type: 'p', text: 'O sinal reserva data e horário e também cobre parte do tempo dedicado ao desenvolvimento e preparação do projeto.' }, { type: 'p', text: 'Reagendamentos, atrasos, faltas, cancelamentos e formas de pagamento devem seguir as condições informadas pelo estúdio no atendimento direto.' }] },
      '06': { title: 'Referências e criação artística', summary: 'Referências enviadas pelo cliente servem como base de direção, não como cópia obrigatória.', blocks: [{ type: 'p', text: 'As referências enviadas ajudam a entender intenção, estilo, tema e linguagem visual, mas não garantem reprodução literal de imagens de terceiros.' }, { type: 'p', text: 'O desenvolvimento artístico respeita critérios técnicos, identidade autoral, anatomia, leitura visual, viabilidade na pele e direitos de imagem e criação.' }] },
      '07': { title: 'Alterações no projeto', summary: 'Ajustes podem ser feitos dentro de limites técnicos e de prazo.', blocks: [{ type: 'p', text: 'Alterações podem ser discutidas durante a etapa de criação ou no momento combinado para apresentação do projeto, respeitando o tempo disponível e a viabilidade técnica.' }, { type: 'p', text: 'Mudanças amplas de tema, estilo, tamanho ou localização podem exigir nova avaliação de prazo, valor e disponibilidade.' }] },
      '08': { title: 'Condições para a sessão', summary: 'O cliente deve chegar em boas condições físicas e seguir orientações de preparo.', blocks: [{ type: 'p', text: 'Para uma boa sessão, o cliente deve estar alimentado, hidratado, descansado e evitar bebidas alcoólicas nas 24 horas anteriores.' }, { type: 'p', text: 'Também é recomendado evitar exposição solar intensa, machucados ou irritações na região que será tatuada. Caso a pele não esteja em boas condições, a sessão poderá ser reagendada por segurança.' }] },
      '09': { title: 'Cuidados pós-tatuagem', summary: 'O resultado também depende dos cuidados realizados após a sessão.', blocks: [{ type: 'p', text: 'O cliente receberá orientações de cuidados pós-tatuagem e deve segui-las corretamente para favorecer cicatrização, preservação de traços, cores, sombras e qualidade final.' }, { type: 'p', text: 'Exposição solar, atrito, piscina, mar, produtos inadequados ou remoção de casquinhas podem comprometer o resultado.' }] },
      '10': { title: 'Retoques', summary: 'Retoques são avaliados caso a caso conforme cicatrização e cuidados realizados.', blocks: [{ type: 'p', text: 'A necessidade de retoque é avaliada após a cicatrização completa. Nem toda alteração na cicatrização caracteriza falha técnica, pois cada pele responde de forma diferente.' }, { type: 'p', text: 'Retoques, prazos e possíveis custos serão informados pelo estúdio conforme análise do caso, cuidados realizados e tipo de projeto.' }] },
      '11': { title: 'Cover-up e restauração', summary: 'Projetos de cobertura ou restauração dependem de análise técnica específica.', blocks: [{ type: 'p', text: 'Cover-up e restauração exigem avaliação cuidadosa da tatuagem existente, intensidade da tinta, idade do trabalho, tamanho, posição, tom de pele e expectativa de resultado.' }, { type: 'p', text: 'Algumas ideias podem precisar de adaptação, ampliação, sessões extras ou clareamento prévio para alcançar um resultado mais seguro e coerente.' }] },
      '12': { title: 'Propriedade intelectual', summary: 'Criações, desenhos, composições e materiais autorais pertencem aos seus respectivos autores.', blocks: [{ type: 'p', text: 'Projetos, desenhos, composições, textos, fotografias, identidade visual e demais materiais autorais do site e do estúdio são protegidos por direitos autorais.' }, { type: 'p', text: 'É proibido copiar, reproduzir, vender, distribuir ou utilizar esses materiais sem autorização prévia e expressa.' }] },
      '13': { title: 'Imagens e divulgação', summary: 'Fotos e vídeos podem ser utilizados para portfólio e divulgação quando autorizados.', blocks: [{ type: 'p', text: 'Imagens de tatuagens, bastidores ou registros do processo podem ser utilizados em portfólio, redes sociais e materiais de divulgação, respeitando autorizações e limites combinados com o cliente.' }, { type: 'p', text: 'Caso o cliente tenha restrições de exposição, deve informar isso antes da sessão ou no momento do registro.' }] },
      '14': { title: 'Limitação de responsabilidade', summary: 'O estúdio se compromete com técnica e segurança, mas o resultado depende também de fatores individuais e cuidados posteriores.', blocks: [{ type: 'p', text: 'O estúdio atua com técnica, higiene, materiais adequados e orientação profissional, mas fatores individuais de pele, cicatrização, saúde, exposição solar e cuidados posteriores influenciam diretamente o resultado.' }, { type: 'p', text: 'O cliente é responsável por informar condições de saúde relevantes, alergias, uso de medicamentos e seguir as orientações recebidas.' }] },
      '15': { title: 'Links externos', summary: 'O site pode conter links para plataformas e redes sociais de terceiros.', blocks: [{ type: 'p', text: 'O site pode direcionar para redes sociais, WhatsApp, mapas, plataformas de hospedagem, ferramentas de análise e outros serviços externos.' }, { type: 'p', text: 'O ZERRAINK Estúdio não se responsabiliza por políticas, conteúdos, funcionamento ou práticas de privacidade de sites e plataformas de terceiros.' }] },
      '16': { title: 'Atualizações dos Termos', summary: 'Estes Termos podem ser atualizados para refletir mudanças no site, atendimento ou legislação.', blocks: [{ type: 'p', text: 'Estes Termos de Uso podem ser atualizados periodicamente para refletir alterações no site, no atendimento, nos serviços oferecidos, em práticas internas ou em exigências legais.' }, { type: 'p', text: 'A versão publicada nesta página é a referência vigente para navegação e uso do site.' }] },
      '17': { title: 'Contato', summary: 'Em caso de dúvidas sobre estes Termos, entre em contato pelos canais oficiais.', blocks: [{ type: 'p', text: 'Para dúvidas sobre estes Termos de Uso, orçamentos, agenda ou informações do site, utilize os canais oficiais de contato do ZERRAINK Estúdio.' }, { type: 'contact' }] }
    }
  },
  en: {
    sections: {
      '01': { title: 'Acceptance', summary: 'By accessing and using the website or studio services, you expressly agree to these Terms of Use.', blocks: [{ type: 'p', text: 'By accessing this website, sending a quote request, or contacting ZERRAINK Studio, you confirm that you are aware of the conditions of use described here.' }, { type: 'p', text: 'These Terms guide website navigation, information submission, the quote process, booking, and care related to tattoo services performed by Lucas Zerra.' }] },
      '02': { title: 'Website purpose', summary: 'This website presents institutional information, tattoo styles, portfolio, guidance, and official contact channels.', blocks: [{ type: 'p', text: 'The website has an informational and institutional purpose. It presents the studio, tattoo styles, gallery, testimonials, frequently asked questions, policies, and official contact channels.' }, { type: 'p', text: 'The information published here does not replace an individual project evaluation, which depends on references, body area, size, technique, skin condition, and schedule availability.' }] },
      '03': { title: 'Quotes', summary: 'Quotes are personalized and depend on the analysis of each project.', blocks: [{ type: 'p', text: 'Quotes are prepared individually. To evaluate a tattoo correctly, the studio may request information such as idea, references, approximate size, body placement, desired style, and visual complexity.' }, { type: 'p', text: 'The price may vary according to detail level, estimated time, technique, anatomical area, original creation needs, cover-up, restoration, or composition adjustments.' }] },
      '04': { title: 'Booking', summary: 'A booking is confirmed according to availability, project approval, and any required deposit.', blocks: [{ type: 'p', text: 'The appointment is confirmed only after project alignment, schedule availability, and, when applicable, payment of a deposit.' }, { type: 'p', text: 'Times may be adjusted due to force majeure, delays, unsuitable skin conditions, technical needs, or procedural safety.' }] },
      '05': { title: 'Deposit, payments, and cancellations', summary: 'Deposit, payment, rescheduling, and cancellation conditions must be confirmed directly with the studio.', blocks: [{ type: 'p', text: 'The deposit reserves the date and time and also covers part of the time dedicated to project development and preparation.' }, { type: 'p', text: 'Rescheduling, delays, no-shows, cancellations, and payment methods must follow the conditions communicated by the studio during direct service.' }] },
      '06': { title: 'References and artistic creation', summary: 'References sent by the client guide the direction, but do not require literal copying.', blocks: [{ type: 'p', text: 'References help clarify intention, style, theme, and visual language, but they do not guarantee literal reproduction of third-party images.' }, { type: 'p', text: 'Artistic development follows technical criteria, authorial identity, anatomy, visual readability, skin viability, and image and creation rights.' }] },
      '07': { title: 'Project changes', summary: 'Adjustments can be made within technical and scheduling limits.', blocks: [{ type: 'p', text: 'Changes may be discussed during the creation stage or at the agreed time for project presentation, respecting available time and technical viability.' }, { type: 'p', text: 'Major changes to theme, style, size, or placement may require a new evaluation of timeline, price, and availability.' }] },
      '08': { title: 'Session requirements', summary: 'The client should arrive in good physical condition and follow preparation guidance.', blocks: [{ type: 'p', text: 'For a good session, the client should be fed, hydrated, rested, and avoid alcoholic beverages in the 24 hours before the appointment.' }, { type: 'p', text: 'It is also recommended to avoid intense sun exposure, wounds, or irritation in the area to be tattooed. If the skin is not in good condition, the session may be rescheduled for safety.' }] },
      '09': { title: 'Aftercare', summary: 'The final result also depends on care after the session.', blocks: [{ type: 'p', text: 'The client will receive aftercare instructions and should follow them correctly to support healing and preserve lines, colors, shadows, and final quality.' }, { type: 'p', text: 'Sun exposure, friction, pool, sea, unsuitable products, or removing scabs can compromise the result.' }] },
      '10': { title: 'Touch-ups', summary: 'Touch-ups are evaluated case by case according to healing and aftercare.', blocks: [{ type: 'p', text: 'The need for a touch-up is evaluated after complete healing. Not every healing variation is a technical fault, because each skin responds differently.' }, { type: 'p', text: 'Touch-ups, deadlines, and possible costs will be communicated by the studio according to the case, aftercare, and project type.' }] },
      '11': { title: 'Cover-up and restoration', summary: 'Coverage or restoration projects require specific technical analysis.', blocks: [{ type: 'p', text: 'Cover-up and restoration require careful evaluation of the existing tattoo, ink intensity, age of the work, size, position, skin tone, and expected result.' }, { type: 'p', text: 'Some ideas may require adaptation, expansion, extra sessions, or previous lightening to achieve a safer and more coherent result.' }] },
      '12': { title: 'Intellectual property', summary: 'Creations, drawings, compositions, and authorial materials belong to their respective authors.', blocks: [{ type: 'p', text: 'Projects, drawings, compositions, texts, photographs, visual identity, and other authorial materials from the website and studio are protected by copyright.' }, { type: 'p', text: 'Copying, reproducing, selling, distributing, or using these materials without prior and express authorization is prohibited.' }] },
      '13': { title: 'Images and promotion', summary: 'Photos and videos may be used for portfolio and promotion when authorized.', blocks: [{ type: 'p', text: 'Images of tattoos, behind the scenes, or process records may be used in portfolio, social media, and promotional materials, respecting authorizations and limits agreed with the client.' }, { type: 'p', text: 'If the client has exposure restrictions, this must be communicated before the session or at the time of recording.' }] },
      '14': { title: 'Limitation of liability', summary: 'The studio is committed to technique and safety, but the result also depends on individual factors and aftercare.', blocks: [{ type: 'p', text: 'The studio works with technique, hygiene, proper materials, and professional guidance, but individual skin factors, healing, health, sun exposure, and aftercare directly influence the result.' }, { type: 'p', text: 'The client is responsible for informing relevant health conditions, allergies, medication use, and for following the guidance received.' }] },
      '15': { title: 'External links', summary: 'The website may contain links to third-party platforms and social networks.', blocks: [{ type: 'p', text: 'The website may direct users to social media, WhatsApp, maps, hosting platforms, analytics tools, and other external services.' }, { type: 'p', text: 'ZERRAINK Studio is not responsible for policies, content, operation, or privacy practices of third-party websites and platforms.' }] },
      '16': { title: 'Terms updates', summary: 'These Terms may be updated to reflect changes in the website, service, or legislation.', blocks: [{ type: 'p', text: 'These Terms of Use may be updated periodically to reflect changes in the website, service, offered services, internal practices, or legal requirements.' }, { type: 'p', text: 'The version published on this page is the current reference for browsing and using the website.' }] },
      '17': { title: 'Contact', summary: 'If you have questions about these Terms, contact the studio through official channels.', blocks: [{ type: 'p', text: 'For questions about these Terms of Use, quotes, schedule, or website information, use ZERRAINK Studio’s official contact channels.' }, { type: 'contact' }] }
    }
  },
  es: {
    sections: {
      '01': { title: 'Aceptación', summary: 'Al acceder y utilizar el sitio o los servicios del estudio, aceptas expresamente estos Términos de Uso.', blocks: [{ type: 'p', text: 'Al acceder a este sitio, enviar una solicitud de presupuesto o contactar a ZERRAINK Estudio, declaras estar al tanto de las condiciones de uso aquí descritas.' }, { type: 'p', text: 'Estos Términos orientan la navegación en el sitio, el envío de información, el proceso de presupuesto, la reserva y los cuidados relacionados con los servicios de tatuaje realizados por Lucas Zerra.' }] },
      '02': { title: 'Finalidad del sitio', summary: 'Este sitio presenta información institucional, estilos de tatuaje, portafolio, orientaciones y canales oficiales de contacto.', blocks: [{ type: 'p', text: 'El sitio tiene una finalidad informativa e institucional. Presenta el estudio, estilos de tatuaje, galería de trabajos, testimonios, preguntas frecuentes, políticas y canales oficiales de contacto.' }, { type: 'p', text: 'La información publicada no reemplaza una evaluación individual del proyecto, que depende de referencias, zona del cuerpo, tamaño, técnica, estado de la piel y disponibilidad de agenda.' }] },
      '03': { title: 'Presupuestos', summary: 'Los presupuestos son personalizados y dependen del análisis de cada proyecto.', blocks: [{ type: 'p', text: 'Los presupuestos se elaboran de forma personalizada. Para evaluar correctamente un tatuaje, se pueden solicitar datos como idea, referencias, tamaño aproximado, ubicación en el cuerpo, estilo deseado y complejidad visual.' }, { type: 'p', text: 'El valor puede variar según el nivel de detalle, tiempo estimado, técnica aplicada, zona anatómica, necesidad de creación autoral, cover-up, restauración o ajustes de composición.' }] },
      '04': { title: 'Reserva', summary: 'La confirmación del horario depende de disponibilidad, aprobación del proyecto y eventual pago de seña.', blocks: [{ type: 'p', text: 'La reserva se confirma solamente después de alinear el proyecto, verificar disponibilidad de agenda y, cuando corresponda, realizar el pago de una seña.' }, { type: 'p', text: 'Los horarios pueden ajustarse por fuerza mayor, retrasos, condiciones inadecuadas de la piel, necesidad técnica o seguridad del procedimiento.' }] },
      '05': { title: 'Seña, pagos y cancelaciones', summary: 'Las condiciones de seña, pago, reprogramación y cancelación deben acordarse directamente con el estudio.', blocks: [{ type: 'p', text: 'La seña reserva la fecha y el horario y también cubre parte del tiempo dedicado al desarrollo y preparación del proyecto.' }, { type: 'p', text: 'Reprogramaciones, retrasos, ausencias, cancelaciones y formas de pago deben seguir las condiciones informadas por el estudio en la atención directa.' }] },
      '06': { title: 'Referencias y creación artística', summary: 'Las referencias enviadas por el cliente sirven como dirección, no como copia obligatoria.', blocks: [{ type: 'p', text: 'Las referencias ayudan a entender intención, estilo, tema y lenguaje visual, pero no garantizan la reproducción literal de imágenes de terceros.' }, { type: 'p', text: 'El desarrollo artístico respeta criterios técnicos, identidad autoral, anatomía, lectura visual, viabilidad en la piel y derechos de imagen y creación.' }] },
      '07': { title: 'Cambios en el proyecto', summary: 'Los ajustes pueden realizarse dentro de límites técnicos y de plazo.', blocks: [{ type: 'p', text: 'Los cambios pueden conversarse durante la etapa de creación o en el momento acordado para presentar el proyecto, respetando el tiempo disponible y la viabilidad técnica.' }, { type: 'p', text: 'Cambios amplios de tema, estilo, tamaño o ubicación pueden exigir una nueva evaluación de plazo, valor y disponibilidad.' }] },
      '08': { title: 'Condiciones para la sesión', summary: 'El cliente debe llegar en buenas condiciones físicas y seguir las orientaciones de preparación.', blocks: [{ type: 'p', text: 'Para una buena sesión, el cliente debe estar alimentado, hidratado, descansado y evitar bebidas alcohólicas durante las 24 horas previas.' }, { type: 'p', text: 'También se recomienda evitar exposición solar intensa, heridas o irritaciones en la zona que será tatuada. Si la piel no está en buenas condiciones, la sesión podrá reprogramarse por seguridad.' }] },
      '09': { title: 'Cuidados posteriores', summary: 'El resultado también depende de los cuidados realizados después de la sesión.', blocks: [{ type: 'p', text: 'El cliente recibirá orientaciones de cuidados posteriores y debe seguirlas correctamente para favorecer la cicatrización y preservar trazos, colores, sombras y calidad final.' }, { type: 'p', text: 'Exposición solar, fricción, piscina, mar, productos inadecuados o retirar costras puede comprometer el resultado.' }] },
      '10': { title: 'Retoques', summary: 'Los retoques se evalúan caso por caso según la cicatrización y los cuidados realizados.', blocks: [{ type: 'p', text: 'La necesidad de retoque se evalúa después de la cicatrización completa. No toda variación en la cicatrización representa una falla técnica, porque cada piel responde de manera diferente.' }, { type: 'p', text: 'Retoques, plazos y posibles costos serán informados por el estudio según el análisis del caso, los cuidados realizados y el tipo de proyecto.' }] },
      '11': { title: 'Cover-up y restauración', summary: 'Los proyectos de cobertura o restauración dependen de un análisis técnico específico.', blocks: [{ type: 'p', text: 'Cover-up y restauración exigen una evaluación cuidadosa del tatuaje existente, intensidad de la tinta, antigüedad del trabajo, tamaño, posición, tono de piel y expectativa de resultado.' }, { type: 'p', text: 'Algunas ideas pueden necesitar adaptación, ampliación, sesiones extra o aclaramiento previo para alcanzar un resultado más seguro y coherente.' }] },
      '12': { title: 'Propiedad intelectual', summary: 'Creaciones, diseños, composiciones y materiales autorales pertenecen a sus respectivos autores.', blocks: [{ type: 'p', text: 'Proyectos, diseños, composiciones, textos, fotografías, identidad visual y demás materiales autorales del sitio y del estudio están protegidos por derechos de autor.' }, { type: 'p', text: 'Está prohibido copiar, reproducir, vender, distribuir o utilizar estos materiales sin autorización previa y expresa.' }] },
      '13': { title: 'Imágenes y divulgación', summary: 'Fotos y videos pueden utilizarse para portafolio y divulgación cuando haya autorización.', blocks: [{ type: 'p', text: 'Imágenes de tatuajes, bastidores o registros del proceso pueden utilizarse en portafolio, redes sociales y materiales de divulgación, respetando autorizaciones y límites acordados con el cliente.' }, { type: 'p', text: 'Si el cliente tiene restricciones de exposición, debe informarlo antes de la sesión o en el momento del registro.' }] },
      '14': { title: 'Limitación de responsabilidad', summary: 'El estudio se compromete con técnica y seguridad, pero el resultado también depende de factores individuales y cuidados posteriores.', blocks: [{ type: 'p', text: 'El estudio trabaja con técnica, higiene, materiales adecuados y orientación profesional, pero factores individuales de piel, cicatrización, salud, exposición solar y cuidados posteriores influyen directamente en el resultado.' }, { type: 'p', text: 'El cliente es responsable de informar condiciones de salud relevantes, alergias, uso de medicamentos y de seguir las orientaciones recibidas.' }] },
      '15': { title: 'Links externos', summary: 'El sitio puede contener enlaces a plataformas y redes sociales de terceros.', blocks: [{ type: 'p', text: 'El sitio puede dirigir a redes sociales, WhatsApp, mapas, plataformas de hospedaje, herramientas de análisis y otros servicios externos.' }, { type: 'p', text: 'ZERRAINK Estudio no se responsabiliza por políticas, contenidos, funcionamiento o prácticas de privacidad de sitios y plataformas de terceros.' }] },
      '16': { title: 'Actualizaciones de los Términos', summary: 'Estos Términos pueden actualizarse para reflejar cambios en el sitio, atención o legislación.', blocks: [{ type: 'p', text: 'Estos Términos de Uso pueden actualizarse periódicamente para reflejar cambios en el sitio, atención, servicios ofrecidos, prácticas internas o exigencias legales.' }, { type: 'p', text: 'La versión publicada en esta página es la referencia vigente para la navegación y el uso del sitio.' }] },
      '17': { title: 'Contacto', summary: 'En caso de dudas sobre estos Términos, contacta por los canales oficiales.', blocks: [{ type: 'p', text: 'Para dudas sobre estos Términos de Uso, presupuestos, agenda o información del sitio, utiliza los canales oficiales de contacto de ZERRAINK Estudio.' }, { type: 'contact' }] }
    }
  }
};

export const privacyPolicyContent: Record<SupportedLanguage, { sections: Record<string, LegalSectionContent> }> = {
  pt: {
    sections: {
      '01': { title: 'Introdução', blocks: [{ type: 'p', text: 'A sua privacidade é importante para o ZERRAINK Estúdio.' }, { type: 'p', text: 'Esta Política de Privacidade explica, de forma clara, como seus dados podem ser coletados, utilizados, armazenados e protegidos quando você navega pelo site, solicita orçamento, envia referências, entra em contato ou agenda uma tatuagem.' }, { type: 'p', text: 'O tratamento de dados pessoais é realizado com base na Lei Geral de Proteção de Dados Pessoais (LGPD), Lei nº 13.709/2018, e segue princípios como transparência, necessidade, finalidade, segurança e respeito ao titular dos dados.' }] },
      '02': { title: 'Quem controla os dados', blocks: [{ type: 'p', text: 'Para fins desta Política, o ZERRAINK Estúdio é responsável pelas decisões relacionadas ao uso dos dados enviados por meio deste site, formulários, WhatsApp, e-mail ou demais canais oficiais de contato.' }, { type: 'p', text: 'Esses dados são utilizados apenas para atendimento, orçamento, agendamento, desenvolvimento artístico, organização interna e comunicação relacionada aos serviços do estúdio.' }] },
      '03': { title: 'Dados que podem ser coletados', blocks: [{ type: 'p', text: 'Podem ser coletados dados fornecidos diretamente por você, de acordo com o tipo de contato realizado.' }, { type: 'list', items: ['Nome e informações de contato', 'Telefone, WhatsApp ou e-mail', 'Cidade ou região de atendimento', 'Ideia do projeto, referências e imagens enviadas', 'Local do corpo, tamanho aproximado e estilo desejado', 'Informações necessárias para orçamento e agendamento'] }, { type: 'p', text: 'Também podem ser coletados dados técnicos de navegação, como tipo de dispositivo, navegador, páginas acessadas e interações básicas com o site.' }] },
      '04': { title: 'Como os dados são utilizados', blocks: [{ type: 'p', text: 'Os dados são utilizados para responder contatos, elaborar orçamentos, organizar agenda, desenvolver projetos, registrar preferências e melhorar a experiência de navegação.' }, { type: 'p', text: 'Também podem ser usados para comunicação sobre atendimento, confirmação de informações, envio de orientações e melhoria da apresentação do portfólio e dos conteúdos do site.' }] },
      '05': { title: 'Base legal', blocks: [{ type: 'p', text: 'O tratamento dos dados pode ocorrer com base no consentimento, execução de procedimentos preliminares relacionados a orçamento ou agendamento, legítimo interesse do estúdio e cumprimento de obrigações legais quando aplicável.' }, { type: 'p', text: 'Você pode solicitar esclarecimentos sobre a base utilizada para determinada operação de tratamento por meio dos canais oficiais de contato.' }] },
      '06': { title: 'Compartilhamento de dados', blocks: [{ type: 'p', text: 'Os dados não são vendidos. O compartilhamento pode ocorrer apenas quando necessário para atendimento, operação técnica do site, ferramentas de comunicação, hospedagem, segurança, análise de navegação ou cumprimento de obrigação legal.' }, { type: 'p', text: 'Quando serviços de terceiros são utilizados, busca-se limitar o compartilhamento ao necessário para a finalidade informada.' }] },
      '07': { title: 'Cookies e tecnologias semelhantes', blocks: [{ type: 'p', text: 'Cookies e tecnologias semelhantes podem ser utilizados para lembrar preferências, melhorar carregamento, entender navegação e aprimorar a experiência no site.' }, { type: 'p', text: 'Você pode gerenciar ou bloquear cookies diretamente nas configurações do seu navegador. Algumas funcionalidades podem sofrer limitações caso cookies sejam recusados.' }] },
      '08': { title: 'Direitos de privacidade', blocks: [{ type: 'p', text: 'Você pode solicitar confirmação de tratamento, acesso, correção, atualização, anonimização, bloqueio, eliminação, portabilidade, informação sobre compartilhamento e revogação de consentimento, quando aplicável.' }, { type: 'p', text: 'As solicitações serão analisadas conforme a legislação vigente e podem exigir confirmação de identidade para proteger seus dados.' }] },
      '09': { title: 'Segurança dos dados', blocks: [{ type: 'p', text: 'São adotadas medidas razoáveis para proteger dados contra acesso não autorizado, perda, alteração, divulgação indevida ou uso incompatível com as finalidades informadas.' }, { type: 'p', text: 'Mesmo assim, nenhum sistema é totalmente isento de riscos. Por isso, recomenda-se evitar o envio de informações desnecessárias ou sensíveis pelos canais de contato.' }] },
      '10': { title: 'Retenção dos dados', blocks: [{ type: 'p', text: 'Os dados são mantidos pelo tempo necessário para atendimento, organização interna, histórico de comunicação, obrigações legais, defesa de direitos ou cumprimento das finalidades informadas.' }, { type: 'p', text: 'Quando deixarem de ser necessários, os dados poderão ser eliminados, anonimizados ou mantidos apenas quando houver base legal adequada.' }] },
      '11': { title: 'Imagens, referências e projetos', blocks: [{ type: 'p', text: 'Referências, imagens, fotos de tatuagens e registros de processo podem ser usados para orçamento, desenvolvimento artístico, organização de projeto e, quando autorizado, divulgação em portfólio e redes sociais.' }, { type: 'p', text: 'Se houver restrição de exposição, informe o estúdio antes da sessão ou antes da publicação de qualquer registro.' }] },
      '12': { title: 'Ferramentas de terceiros', blocks: [{ type: 'p', text: 'O site pode utilizar serviços de terceiros, como hospedagem, formulários, WhatsApp, redes sociais, mapas, análise de navegação e recursos de segurança.' }, { type: 'p', text: 'Esses serviços possuem políticas próprias de privacidade e podem tratar dados conforme suas regras e configurações.' }] },
      '13': { title: 'Atualizações e contato', blocks: [{ type: 'p', text: 'Esta Política pode ser atualizada para refletir mudanças no site, nos serviços, nas ferramentas utilizadas ou na legislação aplicável.' }, { type: 'p', text: 'Em caso de dúvidas ou solicitações sobre privacidade e dados pessoais, entre em contato pelos canais oficiais.' }, { type: 'contact' }] }
    }
  },
  en: {
    sections: {
      '01': { title: 'Introduction', blocks: [{ type: 'p', text: 'Your privacy is important to ZERRAINK Studio.' }, { type: 'p', text: 'This Privacy Policy clearly explains how your data may be collected, used, stored, and protected when you browse the website, request a quote, send references, contact the studio, or book a tattoo.' }, { type: 'p', text: 'Personal data is processed in accordance with Brazil’s General Data Protection Law (LGPD), Law No. 13.709/2018, following principles such as transparency, necessity, purpose limitation, security, and respect for the data subject.' }] },
      '02': { title: 'Who controls the data', blocks: [{ type: 'p', text: 'For purposes of this Policy, ZERRAINK Studio is responsible for decisions related to the use of data sent through this website, forms, WhatsApp, email, or other official contact channels.' }, { type: 'p', text: 'This data is used only for service, quotes, scheduling, artistic development, internal organization, and communication related to the studio’s services.' }] },
      '03': { title: 'Data that may be collected', blocks: [{ type: 'p', text: 'Data provided directly by you may be collected according to the type of contact made.' }, { type: 'list', items: ['Name and contact information', 'Phone number, WhatsApp, or email', 'City or service region', 'Project idea, references, and images sent', 'Body placement, approximate size, and desired style', 'Information needed for quote and booking'] }, { type: 'p', text: 'Technical browsing data may also be collected, such as device type, browser, accessed pages, and basic website interactions.' }] },
      '04': { title: 'How data is used', blocks: [{ type: 'p', text: 'Data is used to respond to contacts, prepare quotes, organize the schedule, develop projects, register preferences, and improve the browsing experience.' }, { type: 'p', text: 'It may also be used for service communication, information confirmation, sending guidance, and improving the portfolio and website content presentation.' }] },
      '05': { title: 'Legal basis', blocks: [{ type: 'p', text: 'Data processing may be based on consent, preliminary procedures related to quotes or bookings, the studio’s legitimate interest, and compliance with legal obligations when applicable.' }, { type: 'p', text: 'You may request clarification about the basis used for a specific processing operation through the official contact channels.' }] },
      '06': { title: 'Data sharing', blocks: [{ type: 'p', text: 'Data is not sold. Sharing may occur only when necessary for service, website technical operation, communication tools, hosting, security, navigation analysis, or compliance with legal obligations.' }, { type: 'p', text: 'When third-party services are used, sharing is limited as much as possible to what is necessary for the stated purpose.' }] },
      '07': { title: 'Cookies and similar technologies', blocks: [{ type: 'p', text: 'Cookies and similar technologies may be used to remember preferences, improve loading, understand browsing, and enhance the website experience.' }, { type: 'p', text: 'You can manage or block cookies directly in your browser settings. Some features may be limited if cookies are declined.' }] },
      '08': { title: 'Privacy rights', blocks: [{ type: 'p', text: 'You may request confirmation of processing, access, correction, updating, anonymization, blocking, deletion, portability, information about sharing, and withdrawal of consent when applicable.' }, { type: 'p', text: 'Requests will be reviewed according to applicable law and may require identity confirmation to protect your data.' }] },
      '09': { title: 'Data security', blocks: [{ type: 'p', text: 'Reasonable measures are adopted to protect data against unauthorized access, loss, alteration, improper disclosure, or use incompatible with the stated purposes.' }, { type: 'p', text: 'Even so, no system is completely risk-free. For this reason, avoid sending unnecessary or sensitive information through contact channels.' }] },
      '10': { title: 'Data retention', blocks: [{ type: 'p', text: 'Data is kept for the time necessary for service, internal organization, communication history, legal obligations, defense of rights, or fulfillment of the stated purposes.' }, { type: 'p', text: 'When data is no longer necessary, it may be deleted, anonymized, or retained only when there is an appropriate legal basis.' }] },
      '11': { title: 'Images, references, and projects', blocks: [{ type: 'p', text: 'References, images, tattoo photos, and process records may be used for quotes, artistic development, project organization, and, when authorized, promotion in portfolio and social media.' }, { type: 'p', text: 'If there are exposure restrictions, inform the studio before the session or before any record is published.' }] },
      '12': { title: 'Third-party tools', blocks: [{ type: 'p', text: 'The website may use third-party services such as hosting, forms, WhatsApp, social media, maps, navigation analytics, and security resources.' }, { type: 'p', text: 'These services have their own privacy policies and may process data according to their own rules and settings.' }] },
      '13': { title: 'Updates and contact', blocks: [{ type: 'p', text: 'This Policy may be updated to reflect changes to the website, services, tools used, or applicable legislation.' }, { type: 'p', text: 'For questions or requests about privacy and personal data, contact the studio through the official channels.' }, { type: 'contact' }] }
    }
  },
  es: {
    sections: {
      '01': { title: 'Introducción', blocks: [{ type: 'p', text: 'Tu privacidad es importante para ZERRAINK Estudio.' }, { type: 'p', text: 'Esta Política de Privacidad explica de forma clara cómo tus datos pueden ser recopilados, utilizados, almacenados y protegidos cuando navegas por el sitio, solicitas un presupuesto, envías referencias, entras en contacto o agendas un tatuaje.' }, { type: 'p', text: 'El tratamiento de datos personales se realiza con base en la Ley General de Protección de Datos Personales de Brasil (LGPD), Ley nº 13.709/2018, y sigue principios como transparencia, necesidad, finalidad, seguridad y respeto al titular de los datos.' }] },
      '02': { title: 'Quién controla los datos', blocks: [{ type: 'p', text: 'Para efectos de esta Política, ZERRAINK Estudio es responsable de las decisiones relacionadas con el uso de los datos enviados por medio de este sitio, formularios, WhatsApp, e-mail u otros canales oficiales de contacto.' }, { type: 'p', text: 'Estos datos se utilizan solamente para atención, presupuesto, agenda, desarrollo artístico, organización interna y comunicación relacionada con los servicios del estudio.' }] },
      '03': { title: 'Datos que pueden recopilarse', blocks: [{ type: 'p', text: 'Pueden recopilarse datos proporcionados directamente por ti, según el tipo de contacto realizado.' }, { type: 'list', items: ['Nombre e información de contacto', 'Teléfono, WhatsApp o e-mail', 'Ciudad o región de atención', 'Idea del proyecto, referencias e imágenes enviadas', 'Zona del cuerpo, tamaño aproximado y estilo deseado', 'Información necesaria para presupuesto y reserva'] }, { type: 'p', text: 'También pueden recopilarse datos técnicos de navegación, como tipo de dispositivo, navegador, páginas visitadas e interacciones básicas con el sitio.' }] },
      '04': { title: 'Cómo se utilizan los datos', blocks: [{ type: 'p', text: 'Los datos se utilizan para responder contactos, elaborar presupuestos, organizar la agenda, desarrollar proyectos, registrar preferencias y mejorar la experiencia de navegación.' }, { type: 'p', text: 'También pueden usarse para comunicación de atención, confirmación de información, envío de orientaciones y mejora de la presentación del portafolio y de los contenidos del sitio.' }] },
      '05': { title: 'Base legal', blocks: [{ type: 'p', text: 'El tratamiento de datos puede basarse en consentimiento, procedimientos preliminares relacionados con presupuesto o reserva, interés legítimo del estudio y cumplimiento de obligaciones legales cuando corresponda.' }, { type: 'p', text: 'Puedes solicitar aclaraciones sobre la base utilizada para una operación de tratamiento específica por medio de los canales oficiales de contacto.' }] },
      '06': { title: 'Compartición de datos', blocks: [{ type: 'p', text: 'Los datos no se venden. La compartición puede ocurrir solamente cuando sea necesaria para atención, operación técnica del sitio, herramientas de comunicación, hospedaje, seguridad, análisis de navegación o cumplimiento de obligación legal.' }, { type: 'p', text: 'Cuando se utilizan servicios de terceros, se busca limitar la compartición a lo necesario para la finalidad informada.' }] },
      '07': { title: 'Cookies y tecnologías similares', blocks: [{ type: 'p', text: 'Cookies y tecnologías similares pueden utilizarse para recordar preferencias, mejorar la carga, entender la navegación y perfeccionar la experiencia en el sitio.' }, { type: 'p', text: 'Puedes gestionar o bloquear cookies directamente en la configuración de tu navegador. Algunas funcionalidades pueden limitarse si se rechazan las cookies.' }] },
      '08': { title: 'Derechos de privacidad', blocks: [{ type: 'p', text: 'Puedes solicitar confirmación de tratamiento, acceso, corrección, actualización, anonimización, bloqueo, eliminación, portabilidad, información sobre compartición y revocación del consentimiento cuando corresponda.' }, { type: 'p', text: 'Las solicitudes serán analizadas conforme a la legislación vigente y pueden requerir confirmación de identidad para proteger tus datos.' }] },
      '09': { title: 'Seguridad de los datos', blocks: [{ type: 'p', text: 'Se adoptan medidas razonables para proteger datos contra acceso no autorizado, pérdida, alteración, divulgación indebida o uso incompatible con las finalidades informadas.' }, { type: 'p', text: 'Aun así, ningún sistema está completamente libre de riesgos. Por eso, se recomienda evitar el envío de información innecesaria o sensible por los canales de contacto.' }] },
      '10': { title: 'Retención de los datos', blocks: [{ type: 'p', text: 'Los datos se mantienen por el tiempo necesario para atención, organización interna, historial de comunicación, obligaciones legales, defensa de derechos o cumplimiento de las finalidades informadas.' }, { type: 'p', text: 'Cuando dejen de ser necesarios, los datos podrán eliminarse, anonimizarse o mantenerse solamente cuando exista una base legal adecuada.' }] },
      '11': { title: 'Imágenes, referencias y proyectos', blocks: [{ type: 'p', text: 'Referencias, imágenes, fotos de tatuajes y registros del proceso pueden usarse para presupuesto, desarrollo artístico, organización de proyecto y, cuando exista autorización, divulgación en portafolio y redes sociales.' }, { type: 'p', text: 'Si existe restricción de exposición, informa al estudio antes de la sesión o antes de la publicación de cualquier registro.' }] },
      '12': { title: 'Herramientas de terceros', blocks: [{ type: 'p', text: 'El sitio puede utilizar servicios de terceros, como hospedaje, formularios, WhatsApp, redes sociales, mapas, análisis de navegación y recursos de seguridad.' }, { type: 'p', text: 'Estos servicios tienen políticas propias de privacidad y pueden tratar datos según sus reglas y configuraciones.' }] },
      '13': { title: 'Actualizaciones y contacto', blocks: [{ type: 'p', text: 'Esta Política puede actualizarse para reflejar cambios en el sitio, en los servicios, en las herramientas utilizadas o en la legislación aplicable.' }, { type: 'p', text: 'En caso de dudas o solicitudes sobre privacidad y datos personales, entra en contacto por los canales oficiales.' }, { type: 'contact' }] }
    }
  }
};
