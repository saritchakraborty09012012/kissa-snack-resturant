function Xl(e, t, n, r, i, a, o) {
  for (var s = !1; t !== null;) {
    if (t.tag === 5) {
      var c = t.stateNode
      if (a !== null && Rl < a.length) {
        var l = a[Rl],
          u = jp(c)
        ;(l.view || u.view) && (s = !0)
        var d
        if ((d = !(e.flags & 4))) {
          if (u.clip) d = !0
          else {
            d = l.rect
            var f = u.rect
            d = d.y !== f.y || d.x !== f.x || d.height !== f.height || d.width !== f.width
          }
        }
        ;(d && (e.flags |= 4),
          u.abs
            ? (u = !l.abs)
            : ((l = l.rect), (u = u.rect), (u = l.height !== u.height || l.width !== u.width)),
          u && (e.flags |= 32))
      } else e.flags |= 32
      ;(e.flags & 4 && Op(c, Rl === 0 ? n : n + `_` + Rl, i),
        (s && e.flags & 4) ||
          (Il === null && (Il = []), Il.push(c, Rl === 0 ? r : r + `_` + Rl, t.memoizedProps)),
        Rl++)
    } else
      (t.tag !== 22 || t.memoizedState === null) &&
        (t.tag === 30 && o
          ? (e.flags |= t.flags & 32)
          : Xl(e, t.child, n, r, i, a, o) && (s = !0))
    t = t.sibling
  }
  return s
}
