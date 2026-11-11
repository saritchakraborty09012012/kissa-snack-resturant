function Sr(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies), (rf |= t.lanes), (n & t.childLanes) === 0)
  ) {
    if (e !== null) {
      if ((ye(e, t, n, !1), (n & t.childLanes) === 0)) return null
    } else return null
  }
  if (e !== null && t.child !== e.child) throw Error(r(153))
  if (t.child !== null) {
    for (e = t.child, n = eo(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)
      ((e = e.sibling), (n = n.sibling = eo(e, e.pendingProps)), (n.return = t))
    n.sibling = null
  }
  return t.child
}
