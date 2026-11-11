function Th(e) {
  if (((wh = null), (e = Tt(e)), e !== null)) {
    var t = o(e)
    if (t === null) e = null
    else {
      var n = t.tag
      if (n === 13) {
        if (((e = s(t)), e !== null)) return e
        e = null
      } else if (n === 31) {
        if (((e = c(t)), e !== null)) return e
        e = null
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null
        e = null
      } else t !== e && (e = null)
    }
  }
  return ((wh = e), null)
}
