function fl(e, t, n) {
  var r = t.pendingProps
  switch ((Ji(t), t.tag)) {
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (dl(t), null)
    case 1:
      return (dl(t), null)
    case 3:
      return (
        (n = t.stateNode),
        (r = null),
        e !== null && (r = e.memoizedState.cache),
        t.memoizedState.cache !== r && (t.flags |= 2048),
        pa(Ta),
        U(),
        n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
        (e === null || e.child === null) &&
          (aa(t)
            ? ol(t)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), sa())),
        dl(t),
        null
      )
    case 26:
      var a = t.type,
        o = t.memoizedState
      return (
        e === null
          ? (ol(t), o === null ? (dl(t), sl(t, a, null, r, n)) : (dl(t), cl(t, o)))
          : o
            ? o === e.memoizedState
              ? (dl(t), (t.flags &= -16777217))
              : (ol(t), dl(t), cl(t, o))
            : ((e = e.memoizedProps), e !== r && ol(t), dl(t), sl(t, a, e, r, n)),
        null
      )
    case 27:
      if ((xe(t), (n = be.current), (a = t.type), e !== null && t.stateNode != null))
        e.memoizedProps !== r && ol(t)
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(i(166))
          return (dl(t), (t.subtreeFlags &= -33554433), null)
        }
        ;((e = B.current), aa(t) ? ra(t, e) : ((e = vm(a, r, n)), (t.stateNode = e), ol(t)))
      }
      return (dl(t), (t.subtreeFlags &= -33554433), null)
    case 5:
      if ((xe(t), (a = t.type), e !== null && t.stateNode != null))
        e.memoizedProps !== r && ol(t)
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(i(166))
          return (dl(t), (t.subtreeFlags &= -33554433), null)
        }
        if (((o = B.current), aa(t))) ra(t, o)
        else {
          var s = fp(be.current)
          switch (o) {
            case 1:
              o = s.createElementNS(`http://www.w3.org/2000/svg`, a)
              break
            case 2:
              o = s.createElementNS(`http://www.w3.org/1998/Math/MathML`, a)
              break
            default:
              switch (a) {
                case `svg`:
                  o = s.createElementNS(`http://www.w3.org/2000/svg`, a)
                  break
                case `math`:
                  o = s.createElementNS(`http://www.w3.org/1998/Math/MathML`, a)
                  break
                case `script`:
                  ;((o = s.createElement(`div`)),
                    (o.innerHTML = `<script><\/script>`),
                    (o = o.removeChild(o.firstChild)))
                  break
                case `select`:
                  ;((o =
                    typeof r.is == `string`
                      ? s.createElement(`select`, { is: r.is })
                      : s.createElement(`select`)),
                    r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size))
                  break
                default:
                  o =
                    typeof r.is == `string`
                      ? s.createElement(a, { is: r.is })
                      : s.createElement(a)
              }
          }
          ;((o[ht] = t), (o[gt] = r))
          a: for (s = t.child; s !== null;) {
            if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode)
            else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
              ;((s.child.return = s), (s = s.child))
              continue
            }
            if (s === t) break a
            for (; s.sibling === null;) {
              if (s.return === null || s.return === t) break a
              s = s.return
            }
            ;((s.sibling.return = s.return), (s = s.sibling))
          }
          t.stateNode = o
          a: switch ((ap(o, a, r), a)) {
            case `button`:
            case `input`:
            case `select`:
            case `textarea`:
              r = !!r.autoFocus
              break a
            case `img`:
              r = !0
              break a
            default:
              r = !1
          }
          r && ol(t)
        }
      }
      return (
        dl(t),
        (t.subtreeFlags &= -33554433),
        sl(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n),
        null
      )
    case 6:
      if (e && t.stateNode != null) e.memoizedProps !== r && ol(t)
      else {
        if (typeof r != `string` && t.stateNode === null) throw Error(i(166))
        if (((e = be.current), aa(t))) {
          if (((e = t.stateNode), (n = t.memoizedProps), (r = null), (a = Xi), a !== null))
            switch (a.tag) {
              case 27:
              case 5:
                r = a.memoizedProps
            }
          ;((e[ht] = t),
            (e = !!(
              e.nodeValue === n ||
              (r !== null && !0 === r.suppressHydrationWarning) ||
              np(e.nodeValue, n)
            )),
            e || na(t, !0))
        } else ((e = fp(e).createTextNode(r)), (e[ht] = t), (t.stateNode = e))
      }
      return (dl(t), null)
    case 31:
      if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
        if (((r = aa(t)), n !== null)) {
          if (e === null) {
            if (!r) throw Error(i(318))
            if (((e = t.memoizedState), (e = e === null ? null : e.dehydrated), !e))
              throw Error(i(557))
            e[ht] = t
          } else (oa(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4))
          ;(dl(t), (e = !1))
        } else
          ((n = sa()),
            e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
            (e = !0))
        if (!e) return t.flags & 256 ? (Ao(t), t) : (Ao(t), null)
        if (t.flags & 128) throw Error(i(558))
      }
      return (dl(t), null)
    case 13:
      if (
        ((r = t.memoizedState),
        e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (((a = aa(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!a) throw Error(i(318))
            if (((a = t.memoizedState), (a = a === null ? null : a.dehydrated), !a))
              throw Error(i(317))
            a[ht] = t
          } else (oa(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4))
          ;(dl(t), (a = !1))
        } else
          ((a = sa()),
            e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a),
            (a = !0))
        if (!a) return t.flags & 256 ? (Ao(t), t) : (Ao(t), null)
      }
      return (
        Ao(t),
        t.flags & 128
          ? ((t.lanes = n), t)
          : ((n = r !== null),
            (e = e !== null && e.memoizedState !== null),
            n &&
              ((r = t.child),
              (a = null),
              r.alternate !== null &&
                r.alternate.memoizedState !== null &&
                r.alternate.memoizedState.cachePool !== null &&
                (a = r.alternate.memoizedState.cachePool.pool),
              (o = null),
              r.memoizedState !== null &&
                r.memoizedState.cachePool !== null &&
                (o = r.memoizedState.cachePool.pool),
              o !== a && (r.flags |= 2048)),
            n !== e && n && (t.child.flags |= 8192),
            ll(t, t.updateQueue),
            dl(t),
            null)
      )
    case 4:
      return (
        U(),
        e === null && Kf(t.stateNode.containerInfo),
        (t.flags |= 67108864),
        dl(t),
        null
      )
    case 10:
      return (pa(t.type), dl(t), null)
    case 19:
      if ((No(t), (r = t.memoizedState), r === null)) return (dl(t), null)
      if (((a = !!(t.flags & 128)), (o = r.rendering), o === null)) {
        if (a) ul(r, !1)
        else {
          if (ad !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null;) {
              if (((o = Po(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    ul(r, !1),
                    e = o.updateQueue,
                    t.updateQueue = e,
                    ll(t, e),
                    t.subtreeFlags = 0,
                    e = n,
                    n = t.child;
                  n !== null;
                )
                  (Oi(n, e), (n = n.sibling))
                return (Mo(t, (jo.current & 1) | 2), Qi && Gi(t, r.treeForkCount), t.child)
              }
              e = e.sibling
            }
          r.tail !== null &&
            Ne() > gd &&
            ((t.flags |= 128), (a = !0), ul(r, !1), (t.lanes = 4194304))
        }
      } else {
        if (!a) {
          if (((e = Po(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (a = !0),
              (e = e.updateQueue),
              (t.updateQueue = e),
              ll(t, e),
              ul(r, !0),
              r.tail === null &&
                r.tailMode !== `collapsed` &&
                r.tailMode !== `visible` &&
                !o.alternate &&
                !Qi)
            )
              return (dl(t), null)
          } else
            2 * Ne() - r.renderingStartTime > gd &&
              n !== 536870912 &&
              ((t.flags |= 128), (a = !0), ul(r, !1), (t.lanes = 4194304))
        }
        r.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((e = r.last), e === null ? (t.child = o) : (e.sibling = o), (r.last = o))
      }
      if (r.tail !== null) {
        e = r.tail
        a: {
          for (n = e; n !== null;) {
            if (n.alternate !== null) {
              n = !1
              break a
            }
            n = n.sibling
          }
          n = !0
        }
        return (
          (r.rendering = e),
          (r.tail = e.sibling),
          (r.renderingStartTime = Ne()),
          (e.sibling = null),
          (o = jo.current),
          (o = a ? (o & 1) | 2 : o & 1),
          r.tailMode === `visible` || r.tailMode === `collapsed` || !n || Qi
            ? Mo(t, o)
            : ((n = o), z(wo, t), z(jo, n), To === null && (To = t)),
          Qi && Gi(t, r.treeForkCount),
          e
        )
      }
      return (dl(t), null)
    case 22:
    case 23:
      return (
        Ao(t),
        Co(),
        (r = t.memoizedState !== null),
        e === null
          ? r && (t.flags |= 8192)
          : (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r
          ? n & 536870912 &&
            !(t.flags & 128) &&
            (dl(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : dl(t),
        (n = t.updateQueue),
        n !== null && ll(t, n.retryQueue),
        (n = null),
        e !== null &&
          e.memoizedState !== null &&
          e.memoizedState.cachePool !== null &&
          (n = e.memoizedState.cachePool.pool),
        (r = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (r = t.memoizedState.cachePool.pool),
        r !== n && (t.flags |= 2048),
        e !== null && ve(za),
        null
      )
    case 24:
      return (
        (n = null),
        e !== null && (n = e.memoizedState.cache),
        t.memoizedState.cache !== n && (t.flags |= 2048),
        pa(Ta),
        dl(t),
        null
      )
    case 25:
      return null
    case 30:
      return ((t.flags |= 33554432), dl(t), null)
  }
  throw Error(i(156, t.tag))
}
