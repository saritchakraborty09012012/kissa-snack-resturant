function dr(e, t, n) {
  var r = t.pendingProps,
    i = !1,
    a = !!(t.flags & 128),
    o
  if (
    ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : !!($u.current & 2)),
    o && ((i = !0), (t.flags &= -129)),
    (o = !!(t.flags & 32)),
    (t.flags &= -33),
    e === null)
  ) {
    if (du) {
      if (
        (i ? ht(t) : vt(),
        (e = uu)
          ? ((e = Pc(e, pu)),
            e !== null &&
              ((t.memoizedState = {
                dehydrated: e,
                treeContext: nu === null ? null : { id: ru, overflow: iu },
                retryLane: 536870912,
                hydrationErrors: null,
              }),
              (n = io(e)),
              (n.return = t),
              (t.child = n),
              (lu = t),
              (uu = null)))
          : (e = null),
        e === null)
      )
        throw fe(t)
      return ((t.lanes = yc(e) ? 32 : 536870912), null)
    }
    return (
      (a = r.children),
      (r = r.fallback),
      i
        ? (vt(),
          (i = t.mode),
          (a = pr({ mode: `hidden`, children: a }, i)),
          (r = no(r, i, n, null)),
          (a.return = t),
          (r.return = t),
          (a.sibling = r),
          (t.child = a),
          (r = t.child),
          (r.memoizedState = lr(n)),
          (r.childLanes = ur(e, o, n)),
          (t.memoizedState = vd),
          er(null, r))
        : (ht(t), fr(t, a))
    )
  }
  var s = e.memoizedState
  if (s !== null) {
    var c = s.dehydrated
    if (c !== null) return hr(e, t, a, o, r, c, s, n)
  }
  return i
    ? (vt(),
      (i = r.fallback),
      (a = t.mode),
      (s = e.child),
      (c = s.sibling),
      (r = eo(s, { mode: `hidden`, children: r.children })),
      (r.subtreeFlags = s.subtreeFlags & 1206910976),
      c === null ? ((i = no(i, a, n, null)), (i.flags |= 2)) : (i = eo(c, i)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      er(null, r),
      (r = t.child),
      (i = e.child.memoizedState),
      i === null
        ? (i = lr(n))
        : ((a = i.cachePool),
          a === null
            ? (a = ze())
            : ((s = ts ? xu._currentValue : xu._currentValue2),
              (a = a.parent === s ? a : { parent: s, pool: s })),
          (i = { baseLanes: i.baseLanes | n, cachePool: a })),
      (r.memoizedState = i),
      (r.childLanes = ur(e, o, n)),
      (t.memoizedState = vd),
      er(e.child, r))
    : (ht(t),
      (n = e.child),
      (e = n.sibling),
      (n = eo(n, { mode: `visible`, children: r.children })),
      (n.return = t),
      (n.sibling = null),
      e !== null &&
        ((o = t.deletions), o === null ? ((t.deletions = [e]), (t.flags |= 16)) : o.push(e)),
      (t.child = n),
      (t.memoizedState = null),
      n)
}
