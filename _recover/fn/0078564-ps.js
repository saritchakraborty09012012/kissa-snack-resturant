function ps(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !Pr(e, n)
  } catch {
    return !0
  }
}
