function yi(e) {
  if (e.tag === 30) ((e.stateNode.paired = null), fi(e.child, !1), vi(e))
  else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) (yi(e), (e = e.sibling))
  else vi(e)
}
