function ln(e, t, n, r) {
  return (
    (e = { tag: e, create: n, deps: r, inst: t, next: null }),
    (t = td.updateQueue),
    t === null && ((t = Pt()), (td.updateQueue = t)),
    (n = t.lastEffect),
    n === null
      ? (t.lastEffect = e.next = e)
      : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
    e
  )
}
