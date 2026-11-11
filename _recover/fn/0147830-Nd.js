function Nd(e, t) {
  if (t != null) {
    var n = e.stateNode,
      r = n.ref
    ;(r === null && (r = n.ref = Lp(ui(e.memoizedProps, n))),
      Dd === null && (Dd = []),
      Dd.push(t.bind(null, r)))
  }
}
