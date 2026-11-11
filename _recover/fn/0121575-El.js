function El(e) {
  var t = e.type,
    n = e.memoizedProps,
    r = e.stateNode
  try {
    a: switch (t) {
      case `button`:
      case `input`:
      case `select`:
      case `textarea`:
        n.autoFocus && r.focus()
        break a
      case `img`:
        n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet)
    }
  } catch (t) {
    mf(e, e.return, t)
  }
}
