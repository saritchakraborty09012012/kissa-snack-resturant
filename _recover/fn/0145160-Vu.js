function Vu(e, t, n) {
  switch (e.tag) {
    case 26:
      ;(Bu(e, t, n),
        e.flags & zu &&
          (e.memoizedState === null
            ? ((e = e.stateNode), (t & 335544128) === t && eh(n, e))
            : th(n, wu, e.memoizedState, e.memoizedProps)))
      break
    case 5:
      ;(Bu(e, t, n), e.flags & zu && ((e = e.stateNode), (t & 335544128) === t && eh(n, e)))
      break
    case 3:
    case 4:
      var r = wu
      ;((wu = Cm(e.stateNode.containerInfo)), Bu(e, t, n), (wu = r))
      break
    case 22:
      e.memoizedState === null &&
        ((r = e.alternate),
        r !== null && r.memoizedState !== null
          ? ((r = zu), (zu = 16777216), Bu(e, t, n), (zu = r))
          : Bu(e, t, n))
      break
    case 30:
      if ((e.flags & zu) !== 0 && ((r = e.memoizedProps.name), r != null && r !== `auto`)) {
        var i = e.stateNode
        ;((i.paired = null), Pl === null && (Pl = new Map()), Pl.set(r, i))
      }
      Bu(e, t, n)
      break
    default:
      Bu(e, t, n)
  }
}
