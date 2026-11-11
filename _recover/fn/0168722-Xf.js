function Xf(e, t) {
  for (var n = t + `Capture`, r = []; e !== null;) {
    var i = e,
      a = i.stateNode
    if (
      ((i = i.tag),
      (i !== 5 && i !== 26 && i !== 27) ||
        a === null ||
        ((i = bn(e, n)),
        i != null && r.unshift(Yf(e, i, a)),
        (i = bn(e, t)),
        i != null && r.push(Yf(e, i, a))),
      e.tag === 3)
    )
      return r
    e = e.return
  }
  return []
}
