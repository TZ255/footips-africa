import fametipsModel from '../../models/fametips.js';
import correctScoreModel from '../../models/correctScoreModel.js';
import MikekaTipsModel from '../../models/mikeka-tips.js';

const DEFAULT_TZ = 'Africa/Nairobi';

function dateStrings(timezone = DEFAULT_TZ) {
  const now = new Date();
  const today = now.toLocaleDateString('en-GB', { timeZone: timezone });

  const yest = new Date();
  yest.setDate(yest.getDate() - 1);
  const yesterday = yest.toLocaleDateString('en-GB', { timeZone: timezone });

  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const tomorrow = tomorrowDate.toLocaleDateString('en-GB', { timeZone: timezone });

  return { today, yesterday, tomorrow };
}

function emptyBuckets() {
  return { yesterday: [], today: [], tomorrow: [] };
}

function normalizePrediction(prediction) {
  switch ((prediction || '').toUpperCase()) {
    case 'HOME WIN':
      return '1';
    case 'AWAY WIN':
      return '2';
    case 'DRAW':
      return 'X';
    case 'YES':
      return 'BTTS: Yes';
    case 'NO':
      return 'BTTS: No';
    default:
      return prediction;
  }
}

function mapTip(doc, prediction) {
  const normalized = normalizePrediction(prediction || doc.bet || doc.tip);
  return {
    match: doc.match,
    league: doc.league,
    prediction: normalized,
    kickoff: doc.time,
    dateLabel: doc.siku || doc.date,
    explanation: doc.expl,
  };
}

export async function getMegaTips(timezone) {
  const { today, yesterday, tomorrow } = dateStrings(timezone);
  const docs = await fametipsModel
    .find({ siku: { $in: [today, yesterday, tomorrow] } })
    .sort('time')
    .lean()
    .cache(600);

  const buckets = emptyBuckets();
  docs.forEach((doc) => {
    if (doc.siku === today) buckets.today.push(mapTip(doc));
    if (doc.siku === yesterday) buckets.yesterday.push(mapTip(doc));
    if (doc.siku === tomorrow) buckets.tomorrow.push(mapTip(doc));
  });

  return buckets;
}

export async function getOver15Tips(timezone) {
  const { today, yesterday, tomorrow } = dateStrings(timezone);
  const overHome = ['3:0', '3:1', '4:0', '4:1', '4:2', '4:3', '5:0', '5:1', '5:2', '5:3'];
  const overAway = ['0:3', '1:3', '1:4', '2:4', '3:4', '0:4', '1:5', '2:5', '3:5', '0:5'];
  const docs = await correctScoreModel
    .find({ siku: { $in: [today, yesterday, tomorrow] }, tip: { $in: [...overHome, ...overAway] }, time: { $gt: '12:00' } })
    .sort('time')
    .lean()
    .cache(600);

  const buckets = emptyBuckets();
  docs.forEach((doc) => {
    const tip = mapTip(doc, 'Over 1.5');
    if (doc.siku === today) buckets.today.push(tip);
    if (doc.siku === yesterday) buckets.yesterday.push(tip);
    if (doc.siku === tomorrow) buckets.tomorrow.push(tip);
  });

  return buckets;
}

export async function getBttsTips(timezone) {
  const { today, yesterday, tomorrow } = dateStrings(timezone);
  const yymmdd_today = today.split('/').reverse().join('-');
  const yymmdd_yesterday = yesterday.split('/').reverse().join('-');
  const yymmdd_tomorrow = tomorrow.split('/').reverse().join('-');

  const days = [yymmdd_today, yymmdd_yesterday, yymmdd_tomorrow];
  const bttsScores = ['1:3', '2:3', '2:2', '3:2', '1:4', '2:4', '4:2', '4:3']
  const bttsNo = ["0:0", "1:0"]

  const docs = await MikekaTipsModel
    .find({ date: { $in: days }, score: { $in: [...bttsScores, ...bttsNo] } })
    .sort('time')
    .lean()
    .cache(600);

  const buckets = emptyBuckets();
  docs.forEach((doc) => {
    const tip = mapTip(doc, bttsScores.includes(doc.score) ? 'BTTS: Yes' : 'BTTS: No');
    if (doc.date === yymmdd_today) buckets.today.push(tip);
    if (doc.date === yymmdd_yesterday) buckets.yesterday.push(tip);
    if (doc.date === yymmdd_tomorrow) buckets.tomorrow.push(tip);
  });

  return buckets;
}

export async function getHt15Tips(timezone) {
  const { today, yesterday, tomorrow } = dateStrings(timezone);
  const under = ['0:0', '1:0', '0:1', '1:1'];
  const over = ['4:2', '2:4', '5:1', '5:2'];
  const docs = await correctScoreModel
    .find({ siku: { $in: [today, yesterday, tomorrow] }, tip: { $in: [...under, ...over] } })
    .sort('time')
    .lean()
    .cache(600);

  const buckets = emptyBuckets();
  docs.forEach((doc) => {
    let prediction = doc.tip;
    if (under.includes(doc.tip)) prediction = 'Under 1.5 HT';
    if (over.includes(doc.tip)) prediction = 'Over 1.5 HT';
    const tip = mapTip(doc, prediction);
    if (doc.siku === today) buckets.today.push(tip);
    if (doc.siku === yesterday) buckets.yesterday.push(tip);
    if (doc.siku === tomorrow) buckets.tomorrow.push(tip);
  });

  return buckets;
}

export async function getCorrectScoreTips(timezone) {
  const { today, yesterday, tomorrow } = dateStrings(timezone);
  const yyyyMmDd = (d) => d.split('/').reverse().join('-');
  const days = [yyyyMmDd(today), yyyyMmDd(yesterday), yyyyMmDd(tomorrow)];

  const docs = await correctScoreModel
    .find({ date: { $in: days }, score: { $ne: null } })
    .sort('time')
    .lean()
    .cache(600);

  const buckets = emptyBuckets();
  docs.forEach((doc) => {
    const tip = mapTip(doc, doc.score);
    if (doc.date === days[0]) buckets.today.push(tip);
    if (doc.date === days[1]) buckets.yesterday.push(tip);
    if (doc.date === days[2]) buckets.tomorrow.push(tip);
  });

  return buckets;
}
