import { SeoMeta } from '../types';

export function updatePageSeo(seo: SeoMeta, canonicalPath: string, schemaData?: object) {
  // 1. Update Document Title
  document.title = `${seo.title} | MP Tourism`;

  // 2. Update Meta Description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', seo.metaDescription);

  // 3. Update OpenGraph Tags
  const fullUrl = typeof window !== 'undefined' ? `${window.location.origin}${canonicalPath}` : `https://mptourism.gov.in${canonicalPath}`;

  const setMetaProperty = (property: string, content: string) => {
    let el = document.querySelector(`meta[property="${property}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('property', property);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  setMetaProperty('og:title', seo.title);
  setMetaProperty('og:description', seo.metaDescription);
  setMetaProperty('og:url', fullUrl);
  setMetaProperty('og:type', 'website');

  // Twitter cards
  const setMetaName = (name: string, content: string) => {
    let el = document.querySelector(`meta[name="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('name', name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  setMetaName('twitter:title', seo.title);
  setMetaName('twitter:description', seo.metaDescription);

  // 4. Update Canonical Link
  let canonicalEl = document.querySelector('link[rel="canonical"]');
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', fullUrl);

  // 5. Invalidate / Inject JSON-LD Structured Data
  let ldJsonEl = document.getElementById('seo-json-ld');
  if (schemaData) {
    if (!ldJsonEl) {
      ldJsonEl = document.createElement('script');
      ldJsonEl.id = 'seo-json-ld';
      ldJsonEl.setAttribute('type', 'application/ld+json');
      document.head.appendChild(ldJsonEl);
    }
    ldJsonEl.textContent = JSON.stringify(schemaData);
  } else if (ldJsonEl) {
    ldJsonEl.remove();
  }
}
