function zn(e, t, n, r) {
  ;((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : _o({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n))
}
