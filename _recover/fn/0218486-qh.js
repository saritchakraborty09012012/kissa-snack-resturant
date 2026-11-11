function qh(e) {
  this._internalRoot = e
}
;((Jh.prototype.render = qh.prototype.render =
  function (e) {
    var t = this._internalRoot
    if (t === null) throw Error(i(409))
    var n = t.current
    mh(n, jd(), e, t, null, null)
  }),
  (Jh.prototype.unmount = qh.prototype.unmount =
    function () {
      var e = this._internalRoot
      if (e !== null) {
        this._internalRoot = null
        var t = e.containerInfo
        ;(mh(e.current, 2, null, e, null, null), zd(), (t[_t] = null))
      }
    }))
