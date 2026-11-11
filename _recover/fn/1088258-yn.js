function yn(e, t) {
  if (typeof t == `function`) {
    e = e()
    var n = t(e)
    return function () {
      typeof n == `function` ? n() : t(null)
    }
  }
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null
      }
    )
}
