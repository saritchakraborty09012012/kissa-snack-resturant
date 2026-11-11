function kr(e, t, n, r) {
  if (ns)
    for (n = t.child; n !== null;) {
      if (n.tag === 5 || n.tag === 6) Jo(e, n.stateNode)
      else if (!(n.tag === 4 || (ml && n.tag === 27)) && n.child !== null) {
        ;((n.child.return = n), (n = n.child))
        continue
      }
      if (n === t) break
      for (; n.sibling === null;) {
        if (n.return === null || n.return === t) return
        n = n.return
      }
      ;((n.sibling.return = n.return), (n = n.sibling))
    }
  else if (rs)
    for (var i = t.child; i !== null;) {
      if (i.tag === 5) {
        var a = i.stateNode
        ;(n && r && (a = gc(a, i.type, i.memoizedProps)), Jo(e, a))
      } else if (i.tag === 6)
        ((a = i.stateNode), n && r && (a = _c(a, i.memoizedProps)), Jo(e, a))
      else if (i.tag !== 4) {
        if (i.tag === 22 && i.memoizedState !== null)
          ((a = i.child), a !== null && (a.return = i), kr(e, i, !0, !0))
        else if (i.child !== null) {
          ;((i.child.return = i), (i = i.child))
          continue
        }
      }
      if (i === t) break
      for (; i.sibling === null;) {
        if (i.return === null || i.return === t) return
        i = i.return
      }
      ;((i.sibling.return = i.return), (i = i.sibling))
    }
}
