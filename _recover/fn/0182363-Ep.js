function Ep(e, t) {
  var n = t,
    r = 0
  do {
    var i = n.nextSibling
    if ((e.removeChild(n), i && i.nodeType === 8)) {
      if (((n = i.data), n === `/$` || n === `/&`)) {
        if (r === 0) {
          ;(e.removeChild(i), Gh(t))
          return
        }
        r--
      } else if (n === `$` || n === `$?` || n === `$~` || n === `$!` || n === `&`) r++
      else if (n === `html`) bm(e.ownerDocument.documentElement)
      else if (n === `head`) {
        ;((n = e.ownerDocument.head), bm(n))
        for (var a = n.firstChild; a;) {
          var o = a.nextSibling,
            s = a.nodeName
          ;(a[St] ||
            s === `SCRIPT` ||
            s === `STYLE` ||
            (s === `LINK` && a.rel.toLowerCase() === `stylesheet`) ||
            n.removeChild(a),
            (a = o))
        }
      } else n === `body` && bm(e.ownerDocument.body)
    }
    n = i
  } while (n)
  Gh(t)
}
