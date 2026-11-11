function O(e, t, n, r, i, o, s, c, l, u) {
  for (var d = 0, f = 0, p = c, m = Math.trunc(i.value + (o + 7) / 8); i.value < m;)
    for (y(d, f, n, i), d = v.c, f = v.lc; f >= 14;) {
      var _ = t[(d >> (f - 14)) & a]
      if (_.len) ((f -= _.len), x(_.lit, s, d, f, n, r, i, l, u, p), (d = b.c), (f = b.lc))
      else {
        if (!_.p) throw `hufDecode issues`
        for (var S = 0; S < _.lit; S++) {
          for (var C = h(e[_.p[S]]); f < C && i.value < m;)
            (y(d, f, n, i), (d = v.c), (f = v.lc))
          if (f >= C && g(e[_.p[S]]) == ((d >> (f - C)) & ((1 << C) - 1))) {
            ;((f -= C), x(_.p[S], s, d, f, n, r, i, l, u, p), (d = b.c), (f = b.lc))
            break
          }
        }
        if (S == _.lit) throw `hufDecode issues`
      }
    }
  var w = (8 - o) & 7
  for (d >>= w, f -= w; f > 0;) {
    var _ = t[(d << (14 - f)) & a]
    if (_.len) ((f -= _.len), x(_.lit, s, d, f, n, r, i, l, u, p), (d = b.c), (f = b.lc))
    else throw `hufDecode issues`
  }
  return !0
}
