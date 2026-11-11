function en(e, t, n) {
  var r = e.pending
  if (((e.pending = null), r !== null)) {
    r = r.next
    do ((t.status = `rejected`), (t.reason = n), tn(t), (t = t.next))
    while (t !== r)
  }
  e.action = null
}
