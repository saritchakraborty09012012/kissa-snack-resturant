function Bt(e, t, n) {
  var i = e.queue
  if (i === null) throw Error(r(311))
  i.lastRenderedReducer = n
  var a = e.baseQueue,
    o = i.pending
  if (o !== null) {
    if (a !== null) {
      var s = a.next
      ;((a.next = o.next), (o.next = s))
    }
    ;((t.baseQueue = a = o), (i.pending = null))
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
      if (f === u.lane ? (ed & f) === f : (Yd & f) === f) {
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
            f === ju && (d = !0))
        else if ((ed & p) === p) {
          ;((u = u.next), p === ju && (d = !0))
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
            (td.lanes |= p),
            (rf |= p))
        ;((f = u.action), od && n(o, f), (o = u.hasEagerState ? u.eagerState : n(o, f)))
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
          (td.lanes |= f),
          (rf |= f))
      u = u.next
    } while (u !== null && u !== t)
    if (
      (l === null ? (s = o) : (l.next = c),
      !Ul(o, e.memoizedState) && ((_d = !0), d && ((n = Mu), n !== null)))
    )
      throw n
    ;((e.memoizedState = o), (e.baseState = s), (e.baseQueue = l), (i.lastRenderedState = o))
  }
  return (a === null && (i.lanes = 0), [e.memoizedState, i.dispatch])
}
