function Nt() {
  if (nd === null) {
    var e = td.alternate
    e = e === null ? null : e.memoizedState
  } else e = nd.next
  var t = rd === null ? td.memoizedState : rd.next
  if (t !== null) ((rd = t), (nd = e))
  else {
    if (e === null) throw td.alternate === null ? Error(r(467)) : Error(r(310))
    ;((nd = e),
      (e = {
        memoizedState: nd.memoizedState,
        baseState: nd.baseState,
        baseQueue: nd.baseQueue,
        queue: nd.queue,
        next: null,
      }),
      rd === null ? (td.memoizedState = rd = e) : (rd = rd.next = e))
  }
  return rd
}
