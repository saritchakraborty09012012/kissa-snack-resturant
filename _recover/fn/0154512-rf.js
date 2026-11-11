function rf(e, t, n, r, i, a, o) {
  var s = t.lanes | t.childLanes
  if (
    ((Cd = s),
    (s |= gi),
    ot(e, n, s, r, i, a),
    (Dd = null),
    (n & 335544064) === n ? ((Od = Aa(e)), (r = 10262)) : ((Od = null), (r = 10256)),
    (t.subtreeFlags & r) !== 0 || (t.flags & r) !== 0
      ? ((e.callbackNode = null),
        (e.callbackPriority = 0),
        bf(Le, function () {
          return (ff(), null)
        }))
      : ((e.callbackNode = null), (e.callbackPriority = 0)),
    (Nl = !1),
    (r = !!(t.flags & 13878)),
    t.subtreeFlags & 13878 || r)
  ) {
    ;((r = L.T), (L.T = null), (i = R.p), (R.p = 2), (a = Yu), (Yu |= 4))
    try {
      cu(e, t, n)
    } finally {
      ;((Yu = a), (R.p = i), (L.T = r))
    }
  }
  ;((yd = 1),
    Nl
      ? (Ed = Fp(o, e.containerInfo, Od, sf, cf, of, lf, ff, af, null, null))
      : (sf(), cf(), lf()))
}
