function Gc(e, t, n) {
  var r = t.pendingProps,
    i = !1,
    a = !!(t.flags & 128),
    o
  if (
    ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : !!(jo.current & 2)),
    o && ((i = !0), (t.flags &= -129)),
    (o = !!(t.flags & 32)),
    (t.flags &= -33),
    e === null)
  ) {
    if (Qi) {
      if (
        (i ? Eo(t) : ko(),
        (e = Zi)
          ? ((e = cm(e, ea)),
            (e = e !== null && e.data !== `&` ? e : null),
            e !== null &&
              ((t.memoizedState = {
                dehydrated: e,
                treeContext: Hi === null ? null : { id: Ui, overflow: Wi },
                retryLane: 536870912,
                hydrationErrors: null,
              }),
              (n = Mi(e)),
              (n.return = t),
              (t.child = n),
              (Xi = t),
              (Zi = null)))
          : (e = null),
        e === null)
      )
        throw na(t)
      return ((t.lanes = um(e) ? 32 : 536870912), null)
    }
    return (
      (a = r.children),
      (r = r.fallback),
      i
        ? (ko(),
          (i = t.mode),
          (a = qc({ mode: `hidden`, children: a }, i)),
          (r = Ai(r, i, n, null)),
          (a.return = t),
          (r.return = t),
          (a.sibling = r),
          (t.child = a),
          (r = t.child),
          (r.memoizedState = Uc(n)),
          (r.childLanes = Wc(e, o, n)),
          (t.memoizedState = Hc),
          Mc(null, r))
        : (Eo(t), Kc(t, a))
    )
  }
  var s = e.memoizedState
  if (s !== null) {
    var c = s.dehydrated
    if (c !== null) return Yc(e, t, a, o, r, c, s, n)
  }
  return i
    ? (ko(),
      (i = r.fallback),
      (a = t.mode),
      (s = e.child),
      (c = s.sibling),
      (r = Di(s, { mode: `hidden`, children: r.children })),
      (r.subtreeFlags = s.subtreeFlags & 1206910976),
      c === null ? ((i = Ai(i, a, n, null)), (i.flags |= 2)) : (i = Di(c, i)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      Mc(null, r),
      (r = t.child),
      (i = e.child.memoizedState),
      i === null
        ? (i = Uc(n))
        : ((a = i.cachePool),
          a === null
            ? (a = Ha())
            : ((s = Ta._currentValue), (a = a.parent === s ? a : { parent: s, pool: s })),
          (i = { baseLanes: i.baseLanes | n, cachePool: a })),
      (r.memoizedState = i),
      (r.childLanes = Wc(e, o, n)),
      (t.memoizedState = Hc),
      Mc(e.child, r))
    : (Eo(t),
      (n = e.child),
      (e = n.sibling),
      (n = Di(n, { mode: `visible`, children: r.children })),
      (n.return = t),
      (n.sibling = null),
      e !== null &&
        ((o = t.deletions), o === null ? ((t.deletions = [e]), (t.flags |= 16)) : o.push(e)),
      (t.child = n),
      (t.memoizedState = null),
      n)
}
