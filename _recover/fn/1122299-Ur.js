function Ur(e) {
  var t = e.updateQueue
  if (t !== null) {
    var n = e.stateNode
    try {
      dt(t, n)
    } catch (t) {
      Ga(e, e.return, t)
    }
  }
}
