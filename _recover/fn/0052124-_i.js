function _i() {
  for (var e = hi, t = (gi = hi = 0); t < e;) {
    var n = mi[t]
    mi[t++] = null
    var r = mi[t]
    mi[t++] = null
    var i = mi[t]
    mi[t++] = null
    var a = mi[t]
    if (((mi[t++] = null), r !== null && i !== null)) {
      var o = r.pending
      ;(o === null ? (i.next = i) : ((i.next = o.next), (o.next = i)), (r.pending = i))
    }
    a !== 0 && xi(n, i, a)
  }
}
