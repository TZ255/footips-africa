import { Router } from 'express';
import LeagueModel from '../models/league.js';
import { buildSeo } from '../utils/seo.js';
import { getMegaTips, getOver15Tips, getBttsTips, getHt15Tips } from '../utils/get-tips/index.js';

const router = Router();

function normalizePath(path = '/') {
  if (!path.startsWith('/')) return `/${path}`;
  if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1);
  return path;
}

function getViewPath(country, viewName) {
  const folder = country?.code || 'za';
  return `countries/${folder}/${viewName}`;
}

function formatLocalTime(country) {
  try {
    return new Intl.DateTimeFormat(country.locale || 'en', {
      timeZone: country.timezone || 'UTC',
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).format(new Date());
  } catch (error) {
    return new Date().toUTCString();
  }
}

async function loadLeague(country, league) {
  const leagueConfig = league || country?.leagues?.[0];
  if (!leagueConfig?.id) {
    return { league: null, standings: [], fixtures: [] };
  }

  const leagueDoc = await LeagueModel.findOne({ league_id: leagueConfig.id }).lean().cache(600);
  const standings = Array.isArray(leagueDoc?.standing) ? leagueDoc.standing : [];
  const fixtures = Array.isArray(leagueDoc?.current_round_fixtures)
    ? leagueDoc.current_round_fixtures
    : [];

  return { league: leagueDoc || null, standings, fixtures };
}

router.get('/api/testing', async (req, res) => {
  return res.json({ success: true, message: 'API is working fine!' });
});

router.get('*', async (req, res, next) => {
  if (!req.country || !req.routeMap) return next();

  const path = normalizePath(req.path);
  const pageKey = req.routeMap.pagesByPath[path];
  const leagueConfig = req.routeMap.leagueByPath[path];
  const country = req.country;
  const labels = country.labels || {};

  try {
    if (leagueConfig) {
      const { league, standings, fixtures } = await loadLeague(country, leagueConfig);
      const seo = buildSeo({
        req,
        country,
        page: {
          title: `${leagueConfig.name || 'League'} Table`,
          description: `Standings and fixtures for ${leagueConfig.name || country.name}.`,
          path,
          breadcrumbs: [
            { name: labels.navHome || 'Home', path: country.routes?.home || '/' },
            { name: leagueConfig.name || 'League', path },
          ],
        },
      });

      return res.render(getViewPath(country, 'league'), {
        activeId: 'league',
        seo,
        league,
        standings,
        fixtures,
        leagueConfig,
      });
    }

    if (!pageKey) return next();

    if (pageKey === 'home' || pageKey === 'today') {
      const tips = await getMegaTips(country.timezone);
      const { league, standings } = await loadLeague(country);
      const seo = buildSeo({
        req,
        country,
        page: {
          title: pageKey === 'home' ? country.seo?.title || `Football Tips ${country.name}` : `${labels.dayToday || 'Today'} Tips`,
          description: country.seo?.description,
          path,
        },
      });

      return res.render(getViewPath(country, 'today'), {
        activeId: pageKey === 'home' ? 'home' : 'today',
        seo,
        tips,
        standings: standings.slice(0, 10),
        league,
        localTime: formatLocalTime(country),
        pageKey,
      });
    }

    if (pageKey === 'tomorrow') {
      const tips = await getMegaTips(country.timezone);
      const seo = buildSeo({
        req,
        country,
        page: {
          title: `${labels.dayTomorrow || 'Tomorrow'} Tips`,
          description: `Tomorrow tips and predictions for ${country.name}.`,
          path,
          breadcrumbs: [
            { name: labels.navHome || 'Home', path: country.routes?.home || '/' },
            { name: labels.dayTomorrow || 'Tomorrow', path },
          ],
        },
      });

      return res.render(getViewPath(country, 'tomorrow'), {
        activeId: 'tomorrow',
        seo,
        tips,
      });
    }

    if (pageKey === 'over15') {
      const tips = await getOver15Tips(country.timezone);
      const market = country.markets?.over15 || {};
      const seo = buildSeo({
        req,
        country,
        page: {
          title: `${market.title || 'Over 1.5 Tips'} - ${country.name}`,
          description: market.intro || country.seo?.description,
          path,
          breadcrumbs: [
            { name: labels.navHome || 'Home', path: country.routes?.home || '/' },
            { name: market.title || 'Over 1.5', path },
          ],
        },
      });

      return res.render(getViewPath(country, 'over15'), {
        activeId: 'over15',
        seo,
        tips,
        market,
      });
    }

    if (pageKey === 'btts') {
      const tips = await getBttsTips(country.timezone);
      const market = country.markets?.btts || {};
      const seo = buildSeo({
        req,
        country,
        page: {
          title: `${market.title || 'BTTS Tips'} - ${country.name}`,
          description: market.intro || country.seo?.description,
          path,
          breadcrumbs: [
            { name: labels.navHome || 'Home', path: country.routes?.home || '/' },
            { name: market.title || 'BTTS', path },
          ],
        },
      });

      return res.render(getViewPath(country, 'btts'), {
        activeId: 'btts',
        seo,
        tips,
        market,
      });
    }

    if (pageKey === 'ht15') {
      const tips = await getHt15Tips(country.timezone);
      const market = country.markets?.ht15 || {};
      const seo = buildSeo({
        req,
        country,
        page: {
          title: `${market.title || 'First Half Over 1.5'} - ${country.name}`,
          description: market.intro || country.seo?.description,
          path,
          breadcrumbs: [
            { name: labels.navHome || 'Home', path: country.routes?.home || '/' },
            { name: market.title || 'First Half Over 1.5', path },
          ],
        },
      });

      return res.render(getViewPath(country, 'ht15'), {
        activeId: 'ht15',
        seo,
        tips,
        market,
      });
    }

    return next();
  } catch (error) {
    return next(error);
  }
});

export default router;
