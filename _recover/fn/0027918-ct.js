function ct(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n;) {
    var r = 31 - Ge(n),
      i = 1 << r
    ;((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i))
  }
}
