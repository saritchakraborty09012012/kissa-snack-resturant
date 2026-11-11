function Ua() {
  if (_f !== 5) return !1
  var e = vf,
    t = xf
  xf = 0
  var n = k(bf),
    i = 32 > n ? 32 : n
  n = Ro.T
  var a = cs()
  try {
    ;(ss(i), (Ro.T = null), (i = Sf), (Sf = null))
    var o = vf,
      s = bf
    if (((_f = 0), (yf = vf = null), (bf = 0), Kd & 6)) throw Error(r(331))
    var c = Kd
    if (
      ((Kd |= 4),
      ta(o.current),
      Ji(o, o.current, s, i),
      (Kd = c),
      De(0, !1),
      Vl && typeof Vl.onPostCommitFiberRoot == `function`)
    )
      try {
        Vl.onPostCommitFiberRoot(Bl, o)
      } catch {}
    return !0
  } finally {
    ;(ss(a), (Ro.T = n), Va(e, t))
  }
}
