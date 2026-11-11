function vf(e, t, n, r) {
  let i = e.prev,
    a = e,
    o = e.next
  if (Nf(i, a, o) >= 0) return !1
  let s = i.x,
    c = a.x,
    l = o.x,
    u = i.y,
    d = a.y,
    f = o.y,
    p = Math.min(s, c, l),
    m = Math.min(u, d, f),
    h = Math.max(s, c, l),
    g = Math.max(u, d, f),
    _ = Of(p, m, t, n, r),
    v = Of(h, g, t, n, r),
    y = e.prevZ,
    b = e.nextZ
  for (; y && y.z >= _ && b && b.z <= v;) {
    if (
      (y.x >= p &&
        y.x <= h &&
        y.y >= m &&
        y.y <= g &&
        y !== i &&
        y !== o &&
        jf(s, u, c, d, l, f, y.x, y.y) &&
        Nf(y.prev, y, y.next) >= 0) ||
      ((y = y.prevZ),
      b.x >= p &&
        b.x <= h &&
        b.y >= m &&
        b.y <= g &&
        b !== i &&
        b !== o &&
        jf(s, u, c, d, l, f, b.x, b.y) &&
        Nf(b.prev, b, b.next) >= 0)
    )
      return !1
    b = b.nextZ
  }
  for (; y && y.z >= _;) {
    if (
      y.x >= p &&
      y.x <= h &&
      y.y >= m &&
      y.y <= g &&
      y !== i &&
      y !== o &&
      jf(s, u, c, d, l, f, y.x, y.y) &&
      Nf(y.prev, y, y.next) >= 0
    )
      return !1
    y = y.prevZ
  }
  for (; b && b.z <= v;) {
    if (
      b.x >= p &&
      b.x <= h &&
      b.y >= m &&
      b.y <= g &&
      b !== i &&
      b !== o &&
      jf(s, u, c, d, l, f, b.x, b.y) &&
      Nf(b.prev, b, b.next) >= 0
    )
      return !1
    b = b.nextZ
  }
  return !0
}
