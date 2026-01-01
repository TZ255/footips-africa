import { Router } from 'express';
import { COUNTRIES } from '../config/countries.js';
import { SEO } from '../config/seo.js';
import { getBaseUrl } from '../utils/seo.js';

const router = Router();

function normalizePath(path = '/') {
  if (!path.startsWith('/')) return `/${path}`;
  if (path !== '/' && path.endsWith('/')) return path.slice(0, -1);
  return path;
}

function canonicalizePath(path = '/') {
  const normalized = normalizePath(path);
  if (normalized === '/') return '/';
  if (/\.[a-z0-9]+$/i.test(normalized)) return normalized;
  return `${normalized}/`;
}

function countryBaseUrl(country) {
  const protocol = SEO.protocol || 'https';
  if (country?.subdomain && SEO.baseDomain) {
    return `${protocol}://${country.subdomain}.${SEO.baseDomain}`;
  }
  return null;
}

router.get('/rss.xml', (req, res) => {
  res.status(404).send('Not found');
});

router.get('/robots.txt', (req, res) => {
  const baseUrl = getBaseUrl(req, req.country);
  res.type('text/plain');
  res.send(`User-agent: *\nAllow: /\n\nSitemap: ${baseUrl}/sitemap.xml`);
});

router.get('/sitemap.xml', async (req, res) => {
  const urls = [];

  COUNTRIES.forEach((country) => {
    const baseUrl = countryBaseUrl(country);
    if (!baseUrl) return;

    Object.values(country.routes || {}).forEach((path) => {
      urls.push(`${baseUrl}${canonicalizePath(path)}`);
    });

    (country.leagues || []).forEach((league) => {
      if (!league?.slug) return;
      urls.push(`${baseUrl}${canonicalizePath(`/${league.slug}`)}`);
    });
  });

  const body = urls
    .map(
      (url) => `
    <url>
      <loc>${url}</loc>
    </url>`
    )
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${body}
  </urlset>`;

  res.set('Content-Type', 'application/xml');
  res.send(xml);
});

router.get('/goto/:slug', (req, res) => {
  const affiliates = {
    leonbet: 'https://k56thc2itt.com/?serial=44835&creative_id=1061&anid=',
    betwinner: 'https://bw-prm.com/afcon-2025-lite/?p=%2Fregistration%2F&id=29lf',
  };

  const { slug } = req.params;
  const url = affiliates[slug] || `https://bet-link.top/${slug}/register`;

  res.redirect(url);
});

export default router;
