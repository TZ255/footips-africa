import { SEO } from '../config/seo.js';

function getRequestProto(req) {
  if (!req) return SEO.protocol;
  const forwarded = req.headers['x-forwarded-proto'];
  if (forwarded) return forwarded.split(',')[0];
  return req.protocol || SEO.protocol;
}

function getRequestHost(req) {
  if (!req) return SEO.baseDomain;
  const forwarded = req.headers['x-forwarded-host'];
  if (forwarded) return forwarded.split(',')[0];
  return req.get('host');
}

function normalizePath(path = '/') {
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && path.endsWith('/')) path = path.slice(0, -1);
  return path;
}

function canonicalizePath(path = '/') {
  const normalized = normalizePath(path);
  if (normalized === '/') return '/';
  if (/\.[a-z0-9]+$/i.test(normalized)) return normalized;
  return `${normalized}/`;
}

export function getBaseUrl(req, country) {
  const protocol = getRequestProto(req);
  const host = getRequestHost(req);

  if (host && SEO.baseDomain && host.endsWith(SEO.baseDomain)) {
    if (country?.subdomain) {
      return `${protocol}://${country.subdomain}.${SEO.baseDomain}`;
    }
    return `${protocol}://${SEO.baseDomain}`;
  }

  return `${protocol}://${host}`;
}

function resolveImageUrl(baseUrl, imagePath) {
  if (!imagePath) return `${baseUrl}${SEO.defaultOgImage}`;
  if (imagePath.startsWith('http')) return imagePath;
  return `${baseUrl}${imagePath.startsWith('/') ? imagePath : `/${imagePath}`}`;
}

function mergeKeywords(parts) {
  return parts
    .filter(Boolean)
    .join(',')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
    .filter((item, index, all) => all.indexOf(item) === index)
    .join(', ');
}

export function buildSeo({ req, country, page = {} }) {
  const baseUrl = getBaseUrl(req, country);
  const canonical = `${baseUrl}${canonicalizePath(page.path || req.path || '/')}`;
  const titleBase = country?.seo?.title || SEO.defaultTitle;
  const title = page.title ? SEO.titleTemplate.replace('%s', page.title) : titleBase;
  const description = page.description || country?.seo?.description || SEO.defaultDescription;
  const keywords = mergeKeywords([page.keywords, country?.seo?.keywords, SEO.defaultKeywords]);
  const image = resolveImageUrl(baseUrl, page.image || country?.seo?.image || SEO.defaultOgImage);
  const locale = country?.locale || 'en';

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SEO.siteName,
      url: baseUrl,
      inLanguage: locale,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SEO.organization?.name || SEO.siteName,
      url: baseUrl,
      logo: resolveImageUrl(baseUrl, SEO.organization?.logo || SEO.defaultOgImage),
    },
  ];

  if (page.breadcrumbs?.length) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: page.breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: `${baseUrl}${canonicalizePath(crumb.path)}`,
      })),
    });
  }

  return {
    title,
    description,
    keywords,
    canonical,
    image,
    locale,
    siteName: SEO.siteName,
    twitter: {
      handle: SEO.twitter?.handle,
      card: SEO.twitter?.card || 'summary_large_image',
    },
    og: {
      type: page.ogType || 'website',
    },
    jsonLd,
  };
}
