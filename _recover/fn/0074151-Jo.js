function Jo(e, t, n, r) {
  J = e
  var a = 0
  do {
    if ((Ro && (Ho = null), (Vo = 0), (Ro = !1), 25 <= a)) throw Error(i(301))
    if (((a += 1), (Y = Io = null), e.updateQueue != null)) {
      var o = e.updateQueue
      ;((o.lastEffect = null),
        (o.events = null),
        (o.stores = null),
        o.memoCache != null && (o.memoCache.index = 0))
    }
    ;((L.H = uc), (o = t(n, r)))
  } while (Ro)
  return o
}
