import './env.js';

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
  baseDomain: process.env.SITE_DOMAIN || 'footballtips.africa',
  protocol: process.env.SITE_PROTOCOL || 'https',
  organization: {
    name: 'Football Tips Africa',
    legalName: 'Football Tips Africa',
    url: process.env.SITE_URL || 'https://footballtips.africa',
    logo: '/images/social.png',
    sameAs: [],
  },
};
