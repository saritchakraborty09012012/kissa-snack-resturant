function Gs(e, t, n, r, i) {
  var a = R.p
  R.p = a !== 0 && 8 > a ? a : 8
  var o = L.T,
    s = {}
  ;((s.types = o === null ? null : o.types), (L.T = s), rc(e, !1, t, n))
  try {
    var c = i(),
      l = L.S
    ;(l !== null && l(s, c),
      typeof c == `object` && c && typeof c.then == `function`
        ? nc(e, t, La(c, r), jd(e))
        : nc(e, t, r, jd(e)))
  } catch (n) {
    nc(e, t, { then: function () {}, status: `rejected`, reason: n }, jd())
  } finally {
    ;((R.p = a), o !== null && s.types !== null && (o.types = s.types), (L.T = o))
  }
}
