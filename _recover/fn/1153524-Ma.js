function Ma(e) {
  var t = e
  do {
    if (t.flags & 32768) {
      Na(t, Qd)
      return
    }
    e = t.return
    var n = Rr(t.alternate, t, tf)
    if (n !== null) {
      Jd = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      Jd = t
      return
    }
    Jd = t = e
  } while (t !== null)
  nf === 0 && (nf = 5)
}
