function Rh(e) {
  var t = Tt(e.target)
  if (t !== null) {
    var n = o(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = s(n)), t !== null)) {
          ;((e.blockedOn = t),
            pt(e.priority, function () {
              vh(n)
            }))
          return
        }
      } else if (t === 31) {
        if (((t = c(n)), t !== null)) {
          ;((e.blockedOn = t),
            pt(e.priority, function () {
              vh(n)
            }))
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
