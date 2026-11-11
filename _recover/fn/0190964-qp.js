function qp(e, t) {
  return (e.tag === 6 || ((e = b(e)), t.observe(e)), !1)
}
Rp.prototype.unobserveUsing = function (e) {
  var t = this._observers
  if (t !== null && t.has(e)) {
    ;(t.delete(e), m(this._fragmentFiber.child, !1, Jp, e, void 0, void 0))
    for (var n = (t = 0); n < Yp.length; n++) {
      var r = Yp[n]
      r.fragmentInstance === this && r.observer === e ? e.unobserve(r.instance) : (Yp[t++] = r)
    }
    Yp.length = t
  }
}
