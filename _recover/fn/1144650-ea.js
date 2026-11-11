function ea(e) {
  var t = e.deletions
  if (e.flags & 16) {
    if (t !== null)
      for (var n = 0; n < t.length; n++) {
        var r = t[n]
        ;((kd = r), ra(r, e))
      }
    $i(e)
  }
  if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) (ta(e), (e = e.sibling))
}
