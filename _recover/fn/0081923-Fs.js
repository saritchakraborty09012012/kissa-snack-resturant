function Fs(e) {
  J.flags |= 4
  var t = J.updateQueue
  if (t === null) ((t = ts()), (J.updateQueue = t), (t.events = [e]))
  else {
    var n = t.events
    n === null ? (t.events = [e]) : n.push(e)
  }
}
