function bs(e, t, n) {
  ;((t.status = `fulfilled`),
    (t.value = n),
    Ss(t),
    (e.state = n),
    (t = e.pending),
    t !== null &&
      ((n = t.next), n === t ? (e.pending = null) : ((n = n.next), (t.next = n), vs(e, n))))
}
