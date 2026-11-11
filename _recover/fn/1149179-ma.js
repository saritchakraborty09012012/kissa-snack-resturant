function ma(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
  e.timeoutHandle = es
  var m = t.subtreeFlags,
    h = (a & 335544064) === a
  ;((d = null),
    (h || m & 8192 || (m & 16785408) == 16785408) &&
    ((d = gs()),
    (xd = null),
    Qi(t, a, d),
    h && vs(d, e.containerInfo),
    (m = (a & 62914560) === a ? ff - Nl() : (a & 4194048) === a ? pf - Nl() : 0),
    (m = ys(d, m)),
    m !== null)
      ? ((bf = a),
        (e.cancelPendingCommit = m(
          Pa.bind(null, e, t, a, n, r, i, o, s, c, l, u, d, null, f, p),
        )),
        ga(e, a, o, !l))
      : Pa(e, t, a, n, r, i, o, s, c, l, u, d))
}
