function jn(e) {
  for (var t = e.return; t !== null;) {
    switch (t.tag) {
      case 24:
      case 3:
        var n = la()
        e = it(n)
        var r = at(t, e, n)
        ;(r !== null && (fa(r, t, n), ot(r, t, n)), (t = { cache: xe() }), (e.payload = t))
        return
    }
    t = t.return
  }
}
