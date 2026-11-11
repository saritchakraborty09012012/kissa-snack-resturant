function Mt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }
  return (rd === null ? (td.memoizedState = rd = e) : (rd = rd.next = e), rd)
}
