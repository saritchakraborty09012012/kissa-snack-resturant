function ws(e, t) {
  if (Qi) {
    var n = Xu.formState
    if (n !== null) {
      a: {
        var r = J
        if (Qi) {
          if (Zi) {
            b: {
              for (var i = Zi, a = ea; i.nodeType !== 8;)
                if (!a || ((i = fm(i.nextSibling)), i === null)) {
                  i = null
                  break b
                }
              ;((a = i.data), (i = a === `F!` || a === `F` ? i : null))
            }
            if (i) {
              ;((Zi = fm(i.nextSibling)), (r = i.data === `F!`))
              break a
            }
          }
          na(r)
        }
        r = !1
      }
      r && (t = n[0])
    }
  }
  return (
    (n = $o()),
    (n.memoizedState = n.baseState = t),
    (r = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Cs,
      lastRenderedState: t,
    }),
    (n.queue = r),
    (n = tc.bind(null, J, r)),
    (r.dispatch = n),
    (r = hs(!1)),
    (a = rc.bind(null, J, !1, r.queue)),
    (r = $o()),
    (i = { state: t, dispatch: null, action: e, pending: null }),
    (r.queue = i),
    (n = _s.bind(null, J, i, a, n)),
    (i.dispatch = n),
    (r.memoizedState = e),
    [t, n, !1]
  )
}
