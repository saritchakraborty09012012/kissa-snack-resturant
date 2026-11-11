function Rr(e, t, n) {
  var i = t.pendingProps
  switch ((oe(t), t.tag)) {
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (Lr(t), null)
    case 1:
      return (Lr(t), null)
    case 3:
      return (
        (n = t.stateNode),
        (i = null),
        e !== null && (i = e.memoizedState.cache),
        t.memoizedState.cache !== i && (t.flags |= 2048),
        ve(xu),
        le(),
        n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (R(t)
            ? Er(t)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), he())),
        jr(e, t),
        Lr(t),
        null
      )
    case 26:
      if (el) {
        var a = t.type,
          o = t.memoizedState
        return (
          e === null
            ? (Er(t), o === null ? (Lr(t), Nr(t, a, null, i, n)) : (Lr(t), Pr(t, o)))
            : o
              ? o === e.memoizedState
                ? (Lr(t), (t.flags &= -16777217))
                : (Er(t), Lr(t), Pr(t, o))
              : ((o = e.memoizedProps),
                ns ? o !== i && Er(t) : Mr(e, t, a, i),
                Lr(t),
                Nr(t, a, o, i, n)),
          null
        )
      }
    case 27:
      if (ml) {
        if ((de(t), (n = su.current), (a = t.type), e !== null && t.stateNode != null))
          ns ? e.memoizedProps !== i && Er(t) : Mr(e, t, a, i)
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(r(166))
            return (Lr(t), (t.subtreeFlags &= -33554433), null)
          }
          ;((e = au.current),
            R(t) ? pe(t, e) : ((e = hl(a, i, n, e, !0)), (t.stateNode = e), Er(t)))
        }
        return (Lr(t), (t.subtreeFlags &= -33554433), null)
      }
    case 5:
      if ((de(t), (a = t.type), e !== null && t.stateNode != null)) Mr(e, t, a, i)
      else {
        if (!i) {
          if (t.stateNode === null) throw Error(r(166))
          return (Lr(t), (t.subtreeFlags &= -33554433), null)
        }
        if (((o = au.current), R(t))) (pe(t, o), Gc(t.stateNode, a, i, o) && (t.flags |= 64))
        else {
          var s = qo(a, i, su.current, o, t)
          ;(Dr(t), kr(s, t, !1, !1), (t.stateNode = s), Yo(s, a, i, o) && Er(t))
        }
      }
      return (
        Lr(t),
        (t.subtreeFlags &= -33554433),
        Nr(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n),
        null
      )
    case 6:
      if (e && t.stateNode != null)
        ((n = e.memoizedProps),
          ns
            ? n !== i && Er(t)
            : rs &&
              (n === i
                ? (t.stateNode = e.stateNode)
                : ((e = su.current), (n = au.current), Dr(t), (t.stateNode = Zo(i, e, n, t)))))
      else {
        if (typeof i != `string` && t.stateNode === null) throw Error(r(166))
        if (((e = su.current), (n = au.current), R(t))) {
          if (!is) throw Error(r(176))
          if (((e = t.stateNode), (n = t.memoizedProps), (i = null), (a = lu), a !== null))
            switch (a.tag) {
              case 27:
              case 5:
                i = a.memoizedProps
            }
          Ic(e, n, t, i) || fe(t, !0)
        } else (Dr(t), (t.stateNode = Zo(i, e, n, t)))
      }
      return (Lr(t), null)
    case 31:
      if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
        if (((i = R(t)), n !== null)) {
          if (e === null) {
            if (!i) throw Error(r(318))
            if (!is) throw Error(r(556))
            if (((e = t.memoizedState), (e = e === null ? null : e.dehydrated), !e))
              throw Error(r(557))
            Lc(e, t)
          } else (me(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4))
          ;(Lr(t), (e = !1))
        } else
          ((n = he()),
            e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
            (e = !0))
        if (!e) return t.flags & 256 ? (yt(t), t) : (yt(t), null)
        if (t.flags & 128) throw Error(r(558))
      }
      return (Lr(t), null)
    case 13:
      if (
        ((i = t.memoizedState),
        e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (((a = R(t)), i !== null && i.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error(r(318))
            if (!is) throw Error(r(344))
            if (((a = t.memoizedState), (a = a === null ? null : a.dehydrated), !a))
              throw Error(r(317))
            Rc(a, t)
          } else (me(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4))
          ;(Lr(t), (a = !1))
        } else
          ((a = he()),
            e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a),
            (a = !0))
        if (!a) return t.flags & 256 ? (yt(t), t) : (yt(t), null)
      }
      return (
        yt(t),
        t.flags & 128
          ? ((t.lanes = n), t)
          : ((n = i !== null),
            (e = e !== null && e.memoizedState !== null),
            n &&
              ((i = t.child),
              (a = null),
              i.alternate !== null &&
                i.alternate.memoizedState !== null &&
                i.alternate.memoizedState.cachePool !== null &&
                (a = i.alternate.memoizedState.cachePool.pool),
              (o = null),
              i.memoizedState !== null &&
                i.memoizedState.cachePool !== null &&
                (o = i.memoizedState.cachePool.pool),
              o !== a && (i.flags |= 2048)),
            n !== e && n && (t.child.flags |= 8192),
            Fr(t, t.updateQueue),
            Lr(t),
            null)
      )
    case 4:
      return (
        le(),
        jr(e, t),
        e === null && os(t.stateNode.containerInfo),
        (t.flags |= 67108864),
        Lr(t),
        null
      )
    case 10:
      return (ve(t.type), Lr(t), null)
    case 19:
      if ((xt(t), (i = t.memoizedState), i === null)) return (Lr(t), null)
      if (((a = !!(t.flags & 128)), (o = i.rendering), o === null)) {
        if (a) Ir(i, !1)
        else {
          if (nf !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null;) {
              if (((o = St(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Ir(i, !1),
                    e = o.updateQueue,
                    t.updateQueue = e,
                    Fr(t, e),
                    t.subtreeFlags = 0,
                    e = n,
                    n = t.child;
                  n !== null;
                )
                  (to(n, e), (n = n.sibling))
                return (bt(t, ($u.current & 1) | 2), du && re(t, i.treeForkCount), t.child)
              }
              e = e.sibling
            }
          i.tail !== null &&
            Nl() > mf &&
            ((t.flags |= 128), (a = !0), Ir(i, !1), (t.lanes = 4194304))
        }
      } else {
        if (!a) {
          if (((e = St(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (a = !0),
              (e = e.updateQueue),
              (t.updateQueue = e),
              Fr(t, e),
              Ir(i, !0),
              i.tail === null &&
                i.tailMode !== `collapsed` &&
                i.tailMode !== `visible` &&
                !o.alternate &&
                !du)
            )
              return (Lr(t), null)
          } else
            2 * Nl() - i.renderingStartTime > mf &&
              n !== 536870912 &&
              ((t.flags |= 128), (a = !0), Ir(i, !1), (t.lanes = 4194304))
        }
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((e = i.last), e === null ? (t.child = o) : (e.sibling = o), (i.last = o))
      }
      if (i.tail !== null) {
        e = i.tail
        e: {
          for (n = e; n !== null;) {
            if (n.alternate !== null) {
              n = !1
              break e
            }
            n = n.sibling
          }
          n = !0
        }
        return (
          (i.rendering = e),
          (i.tail = e.sibling),
          (i.renderingStartTime = Nl()),
          (e.sibling = null),
          (o = $u.current),
          (o = a ? (o & 1) | 2 : o & 1),
          i.tailMode === `visible` || i.tailMode === `collapsed` || !n || du
            ? bt(t, o)
            : ((n = o), p(Zu, t), p($u, n), Qu === null && (Qu = t)),
          du && re(t, i.treeForkCount),
          e
        )
      }
      return (Lr(t), null)
    case 22:
    case 23:
      return (
        yt(t),
        mt(),
        (i = t.memoizedState !== null),
        e === null
          ? i && (t.flags |= 8192)
          : (e.memoizedState !== null) !== i && (t.flags |= 8192),
        i
          ? n & 536870912 &&
            !(t.flags & 128) &&
            (Lr(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Lr(t),
        (n = t.updateQueue),
        n !== null && Fr(t, n.retryQueue),
        (n = null),
        e !== null &&
          e.memoizedState !== null &&
          e.memoizedState.cachePool !== null &&
          (n = e.memoizedState.cachePool.pool),
        (i = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (i = t.memoizedState.cachePool.pool),
        i !== n && (t.flags |= 2048),
        e !== null && f(Pu),
        null
      )
    case 24:
      return (
        (n = null),
        e !== null && (n = e.memoizedState.cache),
        t.memoizedState.cache !== n && (t.flags |= 2048),
        ve(xu),
        Lr(t),
        null
      )
    case 25:
      return null
    case 30:
      return ((t.flags |= 33554432), Lr(t), null)
  }
  throw Error(r(156, t.tag))
}
