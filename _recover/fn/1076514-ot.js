function ot(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194048))) {
    var r = t.lanes
    ;((r &= e.pendingLanes), (n |= r), (t.lanes = n), E(e, n))
  }
}
