function Dt(e, t, n, i) {
  td = e
  var a = 0
  do {
    if ((ad && (ld = null), (cd = 0), (ad = !1), 25 <= a)) throw Error(r(301))
    if (((a += 1), (rd = nd = null), e.updateQueue != null)) {
      var o = e.updateQueue
      ;((o.lastEffect = null),
        (o.events = null),
        (o.stores = null),
        o.memoCache != null && (o.memoCache.index = 0))
    }
    ;((Ro.H = md), (o = t(n, i)))
  } while (ad)
  return o
}
