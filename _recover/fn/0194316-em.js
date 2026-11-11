function em(e, t) {
  var n = e.ownerDocument.createRange()
  ;(n.selectNodeContents(e),
    (e = n.getBoundingClientRect()),
    window.scrollTo(
      window.scrollX + e.left,
      t ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight,
    ))
}
Rp.prototype.scrollIntoView = function (e) {
  if (typeof e == `object`) throw Error(i(566))
  var t = []
  m(this._fragmentFiber.child, !1, Gp, t, void 0, void 0)
  var n = !1 !== e
  if (t.length === 0) {
    var r = v(this._fragmentFiber)
    if (((r = n ? r[1] || r[0] || g(this._fragmentFiber) : r[0] || r[1]), r === null)) return
    if (r.tag === 6) {
      ;((e = b(r)), em(e, n))
      return
    }
    if (((r = b(r)), r.nodeType !== 9)) {
      if (r.nodeType === 11) {
        ;((n = `host` in r ? r.host : null), n !== null && n.scrollIntoView(e))
        return
      }
      r.scrollIntoView(e)
    }
  }
  for (r = n ? t.length - 1 : 0; r !== (n ? -1 : t.length);) {
    var a = t[r]
    ;(a.tag === 6 ? ((a = b(a)), em(a, n)) : b(a).scrollIntoView(e), (r += n ? -1 : 1))
  }
}
