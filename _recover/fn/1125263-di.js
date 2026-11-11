function di(e, t, n, r, i) {
  if (!ns) return !1
  for (var a = !1; e !== null;) {
    if (e.tag === 5) {
      var o = e.stateNode
      if (r !== null) {
        var s = Zs(o)
        ;(r.push(s), $s(s) && (a = !0))
      } else a || ($s(Zs(o)) && (a = !0))
      ;((bd = !0), Ks(o, Cd === 0 ? t : t + `_` + Cd, n), Cd++)
    } else
      (e.tag === 22 && e.memoizedState !== null) ||
        (e.tag === 30 && i) ||
        (di(e.child, t, n, r, i) && (a = !0))
    e = e.sibling
  }
  return a
}
