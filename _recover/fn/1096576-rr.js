function rr(e, t, n) {
  return (
    Hu(t, e.child, null, n),
    (e = nr(t, t.pendingProps)),
    (e.flags |= 2),
    yt(t),
    (t.memoizedState = null),
    e
  )
}
