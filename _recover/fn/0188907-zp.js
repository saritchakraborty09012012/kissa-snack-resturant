function zp(e, t, n, r) {
  return (b(e).addEventListener(t, n, r), !1)
}
Rp.prototype.removeEventListener = function (e, t, n) {
  var r = this._eventListeners
  if (r !== null && ((t = Up(r, e, t, n)), t !== -1)) {
    var i = r[t]
    n = i.attachedListener
    var a = i.cleanup
    ;((i = Vp(i.optionsOrUseCapture)),
      m(this._fragmentFiber.child, !1, Bp, e, n, i),
      r.splice(t, 1),
      a !== null && a())
  }
}
