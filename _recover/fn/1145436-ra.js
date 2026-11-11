function ra(e, t) {
  for (; kd !== null;) {
    var n = kd
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Hr(8, n, t)
        break
      case 23:
      case 22:
        if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
          var r = n.memoizedState.cachePool.pool
          r != null && r.refCount++
        }
        break
      case 24:
        Se(n.memoizedState.cache)
    }
    if (((r = n.child), r !== null)) ((r.return = n), (kd = r))
    else
      e: for (n = e; kd !== null;) {
        r = kd
        var i = r.sibling,
          a = r.return
        if ((ki(r), r === n)) {
          kd = null
          break e
        }
        if (i !== null) {
          ;((i.return = a), (kd = i))
          break e
        }
        kd = a
      }
  }
}
