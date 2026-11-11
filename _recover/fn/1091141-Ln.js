function Ln(e, t) {
  ad = id = !0
  var n = e.pending
  ;(n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t))
}
