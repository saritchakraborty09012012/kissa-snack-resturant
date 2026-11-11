function Po(e) {
  for (var t = e; t !== null;) {
    if (t.tag === 13) {
      var n = t.memoizedState
      if (n !== null && ((n = n.dehydrated), n === null || lm(n) || um(n))) return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== `independent`) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      ;((t.child.return = t), (t = t.child))
      continue
    }
    if (t === e) break
    for (; t.sibling === null;) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;((t.sibling.return = t.return), (t = t.sibling))
  }
  return null
}
var Fo = 0,
  J = null,
  Io = null,
  Y = null,
  Lo = !1,
  Ro = !1,
  zo = !1,
  Bo = 0,
  Vo = 0,
  Ho = null,
  Uo = 0
