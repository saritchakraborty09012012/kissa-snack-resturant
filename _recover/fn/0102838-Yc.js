function Yc(e, t, n, r, a, o, s, c) {
  if (n)
    return t.flags & 256
      ? (Eo(t), (t.flags &= -257), Jc(e, t, c))
      : t.memoizedState === null
        ? (ko(),
          (o = a.fallback),
          (s = t.mode),
          (a = qc({ mode: `visible`, children: a.children }, s)),
          (o = Ai(o, s, c, null)),
          (o.flags |= 2),
          (a.return = t),
          (o.return = t),
          (a.sibling = o),
          (t.child = a),
          io(t, e.child, null, c),
          (a = t.child),
          (a.memoizedState = Uc(c)),
          (a.childLanes = Wc(e, r, c)),
          (t.memoizedState = Hc),
          Mc(null, a))
        : (ko(), (t.child = e.child), (t.flags |= 128), null)
  if ((Eo(t), um(o))) {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst
    return (
      (r = l),
      r !== `` &&
        ((a = Error(i(419))),
        (a.stack = ``),
        (a.digest = r),
        ca({ value: a, source: null, stack: null })),
      Jc(e, t, c)
    )
  }
  if ((Ec || ga(e, t, c, !1), (r = (c & e.childLanes) !== 0), Ec || r)) {
    if (yo.current !== null) return Jc(e, t, c)
    if (((r = Xu), r !== null && ((a = lt(r, c)), a !== 0 && a !== s.retryLane)))
      throw ((s.retryLane = a), bi(e, a), Pd(r, e, a), Tc)
    return (lm(o) || Kd(), Jc(e, t, c))
  }
  return lm(o)
    ? ((t.flags |= 192), (t.child = e.child), null)
    : ((e = s.treeContext),
      (Zi = fm(o.nextSibling)),
      (Xi = t),
      (Qi = !0),
      ($i = null),
      (ea = !1),
      e !== null && Yi(t, e),
      (t = Kc(t, a.children)),
      (t.flags |= 134221824),
      t)
}
