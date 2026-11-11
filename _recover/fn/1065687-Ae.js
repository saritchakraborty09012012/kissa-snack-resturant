function Ae(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      a = e.pendingLanes & -62914561;
    0 < a;
  ) {
    var o = 31 - Cl(a),
      s = 1 << o,
      c = i[o]
    ;(c === -1
      ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = b(s, t))
      : c <= t && (e.expiredLanes |= s),
      (a &= ~s))
  }
  if (
    ((t = qd),
    (n = Yd),
    (n = g(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== es)),
    (r = e.callbackNode),
    n === 0 || (e === t && (Xd === 2 || Xd === 9)) || e.cancelPendingCommit !== null)
  )
    return (
      r !== null && r !== null && Al(r),
      (e.callbackNode = null),
      (e.callbackPriority = 0)
    )
  if (!(n & 3) || _(e, n)) {
    if (((t = n & -n), t === e.callbackPriority)) return t
    switch ((r !== null && Al(r), k(n))) {
      case 2:
      case 8:
        n = Fl
        break
      case 32:
        n = Il
        break
      case 268435456:
        n = Ll
        break
      default:
        n = Il
    }
    return (
      (r = je.bind(null, e)),
      (n = kl(n, r)),
      (e.callbackPriority = t),
      (e.callbackNode = n),
      t
    )
  }
  return (
    r !== null && r !== null && Al(r),
    (e.callbackPriority = 2),
    (e.callbackNode = null),
    2
  )
}
