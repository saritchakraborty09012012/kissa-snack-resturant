function ot(e, t, n, r, i, a) {
  var o = e.pendingLanes
  ;((e.pendingLanes = n),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.warmLanes = 0),
    (e.expiredLanes &= n),
    (e.entangledLanes &= n),
    (e.errorRecoveryDisabledLanes &= n),
    (e.shellSuspendCounter = 0))
  var s = e.entanglements,
    c = e.expirationTimes,
    l = e.hiddenUpdates
  for (n = o & ~n; 0 < n;) {
    var u = 31 - Ge(n),
      d = 1 << u
    ;((s[u] = 0), (c[u] = -1))
    var f = l[u]
    if (f !== null)
      for (l[u] = null, u = 0; u < f.length; u++) {
        var p = f[u]
        p !== null && (p.lane &= -536870913)
      }
    n &= ~d
  }
  ;(r !== 0 && st(e, r, 0),
    a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t)))
}
