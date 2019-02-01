const url = window.location.toString();

function decrap(url) {
  const regexes = [
    /(?:ref|qid|sr|keywords|pd_.*?|pf_.*?|refRID|psc|_encoding).*?(?:\&|$)/gi,  // Amazon
    /(?:utm_.*?)(\&|$)/gi, // Google utm
    /(?:fbclid|gclid)\=.*?$/gi, // Facebook bbclid / Google gclid
    /(?:__ar|pct|jaehuid).*?(?:\&|$)/gi, // Qoo10
    /(?:version|scm|spm|item_id|abtest|from|acm|pos|abbucket|up_id|wh_weex|mp\=).*?(?:\&|$)/gi, // Lazada
    /(?:\?|\&)$/gi, // Trailing ? or &
  ];

  regexes.forEach(r => {
    url = url.replace(r, '');
  })

  return url;
}

window.history.pushState(null, '', decrap(url));
