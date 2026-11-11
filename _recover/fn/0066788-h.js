function h(i, a, s, c) {
  for (var l = null, u = null, d = a, h = (a = 0), g = null; d !== null && h < s.length; h++) {
    d.index > h ? ((g = d), (d = null)) : (g = d.sibling)
    var _ = p(i, d, s[h], c)
    if (_ === null) {
      d === null && (d = g)
      break
    }
    ;(e && d && _.alternate === null && t(i, d),
      (a = o(_, a, h)),
      u === null ? (l = _) : (u.sibling = _),
      (u = _),
      (d = g))
  }
  if (h === s.length) return (n(i, d), Qi && Gi(i, h), l)
  if (d === null) {
    for (; h < s.length; h++)
      ((d = f(i, s[h], c)),
        d !== null && ((a = o(d, a, h)), u === null ? (l = d) : (u.sibling = d), (u = d)))
    return (Qi && Gi(i, h), l)
  }
  for (d = r(d); h < s.length; h++)
    ((g = m(d, i, h, s[h], c)),
      g !== null &&
        (e && ((_ = g.alternate), _ !== null && d.delete(_.key === null ? h : _.key)),
        (a = o(g, a, h)),
        u === null ? (l = g) : (u.sibling = g),
        (u = g)))
  return (
    e &&
      d.forEach(function (e) {
        return t(i, e)
      }),
    Qi && Gi(i, h),
    l
  )
}
