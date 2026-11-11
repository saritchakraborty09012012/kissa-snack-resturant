function bi(e) {
  for (e = e.child; e !== null;)
    (e.tag === 30 ? fi(e.child, !1) : e.subtreeFlags & 33554432 && bi(e), (e = e.sibling))
}
