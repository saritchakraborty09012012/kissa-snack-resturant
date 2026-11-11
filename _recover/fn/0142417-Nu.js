function Nu(e, t) {
  var n = null
  ;(e !== null &&
    e.memoizedState !== null &&
    e.memoizedState.cachePool !== null &&
    (n = e.memoizedState.cachePool.pool),
    (e = null),
    t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (e = t.memoizedState.cachePool.pool),
    e !== n && (e != null && e.refCount++, n != null && Da(n)))
}
