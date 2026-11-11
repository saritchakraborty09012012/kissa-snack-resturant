function _r(e) {
  for (var t = null; e !== null;) {
    var n = e.alternate
    ;(n !== null && St(n) === null && (t = e), (e = e.sibling))
  }
  return t
}
