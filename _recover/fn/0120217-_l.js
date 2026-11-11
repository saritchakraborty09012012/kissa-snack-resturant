function _l(e) {
  var t = e.updateQueue
  if (t !== null) {
    var n = e.stateNode
    try {
      vo(t, n)
    } catch (t) {
      mf(e, e.return, t)
    }
  }
}
