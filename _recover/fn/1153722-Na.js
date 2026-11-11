function Na(e, t) {
  do {
    var n = zr(e.alternate, e)
    if (n !== null) {
      ;((n.flags &= 32767), (Jd = n))
      return
    }
    if (
      ((n = e.return),
      n !== null && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
      !t && ((e = e.sibling), e !== null))
    ) {
      Jd = e
      return
    }
    Jd = e = n
  } while (e !== null)
  ;((nf = 6), (Jd = null))
}
