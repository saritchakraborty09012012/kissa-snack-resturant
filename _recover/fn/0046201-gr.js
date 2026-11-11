function gr(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === `input` ? !!hr[e.type] : t === `textarea`
}
