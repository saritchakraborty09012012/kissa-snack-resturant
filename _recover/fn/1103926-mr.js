function mr(e, t, n) {
  return (
    Hu(t, e.child, null, n),
    (e = fr(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
