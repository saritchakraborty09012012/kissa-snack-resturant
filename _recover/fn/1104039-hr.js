function hr(e, t, n, i, a, o, s, c) {
  if (n)
    return t.flags & 256
      ? (ht(t), (t.flags &= -257), mr(e, t, c))
      : t.memoizedState === null
        ? (vt(),
          (o = a.fallback),
          (s = t.mode),
          (a = pr({ mode: `visible`, children: a.children }, s)),
          (o = no(o, s, c, null)),
          (o.flags |= 2),
          (a.return = t),
          (o.return = t),
          (a.sibling = o),
          (t.child = a),
          Hu(t, e.child, null, c),
          (a = t.child),
          (a.memoizedState = lr(c)),
          (a.childLanes = ur(e, i, c)),
          (t.memoizedState = vd),
          er(null, a))
        : (vt(), (t.child = e.child), (t.flags |= 128), null)
  if ((ht(t), yc(o)))
    return (
      (i = bc(o).digest),
      i !== `` &&
        ((a = Error(r(419))),
        (a.stack = ``),
        (a.digest = i),
        ge({ value: a, source: null, stack: null })),
      mr(e, t, c)
    )
  if ((_d || ye(e, t, c, !1), (i = (c & e.childLanes) !== 0), _d || i)) {
    if (Yu.current !== null) return mr(e, t, c)
    if (((i = qd), i !== null && ((a = D(i, c)), a !== 0 && a !== s.retryLane)))
      throw ((s.retryLane = a), $e(e, a), fa(i, e, a), gd)
    return (vc(o) || wa(), mr(e, t, c))
  }
  return vc(o)
    ? ((t.flags |= 192), (t.child = e.child), null)
    : ((e = s.treeContext),
      is && ((uu = kc(o)), (lu = t), (du = !0), (fu = null), (pu = !1), e !== null && se(t, e)),
      (t = fr(t, a.children)),
      (t.flags |= 134221824),
      t)
}
