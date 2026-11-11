function Up(e, t, n, r) {
  if (e.length === 0) return -1
  r = Hp(r)
  for (var i = 0; i < e.length; i++) {
    var a = e[i]
    if (a.type === t && a.listener === n && Hp(a.optionsOrUseCapture) === r) return i
  }
  return -1
}
;((Rp.prototype.dispatchEvent = function (e) {
  var t = g(this._fragmentFiber)
  if (t === null) return !0
  t = b(t)
  var n = this._eventListeners
  if ((n !== null && 0 < n.length) || !e.bubbles) {
    var r = t.nodeType === 9 ? t.createComment(``) : document.createTextNode(``)
    if (n)
      for (var i = 0; i < n.length; i++) {
        var a = n[i]
        r.addEventListener(a.type, a.attachedListener, Vp(a.optionsOrUseCapture))
      }
    if ((t.appendChild(r), (e = r.dispatchEvent(e)), n))
      for (i = 0; i < n.length; i++)
        ((a = n[i]),
          r.removeEventListener(a.type, a.attachedListener, Vp(a.optionsOrUseCapture)))
    return (t.removeChild(r), e)
  }
  return t.dispatchEvent(e)
}),
  (Rp.prototype.focus = function (e) {
    m(this._fragmentFiber.child, !0, Wp, e, void 0, void 0)
  }))
