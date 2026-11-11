function Us(e, t) {
  var n = es()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  if (t !== null && Go(t, r[1])) return r[0]
  if (((r = e()), zo)) {
    We(!0)
    try {
      e()
    } finally {
      We(!1)
    }
  }
  return ((n.memoizedState = [r, t]), r)
}
