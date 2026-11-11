function m(e, t, n) {
  if ((typeof t == `string` && t !== ``) || typeof t == `number` || typeof t == `bigint`)
    return ((t = ro(`` + t, e.mode, n)), (t.return = e), t)
  if (typeof t == `object` && t) {
    switch (t.$$typeof) {
      case yo:
        return ((n = q(t.type, t.key, t.props, null, e.mode, n)), qe(n, t), (n.return = e), n)
      case bo:
        return ((t = ao(t, e.mode, n)), (t.return = e), t)
      case Ao:
        return ((t = Ue(t)), m(e, t, n))
    }
    if (Lo(t) || l(t)) return ((t = no(t, e.mode, n, null)), (t.return = e), t)
    if (typeof t.then == `function`) return m(e, Ke(t), n)
    if (t.$$typeof === To) return m(e, U(e, t), n)
    Je(e, t)
  }
  return null
}
