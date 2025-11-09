import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'Smart Web Solutions',
  description = 'SANZIQ delivers fast, scalable, and modern web solutions using the latest technologies like React. Expert web development with a creative edge.',
  canonicalUrl,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  children
}) => {
  // Format title to include brand name
  const formattedTitle = `${title} | SANZIQ`;
  
  // Set canonical URL or default to current URL
  const canonical = canonicalUrl || typeof window !== 'undefined' ? window.location.href : '';
  
  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Pass through any additional head elements */}
      {children}
    </Helmet>
  );
};

export default SEO; 