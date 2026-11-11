function H(e, t) {
  switch ((z(be, t), z(ye, e), z(B, null), t.nodeType)) {
    case 9:
    case 11:
      e = (e = t.documentElement) && (e = e.namespaceURI) ? pp(e) : 0
      break
    default:
      if (((e = t.tagName), (t = t.namespaceURI))) ((t = pp(t)), (e = mp(t, e)))
      else
        switch (e) {
          case `svg`:
            e = 1
            break
          case `math`:
            e = 2
            break
          default:
            e = 0
        }
  }
  ;(ve(B), z(B, e))
}
