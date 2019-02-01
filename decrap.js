const amzRegex = /(?:ref|qid|sr|keywords|pd_.*?|pf_.*?|refRID|psc|_encoding).*?(?:\&|$)/gi;
const googleRegex = /(?:utm_|fbclid)(?:.*)(?:&|\?|\#)/gi;
const fbRegex = /fbclid\=.*?$/gi;
const trailingQuestionMark = /\?$/gi;

var decrapped = url.replace(amzRegex, '')
  .replace(googleRegex, '')
  .replace(fbRegex, '')
  .replace(trailingQuestionMark, '');

console.log('decrapped', decrapped);
window.history.pushState(null, '', decrapped);
