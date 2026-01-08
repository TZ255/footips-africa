import './env.js';

const isDev = process.env.NODE_ENV === 'development';
const BASE_DOMAIN = isDev ? 'localhost:3000' : 'footballtips.africa';
const PROTOCOL = isDev ? 'http' : 'https';

export const SEO = {
  siteName: 'Football Tips Africa',
  defaultTitle: 'Football Tips Africa',
  titleTemplate: '%s | Football Tips Africa',
  defaultDescription:
    'Daily football tips and predictions across Africa. Free betting tips, acca picks, BTTS and over 1.5 markets, plus league previews.',
  defaultKeywords:
    'football tips, betting tips, free tips, acca tips, btts tips, over 1.5, predictions, africa football',
  defaultOgImage: '/images/social.png',
  twitter: {
    handle: '@footballtipsafrica',
    card: 'summary_large_image',
  },
  baseDomain: process.env.SITE_DOMAIN || BASE_DOMAIN,
  protocol: PROTOCOL,
  organization: {
    name: 'Football Tips Africa',
    legalName: 'Football Tips Africa',
    url: process.env.SITE_URL || `${PROTOCOL}://${BASE_DOMAIN}`,
    logo: '/images/social.png',
    sameAs: [],
  },
};
