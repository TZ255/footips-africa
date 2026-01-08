import { COUNTRIES, COUNTRY_MAP, DEFAULT_COUNTRY_CODE } from '../config/countries.js';
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

function buildCountryLinks(req) {
  const rawHost = req.get('host') || '';
  const cleanHost = stripPort(rawHost);
  const port = rawHost.includes(':') ? rawHost.split(':')[1] : '';
  const protocol = SEO.protocol;
  const baseDomain = SEO.baseDomain;
  const isDev = process.env.NODE_ENV === 'development';

  return COUNTRIES.map((country) => {
    if (!country?.seo?.title) return null;
    const homePath = country.routes?.home || '/';

    if (!isDev && baseDomain && country.subdomain) {
      return {
        name: country.seo.title,
        href: `${protocol}://${country.subdomain}.${baseDomain}${homePath}`,
      };
    }

    // Development: keep everything on localhost with subdomains if present
    if (isDev && country.subdomain) {
      return {
        name: country.seo.title,
        href: `${protocol}://${country.subdomain}.localhost${port ? `:${port}` : ''}${homePath}`,
      };
    }

    let targetHost = cleanHost;
    if (country.subdomain && cleanHost.includes('.')) {
      const parts = cleanHost.split('.');
      parts[0] = country.subdomain;
      targetHost = parts.join('.');
    }

    return {
      name: country.seo.title,
      href: `${protocol}://${targetHost}${port ? `:${port}` : ''}${homePath}`,
    };
  }).filter(Boolean);
}

function normalizePath(path = '/') {
  if (!path.startsWith('/')) return `/${path}`;
  if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1);
  return path;
}

function hasAvailableLeague(country) {
  return (country.leagues || []).some((league) => league?.isAvailable !== false);
}

function buildNavItems(country, routes) {
  const primaryLeague = (country.leagues || []).find((league) => league?.isAvailable !== false);
  const items = [
    { id: 'home', label: country.labels?.navHome || 'Home', href: routes.home || '/' },
    { id: 'today', label: country.labels?.navToday || 'Today', href: routes.today || routes.home || '/' },
    { id: 'tomorrow', label: country.labels?.navTomorrow || 'Tomorrow', href: routes.tomorrow || '/tomorrow' },
    { id: 'over15', label: country.labels?.navOver15 || 'Over 1.5', href: routes.over15 || '/over-15' },
    { id: 'btts', label: country.labels?.navBtts || 'BTTS', href: routes.btts || '/both-teams-to-score' },
    { id: 'ht15', label: country.labels?.navHt15 || 'HT 1.5', href: routes.ht15 || '/first-half-over-15' },
  ];

  if (routes.league && primaryLeague) {
    const leagueLabel = country.labels?.navLeague || primaryLeague.name;
    if (leagueLabel) {
      items.push({
        id: 'league',
        label: leagueLabel,
        href: routes.league,
      });
    }
  }

  return items;
}

function buildRouteMap(country) {
  const primaryLeague = (country.leagues || []).find((league) => league?.isAvailable !== false) || null;
  const routes = {};
  const leagueAvailable = Boolean(primaryLeague);

  Object.entries(country.routes || {}).forEach(([key, path]) => {
    if (key === 'league' && !leagueAvailable) return;
    routes[key] = normalizePath(path);
  });

  const pagesByPath = {};
  Object.entries(routes).forEach(([key, path]) => {
    pagesByPath[path] = key;
  });

  const leagueByPath = {};
  (country.leagues || []).forEach((league) => {
    if (!league?.slug || league?.isAvailable === false) return;
    leagueByPath[normalizePath(`/${league.slug}`)] = league;
  });

  if (leagueAvailable && routes.league && primaryLeague) {
    leagueByPath[routes.league] = primaryLeague;
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
  res.locals.countryLinks = buildCountryLinks(req);

  next();
}
