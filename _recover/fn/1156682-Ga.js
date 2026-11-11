function Ga(e, t, n) {
  if (e.tag === 3) Wa(e, e, n)
  else
    for (; t !== null;) {
      if (t.tag === 3) {
        Wa(t, e, n)
        break
      }
      if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == `function` ||
          (typeof r.componentDidCatch == `function` && (gf === null || !gf.has(r)))
        ) {
          ;((e = ne(n, e)),
            (n = Kn(2)),
            (r = at(t, n, 2)),
            r !== null && (qn(n, r, t, e), C(r, 2), Ee(r)))
          break
        }
      }
      t = t.return
    }
}
