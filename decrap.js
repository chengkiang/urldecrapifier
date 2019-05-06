const url = window.location.toString();

function decrap(url) {
  const regexes = [
    /(?:ref\=|qid|sr\=|keywords|pd_.*?|pf_.*?|refRID|psc|_encoding).*?(?:\&|$)/gi,  // Amazon
    /(?:utm_.*?)(\&|$)/gi, // Google utm
    /(?:fbclid|gclid)\=.*?$/gi, // Facebook bbclid / Google gclid
    /(?:__ar|pct|jaehuid).*?(?:\&|$)/gi, // Qoo10
    /(?:version|scm|spm|item_id|abtest|from|acm|pos|abbucket|up_id|wh_weex|mp|laz_trackid|hybrid|pvid|clickTrackInfo|search)\=.*?(?:\&|$)/gi, // Lazada
    /(?:mkt_tok)\=.*?(?:\&|$)/gi, // Medium,
    /(?:rv|gj|_xtd|_af|_af_eid)\=.*?(?:\&|$)/gi, // Meetup
    /(?:sc_src|sc_lid|sc_uid|sc_llid|sc_eh)\=.*?(?:\&|$)/gi, // HWZ Mailer,
    /(?:scid|mv[12]?)\=.*?$/, // Behance
    /(?:gps-id|scm_id|scm_url?)\=.*?$/, // AliExpress
    /(?:wt\.mc_id?)\=.*?$/, // WebTrends
    /(?:\?|\&)$/gi, // Trailing ? or &
  ];

  regexes.forEach(r => {
    url = url.replace(r, '');
  })

  return url;
}

const decrapped = decrap(url);

if (decrapped !== url) {
  window.history.pushState(null, '', decrap(url));
}