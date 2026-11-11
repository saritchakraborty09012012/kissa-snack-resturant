function qi(e, t, n, r) {
  var i = (n & 335544064) === n
  if (t.subtreeFlags & (i ? 10262 : 10256))
    for (t = t.child; t !== null;) (Ji(e, t, n, r), (t = t.sibling))
  else i && bi(t)
}
