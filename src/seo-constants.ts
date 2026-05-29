export const SITE_URL = "https://zerraink.com";

export const BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "ZERRAINK Studio",
  "description": "Estúdio de tatuagem em Ribeirão Preto especializado em projetos autorais, realismo, fine line, cover-up e tatuagens personalizadas.",
  "url": SITE_URL,
  "image": `${SITE_URL}/logos/zerraink-menu-original-style.png`,
  "telephone": "+55 16 98216-0902",
  "email": "zerratattoo1@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ribeirão Preto",
    "addressRegion": "SP",
    "addressCountry": "BR"
  },
  "areaServed": {
    "@type": "City",
    "name": "Ribeirão Preto"
  },
  "priceRange": "$$",
  "sameAs": [
    "https://www.instagram.com/zerraink/"
  ]
};

export const PAGE_METADATA = {
  home: {
    title: "ZERRAINK STUDIO",
    description: "Estúdio de tatuagem em Ribeirão Preto especializado em projetos autorais, fine line, realismo, cover-up e tatuagens personalizadas."
  },
  about: {
    title: "Sobre o ZERRAINK Studio | Tatuador em Ribeirão Preto",
    description: "Conheça o ZERRAINK Studio, estúdio de tatuagem em Ribeirão Preto focado em arte autoral, precisão no traço e atendimento exclusivo."
  },
  styles: {
    title: "Estilos de Tatuagem | Fine Line, Realismo e Cover-up em Ribeirão Preto",
    description: "Explore estilos de tatuagem como fine line, realismo preto e branco, colorido geek, cover-up e projetos autorais no ZERRAINK Studio."
  },
  gallery: {
    title: "Galeria de Tatuagens | ZERRAINK Studio",
    description: "Veja trabalhos recentes de tatuagem autoral, realismo, fine line, cover-up e projetos personalizados criados no ZERRAINK Studio."
  },
  contact: {
    title: "Solicitar Orçamento de Tatuagem | ZERRAINK Studio",
    description: "Envie sua ideia e solicite um orçamento para tatuagem autoral em Ribeirão Preto. Atendimento com hora marcada."
  },
  behind: {
    title: "Bastidores | ZERRAINK Studio",
    description: "Conheça o processo criativo e os bastidores do ZERRAINK Studio em Ribeirão Preto."
  }
};
