function l(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !r(e, n)
  } catch {
    return !0
  }
}
