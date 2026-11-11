function pi(e) {
  if (e.subtreeFlags & 18874368)
    for (e = e.child; e !== null;) {
      if (
        (e.tag !== 22 || e.memoizedState === null) &&
        (pi(e), e.tag === 30 && e.flags & 18874368 && e.stateNode.paired)
      ) {
        var t = e.memoizedProps
        if (t.name == null || t.name === `auto`) throw Error(r(544))
        var n = t.name
        ;((t = N(t.default, t.share)),
          t !== `none` && (ui(e, n, t, null, !1) || fi(e.child, !1)))
      }
      e = e.sibling
    }
}
