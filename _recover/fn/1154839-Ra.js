function Ra() {
  if (_f === 1) {
    _f = 0
    var e = vf,
      t = yf,
      n = bf,
      r = !!(t.flags & 13878)
    if (t.subtreeFlags & 13878 || r) {
      ;((r = Ro.T), (Ro.T = null))
      var i = cs()
      ss(2)
      var a = Kd
      Kd |= 4
      try {
        ;((jd = Md = !1), Li(t, e, n), Ko(e.containerInfo))
      } finally {
        ;((Kd = a), ss(i), (Ro.T = r))
      }
    }
    ;((e.current = t), (_f = 2))
  }
}
