function pu(e, t) {
  if (e.subtreeFlags & 67108864)
    for (e = e.child; e !== null;) {
      a: {
        var n = e,
          r = t
        switch (n.tag) {
          case 4:
            fu(n, r)
            break a
          case 22:
            n.memoizedState === null && pu(n, r)
            break a
          default:
            pu(n, r)
        }
      }
      e = e.sibling
    }
}
