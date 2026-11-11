function Jn(e, t, n, i, a) {
  if (((n.flags |= 32768), typeof i == `object` && i && typeof i.then == `function`)) {
    if (((t = n.alternate), t !== null && ye(t, n, a, !0), (n = Zu.current), n !== null)) {
      switch (n.tag) {
        case 31:
        case 13:
        case 19:
          return (
            Qu === null ? wa() : n.alternate === null && nf === 0 && (nf = 3),
            (n.flags &= -257),
            (n.flags |= 65536),
            (n.lanes = a),
            i === Ru
              ? (n.flags |= 16384)
              : ((t = n.updateQueue),
                t === null ? (n.updateQueue = new Set([i])) : t.add(i),
                Ka(e, i, a)),
            !1
          )
        case 22:
          return (
            (n.flags |= 65536),
            i === Ru
              ? (n.flags |= 16384)
              : ((t = n.updateQueue),
                t === null
                  ? ((t = {
                      transitions: null,
                      markerInstances: null,
                      retryQueue: new Set([i]),
                    }),
                    (n.updateQueue = t))
                  : ((n = t.retryQueue), n === null ? (t.retryQueue = new Set([i])) : n.add(i)),
                Ka(e, i, a)),
            !1
          )
      }
      throw Error(r(435, n.tag))
    }
    return (Ka(e, i, a), wa(), !1)
  }
  if (du)
    return (
      (t = Zu.current),
      t === null
        ? (i !== mu && ((t = Error(r(423), { cause: i })), ge(ne(t, n))),
          (e = e.current.alternate),
          (e.flags |= 65536),
          (a &= -a),
          (e.lanes |= a),
          (i = ne(i, n)),
          (a = Gn(e.stateNode, i, a)),
          st(e, a),
          nf !== 4 && (nf = 2))
        : (!(t.flags & 65536) && (t.flags |= 256),
          (t.flags |= 65536),
          (t.lanes = a),
          i !== mu && ((e = Error(r(422), { cause: i })), ge(ne(e, n)))),
      !1
    )
  var o = Error(r(520), { cause: i })
  if (((o = ne(o, n)), lf === null ? (lf = [o]) : lf.push(o), nf !== 4 && (nf = 2), t === null))
    return !0
  ;((i = ne(i, n)), (n = t))
  do {
    switch (n.tag) {
      case 3:
        return (
          (n.flags |= 65536),
          (e = a & -a),
          (n.lanes |= e),
          (e = Gn(n.stateNode, i, e)),
          st(n, e),
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
                (gf === null || !gf.has(o)))))
        )
          return (
            (n.flags |= 65536),
            (a &= -a),
            (n.lanes |= a),
            (a = Kn(a)),
            qn(a, e, n, i),
            st(n, a),
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
