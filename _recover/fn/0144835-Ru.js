function Ru(e, t) {
  if (t.subtreeFlags & 10256)
    for (t = t.child; t !== null;) {
      var n = e,
        r = t,
        i = r.flags
      switch (r.tag) {
        case 22:
          ;(Ru(n, r), i & 2048 && Nu(r.alternate, r))
          break
        case 24:
          ;(Ru(n, r), i & 2048 && Pu(r.alternate, r))
          break
        default:
          Ru(n, r)
      }
      t = t.sibling
    }
}
var zu = 8192
