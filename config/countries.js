const defaultEnglishContent = (country) => ({
  heroTitle: `Football Tips ${country.name}`,
  heroSubtitle: `Daily tips, acca picks and stats for ${country.name}.`,
  intro:
    `Welcome to Football Tips ${country.name}. Get free tips for today and tomorrow, ` +
    'including 1X2, BTTS, over 1.5 and first-half markets.',
  seoBlocks: [
    {
      title: `Free football tips in ${country.name}`,
      body:
        'We publish daily predictions with quick insights on form, injuries and motivation so you can bet smarter.',
    },
    {
      title: 'Smart betting starts with data',
      body:
        'Use tips as a guide, compare odds, and manage your bankroll. Discipline beats luck every time.',
    },
  ],
});

const defaultEnglishMarkets = () => ({
  over15: {
    title: 'Over 1.5 Goals Tips',
    subtitle: 'Goals markets with value picks',
    intro:
      'Over 1.5 focuses on matches likely to produce 2+ goals. Great for building accas and singles.',
  },
  btts: {
    title: 'BTTS Tips (Both Teams to Score)',
    subtitle: 'GG/NG markets for daily games',
    intro:
      'BTTS tips highlight matches where both teams are likely to score. Check team form and scoring trends.',
  },
  ht15: {
    title: 'First Half Over 1.5 Tips',
    subtitle: 'Early goals markets',
    intro:
      'First half over 1.5 looks for fast starts. Use it when teams have aggressive opening tactics.',
  },
});

const swahiliContent = (countryName) => ({
  heroTitle: `Football Tips ${countryName}`,
  heroSubtitle: `Tips za leo, kesho na acca kwa ${countryName}.`,
  intro:
    `Karibu Football Tips ${countryName}. Pata tips za kila siku kwenye 1X2, BTTS, Over 1.5 na first half markets.`,
  seoBlocks: [
    {
      title: `Tips za bure kwa betting ${countryName}`,
      body:
        'Tunachambua form, injuries na motivation ili kukupa picks zenye value na odds poa.',
    },
    {
      title: 'Bet smart kwa data',
      body:
        'Tip bora hutokana na utafiti na discipline. Tumia tips kama guide kabla ya kubet.',
    },
  ],
});

const swahiliMarkets = {
  over15: {
    title: 'Over 1.5 Tips',
    subtitle: 'Mechi zenye nafasi ya mabao 2+',
    intro:
      'Over 1.5 ni market ya mabao 2+. Inafaa acca na single bets.',
  },
  btts: {
    title: 'BTTS Tips (GG/NG)',
    subtitle: 'Teams zote kufunga',
    intro:
      'BTTS tips zinaonyesha mechi zenye uwezekano wa teams zote kufunga.',
  },
  ht15: {
    title: 'First Half Over 1.5',
    subtitle: 'Mabao kipindi cha kwanza',
    intro:
      'Market ya first half over 1.5 kwa mechi zenye start ya kasi.',
  },
};

const portugueseContent = {
  heroTitle: 'Football Tips Mozambique',
  heroSubtitle: 'Dicas diarias para hoje e amanha.',
  intro:
    'Bem-vindo ao Football Tips Mozambique. Dicas de 1X2, BTTS, Over 1.5 e mercados do primeiro tempo.',
  seoBlocks: [
    {
      title: 'Dicas gratis de futebol em Mozambique',
      body:
        'Publicamos palpites diarios com foco em forma, lesoes e motivacao.',
    },
    {
      title: 'Aposte com dados',
      body:
        'Use as dicas como guia, compare odds e controle sua banca.',
    },
  ],
};

const portugueseMarkets = {
  over15: {
    title: 'Mais de 1.5 Gols',
    subtitle: 'Mercado de gols para accas',
    intro:
      'Mais de 1.5 destaca jogos com potencial de 2+ gols.',
  },
  btts: {
    title: 'Ambas Marcam (BTTS)',
    subtitle: 'Times com chance de marcar',
    intro:
      'BTTS indica jogos onde os dois times podem marcar.',
  },
  ht15: {
    title: '1a Parte Mais de 1.5',
    subtitle: 'Gols cedo na partida',
    intro:
      'Mercado de gols no primeiro tempo para jogos com inicio forte.',
  },
};

export const COUNTRIES = [
  {
    code: 'ke',
    name: 'Kenya',
    localLanguage: 'Swahili',
    locale: 'sw-KE',
    currency: 'KES',
    timezone: 'Africa/Nairobi',
    subdomain: 'ke',
    routes: {
      home: '/',
      today: '/leo',
      tomorrow: '/kesho',
      over15: '/over-15',
      btts: '/both-teams-to-score',
      ht15: '/under-over-15-first-half',
      league: '/kenya-premier-league',
    },
    labels: {
      navHome: 'Home',
      navToday: 'Leo',
      navTomorrow: 'Kesho',
      navOver15: 'Over 1.5',
      navBtts: 'BTTS',
      navHt15: 'HT 1.5',
      navLeague: 'Kenya Premier League',
      dayToday: 'Leo',
      dayTomorrow: 'Kesho',
      dayYesterday: 'Jana',
      leaguePreview: 'FKF Premier League Table',
      leagueCta: 'Full Table',
      timezoneLabel: 'EAT',
    },
    leagues: [
      {
        id: 276,
        name: 'Kenya Premier League',
        slug: 'kenya-premier-league',
        shortName: 'KPL',
      },
    ],
    seo: {
      title: 'Football Tips Kenya',
      description:
        'Pata betting tips Kenya kila siku: acca tips, BTTS, Over 1.5 na HT markets.',
      keywords:
        'football tips kenya, betting tips kenya, acca tips, btts tips, over 1.5',
    },
    content: swahiliContent('Kenya'),
    markets: swahiliMarkets,
  },
  {
    code: 'gh',
    name: 'Ghana',
    localLanguage: 'English',
    locale: 'en-GH',
    currency: 'GHS',
    timezone: 'Africa/Accra',
    subdomain: 'gh',
    routes: {
      home: '/',
      today: '/today',
      tomorrow: '/tomorrow',
      over15: '/over-15',
      btts: '/both-teams-to-score',
      ht15: '/first-half-over-15',
      league: '/ghana-premier-league',
    },
    labels: {
      navHome: 'Home',
      navToday: 'Today',
      navTomorrow: 'Tomorrow',
      navOver15: 'Over 1.5',
      navBtts: 'BTTS',
      navHt15: '1st Half Over 1.5',
      navLeague: 'Ghana Premier League',
      dayToday: 'Today',
      dayTomorrow: 'Tomorrow',
      dayYesterday: 'Yesterday',
      leaguePreview: 'Ghana Premier League Table',
      leagueCta: 'Full Table',
      timezoneLabel: 'GMT',
    },
    leagues: [
      {
        id: 39,
        name: 'Ghana Premier League',
        slug: 'ghana-premier-league',
        shortName: 'GPL',
      },
    ],
    seo: {
      title: 'Football Tips Ghana',
      description:
        'Free football tips for Ghana: acca picks, BTTS, over 1.5 and first half markets.',
      keywords:
        'football tips ghana, betting tips ghana, acca tips, btts tips, over 1.5',
    },
    content: defaultEnglishContent({ name: 'Ghana' }),
    markets: defaultEnglishMarkets(),
  },
  {
    code: 'mz',
    name: 'Mozambique',
    localLanguage: 'Portuguese',
    locale: 'pt-MZ',
    currency: 'MZN',
    timezone: 'Africa/Maputo',
    subdomain: 'mz',
    routes: {
      home: '/',
      today: '/hoje',
      tomorrow: '/amanha',
      over15: '/mais-de-15',
      btts: '/ambas-marcam',
      ht15: '/primeira-parte-mais-de-15',
      league: '/mocambola',
    },
    labels: {
      navHome: 'Inicio',
      navToday: 'Hoje',
      navTomorrow: 'Amanha',
      navOver15: 'Mais de 1.5',
      navBtts: 'Ambas Marcam',
      navHt15: '1a Parte 1.5',
      navLeague: 'Mocambola',
      dayToday: 'Hoje',
      dayTomorrow: 'Amanha',
      dayYesterday: 'Ontem',
      leaguePreview: 'Mocambola Table',
      leagueCta: 'Tabela Completa',
      timezoneLabel: 'CAT',
    },
    leagues: [
      {
        id: 140,
        name: 'Mocambola',
        slug: 'mocambola',
        shortName: 'MOC',
      },
    ],
    seo: {
      title: 'Football Tips Mozambique',
      description:
        'Dicas de futebol em Mozambique: palpites, BTTS, mais de 1.5 e mercados do primeiro tempo.',
      keywords:
        'football tips mozambique, dicas de futebol, btts, mais de 1.5, palpites',
    },
    content: portugueseContent,
    markets: portugueseMarkets,
  },
  {
    code: 'tz',
    name: 'Tanzania',
    localLanguage: 'Swahili',
    locale: 'sw-TZ',
    currency: 'TZS',
    timezone: 'Africa/Dar_es_Salaam',
    subdomain: 'tz',
    routes: {
      home: '/',
      today: '/leo',
      tomorrow: '/kesho',
      over15: '/over-15',
      btts: '/both-teams-to-score',
      ht15: '/under-over-15-first-half',
      league: '/tanzania-premier-league',
    },
    labels: {
      navHome: 'Home',
      navToday: 'Leo',
      navTomorrow: 'Kesho',
      navOver15: 'Over 1.5',
      navBtts: 'BTTS',
      navHt15: 'HT 1.5',
      navLeague: 'Tanzania PL',
      dayToday: 'Leo',
      dayTomorrow: 'Kesho',
      dayYesterday: 'Jana',
      leaguePreview: 'Tanzania Premier League Table',
      leagueCta: 'Full Table',
      timezoneLabel: 'EAT',
    },
    leagues: [
      {
        id: 567,
        name: 'Tanzania Premier League',
        slug: 'tanzania-premier-league',
        shortName: 'TPL',
      },
    ],
    seo: {
      title: 'Football Tips Tanzania',
      description:
        'Pata tips Tanzania: acca tips, BTTS, Over 1.5 na first half markets.',
      keywords:
        'football tips tanzania, betting tips tanzania, acca tips, btts tips',
    },
    content: swahiliContent('Tanzania'),
    markets: swahiliMarkets,
  },
  {
    code: 'ug',
    name: 'Uganda',
    localLanguage: 'English',
    locale: 'en-UG',
    currency: 'UGX',
    timezone: 'Africa/Kampala',
    subdomain: 'ug',
    routes: {
      home: '/',
      today: '/today',
      tomorrow: '/tomorrow',
      over15: '/over-15',
      btts: '/both-teams-to-score',
      ht15: '/first-half-over-15',
      league: '/uganda-premier-league',
    },
    labels: {
      navHome: 'Home',
      navToday: 'Today',
      navTomorrow: 'Tomorrow',
      navOver15: 'Over 1.5',
      navBtts: 'BTTS',
      navHt15: '1st Half Over 1.5',
      navLeague: 'Uganda Premier League',
      dayToday: 'Today',
      dayTomorrow: 'Tomorrow',
      dayYesterday: 'Yesterday',
      leaguePreview: 'Uganda Premier League Table',
      leagueCta: 'Full Table',
      timezoneLabel: 'EAT',
    },
    leagues: [
      {
        id: 78,
        name: 'Uganda Premier League',
        slug: 'uganda-premier-league',
        shortName: 'UPL',
      },
    ],
    seo: {
      title: 'Football Tips Uganda',
      description:
        'Free football tips for Uganda: acca picks, BTTS, over 1.5 and first half markets.',
      keywords:
        'football tips uganda, betting tips uganda, acca tips, btts tips',
    },
    content: defaultEnglishContent({ name: 'Uganda' }),
    markets: defaultEnglishMarkets(),
  },
  {
    code: 'ng',
    name: 'Nigeria',
    localLanguage: 'English',
    locale: 'en-NG',
    currency: 'NGN',
    timezone: 'Africa/Lagos',
    subdomain: 'ng',
    routes: {
      home: '/',
      today: '/today',
      tomorrow: '/tomorrow',
      over15: '/over-15',
      btts: '/both-teams-to-score',
      ht15: '/first-half-over-15',
      league: '/nigeria-premier-league',
    },
    labels: {
      navHome: 'Home',
      navToday: 'Today',
      navTomorrow: 'Tomorrow',
      navOver15: 'Over 1.5',
      navBtts: 'BTTS',
      navHt15: '1st Half Over 1.5',
      navLeague: 'Nigeria Premier League',
      dayToday: 'Today',
      dayTomorrow: 'Tomorrow',
      dayYesterday: 'Yesterday',
      leaguePreview: 'Nigeria Premier League Table',
      leagueCta: 'Full Table',
      timezoneLabel: 'WAT',
    },
    leagues: [
      {
        id: 61,
        name: 'Nigeria Premier League',
        slug: 'nigeria-premier-league',
        shortName: 'NPL',
      },
    ],
    seo: {
      title: 'Football Tips Nigeria',
      description:
        'Free football tips for Nigeria: acca picks, BTTS, over 1.5 and first half markets.',
      keywords:
        'football tips nigeria, betting tips nigeria, acca tips, btts tips',
    },
    content: defaultEnglishContent({ name: 'Nigeria' }),
    markets: defaultEnglishMarkets(),
  },
  {
    code: 'za',
    name: 'South Africa',
    localLanguage: 'English',
    locale: 'en-ZA',
    currency: 'ZAR',
    timezone: 'Africa/Johannesburg',
    subdomain: 'za',
    routes: {
      home: '/',
      today: '/today',
      tomorrow: '/tomorrow',
      over15: '/over-15',
      btts: '/both-teams-to-score',
      ht15: '/first-half-over-15',
      league: '/south-africa-premier-league',
    },
    labels: {
      navHome: 'Home',
      navToday: 'Today',
      navTomorrow: 'Tomorrow',
      navOver15: 'Over 1.5',
      navBtts: 'BTTS',
      navHt15: '1st Half Over 1.5',
      navLeague: 'South Africa League',
      dayToday: 'Today',
      dayTomorrow: 'Tomorrow',
      dayYesterday: 'Yesterday',
      leaguePreview: 'South Africa League Table',
      leagueCta: 'Full Table',
      timezoneLabel: 'SAST',
    },
    leagues: [
      {
        id: 288,
        name: 'South Africa Premier League',
        slug: 'south-africa-premier-league',
        shortName: 'PSL',
      },
    ],
    seo: {
      title: 'Football Tips South Africa',
      description:
        'Free football tips for South Africa: acca picks, BTTS, over 1.5 and first half markets.',
      keywords:
        'football tips south africa, betting tips south africa, acca tips, btts tips',
    },
    content: defaultEnglishContent({ name: 'South Africa' }),
    markets: defaultEnglishMarkets(),
  },
  {
    code: 'zm',
    name: 'Zambia',
    localLanguage: 'English',
    locale: 'en-ZM',
    currency: 'ZMW',
    timezone: 'Africa/Lusaka',
    subdomain: 'zm',
    routes: {
      home: '/',
      today: '/today',
      tomorrow: '/tomorrow',
      over15: '/over-15',
      btts: '/both-teams-to-score',
      ht15: '/first-half-over-15',
      league: '/zambia-super-league',
    },
    labels: {
      navHome: 'Home',
      navToday: 'Today',
      navTomorrow: 'Tomorrow',
      navOver15: 'Over 1.5',
      navBtts: 'BTTS',
      navHt15: '1st Half Over 1.5',
      navLeague: 'Zambia Super League',
      dayToday: 'Today',
      dayTomorrow: 'Tomorrow',
      dayYesterday: 'Yesterday',
      leaguePreview: 'Zambia Super League Table',
      leagueCta: 'Full Table',
      timezoneLabel: 'CAT',
    },
    leagues: [
      {
        id: 186,
        name: 'Zambia Super League',
        slug: 'zambia-super-league',
        shortName: 'ZSL',
      },
    ],
    seo: {
      title: 'Football Tips Zambia',
      description:
        'Free football tips for Zambia: acca picks, BTTS, over 1.5 and first half markets.',
      keywords:
        'football tips zambia, betting tips zambia, acca tips, btts tips',
    },
    content: defaultEnglishContent({ name: 'Zambia' }),
    markets: defaultEnglishMarkets(),
  },
  {
    code: 'rw',
    name: 'Rwanda',
    localLanguage: 'English',
    locale: 'en-RW',
    currency: 'RWF',
    timezone: 'Africa/Kigali',
    subdomain: 'rw',
    routes: {
      home: '/',
      today: '/today',
      tomorrow: '/tomorrow',
      over15: '/over-15',
      btts: '/both-teams-to-score',
      ht15: '/first-half-over-15',
      league: '/rwanda-premier-league',
    },
    labels: {
      navHome: 'Home',
      navToday: 'Today',
      navTomorrow: 'Tomorrow',
      navOver15: 'Over 1.5',
      navBtts: 'BTTS',
      navHt15: '1st Half Over 1.5',
      navLeague: 'Rwanda Premier League',
      dayToday: 'Today',
      dayTomorrow: 'Tomorrow',
      dayYesterday: 'Yesterday',
      leaguePreview: 'Rwanda Premier League Table',
      leagueCta: 'Full Table',
      timezoneLabel: 'CAT',
    },
    leagues: [
      {
        id: 332,
        name: 'Rwanda Premier League',
        slug: 'rwanda-premier-league',
        shortName: 'RPL',
      },
    ],
    seo: {
      title: 'Football Tips Rwanda',
      description:
        'Free football tips for Rwanda: acca picks, BTTS, over 1.5 and first half markets.',
      keywords:
        'football tips rwanda, betting tips rwanda, acca tips, btts tips',
    },
    content: defaultEnglishContent({ name: 'Rwanda' }),
    markets: defaultEnglishMarkets(),
  },
  {
    code: 'et',
    name: 'Ethiopia',
    localLanguage: 'Amharic',
    locale: 'am-ET',
    currency: 'ETB',
    timezone: 'Africa/Addis_Ababa',
    subdomain: 'et',
    routes: {
      home: '/',
      today: '/today',
      tomorrow: '/tomorrow',
      over15: '/over-15',
      btts: '/both-teams-to-score',
      ht15: '/first-half-over-15',
      league: '/ethiopia-premier-league',
    },
    labels: {
      navHome: 'Home',
      navToday: 'Today',
      navTomorrow: 'Tomorrow',
      navOver15: 'Over 1.5',
      navBtts: 'BTTS',
      navHt15: '1st Half Over 1.5',
      navLeague: 'Ethiopia Premier League',
      dayToday: 'Today',
      dayTomorrow: 'Tomorrow',
      dayYesterday: 'Yesterday',
      leaguePreview: 'Ethiopia Premier League Table',
      leagueCta: 'Full Table',
      timezoneLabel: 'EAT',
    },
    leagues: [
      {
        id: 315,
        name: 'Ethiopia Premier League',
        slug: 'ethiopia-premier-league',
        shortName: 'EPL',
      },
    ],
    seo: {
      title: 'Football Tips Ethiopia',
      description:
        'Free football tips for Ethiopia: acca picks, BTTS, over 1.5 and first half markets.',
      keywords:
        'football tips ethiopia, betting tips ethiopia, acca tips, btts tips',
    },
    content: defaultEnglishContent({ name: 'Ethiopia' }),
    markets: defaultEnglishMarkets(),
  },
  {
    code: 'cm',
    name: 'Cameroon',
    localLanguage: 'French',
    locale: 'fr-CM',
    currency: 'XAF',
    timezone: 'Africa/Douala',
    subdomain: 'cm',
    routes: {
      home: '/',
      today: '/today',
      tomorrow: '/tomorrow',
      over15: '/over-15',
      btts: '/both-teams-to-score',
      ht15: '/first-half-over-15',
      league: '/cameroon-elite-one',
    },
    labels: {
      navHome: 'Home',
      navToday: 'Today',
      navTomorrow: 'Tomorrow',
      navOver15: 'Over 1.5',
      navBtts: 'BTTS',
      navHt15: '1st Half Over 1.5',
      navLeague: 'Cameroon Elite One',
      dayToday: 'Today',
      dayTomorrow: 'Tomorrow',
      dayYesterday: 'Yesterday',
      leaguePreview: 'Cameroon Elite One Table',
      leagueCta: 'Full Table',
      timezoneLabel: 'WAT',
    },
    leagues: [
      {
        id: 313,
        name: 'Cameroon Elite One',
        slug: 'cameroon-elite-one',
        shortName: 'CEM',
      },
    ],
    seo: {
      title: 'Football Tips Cameroon',
      description:
        'Free football tips for Cameroon: acca picks, BTTS, over 1.5 and first half markets.',
      keywords:
        'football tips cameroon, betting tips cameroon, acca tips, btts tips',
    },
    content: defaultEnglishContent({ name: 'Cameroon' }),
    markets: defaultEnglishMarkets(),
  },
];

export const DEFAULT_COUNTRY_CODE = 'za';

export const COUNTRY_MAP = COUNTRIES.reduce((acc, country) => {
  acc[country.code] = country;
  return acc;
}, {});
