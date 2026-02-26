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
        id: 570,
        name: 'Ghana Premier League',
        isAvailable: true,
        slug: 'ghana-premier-league',
        shortName: 'GPL',
      },
    ],
    seo: {
      title: 'Football Tips Ghana',
      description:
        'Free football tips for Ghana: acca picks, BTTS, over 1.5 and first half markets.',
      keywords:
        'football tips ghana, betting tips ghana, acca tips, btts tips',
    },
    content: {
      heroTitle: 'Football Tips Ghana',
      heroSubtitle: 'Daily football predictions built for Ghanaian punters.',
      intro:
        `We blend Ghana Premier League insight with Europe's best leagues to deliver value-driven tips that fit local kick-off times and betting styles.`,
      seoBlocks: [
        {
          title: 'Trusted Ghana football predictions',
          body:
            'Lineups, tempo, travel, and weather go into every pick. Expect clear reasoning on 1X2, BTTS, and goals for GPL and top European fixtures.',
        },
        {
          title: 'Bankroll discipline over wild odds',
          body:
            'We focus on sustainable staking in GHS, avoiding desperate chases and highlighting value ranges that work for both singles and short accas.',
        },
      ],
      longformTitle: 'Ghana betting insights',
      longformIntro:
        'Extra detail on how we build predictions, manage GHS bankrolls, and pick markets that suit Ghanaian punters.',
      articles: [
        {
          title: 'How we build Ghana football predictions',
          body:
            'We start with local intel on pitches, travel, and motivation, then filter it through data like recent xG, shot volume, and set-piece strength. Picks ship with short notes so you know why a GPL or Premier League game makes sense, all timed for GMT kick-offs.',
        },
        {
          title: 'Acca building and bankroll tips',
          body:
            'Smart slips in Ghana lean on three to five legs with a steady unit size. Keep 1-3% of your bankroll per stake, split risky games into singles, and avoid doubling stakes after a near-miss. Consistency beats chasing a miracle ticket.',
        },
        {
          title: 'Reading popular markets',
          body:
            `Use 1X2 when there's a clear gap in quality, BTTS when both sides attack, and Over 1.5 as your steady anchor. First-half over 1.5 is reserved for fixtures that start fast-think pressing sides or rivalry games where both managers go bold early.`,
        },
      ],
    },
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
      over15: '/mais-de-15-gols',
      btts: '/ambas-marcam',
      ht15: '/primeira-parte-mais-15',
      league: '/mocambola',
    },
    labels: {
      navHome: 'Home',
      navToday: 'Hoje',
      navTomorrow: 'Amanhã',
      navOver15: 'Mais 1.5',
      navBtts: 'Ambas Marcam',
      navHt15: '1ª Parte 1.5',
      navLeague: 'Moçambola',
      dayToday: 'Hoje',
      dayTomorrow: 'Amanhã',
      dayYesterday: 'Ontem',
      leaguePreview: 'Classificação Moçambola',
      leagueCta: 'Tabela Completa',
      timezoneLabel: 'CAT',
    },
    leagues: [
      {
        id: 254,
        name: 'Mozambique League',
        isAvailable: false,
        slug: 'mocambola',
        shortName: 'MOC',
      },
    ],
    seo: {
      title: 'Football Tips Mozambique',
      description:
        'Dicas gratuitas de futebol para Moçambique: acca picks, BTTS, over 1.5 e mercados de primeiro tempo.',
      keywords:
        'palpites mocambique, dicas de futebol mocambique, btts, over 1.5',
    },
    content: {
      heroTitle: 'Football Tips Mozambique',
      heroSubtitle: 'Palpites diários em português com foco em Moçambola e ligas europeias.',
      intro:
        'Analisamos forma, ritmo e ausências para entregar palpites claros em 1X2, Ambas Marcam e gols. Tudo em português simples para apostar com confiança.',
      seoBlocks: [
        {
          title: 'Palpites de futebol para Moçambique',
          body:
            'Misturamos estatísticas, notícias locais e estilo de jogo para sugerir entradas seguras. Cada pick traz contexto para você decidir rápido.',
        },
        {
          title: 'Gestão de banca em meticais',
          body:
            'Recomendamos unidades pequenas em MZN, evitando correria por odds altas e preferindo valor constante em simples e accas curtas.',
        },
      ],
      longformTitle: 'Estratégia de apostas em Moçambique',
      longformIntro:
        'Mais detalhes sobre como criamos palpites, cuidamos da banca em MZN e escolhemos mercados que fazem sentido para a comunidade apostadora local.',
      articles: [
        {
          title: 'Como criamos palpites confiáveis',
          body:
            'Usamos ritmo das equipas da Moçambola, médias de gols marcados e sofridos, gramado e viagens. Só publicamos quando há valor claro, e destacamos horários para facilitar o planeamento do dia.',
        },
        {
          title: 'Dicas para lucrar com disciplina',
          body:
            'Defina unidades em meticais e mantenha a mesma stake, mesmo após um red. Procure odds entre 1.60 e 2.20, divida accas em dois bilhetes menores e use cash out apenas se protege lucro real.',
        },
        {
          title: 'Mercados explicados',
          body:
            '1X2 serve para favoritos claros; Ambas Marcam (GG/NG) quando os dois ataques estão vivos; Over 1.5 é a base segura; Over 1.5 HT só para jogos de ritmo forte e equipas que começam pressionando.',
        },
      ],
    },
    markets: portugueseMarkets,
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
        id: 585,
        name: 'Uganda Premier League',
        isAvailable: true,
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
    content: {
      heroTitle: 'Football Tips Uganda',
      heroSubtitle: 'Daily football tips tuned to Ugandan kick-off times.',
      intro:
        `We track the Uganda Premier League plus Europe's top fixtures to provide balanced picks for mobile bettors across the country.`,
      seoBlocks: [
        {
          title: 'Value-driven Ugandan predictions',
          body:
            'Form, absences, travel, and motivation power every call. Expect reliable 1X2, BTTS, and over 1.5 options with context you can skim fast.',
        },
        {
          title: 'Small stakes, steady growth',
          body:
            'Protect your bankroll in UGX with flat stakes and short accas. No chasing after losses-consistent units keep you in the game longer.',
        },
      ],
      longformTitle: 'Uganda betting insights',
      longformIntro:
        'How we translate UPL knowledge into smart picks, keep UGX bankrolls steady, and pick markets that fit local kick-off rhythms.',
      articles: [
        {
          title: 'Building Uganda-friendly picks',
          body:
            'Kick-off times are converted to EAT, and we check turf, weather, and travel before recommending anything. We mix UPL insight with Europe so you can keep tickets alive from early afternoon to late night.',
        },
        {
          title: 'Bankroll moves that keep you in the game',
          body:
            `Keep stakes at 1-3% of your float, break risky games into singles, and limit accas to three or four legs. If odds move sharply, we'll note it so you can decide whether to wait or hedge.`,
        },
        {
          title: 'Using BTTS, Over 1.5 and HT plays',
          body:
            'BTTS works when both sides commit to attack; Over 1.5 anchors most slips; HT over 1.5 is only for fixtures where teams start fast, like high-tempo derbies or sides that press from the whistle.',
        },
      ],
    },
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
      league: '/nigeria-professional-football-league',
    },
    labels: {
      navHome: 'Home',
      navToday: 'Today',
      navTomorrow: 'Tomorrow',
      navOver15: 'Over 1.5',
      navBtts: 'BTTS',
      navHt15: '1st Half Over 1.5',
      navLeague: 'Nigeria Professional Football League',
      dayToday: 'Today',
      dayTomorrow: 'Tomorrow',
      dayYesterday: 'Yesterday',
      leaguePreview: 'NPFL Table',
      leagueCta: 'Full Table',
      timezoneLabel: 'WAT',
    },
    leagues: [
      {
        id: 399,
        name: 'Nigeria Professional Football League',
        isAvailable: false,
        slug: 'nigeria-professional-football-league',
        shortName: 'NPFL',
      },
    ],
    seo: {
      title: 'Football Tips Nigeria',
      description:
        'Free football tips for Nigeria: acca picks, BTTS, over 1.5 and first half markets.',
      keywords:
        'football tips nigeria, betting tips nigeria, acca tips, btts tips',
    },
    content: {
      heroTitle: 'Football Tips Nigeria',
      heroSubtitle: 'Daily football predictions tailored for Nigerian punters.',
      intro:
        'We cover NPFL form and major European leagues, delivering sharp picks with context so you can place confident bets without digging for info.',
      seoBlocks: [
        {
          title: 'Local + global insight',
          body:
            'We account for NPFL travel, home advantage, and weather, then blend that with European metrics to surface reliable 1X2, BTTS, and over markets.',
        },
        {
          title: 'Respect the bankroll',
          body:
            'Stake in NGN with a steady unit size, avoid chasing after narrow losses, and aim for value odds that sit between 1.60 and 2.40.',
        },
      ],
      longformTitle: 'Nigeria betting insights',
      longformIntro:
        'How we shape NPFL and European picks for Nigerian bettors, manage naira bankrolls, and choose markets that reward discipline.',
      articles: [
        {
          title: 'How we craft Nigeria-ready tips',
          body:
            'Travel to tricky away grounds, lineup news, and motivation are checked first. We filter everything through data and post concise notes so you can make a decision fast, with kickoff times aligned to WAT.',
        },
        {
          title: 'Smart ways to grow bankroll in naira',
          body:
            'Use flat staking, let singles carry most of your turnover, and keep accas to manageable sizes. If a leg looks shaky, splitting into two tickets beats forcing an eight-leg parlay.',
        },
        {
          title: 'Picking the right market',
          body:
            `Use 1X2 when there's a real gulf, BTTS when both sides press, Over 1.5 as your steady anchor, and HT over 1.5 only for high-tempo derbies or continental games where both teams start aggressively.`,
        },
      ],
    },
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
      league: '/south-africa-premier-division',
    },
    labels: {
      navHome: 'Home',
      navToday: 'Today',
      navTomorrow: 'Tomorrow',
      navOver15: 'Over 1.5',
      navBtts: 'BTTS',
      navHt15: '1st Half Over 1.5',
      navLeague: 'DStv Premiership',
      dayToday: 'Today',
      dayTomorrow: 'Tomorrow',
      dayYesterday: 'Yesterday',
      leaguePreview: 'DStv Premiership Table',
      leagueCta: 'Full Table',
      timezoneLabel: 'SAST',
    },
    leagues: [
      {
        id: 288,
        name: 'South African Premier Division',
        isAvailable: true,
        slug: 'south-africa-premier-division',
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
    content: {
      heroTitle: 'Football Tips South Africa',
      heroSubtitle: 'Predictions for PSL and global leagues with South African context.',
      intro:
        'We follow DStv Premiership trends and pair them with Champions League and EPL data to deliver practical picks you can act on quickly.',
      seoBlocks: [
        {
          title: 'Data-led PSL + international picks',
          body:
            'Defensive records, altitude travel, and schedule congestion are factored in before we suggest 1X2 or goal markets. Each pick comes with a note so you see the logic.',
        },
        {
          title: 'Profit with structure, not impulse',
          body:
            'Stake in ZAR with a unit system, keep accas short, and let singles drive most of your turnover. We avoid reckless long shots that drain bankrolls.',
        },
      ],
      longformTitle: 'South Africa betting strategy',
      longformIntro:
        'How we read PSL tempo, manage ZAR bankrolls, and decide when to use 1X2, BTTS, or goal lines for local punters.',
      articles: [
        {
          title: 'Our approach to South African predictions',
          body:
            'We lean on xG trends, set-piece strength, and home advantage-whether it is Loftus altitude or Cape Town wind-plus verified team news before recommending anything.',
        },
        {
          title: 'Bankroll rhythm for SA punters',
          body:
            `Stick to 1-2% stakes, rotate between single bets and three-leg builders, and review results weekly instead of chasing today's losses. Discipline keeps you profitable.`,
        },
        {
          title: 'Market guide: 1X2 vs goals',
          body:
            'PSL can be tight, so BTTS No and cautious goal lines often make sense. Over 1.5 fits games with fast wingers, while HT over 1.5 is reserved for cup ties or fixtures where both managers set a high tempo.',
        },
      ],
    },
    markets: defaultEnglishMarkets(),
  },
  {
    code: 'mw',
    name: 'Malawi',
    localLanguage: 'English',
    locale: 'en-MW',
    currency: 'MWK',
    timezone: 'Africa/Blantyre',
    subdomain: 'mw',
    routes: {
      home: '/',
      today: '/today',
      tomorrow: '/tomorrow',
      over15: '/over-15',
      btts: '/both-teams-to-score',
      ht15: '/first-half-over-15',
      league: '/tnm-super-league',
    },
    labels: {
      navHome: 'Home',
      navToday: 'Today',
      navTomorrow: 'Tomorrow',
      navOver15: 'Over 1.5',
      navBtts: 'BTTS',
      navHt15: '1st Half Over 1.5',
      navLeague: 'TNM Super League',
      dayToday: 'Today',
      dayTomorrow: 'Tomorrow',
      dayYesterday: 'Yesterday',
      leaguePreview: 'TNM Super League Table',
      leagueCta: 'Full Table',
      timezoneLabel: 'CAT',
    },
    leagues: [
      {
        id: 241,
        name: 'TNM Super League',
        isAvailable: false,
        slug: 'tnm-super-league',
        shortName: 'TNM',
      },
    ],
    seo: {
      title: 'Football Tips Malawi',
      description:
        'Free football tips for Malawi: acca picks, BTTS, over 1.5 and first half markets.',
      keywords:
        'football tips malawi, betting tips malawi, acca tips, btts tips, tnm super league tips',
    },
    content: {
      heroTitle: 'Football Tips Malawi',
      heroSubtitle: 'Daily football predictions built for Malawian punters.',
      intro:
        `We track TNM Super League form and blend it with Europe's top fixtures to give you sharp picks that fit local kick-off times.`,
      seoBlocks: [
        {
          title: 'Value-first Malawi predictions',
          body:
            'Team news, travel, and tempo go into every call. Expect clear reasoning on 1X2, BTTS, and goals for TNM games and the biggest leagues worldwide.',
        },
        {
          title: 'Bankroll discipline in MWK',
          body:
            'Flat stakes and short accas help you avoid chasing. We focus on value ranges that work for singles and tight multis.',
        },
      ],
      longformTitle: 'Malawi betting insights',
      longformIntro:
        'How we study TNM fixtures, manage MWK bankrolls, and pick markets that reward disciplined Malawian bettors.',
      articles: [
        {
          title: 'How we research TNM Super League games',
          body:
            'Home advantage, travel to lakeside stadiums, and recent goal trends are checked before we recommend a side or goals angle. Kick-off times are aligned to CAT so you can plan slips early.',
        },
        {
          title: 'Bankroll habits that keep you profitable',
          body:
            'Keep stakes at 1-3% per bet, split risky opinions into singles, and keep accas to three or four legs. Avoid doubling after a loss-patience protects your roll.',
        },
        {
          title: 'When to use 1X2, BTTS, and Over markets',
          body:
            '1X2 fits when quality gaps are obvious, BTTS for open attacking sides, and Over 1.5 as your steady anchor. First-half over 1.5 is reserved for fixtures where both teams start fast.',
        },
      ],
    },
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
        id: 400,
        name: 'Zambia Super League',
        isAvailable: true,
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
    content: {
      heroTitle: 'Football Tips Zambia',
      heroSubtitle: 'Daily picks for the Zambian Super League and beyond.',
      intro:
        'We blend local knowledge with African and European fixtures to keep your slips lively without overextending the bankroll.',
      seoBlocks: [
        {
          title: 'Grounded Super League insight',
          body:
            'Travel to Ndola or Kitwe, pitch conditions, and defensive streaks are factored in before we recommend a side or a goal angle.',
        },
        {
          title: 'Value-first staking',
          body:
            'Small, steady units in ZMW and medium odds keep variance in check. We avoid wild long shots and highlight edges you can repeat.',
        },
      ],
      longformTitle: 'Zambia betting playbook',
      longformIntro:
        'How we break down ZSL fixtures, keep ZMW bankrolls healthy, and select markets that actually fit the matchup.',
      articles: [
        {
          title: 'How we study Zambian fixtures',
          body:
            'We review midweek fatigue, recent goal trends, and key suspensions before tipping 1X2 or goals. Notes include why a favorite is trustworthy or why a goals angle beats a risky moneyline.',
        },
        {
          title: 'Bankroll habits that win long term',
          body:
            'Use a fixed unit, avoid chasing after red slips, and split accas into three or four legs max. Singles should carry your strongest opinions.',
        },
        {
          title: 'When to use BTTS or Over markets',
          body:
            'BTTS works when both sides attack-think ZESCO versus Power Dynamos. Over 1.5 is a safer cover, while HT over 1.5 only fits fixtures that typically start fast.',
        },
      ],
    },
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
        id: 405,
        name: 'Rwanda Premier League',
        isAvailable: true,
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
    content: {
      heroTitle: 'Football Tips Rwanda',
      heroSubtitle: 'Straightforward tips for the Rwanda Premier League and top European games.',
      intro:
        `Local context plus big-league data keeps your slips balanced. We focus on steady picks with clear reasons you can trust.`,
      seoBlocks: [
        {
          title: 'Reliable Rwanda predictions',
          body:
            'Form, suspensions, motivation, and travel are reviewed before we post. Expect concise guidance on 1X2, BTTS, and overs.',
        },
        {
          title: 'Steady bankroll mindset',
          body:
            'Small units in RWF and short accas protect your roll. We avoid forcing bets when the edge is thin.',
        },
      ],
      longformTitle: 'Rwanda betting insights',
      longformIntro:
        `How we research Rwanda Premier League matches, protect bankrolls in RWF, and pick markets that match each fixture's tempo.`,
      articles: [
        {
          title: 'Inside our Rwanda research',
          body:
            `Training updates, travel to Huye or Rubavu, and weather sit alongside stats like shot volume and set pieces. We publish when there's a genuine angle you can exploit.`,
        },
        {
          title: 'Accas vs singles for Rwanda punters',
          body:
            'Use singles for your strongest edges and accas as boosters with three or four legs. Consistent staking beats chasing a big payday.',
        },
        {
          title: 'Choosing markets with intent',
          body:
            'BTTS fits open, attacking sides; Over 1.5 works as a base; HT over 1.5 is saved for derby-style fixtures that start hot. Matching market to matchup is how you stay profitable.',
        },
      ],
    },
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
        id: 363,
        name: 'Ethiopia Premier League',
        isAvailable: true,
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
    content: {
      heroTitle: 'Football Tips Ethiopia',
      heroSubtitle: 'Predictions tuned to Ethiopia Premier League pace.',
      intro:
        'We combine altitude-aware local insight with European league analytics to deliver clear, confident picks.',
      seoBlocks: [
        {
          title: 'Context-rich Ethiopia picks',
          body:
            'Altitude, travel, and defensive shapes inform whether we lean 1X2 or goals. We highlight why a line offers value before you bet.',
        },
        {
          title: 'Bankroll calm in ETB',
          body:
            'Avoid chasing; set unit sizes in birr, and review results weekly. Sustainable staking keeps you in profit longer.',
        },
      ],
      longformTitle: 'Ethiopia betting guide',
      longformIntro:
        'How we balance altitude effects, bankroll control in ETB, and the right markets for Ethiopia Premier League games.',
      articles: [
        {
          title: 'How we read Ethiopia Premier League games',
          body:
            `We check altitude impact, fixture congestion, and recent goal trends before tipping. Injury and suspension news are verified so you know what you're backing.`,
        },
        {
          title: 'Growing bankroll without stress',
          body:
            'Keep stakes small in ETB, mix singles with short multis, and avoid doubling after a loss. A calm plan beats emotional betting.',
        },
        {
          title: 'Market selection explained',
          body:
            'Over 1.5 anchors many accas, BTTS works when both teams open up, and HT over 1.5 is reserved for high-tempo clubs like Saint George against top rivals.',
        },
      ],
    },
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
        isAvailable: false,
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
    content: {
      heroTitle: 'Football Tips Cameroon',
      heroSubtitle: 'Picks for Cameroon Elite One plus top continental action.',
      intro:
        'Local match insight mixed with CAF and European fixtures gives you balanced slips with clear reasoning.',
      seoBlocks: [
        {
          title: 'Informed Cameroon predictions',
          body:
            'Travel, humidity, and squad rotation are considered before we recommend a result or goals market. You see the why behind every pick.',
        },
        {
          title: 'Protecting bankroll in XAF',
          body:
            'Flat stakes, short accas, and patience beat risky chases. We call out when a game is best left alone.',
        },
      ],
      longformTitle: 'Cameroon betting insights',
      longformIntro:
        'How we break down Elite One fixtures, protect bankrolls in XAF, and match markets to each game state.',
      articles: [
        {
          title: 'Our Elite One analysis routine',
          body:
            'We track form swings, coaching changes, and pitch conditions before posting tips. If a venue slows games down, we adjust markets accordingly.',
        },
        {
          title: 'Money management for Cameroonian bettors',
          body:
            'Keep a consistent unit in CFA francs, limit parlays to three or four legs, and let singles carry most of your profit. Emotional staking is how bankrolls disappear.',
        },
        {
          title: 'Markets and when to use them',
          body:
            '1X2 fits strong home favorites, BTTS shines in explosive derbies, Over 1.5 is a safety net, and HT over 1.5 only suits fixtures where both sides start quickly.',
        },
      ],
    },
    markets: defaultEnglishMarkets(),
  },
];

export const DEFAULT_COUNTRY_CODE = 'za';

export const COUNTRY_MAP = COUNTRIES.reduce((acc, country) => {
  acc[country.code] = country;
  return acc;
}, {});
