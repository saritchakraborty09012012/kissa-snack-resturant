function hn(e) {
  td.flags |= 4
  var t = td.updateQueue
  if (t === null) ((t = Pt()), (td.updateQueue = t), (t.events = [e]))
  else {
    var n = t.events
    n === null ? (t.events = [e]) : n.push(e)
  }
}
