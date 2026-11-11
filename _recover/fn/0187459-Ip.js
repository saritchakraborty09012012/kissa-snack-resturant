function Ip(e, t) {
  ;((this._scope = document.documentElement),
    (this._selector = `::view-transition-` + e + `(` + t + `)`))
}
;((Ip.prototype.animate = function (e, t) {
  return (
    (t = typeof t == `number` ? { duration: t } : D({}, t)),
    (t.pseudoElement = this._selector),
    this._scope.animate(e, t)
  )
}),
  (Ip.prototype.getAnimations = function () {
    for (
      var e = this._scope,
        t = this._selector,
        n = e.getAnimations({ subtree: !0 }),
        r = [],
        i = 0;
      i < n.length;
      i++
    ) {
      var a = n[i].effect
      a !== null && a.target === e && a.pseudoElement === t && r.push(n[i])
    }
    return r
  }),
  (Ip.prototype.getComputedStyle = function () {
    return getComputedStyle(this._scope, this._selector)
  }))
