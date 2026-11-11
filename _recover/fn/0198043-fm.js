function fm(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (
        ((t = e.data),
        t === `$` ||
          t === `$!` ||
          t === `$?` ||
          t === `$~` ||
          t === `&` ||
          t === `F!` ||
          t === `F`)
      )
        break
      if (t === `/$` || t === `/&`) return null
    }
  }
  return e
}
var pm = null
