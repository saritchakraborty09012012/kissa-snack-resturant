function Rd(e, t, n, r) {
  ;((t = tt(e, t)),
    (t &= ~cd),
    (t &= ~sd),
    (e.suspendedLanes |= t),
    (e.pingedLanes &= ~t),
    r && (e.warmLanes |= t),
    (r = e.expirationTimes))
  for (var i = t; 0 < i;) {
    var a = 31 - Ge(i),
      o = 1 << a
    ;((r[a] = -1), (i &= ~o))
  }
  n !== 0 && st(e, n, t)
}
