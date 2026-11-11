function m(e, t, n, r, i) {
  if ((typeof r == `string` && r !== ``) || typeof r == `number` || typeof r == `bigint`)
    return ((e = e.get(n) || null), c(t, e, `` + r, i))
  if (typeof r == `object` && r) {
    switch (r.$$typeof) {
      case k:
        return ((e = e.get(r.key === null ? n : r.key) || null), l(t, e, r, i))
      case A:
        return ((e = e.get(r.key === null ? n : r.key) || null), u(t, e, r, i))
      case re:
        return ((r = Ya(r)), m(e, t, n, r, i))
    }
    if (pe(r) || ue(r)) return ((e = e.get(n) || null), d(t, e, r, i, null))
    if (typeof r.then == `function`) return m(e, t, n, to(r), i)
    if (r.$$typeof === F) return m(e, t, n, ba(t, r), i)
    no(t, r)
  }
  return null
}
