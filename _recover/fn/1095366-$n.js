function $n(e, t, n, r) {
  var i = r.children,
    a = e === null ? null : e.memoizedState
  if (
    (e === null &&
      t.stateNode === null &&
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
    r.mode === `hidden`)
  ) {
    if (t.flags & 128) {
      if (((a = a === null ? n : a.baseLanes | n), e !== null)) {
        for (r = t.child = e.child, i = 0; r !== null;)
          ((i = i | r.lanes | r.childLanes), (r = r.sibling))
        r = i & ~a
      } else ((r = 0), (t.child = null))
      return tr(e, t, a, n, r)
    }
    if (n & 536870912)
      ((t.memoizedState = { baseLanes: 0, cachePool: null }),
        e !== null && Re(t, a === null ? null : a.cachePool),
        a === null ? pt() : ft(t, a),
        _t(t))
    else return ((r = t.lanes = 536870912), tr(e, t, a === null ? n : a.baseLanes | n, n, r))
  } else
    a === null
      ? (e !== null && Re(t, null), pt(), vt())
      : (Re(t, a.cachePool), ft(t, a), vt(), (t.memoizedState = null))
  return (Yn(e, t, i, n), t.child)
}
