function so(e, n, r, i, a, o, s, c, l, u, d, f) {
  return (
    (e = new oo(e, n, r, s, l, u, d, f, c)),
    (n = 1),
    o === !0 && (n |= 24),
    (o = t(3, null, null, n)),
    (e.current = o),
    (o.stateNode = e),
    (n = xe()),
    n.refCount++,
    (e.pooledCache = n),
    n.refCount++,
    (o.memoizedState = { element: i, isDehydrated: r, cache: n }),
    nt(o),
    e
  )
}
