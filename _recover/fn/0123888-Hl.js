function Hl(e) {
  if (e.subtreeFlags & 18874368)
    for (e = e.child; e !== null;) {
      if (
        (e.tag !== 22 || e.memoizedState === null) &&
        (Hl(e), e.tag === 30 && e.flags & 18874368 && e.stateNode.paired)
      ) {
        var t = e.memoizedProps
        if (t.name == null || t.name === `auto`) throw Error(i(544))
        var n = t.name
        ;((t = fi(t.default, t.share)),
          t !== `none` && (zl(e, n, t, null, !1) || Vl(e.child, !1)))
      }
      e = e.sibling
    }
}
