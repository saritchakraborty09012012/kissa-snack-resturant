function $c(e) {
  var t = e.child
  for (e.child = null; t !== null;) {
    var n = t.sibling
    ;((t.sibling = e.child), (e.child = t), (t = n))
  }
}
