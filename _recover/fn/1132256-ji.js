function ji(e, t, n) {
  if (Vl && typeof Vl.onCommitFiberUnmount == `function`)
    try {
      Vl.onCommitFiberUnmount(Bl, n)
    } catch {}
  switch (n.tag) {
    case 26:
      if (el) {
        ;(Td || Kr(n, t),
          Ai(e, t, n),
          n.memoizedState ? al(n.memoizedState) : n.stateNode && (Td || cl(n.stateNode)))
        break
      }
    case 27:
      if (ml) {
        ;(Td || Kr(n, t), Xr(n))
        var r = Pd,
          i = Fd
        ;(yl(n.type) && ((Pd = n.stateNode), (Fd = !1)),
          Ai(e, t, n),
          _l(n.stateNode, n.type, n.memoizedProps),
          (Pd = r),
          (Fd = i))
        break
      }
    case 5:
      ;(Td || Kr(n, t), Xr(n))
    case 6:
      if ((n.tag === 6 && Xr(n), ns)) {
        if (((r = Pd), (i = Fd), (Pd = null), Ai(e, t, n), (Pd = r), (Fd = i), Pd !== null)) {
          if (Fd)
            try {
              ;(Vs(Pd, n.stateNode), (yd = !0))
            } catch (e) {
              Ga(n, t, e)
            }
          else
            try {
              ;(Bs(Pd, n.stateNode), (yd = !0))
            } catch (e) {
              Ga(n, t, e)
            }
        }
      } else Ai(e, t, n)
      break
    case 18:
      ns && Pd !== null && (Fd ? Jc(Pd, n.stateNode) : qc(Pd, n.stateNode))
      break
    case 4:
      ns
        ? ((r = Pd),
          (i = Fd),
          (Pd = n.stateNode.containerInfo),
          (Fd = !0),
          Ai(e, t, n),
          (Pd = r),
          (Fd = i))
        : (rs && oi(n.stateNode, n, fc()), Ai(e, t, n))
      break
    case 0:
    case 11:
    case 14:
    case 15:
      ;(Hr(2, n, t), Td || Hr(4, n, t), Ai(e, t, n))
      break
    case 1:
      ;(Td ||
        (Kr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == `function` && Wr(n, t, r)),
        Ai(e, t, n))
      break
    case 21:
      Ai(e, t, n)
      break
    case 22:
      ;((Td = (r = Td) || n.memoizedState !== null), Ai(e, t, n), (Td = r))
      break
    case 30:
      ;(Kr(n, t), Ai(e, t, n))
      break
    case 7:
      ;(Td || Kr(n, t), Ai(e, t, n))
      break
    default:
      Ai(e, t, n)
  }
}
