function am(e) {
  var t = e.firstChild
  for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
    var n = t
    switch (((t = t.nextSibling), n.nodeName)) {
      case `HTML`:
      case `HEAD`:
      case `BODY`:
        ;(am(n), wt(n))
        continue
      case `SCRIPT`:
      case `STYLE`:
        continue
      case `LINK`:
        if (n.rel.toLowerCase() === `stylesheet`) continue
    }
    e.removeChild(n)
  }
}
