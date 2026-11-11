function _(t, r, o, c) {
  for (var l = null, u = null, d = r, f = (r = 0), p = null; d !== null && f < o.length; f++) {
    d.index > f ? ((p = d), (d = null)) : (p = d.sibling)
    var _ = h(t, d, o[f], c)
    if (_ === null) {
      d === null && (d = p)
      break
    }
    ;(e && d && _.alternate === null && n(t, d),
      (r = s(_, r, f)),
      u === null ? (l = _) : (u.sibling = _),
      (u = _),
      (d = p))
  }
  if (f === o.length) return (i(t, d), du && re(t, f), l)
  if (d === null) {
    for (; f < o.length; f++)
      ((d = m(t, o[f], c)),
        d !== null && ((r = s(d, r, f)), u === null ? (l = d) : (u.sibling = d), (u = d)))
    return (du && re(t, f), l)
  }
  for (d = a(d); f < o.length; f++)
    ((p = g(d, t, f, o[f], c)),
      p !== null &&
        (e && ((_ = p.alternate), _ !== null && d.delete(_.key === null ? f : _.key)),
        (r = s(p, r, f)),
        u === null ? (l = p) : (u.sibling = p),
        (u = p)))
  return (
    e &&
      d.forEach(function (e) {
        return n(t, e)
      }),
    du && re(t, f),
    l
  )
}
