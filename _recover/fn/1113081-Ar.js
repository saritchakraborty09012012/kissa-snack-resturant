function Ar(e, t, n, r) {
  var i = !1
  if (rs)
    for (var a = t.child; a !== null;) {
      if (a.tag === 5) {
        var o = a.stateNode
        ;(n && r && (o = gc(o, a.type, a.memoizedProps)), pc(e, o))
      } else if (a.tag === 6)
        ((o = a.stateNode), n && r && (o = _c(o, a.memoizedProps)), pc(e, o))
      else if (a.tag !== 4) {
        if (a.tag === 22 && a.memoizedState !== null)
          ((i = a.child), i !== null && (i.return = a), Ar(e, a, !0, !0), (i = !0))
        else if (a.child !== null) {
          ;((a.child.return = a), (a = a.child))
          continue
        }
      }
      if (a === t) break
      for (; a.sibling === null;) {
        if (a.return === null || a.return === t) return i
        a = a.return
      }
      ;((a.sibling.return = a.return), (a = a.sibling))
    }
  return i
}
