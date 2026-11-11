function xi(e, t, n, r, i, a, o) {
  if (!ns) return !1
  for (var s = !1; t !== null;) {
    if (t.tag === 5) {
      var c = t.stateNode
      if (a !== null && Cd < a.length) {
        var l = a[Cd],
          u = Zs(c)
        ;(($s(l) || $s(u)) && (s = !0),
          !(e.flags & 4) && ec(l, u) && (e.flags |= 4),
          tc(l, u) && (e.flags |= 32))
      } else e.flags |= 32
      ;(e.flags & 4 && Ks(c, Cd === 0 ? n : n + `_` + Cd, i),
        (s && e.flags & 4) ||
          (Sd === null && (Sd = []), Sd.push(c, Cd === 0 ? r : r + `_` + Cd, t.memoizedProps)),
        Cd++)
    } else
      (t.tag !== 22 || t.memoizedState === null) &&
        (t.tag === 30 && o
          ? (e.flags |= t.flags & 32)
          : xi(e, t.child, n, r, i, a, o) && (s = !0))
    t = t.sibling
  }
  return s
}
