function ff() {
  if (yd !== 5) return !1
  var e = bd,
    t = Cd
  Cd = 0
  var n = dt(Sd),
    r = L.T,
    a = R.p
  try {
    ;((R.p = 32 > n ? 32 : n), (L.T = null), (n = wd), (wd = null))
    var o = bd,
      s = Sd
    if (((yd = 0), (xd = bd = null), (Sd = 0), Yu & 6)) throw Error(i(331))
    var c = Yu
    if (
      ((Yu |= 4),
      Wu(o.current),
      Iu(o, o.current, s, n),
      (Yu = c),
      Of(0, !1),
      Ue && typeof Ue.onPostCommitFiberRoot == `function`)
    )
      try {
        Ue.onPostCommitFiberRoot(He, o)
      } catch {}
    return !0
  } finally {
    ;((R.p = a), (L.T = r), uf(e, t))
  }
}
