function vu(e, t, n) {
  if (Ue && typeof Ue.onCommitFiberUnmount == `function`)
    try {
      Ue.onCommitFiberUnmount(He, n)
    } catch {}
  switch (n.tag) {
    case 26:
      ;($l || bl(n, t),
        _u(e, t, n),
        n.memoizedState
          ? n.memoizedState.count--
          : n.stateNode && !$l && ((n = n.stateNode), n.parentNode.removeChild(n)))
      break
    case 27:
      ;($l || bl(n, t), Cl(n))
      var r = hu,
        i = gu
      ;(Tp(n.type) && ((hu = n.stateNode), (gu = !1)),
        _u(e, t, n),
        ym(n.stateNode, n.type, n.memoizedProps),
        (hu = r),
        (gu = i))
      break
    case 5:
      ;($l || bl(n, t), Cl(n))
    case 6:
      if (
        (n.tag === 6 && Cl(n),
        (r = hu),
        (i = gu),
        (hu = null),
        _u(e, t, n),
        (hu = r),
        (gu = i),
        hu !== null)
      ) {
        if (gu)
          try {
            ;((hu.nodeType === 9
              ? hu.body
              : hu.nodeName === `HTML`
                ? hu.ownerDocument.body
                : hu
            ).removeChild(n.stateNode),
              (zt = !0))
          } catch (e) {
            mf(n, t, e)
          }
        else
          try {
            ;(hu.removeChild(n.stateNode), (zt = !0))
          } catch (e) {
            mf(n, t, e)
          }
      }
      break
    case 18:
      hu !== null &&
        (gu
          ? ((e = hu),
            Ep(
              e.nodeType === 9 ? e.body : e.nodeName === `HTML` ? e.ownerDocument.body : e,
              n.stateNode,
            ),
            Gh(e))
          : Ep(hu, n.stateNode))
      break
    case 4:
      ;((r = hu),
        (i = gu),
        (hu = n.stateNode.containerInfo),
        (gu = !0),
        _u(e, t, n),
        (hu = r),
        (gu = i))
      break
    case 0:
    case 11:
    case 14:
    case 15:
      ;(gl(2, n, t), $l || gl(4, n, t), _u(e, t, n))
      break
    case 1:
      ;($l ||
        (bl(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == `function` && vl(n, t, r)),
        _u(e, t, n))
      break
    case 21:
      _u(e, t, n)
      break
    case 22:
      ;(($l = (r = $l) || n.memoizedState !== null), _u(e, t, n), ($l = r))
      break
    case 30:
      ;(bl(n, t), _u(e, t, n))
      break
    case 7:
      ;($l || bl(n, t), _u(e, t, n))
      break
    default:
      _u(e, t, n)
  }
}
