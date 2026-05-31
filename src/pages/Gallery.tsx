import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { BackButton } from '../components/Common';
import { X, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
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
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const isFirst = index === 0;
  const isPriorityImage = index < PRELOAD_BATCH_SIZE;

  useEffect(() => {
    setLoaded(false);
    setError(false);
  }, [src]);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    if (image.complete) {
      if (image.naturalWidth > 0) {
        setLoaded(true);
      } else {
        setError(true);
      }
    }
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
          ref={imageRef}
          src={src}
          alt={alt}
          className={`w-full h-full object-cover scale-100 group-hover:scale-104 transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          width={isFirst ? 1200 : 800}
          height={isFirst ? 600 : 800}
          loading={isPriorityImage ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={index === 0 ? 'high' : 'auto'}
          referrerPolicy="no-referrer"
          onLoad={() => setLoaded(true)}
          onError={() => {
            setError(true);
            if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
              console.warn(`[gallery] Falha ao carregar imagem: ${src}`);
            }
          }}
        />
      )}
    </button>
  );
});

GalleryImageTile.displayName = 'GalleryImageTile';

const GalleryPage = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<GalleryCategoryId | null>(null);
  const [displayedFilter, setDisplayedFilter] = useState<GalleryCategoryId | null>(null);
  const [isAlbumSelectorOpen, setIsAlbumSelectorOpen] = useState(false);
  const [isGridLoading, setIsGridLoading] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const preloadRequestRef = useRef(0);
  const preloadedCategoriesRef = useRef<Set<GalleryCategoryId>>(new Set());

  const selectedData = filter ? STYLISH_GALLERY_IMAGES[filter] : null;
  const displayedData = displayedFilter ? STYLISH_GALLERY_IMAGES[displayedFilter] : null;
  const currentCategory = filter ? categories.find((category) => category.id === filter) : undefined;
  const selectedImages = selectedData?.images;
  const displayedImages = displayedData?.images;

  const changeCategory = useCallback((categoryId: GalleryCategoryId) => {
    if (categoryId === filter) return;

    setSelectedIdx(null);
    setFilter(categoryId);

    if (preloadedCategoriesRef.current.has(categoryId)) {
      setDisplayedFilter(categoryId);
      setIsGridLoading(false);
      return;
    }

    setIsGridLoading(true);
  }, [filter]);

  const toggleAlbumSelector = useCallback(() => {
    setIsAlbumSelectorOpen((wasOpen) => {
      const nextOpen = !wasOpen;

      if (!nextOpen) {
        preloadRequestRef.current += 1;
        setSelectedIdx(null);
        setFilter(null);
        setDisplayedFilter(null);
        setIsGridLoading(false);
      }

      return nextOpen;
    });
  }, []);

  const warmupCategory = useCallback((categoryId: GalleryCategoryId) => {
    if (preloadedCategoriesRef.current.has(categoryId)) return;

    void preloadImages(STYLISH_GALLERY_IMAGES[categoryId].images, PRELOAD_BATCH_SIZE).then(() => {
      preloadedCategoriesRef.current.add(categoryId);
    });
  }, []);

  useEffect(() => {
    if (!filter || !selectedImages) {
      setIsGridLoading(false);
      return;
    }

    if (filter === displayedFilter) {
      setIsGridLoading(false);
      return;
    }

    const requestId = preloadRequestRef.current + 1;
    preloadRequestRef.current = requestId;
    setIsGridLoading(true);

    preloadImages(selectedImages, PRELOAD_BATCH_SIZE).then(() => {
      if (preloadRequestRef.current !== requestId) return;

      preloadedCategoriesRef.current.add(filter);
      setDisplayedFilter(filter);
      setIsGridLoading(false);
    });
  }, [filter, displayedFilter, selectedImages]);

  useEffect(() => {
    if (!displayedFilter || !displayedImages) return;
    if (preloadedCategoriesRef.current.has(displayedFilter)) return;

    void preloadImages(displayedImages, PRELOAD_BATCH_SIZE).then(() => {
      preloadedCategoriesRef.current.add(displayedFilter);
    });
  }, [displayedFilter, displayedImages]);

  useEffect(() => {
    if (!displayedImages) return;
    if (selectedIdx === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedIdx(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedIdx((prev) => (prev === null ? null : (prev + 1) % displayedImages.length));
      } else if (e.key === 'ArrowLeft') {
        setSelectedIdx((prev) => (prev === null ? null : (prev - 1 + displayedImages.length) % displayedImages.length));
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedIdx, displayedImages]);

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
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          <div className="shrink-0 flex items-center h-11">
            <BackButton to="/" label={t('common.back') || 'Voltar'} />
          </div>

          <div className="space-y-5">
            <div data-gallery-selector className="rounded-2xl border border-zinc-200 bg-[#FAF9F6] shadow-[0_18px_50px_rgba(5,5,5,0.04)] overflow-hidden">
              <button
                type="button"
                onClick={toggleAlbumSelector}
                aria-expanded={isAlbumSelectorOpen}
                aria-controls="gallery-style-selector"
                className="w-full flex items-center justify-between gap-5 px-5 sm:px-7 py-5 text-left cursor-pointer"
              >
                <span className="min-w-0">
                  <span className="block font-display text-[11px] sm:text-xs font-extrabold tracking-[0.18em] uppercase text-zinc-950">
                    {t('gallery.selector.title') || 'EXPLORAR ESTILOS DA GALERIA'}
                  </span>
                  <span className="mt-1.5 block font-sans text-xs sm:text-sm leading-relaxed tracking-normal normal-case text-zinc-500">
                    {t('gallery.selector.subtitle') || 'Escolha um album e mergulhe nos detalhes de cada traco.'}
                  </span>
                </span>
                <ChevronDown
                  size={20}
                  strokeWidth={2}
                  className={`shrink-0 text-[#005F73] transition-transform duration-300 ${isAlbumSelectorOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              <AnimatePresence initial={false}>
                {isAlbumSelectorOpen && (
                  <motion.div
                    id="gallery-style-selector"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-zinc-200 px-5 sm:px-7 py-5">
                      <div data-gallery-category-list className="flex flex-col xl:flex-row items-stretch xl:items-center gap-3 select-none">
                {categories.map((cat) => {
                  const isSelected = filter === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => changeCategory(cat.id)}
                      onMouseEnter={() => warmupCategory(cat.id)}
                      onFocus={() => warmupCategory(cat.id)}
                      aria-pressed={isSelected}
                      className={`h-11 min-h-[44px] w-full xl:w-[158px] shrink-0 inline-flex items-center justify-between xl:justify-center rounded-xl xl:rounded-full px-4 xl:px-0 !font-sans !text-[10px] sm:!text-[11px] !font-extrabold !tracking-[0.2em] !uppercase transition-all duration-300 cursor-pointer whitespace-nowrap mb-0 border ${
                        isSelected
                          ? 'bg-[#005F73] border-[#005F73] hover:bg-[#004d5e] hover:border-[#004d5e] text-white shadow-xs'
                          : 'bg-white hover:bg-zinc-900/5 border-zinc-300 hover:border-zinc-500 text-zinc-900 hover:text-zinc-900'
                      }`}
                    >
                      <span>{t(`gallery.categories.${cat.id}`) || cat.title}</span>
                      <ChevronRight size={16} strokeWidth={2} className="xl:hidden text-current" aria-hidden="true" />
                    </button>
                  );
                })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <p className="font-sans text-xs sm:text-sm text-zinc-500 text-center leading-relaxed">
              {t('gallery.selector.photoHint') || 'Primeiro, escolha um estilo. Depois, clique em uma foto para ampliar e navegar pela galeria.'}
            </p>
          </div>

          <div className="space-y-8">
            {filter && (
              <div className="pt-2" aria-busy={isGridLoading}>
                {isGridLoading ? (
                  <GallerySkeletonGrid count={Math.min(PRELOAD_BATCH_SIZE, selectedData?.images.length || PRELOAD_BATCH_SIZE)} />
                ) : displayedData ? (
                  <div data-gallery-grid key={`grid-${displayedFilter}`} className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
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
                ) : null}
              </div>
            )}

            <div data-gallery-empty-card className="rounded-2xl border border-[#005F73]/25 bg-[#050505] text-white shadow-[0_24px_70px_rgba(5,5,5,0.16)] overflow-hidden">
              <div className="p-7 sm:p-9 lg:p-10">
                <div className="max-w-4xl mx-auto space-y-4 text-left sm:text-center">
                  <div className="w-14 h-[1.5px] bg-[#005F73] sm:mx-auto" />
                  <h2 className="font-serif text-2xl sm:text-3xl leading-tight tracking-[-0.02em] text-[#FAF9F6]">
                    {t('gallery.emptyState.title') || 'Escolha um estilo para começar'}
                  </h2>
                  <p className="font-sans text-sm sm:text-base leading-relaxed text-zinc-300">
                    {t('gallery.emptyState.description') || 'Cada álbum reúne trabalhos separados por estética, técnica e proposta visual.'}
                  </p>
                  <p className="font-sans text-sm sm:text-base leading-relaxed text-zinc-400">
                    {t('gallery.emptyState.prompt') || 'Selecione uma categoria acima para explorar as fotos em detalhes.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedIdx !== null && displayedData && displayedFilter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#050505]/88 z-[9999] flex items-center justify-center select-none"
          >
            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-[#005F73] transition-colors cursor-pointer p-3 z-50 bg-black/20 hover:bg-black/40 rounded-full animate-fade-in"
              aria-label={t('gallery.closeImage') || "Fechar imagem"}
            >
              <X size={28} strokeWidth={1.5} />
            </button>

            {displayedData && displayedData.images.length > 1 && (
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

            {displayedData && displayedData.images.length > 1 && (
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
                src={displayedData?.images[selectedIdx] || ''}
                alt={`${t('gallery.expandedAlt') || 'Imagem ampliada'} ${selectedIdx + 1}`}
                className="max-w-full max-h-[60vh] md:max-h-[65vh] object-contain rounded-xl border border-white/10 shadow-2xl pointer-events-auto"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                referrerPolicy="no-referrer"
              />

              <div className="mt-6 flex flex-col items-center gap-3.5 text-center pointer-events-auto">
                <h3 className="text-white text-sm sm:text-base font-serif tracking-widest uppercase font-semibold">
                  {displayedFilter ? (t(`techniques.${displayedFilter}.title`) || styleFullNames[displayedFilter]) : ''}
                </h3>

                <div className="flex flex-wrap items-center justify-center gap-2 max-w-xs sm:max-w-md pb-1">
                  {displayedData?.images.map((_, dotIdx) => (
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
                  {selectedIdx + 1} / {displayedData?.images.length || 0}
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
