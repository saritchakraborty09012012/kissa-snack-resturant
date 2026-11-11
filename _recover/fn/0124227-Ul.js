function Ul(e, t) {
  if (e.tag === 30) {
    var n = e.stateNode,
      r = e.memoizedProps,
      i = ui(r, n),
      a = fi(r.default, n.paired ? r.share : r.enter)
    a === `none`
      ? Hl(e)
      : zl(e, i, a, null, !1)
        ? (Hl(e), n.paired || t || Nd(e, r.onEnter))
        : Vl(e.child, !1)
  } else if (e.subtreeFlags & 33554432)
    for (e = e.child; e !== null;) (Ul(e, t), (e = e.sibling))
  else Hl(e)
}
