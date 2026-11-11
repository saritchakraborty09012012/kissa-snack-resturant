function mf(e, t, n) {
  if (e.tag === 3) pf(e, e, n)
  else
    for (; t !== null;) {
      if (t.tag === 3) {
        pf(t, e, n)
        break
      }
      if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == `function` ||
          (typeof r.componentDidCatch == `function` && (vd === null || !vd.has(r)))
        ) {
          ;((e = Fi(n, e)),
            (n = Sc(2)),
            (r = uo(t, n, 2)),
            r !== null && (Cc(n, r, t, e), at(r, 2), Df(r)))
          break
        }
      }
      t = t.return
    }
}
