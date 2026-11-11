function Gu(e) {
  var t = e.deletions
  if (e.flags & 16) {
    if (t !== null)
      for (var n = 0; n < t.length; n++) {
        var r = t[n]
        ;((ru = r), Ku(r, e))
      }
    Hu(e)
  }
  for (e = e.child; e !== null;) {
    switch (((t = e), t.tag)) {
      case 0:
      case 11:
      case 15:
        ;(gl(8, t, t.return), Gu(t))
        break
      case 22:
        ;((n = t.stateNode), n._visibility & 2 && ((n._visibility &= -3), Gu(t)))
        break
      default:
        Gu(t)
    }
    e = e.sibling
  }
}
