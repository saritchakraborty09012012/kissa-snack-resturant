function Rp(e) {
  ;((this._fragmentFiber = e), (this._observers = this._eventListeners = null))
}
Rp.prototype.addEventListener = function (e, t, n) {
  var r = null,
    i = null
  if (!(
    n != null &&
    typeof n != `boolean` &&
    ((r = n.signal || null), r !== null && r.aborted)
  )) {
    this._eventListeners === null && (this._eventListeners = [])
    var a = this._eventListeners
    if (Up(a, e, t, n) === -1) {
      var o = this,
        s = t
      ;(n != null &&
        typeof n != `boolean` &&
        !0 === n.once &&
        (s = function (r) {
          ;(o.removeEventListener(e, t, n),
            typeof t == `function` ? t.call(this, r) : t.handleEvent(r))
        }),
        r !== null &&
          ((i = o.removeEventListener.bind(o, e, t, n)),
          r.addEventListener(`abort`, i, { once: !0 }),
          (i = r.removeEventListener.bind(r, `abort`, i))),
        (r = Vp(n)),
        a.push({
          type: e,
          listener: t,
          optionsOrUseCapture: n,
          attachedListener: s,
          cleanup: i,
        }),
        m(this._fragmentFiber.child, !1, zp, e, s, r))
    }
    this._eventListeners = a
  }
}
