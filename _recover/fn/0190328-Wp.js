function Wp(e, t) {
  return e.tag !== 6 && ((e = b(e)), gm(e, t))
}
Rp.prototype.focusLast = function (e) {
  var t = []
  m(this._fragmentFiber.child, !0, Gp, t, void 0, void 0)
  for (var n = t.length - 1; 0 <= n && !Wp(t[n], e); n--);
}
