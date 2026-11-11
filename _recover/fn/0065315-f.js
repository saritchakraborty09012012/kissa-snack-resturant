function f(e, t, n) {
  if ((typeof t == `string` && t !== ``) || typeof t == `number` || typeof t == `bigint`)
    return ((t = ji(`` + t, e.mode, n)), (t.return = e), t)
  if (typeof t == `object` && t) {
    switch (t.$$typeof) {
      case k:
        return ((n = ki(t.type, t.key, t.props, null, e.mode, n)), q(n, t), (n.return = e), n)
      case A:
        return ((t = Ni(t, e.mode, n)), (t.return = e), t)
      case re:
        return ((t = Ya(t)), f(e, t, n))
    }
    if (pe(t) || ue(t)) return ((t = Ai(t, e.mode, n, null)), (t.return = e), t)
    if (typeof t.then == `function`) return f(e, to(t), n)
    if (t.$$typeof === F) return f(e, ba(e, t), n)
    no(e, t)
  }
  return null
}
