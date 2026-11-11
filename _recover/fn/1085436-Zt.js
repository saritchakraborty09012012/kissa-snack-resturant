function Zt(e, t) {
  var n = t.action,
    r = t.payload,
    i = e.state
  if (t.isTransition) {
    var a = Ro.T,
      o = {}
    ;((o.types = a === null ? null : a.types), (Ro.T = o))
    try {
      var s = n(i, r),
        c = Ro.S
      ;(c !== null && c(o, s), Qt(e, t, s))
    } catch (n) {
      en(e, t, n)
    } finally {
      ;(a !== null && o.types !== null && (a.types = o.types), (Ro.T = a))
    }
  } else
    try {
      ;((a = n(i, r)), Qt(e, t, a))
    } catch (n) {
      en(e, t, n)
    }
}
