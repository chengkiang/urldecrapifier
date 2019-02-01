const amzRegex = /(?:ref|qid|sr|keywords|pd_.*?|pf_.*?|refRID|psc|_encoding).*?(?:\&|$)/gi;
const googleRegex = /(?:utm_|fbclid)(?:.*)(?:&|\?|\#)/gi;
const fbRegex = /fbclid\=.*?$/gi;
const qoo10Regex1 = /(?:__ar|pct|jaehuid).*?(?:\&|$)/gi;

const trailingQuestionMark = /\?$/gi;
const trailingAmpersand = /\&$/gi;

var decrapped = window.location.toString().replace(amzRegex, '')
  .replace(googleRegex, '')
  .replace(fbRegex, '')
  .replace(qoo10Regex1, '')
  .replace(trailingQuestionMark, '')
  .replace(trailingAmpersand, '');

console.log('decrapped', decrapped);
window.history.pushState(null, '', decrapped);
