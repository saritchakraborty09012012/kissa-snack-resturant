function Lu(e, t, n, r, i) {
  for (i = i && (!!(t.subtreeFlags & 10256) || !1), t = t.child; t !== null;) {
    var a = e,
      o = t,
      s = n,
      c = r,
      l = o.flags
    switch (o.tag) {
      case 0:
      case 11:
      case 15:
        ;(Lu(a, o, s, c, i), hl(8, o))
        break
      case 23:
        break
      case 22:
        var u = o.stateNode
        ;(o.memoizedState === null
          ? ((u._visibility |= 2), Lu(a, o, s, c, i))
          : u._visibility & 2
            ? Lu(a, o, s, c, i)
            : Ru(a, o),
          i && l & 2048 && Nu(o.alternate, o))
        break
      case 24:
        ;(Lu(a, o, s, c, i), i && l & 2048 && Pu(o.alternate, o))
        break
      default:
        Lu(a, o, s, c, i)
    }
    t = t.sibling
  }
}
