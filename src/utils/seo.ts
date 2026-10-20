import { SeoMeta } from '../types';

export const PRIMARY_CANONICAL_DOMAIN = 'https://mptourismguide.vercel.app';

/**
 * Returns the exact absolute canonical URL using the primary domain.
 * Homepage is strictly 'https://mptourismguide.vercel.app/'
 * Subpaths are formatted as 'https://mptourismguide.vercel.app/path' without trailing slashes.
 */
export function getCanonicalUrl(canonicalPath: string): string {
  if (!canonicalPath || canonicalPath === '/' || canonicalPath === '') {
    return `${PRIMARY_CANONICAL_DOMAIN}/`;
  }
  const cleanPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
  const normalizedPath = cleanPath === '/' ? '/' : cleanPath.replace(/\/+$/, '');
  return `${PRIMARY_CANONICAL_DOMAIN}${normalizedPath}`;
}

/**
 * Helper to ensure image URLs are absolute URLs using the primary canonical domain.
 */
export function ensureAbsoluteUrl(url?: string): string {
  if (!url) return `${PRIMARY_CANONICAL_DOMAIN}/images/khajuraho-temples.jpg`;
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  const clean = url.startsWith('/') ? url : `/${url}`;
  return `${PRIMARY_CANONICAL_DOMAIN}${clean}`;
}

export function updatePageSeo(
  seo: SeoMeta,
  canonicalPath: string,
  schemaData?: object,
  ogImage?: string
) {
  const canonicalUrl = getCanonicalUrl(canonicalPath);
  const isArticle = canonicalPath.startsWith('/travel-guides/');

  const resolvedImage = ensureAbsoluteUrl(
    ogImage ||
      (schemaData && 'image' in schemaData && typeof (schemaData as { image?: unknown }).image === 'string'
        ? (schemaData as { image: string }).image
        : undefined)
  );

  // 1. Update Document Title
  document.title = `${seo.title} | MP Tourism`;

  // 2. Helper to set or create meta tag by name
  const setMetaName = (name: string, content: string) => {
    let el = document.querySelector(`meta[name="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('name', name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  // Helper to set or create meta tag by property
  const setMetaProperty = (property: string, content: string) => {
    let el = document.querySelector(`meta[property="${property}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('property', property);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  // 3. Update Meta Description, Robots, Author, Keywords
  setMetaName('description', seo.metaDescription);
  setMetaName('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
  setMetaName('author', 'MP Tourism Guide Editorial Desk');

  const keywordsList = [
    seo.primaryKeyword,
    ...(seo.secondaryKeywords || []),
    'Madhya Pradesh tourism',
    'MP travel guide',
  ].filter(Boolean);
  setMetaName('keywords', Array.from(new Set(keywordsList)).join(', '));

  // 4. Update Canonical Link Tag (Remove duplicates to ensure only one canonical exists)
  const existingCanonicals = document.querySelectorAll('link[rel="canonical"]');
  if (existingCanonicals.length > 1) {
    existingCanonicals.forEach((el, index) => {
      if (index > 0) el.remove();
    });
  }
  let canonicalEl = document.querySelector('link[rel="canonical"]');
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', canonicalUrl);

  // 5. Update OpenGraph Tags
  setMetaProperty('og:title', seo.title);
  setMetaProperty('og:description', seo.metaDescription);
  setMetaProperty('og:url', canonicalUrl);
  setMetaProperty('og:type', isArticle ? 'article' : 'website');
  setMetaProperty('og:site_name', 'Madhya Pradesh Tourism Guide');
  setMetaProperty('og:image', resolvedImage);
  setMetaProperty('og:locale', 'en_IN');

  // 6. Update Twitter Cards
  setMetaName('twitter:card', 'summary_large_image');
  setMetaName('twitter:title', seo.title);
  setMetaName('twitter:description', seo.metaDescription);
  setMetaName('twitter:image', resolvedImage);

  // 7. Invalidate / Inject JSON-LD Structured Data tied to Primary Canonical URL
  let ldJsonEl = document.getElementById('seo-json-ld');
  if (schemaData) {
    if (!ldJsonEl) {
      ldJsonEl = document.createElement('script');
      ldJsonEl.id = 'seo-json-ld';
      ldJsonEl.setAttribute('type', 'application/ld+json');
      document.head.appendChild(ldJsonEl);
    }

    let finalSchema: object;
    if ('@graph' in schemaData) {
      finalSchema = {
        '@context': 'https://schema.org',
        '@graph': (schemaData as { '@graph': unknown[] })['@graph'],
      };
    } else {
      finalSchema = {
        ...schemaData,
        url: (schemaData as { url?: string }).url || canonicalUrl,
        mainEntityOfPage: (schemaData as { mainEntityOfPage?: unknown }).mainEntityOfPage || {
          '@type': 'WebPage',
          '@id': canonicalUrl,
        },
      };
    }

    ldJsonEl.textContent = JSON.stringify(finalSchema);
  } else if (ldJsonEl) {
    ldJsonEl.remove();
  }
}
