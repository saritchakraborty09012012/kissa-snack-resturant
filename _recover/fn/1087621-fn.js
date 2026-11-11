function fn(e, t, n, r) {
  var i = Nt()
  r = r === void 0 ? null : r
  var a = i.memoizedState.inst
  nd !== null && r !== null && wt(r, nd.memoizedState.deps)
    ? (i.memoizedState = ln(t, a, n, r))
    : ((td.flags |= e), (i.memoizedState = ln(1 | t, a, n, r)))
}
