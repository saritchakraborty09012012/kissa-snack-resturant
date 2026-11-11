function p(e, t, n, r) {
  var i = t === null ? null : t.key
  if ((typeof n == `string` && n !== ``) || typeof n == `number` || typeof n == `bigint`)
    return i === null ? c(e, t, `` + n, r) : null
  if (typeof n == `object` && n) {
    switch (n.$$typeof) {
      case k:
        return n.key === i ? l(e, t, n, r) : null
      case A:
        return n.key === i ? u(e, t, n, r) : null
      case re:
        return ((n = Ya(n)), p(e, t, n, r))
    }
    if (pe(n) || ue(n)) return i === null ? d(e, t, n, r, null) : null
    if (typeof n.then == `function`) return p(e, t, to(n), r)
    if (n.$$typeof === F) return p(e, t, ba(e, n), r)
    no(e, n)
  }
  return null
}
