function ac(e, t) {
  Ro = Lo = !0
  var n = e.pending
  ;(n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t))
}
