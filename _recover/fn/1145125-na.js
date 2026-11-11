function na(e) {
  var t = e.deletions
  if (e.flags & 16) {
    if (t !== null)
      for (var n = 0; n < t.length; n++) {
        var r = t[n]
        ;((kd = r), ra(r, e))
      }
    $i(e)
  }
  for (e = e.child; e !== null;) {
    switch (((t = e), t.tag)) {
      case 0:
      case 11:
      case 15:
        ;(Hr(8, t, t.return), na(t))
        break
      case 22:
        ;((n = t.stateNode), n._visibility & 2 && ((n._visibility &= -3), na(t)))
        break
      default:
        na(t)
    }
    e = e.sibling
  }
}
