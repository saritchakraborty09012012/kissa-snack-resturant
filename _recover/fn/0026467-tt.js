function tt(e, t) {
  t & 8 && (t |= t & 32)
  var n = e.entangledLanes
  if (n !== 0)
    for (e = e.entanglements, n &= t; 0 < n;) {
      var r = 31 - Ge(n),
        i = 1 << r
      ;((t |= e[r]), (n &= ~i))
    }
  return t
}
