function Zp(e, t, n) {
  ;(Yp.push({ fragmentInstance: e, observer: t, instance: n }),
    Xp ||
      ((Xp = !0),
      _m(function () {
        Xp = !1
        var e = Yp
        Yp = []
        for (var t = 0; t < e.length; t++) {
          var n = e[t]
          n.observer.unobserve(n.instance)
        }
      })))
}
Rp.prototype.getClientRects = function () {
  var e = []
  return (m(this._fragmentFiber.child, !1, Qp, e, void 0, void 0), e)
}
