function K(e, t, n) {
  var i = t.pendingProps,
    a = !!(t.flags & 128)
  if (((t.flags &= -129), e === null)) {
    if (du) {
      if (i.mode === `hidden`)
        return (
          (e = nr(t, i)),
          (t.lanes = 536870912),
          (e.memoizedState = { baseLanes: 0, cachePool: null }),
          er(null, e)
        )
      if (
        (gt(t),
        (e = uu)
          ? ((e = Nc(e, pu)),
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
      return ((t.lanes = 536870912), null)
    }
    return nr(t, i)
  }
  var o = e.memoizedState
  if (o !== null) {
    var s = o.dehydrated
    if ((gt(t), a)) {
      if (t.flags & 256) ((t.flags &= -257), (t = rr(e, t, n)))
      else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null))
      else throw Error(r(558))
    } else if ((_d || ye(e, t, n, !1), (a = (n & e.childLanes) !== 0), _d || a)) {
      if (Yu.current === null) {
        if (((i = qd), i !== null && ((s = D(i, n)), s !== 0 && s !== o.retryLane)))
          throw ((o.retryLane = s), $e(e, s), fa(i, e, s), gd)
        wa()
      }
      t = rr(e, t, n)
    } else
      ((e = o.treeContext),
        is &&
          ((uu = Oc(s)), (lu = t), (du = !0), (fu = null), (pu = !1), e !== null && se(t, e)),
        (t = nr(t, i)),
        (t.flags |= 134221824))
    return t
  }
  return (
    (e = eo(e.child, { mode: i.mode, children: i.children })),
    (e.ref = t.ref),
    (t.child = e),
    (e.return = t),
    e
  )
}
