function st(e, t, n) {
  ;((e.pendingLanes |= t), (e.suspendedLanes &= ~t))
  var r = 31 - Ge(t)
  ;((e.entangledLanes |= t),
    (e.entanglements[r] = e.entanglements[r] | 1073741824 | (n & 261930)))
}
