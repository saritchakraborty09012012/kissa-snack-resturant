function Wu(e) {
  switch (e.tag) {
    case 0:
    case 11:
    case 15:
      ;(Uu(e), e.flags & 2048 && gl(9, e, e.return))
      break
    case 3:
      Uu(e)
      break
    case 12:
      Uu(e)
      break
    case 22:
      var t = e.stateNode
      e.memoizedState !== null &&
      t._visibility & 2 &&
      (e.return === null || e.return.tag !== 13)
        ? ((t._visibility &= -3), Gu(e))
        : Uu(e)
      break
    default:
      Uu(e)
  }
}
