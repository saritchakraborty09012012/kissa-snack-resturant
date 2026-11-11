function ja(e, t, n, r) {
  ;((_u = gu = null), jt(t), (Bu = null), (Vu = 0))
  var i = t.return
  try {
    if (Jn(e, i, t, n, Yd)) {
      ;((nf = 1), Un(e, ne(n, e.current)), (Jd = null))
      return
    }
  } catch (t) {
    if (i !== null) throw ((Jd = i), t)
    ;((nf = 1), Un(e, ne(n, e.current)), (Jd = null))
    return
  }
  t.flags & 32768
    ? (du || r === 1
        ? (e = !0)
        : $d || Yd & 536870912
          ? (e = !1)
          : ((Qd = e = !0),
            (r === 2 || r === 9 || r === 3 || r === 6) &&
              ((r = Zu.current), r !== null && r.tag === 13 && (r.flags |= 16384))),
      Na(t, e))
    : Ma(t)
}
