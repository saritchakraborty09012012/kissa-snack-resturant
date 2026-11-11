function uo(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), Yu & 2)) {
    var i = r.pending
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      (t = Si(e)),
      xi(e, null, n),
      t
    )
  }
  return (vi(e, r, t, n), Si(e))
}
