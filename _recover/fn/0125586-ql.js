function ql(e) {
  if (e.subtreeFlags & 18874368)
    for (e = e.child; e !== null;) {
      if (e.tag !== 22 || e.memoizedState === null) {
        if (e.tag === 30 && e.flags & 18874368) {
          var t = e.stateNode
          t.paired !== null && ((t.paired = null), Vl(e.child, !1))
        }
        ql(e)
      }
      e = e.sibling
    }
}
