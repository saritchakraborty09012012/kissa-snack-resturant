function Ms(e, t, n, r) {
  var i = es()
  r = r === void 0 ? null : r
  var a = i.memoizedState.inst
  Io !== null && r !== null && Go(r, Io.memoizedState.deps)
    ? (i.memoizedState = ks(t, a, n, r))
    : ((J.flags |= e), (i.memoizedState = ks(1 | t, a, n, r)))
}
