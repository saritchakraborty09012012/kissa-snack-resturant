function Kr(e, t) {
  var n = e.ref,
    r = e.refCleanup
  if (n !== null) {
    if (typeof r == `function`)
      try {
        r()
      } catch (n) {
        Ga(e, t, n)
      } finally {
        ;((e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null))
      }
    else if (typeof n == `function`)
      try {
        n(null)
      } catch (n) {
        Ga(e, t, n)
      }
    else n.current = null
  }
}
