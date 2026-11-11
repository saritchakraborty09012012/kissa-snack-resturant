function _(e, t, n, r) {
  for (; t <= n; t++) {
    var i = g(e[t]),
      a = h(e[t])
    if (i >> a) throw `Invalid table entry`
    if (a > 14) {
      var o = r[i >> (a - 14)]
      if (o.len) throw `Invalid table entry`
      if ((o.lit++, o.p)) {
        var s = o.p
        o.p = Array(o.lit)
        for (var c = 0; c < o.lit - 1; ++c) o.p[c] = s[c]
      } else o.p = [,]
      o.p[o.lit - 1] = t
    } else if (a)
      for (var l = 0, c = 1 << (14 - a); c > 0; c--) {
        var o = r[(i << (14 - a)) + l]
        if (o.len || o.p) throw `Invalid table entry`
        ;((o.len = a), (o.lit = t), l++)
      }
  }
  return !0
}
let v = { c: 0, lc: 0 }
