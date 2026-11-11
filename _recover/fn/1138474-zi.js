function zi(e) {
  if (e.subtreeFlags & 1024)
    for (e = e.child; e !== null;) {
      var t = e
      ;(zi(t), t.tag === 5 && t.flags & 1024 && Ss(t.stateNode), (e = e.sibling))
    }
}
