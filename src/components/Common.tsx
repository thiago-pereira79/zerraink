import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FALLBACK_IMAGE } from '../constants';

export const BackButtonWrapper = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`mt-7 mb-7 md:mt-8 md:mb-8 lg:mt-10 lg:mb-10 max-w-7xl mx-auto px-6 text-left ${className}`}>
      {children}
    </div>
  );
};

export const BackButton = ({ to = "/", label, isBack = false, dark = false }: { to?: string; label?: string; isBack?: boolean; dark?: boolean }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const displayLabel = label || t('common.back', 'Voltar');
  
  const className = dark 
    ? "inline-flex items-center gap-2.5 px-6 py-2.5 bg-transparent hover:bg-white/5 border border-white/15 hover:border-white/30 text-white font-extrabold uppercase text-[10px] sm:text-[11px] tracking-[0.2em] rounded-full transition-all duration-300 group no-underline cursor-pointer select-none mb-0"
    : "inline-flex items-center gap-2.5 px-6 py-2.5 bg-transparent hover:bg-zinc-900/5 border border-zinc-300 hover:border-zinc-500 text-zinc-900 font-extrabold uppercase text-[10px] sm:text-[11px] tracking-[0.2em] rounded-full transition-all duration-300 group no-underline cursor-pointer select-none mb-0";

  const icon = (
    <span className="transform group-hover:-translate-x-1 transition-transform font-serif">←</span>
  );

  const handleClick = (e: React.MouseEvent) => {
    if (isBack) {
      e.preventDefault();
      if (window.history.length > 1) {
        navigate(-1);
      } else {
        navigate('/');
      }
    }
  };

  if (isBack) {
    return (
      <a 
        onClick={handleClick}
        className={className}
        role="button"
        tabIndex={0}
      >
        {icon}
        <span>{displayLabel.toUpperCase()}</span>
      </a>
    );
  }

  return (
    <Link 
      to={to}
      className={className}
    >
      {icon}
      <span>{displayLabel.toUpperCase()}</span>
    </Link>
  );
};

export const PremiumImage = ({ 
  src, 
  alt, 
  className = "", 
  containerClassName = "",
  placeholderText = "ZERRAINK STUDIO"
 }: { 
  src: string; 
  alt: string; 
  className?: string; 
  containerClassName?: string;
  placeholderText?: string;
 }) => {
  const [error, setError] = React.useState(!src);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    setError(!src);
    setLoaded(false);
  }, [src]);

  return (
    <div className={`relative overflow-hidden bg-black/90 ${containerClassName}`}>
      {!loaded && !error && (
        <div className="absolute inset-0 bg-neutral-800 animate-pulse"></div>
      )}
      
      {error ? (
        <img
          src={FALLBACK_IMAGE}
          alt="ZERRAINK STUDIO"
          className={`${className} grayscale object-cover opacity-60`}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
        />
      ) : (
        <img
          src={src}
          alt={alt}
          className={`${className} transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
        />
      )}
    </div>
  );
};
