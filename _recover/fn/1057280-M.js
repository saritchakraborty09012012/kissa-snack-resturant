function M(e) {
  if (e == null || typeof e == `string`) return e
  var t = null,
    n = Ef
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = e[n[r]]
      if (i != null) {
        if (i === `none`) return `none`
        t = t == null ? i : t + (` ` + i)
      }
    }
  return t ?? e.default
}
