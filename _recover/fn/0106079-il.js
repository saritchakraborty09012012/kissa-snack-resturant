function il(e, t, n) {
  switch (t.tag) {
    case 3:
      ;(H(t, t.stateNode.containerInfo), fa(t, Ta, e.memoizedState.cache), oa())
      break
    case 27:
    case 5:
      W(t)
      break
    case 4:
      H(t, t.stateNode.containerInfo)
      break
    case 10:
      fa(t, t.type, t.memoizedProps.value)
      break
    case 31:
      if (t.memoizedState !== null) return ((t.flags |= 128), Do(t), null)
      break
    case 13:
      var r = t.memoizedState
      if (r !== null) {
        if (r.dehydrated !== null) return (Eo(t), (t.flags |= 128), null)
        r = ga(e, t, n, !1)
        var i = t.child.childLanes
        return r || (n & i) !== 0
          ? Gc(e, t, n)
          : (Eo(t), (e = nl(e, t, n)), e === null ? null : e.sibling)
      }
      Eo(t)
      break
    case 19:
      if (t.flags & 128) return el(e, t, n)
      if (
        ((i = !!(e.flags & 128)),
        (r = (n & t.childLanes) !== 0),
        r || (ga(e, t, n, !1), (r = (n & t.childLanes) !== 0)),
        i)
      ) {
        if (r) return el(e, t, n)
        t.flags |= 128
      }
      if (
        ((i = t.memoizedState),
        i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        Mo(t, jo.current),
        r)
      )
        break
      return null
    case 22:
      return ((t.lanes = 0), jc(e, t, n, t.pendingProps))
    case 24:
      fa(t, Ta, e.memoizedState.cache)
  }
  return nl(e, t, n)
}
