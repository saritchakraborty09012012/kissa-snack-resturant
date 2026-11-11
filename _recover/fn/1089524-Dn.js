function Dn(e) {
  var t = e.memoizedState
  if (t !== null) return t
  t = {
    memoizedState: bs,
    baseState: bs,
    baseQueue: null,
    queue: {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Rt,
      lastRenderedState: bs,
    },
    next: null,
  }
  var n = {}
  return (
    (t.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Rt,
        lastRenderedState: n,
      },
      next: null,
    }),
    (e.memoizedState = t),
    (e = e.alternate),
    e !== null && (e.memoizedState = t),
    t
  )
}
