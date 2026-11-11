function E(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n;) {
    var r = 31 - Cl(n),
      i = 1 << r
    ;((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i))
  }
}
