function Bl(e, t, n, r, i) {
  for (var a = !1; e !== null;) {
    if (e.tag === 5) {
      var o = e.stateNode
      if (r !== null) {
        var s = jp(o)
        ;(r.push(s), s.view && (a = !0))
      } else a || (jp(o).view && (a = !0))
      ;((Nl = !0), Op(o, Rl === 0 ? t : t + `_` + Rl, n), Rl++)
    } else
      (e.tag === 22 && e.memoizedState !== null) ||
        (e.tag === 30 && i) ||
        (Bl(e.child, t, n, r, i) && (a = !0))
    e = e.sibling
  }
  return a
}
