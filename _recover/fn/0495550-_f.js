function _f(e) {
  let t = e.prev,
    n = e,
    r = e.next
  if (Nf(t, n, r) >= 0) return !1
  let i = t.x,
    a = n.x,
    o = r.x,
    s = t.y,
    c = n.y,
    l = r.y,
    u = Math.min(i, a, o),
    d = Math.min(s, c, l),
    f = Math.max(i, a, o),
    p = Math.max(s, c, l),
    m = r.next
  for (; m !== t;) {
    if (
      m.x >= u &&
      m.x <= f &&
      m.y >= d &&
      m.y <= p &&
      jf(i, s, a, c, o, l, m.x, m.y) &&
      Nf(m.prev, m, m.next) >= 0
    )
      return !1
    m = m.next
  }
  return !0
}
