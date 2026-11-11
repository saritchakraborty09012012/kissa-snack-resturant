function Ba() {
  if (_f === 4 || _f === 3) {
    _f = 0
    var e = wf
    ;((wf = null), Ml())
    var t = vf,
      n = yf,
      r = bf,
      i = Cf,
      a = (r & 335544064) === r ? 10262 : 10256
    if (
      ((n.subtreeFlags & a) !== 0 || (n.flags & a) !== 0
        ? (_f = 5)
        : ((_f = 0), (yf = vf = null), Va(t, t.pendingLanes)),
      (a = t.pendingLanes),
      a === 0 && (gf = null),
      k(r),
      (n = n.stateNode),
      Vl && typeof Vl.onCommitFiberRoot == `function`)
    )
      try {
        Vl.onCommitFiberRoot(Bl, n, void 0, (n.current.flags & 128) == 128)
      } catch {}
    if (i !== null) {
      ;((n = Ro.T), (a = cs()), ss(2), (Ro.T = null))
      try {
        for (var o = t.onRecoverableError, s = 0; s < i.length; s++) {
          var c = i[s]
          o(c.value, { componentStack: c.stack })
        }
      } finally {
        ;((Ro.T = n), ss(a))
      }
    }
    if (
      ((i = Tf),
      (o = Ef),
      (Ef = null),
      i !== null && ((Tf = null), o === null && (o = []), e !== null))
    )
      for (c = 0; c < i.length; c++) ((n = (0, i[c])(o)), n !== void 0 && ic(e, n))
    ;(bf & 3 && Ha(),
      Ee(t),
      (a = t.pendingLanes),
      r & 261930 && a & 42 ? (t === Of ? Df++ : ((Df = 0), (Of = t))) : ((Df = 0), (Of = null)),
      is && Kc(),
      De(0, !1))
  }
}
