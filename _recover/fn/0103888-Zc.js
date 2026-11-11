function Zc(e) {
  for (var t = null; e !== null;) {
    var n = e.alternate
    ;(n !== null && Po(n) === null && (t = e), (e = e.sibling))
  }
  return t
}
