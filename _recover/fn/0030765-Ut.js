function Ut(e, t, n, r) {
  if (r === null) e.removeAttribute(n)
  else {
    switch (typeof r) {
      case `undefined`:
      case `function`:
      case `symbol`:
      case `boolean`:
        e.removeAttribute(n)
        return
    }
    e.setAttributeNS(t, n, r)
  }
}
