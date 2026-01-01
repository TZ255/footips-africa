import { COUNTRY_MAP, DEFAULT_COUNTRY_CODE } from '../config/countries.js';
import { SEO } from '../config/seo.js';

function stripPort(hostname = '') {
  return hostname.split(':')[0].toLowerCase();
}

function getSubdomain(hostname) {
  const host = stripPort(hostname);
  if (!host) return null;

  if (host.endsWith(`.${SEO.baseDomain}`)) {
    const sub = host.slice(0, -SEO.baseDomain.length - 1);
    return sub.split('.').filter(Boolean).shift() || null;
  }

  const parts = host.split('.');
  if (parts.length === 2 && parts[1] === 'localhost') {
    return parts[0];
  }

  if (parts.length > 2) {
    return parts[0];
  }

  return null;
}

function normalizePath(path = '/') {
  if (!path.startsWith('/')) return `/${path}`;
  if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1);
  return path;
}

function buildNavItems(country, routes) {
  const items = [
    { id: 'home', label: country.labels?.navHome || 'Home', href: routes.home || '/' },
    { id: 'today', label: country.labels?.navToday || 'Today', href: routes.today || routes.home || '/' },
    { id: 'tomorrow', label: country.labels?.navTomorrow || 'Tomorrow', href: routes.tomorrow || '/tomorrow' },
    { id: 'over15', label: country.labels?.navOver15 || 'Over 1.5', href: routes.over15 || '/over-15' },
    { id: 'btts', label: country.labels?.navBtts || 'BTTS', href: routes.btts || '/both-teams-to-score' },
    { id: 'ht15', label: country.labels?.navHt15 || 'HT 1.5', href: routes.ht15 || '/first-half-over-15' },
  ];

  if (routes.league) {
    items.push({
      id: 'league',
      label: country.labels?.navLeague || country.leagues?.[0]?.name || 'League',
      href: routes.league,
    });
  }

  return items;
}

function buildRouteMap(country) {
  const routes = {};
  Object.entries(country.routes || {}).forEach(([key, path]) => {
    routes[key] = normalizePath(path);
  });

  const pagesByPath = {};
  Object.entries(routes).forEach(([key, path]) => {
    pagesByPath[path] = key;
  });

  const leagueByPath = {};
  (country.leagues || []).forEach((league) => {
    if (!league?.slug) return;
    leagueByPath[normalizePath(`/${league.slug}`)] = league;
  });

  if (routes.league && country.leagues?.[0]) {
    leagueByPath[routes.league] = country.leagues[0];
  }

  return {
    routes,
    pagesByPath,
    leagueByPath,
    navItems: buildNavItems(country, routes),
  };
}

export function resolveCountry(req, res, next) {
  const subdomain = getSubdomain(req.hostname || req.get('host'));
  const country = COUNTRY_MAP[subdomain] || COUNTRY_MAP[DEFAULT_COUNTRY_CODE];
  const routeMap = buildRouteMap(country);

  req.country = country;
  req.routeMap = routeMap;

  res.locals.country = country;
  res.locals.routes = routeMap.routes;
  res.locals.navItems = routeMap.navItems;

  next();
}
