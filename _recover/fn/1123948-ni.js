function ni(e) {
  e: for (;;) {
    for (; e.sibling === null;) {
      if (e.return === null || ti(e.return)) return null
      e = e.return
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if ((ml && e.tag === 27 && yl(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
        continue e
      ;((e.child.return = e), (e = e.child))
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
