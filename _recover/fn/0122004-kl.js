function kl(e) {
  a: for (;;) {
    for (; e.sibling === null;) {
      if (e.return === null || Ol(e.return)) return null
      e = e.return
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if ((e.tag === 27 && Tp(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
        continue a
      ;((e.child.return = e), (e = e.child))
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
