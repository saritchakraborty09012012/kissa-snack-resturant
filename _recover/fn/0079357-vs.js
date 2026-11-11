function vs(e, t) {
  var n = t.action,
    r = t.payload,
    i = e.state
  if (t.isTransition) {
    var a = L.T,
      o = {}
    ;((o.types = a === null ? null : a.types), (L.T = o))
    try {
      var s = n(i, r),
        c = L.S
      ;(c !== null && c(o, s), ys(e, t, s))
    } catch (n) {
      xs(e, t, n)
    } finally {
      ;(a !== null && o.types !== null && (a.types = o.types), (L.T = a))
    }
  } else
    try {
      ;((a = n(i, r)), ys(e, t, a))
    } catch (n) {
      xs(e, t, n)
    }
}
