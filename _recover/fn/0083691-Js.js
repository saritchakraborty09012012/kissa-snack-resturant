function Js(e) {
  var t = e.memoizedState
  if (t !== null) return t
  t = {
    memoizedState: me,
    baseState: me,
    baseQueue: null,
    queue: {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: as,
      lastRenderedState: me,
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
        lastRenderedReducer: as,
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
