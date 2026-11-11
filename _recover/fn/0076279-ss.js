function ss(e, t, n) {
  var r = e.queue
  if (r === null) throw Error(i(311))
  r.lastRenderedReducer = n
  var a = e.baseQueue,
    o = r.pending
  if (o !== null) {
    if (a !== null) {
      var s = a.next
      ;((a.next = o.next), (o.next = s))
    }
    ;((t.baseQueue = a = o), (r.pending = null))
  }
  if (((o = e.baseState), a === null)) e.memoizedState = o
  else {
    t = a.next
    var c = (s = null),
      l = null,
      u = t,
      d = !1
    do {
      var f = u.lane & -536870913
      if (f === u.lane ? (Fo & f) === f : (Qu & f) === f) {
        var p = u.revertLane
        if (p === 0)
          (l !== null &&
            (l = l.next =
              {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
            f === Na && (d = !0))
        else if ((Fo & p) === p) {
          ;((u = u.next), p === Na && (d = !0))
          continue
        } else
          ((f = {
            lane: 0,
            revertLane: u.revertLane,
            gesture: null,
            action: u.action,
            hasEagerState: u.hasEagerState,
            eagerState: u.eagerState,
            next: null,
          }),
            l === null ? ((c = l = f), (s = o)) : (l = l.next = f),
            (J.lanes |= p),
            (od |= p))
        ;((f = u.action), zo && n(o, f), (o = u.hasEagerState ? u.eagerState : n(o, f)))
      } else
        ((p = {
          lane: f,
          revertLane: u.revertLane,
          gesture: u.gesture,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        }),
          l === null ? ((c = l = p), (s = o)) : (l = l.next = p),
          (J.lanes |= f),
          (od |= f))
      u = u.next
    } while (u !== null && u !== t)
    if (
      (l === null ? (s = o) : (l.next = c),
      !Pr(o, e.memoizedState) && ((Ec = !0), d && ((n = Pa), n !== null)))
    )
      throw n
    ;((e.memoizedState = o), (e.baseState = s), (e.baseQueue = l), (r.lastRenderedState = o))
  }
  return (a === null && (r.lanes = 0), [e.memoizedState, r.dispatch])
}
