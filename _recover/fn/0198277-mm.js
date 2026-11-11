function mm(e) {
  e = e.nextSibling
  for (var t = 0; e;) {
    if (e.nodeType === 8) {
      var n = e.data
      if (n === `/$` || n === `/&`) {
        if (t === 0) return fm(e.nextSibling)
        t--
      } else (n !== `$` && n !== `$!` && n !== `$?` && n !== `$~` && n !== `&`) || t++
    }
    e = e.nextSibling
  }
  return null
}
