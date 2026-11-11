function Ci(e, t, n) {
  for (
    Go(e.containerInfo), e = (n & 335544064) === n, kd = t, t = e ? 9270 : 1024;
    kd !== null;
  ) {
    if (((n = kd), e)) {
      var r = n.deletions
      if (r !== null) for (var i = 0; i < r.length; i++) e && gi(r[i])
    }
    if (n.alternate === null && n.flags & 2) (e && ci(n), wi(e))
    else {
      if (n.tag === 22) {
        if (((r = n.alternate), n.memoizedState !== null)) {
          ;(r !== null && r.memoizedState === null && e && gi(r), wi(e))
          continue
        }
        if (r !== null && r.memoizedState !== null) {
          ;(e && ci(n), wi(e))
          continue
        }
      }
      ;((r = n.child),
        (n.subtreeFlags & t) !== 0 && r !== null
          ? ((r.return = n), (kd = r))
          : (e && _i(n), wi(e)))
    }
  }
  xd = null
}
