function Jt(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ``
  return (
    e && (r = Gt(e) ? (e.checked ? `true` : `false`) : e.value),
    (e = r),
    e !== n && (t.setValue(e), !0)
  )
}
var Yt = /[\n"\\]/g
