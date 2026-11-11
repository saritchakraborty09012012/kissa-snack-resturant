function Yl(e) {
  for (e = e.child; e !== null;)
    (e.tag === 30 ? Vl(e.child, !1) : e.subtreeFlags & 33554432 && Yl(e), (e = e.sibling))
}
