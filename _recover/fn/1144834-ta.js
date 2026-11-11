function ta(e) {
  switch (e.tag) {
    case 0:
    case 11:
    case 15:
      ;(ea(e), e.flags & 2048 && Hr(9, e, e.return))
      break
    case 3:
      ea(e)
      break
    case 12:
      ea(e)
      break
    case 22:
      var t = e.stateNode
      e.memoizedState !== null &&
      t._visibility & 2 &&
      (e.return === null || e.return.tag !== 13)
        ? ((t._visibility &= -3), na(e))
        : ea(e)
      break
    default:
      ea(e)
  }
}
