function $d(e, t, n, r) {
  ;((da = ua = null), Qo(t), ($a = null), (eo = 0))
  var i = t.return
  try {
    if (wc(e, i, t, n, Qu)) {
      ;((ad = 1), yc(e, Fi(n, e.current)), (Zu = null))
      return
    }
  } catch (t) {
    if (i !== null) throw ((Zu = i), t)
    ;((ad = 1), yc(e, Fi(n, e.current)), (Zu = null))
    return
  }
  t.flags & 32768
    ? (Qi || r === 1
        ? (e = !0)
        : nd || Qu & 536870912
          ? (e = !1)
          : ((td = e = !0),
            (r === 2 || r === 9 || r === 3 || r === 6) &&
              ((r = wo.current), r !== null && r.tag === 13 && (r.flags |= 16384))),
      tf(t, e))
    : ef(t)
}
