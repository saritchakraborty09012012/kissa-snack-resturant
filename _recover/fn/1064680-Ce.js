function Ce(e, t) {
  if (e.pendingLanes & 4194048) {
    var n = e.transitionTypes
    for (n === null && (n = e.transitionTypes = []), e = 0; e < t.length; e++) {
      var r = t[e]
      n.indexOf(r) === -1 && n.push(r)
    }
  }
}
