function Xa(e, t) {
  var n = 0
  switch (e.tag) {
    case 31:
    case 13:
      var i = e.stateNode,
        a = e.memoizedState
      a !== null && (n = a.retryLane)
      break
    case 19:
      i = e.stateNode
      break
    case 22:
      i = e.stateNode._retryCache
      break
    default:
      throw Error(r(314))
  }
  ;(i !== null && i.delete(t), Ja(e, n))
}
