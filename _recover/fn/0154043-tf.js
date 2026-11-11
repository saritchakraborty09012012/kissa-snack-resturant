function tf(e, t) {
  do {
    var n = pl(e.alternate, e)
    if (n !== null) {
      ;((n.flags &= 32767), (Zu = n))
      return
    }
    if (
      ((n = e.return),
      n !== null && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
      !t && ((e = e.sibling), e !== null))
    ) {
      Zu = e
      return
    }
    Zu = e = n
  } while (e !== null)
  ;((ad = 6), (Zu = null))
}
