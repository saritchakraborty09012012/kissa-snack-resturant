function wr(e, t, n) {
  switch (t.tag) {
    case 3:
      ;(ce(t, t.stateNode.containerInfo), _e(t, xu, e.memoizedState.cache), me())
      break
    case 27:
    case 5:
      ue(t)
      break
    case 4:
      ce(t, t.stateNode.containerInfo)
      break
    case 10:
      _e(t, t.type, t.memoizedProps.value)
      break
    case 31:
      if (t.memoizedState !== null) return ((t.flags |= 128), gt(t), null)
      break
    case 13:
      var r = t.memoizedState
      if (r !== null) {
        if (r.dehydrated !== null) return (ht(t), (t.flags |= 128), null)
        r = ye(e, t, n, !1)
        var i = t.child.childLanes
        return r || (n & i) !== 0
          ? dr(e, t, n)
          : (ht(t), (e = Sr(e, t, n)), e === null ? null : e.sibling)
      }
      ht(t)
      break
    case 19:
      if (t.flags & 128) return br(e, t, n)
      if (
        ((i = !!(e.flags & 128)),
        (r = (n & t.childLanes) !== 0),
        r || (ye(e, t, n, !1), (r = (n & t.childLanes) !== 0)),
        i)
      ) {
        if (r) return br(e, t, n)
        t.flags |= 128
      }
      if (
        ((i = t.memoizedState),
        i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        bt(t, $u.current),
        r)
      )
        break
      return null
    case 22:
      return ((t.lanes = 0), $n(e, t, n, t.pendingProps))
    case 24:
      _e(t, xu, e.memoizedState.cache)
  }
  return Sr(e, t, n)
}
