function wc(e, t, n, r, a) {
  if (((n.flags |= 32768), typeof r == `object` && r && typeof r.then == `function`)) {
    if (((t = n.alternate), t !== null && ga(t, n, a, !0), (n = wo.current), n !== null)) {
      switch (n.tag) {
        case 31:
        case 13:
        case 19:
          return (
            To === null ? Kd() : n.alternate === null && ad === 0 && (ad = 3),
            (n.flags &= -257),
            (n.flags |= 65536),
            (n.lanes = a),
            r === Ka
              ? (n.flags |= 16384)
              : ((t = n.updateQueue),
                t === null ? (n.updateQueue = new Set([r])) : t.add(r),
                hf(e, r, a)),
            !1
          )
        case 22:
          return (
            (n.flags |= 65536),
            r === Ka
              ? (n.flags |= 16384)
              : ((t = n.updateQueue),
                t === null
                  ? ((t = {
                      transitions: null,
                      markerInstances: null,
                      retryQueue: new Set([r]),
                    }),
                    (n.updateQueue = t))
                  : ((n = t.retryQueue), n === null ? (t.retryQueue = new Set([r])) : n.add(r)),
                hf(e, r, a)),
            !1
          )
      }
      throw Error(i(435, n.tag))
    }
    return (hf(e, r, a), Kd(), !1)
  }
  if (Qi)
    return (
      (t = wo.current),
      t === null
        ? (r !== ta && ((t = Error(i(423), { cause: r })), ca(Fi(t, n))),
          (e = e.current.alternate),
          (e.flags |= 65536),
          (a &= -a),
          (e.lanes |= a),
          (r = Fi(r, n)),
          (a = xc(e.stateNode, r, a)),
          po(e, a),
          ad !== 4 && (ad = 2))
        : (!(t.flags & 65536) && (t.flags |= 256),
          (t.flags |= 65536),
          (t.lanes = a),
          r !== ta && ((e = Error(i(422), { cause: r })), ca(Fi(e, n)))),
      !1
    )
  var o = Error(i(520), { cause: r })
  if (((o = Fi(o, n)), dd === null ? (dd = [o]) : dd.push(o), ad !== 4 && (ad = 2), t === null))
    return !0
  ;((r = Fi(r, n)), (n = t))
  do {
    switch (n.tag) {
      case 3:
        return (
          (n.flags |= 65536),
          (e = a & -a),
          (n.lanes |= e),
          (e = xc(n.stateNode, r, e)),
          po(n, e),
          !1
        )
      case 1:
        if (
          ((t = n.type),
          (o = n.stateNode),
          !(n.flags & 128) &&
            (typeof t.getDerivedStateFromError == `function` ||
              (o !== null &&
                typeof o.componentDidCatch == `function` &&
                (vd === null || !vd.has(o)))))
        )
          return (
            (n.flags |= 65536),
            (a &= -a),
            (n.lanes |= a),
            (a = Sc(a)),
            Cc(a, e, n, r),
            po(n, a),
            !1
          )
        break
      case 22:
        if (n.memoizedState !== null) return ((n.flags |= 65536), !1)
    }
    n = n.return
  } while (n !== null)
  return !1
}
var Tc = Error(i(461)),
  Ec = !1
