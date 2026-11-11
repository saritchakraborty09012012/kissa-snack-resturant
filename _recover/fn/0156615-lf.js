function lf() {
  if (yd === 4 || yd === 3) {
    yd = 0
    var e = Ed
    ;((Ed = null), G())
    var t = bd,
      n = xd,
      r = Sd,
      i = Td,
      a = (r & 335544064) === r ? 10262 : 10256
    if (
      ((n.subtreeFlags & a) !== 0 || (n.flags & a) !== 0
        ? (yd = 5)
        : ((yd = 0), (xd = bd = null), uf(t, t.pendingLanes)),
      (a = t.pendingLanes),
      a === 0 && (vd = null),
      dt(r),
      (n = n.stateNode),
      Ue && typeof Ue.onCommitFiberRoot == `function`)
    )
      try {
        Ue.onCommitFiberRoot(He, n, void 0, (n.current.flags & 128) == 128)
      } catch {}
    if (i !== null) {
      ;((n = L.T), (a = R.p), (R.p = 2), (L.T = null))
      try {
        for (var o = t.onRecoverableError, s = 0; s < i.length; s++) {
          var c = i[s]
          o(c.value, { componentStack: c.stack })
        }
      } finally {
        ;((L.T = n), (R.p = a))
      }
    }
    if (
      ((i = Dd),
      (o = Od),
      (Od = null),
      i !== null && ((Dd = null), o === null && (o = []), e !== null))
    )
      for (c = 0; c < i.length; c++) ((n = (0, i[c])(o)), n !== void 0 && e.finished.finally(n))
    ;(Sd & 3 && df(),
      Df(t),
      (a = t.pendingLanes),
      r & 261930 && a & 42 ? (t === Ad ? kd++ : ((kd = 0), (Ad = t))) : ((kd = 0), (Ad = null)),
      Of(0, !1))
  }
}
