function Oi(e, t) {
  if (ns && e.subtreeFlags & 67108864)
    for (e = e.child; e !== null;) {
      var n = e,
        r = t
      if (ns)
        switch (n.tag) {
          case 4:
            Di(n, r)
            break
          case 22:
            n.memoizedState === null && Oi(n, r)
            break
          default:
            Oi(n, r)
        }
      e = e.sibling
    }
}
