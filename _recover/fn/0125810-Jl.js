function Jl(e) {
  if (e.tag === 30) ((e.stateNode.paired = null), Vl(e.child, !1), ql(e))
  else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) (Jl(e), (e = e.sibling))
  else ql(e)
}
