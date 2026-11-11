function Jm(e, t, n) {
  if (qm === null) {
    var r = new Map(),
      i = (qm = new Map())
    i.set(n, r)
  } else ((i = qm), (r = i.get(n)), r || ((r = new Map()), i.set(n, r)))
  if (r.has(e)) return r
  for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
    var a = n[i]
    if (
      !(a[St] || a[ht] || (e === `link` && a.getAttribute(`rel`) === `stylesheet`)) &&
      a.namespaceURI !== `http://www.w3.org/2000/svg`
    ) {
      var o = a.getAttribute(t) || ``
      o = e + o
      var s = r.get(o)
      s ? s.push(a) : r.set(o, [a])
    }
  }
  return r
}
