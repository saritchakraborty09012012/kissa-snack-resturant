function qn(e, t, n, r) {
  var i = n.type.getDerivedStateFromError
  if (typeof i == `function`) {
    var a = r.value
    ;((e.payload = function () {
      return i(a)
    }),
      (e.callback = function () {
        Wn(t, n, r)
      }))
  }
  var o = n.stateNode
  o !== null &&
    typeof o.componentDidCatch == `function` &&
    (e.callback = function () {
      ;(Wn(t, n, r),
        typeof i != `function` && (gf === null ? (gf = new Set([this])) : gf.add(this)))
      var e = r.stack
      this.componentDidCatch(r.value, { componentStack: e === null ? `` : e })
    })
}
