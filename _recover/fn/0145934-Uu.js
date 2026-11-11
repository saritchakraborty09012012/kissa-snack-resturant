function Uu(e) {
  var t = e.deletions
  if (e.flags & 16) {
    if (t !== null)
      for (var n = 0; n < t.length; n++) {
        var r = t[n]
        ;((ru = r), Ku(r, e))
      }
    Hu(e)
  }
  if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) (Wu(e), (e = e.sibling))
}
