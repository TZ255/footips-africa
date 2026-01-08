# AGENTS.md last session (1 Jan, 2026, 18:00):  019b79a1-3f4c-7600-b151-e8bfa3cfca7d

This project is a multi-country Express + EJS site for football tips using subdomains.
Country-specific content, routes, and SEO are driven from configuration, while tips
and league data reuse the existing MongoDB collections.

## High-level flow
1. `server.js` boots Express, connects MongoDB, enables compression + helmet, serves
   static assets with cache headers, and mounts the router stack.
2. `middleware/resolveCountry.js` inspects the request hostname, maps subdomain ->
   country config, and exposes `req.country`, `req.routeMap`, and view locals.
3. `routes/index.js` serves `robots.txt` and `sitemap.xml` based on all configured
   countries and their routes, plus `/goto/:slug` affiliate redirects.
4. `routes/pages.js` matches localized paths (today, tomorrow, markets, league) and
   renders the correct EJS view under `views/countries/<code>/`.
5. `utils/seo.js` builds SEO meta tags per request (title, canonical, OG/Twitter,
   JSON-LD) using global defaults + country overrides.

## Country configuration
`config/countries.js` is the single source of truth. Each country entry includes:
- `code`, `name`, `locale`, `timezone`, `currency`
- `subdomain` (used for canonical URLs and hostname detection)
- `routes` with localized paths (today/tomorrow/markets/league)
- `labels` (nav labels and day labels)
- `leagues` (league IDs and slugs for MongoDB lookup)
- `seo` overrides and `content` text blocks
- `markets` copy for over15, btts, ht15 pages

Add a new country by copying an existing entry and adjusting the fields above.

## Country resolution and nav
`middleware/resolveCountry.js`:
- Extracts the subdomain from the hostname.
- Falls back to `DEFAULT_COUNTRY_CODE` if no match.
- Builds a route map and nav items from `country.routes`.
- Exposes `country`, `routes`, and `navItems` to all views.

## Routing
`routes/pages.js` handles all localized pages through one router:
- Home/today: render `countries/<code>/today.ejs`
- Tomorrow: render `countries/<code>/tomorrow.ejs`
- Markets: render `countries/<code>/over15.ejs`, `btts.ejs`, `ht15.ejs`
- League: render `countries/<code>/league.ejs`

The actual templates in each country folder are thin wrappers that include
shared templates from `views/countries/_shared/`.

## Tips data
`utils/get-tips/index.js` returns buckets for today/tomorrow/yesterday based on
`country.timezone`. The database logic is unchanged; only the date bucket keys
were standardized to `today`, `tomorrow`, `yesterday`.

## League data
`models/league.js` is used by `routes/pages.js` to fetch standings + fixtures
based on `country.leagues[0].id`. The shared partials render:
- `views/partials/league/standings-table.ejs`
- `views/partials/league/fixtures.ejs`

## SEO
`utils/seo.js` merges:
- Global defaults from `config/seo.js`
- Country overrides from `config/countries.js`
- Per-page data (title, description, keywords, breadcrumbs)

The layout in `views/layouts/main.ejs` renders:
- canonical link
- Open Graph + Twitter tags
- JSON-LD (`WebSite`, `Organization`, optional `BreadcrumbList`)

## Views and UI
- Layout: `views/layouts/main.ejs`
- Header/footer: `views/partials/header.ejs`, `views/partials/footer.ejs`
- Tips cards: `views/partials/tips/tip-cards.ejs`
- Market cards: `views/partials/market-cards.ejs`
- Country views: `views/countries/<code>/*.ejs`

All styling is in `public/css/v1-main.css` and uses a lightweight card-based,
mobile-first layout. The small nav toggle is in `public/js/site.js`.

## Static assets and caching
Static files in `public/` are served with cache headers in `server.js`:
`Cache-Control: public, max-age=604800, immutable` for non-HTML assets.

## Robots and sitemap
`routes/index.js` serves:
- `/robots.txt` with the correct per-request base URL
- `/sitemap.xml` with URLs for every country and route

## Maintenance and 404
- 404: `views/pages/404.ejs`
- Maintenance helpers: `utils/maintenance.js` (uses `buildSeo`)

## Removed features
VIP, authentication, sessions, and related models/routes/views were removed to
keep the site lightweight and fully public.
