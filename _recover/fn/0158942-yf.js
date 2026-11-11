function yf(e, t) {
  var n = 0
  switch (e.tag) {
    case 31:
    case 13:
      var r = e.stateNode,
        a = e.memoizedState
      a !== null && (n = a.retryLane)
      break
    case 19:
      r = e.stateNode
      break
    case 22:
      r = e.stateNode._retryCache
      break
    default:
      throw Error(i(314))
  }
  ;(r !== null && r.delete(t), _f(e, n))
}
