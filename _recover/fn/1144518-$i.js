function $i(e) {
  var t = e.alternate
  if (t !== null && ((e = t.child), e !== null)) {
    t.child = null
    do ((t = e.sibling), (e.sibling = null), (e = t))
    while (e !== null)
  }
}
