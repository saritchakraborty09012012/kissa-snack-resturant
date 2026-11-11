function za() {
  if (_f === 2) {
    _f = 0
    var e = vf,
      t = yf,
      n = !!(t.flags & 8772)
    if (t.subtreeFlags & 8772 || n) {
      ;((n = Ro.T), (Ro.T = null))
      var r = cs()
      ss(2)
      var i = Kd
      Kd |= 4
      try {
        Ti(e, t.alternate, t)
      } finally {
        ;((Kd = i), ss(r), (Ro.T = n))
      }
    }
    _f = 3
  }
}
