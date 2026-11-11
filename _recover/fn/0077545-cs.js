function cs(e) {
  var t = es(),
    n = t.queue
  if (n === null) throw Error(i(311))
  n.lastRenderedReducer = e
  var r = n.dispatch,
    a = n.pending,
    o = t.memoizedState
  if (a !== null) {
    n.pending = null
    var s = (a = a.next)
    do ((o = e(o, s.action)), (s = s.next))
    while (s !== a)
    ;(Pr(o, t.memoizedState) || (Ec = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o))
  }
  return [o, r]
}
