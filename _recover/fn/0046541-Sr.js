function Sr(e, t) {
  if (e === `change`) return t
}
var Cr = !1
if (xn) {
  var wr
  if (xn) {
    var Tr = `oninput` in document
    if (!Tr) {
      var Er = document.createElement(`div`)
      ;(Er.setAttribute(`oninput`, `return;`), (Tr = typeof Er.oninput == `function`))
    }
    wr = Tr
  } else wr = !1
  Cr = wr && (!document.documentMode || 9 < document.documentMode)
}
