function Pi(e) {
  switch (e.tag) {
    case 31:
    case 13:
    case 19:
      var t = e.stateNode
      return (t === null && (t = e.stateNode = new Od()), t)
    case 22:
      return (
        (e = e.stateNode),
        (t = e._retryCache),
        t === null && (t = e._retryCache = new Od()),
        t
      )
    default:
      throw Error(r(435, e.tag))
  }
}
