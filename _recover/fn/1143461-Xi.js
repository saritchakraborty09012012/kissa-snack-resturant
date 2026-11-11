function Xi(e, t) {
  if (t.subtreeFlags & 10256)
    for (t = t.child; t !== null;) {
      var n = e,
        r = t,
        i = r.flags
      switch (r.tag) {
        case 22:
          ;(Xi(n, r), i & 2048 && Gi(r.alternate, r))
          break
        case 24:
          ;(Xi(n, r), i & 2048 && Ki(r.alternate, r))
          break
        default:
          Xi(n, r)
      }
      t = t.sibling
    }
}
