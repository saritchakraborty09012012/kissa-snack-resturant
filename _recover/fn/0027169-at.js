function at(e, t) {
  ;((e.pendingLanes |= t),
    t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)))
}
