function Vr(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === `input` &&
      (e.type === `text` ||
        e.type === `search` ||
        e.type === `tel` ||
        e.type === `url` ||
        e.type === `password`)) ||
      t === `textarea` ||
      e.contentEditable === `true`)
  )
}
var Hr = xn && `documentMode` in document && 11 >= document.documentMode,
  Ur = null,
  Wr = null,
  Gr = null,
  Kr = !1
