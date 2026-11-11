function En(e, t, n, r, i) {
  var a = cs()
  ss(a !== 0 && 8 > a ? a : 8)
  var o = Ro.T,
    s = {}
  ;((s.types = o === null ? null : o.types), (Ro.T = s), Fn(e, !1, t, n))
  try {
    var c = i(),
      l = Ro.S
    ;(l !== null && l(s, c),
      typeof c == `object` && c && typeof c.then == `function`
        ? Pn(e, t, Ie(c, r), la(e))
        : Pn(e, t, r, la(e)))
  } catch (n) {
    Pn(e, t, { then: function () {}, status: `rejected`, reason: n }, la())
  } finally {
    ;(ss(a), o !== null && s.types !== null && (o.types = s.types), (Ro.T = o))
  }
}
