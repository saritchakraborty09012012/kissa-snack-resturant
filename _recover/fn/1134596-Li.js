function Li(e, t, n) {
  var i = e.alternate,
    a = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (a & 4 && ((i = e.updateQueue), (i = i === null ? null : i.events), i !== null))
        for (var o = 0; o < i.length; o++) {
          var s = i[o]
          s.ref.impl = s.nextImpl
        }
      ;(Ii(t, e, n), Ri(e), a & 4 && (Hr(3, e, e.return), Vr(3, e), Hr(5, e, e.return)))
      break
    case 1:
      ;(Ii(t, e, n),
        Ri(e),
        a & 512 && (Td || i === null || Kr(i, i.return)),
        a & 64 &&
          wd &&
          ((e = e.updateQueue),
          e !== null &&
            ((t = e.callbacks),
            t !== null &&
              ((a = e.shared.hiddenCallbacks),
              (e.shared.hiddenCallbacks = a === null ? t : a.concat(t))))))
      break
    case 26:
      if (el) {
        ;((o = Id),
          Ii(t, e, n),
          Ri(e),
          a & 512 && (Td || i === null || Kr(i, i.return)),
          a & 4 &&
            ((n = i === null ? null : i.memoizedState),
            (a = e.memoizedState),
            i === null
              ? a === null
                ? e.stateNode === null
                  ? (e.stateNode = wd
                      ? ll(e.type, e.memoizedProps, t.containerInfo, e)
                      : ol(o, e.type, e.memoizedProps, e))
                  : wd || sl(o, e.type, e.stateNode)
                : (e.stateNode = il(o, a, e.memoizedProps))
              : n === a
                ? a === null && e.stateNode !== null && ei(e, e.memoizedProps, i.memoizedProps)
                : (n === null ? ((t = i.stateNode), t === null || Td || cl(t)) : al(n),
                  a === null ? wd || sl(o, e.type, e.stateNode) : il(o, a, e.memoizedProps))))
        break
      }
    case 27:
      if (ml) {
        ;(Ii(t, e, n),
          Ri(e),
          a & 512 && (Td || i === null || Kr(i, i.return)),
          i !== null && a & 4 && ei(e, e.memoizedProps, i.memoizedProps))
        break
      }
    case 5:
      if (
        ((o = Ed),
        (Ed = !1),
        Ii(t, e, n),
        (Ed = o),
        Ri(e),
        a & 512 && (Td || i === null || Kr(i, i.return)),
        ns)
      ) {
        if (e.flags & 32) {
          t = e.stateNode
          try {
            ;(Hs(t), (yd = !0))
          } catch (t) {
            Ga(e, e.return, t)
          }
        }
        ;(a & 4 &&
          e.stateNode != null &&
          ((t = e.memoizedProps), ei(e, t, i === null ? t : i.memoizedProps)),
          a & 1024 && (Dd = !0))
      } else rs && e.alternate !== null && (e.alternate.stateNode = e.stateNode)
      break
    case 6:
      if ((Ii(t, e, n), Ri(e), a & 4 && ns)) {
        if (e.stateNode === null) throw Error(r(162))
        ;((t = e.memoizedProps), (a = i === null ? t : i.memoizedProps), (n = e.stateNode))
        try {
          ;(Fs(n, a, t), (yd = !0))
        } catch (t) {
          Ga(e, e.return, t)
        }
      }
      break
    case 3:
      if (
        ((yd = !1),
        el ? (ul(), (o = Id), (Id = nl(t.containerInfo)), Ii(t, e, n), (Id = o)) : Ii(t, e, n),
        Ri(e),
        a & 4)
      ) {
        if (ns && is && i !== null && i.memoizedState.isDehydrated)
          try {
            Hc(t.containerInfo)
          } catch (t) {
            Ga(e, e.return, t)
          }
        if (rs) {
          ;((a = t.containerInfo), (t = t.pendingChildren))
          try {
            ;(hc(a, t), (yd = !0))
          } catch (t) {
            Ga(e, e.return, t)
          }
        }
      }
      ;(Dd && ((Dd = !1), zi(e)), (yd = !1))
      break
    case 4:
      ;((i = Ed),
        (Ed = wd),
        (o = qr()),
        el
          ? ((s = Id), (Id = nl(e.stateNode.containerInfo)), Ii(t, e, n), Ri(e), (Id = s))
          : (Ii(t, e, n), Ri(e)),
        yd && jd && (Md = !0),
        (yd = o),
        (Ed = i),
        a & 4 && rs && oi(e.stateNode, e, e.stateNode.pendingChildren))
      break
    case 12:
      ;(Ii(t, e, n), Ri(e))
      break
    case 31:
      ;(Ii(t, e, n),
        Ri(e),
        a & 4 && ((t = e.updateQueue), t !== null && ((e.updateQueue = null), Fi(e, t))))
      break
    case 13:
      ;(Ii(t, e, n),
        Ri(e),
        e.child.flags & 8192 &&
          (e.memoizedState !== null) != (i !== null && i.memoizedState !== null) &&
          (ff = Nl()),
        a & 4 && ((t = e.updateQueue), t !== null && ((e.updateQueue = null), Fi(e, t))))
      break
    case 22:
      ;((o = e.memoizedState !== null), (s = i !== null && i.memoizedState !== null))
      var c = wd,
        l = Td,
        u = Ed
      ;((wd = c || o),
        (Ed = u || o),
        (Td = l || s),
        Ii(t, e, n),
        (Td = l),
        (Ed = u),
        (wd = c),
        Ri(e),
        a & 8192 &&
          ((t = e.stateNode),
          (t._visibility = o ? t._visibility & -2 : t._visibility | 1),
          !o ||
            i === null ||
            s ||
            wd ||
            Td ||
            ((t = ml ? 2 : 0),
            (n = s || Td),
            (i = wd),
            (s = Td),
            (wd = o || wd),
            (Td = n),
            Ui(e, t),
            (wd = i),
            (Td = s)),
          ns && (o || !Ed) && Ei(e, o)),
        a & 4 &&
          ((t = e.updateQueue),
          t !== null && ((a = t.retryQueue), a !== null && ((t.retryQueue = null), Fi(e, a)))))
      break
    case 19:
      ;(Ii(t, e, n),
        Ri(e),
        a & 4 && ((t = e.updateQueue), t !== null && ((e.updateQueue = null), Fi(e, t))))
      break
    case 30:
      ;(a & 512 && (Td || i === null || Kr(i, i.return)),
        (a = qr()),
        (o = jd),
        (s = (n & 335544064) === n),
        (c = e.memoizedProps),
        (jd = s && N(c.default, c.update) !== `none`),
        Ii(t, e, n),
        Ri(e),
        s && i !== null && yd && (e.flags |= 4),
        (jd = o),
        (yd = a))
      break
    case 21:
      break
    case 7:
      ;(a & 512 && (Td || i === null || Kr(i, i.return)),
        i && i.stateNode !== null && cc(e, i.stateNode))
    default:
      ;(Ii(t, e, n), Ri(e))
  }
}
