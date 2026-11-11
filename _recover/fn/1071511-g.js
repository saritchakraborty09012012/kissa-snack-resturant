function g(e, t, n, r, i) {
  if ((typeof r == `string` && r !== ``) || typeof r == `number` || typeof r == `bigint`)
    return ((e = e.get(n) || null), u(t, e, `` + r, i))
  if (typeof r == `object` && r) {
    switch (r.$$typeof) {
      case yo:
        return ((e = e.get(r.key === null ? n : r.key) || null), d(t, e, r, i))
      case bo:
        return ((e = e.get(r.key === null ? n : r.key) || null), f(t, e, r, i))
      case Ao:
        return ((r = Ue(r)), g(e, t, n, r, i))
    }
    if (Lo(r) || l(r)) return ((e = e.get(n) || null), p(t, e, r, i, null))
    if (typeof r.then == `function`) return g(e, t, n, Ke(r), i)
    if (r.$$typeof === To) return g(e, t, n, U(t, r), i)
    Je(t, r)
  }
  return null
}
