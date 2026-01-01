import './config/env.js';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import expressLayouts from 'express-ejs-layouts';
import cors from 'cors';
import pageRoutes from './routes/pages.js';

//Only use one payment route file at a time to avoid conflicts

import seoRoutes from './routes/index.js';
import { connectDB } from './config/db.js';
import { resolveCountry } from './middleware/resolveCountry.js';
import { buildSeo } from './utils/seo.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.set('trust proxy', true);

// Database
connectDB().catch((err) => {
  console.error('Mongo connection error:', err.message);
});

// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layouts/main');

// Security + perf
app.use(cors());
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginResourcePolicy: { policy: 'cross-origin' },
  })
);
app.use(compression());

// Parsers
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Static assets with caching
app.use(
  express.static(path.join(__dirname, 'public'), {
    maxAge: '7d',
    setHeaders: (res, filePath) => {
      if (filePath.endsWith('.html')) return;
      res.setHeader('Cache-Control', 'public, max-age=604800, immutable');
    },
  })
);

// Global locals
app.use((req, res, next) => {
  res.locals.currentPath = req.path;
  next();
});

// Routes
app.use(resolveCountry);
app.use('/', seoRoutes);
app.use('/', pageRoutes);

// 404 handler
app.use((req, res) => {
  if (!res.headersSent && req.accepts('html')) {
    const seo = buildSeo({
      req,
      country: req.country,
      page: {
        title: 'Page not found',
        description: 'The page you are looking for does not exist.',
        path: req.originalUrl || '/',
      },
    });
    return res.status(404).render('pages/404', { activeId: null, seo });
  }

  return res.status(404).json({ message: 'Not found' });
});

const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`SSR server running at http://localhost:${port}`);
});
