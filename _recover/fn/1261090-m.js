function m(e, t, n, r, i, a, o) {
  for (var s = n, c = 0, l = 0; i <= a; i++) {
    if (s.value - n.value > r) return !1
    d(6, c, l, e, s)
    var f = u.l
    if (((c = u.c), (l = u.lc), (o[i] = f), f == 63)) {
      if (s.value - n.value > r) throw `Something wrong with hufUnpackEncTable`
      d(8, c, l, e, s)
      var m = u.l + 6
      if (((c = u.c), (l = u.lc), i + m > a + 1)) throw `Something wrong with hufUnpackEncTable`
      for (; m--;) o[i++] = 0
      i--
    } else if (f >= 59) {
      var m = f - 59 + 2
      if (i + m > a + 1) throw `Something wrong with hufUnpackEncTable`
      for (; m--;) o[i++] = 0
      i--
    }
  }
  p(o)
}
