function Mr(e, t, n, r) {
  if (ns) e.memoizedProps !== r && Er(t)
  else if (rs) {
    var i = e.stateNode,
      a = e.memoizedProps
    if ((e = Or(e, t)) || a !== r) {
      var o = au.current
      ;((a = dc(i, n, a, r, !e, null)),
        a === i
          ? (t.stateNode = i)
          : (Dr(t), Yo(a, n, r, o) && Er(t), (t.stateNode = a), e && kr(a, t, !1, !1)))
    } else t.stateNode = i
  }
}
