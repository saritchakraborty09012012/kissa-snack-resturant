function Cm(e) {
  if (typeof e.getRootNode == `function`) {
    var t = e.getRootNode()
    if (t.nodeType === 9 || t.nodeType === 11) return t
  }
  return e.nodeType === 9 ? e : e.ownerDocument
}
var wm = R.d
R.d = { f: Tm, r: Em, D: km, C: Am, L: jm, m: Mm, X: Pm, S: Nm, M: Fm }
