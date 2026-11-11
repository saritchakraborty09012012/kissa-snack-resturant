function Ic(e, t, n) {
  var r = t.pendingProps,
    a = !!(t.flags & 128)
  if (((t.flags &= -129), e === null)) {
    if (Qi) {
      if (r.mode === `hidden`)
        return (
          (e = Pc(t, r)),
          (t.lanes = 536870912),
          (e.memoizedState = { baseLanes: 0, cachePool: null }),
          Mc(null, e)
        )
      if (
        (Do(t),
        (e = Zi)
          ? ((e = cm(e, ea)),
            (e = e !== null && e.data === `&` ? e : null),
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
      return ((t.lanes = 536870912), null)
    }
    return Pc(t, r)
  }
  var o = e.memoizedState
  if (o !== null) {
    var s = o.dehydrated
    if ((Do(t), a)) {
      if (t.flags & 256) ((t.flags &= -257), (t = Fc(e, t, n)))
      else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null))
      else throw Error(i(558))
    } else if ((Ec || ga(e, t, n, !1), (a = (n & e.childLanes) !== 0), Ec || a)) {
      if (yo.current === null) {
        if (((r = Xu), r !== null && ((s = lt(r, n)), s !== 0 && s !== o.retryLane)))
          throw ((o.retryLane = s), bi(e, s), Pd(r, e, s), Tc)
        Kd()
      }
      t = Fc(e, t, n)
    } else
      ((e = o.treeContext),
        (Zi = fm(s.nextSibling)),
        (Xi = t),
        (Qi = !0),
        ($i = null),
        (ea = !1),
        e !== null && Yi(t, e),
        (t = Pc(t, r)),
        (t.flags |= 134221824))
    return t
  }
  return (
    (e = Di(e.child, { mode: r.mode, children: r.children })),
    (e.ref = t.ref),
    (t.child = e),
    (e.return = t),
    e
  )
}
