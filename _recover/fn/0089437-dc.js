function dc(e, t, n, r) {
  ;((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : D({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n))
}
var fc = {
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = jd(),
      i = lo(r)
    ;((i.payload = t),
      n != null && (i.callback = n),
      (t = uo(e, i, r)),
      t !== null && (Pd(t, e, r), fo(t, e, r)))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = jd(),
      i = lo(r)
    ;((i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = uo(e, i, r)),
      t !== null && (Pd(t, e, r), fo(t, e, r)))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = jd(),
      r = lo(n)
    ;((r.tag = 2),
      t != null && (r.callback = t),
      (t = uo(e, r, n)),
      t !== null && (Pd(t, e, n), fo(t, e, n)))
  },
}
