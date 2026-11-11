function $t(e, t, n) {
  ;((t.status = `fulfilled`),
    (t.value = n),
    tn(t),
    (e.state = n),
    (t = e.pending),
    t !== null &&
      ((n = t.next), n === t ? (e.pending = null) : ((n = n.next), (t.next = n), Zt(e, n))))
}
