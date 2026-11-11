function si(e) {
  var t = e.stateNode,
    n = e.memoizedProps
  try {
    gl(e.type, n, t, e)
  } catch (t) {
    Ga(e, e.return, t)
  }
}
