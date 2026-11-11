function Kl(e) {
  for (e = e.child; e !== null;) {
    if (e.tag === 30) {
      var t = e.memoizedProps,
        n = ui(t, e.stateNode)
      ;((t = fi(t.default, t.update)),
        (e.flags &= -5),
        t !== `none` && zl(e, n, t, (e.memoizedState = []), !1))
    } else e.subtreeFlags & 33554432 && Kl(e)
    e = e.sibling
  }
}
