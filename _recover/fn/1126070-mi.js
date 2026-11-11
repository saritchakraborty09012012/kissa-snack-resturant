function mi(e, t) {
  if (e.tag === 30) {
    var n = e.stateNode,
      r = e.memoizedProps,
      i = j(r, n),
      a = N(r.default, n.paired ? r.share : r.enter)
    a === `none`
      ? pi(e)
      : ui(e, i, a, null, !1)
        ? (pi(e), n.paired || t || da(e, r.onEnter))
        : fi(e.child, !1)
  } else if (e.subtreeFlags & 33554432)
    for (e = e.child; e !== null;) (mi(e, t), (e = e.sibling))
  else pi(e)
}
