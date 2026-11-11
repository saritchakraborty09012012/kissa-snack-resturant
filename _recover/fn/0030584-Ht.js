function Ht(e, t, n) {
  if (n === null) e.removeAttribute(t)
  else {
    switch (typeof n) {
      case `undefined`:
      case `function`:
      case `symbol`:
      case `boolean`:
        e.removeAttribute(t)
        return
    }
    e.setAttribute(t, n)
  }
}
