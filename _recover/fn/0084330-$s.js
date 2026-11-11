function $s(e) {
  for (var t = e.return; t !== null;) {
    switch (t.tag) {
      case 24:
      case 3:
        var n = jd()
        e = lo(n)
        var r = uo(t, e, n)
        ;(r !== null && (Pd(r, t, n), fo(r, t, n)), (t = { cache: Ea() }), (e.payload = t))
        return
    }
    t = t.return
  }
}
