function nc(e, t, n, r) {
  var i = {
    lane: r,
    revertLane: 0,
    gesture: null,
    action: n,
    hasEagerState: !1,
    eagerState: null,
    next: null,
  }
  if (ic(e)) ac(t, i)
  else {
    var a = e.alternate
    if (
      e.lanes === 0 &&
      (a === null || a.lanes === 0) &&
      ((a = t.lastRenderedReducer), a !== null)
    )
      try {
        var o = t.lastRenderedState,
          s = a(o, n)
        if (((i.hasEagerState = !0), (i.eagerState = s), Pr(s, o)))
          return (vi(e, t, i, 0), Xu === null && _i(), !1)
      } catch {}
    if (((n = yi(e, t, i, r)), n !== null)) return (Pd(n, e, r), oc(n, t, r), !0)
  }
  return !1
}
