function Kt(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !Ul(e, n)
  } catch {
    return !0
  }
}
