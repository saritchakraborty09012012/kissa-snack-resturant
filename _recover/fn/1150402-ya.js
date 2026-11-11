function ya(e, t) {
  var n = e.timeoutHandle
  return (
    n !== es && ((e.timeoutHandle = es), $o(n)),
    (n = e.cancelPendingCommit),
    n !== null && ((e.cancelPendingCommit = null), n()),
    (bf = 0),
    va(),
    (qd = e),
    (Jd = n = eo(e.current, null)),
    (Yd = t),
    (Xd = 0),
    (Zd = null),
    (Qd = !1),
    ($d = _(e, t)),
    (ef = !1),
    (cf = sf = of = af = rf = nf = 0),
    (uf = lf = null),
    (df = !1),
    (tf = y(e, t)),
    Xe(),
    n
  )
}
