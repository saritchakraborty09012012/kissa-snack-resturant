function Yi(e, t, n, r, i) {
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
        ;(Yi(a, o, s, c, i), Vr(8, o))
        break
      case 23:
        break
      case 22:
        var u = o.stateNode
        ;(o.memoizedState === null
          ? ((u._visibility |= 2), Yi(a, o, s, c, i))
          : u._visibility & 2
            ? Yi(a, o, s, c, i)
            : Xi(a, o),
          i && l & 2048 && Gi(o.alternate, o))
        break
      case 24:
        ;(Yi(a, o, s, c, i), i && l & 2048 && Ki(o.alternate, o))
        break
      default:
        Yi(a, o, s, c, i)
    }
    t = t.sibling
  }
}
