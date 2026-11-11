function al(e, t, n) {
  if (e !== null) {
    if (e.memoizedProps !== t.pendingProps) Ec = !0
    else {
      if (!rl(e, n) && !(t.flags & 128)) return ((Ec = !1), il(e, t, n))
      Ec = !!(e.flags & 131072)
    }
  } else ((Ec = !1), Qi && t.flags & 1048576 && Ki(t, zi, t.index))
  switch (((t.lanes = 0), t.tag)) {
    case 16:
      a: {
        var r = t.pendingProps
        if (((e = Ya(t.elementType)), (t.type = e), typeof e == `function`))
          Ei(e)
            ? ((r = hc(e, r)), (t.tag = 1), (t = Bc(null, t, e, r, n)))
            : ((t.tag = 0), (t = Rc(null, t, e, r, n)))
        else {
          if (e != null) {
            var a = e.$$typeof
            if (a === ee) {
              ;((t.tag = 11), (t = Oc(null, t, e, r, n)))
              break a
            }
            if (a === ne) {
              ;((t.tag = 14), (t = kc(null, t, e, r, n)))
              break a
            }
            if (a === F) {
              ;((t.tag = 10), (t.type = e), (t = tl(null, t, n)))
              break a
            }
          }
          throw ((t = fe(e) || e), Error(i(306, t, ``)))
        }
      }
      return t
    case 0:
      return Rc(e, t, t.type, t.pendingProps, n)
    case 1:
      return ((r = t.type), (a = hc(r, t.pendingProps)), Bc(e, t, r, a, n))
    case 3:
      a: {
        if ((H(t, t.stateNode.containerInfo), e === null)) throw Error(i(387))
        r = t.pendingProps
        var o = t.memoizedState
        ;((a = o.element), co(e, t), go(t, r, null, n))
        var s = t.memoizedState
        if (
          ((r = s.cache),
          fa(t, Ta, r),
          r !== o.cache && ha(t, [Ta], n, !0),
          ho(),
          (r = s.element),
          o.isDehydrated)
        ) {
          if (
            ((o = { element: r, isDehydrated: !1, cache: s.cache }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            t = Vc(e, t, r, n)
            break a
          }
          if (r !== a) {
            ;((a = Fi(Error(i(424)), t)), ca(a), (t = Vc(e, t, r, n)))
            break a
          }
          switch (((e = t.stateNode.containerInfo), e.nodeType)) {
            case 9:
              e = e.body
              break
            default:
              e = e.nodeName === `HTML` ? e.ownerDocument.body : e
          }
          for (
            Zi = fm(e.firstChild),
              Xi = t,
              Qi = !0,
              $i = null,
              ea = !0,
              n = ao(t, null, r, n),
              t.child = n;
            n;
          )
            ((n.flags = (n.flags & -3) | 134221824), (n = n.sibling))
        } else {
          if ((oa(), r === a)) {
            t = nl(e, t, n)
            break a
          }
          Dc(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 26:
      return (
        Lc(e, t),
        e === null
          ? (n = Im(t.type, null, t.pendingProps, null))
            ? (t.memoizedState = n)
            : Qi || (t.stateNode = hp(t.type, t.pendingProps, be.current, t))
          : (t.memoizedState = Im(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
        null
      )
    case 27:
      return (
        W(t),
        e === null &&
          Qi &&
          ((r = t.stateNode = vm(t.type, t.pendingProps, be.current)),
          (Xi = t),
          (ea = !0),
          (a = Zi),
          Tp(t.type) ? ((pm = a), (Zi = fm(r.firstChild))) : (Zi = a)),
        Dc(e, t, t.pendingProps.children, n),
        Lc(e, t),
        e === null && (t.flags |= 4194304),
        t.child
      )
    case 5:
      return (
        e === null &&
          Qi &&
          ((a = r = Zi) &&
            ((r = om(r, t.type, t.pendingProps, ea)),
            r === null
              ? (a = !1)
              : ((t.stateNode = r), (Xi = t), (Zi = fm(r.firstChild)), (ea = !1), (a = !0))),
          a || na(t)),
        W(t),
        (a = t.type),
        (o = t.pendingProps),
        (s = e === null ? null : e.memoizedProps),
        (r = o.children),
        gp(a, o) ? (r = null) : s !== null && gp(a, s) && (t.flags |= 32),
        t.memoizedState !== null && ((a = Ko(e, t, Yo, null, null, n)), (uh._currentValue = a)),
        Lc(e, t),
        Dc(e, t, r, n),
        t.child
      )
    case 6:
      return (
        e === null &&
          Qi &&
          ((e = n = Zi) &&
            ((n = sm(n, t.pendingProps, ea)),
            n === null ? (e = !1) : ((t.stateNode = n), (Xi = t), (Zi = null), (e = !0))),
          e || na(t)),
        null
      )
    case 13:
      return Gc(e, t, n)
    case 4:
      return (
        H(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = io(t, null, r, n)) : Dc(e, t, r, n),
        t.child
      )
    case 11:
      return Oc(e, t, t.type, t.pendingProps, n)
    case 7:
      return ((r = t.pendingProps), Lc(e, t), Dc(e, t, r, n), t.child)
    case 8:
      return (Dc(e, t, t.pendingProps.children, n), t.child)
    case 12:
      return (Dc(e, t, t.pendingProps.children, n), t.child)
    case 10:
      return tl(e, t, n)
    case 9:
      return (
        (a = t.type._context),
        (r = t.pendingProps.children),
        va(t),
        (a = ya(a)),
        (r = r(a)),
        (t.flags |= 1),
        Dc(e, t, r, n),
        t.child
      )
    case 14:
      return kc(e, t, t.type, t.pendingProps, n)
    case 15:
      return Ac(e, t, t.type, t.pendingProps, n)
    case 19:
      return el(e, t, n)
    case 31:
      return Ic(e, t, n)
    case 22:
      return jc(e, t, n, t.pendingProps)
    case 24:
      return (
        va(t),
        (r = ya(Ta)),
        e === null
          ? ((a = Ba()),
            a === null &&
              ((a = Xu),
              (o = Ea()),
              (a.pooledCache = o),
              o.refCount++,
              o !== null && (a.pooledCacheLanes |= n),
              (a = o)),
            (t.memoizedState = { parent: r, cache: a }),
            so(t),
            fa(t, Ta, a))
          : ((e.lanes & n) !== 0 && (co(e, t), go(t, null, null, n), ho()),
            (a = e.memoizedState),
            (o = t.memoizedState),
            a.parent === r
              ? ((r = o.cache), fa(t, Ta, r), r !== a.cache && ha(t, [Ta], n, !0))
              : ((a = { parent: r, cache: r }),
                (t.memoizedState = a),
                t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a),
                fa(t, Ta, r))),
        Dc(e, t, t.pendingProps.children, n),
        t.child
      )
    case 30:
      return (
        t.stateNode === null &&
          (t.stateNode = { autoName: null, paired: null, clones: null, ref: null }),
        (r = t.pendingProps),
        r.name != null && r.name !== `auto`
          ? (t.flags |= e === null ? 18882560 : 18874368)
          : Qi && qi(t),
        e !== null && e.memoizedProps.name !== r.name ? (t.flags |= 4194816) : Lc(e, t),
        Dc(e, t, r.children, n),
        t.child
      )
    case 29:
      throw t.pendingProps
  }
  throw Error(i(156, t.tag))
}
