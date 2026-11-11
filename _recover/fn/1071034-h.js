function h(e, t, n, r) {
  var i = t === null ? null : t.key
  if ((typeof n == `string` && n !== ``) || typeof n == `number` || typeof n == `bigint`)
    return i === null ? u(e, t, `` + n, r) : null
  if (typeof n == `object` && n) {
    switch (n.$$typeof) {
      case yo:
        return n.key === i ? d(e, t, n, r) : null
      case bo:
        return n.key === i ? f(e, t, n, r) : null
      case Ao:
        return ((n = Ue(n)), h(e, t, n, r))
    }
    if (Lo(n) || l(n)) return i === null ? p(e, t, n, r, null) : null
    if (typeof n.then == `function`) return h(e, t, Ke(n), r)
    if (n.$$typeof === To) return h(e, t, U(e, n), r)
    Je(e, n)
  }
  return null
}
