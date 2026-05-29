import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { BackButton } from '../components/Common';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import { tattooImages } from '../assets/tattooImages';

type GalleryCategoryId = keyof typeof tattooImages;

const categories: Array<{ id: GalleryCategoryId; title: string }> = [
  { id: 'realism', title: 'Realismo' },
  { id: 'fineline', title: 'Fine Line' },
  { id: 'ornamental', title: 'Ornamental' },
  { id: 'colorido', title: 'Colorido' },
  { id: 'coverup', title: 'Cover-Up' },
  { id: 'oldschool', title: 'Old School' }
];

const STYLISH_GALLERY_IMAGES: Record<GalleryCategoryId, {
  tag: string;
  title: string;
  desc: string;
  ctaText: string;
  images: readonly string[];
}> = {
  realism: {
    tag: 'REALISMO PRETO E CINZA',
    title: 'Profundidade Real',
    desc: 'Trabalho focado na reproducao fiel de retratos, esculturas e texturas com profundidade tridimensional extrema.',
    ctaText: 'AGENDAR CONSULTORIA',
    images: tattooImages.realism
  },
  fineline: {
    tag: 'FINE LINE PRECISO',
    title: 'Sutileza em Tracos',
    desc: 'Contornos limpos, caligrafias meticulosas e geometrias delicadas que parecem flutuar sobre a pele.',
    ctaText: 'AGENDAR CONSULTORIA',
    images: tattooImages.fineline
  },
  ornamental: {
    tag: 'ORNAMENTAL DECORATIVO',
    title: 'Simetria Corporal',
    desc: 'Composicoes harmonicas inspiradas em mandalas e arabescos que se fundem perfeitamente a anatomia humana.',
    ctaText: 'AGENDAR CONSULTORIA',
    images: tattooImages.ornamental
  },
  colorido: {
    tag: 'COLORIDO VIBRANTE',
    title: 'Cromia Saturada',
    desc: 'Pigmentos de alta fixacao que dao vida a ilustracoes completas, animes e artes neotradicionais vibrantes.',
    ctaText: 'AGENDAR CONSULTORIA',
    images: tattooImages.colorido
  },
  coverup: {
    tag: 'COVER-UP & RESTAURO',
    title: 'Transformacoes',
    desc: 'Camuflagem inteligente de cicatrizes e cobertura de pigmentacoes com design sofisticado e opacidade perfeita.',
    ctaText: 'AGENDAR CONSULTORIA',
    images: tattooImages.coverup
  },
  oldschool: {
    tag: 'OLD SCHOOL TRADICIONAL',
    title: 'Tracos Bold',
    desc: 'O autentico tradicional ocidental caracterizado por contornos pretos firmes e sombreadores de alto contraste.',
    ctaText: 'AGENDAR CONSULTORIA',
    images: tattooImages.oldschool
  }
};

const styleFullNames: Record<GalleryCategoryId, string> = {
  realism: 'Realismo Preto e Cinza',
  fineline: 'Fine Line',
  ornamental: 'Ornamental',
  colorido: 'Colorido',
  coverup: 'Cover-Up & Restauro',
  oldschool: 'Old School'
};

const PRELOAD_BATCH_SIZE = 8;

const preloadImages = async (images: readonly string[], limit = PRELOAD_BATCH_SIZE) => {
  const batch = images.slice(0, limit);

  await Promise.allSettled(
    batch.map((src) => new Promise<void>((resolve) => {
      const img = new Image();
      img.decoding = 'async';
      img.onload = () => {
        if (typeof img.decode === 'function') {
          img.decode().catch(() => undefined).finally(resolve);
        } else {
          resolve();
        }
      };
      img.onerror = () => resolve();
      img.src = src;
    }))
  );
};

const GallerySkeletonGrid = ({ count = PRELOAD_BATCH_SIZE }: { count?: number }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6" aria-hidden="true">
    {Array.from({ length: count }).map((_, idx) => (
      <div
        key={`gallery-skeleton-${idx}`}
        className={`${idx === 0 ? 'col-span-2 aspect-[2/1]' : 'aspect-square'} rounded-2xl overflow-hidden border border-stone-200/50 bg-stone-100 shadow-xs`}
      >
        <div className="w-full h-full bg-gradient-to-br from-stone-100 via-stone-200 to-stone-100 animate-pulse" />
      </div>
    ))}
  </div>
);

interface GalleryImageTileProps {
  src: string;
  alt: string;
  index: number;
  onOpen: () => void;
}

const GalleryImageTile = React.memo(({ src, alt, index, onOpen }: GalleryImageTileProps) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const isFirst = index === 0;

  useEffect(() => {
    setLoaded(false);
    setError(false);
  }, [src]);

  return (
    <button
      type="button"
      onClick={onOpen}
      className={`${isFirst ? 'col-span-2 aspect-[2/1]' : 'aspect-square'} rounded-2xl overflow-hidden border border-stone-200/50 bg-stone-100 shadow-xs group cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#005F73] focus-visible:ring-offset-4 focus-visible:ring-offset-[#FAF9F6] relative`}
    >
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-stone-200 to-stone-100 animate-pulse" />
      )}

      {error ? (
        <div className="absolute inset-0 flex items-center justify-center bg-stone-100 text-[#005F73] text-[10px] font-bold tracking-[0.22em] uppercase">
          ZERRAINK
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover scale-100 group-hover:scale-104 transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          width={isFirst ? 1200 : 800}
          height={isFirst ? 600 : 800}
          loading={index < 2 ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={index === 0 ? 'high' : 'auto'}
          referrerPolicy="no-referrer"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
        />
      )}
    </button>
  );
});

GalleryImageTile.displayName = 'GalleryImageTile';

const GalleryPage = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<GalleryCategoryId>('realism');
  const [displayedFilter, setDisplayedFilter] = useState<GalleryCategoryId>('realism');
  const [isGridLoading, setIsGridLoading] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const preloadRequestRef = useRef(0);

  const selectedData = STYLISH_GALLERY_IMAGES[filter] || STYLISH_GALLERY_IMAGES.realism;
  const displayedData = STYLISH_GALLERY_IMAGES[displayedFilter] || STYLISH_GALLERY_IMAGES.realism;
  const currentCategory = categories.find((category) => category.id === filter);

  const changeCategory = useCallback((categoryId: GalleryCategoryId) => {
    if (categoryId === filter) return;

    setSelectedIdx(null);
    setFilter(categoryId);
  }, [filter]);

  const warmupCategory = useCallback((categoryId: GalleryCategoryId) => {
    void preloadImages(STYLISH_GALLERY_IMAGES[categoryId].images, PRELOAD_BATCH_SIZE);
  }, []);

  useEffect(() => {
    if (filter === displayedFilter) {
      setIsGridLoading(false);
      return;
    }

    const requestId = preloadRequestRef.current + 1;
    preloadRequestRef.current = requestId;
    setIsGridLoading(true);

    preloadImages(selectedData.images, PRELOAD_BATCH_SIZE).then(() => {
      if (preloadRequestRef.current !== requestId) return;

      setDisplayedFilter(filter);
      setIsGridLoading(false);
    });
  }, [filter, displayedFilter, selectedData.images]);

  useEffect(() => {
    if (selectedIdx === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedIdx(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedIdx((prev) => (prev === null ? null : (prev + 1) % displayedData.images.length));
      } else if (e.key === 'ArrowLeft') {
        setSelectedIdx((prev) => (prev === null ? null : (prev - 1 + displayedData.images.length) % displayedData.images.length));
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedIdx, displayedData.images.length]);

  return (
    <div className="pt-[var(--header-height)] bg-[#FAF9F6] text-zinc-900 min-h-screen">
      <SEO
        title={`${currentCategory ? (t(`gallery.categories.${currentCategory.id}`) || currentCategory.title) : (t('nav.gallery') || 'Galeria')} | ZERRAINK`}
        description={t('gallery.seo.description') || "Explore o meu portfolio de tatuagens exclusivas. Projetos autorais sob medida."}
        canonical="/galeria"
      />

      <section className="internal-page-hero relative bg-[#000000] border-b border-zinc-900 overflow-hidden py-12 sm:py-14 text-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-3xl space-y-4 text-left">
            <span className="text-[#005F73] text-[11px] sm:text-xs tracking-[0.45em] font-extrabold uppercase block font-sans">
              {t('gallery.intro.tag') || 'GALERIA'}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-4xl font-light text-white leading-tight uppercase tracking-tight">
              {t('gallery.intro.title') || 'O resultado aparece na pele'}
            </h1>
            <div className="w-16 h-[1.5px] bg-[#005F73] mt-2"></div>
            <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed pt-1">
              {t('gallery.intro.description') || 'Cada linha, cada sombra e cada cor aplicada com a maxima precisao tecnica. Navegue pelas criacoes do estudio divididas por estilos.'}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF9F6] pt-6 pb-16 md:pt-8 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="w-full pb-6">
            <div className="flex items-center w-full gap-4">
              <div className="shrink-0 flex items-center h-11">
                <BackButton to="/" label={t('common.back') || 'Voltar'} />
              </div>

              <div className="ml-auto flex items-center justify-start md:justify-end gap-3 overflow-x-auto select-none py-1 max-w-full">
                {categories.map((cat) => {
                  const isSelected = filter === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => changeCategory(cat.id)}
                      onMouseEnter={() => warmupCategory(cat.id)}
                      onFocus={() => warmupCategory(cat.id)}
                      className={`h-11 min-h-[44px] w-[158px] shrink-0 inline-flex items-center justify-center rounded-full !font-sans !text-[10px] !sm:text-[11px] !font-extrabold !tracking-[0.2em] !uppercase transition-all duration-300 cursor-pointer whitespace-nowrap mb-0 border ${
                        isSelected
                          ? 'bg-[#005F73] border-[#005F73] hover:bg-[#004d5e] hover:border-[#004d5e] text-white shadow-xs'
                          : 'bg-white hover:bg-zinc-900/5 border-zinc-300 hover:border-zinc-500 text-zinc-900 hover:text-zinc-900'
                      }`}
                    >
                      {t(`gallery.categories.${cat.id}`) || cat.title}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="pt-4">
            {isGridLoading ? (
              <GallerySkeletonGrid count={Math.min(PRELOAD_BATCH_SIZE, selectedData.images.length)} />
            ) : (
              <div key={`grid-${displayedFilter}`} className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {displayedData.images.map((imgUrl, idx) => (
                  <GalleryImageTile
                    key={`${displayedFilter}-${imgUrl}`}
                    src={imgUrl}
                    alt={t('gallery.imageAlt') || 'Foto do portfolio'}
                    index={idx}
                    onOpen={() => setSelectedIdx(idx)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#050505]/98 z-[9999] flex items-center justify-center select-none"
          >
            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-[#005F73] transition-colors cursor-pointer p-3 z-50 bg-black/20 hover:bg-black/40 rounded-full animate-fade-in"
              aria-label={t('gallery.closeImage') || "Fechar imagem"}
            >
              <X size={28} strokeWidth={1.5} />
            </button>

            {displayedData.images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIdx((prev) => (prev === null ? null : (prev - 1 + displayedData.images.length) % displayedData.images.length));
                }}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#005F73] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer p-3 md:p-4 z-50 bg-black/20 hover:bg-black/40 rounded-full"
                aria-label={t('gallery.prevImage') || "Imagem anterior"}
              >
                <ChevronLeft size={36} strokeWidth={1.5} />
              </button>
            )}

            {displayedData.images.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIdx((prev) => (prev === null ? null : (prev + 1) % displayedData.images.length));
                }}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#005F73] hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer p-3 md:p-4 z-50 bg-black/20 hover:bg-black/40 rounded-full"
                aria-label={t('gallery.nextImage') || "Proxima imagem"}
              >
                <ChevronRight size={36} strokeWidth={1.5} />
              </button>
            )}

            <div
              className="relative max-w-[85vw] max-h-[80vh] md:max-w-[70vw] md:max-h-[75vh] flex flex-col items-center justify-center pointer-events-none"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={`${displayedFilter}-${selectedIdx}`}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2 }}
                src={displayedData.images[selectedIdx]}
                alt={`${t('gallery.expandedAlt') || 'Imagem ampliada'} ${selectedIdx + 1}`}
                className="max-w-full max-h-[60vh] md:max-h-[65vh] object-contain rounded-xl border border-white/10 shadow-2xl pointer-events-auto"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                referrerPolicy="no-referrer"
              />

              <div className="mt-6 flex flex-col items-center gap-3.5 text-center pointer-events-auto">
                <h3 className="text-white text-sm sm:text-base font-serif tracking-widest uppercase font-semibold">
                  {t(`techniques.${displayedFilter}.title`) || styleFullNames[displayedFilter]}
                </h3>

                <div className="flex flex-wrap items-center justify-center gap-2 max-w-xs sm:max-w-md pb-1">
                  {displayedData.images.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setSelectedIdx(dotIdx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        dotIdx === selectedIdx ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/60'
                      }`}
                      aria-label={`${t('gallery.goToImage') || "Ir para imagem"} ${dotIdx + 1}`}
                    />
                  ))}
                </div>

                <div className="text-white/45 text-[10px] sm:text-xs tracking-widest font-mono">
                  {selectedIdx + 1} / {displayedData.images.length}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
