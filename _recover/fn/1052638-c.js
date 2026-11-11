function c(e) {
  var t = e.tag
  if (t === 5 || t === 26 || t === 27 || t === 6) return e
  for (e = e.child; e !== null;) {
    if (e.tag !== 4 && ((t = c(e)), t !== null)) return t
    e = e.sibling
  }
  return null
}
