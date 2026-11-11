function Si(e, t) {
  for (e = e.child; e !== null;) {
    if (e.tag === 30) {
      var n = e.memoizedProps,
        r = e.stateNode,
        i = j(n, r),
        a = N(n.default, n.update)
      if (t) {
        r = r.clones
        var o = r === null ? null : r.map(Qs)
      } else ((o = e.memoizedState), (e.memoizedState = null))
      r = e
      var s = e.child
      ;((Cd = 0), (i = xi(r, s, i, i, a, o, !1)), e.flags & 4 && i && (t || da(e, n.onUpdate)))
    } else e.subtreeFlags & 33554432 && Si(e, t)
    e = e.sibling
  }
}
