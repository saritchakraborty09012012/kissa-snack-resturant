function ga(e, t, n, r) {
  ;((t = y(e, t)),
    (t &= ~of),
    (t &= ~af),
    (e.suspendedLanes |= t),
    (e.pingedLanes &= ~t),
    r && (e.warmLanes |= t),
    (r = e.expirationTimes))
  for (var i = t; 0 < i;) {
    var a = 31 - Cl(i),
      o = 1 << a
    ;((r[a] = -1), (i &= ~o))
  }
  n !== 0 && T(e, n, t)
}
