function es() {
  if (Io === null) {
    var e = J.alternate
    e = e === null ? null : e.memoizedState
  } else e = Io.next
  var t = Y === null ? J.memoizedState : Y.next
  if (t !== null) ((Y = t), (Io = e))
  else {
    if (e === null) throw J.alternate === null ? Error(i(467)) : Error(i(310))
    ;((Io = e),
      (e = {
        memoizedState: Io.memoizedState,
        baseState: Io.baseState,
        baseQueue: Io.baseQueue,
        queue: Io.queue,
        next: null,
      }),
      Y === null ? (J.memoizedState = Y = e) : (Y = Y.next = e))
  }
  return Y
}
