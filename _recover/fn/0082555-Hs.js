function Hs(e, t) {
  var n = es()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return t !== null && Go(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e)
}
