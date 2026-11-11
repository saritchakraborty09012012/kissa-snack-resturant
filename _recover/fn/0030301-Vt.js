function Vt(e, t, n) {
  if (Rt(t)) {
    if (n === null) e.removeAttribute(t)
    else {
      switch (typeof n) {
        case `undefined`:
        case `function`:
        case `symbol`:
          e.removeAttribute(t)
          return
        case `boolean`:
          var r = t.toLowerCase().slice(0, 5)
          if (r !== `data-` && r !== `aria-`) {
            e.removeAttribute(t)
            return
          }
      }
      e.setAttribute(t, n)
    }
  }
}
