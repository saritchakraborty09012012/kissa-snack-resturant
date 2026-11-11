function ks(e, t, n, r) {
  return (
    (e = { tag: e, create: n, deps: r, inst: t, next: null }),
    (t = J.updateQueue),
    t === null && ((t = ts()), (J.updateQueue = t)),
    (n = t.lastEffect),
    n === null
      ? (t.lastEffect = e.next = e)
      : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
    e
  )
}
