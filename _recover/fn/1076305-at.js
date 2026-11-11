function at(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), Kd & 2)) {
    var i = r.pending
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      (t = tt(e)),
      et(e, null, n),
      t
    )
  }
  return (Ze(e, r, t, n), tt(e))
}
