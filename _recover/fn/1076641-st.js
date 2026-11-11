function st(e, t) {
  var n = e.updateQueue,
    r = e.alternate
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      a = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null }
        ;(a === null ? (i = a = o) : (a = a.next = o), (n = n.next))
      } while (n !== null)
      a === null ? (i = a = t) : (a = a.next = t)
    } else i = a = t
    ;((n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: a,
      shared: r.shared,
      callbacks: r.callbacks,
    }),
      (e.updateQueue = n))
  } else
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t))
}
