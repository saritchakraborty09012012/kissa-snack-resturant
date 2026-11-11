function Xe() {
  for (var e = Gu, t = (Ku = Gu = 0); t < e;) {
    var n = Wu[t]
    Wu[t++] = null
    var r = Wu[t]
    Wu[t++] = null
    var i = Wu[t]
    Wu[t++] = null
    var a = Wu[t]
    if (((Wu[t++] = null), r !== null && i !== null)) {
      var o = r.pending
      ;(o === null ? (i.next = i) : ((i.next = o.next), (o.next = i)), (r.pending = i))
    }
    a !== 0 && et(n, i, a)
  }
}
