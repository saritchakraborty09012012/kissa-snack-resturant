function Cn(e, t) {
  var n = Nt()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  if (t !== null && wt(t, r[1])) return r[0]
  if (((r = e()), od)) {
    A(!0)
    try {
      e()
    } finally {
      A(!1)
    }
  }
  return ((n.memoizedState = [r, t]), r)
}
