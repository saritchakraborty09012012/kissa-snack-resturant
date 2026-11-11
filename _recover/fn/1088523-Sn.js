function Sn(e, t) {
  var n = Nt()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return t !== null && wt(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e)
}
