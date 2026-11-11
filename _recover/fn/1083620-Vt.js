function Vt(e) {
  var t = Nt(),
    n = t.queue
  if (n === null) throw Error(r(311))
  n.lastRenderedReducer = e
  var i = n.dispatch,
    a = n.pending,
    o = t.memoizedState
  if (a !== null) {
    n.pending = null
    var s = (a = a.next)
    do ((o = e(o, s.action)), (s = s.next))
    while (s !== a)
    ;(Ul(o, t.memoizedState) || (_d = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o))
  }
  return [o, i]
}
