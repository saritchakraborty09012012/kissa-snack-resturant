function Vd(e, t) {
  var n = e.timeoutHandle
  return (
    n !== -1 && ((e.timeoutHandle = -1), bp(n)),
    (n = e.cancelPendingCommit),
    n !== null && ((e.cancelPendingCommit = null), n()),
    (Sd = 0),
    Bd(),
    (Xu = e),
    (Zu = n = Di(e.current, null)),
    (Qu = t),
    ($u = 0),
    (ed = null),
    (td = !1),
    (nd = et(e, t)),
    (rd = !1),
    (ud = ld = cd = sd = od = ad = 0),
    (fd = dd = null),
    (pd = !1),
    (id = tt(e, t)),
    _i(),
    n
  )
}
