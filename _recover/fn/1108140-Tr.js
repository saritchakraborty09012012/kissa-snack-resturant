function Tr(e, t, n) {
  if (e !== null) {
    if (e.memoizedProps !== t.pendingProps) _d = !0
    else {
      if (!Cr(e, n) && !(t.flags & 128)) return ((_d = !1), wr(e, t, n))
      _d = !!(e.flags & 131072)
    }
  } else ((_d = !1), du && t.flags & 1048576 && ie(t, $l, t.index))
  switch (((t.lanes = 0), t.tag)) {
    case 16:
      e: {
        var i = t.pendingProps
        if (((e = Ue(t.elementType)), (t.type = e), typeof e == `function`))
          $a(e)
            ? ((i = Hn(e, i)), (t.tag = 1), (t = sr(null, t, e, i, n)))
            : ((t.tag = 0), (t = ar(null, t, e, i, n)))
        else {
          if (e != null) {
            var a = e.$$typeof
            if (a === Eo) {
              ;((t.tag = 11), (t = Xn(null, t, e, i, n)))
              break e
            }
            if (a === ko) {
              ;((t.tag = 14), (t = Zn(null, t, e, i, n)))
              break e
            }
            if (a === To) {
              ;((t.tag = 10), (t.type = e), (t = xr(null, t, n)))
              break e
            }
          }
          throw ((t = u(e) || e), Error(r(306, t, ``)))
        }
      }
      return t
    case 0:
      return ar(e, t, t.type, t.pendingProps, n)
    case 1:
      return ((i = t.type), (a = Hn(i, t.pendingProps)), sr(e, t, i, a, n))
    case 3:
      e: {
        if ((ce(t, t.stateNode.containerInfo), e === null)) throw Error(r(387))
        var o = t.pendingProps
        ;((a = t.memoizedState), (i = a.element), rt(e, t), lt(t, o, null, n))
        var s = t.memoizedState
        if (
          ((o = s.cache),
          _e(t, xu, o),
          o !== a.cache && B(t, [xu], n, !0),
          ct(),
          (o = s.element),
          is && a.isDehydrated)
        ) {
          if (
            ((a = { element: o, isDehydrated: !1, cache: s.cache }),
            (t.updateQueue.baseState = a),
            (t.memoizedState = a),
            t.flags & 256)
          ) {
            t = cr(e, t, o, n)
            break e
          }
          if (o !== i) {
            ;((i = ne(Error(r(424)), t)), ge(i), (t = cr(e, t, o, n)))
            break e
          }
          for (
            is &&
              ((uu = Dc(t.stateNode.containerInfo)),
              (lu = t),
              (du = !0),
              (fu = null),
              (pu = !0)),
              n = Uu(t, null, o, n),
              t.child = n;
            n;
          )
            ((n.flags = (n.flags & -3) | 134221824), (n = n.sibling))
        } else {
          if ((me(), o === i)) {
            t = Sr(e, t, n)
            break e
          }
          Yn(e, t, o, n)
        }
        t = t.child
      }
      return t
    case 26:
      if (el)
        return (
          ir(e, t),
          e === null
            ? (n = rl(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : du || (t.stateNode = ll(t.type, t.pendingProps, su.current, t))
            : (t.memoizedState = rl(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
          null
        )
    case 27:
      if (ml)
        return (
          ue(t),
          e === null &&
            ml &&
            du &&
            ((i = t.stateNode = hl(t.type, t.pendingProps, su.current, au.current, !1)),
            (lu = t),
            (pu = !0),
            (uu = Ac(t.type, i, uu))),
          Yn(e, t, t.pendingProps.children, n),
          ir(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        )
    case 5:
      return (
        e === null &&
          du &&
          (Qc(t.type, t.pendingProps, au.current),
          (a = i = uu) &&
            ((i = jc(i, t.type, t.pendingProps, pu)),
            i === null
              ? (a = !1)
              : ((t.stateNode = i), (lu = t), (uu = Ec(i)), (pu = !1), (a = !0))),
          a || fe(t)),
        ue(t),
        (a = t.type),
        (o = t.pendingProps),
        (s = e === null ? null : e.memoizedProps),
        (i = o.children),
        Xo(a, o) ? (i = null) : s !== null && Xo(a, s) && (t.flags |= 32),
        t.memoizedState !== null &&
          ((a = Tt(e, t, Ot, null, null, n)),
          ts ? (xs._currentValue = a) : (xs._currentValue2 = a)),
        ir(e, t),
        Yn(e, t, i, n),
        t.child
      )
    case 6:
      return (
        e === null &&
          du &&
          ($c(t.pendingProps, au.current),
          (e = n = uu) &&
            ((n = Mc(n, t.pendingProps, pu)),
            n === null ? (e = !1) : ((t.stateNode = n), (lu = t), (uu = null), (e = !0))),
          e || fe(t)),
        null
      )
    case 13:
      return dr(e, t, n)
    case 4:
      return (
        ce(t, t.stateNode.containerInfo),
        (i = t.pendingProps),
        e === null ? (t.child = Hu(t, null, i, n)) : Yn(e, t, i, n),
        t.child
      )
    case 11:
      return Xn(e, t, t.type, t.pendingProps, n)
    case 7:
      return ((i = t.pendingProps), ir(e, t), Yn(e, t, i, n), t.child)
    case 8:
      return (Yn(e, t, t.pendingProps.children, n), t.child)
    case 12:
      return (Yn(e, t, t.pendingProps.children, n), t.child)
    case 10:
      return xr(e, t, n)
    case 9:
      return (
        (a = t.type._context),
        (i = t.pendingProps.children),
        V(t),
        (a = H(a)),
        (i = i(a)),
        (t.flags |= 1),
        Yn(e, t, i, n),
        t.child
      )
    case 14:
      return Zn(e, t, t.type, t.pendingProps, n)
    case 15:
      return Qn(e, t, t.type, t.pendingProps, n)
    case 19:
      return br(e, t, n)
    case 31:
      return K(e, t, n)
    case 22:
      return $n(e, t, n, t.pendingProps)
    case 24:
      return (
        V(t),
        (i = H(xu)),
        e === null
          ? ((a = Le()),
            a === null &&
              ((a = qd),
              (o = xe()),
              (a.pooledCache = o),
              o.refCount++,
              o !== null && (a.pooledCacheLanes |= n),
              (a = o)),
            (t.memoizedState = { parent: i, cache: a }),
            nt(t),
            _e(t, xu, a))
          : ((e.lanes & n) !== 0 && (rt(e, t), lt(t, null, null, n), ct()),
            (a = e.memoizedState),
            (o = t.memoizedState),
            a.parent === i
              ? ((i = o.cache), _e(t, xu, i), i !== a.cache && B(t, [xu], n, !0))
              : ((a = { parent: i, cache: i }),
                (t.memoizedState = a),
                t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a),
                _e(t, xu, i))),
        Yn(e, t, t.pendingProps.children, n),
        t.child
      )
    case 30:
      return (
        t.stateNode === null &&
          (t.stateNode = { autoName: null, paired: null, clones: null, ref: null }),
        (i = t.pendingProps),
        i.name != null && i.name !== `auto`
          ? (t.flags |= e === null ? 18882560 : 18874368)
          : du && ae(t),
        e !== null && e.memoizedProps.name !== i.name ? (t.flags |= 4194816) : ir(e, t),
        Yn(e, t, i.children, n),
        t.child
      )
    case 29:
      throw t.pendingProps
  }
  throw Error(r(156, t.tag))
}
