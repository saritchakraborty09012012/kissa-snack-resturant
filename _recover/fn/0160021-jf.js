function jf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      a = e.pendingLanes & -62914561;
    0 < a;
  ) {
    var o = 31 - Ge(a),
      s = 1 << o,
      c = i[o]
    ;(c === -1
      ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = nt(s, t))
      : c <= t && (e.expiredLanes |= s),
      (a &= ~s))
  }
  if (
    ((t = Xu),
    (n = Qu),
    (n = $e(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
    (r = e.callbackNode),
    n === 0 || (e === t && ($u === 2 || $u === 9)) || e.cancelPendingCommit !== null)
  )
    return (
      r !== null && r !== null && je(r),
      (e.callbackNode = null),
      (e.callbackPriority = 0)
    )
  if (!(n & 3) || et(e, n)) {
    if (((t = n & -n), t === e.callbackPriority)) return t
    switch ((r !== null && je(r), dt(n))) {
      case 2:
      case 8:
        n = Ie
        break
      case 32:
        n = Le
        break
      case 268435456:
        n = ze
        break
      default:
        n = Le
    }
    return (
      (r = Mf.bind(null, e)),
      (n = Ae(n, r)),
      (e.callbackPriority = t),
      (e.callbackNode = n),
      t
    )
  }
  return (
    r !== null && r !== null && je(r),
    (e.callbackPriority = 2),
    (e.callbackNode = null),
    2
  )
}
