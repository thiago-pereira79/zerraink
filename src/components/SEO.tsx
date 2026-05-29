import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: string;
  schema?: any;
}

const SEO: React.FC<SEOProps> = ({ 
  title,
  description,
  canonical,
  image = "/logos/zerraink-menu-original-style.png",
  type = "website",
  schema
}) => {
  const { t, i18n } = useTranslation();
  
  const browserTitle = "ZERRAINK STUDIO";
  const seoTitle = title || browserTitle;
  const seoDescription = description || t('seo.home.description');
  const locale = i18n.language === 'pt' ? 'pt_BR' : (i18n.language === 'es' ? 'es_ES' : 'en_US');

  const siteUrl = "https://zerraink.com"; // Placeholder URL
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{browserTitle}</title>
      <meta name="description" content={seoDescription} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:locale" content={locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
