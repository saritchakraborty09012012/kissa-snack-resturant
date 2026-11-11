function fh(e, t, n, r, i, a, o, s, c, l, u, d) {
  return (
    (e = new dh(e, t, n, o, c, l, u, d, s)),
    (t = 1),
    !0 === a && (t |= 24),
    (a = Ti(3, null, null, t)),
    (e.current = a),
    (a.stateNode = e),
    (t = Ea()),
    t.refCount++,
    (e.pooledCache = t),
    t.refCount++,
    (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
    so(a),
    e
  )
}
