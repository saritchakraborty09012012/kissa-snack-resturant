function xi(e, t, n) {
  e.lanes |= n
  var r = e.alternate
  r !== null && (r.lanes |= n)
  for (var i = !1, a = e.return; a !== null;)
    ((a.childLanes |= n),
      (r = a.alternate),
      r !== null && (r.childLanes |= n),
      a.tag === 22 && ((e = a.stateNode), e === null || e._visibility & 1 || (i = !0)),
      (e = a),
      (a = a.return))
  return e.tag === 3
    ? ((a = e.stateNode),
      i &&
        t !== null &&
        ((i = 31 - Ge(n)),
        (e = a.hiddenUpdates),
        (r = e[i]),
        r === null ? (e[i] = [t]) : r.push(t),
        (t.lane = n | 536870912)),
      a)
    : null
}
