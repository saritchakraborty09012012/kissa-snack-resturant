function hm(e) {
  e = e.previousSibling
  for (var t = 0; e;) {
    if (e.nodeType === 8) {
      var n = e.data
      if (n === `$` || n === `$!` || n === `$?` || n === `$~` || n === `&`) {
        if (t === 0) return e
        t--
      } else (n !== `/$` && n !== `/&`) || t++
    }
    e = e.previousSibling
  }
  return null
}
