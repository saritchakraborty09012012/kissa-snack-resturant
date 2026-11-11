function Pn(e, t, n, r) {
  var i = {
    lane: r,
    revertLane: 0,
    gesture: null,
    action: n,
    hasEagerState: !1,
    eagerState: null,
    next: null,
  }
  if (In(e)) Ln(t, i)
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
        if (((i.hasEagerState = !0), (i.eagerState = s), Ul(s, o)))
          return (Ze(e, t, i, 0), qd === null && Xe(), !1)
      } catch {}
    if (((n = Qe(e, t, i, r)), n !== null)) return (fa(n, e, r), Rn(n, t, r), !0)
  }
  return !1
}
