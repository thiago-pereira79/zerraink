export interface Testimonial {
  id: number;
  name: string;
  city?: string;
  text: string;
}

export interface Event {
  id: number;
  title: string;
  location: string;
  year: string;
  image: string;
}

export const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1550537687-c91072c4792d?auto=format&fit=crop&q=80&w=1200&sat=-100';

export const EVENTS: Event[] = [
  { id: 1, title: 'Tattoo Week', location: 'São Paulo', year: '2024', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800' },
  { id: 2, title: 'Rio Tattoo Expo', location: 'Rio de Janeiro', year: '2024', image: 'https://images.unsplash.com/photo-1550537687-c91072c4792d?auto=format&fit=crop&q=80&w=800' },
  { id: 3, title: 'Ink Experience', location: 'Curitiba', year: '2023', image: 'https://images.unsplash.com/photo-1597852074816-d933c4d2b988?auto=format&fit=crop&q=80&w=800' },
  { id: 4, title: 'Tattoo Fest', location: 'Brasília', year: '2023', image: 'https://images.unsplash.com/photo-1611501275019-2ea5c237e8c3?auto=format&fit=crop&q=80&w=800' },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "VICTÓRIA", text: "Melhor tatuador, impossível! Eu amei demais minhas primeiras tattoos. É o único em quem confio." },
  { id: 2, name: "BIANCA MENDONCA", text: "Escolhi você pra fazer minha primeiríssima tatuagem! Vibe ótima, paciência e qualidade!" },
  { id: 3, name: "WILLIAM", text: "Um tatuador de excelência. Sério mesmo, a cada arte que faz, dá vontade de fazer mais." },
  { id: 4, name: "DAYANA", text: "O meu preferido! Farei muito mais tatuagens com você. Trabalho impecável! 🥰" },
  { id: 5, name: "JORGE CLAGNAN", text: "Já estou pesquisando a próxima! Baita profissional 👏" },
  { id: 6, name: "DALVA TAVARES", text: "O melhor! Ainda farei muitas tatuagens com certeza 😌" },
  { id: 7, name: "GABRIEL", text: "Minha melhor tattoo é a sua." },
  { id: 8, name: "VINICIUS G. SILVERIO", text: "Seu trampo é incrível!" },
  { id: 9, name: "JULIA", text: "Trabalho impecável ❤️🌸❤️🌸" },
  { id: 10, name: "JOSI", text: "Amo suas tattoos!" },
  { 
    id: 11, 
    name: "THIAGO", 
    text: `Conheço o Lucas e acompanho o trabalho dele desde praticamente o começo, quando ele ainda atuava como body piercer.

Minha primeira tatuagem foi com ele, em 2019. Desde então, já são quase 30 tatuagens, todas feitas por ele. De certa forma, acompanhei de perto toda a sua evolução, seu amadurecimento como artista e a dedicação que ele coloca em cada trabalho.

Sinto orgulho em dizer que, de alguma maneira, faço parte dessa trajetória. E, como sempre costumo dizer a ele, o Lucas é um dos melhores tatuadores de Ribeirão Preto e região.` 
  }
];


export const PROCESS_STEPS = [
  { id: 'step1', title: 'Conversa inicial', desc: 'Você envia sua ideia, referências e intenção direta.', icon: '01' },
  { id: 'step2', title: 'Estudo do projeto', desc: 'O desenho é pensado para conversar com sua pele, corpo e estilo.', icon: '02' },
  { id: 'step3', title: 'Aprovação', desc: 'A proposta é alinhada e ajustada antes de marcarmos a sessão.', icon: '03' },
  { id: 'step4', title: 'Preparação', desc: 'Materiais, bancada e ambiente seguem rigoroso cuidado profissional.', icon: '04' },
  { id: 'step5', title: 'Execução', desc: 'O traço ganha forma com precisão, atenção e cuidado artístico.', icon: '05' },
  { id: 'step6', title: 'Pós-tattoo', desc: 'Você recebe todas as orientações para garantir a cicatrização perfeita.', icon: '06' },
];


export const VIDEOS = [
  {
    id: 'video1',
    title: 'Por trás do traço',
    desc: 'Assista ao processo real de criação.',
    thumbnail: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&q=80&w=800',
    duration: '0:45'
  },
  {
    id: 'video2',
    title: 'ZERRAINK em ação',
    desc: 'Dedicação, técnica e precisão em cada sessão.',
    thumbnail: 'https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&q=80&w=800',
    duration: '1:12'
  }
];


export const WHATSAPP_PHONE = "5516982160902";
export const WHATSAPP_MESSAGE = "Olá, Lucas! Vim pelo seu site e gostaria de falar com você.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const EMAIL_TO = "zerratattoo1@gmail.com";
export const EMAIL_SUBJECT = "Contato pelo site ZerraInk";
export const EMAIL_BODY = "Olá, Lucas.\n\nMeu nome é [nome do cliente] e gostaria de conversar sobre um projeto.";
export const EMAIL_URL = `mailto:${EMAIL_TO}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`;
