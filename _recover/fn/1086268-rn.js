function rn(e, t) {
  if (du) {
    var n = qd.formState
    if (n !== null) {
      e: {
        var r = td
        if (du) {
          if (uu) {
            var i = Sc(uu, pu)
            if (i) {
              ;((uu = wc(i)), (r = Cc(i)))
              break e
            }
          }
          fe(r)
        }
        r = !1
      }
      r && (t = n[0])
    }
  }
  ;((n = Mt()),
    (n.memoizedState = n.baseState = t),
    (r = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: nn,
      lastRenderedState: t,
    }),
    (n.queue = r),
    (n = Nn.bind(null, td, r)),
    (r.dispatch = n),
    (r = Jt(!1)))
  var a = Fn.bind(null, td, !1, r.queue)
  return (
    (r = Mt()),
    (i = { state: t, dispatch: null, action: e, pending: null }),
    (r.queue = i),
    (n = Xt.bind(null, td, i, a, n)),
    (i.dispatch = n),
    (r.memoizedState = e),
    [t, n, !1]
  )
}
