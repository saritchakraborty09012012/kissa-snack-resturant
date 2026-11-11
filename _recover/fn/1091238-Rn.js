function Rn(e, t, n) {
  if (n & 4194048) {
    var r = t.lanes
    ;((r &= e.pendingLanes), (n |= r), (t.lanes = n), E(e, n))
  }
}
