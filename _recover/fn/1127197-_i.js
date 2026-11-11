function _i(e) {
  for (e = e.child; e !== null;) {
    if (e.tag === 30) {
      var t = e.memoizedProps,
        n = j(t, e.stateNode)
      ;((t = N(t.default, t.update)),
        (e.flags &= -5),
        t !== `none` && ui(e, n, t, (e.memoizedState = []), !1))
    } else e.subtreeFlags & 33554432 && _i(e)
    e = e.sibling
  }
}
