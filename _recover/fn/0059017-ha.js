function ha(e, t, n, r) {
  var a = e.child
  for (a !== null && (a.return = e); a !== null;) {
    var o = a.dependencies
    if (o !== null) {
      var s = a.child
      o = o.firstContext
      a: for (; o !== null;) {
        var c = o
        o = a
        for (var l = 0; l < t.length; l++)
          if (c.context === t[l]) {
            ;((o.lanes |= n),
              (c = o.alternate),
              c !== null && (c.lanes |= n),
              ma(o.return, n, e),
              r || (s = null))
            break a
          }
        o = c.next
      }
    } else if (a.tag === 18) {
      if (((s = a.return), s === null)) throw Error(i(341))
      ;((s.lanes |= n),
        (o = s.alternate),
        o !== null && (o.lanes |= n),
        ma(s, n, e),
        (s = null))
    } else
      a.tag === 13 && a.memoizedState !== null && a.memoizedState.dehydrated === null
        ? ((a.lanes |= n),
          (s = a.alternate),
          s !== null && (s.lanes |= n),
          ma(a.return, n, e),
          (s = a.child),
          (s = s === null ? null : s.sibling))
        : (s = a.child)
    if (s !== null) s.return = a
    else
      for (s = a; s !== null;) {
        if (s === e) {
          s = null
          break
        }
        if (((a = s.sibling), a !== null)) {
          ;((a.return = s.return), (s = a))
          break
        }
        s = s.return
      }
    a = s
  }
}
