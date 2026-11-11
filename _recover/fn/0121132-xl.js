function xl(e, t) {
  if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && t !== null)
    for (var n = 0; n < t.length; n++) rm(e.stateNode, t[n])
}
