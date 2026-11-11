function hs(e) {
  var t = $o()
  if (typeof e == `function`) {
    var n = e
    if (((e = n()), zo)) {
      We(!0)
      try {
        n()
      } finally {
        We(!1)
      }
    }
  }
  return (
    (t.memoizedState = t.baseState = e),
    (t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: as,
      lastRenderedState: e,
    }),
    t
  )
}
