function Jt(e) {
  var t = Mt()
  if (typeof e == `function`) {
    var n = e
    if (((e = n()), od)) {
      A(!0)
      try {
        n()
      } finally {
        A(!1)
      }
    }
  }
  return (
    (t.memoizedState = t.baseState = e),
    (t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Rt,
      lastRenderedState: e,
    }),
    t
  )
}
